function buttonpress(){
  document.getElementById("catphoto").src="https://i.ytimg.com/vi/YCaGYUIfdy4/maxresdefault.jpg";

  window.alert("WASSUP");
}
function home(){
  document.getElementById("Home").style.display= "block";
  document.getElementById("game").style.display= "none";
  document.getElementById("chessTips").style.display="none";

}
function game(){
  document.getElementById("game").style.display= "block";
  document.getElementById("Home").style.display= "none";
  document.getElementById("chessTips").style.display="none";
}
function chessTips(){
  document.getElementById("chessTips").style.display="block";
  document.getElementById("Home").style.display= "none";
  document.getElementById("game").style.display= "none";
}
