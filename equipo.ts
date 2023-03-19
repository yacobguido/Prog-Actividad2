import { clearScreenDown } from "readline";

const fs = require("fs");

 
export class Equipo{
    public id: string = " ";
    private descripcion: string= " ";
    private fechaFabricacion: Date = new Date();
    private fechaInstalacion: Date = new Date()

    constructor(id: string, descripcion: string, fechaFabricacion: string, fechaInstalacion: string){
        this.id = id;
        this.descripcion = descripcion;
        this.fechaFabricacion = new Date (fechaFabricacion) ;
        this.fechaInstalacion = new Date(fechaInstalacion);
    }
  }
