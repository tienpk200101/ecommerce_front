// import Axios, { AxiosError, AxiosResponse, Method } from 'axios';
// import { MESSAGE_ERROR } from '../constants/message';
// import { StatusCodes } from 'http-status-codes';
// import { ErrorData, Object, RequestOptions } from '../../types/globals';
// import { swalClose, swalError, swalLoading, swalSuccess } from '../helpers/swal';
// import { ROUTE } from '../constants/route/router';

// type DefaultResponse = {
//   status: boolean;
//   message: string;
//   data: any;
//   code: number;
//   error: ErrorData;
// };

// const defaultErrorResponse = {
//   status: false,
//   message: MESSAGE_ERROR.SOMETHINGS_WENT_WRONG,
//   code: 500,
//   data: null,
//   error: null,
// };
// const axios = Axios.create({
//   baseURL: process.env.REACT_APP_API_HOST,
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//   },
// });
// // @ts-ignore
// axios.interceptors.request.use(function (config) {
//   let customHeaders = {
//     Authorization: '',
//   };

//   let accessToken = localStorage.getItem('accessToken');
//   if (accessToken) {
//     customHeaders.Authorization = `Bearer ${accessToken}`;
//   }
//   return {
//     ...config,
//     headers: {
//       ...customHeaders,
//       ...config.headers,
//     },
//   };
// });
// const handleSuccessResponse = (response: AxiosResponse) => {
//   let data = response.data;
//   return {
//     status: data.status,
//     code: data.code,
//     message: data.message,
//     data: data.result.data,
//     error: data.error ? data.error : null,
//   };
// };
// const handleFailResponse = (response: AxiosError): DefaultResponse => {
//   let data = (response.response as AxiosResponse).data;
//   if (data.code === StatusCodes.UNAUTHORIZED) {
//     localStorage.removeItem('accessToken');
//     window.location.href = ROUTE.LOGIN;
//   }
//   return {
//     status: data.status,
//     message: data.message,
//     code: data.code,
//     data: null,
//     error: data.error ? data.error : null,
//   };
// };
// const makeRequest = async (requestData: {
//   method: Method;
//   url: string;
//   data?: Object;
//   hasFileRequest?: boolean;
// }) => {
//   try {
//     let result: DefaultResponse;
//     let { method, url, data, hasFileRequest } = requestData;
//     url = `/api${url}`;
//     let response: Promise<AxiosResponse>;
//     let headerConfig = {
//       headers: {
//         'Content-Type': 'multipart/form-data',
//       },
//     };
//     switch (method) {
//       case 'put':
//         response = axios.put(url, data);
//         break;
//       case 'post':
//         if (hasFileRequest) {
//           response = axios.post(url, data, headerConfig);
//         } else {
//           response = axios.post(url, data);
//         }
//         break;
//       case 'delete':
//         response = axios.delete(url, { data: data });
//         break;
//       case 'patch':
//         response = axios.patch(url, data);
//         break;
//       default:
//         response = axios.get(url);
//     }
//     result = await response
//       .then((response) => {
//         swalClose();
//         return handleSuccessResponse(response as AxiosResponse);
//       })
//       .catch((error) => {
//         swalClose();
//         return handleFailResponse(error);
//       });

//     if (!result) return defaultErrorResponse;
//     return result;
//   } catch {
//     return defaultErrorResponse;
//   }
// };

// const getRequestOptions = (otherOptions: RequestOptions) => {
//   return { withLoading: true, withSuccess: false, ...otherOptions };
// };

// const request = {
//   get: async <U>(
//     submitUrl: string,
//     successHandler?: ((response: any) => U) | React.Dispatch<React.SetStateAction<any>>,
//     errorHandler?: ((error: any) => U) | React.Dispatch<React.SetStateAction<any>>,
//     otherOptions: RequestOptions = { withLoading: true, withSuccess: false, withError: true, withClose: true },
//   ): Promise<boolean | DefaultResponse['data']> => {
//     //
//     const options = getRequestOptions(otherOptions);

//     // if (options.withLoading) swalLoading();
//     const result = await makeRequest({
//       method: 'get',
//       url: submitUrl,
//     });

//     if (!result.status) {
//       if (result.code !== 404) {
//         if (options.withError) swalError();
//       }
//       errorHandler?.(result.code);
//       return false;
//     }

//     successHandler?.(result.data);
//     if (options.withClose) swalClose();
//     if (options.withSuccess) swalSuccess();

//     return result.data;
//   },

//   post: async <T extends Object, U>(
//     submitUrl: string,
//     submitData: T,
//     successHandler?: ((response: any) => U) | React.Dispatch<React.SetStateAction<any>>,
//     errorHandler?: ((error: any) => U) | React.Dispatch<React.SetStateAction<any>>,
//     otherOptions: RequestOptions = {hasFileRequest: false},
//   ): Promise<boolean | DefaultResponse['data']> => {
//     //
//     const options = getRequestOptions(otherOptions);

//     // if (options.withLoading) swalLoading();

//     const result = await makeRequest({
//       method: 'post',
//       url: submitUrl,
//       data: submitData,
//       hasFileRequest: options.hasFileRequest
//     });

//     if (!result.status) {
//       swalError();
//       errorHandler?.(result.error);
//       return false;
//     }

//     successHandler?.(result.data);
//     swalClose();
//     if (options.withSuccess) swalSuccess();

//     return result.data;
//   },

//   patch: async <T extends Object, U extends Object>(
//     submitUrl: string,
//     submitData: T,
//     successHandler?: ((response: any) => U) | React.Dispatch<React.SetStateAction<any>>,
//     errorHandler?: ((error: any) => U) | React.Dispatch<React.SetStateAction<any>>,
//     otherOptions: RequestOptions = {},
//   ): Promise<boolean | DefaultResponse['data']> => {
//     //
//     const options = getRequestOptions(otherOptions);

//     // if (options.withLoading) swalLoading();
//     const result = await makeRequest({
//       method: 'patch',
//       url: submitUrl,
//       data: submitData,
//     });

//     if (!result.status) {
//       swalError();
//       errorHandler?.(result.error);
//       return false;
//     }

//     successHandler?.(result.data);
//     swalClose();
//     if (options.withSuccess) swalSuccess();

//     return result.data;
//   },

//   delete: async <T extends Object, U extends Object>(
//     submitUrl: string,
//     submitData: T,
//     successHandler?: ((response: any) => U) | React.Dispatch<React.SetStateAction<any>>,
//     errorHandler?: ((error: any) => U) | React.Dispatch<React.SetStateAction<any>>,
//     otherOptions: RequestOptions = {},
//   ): Promise<boolean | DefaultResponse['data']> => {
//     //
//     const options = getRequestOptions(otherOptions);

//     // if (options.withLoading) swalLoading();
//     const result = await makeRequest({
//       method: 'delete',
//       url: submitUrl,
//       data: submitData,
//     });

//     if (!result.status) {
//       swalError();
//       errorHandler?.(result.error);
//       return false;
//     }

//     successHandler?.(result.data);
//     swalClose();
//     if (options.withSuccess) swalSuccess();

//     return result.data;
//   },
// };

// export { axios, makeRequest, request };
import React from 'react';

const axios = () => {
};

export default axios;