import { gisClient } from './gisClient';
import { GisAddressResponse } from '../../models/entities/map';
import apiConfig from '../../config/api';
import { LatLng } from 'react-native-maps/lib/sharedTypes';

export interface IGisService {
  getAddressByLatLng(
    latLng: LatLng,
    locale: string,
  ): Promise<GisAddressResponse>;
  getSuggestions(
    text: string,
    latLng: LatLng,
    locale: string,
  ): Promise<GisAddressResponse>;
}

export const GisService: IGisService = {
  getAddressByLatLng: (latLng: LatLng, locale: string) =>
    gisClient
      .get(
        apiConfig.GIS_GEOCODER +
          `lon=${latLng.longitude}&lat=${latLng.latitude}` +
          `&fields=items.point,items.address,items.adm_div&locale=${locale}`,
      )
      .then(response => response.data),
  getSuggestions: (text: string, latLng: LatLng, locale: string) =>
    gisClient
      .get(
        apiConfig.GIS_SUGGEST +
          `q=${text}&location=${latLng.longitude},${latLng.latitude}&suggest_type=address` +
          `&fields=items.point,items.address,items.adm_div&locale=${locale}`,
      )
      .then(response => response.data),
};
