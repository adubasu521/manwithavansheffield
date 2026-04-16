import React from 'react';
import { StarIcon } from './icons';

interface Props {
  rating?: number;
  size?: number;
  color?: string;
}

export default function StarRating({ rating = 5, size = 20, color = '#F59E0B' }: Props) {
  return (
    <div className="flex gap-1" style={{ color }}>
      {Array.from({ length: rating }).map((_, i) => (
        <StarIcon key={i} size={size} color={color} strokeWidth={1.5} />
      ))}
    </div>
  );
}
