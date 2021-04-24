const button = document.querySelector("button");
const output = document.querySelector(".output");
button.addEventListener("click",showOutput);
function showOutput(){
    const date = new Date();
    let curr = date.getHours();
    let message;
    console.log(curr)

    if(curr>17){
        message="it's evening";
    }else if(curr>12){
        message="it's afternoon";
    }else if (curr>0){
        message="it's morning";
    }else{
        message= "something is wrong";
    }

    output.innerHTML="<h1>"+message+"</h1>";
}