
let buttons = document.querySelectorAll(".numbers");
let displays = document.querySelector(".Display");
let equals = document.querySelector(".Equalto");
let clears = document.querySelector(".Clear");

buttons.forEach((data)=>{
    data.addEventListener("click",(e)=>{
        let inputData = e.target.dataset.num;
        displays.value+=inputData;
    })
});


equals.addEventListener("click",(e)=>{
    if(displays.value===""){
        displays.value="";
    }else{
        let answer = eval(displays.value);
        displays.value=answer;
    }
})

clears.addEventListener("click",(e)=>{
    displays.value="Enter Some Problems";
})





    
