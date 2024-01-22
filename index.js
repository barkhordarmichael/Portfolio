let date = new Date();

const year = date.getFullYear();
console.log(year)

const copyrightYear=document.querySelector("#year");
copyrightYear.innerText = year;




$(document).ready(function(){
  $("button").click(function(){
    $("p").toggle("slow", function(){
      
    });
  });
});
