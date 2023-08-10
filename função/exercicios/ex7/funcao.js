export function media(n1,n2,n3,n4,n5){
    let calc = (n1+n2+n3+n4+n5)/5;
    return calc;
}

export function resultado(calc){
    let msg;
    if(calc > 5){
        msg = 'APROVADO!!!'
    }
    else{
        msg = 'Reprovado.'
    }
    return msg;
}