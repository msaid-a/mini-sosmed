import {iUser, iPost} from '../models/index'
import apiBase from './base'



export interface iSosmed {
    getUser: () =>  Promise<iUser[]>,
    getUserDetail: (id: number) =>  Promise<iUser>,
    getPostByUser: (userId: number) => Promise<iPost[]>
}

const sosmedApi : iSosmed = {
    getUser :() => apiBase.get(`/users`),
    getUserDetail :(id: number) => apiBase.get(`/users/${id}`),
    getPostByUser :(UserId: number) => apiBase.get(`/posts?userId=${UserId}`),


}



export default sosmedApi