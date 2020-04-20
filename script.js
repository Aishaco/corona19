/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");

let searchbutton = document.querySelector("#search")
let tweetsContainer = document.querySelector("#tweetsContainer")
let hashtagButton = document.querySelector("#hashtag")
//add an event listener to the button. Run the function sendApiRequest when the button is clicked

searchbutton.addEventListener("click",()=>{
  
  let input = document.querySelector("input")
  console.log(input.value)
  
  tweetsContainer.innerHTML += ` <div id="input"> <h3> ${input.value} </h3> </div>`
})

hashtagButton.addEventListener("click", ()=>{
  let input = document.querySelector("#input")
   console.log(input.value)
  
  let hashtagTweet = input.value.toUpperCase()
  
  tweetsContainer.innerHTML += ` <div id="input"> <h3> ${hashtagTweet} #Quarantine2020 </h3> </div>`
})







