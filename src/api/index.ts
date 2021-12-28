import sosmedApi, { iSosmed } from "./api";

interface IApi {
    sosmedApi: iSosmed
}

const api: IApi = {
    sosmedApi,
}

export default api;
