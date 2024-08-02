var accounts = JSON.parse(localStorage.getItem('accounts')) || [];

document.getElementById("form__signUp").addEventListener("submit", function(event) {
    event.preventDefault();

    let enteredUsername = document.getElementById("usernameRegister").value;
    let enteredPassword = document.getElementById("passwordRegister").value;
    let enteredRepeatPassword = document.getElementById("repeatPasswordRegister").value;
    
    if (enteredUsername === '') {
        alert('Please enter Username');
    }
    else if (enteredPassword === '') {
        alert('Please enter Password')
    }
    else if (enteredRepeatPassword === '') {
        alert('Please enter Repeat Password')
    }
    else {
        if (enteredPassword !== repeatPassword) {
            alert('Repeat Password is incorrect')
            //Reset lại ô repeatPassword
        }
        else {
            if (accounts.find(() => enteredUsername === accounts.username)) {
                alert('Username already exists')
            }
            else {
                let newAccount = {
                    username: username,
                    password: password
                };
                accounts.push(newAccount);
                localStorage.setItem('accounts', JSON.stringify(accounts))
                alert('Registered successfully')
                window.location.href = "signIn.html";
            }
        }
    }
});
