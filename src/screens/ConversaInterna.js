import React, {  Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux';
import { checkLogin } from '../actions/AuthActions';
import {} from '../actions/ChatActions';

export class ConversaInterna extends Component {

    static navigationOptions = {
        title:'Conversa Interna',

    }

    constructor(props) {
        super(props);
        this.state = {};

        
    }

    render() {
        return(
            <View style={styles.container}>
                <Text>Pagina de Conversas Interna</Text>
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
        status:state.auth.status
    };
};

const ConversaInternaConnect = connect(mapStateToProps, { checkLogin })(ConversaInterna);
export default ConversaInternaConnect;