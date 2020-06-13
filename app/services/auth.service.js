
/*
The service uses Axios for HTTP requests and Local Storage for user information & JWT.
It provides following important methods:

login(): POST {username, password} & save JWT to Local Storage
logout(): remove JWT from Local Storage
register(): POST {username, email, password}
getCurrentUser(): get stored user information (including JWT)
*/
import axios from "axios";
import { AsyncStorage } from 'react-native'

const API_URL = "http://192.168.2.7:4545/api/auth/";

class AuthService {
  login(username, password) {
    return axios
      .post(API_URL + "signin", {
        username,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
          AsyncStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    AsyncStorage.removeItem("user");
  }

  register(username, email, password) {
    return axios.post(API_URL + "signup", {
      username,
      email,
      password
    });
  }

  getCurrentUser() {
    return JSON.parse(AsyncStorage.getItem('user'));;
  }
}

export default new AuthService();