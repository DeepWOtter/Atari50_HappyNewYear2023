//New game modal
var modal = document.querySelector(".modal");

//Button to open the new game modal
var btn_modal = document.querySelector(".btn_modal");

//Button to display the happy new year message
var btn_message = document.querySelector(".yes");

//Button to close the new game modal
var btn_close = document.querySelector(".no");

//Message
var message = document.querySelector(".end");

//Buttons
var btns = document.getElementsByTagName("button");

//Erase intro
var intro = document.querySelector(".container");
function erase() {
  intro.style.display = "none";
}

setTimeout("erase()", 4000);

//Opening of the new game modal
btn_modal.onclick = function () {
  modal.style.display = "block";
};

//Display of the message
var winner = new Audio("sound/winsquare-6993.mp3");
btn_message.onclick = function () {
  message.style.display = "flex";
  winner.play();
};

//Close new game modal
btn_close.onclick = function () {
  modal.style.display = "none";
};

//Opening of the settings modal
var btn_settings = document.querySelector(".btn_settings");
var modal_settings = document.querySelector(".settings");
function openSettings() {
  modal_settings.style.display = "flex";
}
btn_settings.addEventListener("click", openSettings);

//Switch off music
var music_controller = document.querySelector(".switch_music");
function musicSwitch() {
  if (music.play()) {
    stopMusic();
  } else if (music.pause()) {
    playMusic();
  }
}
music_controller.addEventListener("click", musicSwitch);

//Switch off sounds
var sounds_controller = document.querySelector(".switch_sound");
function soundSwitch() {
  if ((btnClick.muted = false)) {
    btnClick.muted = true;
  } else {
    btnClick.muted = false;
  }
}
sounds_controller.addEventListener("click", soundSwitch);

//switch off grid animation
var grid = document.querySelector(".grid");
var anim_controller = document.querySelector(".switch_anim");
function animSwitch() {
  if ((grid.style.animation = true)) {
    grid.style.animation = "none";
  } else {
    grid.style.animation = true;
  }
}
anim_controller.addEventListener("click", animSwitch);

//Close settings modal
var btn_close_settings = document.querySelector(".close");
function closeSettings() {
  modal_settings.style.cursor = "pointer";
  modal_settings.style.display = "none";
}
btn_close_settings.addEventListener("click", closeSettings);

//Open credits modal
var btn_credits = document.querySelector(".btn_credits");
var credits_modal = document.querySelector(".credits");
function openCredits() {
  credits_modal.style.display = "flex";
}
btn_credits.addEventListener("click", openCredits);

//Close credits modal
var btn_close_credits = document.querySelector(".close_credits");
function closeCredits() {
  credits_modal.style.display = "none";
}
btn_close_credits.addEventListener("click", closeCredits);

//Play music
var music = new Audio(
  "sound/Mega Man 5 - Intro + Title Theme (Atari PoKEY).mp3"
);
function playMusic() {
  music.play();
}

setTimeout("playMusic()", 3000);

//Stop music
function stopMusic() {
  music.pause();
}

//Play button sounds
var btnSound = new Audio("sound/button-124476.mp3");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("mouseover", function () {
    btnSound.play();
  });
}

//Play button sounds on click
var btnClick = new Audio("sound/coin_c_02-102844.mp3");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    btnClick.play();
  });
}
