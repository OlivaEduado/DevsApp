import firebase from '../FirebaseConnection';

export const checkLogin = () => {

    return (dispatch) => {

        firebase.auth().onAuthStateChanged((user)=>{

            if(user) {
                dispatch({
                    type:'changeUid',
                    payload:{
                        uid:user.uid
                }
           });
        } else {
                dispatch({
                    type:'changeStatus',
                    payload:{
                        status:2
                    }
                });
            }

        });

    }

};

export const SignUpAction = (name, email, password) => {
    return (dispatch) => {

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((user)=>{

                let uid = firebase.auth().currentUser.uid;
                
                firebase.database().ref('users').child(uid).set({
                    name:name
                });

                dispatch({
                    type:'changeUid',
                    payload:{
                        uid:uid
                    }
                });

            })
            .catch((error)=>{
                switch(error.code) {
                    case 'auth/email-already-in-use':
                        alert("Email já Utilizado!");
                        break;
                    case 'auth/invalid-email':
                        alert("E-mail Invalido!");
                        break;
                    case 'auth/operation-not-allowed':
                        alert("Tente Novamente Mais Tarde!");
                        break;
                    case 'auth/weak-password':
                        alert("Digite uma Senha Melhor!");
                        break;
                    }
            });

    };
};

export const SignInAction = (email, password) => {
    
    return(dispatch) => {

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((user)=>{

                let uid = firebase.auth().currentUser.uid;

                dispatch({
                        type:'changeUid',
                        payload:{
                            uid:uid
                    }
                });
            })
            .catch((error)=>{
                switch(error.code) {
                    case 'auth/invalid-email':
                        alert("Email Invalido!");
                    break;
                    case 'auth/user-disabled':
                        alert("Usuário Desativado!");
                    break;
                    case 'auth/user-not-found':
                        alert("Usuario não Existe");
                    break;
                    case 'auth/wrong-password':
                        alert("Email e/ou senha Incorretos!");
                    break;
                }
            });

    };
};

export const SignOut = ()=>{

    firebase.auth().signOut();

    return {
        type:'changeStatus',
        payload:{
            status:2
        }
    };
};

export const changeEmail = (email) => {
    return {
        type:'changeEmail',
        payload:{
            email:email
        }
    };
};

export const changePassword = (pass) => {
    return{
        type:'changePassword',
        payload:{
            pass:pass
        }
    };
};

export const changeName = (name) => {
    return{
        type:'changeName',
        payload:{
            name:name
        }
    };
};