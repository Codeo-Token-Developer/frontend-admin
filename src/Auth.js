class Authentication {
  constructor(){
    this.isLogin=false;
  }

  onLogin(cb) {
      this.isLogin = true;
      cb();
  }

  onLogout(cb) {
      this.isLogin = false;
      localStorage.clear();
      cb();
  }

};



export default new Authentication();
