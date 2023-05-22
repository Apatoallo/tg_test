import {ProductsService} from '../../services/map/productsService';
import {RatesResponse, RatesRequest} from '../../models/entities/rates/index';
import {createAsyncThunk} from '@reduxjs/toolkit';

import {ProblemDetails} from '../../models/entities/api';

export const postCalculation = createAsyncThunk<
  RatesResponse,
  {
    requestBody: RatesRequest;
  },
  {rejectValue: ProblemDetails | undefined}
>('rates/postCalculation', async ({requestBody}) => {
  return await ProductsService.postCalculation(requestBody);
});
