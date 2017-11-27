const CurrentTime = () => {
    let date = new Date();
    let hour = String(date.getHours());
    let minutes = String(date.getMinutes());
    
    //fix hours
    if(hour === 13){
        hour = 1;
    }
    else if (hour === 14){
        hour = 2;
    }
    else if (hour === 15){
        hour = 3;
    }
    else if (hour === 16){
        hour = 4;
    }
    else if (hour === 17){
        hour = 5;
    }
    else if (hour === 18){
        hour = 6;
    }
    else if (hour === 19){
        hour = 7;
    }
    else if (hour === 20){
        hour = 8;
    }
    else if (hour === 21){
        hour = 9;
    }
    else if (hour === 22){
        hour = 10;
    }
    else if (hour === 23){
        hour = 11;
    }
    else if (hour === 0 || hour === 24){
        hour = 12;
    }

    //fix single 0 
    if(minutes === 0){
        minutes = "00";
    }

    let currentTime = hour + ":" + minutes + " - ";

    return (
        {currentTime}
    );
}

export default CurrentTime;