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
  else if(hSelect.value == "party-horn"){
    hornImg.src = "assets/images/party-horn.svg";
    hornImg.alt = "Party horn selected";
    hAudio.src = "assets/audio/party-horn.mp3";
  }
})

//Volume Controls
let volControls = document.getElementById("volume");

volControls.addEventListener("change", function(){
  //Update audio volume
  hAudio.volume = (volControls.value)/100;

  //


})
  
}






















