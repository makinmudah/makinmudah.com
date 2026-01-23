# Open Graph Image Requirements

## Image Specifications

**File Name**: `og-image.jpg`
**Location**: `/public/images/og-image.jpg`
**Dimensions**: 1200x630px (1.91:1 aspect ratio)
**Format**: JPG or PNG
**File Size**: <300KB for fast loading
**Safe Zone**: Keep important content within 1200x600px (centered) for various crops

## Design Requirements

The Open Graph image should include:

1. **Makin Mudah Logo**
   - Prominently displayed
   - High contrast for visibility

2. **Tagline**
   - "Solusi IT Sederhana untuk Bisnis & Belajar"
   - Large, readable typography (minimum 60px font size)

3. **Brand Colors**
   - Teal (#14B8A6)
   - Navy (#1E3A8A)
   - Orange (#F59E0B)

4. **Visual Style**
   - Clean, modern design
   - Professional yet approachable
   - Avoid small text (will be hard to read in previews)

## Design Tips

- Use high contrast between text and background
- Test preview at smaller sizes (Facebook/Twitter will crop)
- Avoid placing critical content near edges
- Keep design simple - it will be viewed at various sizes
- Consider adding subtle pattern or gradient for visual interest

## Tools

Design the image using:

- Figma (recommended)
- Canva
- Adobe Photoshop/Illustrator
- Or any graphic design tool

## Testing

After creating the image:

1. Place file at `/public/images/og-image.jpg`
2. Test Facebook preview: https://developers.facebook.com/tools/debug/
3. Test Twitter preview: https://cards-dev.twitter.com/validator
4. Verify image displays correctly at different sizes

## Current Status

⚠️ **TODO**: OG image needs to be created by designer
The SEO implementation references this image, but the actual file needs to be designed and added.

## References

- Facebook OG Image Guidelines: https://developers.facebook.com/docs/sharing/webmasters/images/
- Twitter Card Guidelines: https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/summary-card-with-large-image
