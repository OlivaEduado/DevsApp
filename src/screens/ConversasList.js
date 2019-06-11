import React, {  Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux';
import {  } from '../actions/AuthActions';
import {} from '../actions/ChatActions';

export class ConversasList extends Component {

    static navigationOptions = {
        title:'',
        tabBarLabel:'Conversas',
        header:null
    }

    constructor(props) {
        super(props);
        this.state = {};

        
    }

    componentDidUpdate() {
        if(this.props.activeChat != '') {
            this.props.navigation.navigate("ConversaIntera");
        }
    }

    render() {
        return(
            <View style={styles.container}>
                <Text>Pagina de Conversas</Text>
                <Button title="Ir Para Conversas" onPress={()=>{this.props.navigation.navigate("ConversaInterna")}} />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container:{
        margin:10
    }
});

const mapStateToProps = (state) => {
    return {
        uid:state.auth.uid,
        status:state.auth.status,
        chatAtivo:state.chat.activeChat
    };
};

const ConversasListConnect = connect(mapStateToProps, {})(ConversasList);
export default ConversasListConnect;