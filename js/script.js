document.addEventListener("DOMContentLoaded", function(){
  const nama_default= "Guest";
  const greetdiv = document.getElementById("greet");
  let Username = localStorage.getItem("Username") || prompt("Enter your name", nama_default);
  if(Username){
    localStorage.setItem("Username", Username);
  } else{
    Username = nama_default;
  }

  greetdiv.innerHTML = `Hi, ${Username}.`;
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

function scrollToSec(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelector('.Slides');
  const slide = document.querySelectorAll(".slide");
  const Jum_slide = slide.length;
  let cur_I = 0;
  let Start_X = 0;
  let End_X = 0;
  let Interval;


  function update_pos() {
      slides.style.transform = `translateX(-${cur_I * 100}%)`;
  }

 
  function shownext() {
      cur_I = (cur_I + 1) % Jum_slide;
      update_pos();
  }


  function showprev() {
      cur_I = (cur_I - 1 + Jum_slide) % Jum_slide;
      update_pos();
  }

  function startAuto() {
      Interval = setInterval(shownext, 10000);
  }


  function stopAuto() {
      clearInterval(Interval);
  }


  slides.addEventListener("touchstart", function(event) {
      Start_X = event.touches[0].clientX;
      stopAuto(); 
  });

  slides.addEventListener("touchend", function(event) {
      End_X = event.changedTouches[0].clientX;
      if (Start_X > End_X + 50) { 
          shownext();
      } else if (Start_X < End_X - 50) { 
          showprev();
      }
      startAuto(); 
  });

  document.querySelector('.Slide_but_left').addEventListener('click', function() {
      showprev();
      stopAuto(); 
      startAuto(); 
  });

  document.querySelector('.Slide_but_right').addEventListener('click', function() {
      shownext();
      stopAuto(); 
      startAuto(); 
  });

  update_pos();
  startAuto();


  window.addEventListener('resize', update_pos);
});
