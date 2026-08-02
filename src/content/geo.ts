import { coreCommunitites } from './communities-core';
import { newCommunities } from './communities-new';
import { zipGuides } from './zip-guides';
import type { GeoArea } from './geo-types';

export type { GeoArea, GeoFact, GeoFaq, GeoLink, GeoSection } from './geo-types';

/** Every hyperlocal area page — existing communities, new communities, zip guides. */
export const allGeoAreas: GeoArea[] = [...coreCommunitites, ...newCommunities, ...zipGuides];

const byPath = new Map(allGeoAreas.map((area) => [area.path, area]));

export function getGeoArea(path: string): GeoArea | undefined {
  return byPath.get(path);
}

/** New community pages served by the communities/[slug] dynamic route. */
export { newCommunities };

/** Zip-code guides served by las-vegas-zip-codes/[zip]. */
export { zipGuides };

export const newCommunitySlugs = newCommunities.map((a) => a.path.split('/')[1]);

export const zipSlugs = zipGuides.map((a) => a.path.split('/')[1]);
