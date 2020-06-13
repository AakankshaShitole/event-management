import React, { Component } from "react";

import AuthService from "../../../services/auth.service";

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: AuthService.getCurrentUser()
    };
  }

  render() {
    const { currentUser } = this.state;

    return (
     <View>
         <Text>Profile</Text>
         <Text>{currentUser.username}</Text>
         <Text>{currentUser.id}</Text>
         <Text>{currentUser.email}</Text>

     </View>

    );
  }
}