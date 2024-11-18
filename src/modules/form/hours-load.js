import { openingHours } from "../../utils/opening-hours.js"

import dayjs from "dayjs"
import { hoursClick } from "./hours-click.js"

const hours = document.getElementById("hours")

export function hoursLoad({date}){
    //limpa a lista de horários
hours.innerHTML = ""

    const opening = openingHours.map((hour) => {
       const [scheduleHour] = hour.split(":")
       const isHourPast = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs())

        return {
            hour,
            available: isHourPast,
        }
    })

    opening.forEach(({ hour, available }) => {
        const li = document.createElement("li")
        li.classList.add("hour")
        li.classList.add(available ? "hour-available" : "hour-unavailable")

        li.textContent = hour

        if (hour === "9:00"){
            hourHeaderAdd("Manhã")
        }

        else if (hour === "13:00"){
            hourHeaderAdd("Tarde")
        }

        else if (hour === "18:00"){
            hourHeaderAdd("Noite")
        }

        hours.append(li)
    })
    
    hoursClick()
}



    function hourHeaderAdd(title) {
        const header = document.createElement("li")
        header.classList.add("hour-period")
        header.textContent = title

        hours.append(header)
    }
