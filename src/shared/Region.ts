export type Region = 'BN' | 'BH' | 'BG' | 'BZ' | 'NL' | 'SH' | 'SB' | 'KU' | 'CH' | 'None';
export type RegionCase = 'regionNotActive' | 'noRegionSet' | 'regionActive';

export interface RegionContent {
  Active: Region[];
  en: any;
  mn: any;
}

export interface RegionContentResponse {
  status: 400 | 304 | 200 | number;
  payload: RegionContent | null;
}
