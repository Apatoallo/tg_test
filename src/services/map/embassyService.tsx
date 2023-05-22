import apiConfig from '../../config/api';
import { embassyClient } from './embassyClient';
import { Embassy, EmbassyDetail } from '../../models/entities/embassy';

export interface IEmbassyService {
  getEmbassyList(): Promise<Embassy[]>;
  getEmbassy(consulateCode: string): Promise<EmbassyDetail>;
}

export const EmbassyService: IEmbassyService = {
  getEmbassyList: () =>
    embassyClient
      .get(apiConfig.EMBASSY_LIST)
      .then(response => response.data.list),
  getEmbassy: (consulateCode: string) =>
    embassyClient
      .get(apiConfig.EMBASSY_DETAIL + consulateCode)
      .then(response => response.data),
};
