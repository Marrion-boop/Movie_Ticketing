let form = document.getElementById('form');
let cinema_room = document.getElementById('cinema_room_1');
let time_slot = document.getElementById('time_slot_1');
let button = document.getElementById("book_1");
var seats_1 = document.querySelectorAll(".checkbox_1");

button.addEventListener('click', (e) =>{
    m_error_cinema="";
    m_error_time="";
    m_error_seat="";
    document.getElementById('error_cinema').innerHTML = m_error_cinema; 
    document.getElementById('error_time').innerHTML = m_error_time;  
    document.getElementById('error_ticket').innerHTML = m_error_seat;  

})


form.addEventListener('submit', (e) =>{
    let messages = [];
    let ctr = 0;
    if(cinema_room.value == null || cinema_room.value === '')
    {
        messages.push("no cinema room selected");
        m_error_cinema = "No Cinema Room selected";
    }
    if(time_slot.value == null || time_slot.value === '')
        {
            messages.push("No Time Slot selected");
            m_error_time = "No Time Slot selected";
        }


    for(var i = 0; i<seats_1.length; i++) {
        seats_1[i].addEventListener('click', function() {
            if(this.checked == true) {
                ctr++;
            }
            else
            {
                ctr--;
            }
        })
    }

    if(ctr == 0)
    {
        messages.push("No seat selected");
        m_error_seat = "No Ticket selected";
    }
    

    
    if(messages.length > 0)
    {
        e.preventDefault();
        document.getElementById('error_time').innerHTML = m_error_time;  
        document.getElementById('error_cinema').innerHTML = m_error_cinema;  
        document.getElementById('error_ticket').innerHTML = m_error_seat;  
 
        
    }
})





