import firebase from '../FirebaseConnection';

export const getContactList = ( userUid ) => {
	
	return(dispatch) => {

		firebase.database().ref('users').orderByChild('name').once('value').then((snapshot)=>{

			let users = [];
			snapshot.forEach((childItem)=>{
                    if(childItem.key != userUid) {
    				users.push({
    					key:childItem.key,
    					name:childItem.val().name
				    });
                }
			});

			dispatch({
				type:'setContactList',
				payload:{
					users:users
				}
			});

		});

	};
};

export const createChat = (userUid1, userUid2) => {
    return (dispatch) => {

            //criando o proprio chat
           let newChat = firebase.database().ref('chats').push();
           newChat.child('members').child(userUid1).set({
                id:userUid1
           });
           newChat.child('members').child(userUid2).set({
                id:userUid2
           });
           // Associando aos Envolvidos
           let chatId = newChat.key;

           firebase.database().ref('users').child(userUid1).child('chats')
                .child(chatId).set({
                    id:chatId
           });
           firebase.database().ref('users').child(userUid2).child('chats')
                .child(chatId).set({
                    id:chatId
           });

        dispatch({
            type:'setActiveChat',
            payload:{
                chatid:chatId
            }
        });

    }
}; 

/*export const SignInAction = (email, password) => {
    
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
*/
/*
export const changeName = (name) => {
    return{
        type:'changeName',
        payload:{
            name:name
        }
    };
};
*/