const minus = document.getElementById('minus');
const plus = document.getElementById('plus');
const addToBasket = document.getElementById('add_to_basket');
let count = 0;


minus.addEventListener('click', ()=>{
if(minus.click){

  count = count--
  document.getElementById('counter').value= count--
  console.log(count)
  console.log('clicked')
  
  }
  
})



plus.addEventListener('click', ()=>{
if(plus.click){
  count = count++
  document.getElementById('counter').value= count++
  console.log(count)
  console.log('clicked')
  
  }
  
})

function reduceItems(){
	
 
}
function addItems(){
if(plus.click){
count = count++
document.getElementById('counter').value= count++

console.log(count)
}
}
document.getElementById('two').addEventListener('mouseover', () =>{
document.getElementById('one').src="https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3BvcnRzJTIwc2hvZXN8ZW58MHwxfDB8fHww";
document.getElementById('two').style.filter="grayscale(0%)"
document.getElementById('two').addEventListener('mouseout', ()=>{
document.getElementById('two').style.filter="grayscale(100%)"

})
})
document.getElementById('three').addEventListener('mouseover', () =>{
document.getElementById('one').src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNuZWFrZXJ8ZW58MHx8MHx8fDA%3D";
document.getElementById('three').style.filter="grayscale(0%)";
document.getElementById('three').addEventListener('mouseout', ()=>{
document.getElementById('three').style.filter="grayscale(100%)"
    
    })
  
})
document.getElementById('four').addEventListener('mouseover', () =>{
document.getElementById('one').src="https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNuZWFrZXJ8ZW58MHx8MHx8fDA%3D" 
document.getElementById('four').style.filter="grayscale(0%)";
document.getElementById('four').addEventListener('mouseout', ()=>{
document.getElementById('four').style.filter="grayscale(100%)"
    
    })
})

document.getElementById('five').addEventListener('mouseover', () =>{
document.getElementById('one').src="https://images.unsplash.com/photo-1588099768550-4014589e03e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNuZWFrZXJ8ZW58MHx8MHx8fDA%3D";
document.getElementById('five').style.filter="grayscale(0%)";
document.getElementById('five').addEventListener('mouseout', ()=>{
document.getElementById('five').style.filter="grayscale(100%)"
    
    })
})

