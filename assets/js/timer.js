let timeoutInterval
let minutes = 25
let seconds = 0
let timerIsActive = false

export default function Timer({
    sounds,
    displayMinutes,
    displaySeconds,
    playButton,
    stopButton,
    plusButton,
    lessButton
}) {
    function play() {
        countDown()
    }   

    function stop() {
        clearTimeout(timeoutInterval)
        minutes = 25
        seconds = 0
        updateDisplay()
        sounds.timerStopped.play()
    }

    function addFiveMinutes() {
        minutes += 5
        updateDisplay()
    }

    function removeFiveMinutes() {
        if ((minutes - 5) > 0) {
            minutes -= 5
            updateDisplay()
        }
    }

    function countDown() {
        timeoutInterval = setTimeout(() => {
            seconds--

            if (seconds == -1) {
                seconds = 59
                minutes--
            }

            updateDisplay()

            if (minutes == 0 && seconds == 0) {
                stop()
                return
            }
    
            countDown()
        }, 1000)
    }

    function updateDisplay() {
        displayMinutes.innerText = minutes.toString().padStart(2, "0")
        displaySeconds.innerText = seconds.toString().padStart(2, "0")
    }

    playButton.addEventListener("click", () => {
        if (!timerIsActive) {
            sounds.buttonPress.play()
            play()
            timerIsActive = true
        }
    })

    stopButton.addEventListener("click" ,() => {
        if (timerIsActive) {
            sounds.buttonPress.play()
            stop()
            timerIsActive = false
        }
    })

    plusButton.addEventListener("click", () => {
        sounds.buttonPress.play()
        addFiveMinutes()
    })

    lessButton.addEventListener("click", () => {
        sounds.buttonPress.play()
        removeFiveMinutes()
    })
}

