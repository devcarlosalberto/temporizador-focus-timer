let lastCardActived

export default function({
    sounds,
    soundButtonForest,
    soundButtonRain,
    soundButtonCafeteria,
    soundButtonFireplace
}) {
    function resetBackgroundOfAllCards() {
        let cards = [soundButtonForest.parentElement, soundButtonRain.parentElement,
                    soundButtonCafeteria.parentElement, soundButtonFireplace.parentElement]
        for (let card of cards) {
            card.classList.remove("card-sound-active")
        }
    }

    function toggleCardStyle(childCardButtonOfCard) {

        let currentCard = childCardButtonOfCard.parentElement
        let buttonIconSvg = document.querySelector(`#${childCardButtonOfCard.id} > svg > path`)

        if (lastCardActived == currentCard) {
            currentCard.classList.remove("card-sound-active")
            buttonIconSvg.setAttribute("fill", "#323238")
            lastCardActived = undefined
        } else if (lastCardActived != currentCard) {
            if (lastCardActived) { lastCardActived.classList.remove("card-sound-active") }
            currentCard.classList.add("card-sound-active")
            buttonIconSvg.setAttribute("fill", "white")
            lastCardActived = currentCard
        }
    }

    function setBackgroundSound(childCardButtonOfCard, sound) {
        toggleCardStyle(childCardButtonOfCard)
        sound.toggle()
    }

    soundButtonForest.addEventListener("click", () => { setBackgroundSound(soundButtonForest, sounds.backgroundForestSound) })
    soundButtonRain.addEventListener("click", () => { setBackgroundSound(soundButtonRain, sounds.backgroundRainSound) })
    soundButtonCafeteria.addEventListener("click", () => { setBackgroundSound(soundButtonCafeteria, sounds.backgroundCafeteriaSound) })
    soundButtonFireplace.addEventListener("click", () => { setBackgroundSound(soundButtonFireplace, sounds.backgroundFireplaceSound) })
}