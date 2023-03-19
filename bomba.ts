import { Equipo } from "./equipo";
export enum Caudal {
    A = "2000 Litros/hora", B = "2800 Litros/hora", C = "3600 Litros/hora", D = "5400 Litros/hora", E = "7500 Litros/hora"
}
export class Bomba extends Equipo {
    private caudalEntrada: Caudal;
    private caudalSalida: Caudal; 
    private fabricante: string;
   
    constructor (caudalEntrada: Caudal, caudalSalida: Caudal, fabricante: string, id: string, descripcion: string, fechaFabricacion:string, fechaInstalacion: string){
        super( id, descripcion, fechaFabricacion, fechaInstalacion)
        this.caudalEntrada = caudalEntrada;
        this.caudalSalida = caudalSalida;
        this.fabricante = fabricante;

    }
}
