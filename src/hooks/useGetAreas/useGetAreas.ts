import { useQuery } from "react-query";
import { getAreas } from "services";

export const useGetAreas = () => {
    const { data, isError, isLoading, isSuccess, refetch } = useQuery(
        "areas",
        () => getAreas()
    );

    const refresh = () => refetch();

    return {
        areasList: isSuccess ? data?.areas : [],
        isError,
        isLoading,
        refresh,
    };
};
