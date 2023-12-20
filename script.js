const btnSignIn = document.getElementById("sign-in"), 
      btnSignUp = document.getElementById("sign-up"), 
      formRegister = document.querySelector(".register"),
      formLogin = document.querySelector(".login")

document.addEventListener("click", e => {
  formRegister.classList.add("hide");
  formLogin.classList.remove("hide");
})     


