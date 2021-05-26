function renderNavBar(renderIn) {
    const html = `
        <nav class="navbar">
            <div class="navbar-menu">
                <div class="navbar-start">
                    <a class="navbar-item" href="people.html">
                        People
                    </a>
                    <a class="navbar-item" href="newPerson.html">
                        New Person
                    </a>
                    <a class="navbar-item" href="quiz.html">
                        Quiz
                    </a>
                </div>
            </div>
        </nav>
    `
    renderIn.innerHTML = html
}