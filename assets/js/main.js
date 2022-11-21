import Sounds from "./sounds.js"
import Timer from "./timer.js"
import backgroundSoundControls from "./backgroundSoundControls.js"
import {
    displayMinutes,
    displaySeconds,
    playButton,
    stopButton,
    plusButton,
    lessButton,
    soundButtonForest,
    soundButtonRain,
    soundButtonCafeteria,
    soundButtonFireplace
} from "./elements.js"

const sounds = Sounds()

Timer({
    sounds,
    displayMinutes,
    displaySeconds,
    playButton,
    stopButton,
    plusButton,
    lessButton
})

backgroundSoundControls({
    sounds,
    soundButtonForest,
    soundButtonRain,
    soundButtonCafeteria,
    soundButtonFireplace
})

