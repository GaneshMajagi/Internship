function showSection(sectionId) {
    document.getElementById("registration").style.display = "none";
    document.getElementById("login").style.display = "none";
    document.getElementById("welcome").style.display = "none";
    document.getElementById(sectionId).style.display = "block";
}

// Registration Function
function register() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if(name && email  && password){
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);

        alert("Registration Successful!");
        showSection("login");
    } else {
        alert("Please fill all fields.");
    }
}

// Login Function
function login() {
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    let storedEmail = localStorage.getItem("email");
    let storedPassword = localStorage.getItem("password");

    if(email === storedEmail && password === storedPassword){
        document.getElementById("welcomeMessage").innerText = 
            "Welcome, " + localStorage.getItem("name") + "!";
        showSection("welcome");
    } else {
        alert("Invalid Email or Password!");
    }
}

// Logout Function
function logout() {
    showSection("login");
}

// Show registration first on page load
showSection("registration");