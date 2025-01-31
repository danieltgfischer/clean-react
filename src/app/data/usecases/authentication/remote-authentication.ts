import { HttpPostClient, HttpStatusCode } from "@data/protocols/http";
import { AuthenticationParams } from "@domain/usecases/authentication";
import { InvalidCredentialsError, UnexpectedError } from "@domain/errors";
import { AccountModel } from "@domain/models/account-model";

export class RemoteAuthentication {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient<
      AuthenticationParams,
      AccountModel
    >
  ) {}

  async auth(params: AuthenticationParams): Promise<void> {
    const httpResponse = await this.httpPostClient.post({
      url: this.url,
      body: params,
    });
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        break;
      case HttpStatusCode.unauthorized:
        throw new InvalidCredentialsError();
      default:
        throw new UnexpectedError();
    }
  }
}
