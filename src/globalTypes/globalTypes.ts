export interface DefaultFnProps {
    onSuccess: () => void;
    onError: () => void;
}

export type PageParams = {
    page?: number;
    size?: number;
};
