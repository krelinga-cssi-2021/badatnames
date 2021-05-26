function submit() {
    alert("submit")
}

function cancel() {
    alert("cancel")
}

document.addEventListener("DOMContentLoaded", () => {
    renderNavBar(document.querySelector("#navBar"))
    document.querySelector("#submit").addEventListener("click", submit)
    document.querySelector("#cancel").addEventListener("click", cancel)
})