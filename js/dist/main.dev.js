"use strict";

(function () {
  var setTimeStamp = function setTimeStamp() {
    var timeStamp = document.getElementById("timestamp-value");
    timeStamp.innerHTML = new Date().toISOString();
  };

  var initPlayButton = function initPlayButton() {
    var playButton = document.getElementById("play-button");

    playButton.onclick = function () {
      setTimeStamp();
      var selectedSound = document.querySelector('input[name="sound"]:checked').value;
      var audio = new Audio("./sounds/".concat(selectedSound));
      audio.play();
    };
  };

  initPlayButton();
})();