const { default: jwtDecode } = require("jwt-decode");
class HelloWorld {
  hello(req) {
    const token = req.session["keycloak-token"];
    const userInfo = jwtDecode(token);
    return `hello  ${userInfo.name}`;
  }
}

module.exports = new HelloWorld();
