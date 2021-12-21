(
    function(){
        const setTimeStamp = function(){
            const timeStamp = document.getElementById("timestamp-value");

            timeStamp.innerHTML = new Date().toISOString();
        }

        const initPlayButton = function(){
            const playButton = document.getElementById("play-button");

            playButton.onclick = function(){
                setTimeStamp();

                const selectedSound = document.querySelector('input[name="sound"]:checked').value;

                var audio = new Audio(`./sounds/${selectedSound}`);
                audio.play();
            }
        }

        initPlayButton();
    }
)();