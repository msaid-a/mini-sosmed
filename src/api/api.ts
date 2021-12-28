import { iUser, iPost, iAlbum, iComment, iPhotos } from "../models/index";
import apiBase from "./base";

export interface iSosmed {
  getUser: () => Promise<iUser[]>;
  getUserDetail: (id: number) => Promise<iUser>;
  getPostByUser: (userId: number) => Promise<iPost[]>;
  getAlbumsByUser: (userId: number) => Promise<iAlbum[]>;
  getDetailPost: (postId: number) => Promise<iPost>;
  getCommentPost: (postId: number) => Promise<iComment[]>;
  getPhotosAlbum: (albumId: number) => Promise<iPhotos[]>;
  getDetailPhotos: (photosId: number) => Promise<iPhotos>

}

const sosmedApi: iSosmed = {
  getUser: () => apiBase.get(`/users`),
  getUserDetail: (id: number) => apiBase.get(`/users/${id}`),
  getPostByUser: (UserId: number) => apiBase.get(`/users/${UserId}/posts`),
  getAlbumsByUser: (UserId: number) => apiBase.get(`/users/${UserId}/albums`),
  getDetailPost: (postId: number) => apiBase.get(`/posts/${postId}`),
  getCommentPost: (postId: number) => apiBase.get(`/posts/${postId}/comments`),
  getPhotosAlbum: (albumId: number) => apiBase.get(`/albums/${albumId}/photos`),
  getDetailPhotos: (photosId: number) => apiBase.get(`/photos/${photosId}`)

};

export default sosmedApi;
