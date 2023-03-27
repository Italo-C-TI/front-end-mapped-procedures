import { DefaultFnProps } from 'globalTypes';
import { deleteArea } from 'services';

import { useMutation } from 'react-query';

export const useDeleteArea = () => {
    const { mutate } = useMutation(deleteArea, {
        retry: false,
    });

    const handleDeleteArea = (areaId: string) => {
        return mutate(areaId);
    };

    return {
        handleDeleteArea,
    };
};
