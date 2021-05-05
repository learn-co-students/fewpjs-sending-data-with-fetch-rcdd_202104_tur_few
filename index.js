function submitData (name, email) {
    let formData = {
        name: "Steve",
        email: "steve@steve.com"
      };
       
      let configObj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      };
return fetch("http://localhost:3000/users", configObj)
.then(Response => Response.json())
.then(function(object) {
  document.body.innerHTML = `${object.id}`;
})
.catch(function(obj) {
  document.body.innerHTML = `${obj.message}`;
});
}

