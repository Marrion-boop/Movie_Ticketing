let selectedCinema_1 = document.querySelector("#cinema_room_1");
let selectedRoom_1 = document.querySelector(".selectedRoom_1");
let selectedRoomnew_1 = document.querySelector(".selectedRoomnew_1");


selectedCinema_1.addEventListener('change', function () {
    selectedRoom_1.innerHTML = this.value
    selectedRoomnew_1.innerHTML = this.value
})
selectedCinema_1.addEventListener('change', () => {
    selectedRoom_1.innerHTML = selectedCinema_1.value
    selectedRoomnew_1.innerHTML = selectedCinema_1.value
})
selectedCinema_1.addEventListener('change', function (e) {
    selectedRoom_1.innerHTML = e.target.value
    selectedRoomnew_1.innerHTML = e.target.value
})





let selectedTime_1 = document.querySelector("#time_slot_1");
let selectedSlot_1 = document.querySelector(".selectedSlot_1");
let selectedSlotnew_1 = document.querySelector(".selectedSlotnew_1");

selectedTime_1.addEventListener('change', function () {
    selectedSlot_1.innerHTML = this.value
    selectedSlotnew_1.innerHTML = this.value

})
selectedTime_1.addEventListener('change', () => {
    selectedSlot_1.innerHTML = selectedTime.value
    selectedSlotnew_1.innerHTML = selectedTime.value

})
selectedTime_1.addEventListener('change', function (e) {
    selectedSlot_1.innerHTML = e.target.value
    selectedSlotnew_1.innerHTML = e.target.value

})

var checkboxes_1 = document.querySelectorAll('.checkbox_1');
var count_1 = 0;
for(var i = 0; i<checkboxes_1.length; i++) {
    checkboxes_1[i]. addEventListener('click', function() {
        if(this.checked == true) {
            count_1++;
        }
        else
        {
            count_1--;
        }
        document.getElementById('selectedId_1').innerHTML = count_1;
        document.getElementById('selectedIdnew_1').innerHTML = count_1;
        document.getElementById('totalPrice_1').innerHTML = count_1 * 350;
        document.getElementById('totalPricenew_1').innerHTML = count_1 * 350;
    })
}



/**********************************************************************************************************************************************/
/**********************************************************************************************************************************************/
/**********************************************************************************************************************************************/
/**********************************************************************************************************************************************/
/**********************************************************************************************************************************************/
/**********************************************************************************************************************************************/

let selectedCinema_2 = document.querySelector("#cinema_room_2");
let selectedRoom_2 = document.querySelector(".selectedRoom_2");
let selectedRoomnew_2 = document.querySelector(".selectedRoomnew_2");


selectedCinema_2.addEventListener('change', function () {
    selectedRoom_2.innerHTML = this.value
    selectedRoomnew_2.innerHTML = this.value
})
selectedCinema_2.addEventListener('change', () => {
    selectedRoom_2.innerHTML = selectedCinema_2.value
    selectedRoomnew_2.innerHTML = selectedCinema_2.value

})
selectedCinema_2.addEventListener('change', function (e) {
    selectedRoom_2.innerHTML = e.target.value
    selectedRoomnew_2.innerHTML = e.target.value

})





let selectedTime_2 = document.querySelector("#time_slot_2");
let selectedSlot_2 = document.querySelector(".selectedSlot_2");
let selectedSlotnew_2 = document.querySelector(".selectedSlotnew_2");

selectedTime_2.addEventListener('change', function () {
    selectedSlot_2.innerHTML = this.value
    selectedSlotnew_2.innerHTML = this.value

})
selectedTime_2.addEventListener('change', () => {
    selectedSlot_2.innerHTML = selectedTime.value
    selectedSlotnew_2.innerHTML = selectedTime.value

})
selectedTime_2.addEventListener('change', function (e) {
    selectedSlot_2.innerHTML = e.target.value
    selectedSlotnew_2.innerHTML = e.target.value

})

var checkboxes_2 = document.querySelectorAll('.checkbox_2');
var count_2 = 0;
for(var i = 0; i<checkboxes_2.length; i++) {
    checkboxes_2[i]. addEventListener('click', function() {
        if(this.checked == true) {
            count_2++;
        }
        else
        {
            count_2--;
        }
        document.getElementById('selectedId_2').innerHTML = count_2;
        document.getElementById('selectedIdnew_2').innerHTML = count_2;
    })
}

/**********************************************************************************************************************************************/
/**********************************************************************************************************************************************/
/**********************************************************************************************************************************************/
/**********************************************************************************************************************************************/
/**********************************************************************************************************************************************/
/**********************************************************************************************************************************************/

let selectedCinema_3 = document.querySelector("#cinema_room_3");
let selectedRoom_3 = document.querySelector(".selectedRoom_3");
let selectedRoomnew_3 = document.querySelector(".selectedRoomnew_3");


selectedCinema_3.addEventListener('change', function () {
    selectedRoom_3.innerHTML = this.value
    selectedRoomnew_3.innerHTML = this.value
})
selectedCinema_3.addEventListener('change', () => {
    selectedRoom_3.innerHTML = selectedCinema_3.value
    selectedRoomnew_3.innerHTML = selectedCinema_3.value

})
selectedCinema_3.addEventListener('change', function (e) {
    selectedRoom_3.innerHTML = e.target.value
    selectedRoomnew_3.innerHTML = e.target.value

})





let selectedTime_3 = document.querySelector("#time_slot_3");
let selectedSlot_3 = document.querySelector(".selectedSlot_3");
let selectedSlotnew_3 = document.querySelector(".selectedSlotnew_3");

selectedTime_3.addEventListener('change', function () {
    selectedSlot_3.innerHTML = this.value
    selectedSlotnew_3.innerHTML = this.value

})
selectedTime_3.addEventListener('change', () => {
    selectedSlot_3.innerHTML = selectedTime.value
    selectedSlotnew_3.innerHTML = selectedTime.value

})
selectedTime_3.addEventListener('change', function (e) {
    selectedSlot_3.innerHTML = e.target.value
    selectedSlotnew_3.innerHTML = e.target.value

})

var checkboxes_3 = document.querySelectorAll('.checkbox_3');
var count_3 = 0;
for(var i = 0; i<checkboxes_3.length; i++) {
    checkboxes_3[i]. addEventListener('click', function() {
        if(this.checked == true) {
            count_3++;
        }
        else
        {
            count_3--;
        }
        document.getElementById('selectedId_3').innerHTML = count_3;
        document.getElementById('selectedIdnew_3').innerHTML = count_3;
    })
}

