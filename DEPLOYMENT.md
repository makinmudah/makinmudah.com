# Deployment Guide - makinmudah.com

This document provides step-by-step instructions for deploying the application to makinmudah.com.

## Prerequisites

- Git repository pushed to GitHub/GitLab/Bitbucket
- Access to domain registrar for makinmudah.com
- Account on your chosen hosting platform (Vercel, Netlify, Cloudflare Pages, etc.)

## Deployment Steps

### 1. Choose Your Hosting Platform

We recommend one of these platforms for Nuxt 3 deployment:

- **Vercel** (Recommended) - Zero-config Nuxt.js support
- **Netlify** - Popular with great DX
- **Cloudflare Pages** - Fast edge deployment
- **DigitalOcean App Platform** - Full control
- **AWS Amplify** - Enterprise option

### 2. Deploy the Application

#### Option A: Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

Or use the Vercel Dashboard:

1. Visit https://vercel.com/new
2. Import your Git repository
3. Vercel auto-detects Nuxt.js configuration
4. Click "Deploy"

#### Option B: Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy

# Deploy to production
netlify deploy --prod
```

Or use the Netlify Dashboard:

1. Visit https://app.netlify.com/start
2. Connect your Git repository
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.output/public`
4. Click "Deploy site"

#### Option C: Cloudflare Pages

1. Visit https://dash.cloudflare.com/
2. Go to Pages → Create a project
3. Connect your Git repository
4. Build settings:
   - Framework preset: Nuxt.js
   - Build command: `npm run build`
   - Build output directory: `.output/public`
5. Click "Save and Deploy"

### 3. Configure Environment Variables

In your hosting platform dashboard, add these environment variables:

```env
NUXT_PUBLIC_SITE_URL=https://makinmudah.com
NUXT_PUBLIC_SITE_NAME=Makin Mudah
NODE_ENV=production
NUXT_DEVTOOLS=false
```

**Important**: After adding environment variables, trigger a new deployment to apply them.

### 4. Configure Custom Domain (makinmudah.com)

#### Step 4.1: Add Domain to Hosting Platform

**Vercel:**

1. Go to Project Settings → Domains
2. Add "makinmudah.com"
3. Add "www.makinmudah.com" (optional)
4. Note the DNS records provided

**Netlify:**

1. Go to Domain Settings → Add custom domain
2. Enter "makinmudah.com"
3. Follow the DNS configuration wizard

**Cloudflare Pages:**

1. Go to Custom domains
2. Add "makinmudah.com"
3. If using Cloudflare DNS, records auto-configure

#### Step 4.2: Configure DNS Records

Log in to your domain registrar (where you purchased makinmudah.com) and add these DNS records:

**Option 1: Using A Record (if your host provides IP addresses)**

| Type  | Name | Value                 | TTL  |
| ----- | ---- | --------------------- | ---- |
| A     | @    | [Host IP Address]     | 3600 |
| CNAME | www  | [Your deployment URL] | 3600 |

**Option 2: Using ALIAS/ANAME Record (Recommended)**

| Type  | Name | Value                 | TTL  |
| ----- | ---- | --------------------- | ---- |
| ALIAS | @    | [Your deployment URL] | 3600 |
| CNAME | www  | makinmudah.com        | 3600 |

**Example for Vercel:**

```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**Example for Netlify:**

```
Type: A
Name: @
Value: 75.2.60.5

Type: CNAME
Name: www
Value: [your-site].netlify.app
```

**Example for Cloudflare Pages:**

```
Type: CNAME
Name: @
Value: [your-project].pages.dev

Type: CNAME
Name: www
Value: [your-project].pages.dev
```

### 5. Enable HTTPS/SSL

Most modern hosting platforms automatically provision SSL certificates:

- **Vercel**: Automatic via Let's Encrypt
- **Netlify**: Automatic via Let's Encrypt
- **Cloudflare**: Automatic via Cloudflare SSL

**Wait 5-60 minutes** for SSL certificate to be issued after DNS propagation.

### 6. Verify Deployment

Once DNS has propagated (5-60 minutes), verify your deployment:

#### Test Root Domain

```bash
curl https://makinmudah.com
```

#### Test WWW Subdomain

```bash
curl https://www.makinmudah.com
```

#### Test Health Check Endpoint

```bash
curl https://makinmudah.com/api/health
```

Expected response:

```json
{
  "status": "OK",
  "timestamp": 1234567890123
}
```

#### Test in Browser

1. Visit https://makinmudah.com
2. Verify site loads correctly
3. Check browser console for errors
4. Verify HTTPS padlock is showing

#### Check DNS Propagation

```bash
# Check if DNS has propagated globally
nslookup makinmudah.com

