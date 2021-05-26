class Quiz {
    constructor(people, div) {
        this.people = people
        this.div = div
        this.current = null

        this.playAgain()
    }

    randomIndex() {
        return Math.floor(Math.random() * this.people.length)
    }

    randomize() {
        if (this.people.length === 1) {
            this.current = 0
            return
        }

        const oldIndex = this.current
        do {
            this.current = this.randomIndex()
        } while (this.current === oldIndex)
    }

    redrawCard() {
        this.div.innerHTML = ''
        const newCard = newCardElement(this.people[this.current])
        newCard.querySelector('p').classList.add('is-hidden')
        this.div.appendChild(newCard)
    }

    playAgain() {
        this.randomize()
        this.redrawCard()
    }

    reveal() {
        this.div.querySelector('p').classList.remove('is-hidden')
    }
}

document.addEventListener("DOMContentLoaded", () => {
    renderNavBar(document.querySelector("#navBar"))
    handleAuth(() => {
        const people = []
        firebase.database().ref(`users/${googleUser.uid}/people`).once('value', (snapshot) => {
            snapshot.forEach((entry) => {
                people.push(entry.val())
            })
            const quiz = new Quiz(people, document.querySelector('#card'))
            document.querySelector('#reveal').addEventListener('click', () => {
                quiz.reveal()
            })
            document.querySelector('#play-again').addEventListener('click', () => {
                quiz.playAgain()
            })
        })
    })
})