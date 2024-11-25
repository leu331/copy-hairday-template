import dayjs from "dayjs";

//seleciona as sessões manhã, tarde e noite
const periodMorning = document.getElementById("period-morning")
const periodAfternoon = document.getElementById("period-afternoon")
const periodNight = document.getElementById("period-night")

export function scheduleShow ({dailySchedules}) {
    try {
        //limpa as listas para preencher com novas informações
        periodMorning.innerHTML =""
        periodAfternoon.innerHTML =""
        periodNight.innerHTML =""

        //renderiza os agendamentos por período
        dailySchedules.forEach((schedule) =>{
            //criando os elementos do html
            const item = document.createElement("li")
            const time = document.createElement("strong")
            const name = document.createElement("span")
            const number = document.createElement("span")
            
            //adiciona as informações ao agendamento
            item.setAttribute("data-id", schedule.id)
            time.textContent = dayjs(schedule.when).format("HH:mm")
            name.textContent = schedule.name
            number.textContent = schedule.number
            number.classList.add("number")

            //cria o icone de cancelamento
            const cancelIcon = document.createElement("img")
            cancelIcon.classList.add("cancel-icon")
            cancelIcon.setAttribute("src", "./src/assets/cancel.svg")
            cancelIcon.setAttribute("alt", "cancelar")

            //adicionar o tempo, nome, número e ícone no item
            item.append(time, name, number, cancelIcon)

            //obter somente a hora
            const hour = dayjs(schedule.when).hour()

            //renderizar o agendamento na sessão (manhã, tarde ou noite)
            if (hour < 12) {
                periodMorning.appendChild(item)
            }

            else if (hour > 12 && hour <= 18) {
                periodAfternoon.appendChild(item)
            }

            else if (hour > 18 && hour <= 22) {
                periodNight.appendChild(item)
            }
        })
    } 
    catch (error) {
        alert("Não foi possível exibir os agendamentos")   
        console.log(error)
    }
}
