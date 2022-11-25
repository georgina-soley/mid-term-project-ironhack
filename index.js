// Sacamos la información para llenar el título y texto de las cards de proyectos( home & projects)


const apiJasonProject = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((res) => {
            let infoProject = "";
            // con el for each hacems un loop por el indice del array de info y extraemos lo que queremos y lo substituimos donde marcamos en la parte inferior
            // .slice()numero per el que empieza y el index en el que acaba el 3 no lo pone 
            res.slice(0, 3).forEach((post, index) => {
                infoProject += `
                <div class="card">
                    <div class="card-img-${index}" title="Abstract form Simplify">
                        <!-- <img src="./images/projects-section/1.jpg" alt="Abstract form Simplify"> -->
                    </div>
                    <div class="card-content">
                        <div class="card-text">
                            <h3 class="card-title">${post.title}</h3>
                            <p class="card-description">${post.body}</p>
                            <a href="new-projects.html">Learn More</a>
                        </div>
                    </div>
                </div>`
            })
            document.querySelector("#cardsBox").innerHTML = infoProject;
            // conectamos con la caja padre de donde van todas las class .card
        })
        .catch((error) => console.log(error));
}
apiJasonProject()