// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!
const likes = document.querySelectorAll(".like-glyph");
for (let like of likes) {
  like.addEventListener("click", heartClick);
  function heartClick() {
    if (like.textContent === EMPTY_HEART) {
      mimicServerCall()
        .then((response) => {
          console.log(response);
          like.classList.add("activated-heart");
          like.textContent = FULL_HEART;
        })
        .catch((error) => {
          const errorMessage = document.querySelector("#modal");
          errorMessage.classList.remove("hidden");
          setTimeout(() => {
            errorMessage.classList.add("hidden");
          }, 3000);
        });
    } else if (like.textContent === FULL_HEART) {
      like.classList.remove("activated-heart");
      like.textContent = EMPTY_HEART;
    }
  }
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
