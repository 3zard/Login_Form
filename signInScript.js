var accounts = JSON.parse(localStorage.getItem('accounts')) || [];

document.getElementById("form__signIn").addEventListener('submit', function(event){
    event.preventDefault();

    let enteredUsername = document.getElementById("usernameLogin").value;
    let enteredPassword = document.getElementById("passwordLogin").value;

    let isExisted = accounts.some((accounts) => enteredUsername === accounts.username)
    if (!isExisted) {
        alert('Account does not exist')
    }
    else {
        let isCorrectAccount = accounts.some((accounts) => enteredUsername === accounts.username && enteredPassword === accounts.password)
        if (!isCorrectAccount) {
            alert('Password is incorrect')
        }
        else {
            let isRememberMe = document.getElementById("remember__tickBox").checked;
            if (isRememberMe) {
                localStorage.setItem('loggedInUser', JSON.stringify({ username: enteredUsername }));
            }
            else {
                sessionStorage.setItem('loggedInUser', JSON.stringify({ username: enteredUsername }));
            }
            alert('Log in successfully')
            window.location.href = "main.html"
        }
    }
})

window.addEventListener('load', function() {
    let loggedInUser = JSON.parse(localStorage.getItem('loggedInUser')) || JSON.parse(sessionStorage.getItem('loggedInUser'));
    if (loggedInUser) {
        autoLogIn(loggedInUser.username)
    }
})

function autoLogIn(username) {
    let isAuthorized = accounts.some((accounts) => accounts.username === username)
    if (isAuthorized) {
        window.location.href = "main.html";
    }
}