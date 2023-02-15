let bienvenida = "Bienvenido al Refugio Lomitos&CO";
let despedida = "Gracias por visitar Lomitos&CO. Vuelva pronto";
let cuotaTotal = 0;
let cuotaIndividual = 0;
const padrinos = [];
const animales = [];

class Animal {
    constructor(props) {
        this.nombre = props.nombre
        this.tamaño = props.tamaño;
        this.añoNacimiento = props.añoNacimiento;
        this.raza = props.raza;
        this.sexo = props.sexo;
        this.kind = props.kind;
    }
}

class Padrino {
    constructor(props) {
        this.nombre = props.nombre;
        this.apellido = props.apellido;
        this.email = props.email;
        this.padrino = props.padrino;
        this.cuota = 0;
    }
    cuotaGeneral() {
        this.cuota = 10;
    }
    cuotaEspecifico() {
        this.cuota = cuotaTotal;
    }
}

const animal1 = new Animal({ nombre: "Bruno", tamaño: "Grande", añoNacimiento: "2020", raza: "Labrador", sexo: "Macho", kind: "perro" });
const animal2 = new Animal({ nombre: "Mila", tamaño: "Pequeño", añoNacimiento: "2016", raza: "Puddle", sexo: "Hembra", kind: "perro" });
const animal3 = new Animal({ nombre: "Bruce", tamaño: "Grande", añoNacimiento: "2018", raza: "Mestizo de Pastor Alemán", sexo: "Macho", kind: "perro" });
const animal4 = new Animal({ nombre: "Nina", tamaño: "Grande", añoNacimiento: "2021", raza: "Mestizo", sexo: "Hembra", kind: "perro" });
const animal5 = new Animal({ nombre: "Simba", tamaño: "Grande", añoNacimiento: "2015", raza: "Europeo común", sexo: "Macho", kind: "gato" });
const animal6 = new Animal({ nombre: "Luna", tamaño: "Grande", añoNacimiento: "2012", raza: "Americano", sexo: "Hembra", kind: "gato" });
const animal7 = new Animal({ nombre: "Fito", tamaño: "Grande", añoNacimiento: "2021", raza: "Siamés", sexo: "Macho", kind: "gato" });
const animal8 = new Animal({ nombre: "Tom", tamaño: "Grande", añoNacimiento: "2021", raza: "Europeo común", sexo: "Macho", kind: "gato" });
const animal9 = new Animal({ nombre: "Fifi", tamaño: "Grande", añoNacimiento: "2020", raza: "Europeo común", sexo: "Macho", kind: "gato" });
animales.push(animal1, animal2, animal3, animal4, animal5, animal6, animal7, animal8, animal9);



/* #### BIENVENIDA #### */
function bienvenidaRefugio() {
    let operacion = prompt("Para continuar, elige una de estas opciones: \nAdoptar \nApadrinar");

    if (operacion != null)
        operacion = operacion.toLowerCase();

    switch (operacion) {
        case "adoptar":

            let seleccion = prompt("¿Que quieres adoptar?: \n- perro \n- gato");

            while (!(seleccion === "perro" || seleccion === "gato")) {
                seleccion = prompt("Opcion invalida. ¿Que quieres adoptar?: \n- perro \n- gato");
            }

            adoptar(seleccion);


            break;

        case "apadrinar":

            alert("Para ser padrino necesitamos tus datos");
            let nombrePadrino = prompt("Ingresa tu nombre:");
            let apellidoPadrino = prompt("Ingresa tu apellido:");
            let emailPadrino = prompt("Ingresa tu correo electronico:");

            let apadrinamientoOpcion = prompt("Tenemos dos tipos de apadrinamiento:\n- General \n- Especifico \n\n¿En cual estas interesado?"); 

            if (apadrinamientoOpcion != null)
                apadrinamientoOpcion = apadrinamientoOpcion.toLowerCase();


            while (!(apadrinamientoOpcion === "general" || apadrinamientoOpcion === "especifico" || apadrinamientoOpcion === null)) {
                apadrinamientoOpcion = prompt("Opcion invalida. \nLos tipos de apadrinamiento son:\n- General \n- Especifico \n\n¿En cual estas interesado?");
                apadrinamientoOpcion = apadrinamientoOpcion.toLowerCase();
            }

            const padrino1 = new Padrino({ nombre: nombrePadrino, apellido: apellidoPadrino, email: emailPadrino, padrino: apadrinamientoOpcion });
            padrinos.push(padrino1);

            switch (apadrinamientoOpcion) {
                case "general": 
                    padrino1.cuotaGeneral();
                    alert("La cuota mensual será de 10 euros");
                    for (const padrino of padrinos) {
                        alert("Corrobora tus datos para finalizar: " +
                            "\nNombre: " + padrino.nombre +
                            "\nApellido: " + padrino.apellido +
                            "\nEmail: " + padrino.email +
                            "\nPadrino: " + padrino.padrino +
                            "\nCuota mensual: " + padrino.cuota + "euros"
                        );
                    }
                    confirmacionApadrinar();

                    break;
                case "especifico":
                    calculoCuotaApadrinamiento();
                    padrino1.cuotaEspecifico();
                    for (const padrino of padrinos) {
                        alert("Corrobora tus datos para finalizar: " +
                            "\nNombre: " + padrino.nombre +
                            "\nApellido: " + padrino.apellido +
                            "\nEmail: " + padrino.email +
                            "\nPadrino: " + padrino.padrino +
                            "\nCuota mensual: " + padrino.cuota + "euros"
                        );
                    }
                    confirmacionApadrinar();
                    break;
            }

            break;

        default:
            volverMenu();
            break;
    }
}

