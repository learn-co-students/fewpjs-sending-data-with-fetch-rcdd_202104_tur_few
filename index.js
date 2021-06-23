const BASE_URL = "http://localhost:3000" // this database server has /dogs, /cats, /users, /robots

let btn = document.getElementById("btn");
btn.addEventListener("click", example);

// async function example(e) {
//     console.log(e);
//     console.log("hey")

//     e.preventDefault();

//     async function submit(name="ali", email="example") {
//         let promise = await fetch(BASE_URL + "/users", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//                 "Accept": "application/json"
//             },
//             body: JSON.stringify({name: name, email: email})
//         })

//         let json = await promise.json();
//         console.log(promise)
//         console.log(json)

//         // let promise = fetch(BASE_URL + "/users")
//         // console.log(promise)
//     }
//     submit()
// }

function submitData(name="ali", email="example") {

    return fetch(BASE_URL + "/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({name: name, email: email})
    })
    .then((response) => response.json())
    .then((json) => {

        let infoDiv = document.getElementById("info"); // a div that has divCards
        let divCard = document.createElement("div"); // a div that has the info about one person
        let jsonValues = Object.values(json); // all the values in the object
        console.log(json)
        console.log(jsonValues)
        jsonValues.forEach((value) => { // for each value, create a p element, change it's content to the current value and appen it to the divCard
            let p = document.createElement("p");
            p.innerText = value;
            divCard.appendChild(p);
        })
        infoDiv.appendChild(divCard);
    })
    .catch((error) => {
        let errorText = document.createElement("p");
        errorText.innerText = error.message;
        document.getElementById("error").appendChild(errorText) 
    })
}

// submitData("ali", "example")