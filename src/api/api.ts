import { iUser, iPost, iAlbum } from "../models/index";
import apiBase from "./base";

export interface iSosmed {
  getUser: () => Promise<iUser[]>;
  getUserDetail: (id: number) => Promise<iUser>;
  getPostByUser: (userId: number) => Promise<iPost[]>;
  getAlbumsByUser: (userId: number) => Promise<iAlbum[]>;
}

const sosmedApi: iSosmed = {
  getUser: () => apiBase.get(`/users`),
  getUserDetail: (id: number) => apiBase.get(`/users/${id}`),
  getPostByUser: (UserId: number) => apiBase.get(`/posts?userId=${UserId}`),
  getAlbumsByUser: (UserId: number) => apiBase.get(`/albums?userId=${UserId}`),
};

export default sosmedApi;
