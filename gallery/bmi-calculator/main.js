
        let height = document.getElementById('height');
        let weight =document.getElementById('weight');

 
function calculator(){
        
        let results = document.getElementById('results');
        let errorMessage = document.getElementById('error-message');
        const metric = document.getElementById('metric');
        const imperial =document.getElementById('imperial');
        const rating = document.getElementById('rating');

    
    
    if (height.value < 0 || weight.value < 0){
    errorMessage.innerHTML=('Number can not be less than 0');
    }
   

    
  else{

  let calculations = height.value * height.value / weight.value;
    if(isNaN(calculations)){
    errorMessage.innerHTML=('Please enter numbers for Height & Weight.');

    }
  else{
    results.innerHTML=calculations.toFixed(2);
            if(calculations<18.5){
                rating.innerHTML='underweight'
                rating.style.color="red"
                rating.style.fontSize="15px"
            }
            if(calculations >18.5 & calculations < 24.9){
                rating.innerHTML='normal'
            }
            if(calculations > 25 & calculations < 29.9){
                crating.innerHTML='overweight'
            }
            else if(calculations > 30){
                rating.innerHTML='obese'
            }
        
        }
  }
    
}






























