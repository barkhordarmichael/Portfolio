
const questionBtn = document.querySelectorAll('.questionBtn');
const questionBtn2 = document.querySelectorAll('.questionBtn2');
const questionBtn3 = document.querySelectorAll('.questionBtn3');
const questionBtn4 = document.querySelectorAll('.questionBtn4');

const popup = document.getElementById('popup');
//const meterValue = document.querySelector('#questions-meter').value
function closeModal(){
popup.style.display="none";




document.querySelector('.q1').style.display="grid";

console.log('clicked')
}


questionBtn.forEach((item) => {
    item.addEventListener('click', () => {
     document.querySelector('.q1').style.display="none";
     document.querySelector('.q2').style.display="grid";
     document.querySelector('meter').value="1.5"
    })
});
questionBtn2.forEach((item) => {
    item.addEventListener('click', () => {
      document.querySelector('.q1').style.display="none";
      document.querySelector('.q2').style.display="none";
      document.querySelector('.q3').style.display="grid";
      document.querySelector('meter').value="2.5"
    })
});

questionBtn3.forEach((item) => {
    item.addEventListener('click', () => {
      
      document.querySelector('.q1').style.display="none";
      document.querySelector('.q2').style.display="none";
      document.querySelector('.q3').style.display="none";
      document.querySelector('.q4').style.display="grid";
      document.querySelector('#submit_answer').style.display="grid";
      document.querySelector('meter').value="4";

      /*setTimeout((function(){document.querySelector('.q4').style.display="none";
            document.querySelector('.saving-answers').style.display="grid";
            startMeterAnim();
    }),500) */  
            
    })
});



questionBtn4.forEach((item) => {
  item.addEventListener('click', () => {
    
    document.querySelector('.q1').style.display="none";
    document.querySelector('.q2').style.display="none";
    document.querySelector('.q3').style.display="none";
    document.querySelector('.q4').style.display="none";

    

    setTimeout((function(){document.querySelector('.results').style.display="none";
          document.querySelector('.saving-answers').style.display="grid";
          startMeterAnim();
  }),500) 
          
  })
});

function clearDisplay(){
document.querySelector('.questions_container').style.display="none";
console.log('clicked')
            document.querySelector('.saving-answers').style.display="grid";
            document.querySelector('#submit_answer').style.display="none";
            document.querySelector('.results').style.display="none";
            startMeterAnim();


}
//document.querySelector('#submit_answer').addEventListener('click', () =>{
  
 /* document.querySelector('.q3').style.display="none";
  document.querySelector('.q2').style.display="none";
  document.querySelector('.q1').style.display="none";*/
  
  

  




// animated meter
const meter = document.getElementById('progress-meter');
let value = 0;
const updateMeter = () => {
    if (value <= 100) {
        meter.value = value;
        value++;
        window.requestAnimationFrame(updateMeter);
    }
};
const meterip = document.getElementById('progress-meter-ip');
let ip = 0;
const updateMeterIp = () => {
    if (ip <= 100) {
        meterip.value = ip;
        ip++;
        window.requestAnimationFrame(updateMeterIp);
    }
};
const meterPrize = document.getElementById('progress-meter-prize');
let prize = 0;
const updateMeterPrize = () => {
    if (prize <= 100) {
        meterPrize.value = prize;
        prize++;
        window.requestAnimationFrame(updateMeterPrize);
    }
};
function startMeterAnim(){
  
setTimeout(updateMeter, 2000);
setTimeout(updateMeterIp, 4000);
setTimeout(updateMeterPrize, 6000);
}
setTimeout(()=>{
document.querySelector('.game-journey').style.display="block";
document.querySelector('.saving-answers').style.display="none";
},19000);


// get ip address

const ipAddressElement = document.getElementById('ipAddress');
fetch('https://api64.ipify.org?format=json')
  .then(response => response.json())
  .then(data => {
    const ipAddress = data.ip;
    ipAddressElement.textContent = ipAddress;
  })
  .catch(error => console.error('An error occurred while fetching the IP address:', error));
  

// word guess game
// Array of fruit names
    var fruits = ["apple", "banana", "orange", "grape", "strawberry", "watermelon", "kiwi", "pineapple"];
    document.querySelector('.results').style.display="none";
    // Select a random fruit
    var randomIndex = Math.floor(Math.random() * fruits.length);
    var selectedFruit = fruits[randomIndex];
    
    // Initialize guessed word with underscores
    var guessedWord = "";
    for (var i = 0; i < selectedFruit.length; i++) {
      guessedWord += "_";
    }
    document.getElementById("word-container").textContent = guessedWord;

    // Function to handle letter guessing
    function guessLetter() {
      var guess = document.getElementById("guessInput").value.toLowerCase();
      document.getElementById("guessInput").value = ""; // Clear input field after each guess

      if (guess.length !== 1 || !guess.match(/[a-z]/)) {
        alert("Please enter a valid letter.");
        return;
      }

      var newGuessedWord = "";
      var letterFound = false;
      for (var i = 0; i < selectedFruit.length; i++) {
        if (selectedFruit[i] === guess && guessedWord[i] === "_") {
          newGuessedWord += guess;
          letterFound = true;
        } else {
          newGuessedWord += guessedWord[i];
        }
      }

      if (!letterFound) {
        document.getElementById("message").textContent = "Incorrect guess: " + guess+"😒";
        document.getElementById('message').style.color="red";
      } else {
        document.getElementById("message").textContent = "Correct guess: " + guess+"👍";
        document.getElementById('message').style.color="green";
      }

      guessedWord = newGuessedWord;
      document.getElementById("word-container").textContent = guessedWord;

      if (guessedWord === selectedFruit) {
        document.getElementById("message").textContent = "Congratulations! You guessed the word.";
        document.getElementById('game-input').style.display="none";
       
        setTimeout(randAmountGenerator,5000);
      }
    }

document.querySelector('#click-start').addEventListener('click',() =>{
document.querySelector('.game-section').style.display="block";
document.querySelector('.saving-answers').style.display="none";
document.querySelector('.game-journey').style.display="none";

})
//Display winning amount
function randAmountGenerator(){

setTimeout(()=>{
    document.querySelector('section').style.display="grid";
    const rand = Math.floor(Math.random(10)*500);
    for(i=0; i<50; i++){
    console.log(rand)
    }
    const moneyAmount = rand;
    document.querySelector('#you-won').style.display="block";
    document.querySelector('#amount').innerHTML=moneyAmount;
    document.querySelector('#fetching-prize-money').style.display="none";

    },3000);

    document.querySelector('#emailform').style.display="block";
}












