import apiConfig from '../../config/api';
import {RatesRequest, RatesResponse} from '../../models/entities/auth';
import {productsClient} from './productsClient';

export interface IRatesService {
  postCalculation(requestBody: RatesRequest): Promise<RatesResponse>;
}

export const ProductsService: IRatesService = {
  postCalculation: (requestBody: RatesRequest) =>
    productsClient
      .post(apiConfig.RATES_POST_CALCULATE, requestBody)
      .then(response => {
        return response.data;
      }),
};
