import { PostArea } from "models";
import { useMutation, useQueryClient } from "react-query";
import { postArea } from "services/postArea.ts/postArea";


export const useCreateTask = () => {
    const queryClient = useQueryClient();
    const { mutate } = useMutation((taskObj: PostArea) => postArea(taskObj), {
        onSettled: () => queryClient.invalidateQueries("areas"),
    });

    const handleSubmit = (taskObj: PostArea) => mutate(taskObj);

    return {
        handleSubmit,
    };
};
