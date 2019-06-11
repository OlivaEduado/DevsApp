import React, {  Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import { connect } from 'react-redux';
import { SignOut } from '../actions/AuthActions';


export class Config extends Component {

    static navigationOptions = {
        title:'',
        tabBarLabel:'Config'
    }

    constructor(props) {
        super(props);
        this.state = {};

        this.sair = this.sair.bind(this);
    }

    sair() {

        this.props.SignOut();

        this.props.navigation.dispatch(StackActions.reset({
            index:0,
            actions:[
                NavigationActions.navigate({routeName:'Home'})
            ]
        }));
    }

    render() {
        return(
            <View style={styles.container}>
                <Text>Configuracoes</Text>
                <Button title="Sair" onPress={this.sair} />
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

const ConfigConnect = connect(mapStateToProps, { SignOut })(Config);
export default ConfigConnect;