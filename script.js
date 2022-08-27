let num = 0;
let plusClickCounter = 0
let minusClickCounter = 0
const yellow = "#fc7703";
const selectosAndColors = {
"#redBtn":"red",
"#greenBtn":"green",
"#blueBtn": "blue",
"#yellowBtn":yellow
}
const opacityCounter = {
 "#redBtn": 0.2,
"#greenBtn":0.2,
"#blueBtn": 0.2,
"#yellowBtn":0.2
}
const counter = document.querySelector("#counter");
const plusNum = document.querySelector("#plusbtn")
  plusNum.addEventListener('click', ()=>{
    num ++;
    plusClickCounter ++;
    counter.innerText = num;
  });

const minusNum = document.querySelector("#minusbtn")
  minusNum.addEventListener('click', ()=>{
    num--;
    minusClickCounter ++;
    counter.innerText = num;
});
 function borderCounter(counter){
  
}

for (let selector in selectosAndColors ){
  const color = selectosAndColors[selector];
  const btnColors = document.querySelector(selector);

  btnColors.addEventListener ( 'click', ()=>{
    counter.style.color = color ; 
  })
  plusNum.addEventListener('click', ()=>{   
    
    const opacity = opacityCounter[selector] += 0.1 ;
    counter.style.opacity = opacity;
    
  })
  
  minusNum.addEventListener('click', ()=>{ 
    
    const opacity = opacityCounter[selector] -= 0.1 ;
    counter.style.opacity = opacity;
   
  })
}
 
const clickStats = document.querySelector("#statusBtn");
  clickStats.addEventListener ( "click", ()=>{
    alert(`The plus button was clicked: ${plusClickCounter} times`);
    alert(`The minus button was clicked: ${minusClickCounter} times`)
  })