



function calc(){
    let x = parseInt( document.querySelector(".x").value);
    let y = parseInt( document.querySelector(".y").value);
    let operators = document.querySelector(".operators").value;
    if ( operators === "+")
    {
         document.querySelector(".output").value = x+y;
    }
    if(operators === "-")
    {
        document.querySelector(".output").value = x-y;
    }
    if(operators === "/")
    {
        document.querySelector(".output").value = x/y;
    }
    if(operators === "X")
    {
        document.querySelector(".output").value = x*y;
    }

}