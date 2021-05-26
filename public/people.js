function newCardElement(personInfo) {
    const html = `
        <div class="card">
            <div class="card-image">
                <figure class="image is-4by3">
                    <img src="${personInfo.imgUrl}" alt="Placeholder image">
                </figure>
            </div>
            <div class="card-content">
                <div class="media>
                    <div class="media-content>
                        <p class="title is-4">${personInfo.name}</p>
                    </div>
                </div>
            </div>
        </div>
    `
    const element = document.createElement("div")
    element.innerHTML = html
    return element
}

document.addEventListener("DOMContentLoaded", () => {
    renderNavBar(document.querySelector("#navBar"))
    handleAuth(() => {
        document.querySelector("#first").appendChild(newCardElement({name: "Andy", imgUrl: "https://c402277.ssl.cf1.rackcdn.com/photos/6526/images/hero_full/sloth_%28c%29_Jorge_Salas_International_Expeditions.JPG?1394634201"}))
        document.querySelector("#second").appendChild(newCardElement({name: "Suzy", imgUrl: "https://www.prestigeanimalhospital.com/sites/default/files/puppy-dental-care.jpg"}))
        document.querySelector("#third").appendChild(newCardElement({name: "Hygge", imgUrl: "https://icatcare.org/app/uploads/2019/09/The-Kitten-Checklist-1.png"}))
        firebase.database().ref(`users/${googleUser.uid}/people`).once('value', (snapshot) => {
            snapshot.forEach((entry) => {
                const newDiv = document.createElement('div')
                newDiv.classList.add('column')
                newDiv.appendChild(newCardElement(entry.val()))
                document.querySelector('.columns').appendChild(newDiv)
            })
        })
    })
})