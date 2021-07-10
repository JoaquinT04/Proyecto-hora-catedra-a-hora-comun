const calcularHoraNormal = () =>{

    let unaHoraCatedra = document.getElementById("hora--catedra--valor").value;

    unaHoraCatedra = parseInt(unaHoraCatedra);
    
    if(isNaN(unaHoraCatedra)){

        alert('No ingresaste cuanto vale una hora catedra')
    }else{

        let cantidadDeHorasCatedra = document.getElementById("hora--catedra").value;
    
        cantidadDeHorasCatedra = parseInt(cantidadDeHorasCatedra);
    
        const horaNormal = parseInt((cantidadDeHorasCatedra * unaHoraCatedra) / 60);
    
        const minutosNormal =(cantidadDeHorasCatedra * unaHoraCatedra) % 60;
        
        const resultP = document.getElementById("respuesta__hora--normal")
        
        if(horaNormal < 10){
            if(minutosNormal < 10){
        
                resultP.innerText = `0${horaNormal}:0${minutosNormal}`;    
        
            }else{
        
                resultP.innerText = `0${horaNormal}:${minutosNormal}`;
        
            }
        }
        else{
            resultP.innerText = `${horaNormal}:${minutosNormal}`;
            
            if(minutosNormal < 10){
        
                resultP.innerText = `${horaNormal}:0${minutosNormal}`;    
        
            }
        }
    }
}
const CalcularHoraCatedra = () => {
    let unaHoraCatedra = document.getElementById("hora--catedra--valor").value;

    unaHoraCatedra = parseInt(unaHoraCatedra);
    
    let horaNormal = document.getElementById("hora--normal").value;
    horaNormal = parseInt(horaNormal);

    let minutosNormal = document.getElementById("minutos--normal").value;
    minutosNormal = parseInt(minutosNormal);

    if(isNaN(minutosNormal)){
        minutosNormal = 0;
    }

    console.log("minutos Normal = " + minutosNormal)

    console.log("minutos Normal = " + minutosNormal)
    const minutosTotal = (horaNormal * 60) + minutosNormal;

    console.log("minutos Total = " + minutosTotal);
    const resultP = document.getElementById("respuesta__hora--catedra");



    if(isNaN(unaHoraCatedra)){

        alert('No ingresaste cuanto vale una hora catedra')
    }else{
        if(minutosTotal % unaHoraCatedra === 0){
            const horaCatedra =( minutosTotal / unaHoraCatedra);

            resultP.innerText = `${horaCatedra} horas catedra`
        }
        else{
            alert('las horas y los minutos ingresados no son validos para la hora catedra que ingreso')
        }

    }      
}