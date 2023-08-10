export function corPrimaria(cor){
    let msg;

    if(cor == 'Azul' || cor == 'Vermelho' || cor == 'Amarelo'){
        msg = 'Essa cor é prímaria';
    }
    else(
        msg = 'Essa cor não é prímaria'
    )
    return msg;
}