


let form_1 = document.getElementById('form_1');
let cinema_room_1 = document.getElementById('cinema_room_1');
let time_slot_1 = document.getElementById('time_slot_1');
let button_1 = document.getElementById("book_1");
var seats_1 = document.querySelectorAll(".checkbox_1");

/****************************************************************************** */
/****************************************************************************** */
/****************************************************************************** */
/****************************************************************************** */





button_1.addEventListener('click', (e) =>{
    console.log("inside form 1 book button");

    m_error_cinema="";
    m_error_time="";
    m_error_seat="";
    document.getElementById('error_cinema_1').innerHTML = m_error_cinema; 
    document.getElementById('error_time_1').innerHTML = m_error_time;  
    document.getElementById('error_ticket_1').innerHTML = m_error_seat;  
})
var ctr_1 = 0;
for(var i = 0; i<seats_1.length; i++) {
    seats_1[i].addEventListener('click', function() {

        if(this.checked == true) {
            ctr_1++;
        }
        else
        {
            ctr_1--;
        }
    })
}
form_1.addEventListener('submit', (e) =>{
    let messages_1 = [];
    if(cinema_room_1.value == null || cinema_room_1.value === '')
    {
        messages_1.push("no cinema room selected");
        m_error_cinema = "No Cinema Room selected";
    }
    if(time_slot_1.value == null || time_slot_1.value === '')
        {
            messages_1.push("No Time Slot selected");
            m_error_time = "No Time Slot selected";
        }
    if(ctr_1 == 0)
    {
        messages_1.push("No seat selected");
        m_error_seat = "No Ticket Selected";
        
    }
    if(messages_1.length > 0)
    {
        e.preventDefault();
        document.getElementById('error_time_1').innerHTML = m_error_time;  
        document.getElementById('error_cinema_1').innerHTML = m_error_cinema;  
        document.getElementById('error_ticket_1').innerHTML = m_error_seat;    
    }
});

/***************************************************************************************** */
/***************************************************************************************** */
/***************************************************************************************** */
/***************************************************************************************** */


let form_2 = document.getElementById('form_2');
let cinema_room_2 = document.getElementById('cinema_room_2');
let time_slot_2 = document.getElementById('time_slot_2');
let button_2 = document.getElementById("book_2");
var seats_2 = document.querySelectorAll(".checkbox_2");


button_2.addEventListener('click', (e) =>{
    console.log("inside form 2 book button");

    m_error_cinema_2="";
    m_error_time_2="";
    m_error_seat_2="";
    document.getElementById('error_cinema').innerHTML = m_error_cinema_2; 
    document.getElementById('error_time').innerHTML = m_error_time_2;  
    document.getElementById('error_ticket').innerHTML = m_error_seat_2;  
})
var ctr_2 = 0;
for(var i = 0; i<seats_2.length; i++) {
    seats_2[i].addEventListener('click', function() {
        console.log("woah clickable checkbox");
        if(this.checked == true) {
            ctr_2++;
        }
        else
        {
            ctr_2--;
        }
    })
}


form_2.addEventListener('submit', (e) =>{
    console.log("inside form 2 submit button");

    let messages_2 = [];
    if(cinema_room_2.value == null || cinema_room_2.value === '')
    {
        messages_2.push("no cinema room selected");
        m_error_cinema_2 = "No Cinema Room selected";
    }
    if(time_slot_2.value == null || time_slot_2.value === '')
        {
            messages_2.push("No Time Slot selected");
            m_error_time_2 = "No Time Slot selected";
        }
    if(ctr_2 == 0)
    {
        messages_2.push("No seat selected");
        m_error_seat_2 = "No Ticket Selected";
        
    }
    if(messages_2.length > 0)
    {
        e.preventDefault();
        document.getElementById('error_time_2').innerHTML = m_error_time_2;  
        document.getElementById('error_cinema_2').innerHTML = m_error_cinema_2;  
        document.getElementById('error_ticket_2').innerHTML = m_error_seat_2;    
    }
})


/****************************************************************************** */
/****************************************************************************** */
/****************************************************************************** */
/****************************************************************************** */

let form_3 = document.getElementById('form_3');
let cinema_room_3 = document.getElementById('cinema_room_3');
let time_slot_3 = document.getElementById('time_slot_3');
let button_3 = document.getElementById("book_3");
var seats_3 = document.querySelectorAll(".checkbox_3");

