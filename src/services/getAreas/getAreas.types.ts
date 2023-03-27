
import { PageParams } from 'globalTypes';
import { Area } from 'models';

export type GetAreasResponse = { areas: Area[] };

export type GetAreas = (params?: PageParams) => Promise<GetAreasResponse>;
