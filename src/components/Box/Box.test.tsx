import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Box } from './Box';

describe('Box', () => {
  it('renders children correctly', () => {
    render(<Box>Test content</Box>);
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('applies correct padding classes', () => {
    const { container, rerender } = render(<Box padding="sm">Content</Box>);
    let box = container.firstChild as HTMLElement;
    expect(box).toHaveClass('p-2');

    rerender(<Box padding="lg">Content</Box>);
    box = container.firstChild as HTMLElement;
    expect(box).toHaveClass('p-6');
  });

  it('applies pixel-box class', () => {
    const { container } = render(<Box>Content</Box>);
    const box = container.firstChild as HTMLElement;
    expect(box).toHaveClass('pixel-box');
  });

  it('applies custom className', () => {
    const { container } = render(<Box className="custom-class">Content</Box>);
    const box = container.firstChild as HTMLElement;
    expect(box).toHaveClass('custom-class');
  });
});
