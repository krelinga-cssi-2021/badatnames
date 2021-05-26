function submit() {
    const name = document.querySelector("#name").value
    const imgUrl = document.querySelector("#img-url").value
    // TODO(krelinga): add validation here.

    firebase.database().ref(`users/${googleUser.uid}/people`).push({
        name: name,
        imgUrl: imgUrl
    })
    .then(() => {
        // Redirect back to people page.
        window.location = "people.html"
    })
}

function cancel() {
    alert("cancel")
}

document.addEventListener("DOMContentLoaded", () => {
    handleAuth()
    renderNavBar(document.querySelector("#navBar"))
    document.querySelector("#submit").addEventListener("click", submit)
    document.querySelector("#cancel").addEventListener("click", cancel)
})