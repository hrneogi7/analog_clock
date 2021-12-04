
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

setInterval(() => {
    date = new Date();

    hour_hand = date.getHours();
    minute_hand = date.getMinutes();
    second_hand = date.getSeconds();

    day = date.toLocaleDateString(undefined,options);

    
       // To calculate the rotation of hour hand
       // hour_hand = 30 * hour + minute/2 
       // minute_hand = 6 * minute 
       // second_hand = 6 * second



    hour_hand_rotation = 30*hour_hand + (minute_hand/2);
    minute_hand_rotation = 6*minute_hand;
    second_hand_rotation = 6*second_hand;

    // Applying CSS rotation

    hour.style.transform = `rotate(${hour_hand_rotation}deg)`;
    minute.style.transform = `rotate(${minute_hand_rotation}deg)`;
    second.style.transform = `rotate(${second_hand_rotation}deg)`;

    document.getElementById('days').innerHTML = day;

}, 1000);