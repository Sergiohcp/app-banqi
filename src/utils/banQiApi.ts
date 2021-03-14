import axios from "axios";

const banQiApi = axios.create({
  baseURL: "https:/",
  timeout: 15000,
  headers: { "X-Custom-Header": "foobar" },
});

export default banQiApi;
