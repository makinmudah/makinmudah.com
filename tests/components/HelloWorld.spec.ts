import { render, screen } from '@testing-library/vue'
import { describe, it, expect } from 'vitest'

// Simple component for testing
const HelloWorld = {
  template: '<div>Hello World</div>',
}

describe('HelloWorld', () => {
  it('renders hello world message', () => {
    render(HelloWorld)
    expect(screen.getByText('Hello World')).toBeInTheDocument()
  })

  it('component exists in DOM', () => {
    const { container } = render(HelloWorld)
    expect(container.querySelector('div')).toBeTruthy()
  })
})
