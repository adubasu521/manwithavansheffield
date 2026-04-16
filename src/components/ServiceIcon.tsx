import React from 'react';
import {
  TruckElectricIcon,
  HomeIcon,
  UsersIcon,
  BoltIcon,
  MapPinIcon,
  HandHeartIcon,
  FilledCheckedIcon,
  ShieldIcon,
} from './icons';

interface Props {
  slug: string;
  size?: number;
  color?: string;
  className?: string;
}

const iconMap: Record<string, React.ComponentType<{ size?: number; color?: string; className?: string; strokeWidth?: number }>> = {
  'man-and-van-leeds': TruckElectricIcon,
  'house-removals-leeds': HomeIcon,
  'student-moves-leeds': UsersIcon,
  'office-removals-leeds': BoltIcon,
  'ikea-delivery-leeds': TruckElectricIcon,
  'furniture-delivery-leeds': HomeIcon,
  'long-distance-removals': MapPinIcon,
  'packing-service-leeds': FilledCheckedIcon,
  'piano-moving-leeds': ShieldIcon,
  'single-item-delivery': TruckElectricIcon,
  'storage-collection-leeds': HandHeartIcon,
  'end-of-tenancy-clearance': HomeIcon,
};

export default function ServiceIcon({ slug, size = 32, color = '#1E3A5F', className = '' }: Props) {
  const Icon = iconMap[slug] ?? TruckElectricIcon;
  return <Icon size={size} color={color} strokeWidth={2} className={className} />;
}
