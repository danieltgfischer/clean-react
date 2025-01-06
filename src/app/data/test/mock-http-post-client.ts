import {
  HttpPostClient,
  HttpPostParams,
  HttpResponse,
  HttpStatusCode,
} from "../protocols/http";

export class HttpPostClientSpy implements HttpPostClient {
  url?: string;
  body?: object;
  response: HttpResponse<object> = {
    statusCode: HttpStatusCode.ok,
  };

  async post(params: HttpPostParams<object>): Promise<HttpResponse<object>> {
    this.url = params.url;
    this.body = params.body;
    return Promise.resolve(this.response);
  }
}
