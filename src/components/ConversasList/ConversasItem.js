import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

export default class ConversasItem extends Component {
	
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<TouchableHighlight style={ConversasItemStyle.buttonArea} onPress={this.props.onPress}>
				<Text>{this.props.data.name}</Text>
			</TouchableHighlight>
		);
	}
}

const ConversasItemStyle = StyleSheet.create({
	buttonArea:{
		height:40,
		flex:1,
		justifyContent:'center',
		paddingLeft:10,
		borderBottomWidth:1,
		borderBottomColor:'#CCCCCC'
	}
});