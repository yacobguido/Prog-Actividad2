import { Equipo } from "./equipo";
import { depositoDeEquipos } from "./equipo";
export enum rosca {
    A = "aluminio", B = "bronce", C = "cobre", D = "diamante"
}

export class Kit_Mangueras extends Equipo{
    elementos: number;
    medidaPulgadas: number;
    roscaMaterial: rosca;
    constructor(elementos: number, medidaPulgadas: number, roscaMaterial: rosca){
        super()
        this.elementos = elementos;
        this.medidaPulgadas = medidaPulgadas;
        this.roscaMaterial = roscaMaterial;
    }
}


