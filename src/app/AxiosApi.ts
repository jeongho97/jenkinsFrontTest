import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000";
export const IMG_PATH = "http://localhost:9003";
export const defaultAxios = async (url: any, method: any, data: any) => {
    console.log(`url : ${url}`);
    return await axios({
        method,
        url,
        data,
        headers: {
            Authorization: `Bearer ${localStorage.getItem("loginUser")}`,
        },
    });
};
export const AuthAxios = async (url: any, method: any, data: any) => {
    console.log(`url : ${url}`);
    return await axios({
        method,
        url,
        data,
        headers: {
            Authorization: `Bearer ${localStorage.getItem("loginUser")}`,
        },
    });
};
export const fileAxios = async (url: any, method: any, data: any) => {
    // console.log(`url : ${url}`);
    const response = await axios({
      url,
      method,
      data,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("loginUser")}`,
      },
    });
    //console.log(response);
    return response.data;
  };
