import {get, RESTURL} from "./common";

export const getStock = (symbol) => {
    const url = RESTURL.template("/api/ve/profile/AAPL")
        .toString();
    return get({url});
}
