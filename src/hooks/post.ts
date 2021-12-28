import useSWR from "swr";
import api from "../api";

export const useGetPostUser = (userId: number) => {
  const { data, error, isValidating, mutate } = useSWR(
    userId ? `/users/${userId}/posts` : null,
    async () => {
      const respone = await api.sosmedApi.getPostByUser(userId);
      return respone;
    },
    { revalidateOnFocus: false, errorRetryCount: 0 }
  );
  if (error) {
    alert("SomethingWrong");
  }
  return { data, error, isValidating, mutate };
};

export const useGetDetailPost = (id: number) => {
  const { data, error, isValidating, mutate } = useSWR(
    id ? `/posts/${id}` : null,
    async () => {
      const respone = await api.sosmedApi.getDetailPost(id);
      return respone;
    },
    { revalidateOnFocus: false, errorRetryCount: 0 }
  );
  if (error) {
    alert("SomethingWrong");
  }
  return { data, error, isValidating, mutate };
};

export const useGetPost = () => {
  const { data, error, isValidating, mutate } = useSWR(
    `/posts/`,
    async () => {
      const respone = await api.sosmedApi.getPost();
      return respone;
    },
    { revalidateOnFocus: false, errorRetryCount: 0 }
  );
  if (error) {
    alert("SomethingWrong");
  }
  return { data, error, isValidating, mutate };
};

export const useGetCommentPost = (id: number) => {
  const { data, error, isValidating, mutate } = useSWR(
    id ? `/posts/${id}/comments` : null,
    async () => {
      const respone = await api.sosmedApi.getCommentPost(id);
      return respone;
    },
    { revalidateOnFocus: false, errorRetryCount: 0 }
  );
  return { data, error, isValidating, mutate };
};
