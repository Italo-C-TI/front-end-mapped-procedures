import { AxiosError } from 'axios';
import { HttpMethods, HttpStatusCodes } from 'http/codes';

export type HttpRequest = {
    url: string;
    method: HttpMethods;
    body?: any;
    params?: any;
    isFormData?: boolean;
};

export type HttpResponse<T = any> = {
    body: T;
    status: HttpStatusCodes;
    error?: AxiosError;
};