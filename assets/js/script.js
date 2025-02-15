let radiologia =[
    {hora: "11:00", especialista: "IGNACIO SCHULZ", paciente:"FRANCISCA ROJAS", rut:"9878782-1", prevision:"FONASA"},
    {hora: "11:30", especialista: "FEDERICO SUBERCASEAUX", paciente:"PAMELA ESTRADA", rut:"15345241-3", prevision:"ISAPRE"},
    {hora: "15:00", especialista: "FERNANDO WURTHZ", paciente:"ARMANDO LUNA", rut:"16445345-9", prevision:"ISAPRE"},
    {hora: "15:30", especialista: "ANA MARIA GODOY", paciente:"MANUEL GODOY", rut:"17666419-0", prevision:"FONASA"},
    {hora: "16:00", especialista: "PATRICIA SUAZO", paciente:"RAMON ULLOA", rut:"14989389-K", prevision:"FONASA"}
];

let traumatologia = [
    {hora: "08:00", especialista: "MARIA PAZ ALTUZARRA", paciente:"PAULA SANCHEZ", rut:"15554774-5", prevision:"FONASA"},
    {hora: "10:00", especialista: "RAUL ARAYA", paciente:"ANGÉLICA NAVAS", rut:"15444147-9", prevision:"ISAPRE"},
    {hora: "10:30", especialista: "MARIA ARRIAGADA", paciente:"PANA KLAPP", rut:"17879423-9", prevision:"ISAPRE"},
    {hora: "11:00", especialista: "ALEJANDRO BADILL", paciente:"FELIPE MARDONES", rut:"1547423-6", prevision:"ISAPRE"},
    {hora: "11:30", especialista: "CECILIA BUDNIK", paciente:"DIEGO MARREZ", rut:"16554741-K", prevision:"FONASA"},
    {hora: "12:00", especialista: "ARTURO CAVAGNARO", paciente:"CECILIA MENDEZ", rut:"9747535-8", prevision:"ISAPRE"},
    {hora: "12:30", especialista: "ANDRES KANACRI", paciente:"MARCIAL SUAZO", rut:"11254785-5", prevision:"ISAPRE"}
];

let dental = [
    {hora: "8:30", especialista: "ANDREA ZUÑIGA", paciente:"MARCELA RETAMAL", rut:"11123425-6", prevision:"ISAPRE"},
    {hora: "11:00", especialista: "MARIA PIA ZAÑARTU", paciente:"ANGEL MUÑOZ", rut:"9878789-2", prevision:"ISAPRE"},
    {hora: "11:30", especialista: "SCARLETT WITTING", paciente:"MARIO KAST", rut:"7998789-5", prevision:"FONASA"},
    {hora: "13:00", especialista: "FRANCISCO VON TEUBER", paciente:"KARIN FERNANDEZ", rut:"18887662-K", prevision:"FONASA"},
    {hora: "13:30", especialista: "EDUARDO VIÑUELA", paciente:"HUGO SANCHEZ", rut:"17665461-4", prevision:"FONASA"},
    {hora: "14:00", especialista: "RAQUEL VILLASECA", paciente:"ANA SEPULVEDA", rut:"14441281-0", prevision:"FONASA"}
];

function main(){
    let infoRad = document.getElementById("atencionRad");
    let infoTra = document.getElementById("atencionTra");
    let infoDen = document.getElementById("atencionDen");

    // se muestran datos de atencion, la primera es la primera posición y la última es el total - 1

    infoRad.innerText = `Primera atención: ${radiologia[0].paciente} - ${radiologia[0].prevision} | Última atención: ${radiologia[radiologia.length-1].paciente} - ${radiologia[radiologia.length-1].prevision}`;

    infoTra.innerText = `Primera atención: ${traumatologia[0].paciente} - ${traumatologia[0].prevision} | Última atención: ${traumatologia[traumatologia.length-1].paciente} - ${traumatologia[traumatologia.length-1].prevision}`;

    infoDen.innerText = `Primera atención: ${dental[0].paciente} - ${dental[0].prevision} | Última atención: ${dental[dental.length-1].paciente} - ${dental[dental.length-1].prevision}`;

    listaRad(radiologia);
    listaTra(traumatologia);
    listaDen(dental);
}

main();

function listaRad(listado){
    let cuerpoTabla = document.querySelector("#tablaRad tbody");
    let filasTabla = "";
    
    for (const atencion of radiologia) {
        // console.log(atencion);
        filasTabla+= `
        <tr>
                <th scope="row">${atencion.hora}</th>
                <td>${atencion.especialista}</td>
                <td>${atencion.paciente}</td>
                <td>${atencion.rut}</td>
                <td>${atencion.prevision}</td>
              </tr>
        `
    }

    cuerpoTabla.innerHTML = filasTabla;

}

function listaTra(listado){
    let cuerpoTabla = document.querySelector("#tablaTra tbody");
    let filasTabla = "";
    
    for (const atencion of traumatologia) {
        // console.log(atencion);
        filasTabla+= `
        <tr>
                <th scope="row">${atencion.hora}</th>
                <td>${atencion.especialista}</td>
                <td>${atencion.paciente}</td>
                <td>${atencion.rut}</td>
                <td>${atencion.prevision}</td>
              </tr>
        `
    }

    cuerpoTabla.innerHTML = filasTabla;

}

function listaDen(listado){
    let cuerpoTabla = document.querySelector("#tablaDen tbody");
    let filasTabla = "";
    
    for (const atencion of dental) {
        // console.log(atencion);
        filasTabla+= `
        <tr>
                <th scope="row">${atencion.hora}</th>
                <td>${atencion.especialista}</td>
                <td>${atencion.paciente}</td>
                <td>${atencion.rut}</td>
                <td>${atencion.prevision}</td>
              </tr>
        `
    }

    cuerpoTabla.innerHTML = filasTabla;

}