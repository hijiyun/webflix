import axios from 'axios';

const API_TOKEN = process.env.REACT_APP_API_TOKEN

const api = axios.create({
  baseURL:"https://api.themoviedb.org/3/",
  headers:{"Content-Type" : "application/json",
          "Authorization": `Bearer ${API_TOKEN}`}
})

// Add a request interceptor // 요청 가로채기 추가
api.interceptors.request.use(function (config) {
  // Do something before request is sent // 요청이 전송되기 전에 수행
  console.log("request start",config)
  return config;
}, function (error) {
  // Do something with request error // 요청 오류가 있는 작업 수행
  console.log("request error", error)
  return Promise.reject(error);
});

// Add a response interceptor // 반응 가로채기 추가
api.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger // 2xx 범위 내에 있는 상태 코드는 이 함수를 트리거합니다
  // Do something with response data // 응답 데이터를 사용하여 작업 수행
  console.log("get response : ", response)
  return response;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger // 2xx 범위를 벗어나는 상태 코드는 이 기능을 트리거합니다
  // Do something with response error // 응답 오류가 있는 작업 수행
  console.log("response error", error)
  return Promise.reject(error);
});

export default api;