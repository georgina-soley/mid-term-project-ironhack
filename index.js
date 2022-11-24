// formulario contact us

// const apiJsonPlace = (e) => {
// // prevent form llama a la función prevent default
//      e.preventDefault()

// //     let projectTitle = document.querySelector(".card-title").innerHTML; 
// //     let projSubTitle = document.querySelector(".card-description").innerHTML;
// //     // let projTextDescription = document.querySelector(".project-description").innerHTML;
// //     console.log(projectTitle);
// //     console.log(projSubTitle);

// //     fetch("https://jsonplaceholder.typicode.com/posts", {
// //         // post llega a un sitio que si esta en http te da la info si no esta en http no te la devuelve
// //         method: "POST",
// //         //permiten añadir información adicional para ayudar al servidor a entender que estamos enviando
// //         // headers: { }
// //         //tengo un json y quiero que me lo convierta en string y pido el titulo y cuerpo
// //         body: JSON.stringify({ title: projectTitle, body: projSubTitle })
// //     })
// //         // si el fetch sale bien quiero que la respuesta sea response.json
// //         .then((response) => response.json())
// //         //comprobación
// //         .then((fromData) => console.log(fromData))
// //         // si no funciona envia error
// //         .catch((error) => console.log(error));
    
// // }
// // // cuando se haya cargado .card-title llama/carga a la acción apiJsonPlace
// // document.querySelector(".card-title").addEventListener("submit", apiJsonPlace);


// let userName = document.querySelector("#formName").value; 
// let userEmail = document.querySelector("#emailCount").value;
// let userPhone = document.querySelector("#phoneNumber").value; 
// let userMessage = document.querySelector("#messageText").value;
    
// // let projTextDescription = document.querySelector(".project-description").innerHTML;
// console.log(userName);
// console.log(userMessage);

// fetch("https://jsonplaceholder.typicode.com/posts", {
//     // post llega a un sitio que si esta en http te da la info si no esta en http no te la devuelve
//     method: "POST",
//     //permiten añadir información adicional para ayudar al servidor a entender que estamos enviando
//     headers: {
//         "Content-type": "application/json",
//         Accept:"text/plain, application/json"
//     },
//     //tengo un json y quiero que me lo convierta en string y pido el titulo y cuerpo
//     body: JSON.stringify({
//         title: userName,
//         body: userMessage,
//         userId: 1,
//     })
// })
//     // si el fetch sale bien quiero que la respuesta sea response.json
//     .then((response) => response.json())
//     //comprobación
//     .then((fromData) => console.log(fromData))
//     // si no funciona envia error
//     .catch((error) => console.log(error));

// }
// // cuando se haya cargado .card-title llama/carga a la acción apiJsonPlace
// document.querySelector("#form-mail").addEventListener("submit", apiJsonPlace);


const apiJasonProject = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((res) => {
            let infoProject = "";
            
            // numero per el que empieza y el index en el que acaba el 3 no lo pone 
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
                            <a href="#">Learn More</a>
                        </div>
                    </div>
                </div>`
            })
            document.querySelector("#cardsBox").innerHTML = infoProject;
        })
        .catch((error) => console.log(error));
}
apiJasonProject()