document.getElementById('loginG').addEventListener('click', GoogleLogin)
document.getElementById('loginF').addEventListener('click', FacebookLogin)

var provider1 = new firebase.auth.GoogleAuthProvider()
var provider2 = new firebase.auth.FacebookAuthProvider()

const usersRef = firebase.firestore().collection('Users');


function register(){

  var emailr = document.getElementById("email_reg").value;
  var passr = document.getElementById("password_reg").value;

  firebase.auth().createUserWithEmailAndPassword(emailr, passr)
  .then((userCredential) => {
      
      usersRef
      .doc(`${userCredential.user.uid}`)
      .set({

          uid: userCredential.user.uid,
          email: emailr
      
      })

  })
  .catch((error) => {
    var errorMessage = error.message;

    console.log(error.code);
    console.log(error.message);

    window.alert("Error : " + errorMessage);
    // ..
  });
}

function login(){

    var elog = document.getElementById("email_reg").value;
    var plog = document.getElementById("password_reg").value;

    firebase.auth().signInWithEmailAndPassword(elog, plog)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

  });
}

function logOut(){
    
    firebase.auth().signOut().then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
}

function GoogleLogin(){
    firebase.auth().signInWithPopup(provider1).then((userCredential) => {

      var user = firebase.auth().currentUser;
      
      usersRef
      .doc(`${userCredential.user.uid}`)
      .set({

          uid: userCredential.user.uid,
          email: user.email
      
      })

  })
    .catch(error => {
      console.error(error);
    })
  }

function FacebookLogin(){
    firebase.auth().signInWithPopup(provider2).then((userCredential) => {

      var user = firebase.auth().currentUser;
      
      usersRef
      .doc(`${userCredential.user.uid}`)
      .set({

          uid: userCredential.user.uid,
          email: user.email
      
      })

  })
    .catch(error => {
      console.error(error);
    })
  }

