import { render, screen } from '@testing-library/react';
import Template from './Template';
import { it, describe, expect } from 'vitest';

describe('Template', () => {
  it('should render the content', () => {
    const content = '8==D';
    render(<Template content={content} />);

    const p = screen.getByText(new RegExp(content));

    expect(p).toHaveTextContent(content);
  });

  it('should render render "No content"', () => {
    const content = 'No content';
    render(<Template content={''} />);

    const p = screen.getByText(new RegExp(content));

    expect(p).toHaveTextContent(content);
  });
});

