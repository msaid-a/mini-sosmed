import api from "../api";
import useSWR from "swr";

export const useGetUser = () => {
  const { data, error, isValidating, mutate } = useSWR(
    "/user",
    async () => {
      const respone = await api.sosmedApi.getUser();
      return respone;
    },
    { revalidateOnFocus: false, errorRetryCount: 0 }
  );
  return { data, error, isValidating, mutate };
};
