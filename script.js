// getting the object
const button = document.getElementById("btn");
console.log(button);

// adding eventlistener to the button(search) and passing to a function
button.addEventListener("click", function handleclick(e) {
  //  preventing default behaviour of the form
  e.preventDefault();
  // getting valure of the input box
  const inputValue = document.getElementById("user").value;
  //   removing spaces from the value
  const name = inputValue.split(" ").join("");
  //   const inputRepos = document.getElementById("repos").value;
  //   const repos = inputRepos.split(" ").join("");
  //   console.log(name);
  //   console.log(repos);

  // checking if input field is empy or not
  if (inputValue == "") alert("Enter Username");
  //   fetching data from api by appending name of the user
  else
    fetch("https://api.github.com/users/" + name + "/repos")
      .then((response) => response.json())
      .then((data) => {
        for (i in data) {
          console.log(data);
          //   craeting a list and appended to the body
          var list = document.createElement("ol");
          list.setAttribute("class", "ordered-item");
          list.innerHTML = `<a href="${data[i].html_url}"><p>${data[i].html_url}</p></a>`;
          document.body.append(list);
        }
      });
});
