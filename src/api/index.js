/*
 * @Author: luoxi
 * @LastEditTime: 2022-03-16 22:18:53
 * @LastEditors: your name
 * @Description: 
 */
import Axios from "axios";
import baseURL, { URLs } from "./URLs "

// const appkey = 'aa5772429_1571815407542';
const appkey = 'dd_1597654682810';

const instance = Axios.create({
    baseURL,
    params: {
        appkey,
    },
});
instance.interceptors.response.use(value => value.data);


const getSideList = (type) => instance.get(
    URLs.getSide,
    { params: { type } },
);

const getGoodsList = (type, page, size, sort) => instance.get(
    URLs.getGoodsList,
    { params: { type, page, size, sort } }

)

const likeSearch = (value) => instance.get(
    URLs.likeSearch,
    { params: { likeValue: value } }
)

const search = (type, page, size) => instance.get(
    URLs.search,
    { params: { type, page, size } }
)

export default {
    getSideList,
    getGoodsList,
    likeSearch,
    search
}