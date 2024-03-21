const Validar = (id) => {
    const nota = document.getElementById(id);
    let ok2 = false;

    if (parseInt(nota.value) > 0 && parseInt(nota.value)<= 10) {
        nota.style.background = "green";        
        ok2 = true;
    } else {
        nota.style.background = "red";        
    }
}

const obtenerValores = (id) =>{
    return parseInt(document.getElementById(id).value)
}

const Promedio = () => {
    let notas = {
        matematica : obtenerValores("mate"),
        lengua : obtenerValores("lengua"),
        efsi : obtenerValores("efsi"),
    }
    let prom = (notas.matematica + notas.lengua + notas.efsi)/3
    alert(prom)
}

const Mayor = () => {    
    let notas = {
        Matematica : obtenerValores("mate"),
        Lengua : obtenerValores("lengua"),
        EFSI : obtenerValores("efsi"),
    }

    let mayor = Math.max(...Object.values(notas));
    let resultado = [];
    for(let materia in notas){
        if(notas[materia] == mayor){
            resultado.push(materia);
        }
    }
    alert(resultado)
}

const mostrarResultados = () =>{
    let notas = {
        matematica : obtenerValores("mate"),
        lengua : obtenerValores("lengua"),
        efsi : obtenerValores("efsi"),
    }
    getElementById("result")
}
