var string="dbz";
var num = 21;

function printNums(){
    for (i=0; i<=num; i++){
        console.log(i);
    }
}

printNums();

document.getElementById('box').addEventListener('click', function(){
    alert('pokemon added');
});