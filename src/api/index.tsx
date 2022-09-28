import { AxiosRequestConfig } from 'axios';

import { axiosInstance } from '@/api/axios-instance';

export interface SickResBody {
  sickCd: string;
  sickNm: string;
}

interface GetManySickQuery {
  q: string;
}
export const getManySick = {
  url: '/sick',
  async request(query: GetManySickQuery, config?: AxiosRequestConfig): Promise<SickResBody[]> {
    console.log('call api');
    return axiosInstance.get(this.url, {
      params: query,
      ...config,
    });
  },
};
