import useSWR from "swr";
import api from "../api";

export const useGetPostUser = (userId: number) => {
  const { data, error, isValidating, mutate } = useSWR(
    userId ? `/posts?userId=${userId}` : null,
    async () => {
      const respone = await api.sosmedApi.getPostByUser(userId);
      return respone;
    },
    { revalidateOnFocus: false, errorRetryCount: 0 }
  );
  return { data, error, isValidating, mutate };
};
