console.log("dom content loaded");
/*  document.querySelector("#clickMe").addEventListener("click", makeReq); */

async function makeReq() {
  const userName = document.querySelector("#userName").value;
  const res = await fetch(`/api?student=${userName}`);
  const data = await res.json();

  console.log(data);
  document.querySelector("#personName").textContent = data.name;
  document.querySelector("#personStatus").textContent = data.status;
  document.querySelector("#personOccupation").textContent =
    data.currentOccupation;
}
/* returnns an array of buttons */
const buttonList = document.querySelectorAll("button");

/* loops through the buttons */
console.log(buttonList);
for (let index = 0; index < buttonList.length; index++) {
  const button = buttonList[index];
  button.addEventListener("click", async () => {
    let request = {}; // this is the request object that we will send with the fetch
    /* each of our buttons in the htm needs an HTM name atribute this is what we will use to set wheter its rock paper or scissors*/
    if (button.name == "rock") {
      request.type = "rock";
    } else if (button.name == "paper") {
      request.type = "paper";
    } else if (button.name == "scissors") {
      request.type = "scissors";
    }
    const address = "/rockpaperscissors";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify(request),
    };
    console.log(request);
    const fetchAnswer = await fetch(address, options);
    const resObject = await fetchAnswer.json();
    const response = resObject.response;
    console.log(response);

    /* console.log(
        ` the player used ${request.type} and the computer returned ${response}`
      );
 */
    if (
      (request.type == "paper" && response == "scissors") ||
      (request.type == "rock" && response == "paper") ||
      (request.type == "scissors" && response == "rock")
    ) {
      console.log("Sorry you lose");
    } else if (
      (request.type == "rock" && response == "scissors") ||
      (request.type == "paper" && response == "rock") ||
      (request.type == "scissors" && response == "paper")
    ) {
      console.log("Congratulations You win");
    } else if (request.type == response) {
      console.log("Hooo , its a stalemate please play again");
    }

    /* const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/JSON",
        },
        mode: "cors",
        redirect: "follow",
        body: JSON.stringify(request),
      }; */
    console.log(response);
  });
}

/*  fetch(request, callback); */ // callback :here we will construct the response
