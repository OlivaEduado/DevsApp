import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

export default class ContatoItem extends Component {
	
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<TouchableHighlight style={ContatoItemStyles.buttonArea} onPress={this.props.onPress}>
				<Text>{this.props.data.name}</Text>
			</TouchableHighlight>
		);
	}
}

const ContatoItemStyles = StyleSheet.create({
	buttonArea:{
		height:40
	}
});