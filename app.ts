import { depositoDeEquipos, Equipo } from "./equipo";
import { Bomba, Caudal } from "./bomba";
import { Kit_Mangueras, rosca } from "./kitMangueras";
import { Gestor } from "./gestor";



let bomba = new Bomba(Caudal.A, Caudal.A, "bomba");
 bomba.agregarEquipo(bomba,"bomba", "alta bomba", "3/10/2022", '5/10/2022');
 let bombi = new Bomba(Caudal.A, Caudal.A, "bomba");
 bombi.agregarEquipo(bombi, "bomba", "impecable", "2/2/1995", "12/3/2023");
let manguera = new Kit_Mangueras(1, 2, rosca.A);
manguera.agregarEquipo(manguera, "manguera", "alta manguera", "2/5/2022", "1/5/2022");
let gestor = new Gestor();
gestor.leerPorId("manguera");
gestor.eliminar("bomba", depositoDeEquipos)
gestor.editar("bomba", depositoDeEquipos, "bombita")
console.log(depositoDeEquipos)