button_3.addEventListener('click', (e) =>{
    console.log("inside form 3 book button");

    m_error_cinema_3="";
    m_error_time_3="";
    m_error_seat_3="";
    document.getElementById('error_cinema_3').innerHTML = m_error_cinema_3; 
    document.getElementById('error_time_3').innerHTML = m_error_time_3;  
    document.getElementById('error_ticket_3').innerHTML = m_error_seat_3;  
})
var ctr_3 = 0;
for(var i = 0; i<seats_3.length; i++) {
    seats_3[i].addEventListener('click', function() {
        console.log("woah clickable checkbox");
        if(this.checked == true) {
            ctr_3++;
        }
        else
        {
            ctr_3--;
        }
    })
}


form_3.addEventListener('submit', (e) =>{
    console.log("inside form 3 submit button");

    let messages_3 = [];
    if(cinema_room_3.value == null || cinema_room_3.value === '')
    {
        messages_3.push("no cinema room selected");
        m_error_cinema_3 = "No Cinema Room selected";
    }
    if(time_slot_3.value == null || time_slot_3.value === '')
        {
            messages_3.push("No Time Slot selected");
            m_error_time_3 = "No Time Slot selected";
        }
    if(ctr_3 == 0)
    {
        messages_3.push("No seat selected");
        m_error_seat_3 = "No Ticket Selected";
        
    }
    if(messages_3.length > 0)
    {
        e.preventDefault();
        document.getElementById('error_time_3').innerHTML = m_error_time_3;  
        document.getElementById('error_cinema_3').innerHTML = m_error_cinema_3;  
        document.getElementById('error_ticket_3').innerHTML = m_error_seat_3;    
    }
})

/****************************************************************************** */
/****************************************************************************** */
/****************************************************************************** */
/****************************************************************************** */

let form_4 = document.getElementById('form_4');
let cinema_room_4 = document.getElementById('cinema_room_4');
let time_slot_4 = document.getElementById('time_slot_4');
let button_4 = document.getElementById("book_4");
var seats_4 = document.querySelectorAll(".checkbox_4");

button_4.addEventListener('click', (e) =>{
    console.log("inside form 4 book button");

    m_error_cinema_4="";
    m_error_time_4="";
    m_error_seat_4="";
    document.getElementById('error_cinema_4').innerHTML = m_error_cinema_4; 
    document.getElementById('error_time_4').innerHTML = m_error_time_4;  
    document.getElementById('error_ticket_4').innerHTML = m_error_seat_4;  
})
var ctr_4 = 0;
for(var i = 0; i<seats_4.length; i++) {
    seats_4[i].addEventListener('click', function() {
        console.log("woah clickable checkbox");
        if(this.checked == true) {
            ctr_4++;
        }
        else
        {
            ctr_4--;
        }
    })
}


form_4.addEventListener('submit', (e) =>{
    console.log("inside form 4 submit button");

    let messages_4 = [];
    if(cinema_room_4.value == null || cinema_room_4.value === '')
    {
        messages_4.push("no cinema room selected");
        m_error_cinema_4 = "No Cinema Room selected";
    }
    if(time_slot_4.value == null || time_slot_4.value === '')
        {
            messages_4.push("No Time Slot selected");
            m_error_time_4 = "No Time Slot selected";
        }
    if(ctr_4 == 0)
    {
        messages_4.push("No seat selected");
        m_error_seat_4 = "No Ticket Selected";
        
    }
    if(messages_4.length > 0)
    {
        e.preventDefault();
        document.getElementById('error_time_4').innerHTML = m_error_time_4;  
        document.getElementById('error_cinema_4').innerHTML = m_error_cinema_4;  
        document.getElementById('error_ticket_4').innerHTML = m_error_seat_4;    
    }
})

/****************************************************************************** */
/****************************************************************************** */
/****************************************************************************** */
/****************************************************************************** */
let form_5 = document.getElementById('form_5');

let cinema_room_5 = document.getElementById('cinema_room_5');
let time_slot_5 = document.getElementById('time_slot_5');
let button_5 = document.getElementById("book_5");
var seats_5 = document.querySelectorAll(".checkbox_5");

button_5.addEventListener('click', (e) =>{
    console.log("inside form 5 book button");

    m_error_cinema_5="";
    m_error_time_5="";
    m_error_seat_5="";
    document.getElementById('error_cinema_5').innerHTML = m_error_cinema_5; 
    document.getElementById('error_time_5').innerHTML = m_error_time_5;  
    document.getElementById('error_ticket_5').innerHTML = m_error_seat_5;  
})
var ctr_5 = 0;
for(var i = 0; i<seats_5.length; i++) {
    seats_5[i].addEventListener('click', function() {
        console.log("woah clickable checkbox");
        if(this.checked == true) {
            ctr_5++;
        }
        else
        {
            ctr_5--;
        }
    })
}


