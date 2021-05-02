// Add your code here

function submitData(name,email) {


let formData = {
    name,
    email,
  };

  const configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  };

  return fetch("http://localhost:3000/users", configObj)
    .then(response => response.json())
    .then(json => (document.body.innerHTML = json.id))
    .catch(error => (document.body.innerHTML = error.message));
}
