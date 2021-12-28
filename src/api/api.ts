import { iUser, iPost, iAlbum, iComment, iPhotos } from "../models/index";
import apiBase from "./base";

export interface iSosmed {
  getUser: () => Promise<iUser[]>;
  getUserDetail: (id: number) => Promise<iUser>;
  getPostByUser: (userId: number) => Promise<iPost[]>;
  getAlbumsByUser: (userId: number) => Promise<iAlbum[]>;
  getDetailPost: (postId: number) => Promise<iPost>;
  getPost: () => Promise<iPost[]>;
  getAlbum: () => Promise<iAlbum[]>;
  getCommentPost: (postId: number) => Promise<iComment[]>;
  getPhotosAlbum: (albumId: number) => Promise<iPhotos[]>;
  getDetailPhotos: (photosId: number) => Promise<iPhotos>;
  addPost: (data: iPost)  => Promise<any>,
  addComment: (data: iComment) => Promise<any>,
  putPost: (data: iPost, id:number) => Promise<any>,
  deletePost: (id: number) => Promise<any> 

}

const sosmedApi: iSosmed = {
  getUser: () => apiBase.get(`/users`),
  getUserDetail: (id: number) => apiBase.get(`/users/${id}`),
  getPostByUser: (UserId: number) => apiBase.get(`/users/${UserId}/posts`),
  getAlbumsByUser: (UserId: number) => apiBase.get(`/users/${UserId}/albums`),
  getDetailPost: (postId: number) => apiBase.get(`/posts/${postId}`),
  getPost: () => apiBase.get(`/posts`),
  getAlbum: () => apiBase.get(`/albums`),
  getCommentPost: (postId: number) => apiBase.get(`/posts/${postId}/comments`),
  getPhotosAlbum: (albumId: number) => apiBase.get(`/albums/${albumId}/photos`),
  getDetailPhotos: (photosId: number) => apiBase.get(`/photos/${photosId}`),
  addPost: (data: iPost) => apiBase.post(`/posts`, undefined, data),
  addComment: (data: iComment) => apiBase.post(`/comments`, undefined, data),
  putPost: (data: iPost, id: number) => apiBase.put(`/posts/${id}`, undefined, data),
  deletePost: (id: number) => apiBase.delete(`/posts/${id}`)

};

export default sosmedApi;
