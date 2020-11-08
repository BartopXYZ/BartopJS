export class Auth {
  public static altURL: string;
  public static version: string = "v1";
  private static instance: Auth;
  public key: string;
  constructor(key) {
    this.key = key;
    Auth.instance = this;
  }

  public static get current(): Auth {
    if (!Auth.instance) {
      throw new Error("Must create an auth instance before continuing...");
    }

    return Auth.instance;
  }

  public get asHeader(): string {
    return `Bearer ${this.key}`;
  }

}
