import { Equipo } from "./equipo";
import { Bomba, Caudal } from "./bomba";
import { Kit_Mangueras, rosca } from "./kitMangueras";
const fs = require("fs");

export class Gestor{

    depositoDeEquipos: any [] = [];

    agregarEquipo(equipo:Equipo){
        this.depositoDeEquipos.push(equipo)
        const datoALlevar= JSON.stringify(this.depositoDeEquipos);
        const llevar = fs.writeFileSync('./deposito.json', datoALlevar);
    }


    public leerPorId(id: string){

        let filtro = this.depositoDeEquipos.filter(elem => elem.id === id)
        if (filtro.length === 0) {
            console.log(`la id ${id} no existe en deposito`)
        } else console.log(`Equipos id ${id}`, filtro);
    }

    public eliminar(id: string, array: Equipo[]): any {
    let equipoEncontrado: number = array.findIndex(elem => elem.id === id );
    console.log(equipoEncontrado)
   if(equipoEncontrado >= 0){  
           array.splice(equipoEncontrado,1)
           console.log(`Equipo ${id} eliminado de la lista`);
       } 
   else {
       console.log(`Equipo ${id} no se pudo eliminar`);
   }
            const datoALlevar= JSON.stringify(this.depositoDeEquipos);
            const llevar = fs.writeFileSync('./deposito.json', datoALlevar);
    }

    public editar(id: string, array: any, newId?: string, newfechaIns?: any){
        let pos: number = array.findIndex((elem: { id: string; }) => elem.id === id);
        if(pos<0){
            console.log("No se encontro la id")
        } else {
        array[pos].id = newId;
        array[pos].fechaInstalacion = parseInt(newfechaIns);
        
        if (array[pos].id === newId) {
            console.log("Se modifico el id del equipo ", id)
        } else {
            console.log("No se pudo modificar el id de el equipo ", id)
        } 
        if (array[pos].fechaInstalacion === newfechaIns) {
            console.log("Se modifico la fecha de instalacion de el equipo ", id)
        } else {
            console.log("No se modifico la fecha de instalacion de el equipo ", id)
        }
    }
     }
}
