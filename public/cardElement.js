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