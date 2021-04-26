document.getElementById('loginG').addEventListener('click', GoogleLogin)
document.getElementById('loginF').addEventListener('click', FacebookLogin)

let provider1 = new firebase.auth.GoogleAuthProvider()
let provider2 = new firebase.auth.FacebookAuthProvider()


function register(){

    var emailr = document.getElementById("email_reg").value;
    var passr = document.getElementById("password_reg").value;

    firebase.auth().createUserWithEmailAndPassword(emailr, passr)
    .then((userCredential) => {

      var user = userCredential.user;

    })
    .catch((error) => {
      var errorMessage = error.message;

      console.log(error.code);
      console.log(error.message);

      window.alert("Error : " + errorMessage + errorCode);
      // ..
    });
}

function login(){

    var elog = document.getElementById("email_log").value;
    var pplog = document.getElementById("password_log").value;

    firebase.auth().signInWithEmailAndPassword(elog, plog)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage + errorCode);

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
    firebase.auth().signInWithPopup(provider1).then(() => {
    //   window.location.assign('front/1_mainMenu/index.html');
    })
    .catch(error => {
      console.error(error);
    })
  }
  function FacebookLogin(){
    firebase.auth().signInWithPopup(provider2).then(() => {
    //   window.location.assign('front/1_mainMenu/index.html');
    })
    .catch(error => {
      console.error(error);
    })
  }
