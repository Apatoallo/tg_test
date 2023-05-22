import {
  GoogleMapsAutocompleteResponse,
  GoogleMapsDetailsResponse,
} from '../../models/entities/map';
import apiConfig from '../../config/api';
import { LatLng } from 'react-native-maps/lib/sharedTypes';
import { googleMapsClient } from './googleMapsClient';

export interface IGoogleMapsService {
  getSuggestions(
    text: string,
    latLng: LatLng,
    locale: string,
  ): Promise<GoogleMapsAutocompleteResponse>;
  getDetails(id: string, locale: string): Promise<GoogleMapsDetailsResponse>;
}

export const GoogleMapsService: IGoogleMapsService = {
  getSuggestions: (text: string, latLng: LatLng, locale: string) => {
    const req =
      apiConfig.GOOGLE_MAPS_AUTOCOMPLETE +
      `input=${text}&location=${latLng.latitude}-${latLng.longitude}&language=${locale}` +
      `&key=${apiConfig.GOOGLE_MAPS_KEY}`;
    return googleMapsClient.get(req).then(response => response.data);
  },
  getDetails: (id: string, locale: string) => {
    const req =
      apiConfig.GOOGLE_MAPS_DETAILS +
      `place_id=${id}&language=${locale}` +
      `&key=${apiConfig.GOOGLE_MAPS_KEY}`;
    return googleMapsClient.get(req).then(response => response.data);
  },
};
