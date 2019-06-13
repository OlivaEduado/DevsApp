import React, {  Component } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, Image, BackHandler } from 'react-native';
import { connect } from 'react-redux';
import { setActiveChat } from '../actions/ChatActions';

export class ConversaInterna extends Component {

    static navigationOptions = ({navigation}) => ({
        title:'Conversa Interna',
        headerLeft:(
            <TouchableOpacity onPress={()=>{navigation.state.params.voltarFunction()}} >
                <Image source={require('../../node_modules/react-navigation-stack/src/views/assets/back-icon.png')} style={{width:25, height:25, marginLeft:20}} />
            </TouchableOpacity>
        )

    })

    constructor(props) {
        super(props);
        this.state = {};

        this.voltar = this.voltar.bind(this);
    }

    componentDidMount() {
        this.props.navigation.setParams({voltarFunction:this.voltar});
        BackHandler.addEventListener('hardwareBackPress', this.voltar);
    }

    voltar() {
        this.props.setActiveChat('');
        this.props.navigation.goBack();

        return true;
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.voltar);
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

const ConversaInternaConnect = connect(mapStateToProps, { setActiveChat })(ConversaInterna);
export default ConversaInternaConnect;