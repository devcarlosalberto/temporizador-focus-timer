const buttonPressAudio = new Audio("./assets/sounds/buttonPress.wav")
const timerStoppedAudio = new Audio("./assets/sounds/timerStopped.wav")
const cafeteriaAudio = new Audio("./assets/sounds/cafeteria.wav")
const fireplaceAudio = new Audio("./assets/sounds/fireplace.wav")
const forestAudio = new Audio("./assets/sounds/forest.wav")
const rainAudio = new Audio("./assets/sounds/rain.wav")

cafeteriaAudio.loop = true
fireplaceAudio.loop = true
forestAudio.loop = true
rainAudio.loop =true

export default function Sounds() {
    function stopAllBackgroundAudios() {
        const allBackgroundAudios = [backgroundForestSound, backgroundRainSound, backgroundCafeteriaSound, backgroundFireplaceSound]
        for (let backgroundAudio of allBackgroundAudios) {
            backgroundAudio.soundActive = false
            backgroundAudio.stop()
        }
    }

    const buttonPress = {
        play() { buttonPressAudio.play() }
    }

    const timerStopped = {
        play() { timerStoppedAudio.play() }
    }

    const backgroundForestSound = {
        soundActive: false,
        play() {
            stopAllBackgroundAudios()
            forestAudio.play()
            this.soundActive = true
        },
        stop() {
            forestAudio.pause()
            this.soundActive = false
        },
        toggle() {
            if (this.soundActive) {
                this.stop()
            } else {
                this.play()
            }
        },
        setVolume(vol) {
            forestAudio.volume = vol
        }
    }

    const backgroundRainSound = {
        soundActive: false,
        play() {
            stopAllBackgroundAudios()
            rainAudio.play()
            this.soundActive = true
        },
        stop() {
            rainAudio.pause()
            this.soundActive = false
        },
        toggle() {
            if (this.soundActive) {
                this.stop()
            } else {
                this.play()
            }
        },
        setVolume(vol) {
            rainAudio.volume = vol
        }
    }

    const backgroundCafeteriaSound = {
        soundActive: false,
        play() {
            stopAllBackgroundAudios()
            cafeteriaAudio.play()
            this.soundActive = true
        },
        stop() {
            cafeteriaAudio.pause()
            this.soundActive = false
        },
        toggle() {
            if (this.soundActive) {
                this.stop()
            } else {
                this.play()
            }
        },
        setVolume(vol) {
            cafeteriaAudio.volume = vol
        }
    }

    const backgroundFireplaceSound = {
        soundActive: false,
        play() {
            stopAllBackgroundAudios()
            fireplaceAudio.play()
            this.soundActive = true
        },
        stop() {
            fireplaceAudio.pause()
            this.soundActive = false
        },
        toggle() {
            if (this.soundActive) {
                this.stop()
            } else {
                this.play()
            }
        },
        setVolume(vol) {
            fireplaceAudio.volume = vol
        }
    }

    return {
        buttonPress,
        timerStopped,
        backgroundForestSound,
        backgroundRainSound,
        backgroundCafeteriaSound,
        backgroundFireplaceSound,
        stopAllBackgroundAudios
    }
}