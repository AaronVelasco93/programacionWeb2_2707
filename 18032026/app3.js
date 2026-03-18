let alumno = {
    id: 987654321,
    nombre: "Lucía",
    primerApellido: "Martínez",
    segundoApellido: "Hernández",
    edad: 27,
    titulado: false,
    egresado: {
        estado: true
    },
    domicilio: {
        calle: {
            callejon: "Encino",
            lote: 15,
            manzana: 7
        },
        numero: "24B",
        colonia: "San Ángel",
        alcaldia: "Álvaro Obregón",
        estado: "CDMX",
        pais: "México",
        continenete: "Latinoamérica"
    },
    kinder: {
        nombre: "Estrella del Saber",
        actividadPrimerdia: function () {
            console.log("jugar con bloques");
        },
        actividadRecurrente: function () {
            console.log("cantar canciones");
        },
        datosMiss: {
            nombre: "María",
            edad: 29,
            estudios: "Maestría"
        }
    },
    primaria: {
        nombre: "Benito Juárez",
        comer(comida) {
            return `ahora está comiendo ${comida}`;
        },
        mensaje(mensajeAlumno) {
            return `${this.nombre} es la Primaria y el alumno tiene que ir a ${mensajeAlumno}`;
        }
    }
}
console.log(alumno.kinder.datosMiss.nombre);
console.log(alumno.primaria.mensaje("Direccion"));
console.log(alumno.primaria.comer("Galleta"));

/** 
 * calle
 * numero
 *  interior
 * colonia
 * CP
 * Municipio o Alcaldia
 * estado
 * pais
 * continente
 * 
*/