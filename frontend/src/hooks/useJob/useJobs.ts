import { AxiosResponse } from 'axios';
import { JobsResponse } from 'protocols/external/job/job';
import { GetClient } from 'services/httpClient/get';

export const useJobs = () => {
  const findJobs = async () => {
    const getClient = new GetClient();

    return await getClient.get<AxiosResponse<JobsResponse>>({
      url: '/job',
    });
  };

  return {
    findJobs,
  };
};
