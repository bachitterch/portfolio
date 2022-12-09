import { Env } from "src/server/env";
import { Dependencies } from "src/server/utils";

export class UnsplashService {
  private readonly env: Env;

  constructor(deps: Dependencies) {
    this.env = deps.env;
  }
  public async getAccessToken() {
    console.log(this.env);
  }
}
