import { HttpMethods, HttpStatusCodes } from 'http/codes';
import { Endpoints } from 'http/endpoints';
import { request } from 'http/request';
import { DeleteArea } from './deleteArea.types';

export const deleteArea: DeleteArea = async (areaId: string) => {
    const response = await request({
        url: Endpoints.area.delete,
        method: HttpMethods.delete,
        params: {
            id: areaId,
        },
    });

    if (response.status === HttpStatusCodes.ok) {
        return {
            hasError: false,
        };
    }

    return {
        hasError: true,
    };
};
