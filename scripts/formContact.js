// formulario contact us nos devuelve un objeto con la info que el user introduce

 const apiJsonPlace = (e) => {
// // prevent form llama a la función prevent default
     e.preventDefault()

 let userName = document.querySelector("#formName").value; 
 let userEmail = document.querySelector("#emailCount").value;
 let userPhone = document.querySelector("#phoneNumber").value; 
 let userMessage = document.querySelector("#messageText").value;
    
// console.log(userName);
// console.log(userMessage);

 fetch("https://jsonplaceholder.typicode.com/posts", {
//     // post llega a un sitio que si esta en http te da la info si no esta en http no te la devuelve
     method: "POST",
//     //permiten añadir información adicional para ayudar al servidor a entender que estamos enviando
     headers: {
         "Content-type": "application/json",
        Accept:"text/plain, application/json"
     },
//     //tengo un json y quiero que me lo convierta en string y pido el titulo y cuerpo
   body: JSON.stringify({
        title: userName,
        body: userMessage,
        userId: 1,
     })
 })
//     // si el fetch sale bien quiero que la respuesta sea response.json
     .then((response) => response.json())
//     //comprobación
    .then((fromData) => console.log(fromData))
//     // si no funciona envia error
     .catch((error) => console.log(error));

}
// // cuando se haya cargado .card-title llama/carga a la acción apiJsonPlace
 document.querySelector("#form-mail").addEventListener("submit", apiJsonPlace);