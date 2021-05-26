function newCardElement(personInfo) {
    const html = `
        <div class="card">
            <div class="card-image">
                <figure class="image is-4by3">
                    <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
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
    document.querySelector("#first").appendChild(newCardElement({name: "Andy"}))
    document.querySelector("#second").appendChild(newCardElement({name: "Suzy"}))
    document.querySelector("#third").appendChild(newCardElement({name: "Hygge"}))
})