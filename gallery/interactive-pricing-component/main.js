let toggleSwitch = document.querySelector('#yearly');
let monthly = document.querySelector('#monthly');
let range = document.querySelector('#range-selector');
let pricePerMonth = document.querySelector('#price');
let pageViews = document.querySelector('#page-views');
let discount = document.querySelector('discount');




function rangeSelector(){
let viewsResult = 25 * range.value/10;
pageViews.innerHTML = (`${viewsResult}K PAGEVIEWS`)
pricePerMonth.innerHTML = range.value;



}
function monthlyCheck(){
 document.getElementById('discount').style.color="grey";
}
function toggle(){
document.getElementById('discount').style.color="red";
}