
// nos traemos el título y el texto...
// la solución así sola no es 100% correcta puesto q ue sólo serviría para este post ya coje el 1º elemento solo ( para esto sirve pero no más)

const apiJasonProjectInfo = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((res) => {
            let projectText = `
                <div class="cont-about-project">
                <h1>${res[0].title}</h1>
                <div class="project-info">
                    <h4 class="type">Type of project</h4>
                    <div class="text-drch">
                        <p class="status">Completed on</p>
                        <p class="data">0/0/00</p>
                    </div>
                </div>
                <div class="container-image">
                    <img src="./images/projects-section/1.jpg" alt="Simplify Abstract">
                    <img src="./images/projects-section/1.jpg" class="blur" alt="Simplify Abstract">
                </div>
                <div class="project-description">
                    <p>${res[0].body}</p>
                </div>
            </div>`
            
            document.querySelector("#project-page").innerHTML = projectText;
        })
        .catch((error) => console.log(error));
}
apiJasonProjectInfo()