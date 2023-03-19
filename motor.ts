import { Equipo } from "./equipo";
enum eficiencia {
    A = "Re eficiente", B = "bastante eficiente", C = "eficiente y nada mas", D = "poco eficiente", E = "Nada eficiente" 
}

export class Motor extends Equipo{
    private potenciaEnHp: number;
    private eficiencia: eficiencia;
    private fabricante: string;

    constructor(potenciaEnHp: number, eficiencia: eficiencia, fabricante: string){
        super()
        this.potenciaEnHp = potenciaEnHp;
        this.eficiencia = eficiencia;
        this.fabricante = fabricante;
    }
}