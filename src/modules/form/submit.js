import dayjs from "dayjs";
import { scheduleNew } from "../../services/schedule-new.js";
import { schedulesDay } from "../schedules/load.js";

const form = document.querySelector("form")
const clienName = document.getElementById("client")
const clientPhone = document.getElementById("phone")
const selectedDate = document.getElementById("date")

//cria a variável dinâmica para selecionar a data de hoje
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

//carrega a data atual
selectedDate.value = inputToday

//data mínima de agendamento é hoje
selectedDate.min = inputToday

form.onsubmit = async (event) => {
    event.preventDefault ()
       

    try {
        //recupera o nome e número do cliente
        const name = clienName.value.trim()
        const number = clientPhone.value

        if (!name) {
            return alert ("Por favor, confira novamente se nos informou seu nome e telefone.")
        }

        else if (!number){
            return alert ("Por favor, confira novamente se nos informou seu nome e telefone.")
        }

        //recupera o horário selecionado
        const hourSelected = document.querySelector(".hour-selected")

        if (!hourSelected) {
            return alert ("Selecione um horário disponível")
        }

        const [hour] = hourSelected.innerText.split(":")

        //insere a data na hora
        const when = dayjs(selectedDate.value).add(hour, "hour")
        
        //gerar um id para solicitação
        const id = new Date().getTime()

        //aqui a gente realiza o agendamento
        await scheduleNew({
            id,
            name, 
            number,
            when
        });
        
    //recarrega o agendamento
    await schedulesDay()

    //limpa o input de nome para o cliente
    clienName.value = ""
    } catch (error) {
        alert("Não foi possível enviar a sua soliitação de agendamento, tente mais tarde")
        console.log(error)
    }
}