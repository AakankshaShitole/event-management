import React, { Component } from "react";
import {View, StyleSheet, Text} from 'react-native'
import {Header} from 'react-native-elements'

import UserService from "../../../services/user.service";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getPublicContent().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response && error.response.data) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  render() {
    return (
      <View>
          <Text>
              {this.state.content}
          </Text>
      </View>
    );
  }
}