import {iUser} from '../models/user'
import apiBase from './base'



export interface iSosmed {
    getUser: () =>  Promise<iUser[]>,
}

const sosmedApi : iSosmed = {
    getUser :() => apiBase.get(`/users`),
}



export default sosmedApi