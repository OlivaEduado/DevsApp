import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default class ConversasItem extends Component {
	
	constructor(props) {
		super(props);
	
		this.onClick = this.onClick.bind(this);
	}


	onClick () {

		this.props.onPress(this.props.data);

	}

	render() {
		return(
			<TouchableOpacity style={ConversasItemStyles.buttonArea} onPress={this.onClick}>
				<Text>{this.props.data.title}</Text>
			</TouchableOpacity>
		);
	}
}

const ConversasItemStyles = StyleSheet.create({
	buttonArea:{
		height:40,
		flex:1,
		justifyContent:'center',
		paddingLeft:10,
		borderBottomWidth:1,
		borderBottomColor:'#CCCCCC'
	}
});