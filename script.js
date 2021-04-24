const button = document.querySelector("button");
button.addEventListener("click",showOutput);
function showOutput(){
    const date = new Date();
    console.log(date.getHours())
    console.log("work")
}
