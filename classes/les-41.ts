class Us {
  _login: string;
  password: string;

  set login(log: string) {
    this._login = "user-" + log;
  }

  get login() {
    return this._login;
  }
}

const user25 = new Us();
user25.login = "vlad"; 
