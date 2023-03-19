import { Equipo } from "./equipo";
export enum eficiencia {
    A = "Re eficiente", B = "bastante eficiente", C = "eficiente y nada mas", D = "poco eficiente", E = "Nada eficiente" 
}
export enum combustible{
    N = "nafta", G = "gasoil", GNC = "gas natural comprimido"
}

export class Motor extends Equipo{
    protected potenciaEnHp: number;
    protected eficienciA: eficiencia;
    protected fabricante: string;

    constructor(potenciaEnHp: number, eficiencia: eficiencia, fabricante: string, id: string, descripcion: string, fechaFabricacion:string, fechaInstalacion: string){
        super( id, descripcion, fechaFabricacion, fechaInstalacion)
        this.potenciaEnHp = potenciaEnHp;
        this.eficienciA = eficiencia;
        this.fabricante = fabricante;
    }
    
}


export class MotorC extends Motor{
    cilindros: number
    tipoCombustible: combustible

    constructor(potenciaEnHp: number, eficienciA: eficiencia, fabricante: string, cilindros: number, tipoCombustible: combustible, id: string, descripcion: string, fechaFabricacion:string, fechaInstalacion: string){
        super(potenciaEnHp, eficienciA, fabricante, id, descripcion, fechaFabricacion, fechaInstalacion)
        this.cilindros = cilindros;
        this.tipoCombustible = tipoCombustible;
    }
}

export class MotorE extends Motor{
    voltaje: string;
    consumoKWH: number;
    esBajoConsumo: boolean;
    constructor(potenciaEnHp: number, eficienciA: eficiencia, fabricante: string, voltaje:string, consumoKWH: number, esBajoConsumo: boolean, id: string, descripcion: string, fechaFabricacion:string, fechaInstalacion: string){
        super(potenciaEnHp, eficienciA, fabricante, id, descripcion, fechaFabricacion, fechaInstalacion)
        this.voltaje = voltaje;
        this.consumoKWH = consumoKWH;
        this.esBajoConsumo = esBajoConsumo;
    }
}
