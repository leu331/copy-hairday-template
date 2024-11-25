import { apiConfig } from "./api.config.js";

export async function scheduleNew ({id, name, number, when}){
    try {
        //requisitando para enviar os dados do agendamento
        await fetch (`${apiConfig.baseURL}/schedules`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({id, name, number, when})
        })
        alert("Agendamento realizado com sucesso")
    } 
    
    catch (error) {
    console.log(error);
    alert("Não foi possível realizar o seu agendamento. Tente novamente mais tarde.")
       
        
    }
}