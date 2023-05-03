// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
//Horn Selector
let hSelect = document.getElementById("horn-select");
let hornImg = document.querySelector("[src='assets/images/no-image.png']");
let hAudio = document.getElementsByClassName("hidden")[0];

hSelect.addEventListener("change", function(){
  //Change images based on selection

  //Should not reach here
  if(hSelect.value == "select"){
    hornImg.src = "assets/images/no-image.png";
    hornImg.alt = "No image selected";
    hAudio.src = "";
  }

  else if(hSelect.value == "air-horn"){
    hornImg.src = "assets/images/air-horn.svg";
    hornImg.alt = "Air horn selected";
    hAudio.src = "assets/audio/air-horn.mp3";
  }
  else if(hSelect.value == "car-horn"){
    hornImg.src = "assets/images/car-horn.svg";
    hornImg.alt = "Car horn selected";
    hAudio.src = "assets/audio/car-horn.mp3";
  }
  else {
    hornImg.src = "assets/images/party-horn.svg";
    hornImg.alt = "Party horn selected";
    hAudio.src = "assets/audio/party-horn.mp3";
  }
})

//Volume Controls
let volControls = document.getElementById("volume");
let volImg = document.querySelector("[src='assets/icons/volume-level-2.svg']");

volControls.addEventListener("change", function(){
  //Update audio volume
  hAudio.volume = (volControls.value)/100;

  //Update icons
  if(volControls.value == 0){
    volImg.src = "assets/icons/volume-level-0.svg";
  }
  else if(volControls.value >= 1 && volControls.value < 33){
    volImg.src = "assets/icons/volume-level-1.svg";
  }
  else if (volControls.value >=33  && volControls.value < 67){
    volImg.src = "assets/icons/volume-level-2.svg";
  }
  else{
    volImg.src = "assets/icons/volume-level-3.svg";
  }

})
  
//Play sound





}






















