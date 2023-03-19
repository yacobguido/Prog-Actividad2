import { clearScreenDown } from "readline";

const fs = require("fs");

export const depositoDeEquipos: any [] = [] 
export class Equipo{
    public id: string = " ";
    private descripcion: string= " ";
    private fechaFabricacion: Date = new Date();
    private fechaInstalacion: Date = new Date()

    constructor(){
            
    }
 
    public agregarEquipo(tipoEquipo: Equipo, id: string, descripcion: string, fechaFabricacion:string, fechaInstalacion: string){
            this.id = id;
            this.descripcion = descripcion;
            this.fechaFabricacion = new Date (fechaFabricacion) ;
            this.fechaInstalacion = new Date(fechaInstalacion);
            depositoDeEquipos.push(tipoEquipo)
            const datoALlevar= JSON.stringify(depositoDeEquipos);
            const llevar = fs.writeFileSync('./deposito.json', datoALlevar,
                 {
                     encoding: "utf8",
                     mode: 0o666
                 }
            );
            
        }
  }



