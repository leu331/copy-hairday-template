import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js"
import {hoursLoad} from "../form/hours-load.js"
import { scheduleShow } from "./show.js"

const selectedDate = document.getElementById("date")

export async function schedulesDay () {
    const date = selectedDate.value

    //busca na api os agendamentos
    const dailySchedules = await scheduleFetchByDay({date})
    
    //exibe os agendamentos
    scheduleShow ({dailySchedules})

    //renderiza os horários disponíveis
    hoursLoad({date, dailySchedules})
}