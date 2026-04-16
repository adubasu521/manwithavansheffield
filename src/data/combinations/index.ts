import { manAndVanCombinations } from './man-and-van';
import { houseRemovalsCombinations } from './house-removals';
import { studentMovesCombinations } from './student-moves';
import { ikeaDeliveryCombinations } from './ikea-delivery';
import { officeRemovalsCombinations } from './office-removals';
import { furnitureDeliveryCombinations } from './furniture-delivery';

export interface CombinationEntry {
  serviceSlug: string;
  locationSlug: string;
  uniqueIntro: string;
  localProblems: string[];
  uniqueFaqs: { question: string; answer: string }[];
  pricingNote: string;
  localTip: string;
  nearbyComboSlugs: string[];
  relatedCombosInArea: string[];
}

export const combinations: CombinationEntry[] = [
  ...manAndVanCombinations,
  ...houseRemovalsCombinations,
  ...studentMovesCombinations,
  ...ikeaDeliveryCombinations,
  ...officeRemovalsCombinations,
  ...furnitureDeliveryCombinations,
];

export function getCombination(locationSlug: string, serviceSlug: string): CombinationEntry | undefined {
  return combinations.find(
    (c) => c.locationSlug === locationSlug && c.serviceSlug === serviceSlug
  );
}

export function getCombinationsByLocation(locationSlug: string): CombinationEntry[] {
  return combinations.filter((c) => c.locationSlug === locationSlug);
}

export function getCombinationsByService(serviceSlug: string): CombinationEntry[] {
  return combinations.filter((c) => c.serviceSlug === serviceSlug);
}
