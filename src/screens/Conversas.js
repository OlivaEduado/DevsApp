import React, { Component } from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { connect } from 'react-redux';

import ContatoList from './ContatoList';
import ConversasStack from './ConversasStack';
import Config from './Config';

const ChatNavigator = createBottomTabNavigator({
	ConversasStack:{
		screen:ConversasStack,
		navigationOptions:{tabBarLabel:'Conversas'}
	},
	ContatoList:{
		screen:ContatoList,
		navigationOptions:{header:null}
	},
	Config:{
		screen:Config,
		navigationOptions:{header:null}
	}
});

export default ChatNavigator;