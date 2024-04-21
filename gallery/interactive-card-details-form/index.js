let nameInputField = document.querySelector('#nameInputField');
let nameOnCard = document.querySelector('#name');
let cardNumberEl = document.querySelector('#card-number');
let numberOnCard = document.querySelector('#number-on-card');
let monthEl = document.querySelector('#month');
let yearEl = document.querySelector('#year');
let monthOnCard = document.querySelector('#month-on-card');
let yearOnCard = document.querySelector('#year-on-card')
let cvc = document.querySelector('#cvc');
let cvcOnCard = document.querySelector('#cvc-on-card');
let date = new Date();

// Set default year
function setYear(){
  yearEl.value = date.getFullYear()
  
}
year.innerHTML= date.getFullYear();

// Update name on the front of the card
function updateName(){
	const x = nameInputField.value;
  nameOnCard.innerHTML = x;
  
 
}
// Update card number on the front of the card
function updateCardNumber(){
	const cardNumber = cardNumberEl.value;
    
    numberOnCard.innerHTML = cardNumber;
}
// Check card number is 16 digits and is valid numbers
function checkNumberOfDigits(){
  const cardNumber = cardNumberEl.value;
  if(cardNumber.length < 16 || isNaN(cardNumber)){
    document.querySelector('#warning-message').innerHTML="You have invalid charaters or not enought digits. Please check details."
    
  }
  else{
    
    document.querySelector('#warning-message').style.color="transparent";
  };
}
// Update month of the year on front of the card
function validateMonth(){
  let leadingZero = monthEl.value.padStart(2,'0');
  
monthOnCard.innerHTML = leadingZero;
}
// Update year on front of card

function validateYear(){
  if(yearEl.value< date.Year()){
  
yearEl.style.border="1px solid red"

}
else{
  yearOnCard.innerHTML= yearEl.value;
}
}

function validateCvc(){
  cvcOnCard.innerHTML = cvc.value;
}

/*document.querySelector('#garamond').addEventListener('click',()=>{
  document.querySelector('.card-front').style.fontFamily="garamond";
});
*/
function changeFont(){
  
  const cardFront = document.querySelector('.card-front').classList;
  
  cardFront.add('card-front-sofia');
  cardFront.style.fontSize="24px";
  console.log("clicked")
}