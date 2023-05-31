let a = 0
function sumOfDigits(n){
    console.log(sumOfDigits)
    if (n<1) return a;
    a += 1;
return sumOfDigits(Math.floor(n/10));
}

