import React from 'react';
import { MapPinIcon, ClockIcon } from './icons';

interface Props {
  type: 'phone' | 'email' | 'location' | 'hours';
  size?: number;
  color?: string;
}

export default function ContactIcon({ type, size = 22, color = '#1E3A5F' }: Props) {
  switch (type) {
    case 'location':
      return <MapPinIcon size={size} color={color} />;
    case 'hours':
      return <ClockIcon size={size} color={color} />;
    default:
      return null;
  }
}
