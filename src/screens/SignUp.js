import React, {  Component } from 'react';
import { View, Text, StyleSheet, Button, TextInput, KeyBoard } from 'react-native';
import { connect } from 'react-redux';
import { checkLogin, changeEmail, changePassword, changeName, SignUpAction } from '../actions/AuthActions';

export class SignUp extends Component {

    static navigationOptions = {
        title:'Cadastrar'
        
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
                    <Text style={styles.h1}>Digite seu Nome</Text>
                    <TextInput onChangeText={this.props.changeName} value={this.props.name} style={styles.input} />
                    
                    <Text style={styles.h1}>Digite seu e-mail</Text>
                    <TextInput onChangeText={this.props.changeEmail} value={this.props.email} style={styles.input} />
                    
                    <Text style={styles.h1}>Digite sua Senha</Text>
                    <TextInput onChangeText={this.props.changePassword} secureTextEntry={true}  value={this.props.password} style={styles.input} />

                    <Button title="Cadastrar" onPress={()=>{
                        this.props.SignUpAction(this.props.name, this.props.email, this.props.password);
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
        fontSize:22
    }
});

const mapStateToProps = (state) => {
    return {
        status:state.auth.status,
        name:state.auth.name,
        email:state.auth.email,
        password:state.auth.password
    };
};

const SignUpConnect = connect(mapStateToProps, { checkLogin, changeEmail, changePassword, changeName, SignUpAction })(SignUp);
export default SignUpConnect;