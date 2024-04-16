import { AxiosResponse } from "axios";

export interface IRead<T> {
  getAll(route: string, params?: string): Promise<AxiosResponse<T[]>>;
  getById(route: string, id: string): Promise<AxiosResponse<T>>;
  getPaginatedList(route: string, params?: string): Promise<AxiosResponse<T[]>>;
}
export interface IWrite<T> {
  create(route: string, model: T): Promise<AxiosResponse<T | boolean>>;
  update(route: string, model: T): Promise<AxiosResponse<T | boolean>>;
  delete(route: string, id: string): Promise<AxiosResponse<boolean>>;
  deleteMulti(route: string, ids: string[]): Promise<AxiosResponse<boolean>>;
}

export interface IRepository<T> extends IWrite<T>, IRead<T> {}
