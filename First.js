
var count=0;
function IncCount()
{
    ///let a = document.getElementsByName("submit").;
    console.log(++count);
    document.getElementById("Increment").innerHTML=count;
}

function DecCount()
{
    count--;
    console.log(count);
    document.getElementById("Increment").innerHTML=count;
}