form_5.addEventListener('submit', (e) =>{
    console.log("inside form 5 submit button");

    let messages_5 = [];
    if(cinema_room_5.value == null || cinema_room_5.value === '')
    {
        messages_5.push("no cinema room selected");
        m_error_cinema_5 = "No Cinema Room selected";
    }
    if(time_slot_5.value == null || time_slot_5.value === '')
        {
            messages_5.push("No Time Slot selected");
            m_error_time_5 = "No Time Slot selected";
        }
    if(ctr_5 == 0)
    {
        messages_5.push("No seat selected");
        m_error_seat_5 = "No Ticket Selected";
        
    }
    if(messages_5.length > 0)
    {
        e.preventDefault();
        document.getElementById('error_time_5').innerHTML = m_error_time_5;  
        document.getElementById('error_cinema_5').innerHTML = m_error_cinema_5;  
        document.getElementById('error_ticket_5').innerHTML = m_error_seat_5;    
    }
})
/****************************************************************************** */
/****************************************************************************** */
/****************************************************************************** */
/****************************************************************************** */
let form_6 = document.getElementById('form_6');

let cinema_room_6 = document.getElementById('cinema_room_6');
let time_slot_6 = document.getElementById('time_slot_6');
let button_6 = document.getElementById("book_6");
var seats_6 = document.querySelectorAll(".checkbox_6");

button_6.addEventListener('click', (e) =>{
    console.log("inside form 6 book button");

    m_error_cinema_6="";
    m_error_time_6="";
    m_error_seat_6="";
    document.getElementById('error_cinema_6').innerHTML = m_error_cinema_6; 
    document.getElementById('error_time_6').innerHTML = m_error_time_6;  
    document.getElementById('error_ticket_6').innerHTML = m_error_seat_6;  
})
var ctr_6 = 0;
for(var i = 0; i<seats_6.length; i++) {
    seats_6[i].addEventListener('click', function() {
        console.log("woah clickable checkbox");
        if(this.checked == true) {
            ctr_6++;
        }
        else
        {
            ctr_6--;
        }
    })
}


form_6.addEventListener('submit', (e) =>{
    console.log("inside form 6 submit button");

    let messages_6 = [];
    if(cinema_room_6.value == null || cinema_room_6.value === '')
    {
        messages_6.push("no cinema room selected");
        m_error_cinema_6 = "No Cinema Room selected";
    }
    if(time_slot_6.value == null || time_slot_6.value === '')
        {
            messages_6.push("No Time Slot selected");
            m_error_time_6 = "No Time Slot selected";
        }
    if(ctr_6 == 0)
    {
        messages_6.push("No seat selected");
        m_error_seat_6 = "No Ticket Selected";
        
    }
    if(messages_6.length > 0)
    {
        e.preventDefault();
        document.getElementById('error_time_6').innerHTML = m_error_time_6;  
        document.getElementById('error_cinema_6').innerHTML = m_error_cinema_6;  
        document.getElementById('error_ticket_6').innerHTML = m_error_seat_6;    
    }
})

/****************************************************************************** */
/****************************************************************************** */
/****************************************************************************** */
/****************************************************************************** */
let form_7 = document.getElementById('form_7');

let cinema_room_7 = document.getElementById('cinema_room_7');
let time_slot_7 = document.getElementById('time_slot_7');
let button_7 = document.getElementById("book_7");
var seats_7 = document.querySelectorAll(".checkbox_7");

button_7.addEventListener('click', (e) =>{
    console.log("inside form 7 book button");

    m_error_cinema_7="";
    m_error_time_7="";
    m_error_seat_7="";
    document.getElementById('error_cinema_7').innerHTML = m_error_cinema_7; 
    document.getElementById('error_time_7').innerHTML = m_error_time_7;  
    document.getElementById('error_ticket_7').innerHTML = m_error_seat_7;  
})
var ctr_7 = 0;
for(var i = 0; i<seats_7.length; i++) {
    seats_7[i].addEventListener('click', function() {
        console.log("woah clickable checkbox");
        if(this.checked == true) {
            ctr_7++;
        }
        else
        {
            ctr_7--;
        }
    })
}


