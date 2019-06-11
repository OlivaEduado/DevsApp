import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { connect } from 'react-redux';

import ConversaInterna from './ConversaInterna';
import ConversasList from './ConversasList';

const ConversasStackNavigator = createStackNavigator({
	ConversasList:{
		screen:ConversasList,
	},
	ConversaInterna:{
		screen:ConversaInterna,
	}
});

export default ConversasStackNavigator;