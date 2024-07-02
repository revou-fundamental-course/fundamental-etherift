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


document.getElementById("Data").addEventListener('submit', function(event) {
  event.preventDefault();
  
  var formData = new FormData(this);
  var name = formData.get("name");
  var tgg = formData.get("tgg");
  var gender = formData.get('JenisKe');
  var pesan = formData.get("Pesan");
  var time = new Date().toLocaleString();
  
  var outputDiv = document.getElementById("output");
  outputDiv.innerHTML = `
    <br>${time}
    <p>Nama: ${name}<br>
    Tanggal Lahir: ${tgg}<br>
    Jenis Kelamin: ${gender}<br>
    Pesan: ${pesan}</p>`
});