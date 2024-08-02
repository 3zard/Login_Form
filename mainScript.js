document.getElementById("logOut__button").addEventListener('click', function() {
    localStorage.removeItem('loggedInUser');
    sessionStorage.removeItem('loggedInUser');
    window.location.href = "signIn.html"
})

window.addEventListener('load', function() {
    const user = JSON.parse(localStorage.getItem('loggedInUser')) || JSON.parse(sessionStorage.getItem('loggedInUser'));
    console.log(user)
    this.document.getElementById("helloUser").innerText = `Hello ${user.username}`;
})