// Password visibility toggle for the login form
const loginPasswordToggle = document.getElementById('loginPassword');
const loginPasswordField = document.getElementById('password');

loginPasswordToggle.addEventListener('click', () => {
    if (loginPasswordField.type === 'password') {
        loginPasswordField.type = 'text';
        loginPasswordToggle.classList.remove('fa-eye');
        loginPasswordToggle.classList.add('fa-eye-slash');
    } else {
        loginPasswordField.type = 'password';
        loginPasswordToggle.classList.remove('fa-eye-slash');
        loginPasswordToggle.classList.add('fa-eye');
    }
});

 /*=============== SHOW HIDE PASSWORD CREATE ACCOUNT ===============*/
 const passwordRegister = (loginPass, loginEye) =>{
    const input = document.getElementById(loginPass),
          iconEye = document.getElementById(loginEye)
 
    iconEye.addEventListener('click', () =>{
       // Change password to text
       input.type === 'password' ? input.type = 'text'
                                       : input.type = 'password'
 
       // Icon change
       iconEye.classList.toggle('ri-eye-fill')
       iconEye.classList.toggle('ri-eye-off-fill')
    })
 }
 passwordRegister('passwordCreate','loginPasswordCreate')
 
 /*=============== SHOW HIDE LOGIN & CREATE ACCOUNT ===============*/
 const signUpButton = document.getElementById("signUpButton");
    const signInButton = document.getElementById("signInButton");
    const signInDiv = document.getElementById("signIn");
    const signUpDiv = document.getElementById("signup");

    signUpButton.addEventListener("click", () => {
        signInDiv.style.display = "none"; // Hide login form
        signUpDiv.style.display = "flex"; // Show signup form
    });

    signInButton.addEventListener("click", () => {
        signUpDiv.style.display = "none"; // Hide signup form
        signInDiv.style.display = "flex"; // Show login form
 })
 