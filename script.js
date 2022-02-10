let email = document.getElementById("emailText");
let password = document.getElementById("passwordText");

console.log(email);
console.log(password);
let loginButton = document.getElementById('loginBtn');
let errorArea = document.getElementById('errorMsg');

loginButton.addEventListener('click', function (event) {
    event.preventDefault();
    console.log("clicked");
    console.log(email.value);
    console.log(password.value);

    if (email.value == "" && password.value == "") {
        window.location.href = 'bank.html';
    }
    else if (email.value != "eshan@gmail.com" || password.value != "eshan") {
        let errorElement = document.createElement('p');
        errorElement.innerHTML = `<div class="alert alert-danger" role="alert">
        A simple danger alert—check it out!
      </div>`;
        let errorArea = document.getElementById('errorMsg');
        errorArea.appendChild(errorElement);


    }


});