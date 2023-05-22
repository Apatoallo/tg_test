import MockAdapter from 'axios-mock-adapter';
import { GisAddressResponse } from '../../models/entities/map';
import { AxiosInstance } from 'axios';

export const mockGis = (gisClient: AxiosInstance) => {
  const mock = new MockAdapter(gisClient, { delayResponse: 500 });
  mock.onAny().reply(() => {
    return [200, mockSuggestResponse];
  });
};

const mockSuggestResponse: GisAddressResponse = {
  meta: {
    api_version: '3.0.868748',
    code: 200,
    issue_date: '20220812',
  },
  result: {
    items: [
      {
        building_name: 'M Square',
        full_name: 'Dubai, M Square',
        id: '70030076190919314',
        name: 'M Square',
        purpose_name: 'Podium',
        type: 'building',
        point: {
          lat: 25.252065,
          lon: 55.289164,
        },
        address: {
          building_id: '13933647002373800',
          components: [
            {
              number: '37',
              street: '2c Street',
              street_id: '13933750081570647',
              type: 'street_number',
            },
          ],
          makani: '26230 92415',
        },
        adm_div: [
          {
            id: '14',
            name: 'UAE',
            type: 'country',
          },
          {
            id: '70030076147409277',
            name: 'Dubai Emirate',
            type: 'region',
          },
          {
            id: '13933634117435393',
            name: 'Dubai',
            type: 'city',
          },
          {
            id: '13934059319208595',
            name: 'Bur Dubai',
            type: 'division',
          },
          {
            id: '13933621232533573',
            name: 'Al Hudaiba',
            type: 'district',
          },
        ],
      },
      {
        address_comment: '3 Floor, Office 305',
        address_name: 'Aghaadir Building, 8, 25 Street',
        id: '70000001035010272',
        name: 'M.Al Shanghiti Real Estate Management',
        type: 'branch',
        point: {
          lat: 25.252688,
          lon: 55.292234,
        },
      },
      {
        address_name: 'M Residence, 3, 4c Street',
        building_name: 'M Residence',
        full_name: 'Dubai, M Residence',
        id: '13933647002605424',
        name: 'M Residence',
        purpose_name: 'Residential building',
        type: 'branch',
        point: {
          lat: 25.253324,
          lon: 55.302645,
        },
      },
      {
        address_comment: '2 Floor',
        address_name: 'Burjuman Mall, 2, 28a Street',
        id: '70000001029524628',
        name: 'H & M, clothing shop',
        type: 'branch',
        point: {
          lat: 25.252065,
          lon: 55.289164,
        },
      },
      {
        address_comment: 'G Floor',
        address_name: 'R A Lootah Building, 28, 27a Street',
        id: '70000001035720069',
        name: 'M City Mart, hypermarket',
        type: 'branch',
        point: {
          lat: 25.252065,
          lon: 55.289164,
        },
      },
      {
        address_comment: '29 Floor, Office 2903',
        address_name: 'H Hotel & Office Tower, 40, 2nd December Street',
        id: '70000001019894968',
        name: 'A & M Al Ansari Auditing',
        type: 'branch',
        point: {
          lat: 25.252065,
          lon: 55.289164,
        },
      },
      {
        address_name: 'M Square - Residence, 32/1a, Sheikh Zayed Road',
        building_name: 'M Square - Residence',
        full_name: 'Dubai, M Square - Residence',
        id: '70030076190919063',
        name: 'M Square - Residence',
        purpose_name: 'Residential building',
        type: 'branch',
        point: {
          lat: 25.252065,
          lon: 55.289164,
        },
      },
      {
        address_name:
          'DoubleTree by Hilton M Square Hotel, 32/1, Sheikh Zayed Road',
        building_name: 'DoubleTree by Hilton M Square Hotel',
        full_name: 'Dubai, DoubleTree by Hilton M Square Hotel',
        id: '70000001046065198',
        name: 'DoubleTree by Hilton M square, hotel',
        purpose_name: 'Hotel',
        type: 'branch',
        point: {
          lat: 25.252065,
          lon: 55.289164,
        },
      },
      {
        address_name: 'MM Towers, 32/1, Al Maktoum Road',
        building_name: 'MM Towers',
        full_name: 'Dubai, MM Towers',
        id: '13933647002439152',
        name: 'MM Towers',
        purpose_name: 'Administrative building',
        type: 'branch',
        point: {
          lat: 25.252065,
          lon: 55.289164,
        },
      },
      {
        address_comment: 'G Floor',
        address_name: 'The Dubai Mall, 3, Mohammed Bin Rashid Boulevard',
        id: '70000001007104410',
        name: 'H & M, clothing shop',
        type: 'branch',
        point: {
          lat: 25.252065,
          lon: 55.289164,
        },
      },
    ],
    total: 83,
  },
};

/*
const mockAddressResponse: GisAddressResponse = {
  meta: {
    api_version: '3.0.868748',
    code: 200,
    issue_date: '20220810',
  },
  result: {
    items: [
      {
        address_name: 'Avenue Residence, 4, 35 Street',
        building_name: 'Avenue Residence',
        full_name: 'Dubai, Al Mankhool',
        id: '13933621232533565',
        name: 'Al Mankhool',
        point: {
          lat: 25.24906,
          lon: 55.294887,
        },
        purpose_name: 'Residential building',
        type: 'adm_div',
        subtype: 'district',
      },
    ],
    total: 1,
  },
};
*/
