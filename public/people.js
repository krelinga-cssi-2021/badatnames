class PeopleGrid {
    constructor(div, columns) {
        this.div = div
        this.columns = columns
        this.currentRow = null
        this.currentColumns = 0
    }

    needNewRow() {
        return this.currentRow === null || this.currentColumns >= this.columns
    }

    newRow() {
        this.currentColumns = 0
        const newRow = document.createElement("div")
        newRow.classList.add("columns")
        this.currentRow = newRow
        this.div.appendChild(newRow)
    }

    add(entry) {
        if (this.needNewRow()) { this.newRow() }
        const newDiv = document.createElement('div')
        newDiv.classList.add('column')
        newDiv.classList.add('is-one-third')
        newDiv.appendChild(newCardElement(entry))
        this.currentRow.appendChild(newDiv)
        this.currentColumns++
    }
}

document.addEventListener("DOMContentLoaded", () => {
    renderNavBar(document.querySelector("#navBar"))
    handleAuth(() => {
        firebase.database().ref(`users/${googleUser.uid}/people`).once('value', (snapshot) => {
            const COLUMNS = 3
            const grid = new PeopleGrid(document.querySelector('body'), COLUMNS)
            snapshot.forEach((entry) => {
                grid.add(entry.val())
            })
        })
    })
})