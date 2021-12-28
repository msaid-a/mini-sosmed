import useSWR from "swr";
import api from "../api";

export const useGetAlbumByUsers = (userId: number) => {
  const { data, error, isValidating, mutate } = useSWR(
    userId ? `/users/${userId}/albums` : null,
    async () => {
      const respone = await api.sosmedApi.getAlbumsByUser(userId);
      return respone;
    },
    { revalidateOnFocus: false, errorRetryCount: 0 }
  );
    

  return { data, error, isValidating, mutate };
};

export const useGetPhotosAlbum = (albumId: number) => {
    const { data, error, isValidating, mutate } = useSWR(
      albumId ? `/albums/${albumId}/photos` : null,
      async () => {
        const respone = await api.sosmedApi.getPhotosAlbum(albumId);
        return respone;
      },
      { revalidateOnFocus: false, errorRetryCount: 0 }
    );
      
  
    return { data, error, isValidating, mutate };
  };

  export const useGetDetailPhotos = (photosId: number) => {
    const { data, error, isValidating, mutate } = useSWR(
      photosId ? `/photos/${photosId}` : null,
      async () => {
        const respone = await api.sosmedApi.getDetailPhotos(photosId);
        return respone;
      },
      { revalidateOnFocus: false, errorRetryCount: 0 }
    );
      
  
    return { data, error, isValidating, mutate };
  };
  