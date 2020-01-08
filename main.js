const $form = document.querySelector("#formulario"),
    $reset = document.querySelector('#reset'),
    $calcularResultado = document.querySelector('#boton-resultado')

function reiniciar() {
    let nodoResultado = document.querySelector('#resultado')
    nodoResultado.className = ('')
    nodoResultado.innerText = ''
}

calcularEdad = (anioActual, anioNacimiento) => anioActual - anioNacimiento
calcularSalarioAnual = (salarioMensual) => (salarioMensual * 12)

function mostrarResultado() {
    let $anioActual = Number($form.anioActual.value),
        $anioNacimiento = Number($form.anioNacimiento.value),
        nodoResultado = document.querySelector('#resultado'),
        edadActual = calcularEdad($anioActual, $anioNacimiento)

    if (edadActual === 0) {
        nodoResultado.className = ('valido')
        nodoResultado.innerText = `Hola ${nombreUsuarioMayuscula}! Naciste en el año ${anioNacimiento} y estamos en el año ${anioActual}, por lo tanto tu edad aproximada es de ${edadActual} años. Tu salario mensual es de: $${salarioMensual}. Tu salario anual es de $${salarioAnual}. Tu salario diario es de $${salarioDiario.toFixed(0)}. Y tu salario por hora es de $${salarioHora.toFixed(0)}.`
    } else {
        nodoResultado.className = ('error')
        nodoResultado.innerText = 'Completa los campos correctamente'
    }
}

$calcularResultado.onclick = () => mostrarResultado()
$reset.onclick = () => reiniciar()

let $calcularTodo = document.querySelector("#boton-resultado")
$calcularTodo.onclick = function () {
    calcularSalarioDiario = (salarioAnual) => (salarioAnual / diasLaborales)
    calcularSalarioHora = (salarioDiario) => (salarioDiario / horasTrabajo)

    let horasTrabajo = Number(document.querySelector("#horas-trabajo").value),
        diasVacaciones = Number(document.querySelector("#dias-vacaciones").value),
        diasLaborales = 365 - diasVacaciones,
        salarioMensual = Number(document.querySelector("#salario-mensual").value),
        salarioAnual = calcularSalarioAnual(salarioMensual),
        salarioDiario = calcularSalarioDiario(salarioAnual),
        salarioHora = calcularSalarioHora(salarioDiario),
        anioActual = Number(document.querySelector("#anio-actual").value),
        anioNacimiento = Number(document.querySelector("#anio-nacimiento").value),
        edadActual = calcularEdad(anioActual, anioNacimiento),
        nombreUsuario = document.querySelector("#nombre-usuario").value,
        nombreUsuarioMayuscula = nombreUsuario.charAt(0).toUpperCase() + nombreUsuario.slice(1)

    document.querySelector("#resultado").className = 'valido'
    document.querySelector("#resultado").innerText =
        `Hola ${nombreUsuarioMayuscula}! Naciste en el año ${anioNacimiento} y estamos en el año ${anioActual}, por lo tanto tu edad aproximada es de ${edadActual} años. Tu salario mensual es de: $${salarioMensual}. Tu salario anual es de $${salarioAnual}. Tu salario diario es de $${salarioDiario.toFixed(0)}. Y tu salario por hora es de $${salarioHora.toFixed(0)}.`;
    return false;
}