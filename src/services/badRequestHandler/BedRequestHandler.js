import { fetchBaseQuery } from "@reduxjs/toolkit/query";
// import { login } from "../../routes/PagesUrl";
// import { toast } from "react-toastify";


export const dynamicBaseQuery = async (args, WebApi, extraOptions) => {
  const rawBaseQuery = fetchBaseQuery({
    baseUrl: "https://bigbetexchange.com/api/",
    // baseUrl: "http://192.168.1.204:8786/api/",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  const result = await rawBaseQuery(args, WebApi, extraOptions);
  if (result?.error) {
    const responseMessage = result?.error?.data?.message;
    const status = result?.error?.status;
    if (status === 401) {
      localStorage.clear();
      window.location.replace("/login");
    } else {
      // toast.error(responseMessage);
    }
  }
  if (result?.data.status === 200 || result?.data.status) {
    // toast.success(result?.data?.message);
  } else if (result?.data.status === false) {
    // toast.error(result?.data?.message);
  }
  return result;
};