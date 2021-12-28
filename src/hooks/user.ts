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
  if (error) {
    alert("SomethingWrong");
  }
  return { data, error, isValidating, mutate };
};

export const useGetUserDetail = (id: number) => {
  const { data, error, isValidating, mutate } = useSWR(
    id ? `/user/${id}` : null,
    async () => {
      const respone = await api.sosmedApi.getUserDetail(id);
      return respone;
    },
    { revalidateOnFocus: false, errorRetryCount: 0 }
  );
  if (error) {
    alert("SomethingWrong");
  }
  return { data, error, isValidating, mutate };
};
