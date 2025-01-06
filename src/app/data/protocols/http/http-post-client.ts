import { HttpResponse } from "./http-response";

export type HttpPostParams<T> = {
  url: string;
  body?: T;
};
export interface HttpPostClient {
  post(params: HttpPostParams<object>): Promise<HttpResponse<object>>;
}
