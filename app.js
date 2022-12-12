function register(){
    var name = document.fform.fullname.value;
    var email =  document.fform.email.value;
    var password = document.fform.password.value;
    var confirm = document.fform.confirm.value;

    if (name == null || name == "") {
        alert("Please enter your fullname!");
        return false;
    } else if (email == null || email == "") {
        alert("Please enter your email!");
        return false;
    } else if (password == "") {
        alert("Please enter your password!");
        return false;
    } else if (password.length < 8) {
        alert("Password must be least 8 character!");
        return false;
    } else if (confirm == "") {
        alert("Please confirm your password!");
        return false;
    } else if (confirm != password) {
        alert("Password don't match!");
        return false;
    } else {
        return true;
    }
}

function login(){
    var email = document.fform.email.value;
    var password = document.fform.password.value;

    if (email == null || email == "") {
        alert("Please enter your email!");
        return false;
    } else if (password == "") {
        alert("Please enter your password!");
        return false;
    } else if (password.length < 8) {
        alert("Please enter the correct password!");
        return false;
    } else {
        return true;
    }
}