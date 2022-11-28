import Sounds from "./sounds.js";
import Timer from "./timer.js";
import BackgroundSoundControls from "./backgroundSoundControls.js";
import DarkMode from "./darkMode.js";
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
    soundButtonFireplace,
    sliderVolumeForest,
    sliderVolumeRain,
    sliderVolumeCafeteria,
    sliderVolumeFireplace,
} from "./elements.js"

const sounds = Sounds();

Timer({
    sounds,
    displayMinutes,
    displaySeconds,
    playButton,
    stopButton,
    plusButton,
    lessButton
});

BackgroundSoundControls({
    sounds,
    soundButtonForest,
    soundButtonRain,
    soundButtonCafeteria,
    soundButtonFireplace,
    sliderVolumeForest,
    sliderVolumeRain,
    sliderVolumeCafeteria,
    sliderVolumeFireplace
});