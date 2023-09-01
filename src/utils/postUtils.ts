export const getTimes = (time: string) => {

    const specificTime = new Date(time);

    const currentTime = new Date();

    let timeDifference

    const timeDifferenceInMillis = currentTime.getTime() - specificTime.getTime();

    const hoursDifference = Math.floor(timeDifferenceInMillis / (1000 * 60 * 60));

    const minutesDifference = Math.floor((timeDifferenceInMillis % (1000 * 60 * 60)) / (1000 * 60));

    const millisecondsPerDay = 24 * 60 * 60 * 1000;

    const daysDifference = Math.floor(timeDifferenceInMillis / millisecondsPerDay);


    if (daysDifference === 0 && hoursDifference === 0) {
         timeDifference = `${minutesDifference}m`

    } else if (daysDifference === 0 && hoursDifference !== 0) {
        timeDifference = `${hoursDifference}h`
    }else if( daysDifference < 30){
        timeDifference = `${Math.floor(daysDifference)}days `

    }
    else if (daysDifference > 30 && daysDifference < 366) {
        timeDifference = `${Math.floor(daysDifference / 30)}months`
    } else if (daysDifference >365) {

        timeDifference = `${Math.floor(daysDifference / 365)}years`

    }

    return timeDifference
}