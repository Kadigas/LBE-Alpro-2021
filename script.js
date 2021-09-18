function Menu() {
  var x = document.getElementById("topnav");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

function DarkMode() {
  var bg = document.body;
  var nav = document.getElementById("topnav");
  var swtch = document.getElementById("switch");
  var right = document.getElementById("nvright");
  var abt = document.getElementById("about");
  var ln = document.getElementById("line");
  var dat = document.getElementById("biodata");
  var top = document.getElementById("Top");
  var ed = document.getElementById("education");
  var its = document.getElementById("logoits");
  var smala = document.getElementById("logosmala");
  var botits = document.getElementById("logoIts");
  var botsml = document.getElementById("logoSmala");
  bg.classList.toggle("darkbg");
  nav.classList.toggle("darknav");
  swtch.classList.toggle("darkswitch");
  right.classList.toggle("darkright");
  abt.classList.toggle("darkabout");
  ln.classList.toggle("darkline");
  dat.classList.toggle("darkbio");
  top.classList.toggle("darktop");
  ed.classList.toggle("darkedu");
  its.classList.toggle("darkits");
  smala.classList.toggle("darksmala");
  botits.classList.toggle("darkbotits");
  botsml.classList.toggle("darkbotsml");
}