const Validar = (id) => {
    const nota = document.getElementById(id);
    let ok2 = false;

    if (parseInt(nota.value) > 0 &&
     parseInt(nota.value)<= 10) {
        nota.style.background = "green";        
        ok2 = true;
    } else {
        nota.style.background = "red";        
    }
};
/*
const Promedio = (mate, lengua, efsi) => {
    const prom = (mate+lengua+efsi)/3
    alert(prom)
}

const Mayor = () => {

}

*/