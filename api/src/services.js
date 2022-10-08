export function acai(Peq, Med, Gra, Desc) {
    let peq = Peq * 13.50;
    let med = Med * 15.00;
    let gra = Gra * 17.50;

    let a = peq + med + gra;

    let b = (a * Desc) / 100;

    let c = a - b;

    return c;
}


export function libra(dia, mes) {
    let msg = ""

    if (dia >= 23 && dia <= 30 && mes == "setembro" || dia > 0 && dia <= 22 && mes == "outubro") {
        msg = "Sim"
    }
    else {
        msg = "Não"
    }

    return msg;
}

export function sorvete(gramas) {
    let total = 0;


    if (gramas >= 1000) {
        total = (gramas / 100) * 3.00;
    }

    else {
        total = (gramas / 100) * 3.50;
    }

    return total
}