/**/


/* #### SI ADOPTA #### */
function adoptar(seleccion) {


    let filtered = animales.filter(animal => animal.kind.includes(seleccion));
    let lenghtFiltered = filtered.length;
    alert(`En estos momentos tenemos ${lenghtFiltered} ${seleccion}s en adopción. A continuación, te mostramos la lista con cada uno de ellos para que ingreses el nombre del ${seleccion} que te interese adoptar:`);

    for (const filter of filtered) {
        alert(
            "Nombre: " + filter.nombre +
            "\nTamaño: " + filter.tamaño +
            "\nAño de nacimiento: " + filter.añoNacimiento +
            "\nRaza: " + filter.raza +
            "\nSexo: " + filter.sexo
        );
    }

    let nombreInteresado = prompt(`Ingresa el nombre del ${seleccion}:`);
    let index = filtered.map(filter => filter.nombre).indexOf(nombreInteresado);

    while (index == -1) {
        nombreInteresado = prompt(`El ${seleccion} ingresado no existe. Ingresa el nombre del ${seleccion}:`);
        index = filtered.map(filter => filter.nombre).indexOf(nombreInteresado);
    }


    if (index != -1) {
        animales.splice(index, 1);
        numAnimalesDisponibles = animales.length;

        alert(`Felicidades. Haz adoptado a ${nombreInteresado}. Te invitamos a seguir adoptando en el futuro, aun tenemos ${numAnimalesDisponibles} animales mas.`);
    }


}

/* #### APADRINAR ESPECIFICAMENTE #### */
function numMascotasPorApadrinar() {
    let animalesLenght = animales.length;
    var num = parseInt(prompt((`DISCLAIMER: La cuota mensual minima es de 7 euros por animal. \n\nTenemos ${animalesLenght} animales. \n\n¿A cuantos de ellos quieres apadrinar?`)));

    while(num > animalesLenght){
        num = parseInt(prompt((`El numero ingresado no puede ser mayor que ${animalesLenght}\n\n Ingresa un numero correcto:`)));
    }
    return num;
}

/* #### CALCULA CUOTA TOTAL DE APADRINADO #### */
function calculoCuotaApadrinamiento() {
    let totalApadrinados = numMascotasPorApadrinar();
    alert("Ingresa la cuota mensual para cada uno");
    for (i = 1; i <= totalApadrinados; i++) {

        cuotaIndividual = parseInt(prompt(`Cuota numero ${i}:`));

        do {
            if (isNaN(cuotaIndividual)) {
                cuotaIndividual = parseInt(prompt(`Error: Por favor, ingresa un numero para la cuota ${i}:`));
            }
            if (cuotaIndividual < 7) {
                cuotaIndividual = parseInt(prompt(`Error: La cuota minima mensual debe ser igual o mayor a 7 euros.\nPor favor, ingresa la cuota ${i}:`));
            }
        }
        while (cuotaIndividual < 7 || isNaN(cuotaIndividual));
        cuotaTotal = cuotaTotal + cuotaIndividual;
    }

    alert(`El total mensual por apadrinar a ${totalApadrinados} animales es de ${cuotaTotal} `);
    return cuotaTotal;

}

/* #### CONFIRMACION DE APADRINAMIENTO #### */
function confirmacionApadrinar() {
    let padrinoGeneral = prompt("¿Estas de acuerdo? S/N");

    if (padrinoGeneral === "S") {
        alert("Ahora eres padrino del Refugio Lomitos&CO \n¡Muchas gracias!");
    } else {
        alert(despedida);
    }
}


/* #### VOLVER MENU PRINCIPAL #### */
function volverMenu() {
    let volverMenu = prompt("Opción invalida. ¿Desea volver al menú principal? S/N");

    if (volverMenu === "S") {
        bienvenidaRefugio();
    } else if (volverMenu === "N") {
        alert(despedida);
    } else {
        alert("Opcion invalida. Vuelva pronto");
    }
}



alert(bienvenida);
bienvenidaRefugio();





