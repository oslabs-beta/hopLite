const { AuthorizationHelperMethods } = require("./AuthorizationHelperMethods");
// const { ModuleResolutionKind } = require("typescript");

class AuthorizationControllerBlueprint {
  testAuthz(str: string) {
    console.log(str);
  }
  authorizeCookie(req: Request, res: Response, next: any) { //these are the methods that the developer using our software invoke
    console.log('authorizeCookie is firing.');
    AuthorizationHelperMethods.hasRole(req, res, next);
  }
  authorizeJWT(req: Request, res: Response, next: any) {
    console.log('authorizeJWT is firing.');
    AuthorizationHelperMethods.hasCorrectToken(req, res, next);
  }
  authorizeSession() {
    
  }
}

export {
  AuthorizationControllerBlueprint
}



