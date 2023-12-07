
result="";
btn=document.querySelectorAll(".button")
Array.from(btn).forEach((btn)=>{
btn.addEventListener("click",(b)=>{
  
if(b.target.innerHTML=="="){
  result=eval(result);
  document.querySelector("input").value=result;
}

else if(b.target.innerHTML=="C"){
  result="";
  document.querySelector("input").value=result;
}

  else{result=result+b.target.innerHTML;
    document.querySelector("input").value=result;} 
    
})
})