# Or use online tools:
# https://dnschecker.org
# https://www.whatsmydns.net
```

### 7. Configure WWW Redirect (Optional)

Decide whether to redirect www to non-www or vice versa:

**Redirect www → non-www (Recommended)**

- Users visiting www.makinmudah.com → makinmudah.com

**Redirect non-www → www**

- Users visiting makinmudah.com → www.makinmudah.com

Most platforms handle this in the dashboard:

- **Vercel**: Automatically redirects www to root
- **Netlify**: Domain Settings → HTTPS → Force HTTPS, Configure redirects
- **Cloudflare**: Page Rules → Forwarding URL

### 8. Set Up Continuous Deployment

Ensure automatic deployments are configured:

1. **Production Branch**: `main` or `master`
2. **Auto-deploy**: Enabled for production branch
3. **Preview Deployments**: Enabled for pull requests (optional)

Test by pushing a commit:

```bash
git commit --allow-empty -m "test: trigger deployment"
git push origin main
```

Watch the deployment in your platform's dashboard.

## Troubleshooting

### Issue: Domain not resolving

**Solution:**

- Wait for DNS propagation (up to 48 hours, usually 5-60 minutes)
- Verify DNS records are correct using `nslookup makinmudah.com`
- Check for typos in DNS configuration
- Clear your local DNS cache: `sudo dscacheutil -flushcache` (Mac) or `ipconfig /flushdns` (Windows)

### Issue: SSL certificate error

**Solution:**

- Wait for SSL provisioning (5-60 minutes after DNS propagation)
- Verify DNS is correctly pointing to your host
- Check hosting platform's SSL settings
- Try disabling and re-enabling SSL in platform dashboard

### Issue: Site shows 404 or "Not Found"

**Solution:**

- Verify build completed successfully in deployment logs
- Check `Output Directory` is set to `.output/public`
- Verify all environment variables are set
- Rebuild the site from platform dashboard

### Issue: API endpoints returning errors

**Solution:**

- Check server-side logs in platform dashboard
- Verify `server/` directory is included in deployment
- Check `NUXT_PUBLIC_SITE_URL` environment variable
- Ensure Node version matches `.nvmrc` (20.11.0)

### Issue: Styles not loading (Tailwind CSS)

**Solution:**

- Verify build logs show Tailwind compilation
- Check `assets/css/main.css` is included
- Clear browser cache
- Verify `@nuxtjs/tailwindcss` is in dependencies (not devDependencies)

## Post-Deployment Checklist

- [ ] Site accessible at https://makinmudah.com
- [ ] WWW redirect working (if configured)
- [ ] HTTPS/SSL certificate active (green padlock)
- [ ] Health check endpoint returning 200 OK
- [ ] All pages loading without errors
- [ ] Tailwind CSS styles applied correctly
- [ ] No console errors in browser
- [ ] Lighthouse score > 90 for Performance
- [ ] Automatic deployments working on push to main
- [ ] Environment variables configured correctly
- [ ] Analytics/monitoring setup (if applicable)

## Monitoring & Maintenance

### Monitor Deployment Health

- Set up uptime monitoring: https://uptimerobot.com or https://www.hetrixtools.com
- Monitor health endpoint: `https://makinmudah.com/api/health`
- Enable error tracking: Sentry, LogRocket, or platform-native tools

### Regular Maintenance

- Keep dependencies updated: `npm update`
- Monitor security vulnerabilities: `npm audit`
- Review deployment logs weekly
- Test health endpoint periodically

## Support Resources

- **Vercel Docs**: https://vercel.com/docs
- **Netlify Docs**: https://docs.netlify.com
- **Cloudflare Pages Docs**: https://developers.cloudflare.com/pages
- **Nuxt Deployment**: https://nuxt.com/docs/getting-started/deployment

## Contact

For deployment issues specific to this project, contact the development team.
