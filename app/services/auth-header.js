import { AsyncStorage } from "react-native";

export default function authHeader() {
    const user = JSON.parse(AsyncStorage.getItem('user'));
  
    if (user && user.accessToken) {
      // for Node.js Express back-end
      return { 'x-access-token': user.accessToken };
    } else {
      return {};
    }
  }

  /*
The code above checks Local Storage for user item. If there is a logged in user with accessToken (JWT), return HTTP Authorization header. Otherwise, return an empty object.
In the case we access protected resources, the HTTP request needs Authorization header.  
*/