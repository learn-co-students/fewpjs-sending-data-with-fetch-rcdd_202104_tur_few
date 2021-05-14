// Add your code here

function submitData (userName, userEmail) {

    const destinationURL = "http://localhost:3000/users";

    const configurationObject = {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
        },
        body: JSON.stringify({
        name: `${userName}`,
        email: `${userEmail}`
        })
    };

    return fetch(destinationURL, configurationObject)
           .then(response => response.json())
           .then(json => (document.body.innerHTML = json['id']))
           .catch(err => (document.body.innerHTML = err.message))
}