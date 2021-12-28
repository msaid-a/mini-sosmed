import useSWR from "swr";
import api from "../api";

export const useGetAlbumByUsers = (userId: number) => {
  const { data, error, isValidating, mutate } = useSWR(
    userId ? `/albums?userId=${userId}` : null,
    async () => {
      const respone = await api.sosmedApi.getAlbumsByUser(userId);
      return respone;
    },
    { revalidateOnFocus: false, errorRetryCount: 0 }
  );
    

  return { data, error, isValidating, mutate };
};
