document.getElementById("signUp").addEventListener("click", () => {
  document.getElementById("container").classList.add("right-panel-active");
});

document.getElementById("signIn").addEventListener("click", () => {
  document.getElementById("container").classList.remove("right-panel-active");
});

function infoUser() {
  const firstName = document.getElementById("firstName").value;
  const LastName = document.getElementById("LastName").value;
  const Email = document.getElementById("Email").value;
  const Password = document.getElementById("password").value;
  console.log(firstName + LastName + Email + Password);
}
