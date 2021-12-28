export interface iAlbum {
  userId: number;
  id: number;
  title: string;
}

export interface iPhotos {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}
