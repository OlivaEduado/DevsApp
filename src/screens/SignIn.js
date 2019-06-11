import React, {  Component } from 'react';
import { View, Text, StyleSheet, Button, TextInput, Keyboard } from 'react-native';
import { connect } from 'react-redux';
import { checkLogin, changeEmail, changePassword, SignInAction } from '../actions/AuthActions';

export class SignIn extends Component {

    static navigationOptions = {
        title:'Login'
        
    }

    constructor(props) {
        super(props);
        this.state = {};

    }

    componentDidUpdate() {
        if(this.props.status == 1) {
            Keyboard.dismiss();
            this.props.navigation.navigate("Conversas");
        }
    }

        render() {
            return(
                <View style={styles.container}>

                   
                    <Text style={styles.h1}>Digite seu e-mail</Text>
                    <TextInput onChangeText={this.props.changeEmail} value={this.props.email} style={styles.input} />
                    
                    <Text style={styles.h1}>Digite sua Senha</Text>
                    <TextInput onChangeText={this.props.changePassword} secureTextEntry={true}  value={this.props.password} style={styles.input} />

                    <Button title="Entrar" onPress={()=>{
                        this.props.SignInAction(this.props.email, this.props.password);
                    }} />
                </View>
            );
    }

}

const styles = StyleSheet.create({
    container:{
        margin:10,
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    input:{
        height:50,
        backgroundColor:'#DDDDDD',
        width:'80%',
        fontSize:26
    }
});

const mapStateToProps = (state) => {
    return { 
        status:state.auth.status,
        uid:state.auth.uid,
        email:state.auth.email,
        password:state.auth.password
    };
};

const SignInConnect = connect(mapStateToProps, { checkLogin, changeEmail, changePassword, SignInAction })(SignIn);
export default SignInConnect;