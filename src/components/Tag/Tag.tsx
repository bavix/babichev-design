import React from 'react';
import { Button } from '../Button';

export interface TagProps {
  children: string;
  href?: string;
  onClick?: () => void;
}

export const Tag: React.FC<TagProps> = ({ children, href, onClick }) => {
  const content = children.toUpperCase();

  if (href) {
    return (
      <a href={href} className="inline-block">
        <Button size="xs">{content}</Button>
      </a>
    );
  }

  if (onClick) {
    return (
      <Button size="xs" onClick={onClick}>
        {content}
      </Button>
    );
  }

  return <Button size="xs">{content}</Button>;
};
