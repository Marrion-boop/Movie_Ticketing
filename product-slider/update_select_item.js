
let selectedCinema = document.querySelector("#cinema_room");
let selectedRoom = document.querySelector(".selectedRoom");

selectedCinema.addEventListener('change', function () {
    selectedRoom.innerHTML = this.value
})
selectedCinema.addEventListener('change', () => {
    selectedRoom.innerHTML = selectedCinema.value
})
selectedCinema.addEventListener('change', function (e) {
    selectedRoom.innerHTML = e.target.value
})

let selectedTime = document.querySelector("#time_slot");
let selectedSlot = document.querySelector(".selectedSlot");

selectedTime.addEventListener('change', function () {
    selectedSlot.innerHTML = this.value
})
selectedTime.addEventListener('change', () => {
    selectedSlot.innerHTML = selectedTime.value
})
selectedTime.addEventListener('change', function (e) {
    selectedSlot.innerHTML = e.target.value
})

var checkboxes = document.querySelectorAll('.checkbox');
var count = 0;
for(var i = 0; i<checkboxes.length; i++) {
    checkboxes[i]. addEventListener('click', function() {
        if(this.checked == true) {
            count++;
        }
        else
        {
            count--;
        }
        document.getElementById('selectedId').innerHTML = count;
    })
}





