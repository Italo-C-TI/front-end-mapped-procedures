import { request } from "http/request";
import { HttpMethods, HttpStatusCodes } from "http/codes";
import { Endpoints } from "http/endpoints";
import { GetAreas, GetAreasResponse } from "./getAreas.types";
import { PageParams } from "globalTypes";

export const getAreas: GetAreas = async (params?: PageParams) => {
    const response = await request<GetAreasResponse>({
        url: Endpoints.area.list,
        method: HttpMethods.get,
        ...params
    });

    switch (response.status) {
        case HttpStatusCodes.ok:
            return response.body;
        default:
            throw new Error(response.error?.message);
    }
};
