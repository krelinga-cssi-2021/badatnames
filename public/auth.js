let googleUser

function handleAuth(onLoggedIn) {
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            console.log('Logged in as: ' + user.displayName);
            googleUser = user;
            onLoggedIn()
        } else {
            window.location = 'index.html'; // If not logged in, navigate back to login page.
        }
    })
}