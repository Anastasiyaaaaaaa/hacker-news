import { NEWSTORIES_API_URL, API_URL } from "./constants";
import axios from "axios";

export const baseRequest = async(id) => {
    try {
        const { data: request } = await axios.get(`${API_URL}item/${id}.json?print=pretty`);
        return request;
    } catch (error) {
        console.log('error in baseRequest: ', error);
        return {};
    }
};

export const storiesIdsRequest = async() => {
    try {
        const { data: request } = await axios.get(NEWSTORIES_API_URL);
        return request;
    } catch (error) {
        console.log('error in storiesIdsRequest: ', error);
        return {};
    }
};