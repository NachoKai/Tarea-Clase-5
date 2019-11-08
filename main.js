const $form = document.querySelector("#formulario")
const $reset = document.querySelector('#reset')
const $calcularResultado = document.querySelector('#boton-resultado')

function reiniciar() {
    let nodoResultado = document.querySelector('#resultado')
    nodoResultado.className = ('')
    nodoResultado.innerText = ''
}

function calcularEdad(anioActual, anioNacimiento) {
    return anioActual - anioNacimiento;
}
function calcularSalarioAnual(salarioMensual) {
    return (salarioMensual * 12)
}

function mostrarResultado() {
    let $anioActual = Number($form.anioActual.value)
    let $anioNacimiento = Number($form.anioNacimiento.value)
    let nodoResultado = document.querySelector('#resultado')
    let edadActual = calcularEdad($anioActual, $anioNacimiento)

    if (edadActual === 0) {
        nodoResultado.className = ('valido')
        nodoResultado.innerText = `Hola ${nombreUsuarioMayuscula}! Naciste en el año ${anioNacimiento} y estamos en el año ${anioActual}, por lo tanto tu edad aproximada es de ${edadActual} años. Tu salario mensual es de: $${salarioMensual}. Tu salario anual es de $${salarioAnual}. Tu salario diario es de $${salarioDiario.toFixed(0)}. Y tu salario por hora es de $${salarioHora.toFixed(0)}.`
    } else {
        nodoResultado.className = ('error')
        nodoResultado.innerText = 'Completa los campos correctamente'
    }
}

$calcularResultado.onclick = function () {
    mostrarResultado()
}

$reset.onclick = function () {
    reiniciar()
}

let $calcularTodo = document.querySelector("#boton-resultado")
$calcularTodo.onclick = function () {
    function calcularSalarioDiario(salarioAnual) {
        return (salarioAnual / diasLaborales)
    }
    function calcularSalarioHora(salarioDiario) {
        return (salarioDiario / horasTrabajo)
    }

    let horasTrabajo = Number(document.querySelector("#horas-trabajo").value);
    let diasVacaciones = Number(document.querySelector("#dias-vacaciones").value);
    let diasLaborales = 365 - diasVacaciones
    let salarioMensual = Number(document.querySelector("#salario-mensual").value);
    let salarioAnual = calcularSalarioAnual(salarioMensual);
    let salarioDiario = calcularSalarioDiario(salarioAnual);
    let salarioHora = calcularSalarioHora(salarioDiario);
    let anioActual = Number(document.querySelector("#anio-actual").value)
    let anioNacimiento = Number(document.querySelector("#anio-nacimiento").value);
    let edadActual = calcularEdad(anioActual, anioNacimiento);
    let nombreUsuario = document.querySelector("#nombre-usuario").value
    let nombreUsuarioMayuscula = nombreUsuario.charAt(0).toUpperCase() + nombreUsuario.slice(1)
    document.querySelector("#resultado").className = 'valido'
    document.querySelector("#resultado").innerText = 
    `Hola ${nombreUsuarioMayuscula}! Naciste en el año ${anioNacimiento} y estamos en el año ${anioActual}, por lo tanto tu edad aproximada es de ${edadActual} años. Tu salario mensual es de: $${salarioMensual}. Tu salario anual es de $${salarioAnual}. Tu salario diario es de $${salarioDiario.toFixed(0)}. Y tu salario por hora es de $${salarioHora.toFixed(0)}.`;
    return false;
}