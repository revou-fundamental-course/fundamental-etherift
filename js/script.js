document.addEventListener("DOMContentLoaded", function(){
  const nama_default= "Guest";
  const greetdiv = document.getElementById("greet");
  let Username = localStorage.getItem("Username") || prompt("Enter your name", nama_default);
  if(Username){
    localStorage.setItem("Username", Username);
  } else{
    Username = nama_default;
  }

  greetdiv.innerHTML = `Hi, ${Username}! Welcome to our website.`;
});