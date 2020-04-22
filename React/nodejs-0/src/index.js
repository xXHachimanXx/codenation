'use strict'

const fibonacci = () => {
    const fib = [0, 1];
    let f1 = 0, f2 = 1, num = 1;
    
    while(num < 350)
    {
        num = f1 + f2;
        f1 = f2;
        f2 = num;
        fib.push(num);
    }
    
    return fib;
};

const isFibonnaci = (num) => {
    var resp = true;
    let f1 = 0, f2 = 1, prox = 1;
    
    if(num != f1 && num != f2)
    {
        while(prox < num)
        {
            prox = f1 + f2;
            f1 = f2;
            f2 = prox;
        }
        if(num != prox){ resp = false; }
    }

    return resp;
};

module.exports = {
    fibonacci,
    isFibonnaci
}

console.log(isFibonnaci(4));
