import { schedulesDay } from "../schedules/load"
const selectedDate = document.getElementById("date")

//recarrega a lista de horários quando a data mudar
 selectedDate.onchange = () => schedulesDay()