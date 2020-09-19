import UrlAssembler from "url-assembler";
import axios from "axios";

export const RESTURL = UrlAssembler(process.env.YAHOO_API_URL);

const METHOD = {
    GET: "GET",
};

const getHeaders = () => {
    let headers = {
        authorization: process.env.API_KEY,
        accept: "application/json",
    };
    return { headers }
}

const axiosWrap = (params) => {
    const headers = getHeaders();
    return axios({
        ...headers,
        ...params,
    });
}

export const get = (params) => {
    return axios({
        method: METHOD.GET,
        ...params,
    });
}
