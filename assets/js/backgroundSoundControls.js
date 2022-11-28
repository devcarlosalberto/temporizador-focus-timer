let currentButtonActived;

export default function BackgroundSoundControls({
    sounds,
    soundButtonForest,
    soundButtonRain,
    soundButtonCafeteria,
    soundButtonFireplace,
    sliderVolumeForest,
    sliderVolumeRain,
    sliderVolumeCafeteria,
    sliderVolumeFireplace
}) {
    function toggleSyleButton(buttonClicked) {
        let buttonIconSvg = document.querySelector(`#${buttonClicked.id} > svg > path`)
        
        if (currentButtonActived == buttonClicked) {
            buttonClicked.parentElement.classList.remove("card-sound-active")
            buttonIconSvg.setAttribute("fill", "#323238")
            currentButtonActived = undefined
        } else if (currentButtonActived != buttonClicked) {
            if (currentButtonActived) {
                let currentCardActived = currentButtonActived.parentElement
                let currentButtonIconSvgActived = document.querySelector(`#${currentButtonActived.id} > svg > path`)
                currentCardActived.classList.remove("card-sound-active")
                currentButtonIconSvgActived.setAttribute("fill", "#323238")
                console.log(currentButtonActived)
            }
            buttonClicked.parentElement.classList.add("card-sound-active")
            buttonIconSvg.setAttribute("fill", "white")
            currentButtonActived = buttonClicked
        }
    }

    function setBackgroundSound(buttonClicked, sound) {
        toggleSyleButton(buttonClicked)
        sound.toggle()
    }

    soundButtonForest.addEventListener("click", () => { 
        setBackgroundSound(soundButtonForest, sounds.backgroundForestSound)
    })

    sliderVolumeForest.addEventListener("input", () => {
        let volume = sliderVolumeForest.value / 100
        sounds.backgroundForestSound.setVolume(volume)
    })


    soundButtonRain.addEventListener("click", () => { 
        setBackgroundSound(soundButtonRain, sounds.backgroundRainSound)
    })

    sliderVolumeRain.addEventListener("input", () => {
        let volume = sliderVolumeRain.value / 100
        sounds.backgroundRainSound.setVolume(volume)
    })


    soundButtonCafeteria.addEventListener("click", () => { 
        setBackgroundSound(soundButtonCafeteria, sounds.backgroundCafeteriaSound) 
    })

    sliderVolumeCafeteria.addEventListener("input", () => {
        let volume = sliderVolumeCafeteria.value / 100
        sounds.backgroundCafeteriaSound.setVolume(volume)
    })


    soundButtonFireplace.addEventListener("click", () => { 
        setBackgroundSound(soundButtonFireplace, sounds.backgroundFireplaceSound)
    })

    sliderVolumeFireplace.addEventListener("input", () => {
        let volume = sliderVolumeFireplace.value / 100
        sounds.backgroundFireplaceSound.setVolume(volume)
    })
}