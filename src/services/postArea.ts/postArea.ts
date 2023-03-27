import { request } from 'http/request';
import { HttpMethods, HttpStatusCodes } from 'http/codes';
import { Endpoints } from 'http/endpoints';
import { PostArea } from 'models';

export const postArea = async (areaObj: PostArea) => {
  const response = await request({
    url: Endpoints.area.create,
    method: HttpMethods.post,
    body: areaObj
  });

  switch (response.status) {
    case HttpStatusCodes.created:
      return {
        hasError: false,
      };
    default:
      return {
        hasError: true,
      };
  }
};
