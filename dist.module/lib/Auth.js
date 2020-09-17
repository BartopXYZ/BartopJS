export class Auth {
    constructor(key) {
        this.key = key;
        Auth.instance = this;
    }
    static get current() {
        if (!Auth.instance) {
            throw new Error("Must create an auth instance before continuing...");
        }
        return Auth.instance;
    }
    get asHeader() {
        return `Bearer ${this.key}`;
    }
}
