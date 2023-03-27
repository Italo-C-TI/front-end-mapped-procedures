export type ResponseDeleteArea = {
    hasError: boolean;
};

export type DeleteArea = (areaId: string) => Promise<ResponseDeleteArea>;
