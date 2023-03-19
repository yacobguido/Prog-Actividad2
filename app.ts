import { Equipo } from "./equipo";
import { Bomba, Caudal } from "./bomba";
import { Kit_Mangueras, rosca } from "./kitMangueras";
import { Gestor } from "./gestor";
import { combustible, eficiencia, MotorC } from "./motor";


let gestor = new Gestor();
let bomba = new Bomba(Caudal.A, Caudal.A, "aquasystem", "bomba AS", "buena bomba", "2/2/2023", "" );
let bomba2 = new Bomba(Caudal.A, Caudal.A, "lusqtof", "bomba L", "buena bomba", "2/2/2023", "" )
gestor.agregarEquipo(bomba);
gestor.agregarEquipo(bomba2);
gestor.editar("bomba AS", gestor.depositoDeEquipos, "bomba aqua system");
gestor.leerPorId("bomba L");
gestor.leerPorId("bomba aqua system");
