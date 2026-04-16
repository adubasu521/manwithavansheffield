import React from 'react';
import { RosetteDiscountCheckIcon, ShieldIcon, CalendarIcon, ClockIcon, BoltIcon, MapPinIcon } from './icons';

interface Props {
  title: string;
  className?: string;
}

const iconMap: Record<string, React.ComponentType<{ size?: number; color?: string; className?: string; strokeWidth?: number }>> = {
  'Fixed-Price Quotes': RosetteDiscountCheckIcon,
  'Fully Insured': ShieldIcon,
  '7 Days a Week': CalendarIcon,
  'Same-Day Available': BoltIcon,
  'Price Match Guarantee': ClockIcon,
  'Local Leeds Knowledge': MapPinIcon,
};

export default function UspIcon({ title, className }: Props) {
  const Icon = iconMap[title];
  if (!Icon) return null;
  return <Icon size={28} color="#1E3A5F" strokeWidth={2} className={className} />;
}