form_7.addEventListener('submit', (e) =>{
    console.log("inside form 7 submit button");

    let messages_7 = [];
    if(cinema_room_7.value == null || cinema_room_7.value === '')
    {
        messages_7.push("no cinema room selected");
        m_error_cinema_7 = "No Cinema Room selected";
    }
    if(time_slot_7.value == null || time_slot_7.value === '')
        {
            messages_7.push("No Time Slot selected");
            m_error_time_7 = "No Time Slot selected";
        }
    if(ctr_7 == 0)
    {
        messages_7.push("No seat selected");
        m_error_seat_7 = "No Ticket Selected";
        
    }
    if(messages_7.length > 0)
    {
        e.preventDefault();
        document.getElementById('error_time_7').innerHTML = m_error_time_7;  
        document.getElementById('error_cinema_7').innerHTML = m_error_cinema_7;  
        document.getElementById('error_ticket_7').innerHTML = m_error_seat_7;    
    }
})
/****************************************************************************** */
/****************************************************************************** */
/****************************************************************************** */
/****************************************************************************** */
let form_8 = document.getElementById('form_8');

let cinema_room_8 = document.getElementById('cinema_room_8');
let time_slot_8 = document.getElementById('time_slot_8');
let button_8 = document.getElementById("book_8");
var seats_8 = document.querySelectorAll(".checkbox_8");

button_8.addEventListener('click', (e) =>{
    console.log("inside form 8 book button");

    m_error_cinema_8="";
    m_error_time_8="";
    m_error_seat_8="";
    document.getElementById('error_cinema_8').innerHTML = m_error_cinema_8; 
    document.getElementById('error_time_8').innerHTML = m_error_time_8;  
    document.getElementById('error_ticket_8').innerHTML = m_error_seat_8;  
})
var ctr_8 = 0;
for(var i = 0; i<seats_8.length; i++) {
    seats_8[i].addEventListener('click', function() {
        console.log("woah clickable checkbox");
        if(this.checked == true) {
            ctr_8++;
        }
        else
        {
            ctr_8--;
        }
    })
}


form_8.addEventListener('submit', (e) =>{
    console.log("inside form 8 submit button");

    let messages_8 = [];
    if(cinema_room_8.value == null || cinema_room_8.value === '')
    {
        messages_8.push("no cinema room selected");
        m_error_cinema_8 = "No Cinema Room selected";
    }
    if(time_slot_8.value == null || time_slot_8.value === '')
        {
            messages_8.push("No Time Slot selected");
            m_error_time_8 = "No Time Slot selected";
        }
    if(ctr_8 == 0)
    {
        messages_8.push("No seat selected");
        m_error_seat_8 = "No Ticket Selected";
        
    }
    if(messages_8.length > 0)
    {
        e.preventDefault();
        document.getElementById('error_time_8').innerHTML = m_error_time_8;  
        document.getElementById('error_cinema_8').innerHTML = m_error_cinema_8;  
        document.getElementById('error_ticket_8').innerHTML = m_error_seat_8;    
    }
})

/****************************************************************************** */
/****************************************************************************** */
/****************************************************************************** */
/****************************************************************************** */
let form_9 = document.getElementById('form_9');
let cinema_room_9 = document.getElementById('cinema_room_9');
let time_slot_9 = document.getElementById('time_slot_9');
let button_9 = document.getElementById("book_9");
var seats_9 = document.querySelectorAll(".checkbox_9");

button_9.addEventListener('click', (e) =>{
    console.log("inside form 9 book button");

    m_error_cinema_9="";
    m_error_time_9="";
    m_error_seat_9="";
    document.getElementById('error_cinema_9').innerHTML = m_error_cinema_9; 
    document.getElementById('error_time_9').innerHTML = m_error_time_9;  
    document.getElementById('error_ticket_9').innerHTML = m_error_seat_9;  
})
var ctr_9 = 0;
for(var i = 0; i<seats_9.length; i++) {
    seats_9[i].addEventListener('click', function() {
        console.log("woah clickable checkbox");
        if(this.checked == true) {
            ctr_9++;
        }
        else
        {
            ctr_9--;
        }
    })
}


form_9.addEventListener('submit', (e) =>{
    console.log("inside form 9 submit button");

    let messages_9 = [];
    if(cinema_room_9.value == null || cinema_room_9.value === '')
    {
        messages_9.push("no cinema room selected");
        m_error_cinema_9 = "No Cinema Room selected";
    }
    if(time_slot_9.value == null || time_slot_9.value === '')
        {
            messages_9.push("No Time Slot selected");
            m_error_time_9 = "No Time Slot selected";
        }
    if(ctr_9 == 0)
    {
        messages_9.push("No seat selected");
        m_error_seat_9 = "No Ticket Selected";
        
    }
    if(messages_9.length > 0)
    {
        e.preventDefault();
        document.getElementById('error_time_9').innerHTML = m_error_time_9;  
        document.getElementById('error_cinema_9').innerHTML = m_error_cinema_9;  
        document.getElementById('error_ticket_9').innerHTML = m_error_seat_9;    
    }
})