/*
 * @Author: luoxi
 * @LastEditTime: 2022-03-13 22:16:02
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

export default {
    getSideList,
    getGoodsList
}