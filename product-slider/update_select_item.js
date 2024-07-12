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
let result_1 = [];
for(var i = 0; i<checkboxes_1.length; i++) {
    let wat = checkboxes_1[i].getAttribute("value");
    checkboxes_1[i]. addEventListener('click', function() {
        if(this.checked == true) {
            count_1++;
            result_1.push(wat);
        }
        else
        {
            result_1.pop(wat);
            count_1--;
        }
        document.getElementById('selectedId_1').innerHTML = count_1;
        document.getElementById('selectedIdnew_1').innerHTML = count_1;
        document.getElementById('totalPrice_1').innerHTML = count_1 * 350;
        document.getElementById('totalPricenew_1').innerHTML = count_1 * 350;
        document.getElementById('seat_1').innerHTML =result_1.join(" ,");
        document.getElementById('seatnew_1').innerHTML =result_1.join(" ,");
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
let result_2 = [];
for(var i = 0; i<checkboxes_2.length; i++) {
    let wat = checkboxes_2[i].getAttribute("value");
    checkboxes_2[i]. addEventListener('click', function() {
        if(this.checked == true) {
            count_2++;
            result_2.push(wat);
        }
        else
        {
            result_2.pop(wat);
            count_2--;
        }
        document.getElementById('selectedId_2').innerHTML = count_2;
        document.getElementById('selectedIdnew_2').innerHTML = count_2;
        document.getElementById('totalPrice_2').innerHTML = count_2 * 350;
        document.getElementById('totalPricenew_2').innerHTML = count_2 * 350;
        document.getElementById('seat_2').innerHTML =result_2.join(" ,");
        document.getElementById('seatnew_2').innerHTML =result_2.join(" ,");
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
let result_3 = [];
for(var i = 0; i<checkboxes_3.length; i++) {
    let wat = checkboxes_3[i].getAttribute("value");
    checkboxes_3[i]. addEventListener('click', function() {
        if(this.checked == true) {
            count_3++;
            result_3.push(wat);
        }
        else
        {
            count_3--;
            result_3.pop(wat);
        }
        document.getElementById('selectedId_3').innerHTML = count_3;
        document.getElementById('selectedIdnew_3').innerHTML = count_3;
        document.getElementById('totalPrice_3').innerHTML = count_3 * 350;
        document.getElementById('totalPricenew_3').innerHTML = count_3 * 350;
        document.getElementById('seat_3').innerHTML =result_3.join(" ,");
        document.getElementById('seatnew_3').innerHTML =result_3.join(" ,");
    })
}

/**********************************************************************************************************************************************/
/**********************************************************************************************************************************************/
/**********************************************************************************************************************************************/
/**********************************************************************************************************************************************/
/**********************************************************************************************************************************************/
/**********************************************************************************************************************************************/

let selectedCinema_4 = document.querySelector("#cinema_room_4");
let selectedRoom_4 = document.querySelector(".selectedRoom_4");
let selectedRoomnew_4 = document.querySelector(".selectedRoomnew_4");


selectedCinema_4.addEventListener('change', function () {
    selectedRoom_4.innerHTML = this.value
    selectedRoomnew_4.innerHTML = this.value
})
selectedCinema_4.addEventListener('change', () => {
    selectedRoom_4.innerHTML = selectedCinema_4.value
    selectedRoomnew_4.innerHTML = selectedCinema_4.value

})
selectedCinema_4.addEventListener('change', function (e) {
    selectedRoom_4.innerHTML = e.target.value
    selectedRoomnew_4.innerHTML = e.target.value

})





let selectedTime_4 = document.querySelector("#time_slot_4");
let selectedSlot_4 = document.querySelector(".selectedSlot_4");
let selectedSlotnew_4 = document.querySelector(".selectedSlotnew_4");

selectedTime_4.addEventListener('change', function () {
    selectedSlot_4.innerHTML = this.value
    selectedSlotnew_4.innerHTML = this.value

})
selectedTime_4.addEventListener('change', () => {
    selectedSlot_4.innerHTML = selectedTime.value
    selectedSlotnew_4.innerHTML = selectedTime.value

})
selectedTime_4.addEventListener('change', function (e) {
    selectedSlot_4.innerHTML = e.target.value
    selectedSlotnew_4.innerHTML = e.target.value

})

var checkboxes_4 = document.querySelectorAll('.checkbox_4');
var count_4 = 0;
let result_4 = [];
for(var i = 0; i<checkboxes_4.length; i++) {
    let wat = checkboxes_4[i].getAttribute("value");
    checkboxes_4[i]. addEventListener('click', function() {
        if(this.checked == true) {
            count_4++;
            result_4.push(wat);

        }
        else
        {
            result_4.pop(wat);
            count_4--;
        }
        document.getElementById('selectedId_4').innerHTML = count_4;
        document.getElementById('selectedIdnew_4').innerHTML = count_4;
        document.getElementById('totalPrice_4').innerHTML = count_4 * 350;
        document.getElementById('totalPricenew_4').innerHTML = count_4 * 350;
        document.getElementById('seat_4').innerHTML =result_4.join(" ,");
        document.getElementById('seatnew_4').innerHTML =result_4.join(" ,");
    })
}

/**********************************************************************************************************************************************/
/**********************************************************************************************************************************************/
/**********************************************************************************************************************************************/
/**********************************************************************************************************************************************/
/**********************************************************************************************************************************************/
/**********************************************************************************************************************************************/

let selectedCinema_5 = document.querySelector("#cinema_room_5");
let selectedRoom_5 = document.querySelector(".selectedRoom_5");
let selectedRoomnew_5 = document.querySelector(".selectedRoomnew_5");


selectedCinema_5.addEventListener('change', function () {
    selectedRoom_5.innerHTML = this.value
    selectedRoomnew_5.innerHTML = this.value
})
selectedCinema_5.addEventListener('change', () => {
    selectedRoom_5.innerHTML = selectedCinema_5.value
    selectedRoomnew_5.innerHTML = selectedCinema_5.value

})
selectedCinema_5.addEventListener('change', function (e) {
    selectedRoom_5.innerHTML = e.target.value
    selectedRoomnew_5.innerHTML = e.target.value

})





let selectedTime_5 = document.querySelector("#time_slot_5");
let selectedSlot_5 = document.querySelector(".selectedSlot_5");
let selectedSlotnew_5 = document.querySelector(".selectedSlotnew_5");

selectedTime_5.addEventListener('change', function () {
    selectedSlot_5.innerHTML = this.value
    selectedSlotnew_5.innerHTML = this.value

})
selectedTime_5.addEventListener('change', () => {
    selectedSlot_5.innerHTML = selectedTime.value
    selectedSlotnew_5.innerHTML = selectedTime.value

})
selectedTime_5.addEventListener('change', function (e) {
    selectedSlot_5.innerHTML = e.target.value
    selectedSlotnew_5.innerHTML = e.target.value

})

var checkboxes_5 = document.querySelectorAll('.checkbox_5');
var count_5 = 0;
let result_5 = [];
for(var i = 0; i<checkboxes_5.length; i++) {
    let wat = checkboxes_5[i].getAttribute("value");
    checkboxes_5[i]. addEventListener('click', function() {
        if(this.checked == true) {
            count_5++;
            result_5.push(wat);
        }
        else
        {
            result_5.pop(wat);
            count_5--;
        }
        document.getElementById('selectedId_5').innerHTML = count_5;
        document.getElementById('selectedIdnew_5').innerHTML = count_5;
        document.getElementById('totalPrice_5').innerHTML = count_5 * 350;
        document.getElementById('totalPricenew_5').innerHTML = count_5 * 350;
        document.getElementById('seat_5').innerHTML =result_5.join(" ,");
        document.getElementById('seatnew_5').innerHTML =result_5.join(" ,");
    })
}

/**********************************************************************************************************************************************/
/**********************************************************************************************************************************************/
/**********************************************************************************************************************************************/
/**********************************************************************************************************************************************/
/**********************************************************************************************************************************************/
/**********************************************************************************************************************************************/

let selectedCinema_6 = document.querySelector("#cinema_room_6");
let selectedRoom_6 = document.querySelector(".selectedRoom_6");
let selectedRoomnew_6 = document.querySelector(".selectedRoomnew_6");


selectedCinema_6.addEventListener('change', function () {
    selectedRoom_6.innerHTML = this.value
    selectedRoomnew_6.innerHTML = this.value
})
selectedCinema_6.addEventListener('change', () => {
    selectedRoom_6.innerHTML = selectedCinema_6.value
    selectedRoomnew_6.innerHTML = selectedCinema_6.value

})
selectedCinema_6.addEventListener('change', function (e) {
    selectedRoom_6.innerHTML = e.target.value
    selectedRoomnew_6.innerHTML = e.target.value

})





let selectedTime_6 = document.querySelector("#time_slot_6");
let selectedSlot_6 = document.querySelector(".selectedSlot_6");
let selectedSlotnew_6 = document.querySelector(".selectedSlotnew_6");

selectedTime_6.addEventListener('change', function () {
    selectedSlot_6.innerHTML = this.value
    selectedSlotnew_6.innerHTML = this.value

})
selectedTime_6.addEventListener('change', () => {
    selectedSlot_6.innerHTML = selectedTime.value
    selectedSlotnew_6.innerHTML = selectedTime.value

})
selectedTime_6.addEventListener('change', function (e) {
    selectedSlot_6.innerHTML = e.target.value
    selectedSlotnew_6.innerHTML = e.target.value

})

var checkboxes_6 = document.querySelectorAll('.checkbox_6');
var count_6 = 0;
let result_6 = [];
for(var i = 0; i<checkboxes_6.length; i++) {
    let wat = checkboxes_6[i].getAttribute("value");
    checkboxes_6[i]. addEventListener('click', function() {
        if(this.checked == true) {
            count_6++;
            result_6.push(wat);
        }
        else
        {
            result_6.pop(wat);
            count_6--;
        }
        document.getElementById('selectedId_6').innerHTML = count_6;
        document.getElementById('selectedIdnew_6').innerHTML = count_6;
        document.getElementById('totalPrice_6').innerHTML = count_6 * 350;
        document.getElementById('totalPricenew_6').innerHTML = count_6 * 350;
        document.getElementById('seat_6').innerHTML =result_6.join(" ,");
        document.getElementById('seatnew_6').innerHTML =result_6.join(" ,");
    })
}

/**********************************************************************************************************************************************/
/**********************************************************************************************************************************************/
/**********************************************************************************************************************************************/
/**********************************************************************************************************************************************/
/**********************************************************************************************************************************************/
/**********************************************************************************************************************************************/

let selectedCinema_7 = document.querySelector("#cinema_room_7");
let selectedRoom_7 = document.querySelector(".selectedRoom_7");
let selectedRoomnew_7 = document.querySelector(".selectedRoomnew_7");


selectedCinema_7.addEventListener('change', function () {
    selectedRoom_7.innerHTML = this.value
    selectedRoomnew_7.innerHTML = this.value
})
selectedCinema_7.addEventListener('change', () => {
    selectedRoom_7.innerHTML = selectedCinema_7.value
    selectedRoomnew_7.innerHTML = selectedCinema_7.value

})
selectedCinema_7.addEventListener('change', function (e) {
    selectedRoom_7.innerHTML = e.target.value
    selectedRoomnew_7.innerHTML = e.target.value

})





let selectedTime_7 = document.querySelector("#time_slot_7");
let selectedSlot_7 = document.querySelector(".selectedSlot_7");
let selectedSlotnew_7 = document.querySelector(".selectedSlotnew_7");

selectedTime_7.addEventListener('change', function () {
    selectedSlot_7.innerHTML = this.value
    selectedSlotnew_7.innerHTML = this.value

})
selectedTime_7.addEventListener('change', () => {
    selectedSlot_7.innerHTML = selectedTime.value
    selectedSlotnew_7.innerHTML = selectedTime.value

})
selectedTime_7.addEventListener('change', function (e) {
    selectedSlot_7.innerHTML = e.target.value
    selectedSlotnew_7.innerHTML = e.target.value

})

var checkboxes_7 = document.querySelectorAll('.checkbox_7');
var count_7 = 0;
let result_7 = [];

for(var i = 0; i<checkboxes_7.length; i++) {
    let wat = checkboxes_7[i].getAttribute("value");
    checkboxes_7[i]. addEventListener('click', function() {
        if(this.checked == true) {
            count_7++;
            result_7.push(wat);

        }
        else
        {
            result_7.pop(wat);

            count_7--;
        }
        document.getElementById('selectedId_7').innerHTML = count_7;
        document.getElementById('selectedIdnew_7').innerHTML = count_7;
        document.getElementById('totalPrice_7').innerHTML = count_7 * 350;
        document.getElementById('totalPricenew_7').innerHTML = count_7 * 350;
        document.getElementById('seat_7').innerHTML =result_7.join(" ,");
        document.getElementById('seatnew_7').innerHTML =result_7.join(" ,");
    })
}


/**********************************************************************************************************************************************/
/**********************************************************************************************************************************************/
/**********************************************************************************************************************************************/
/**********************************************************************************************************************************************/
/**********************************************************************************************************************************************/
/**********************************************************************************************************************************************/

let selectedCinema_8 = document.querySelector("#cinema_room_8");
let selectedRoom_8 = document.querySelector(".selectedRoom_8");
let selectedRoomnew_8 = document.querySelector(".selectedRoomnew_8");


selectedCinema_8.addEventListener('change', function () {
    selectedRoom_8.innerHTML = this.value
    selectedRoomnew_8.innerHTML = this.value
})
selectedCinema_8.addEventListener('change', () => {
    selectedRoom_8.innerHTML = selectedCinema_8.value
    selectedRoomnew_8.innerHTML = selectedCinema_8.value

})
selectedCinema_8.addEventListener('change', function (e) {
    selectedRoom_8.innerHTML = e.target.value
    selectedRoomnew_8.innerHTML = e.target.value

})





let selectedTime_8 = document.querySelector("#time_slot_8");
let selectedSlot_8 = document.querySelector(".selectedSlot_8");
let selectedSlotnew_8 = document.querySelector(".selectedSlotnew_8");

selectedTime_8.addEventListener('change', function () {
    selectedSlot_8.innerHTML = this.value
    selectedSlotnew_8.innerHTML = this.value

})
selectedTime_8.addEventListener('change', () => {
    selectedSlot_8.innerHTML = selectedTime.value
    selectedSlotnew_8.innerHTML = selectedTime.value

})
selectedTime_8.addEventListener('change', function (e) {
    selectedSlot_8.innerHTML = e.target.value
    selectedSlotnew_8.innerHTML = e.target.value

})

var checkboxes_8 = document.querySelectorAll('.checkbox_8');
var count_8 = 0;
let result_8 = [];

for(var i = 0; i<checkboxes_8.length; i++) {
    let wat = checkboxes_8[i].getAttribute("value");
    checkboxes_8[i]. addEventListener('click', function() {
        if(this.checked == true) {
            count_8++;
            result_8.push(wat);

        }
        else
        {
            count_8--;
            result_8.pop(wat);

        }
        document.getElementById('selectedId_8').innerHTML = count_8;
        document.getElementById('selectedIdnew_8').innerHTML = count_8;
        document.getElementById('totalPrice_8').innerHTML = count_8 * 350;
        document.getElementById('totalPricenew_8').innerHTML = count_8 * 350;
        document.getElementById('seat_8').innerHTML =result_8.join(" ,");
        document.getElementById('seatnew_8').innerHTML =result_8.join(" ,");
    })
}

/**********************************************************************************************************************************************/
/**********************************************************************************************************************************************/
/**********************************************************************************************************************************************/
/**********************************************************************************************************************************************/
/**********************************************************************************************************************************************/
/**********************************************************************************************************************************************/

let selectedCinema_9 = document.querySelector("#cinema_room_9");
let selectedRoom_9 = document.querySelector(".selectedRoom_9");
let selectedRoomnew_9 = document.querySelector(".selectedRoomnew_9");


selectedCinema_9.addEventListener('change', function () {
    selectedRoom_9.innerHTML = this.value
    selectedRoomnew_9.innerHTML = this.value
})
selectedCinema_9.addEventListener('change', () => {
    selectedRoom_9.innerHTML = selectedCinema_9.value
    selectedRoomnew_9.innerHTML = selectedCinema_9.value

})
selectedCinema_9.addEventListener('change', function (e) {
    selectedRoom_9.innerHTML = e.target.value
    selectedRoomnew_9.innerHTML = e.target.value

})





let selectedTime_9 = document.querySelector("#time_slot_9");
let selectedSlot_9 = document.querySelector(".selectedSlot_9");
let selectedSlotnew_9 = document.querySelector(".selectedSlotnew_9");

selectedTime_9.addEventListener('change', function () {
    selectedSlot_9.innerHTML = this.value
    selectedSlotnew_9.innerHTML = this.value

})
selectedTime_9.addEventListener('change', () => {
    selectedSlot_9.innerHTML = selectedTime.value
    selectedSlotnew_9.innerHTML = selectedTime.value

})
selectedTime_9.addEventListener('change', function (e) {
    selectedSlot_9.innerHTML = e.target.value
    selectedSlotnew_9.innerHTML = e.target.value

})

var checkboxes_9 = document.querySelectorAll('.checkbox_9');
var count_9 = 0;
let result_9 = [];

for(var i = 0; i<checkboxes_9.length; i++) {
    let wat = checkboxes_9[i].getAttribute("value");
    checkboxes_9[i]. addEventListener('click', function() {
        if(this.checked == true) {
            count_9++;
            result_9.push(wat);

        }
        else
        {
            count_9--;
            result_9.pop(wat);

        }
        document.getElementById('selectedId_9').innerHTML = count_9;
        document.getElementById('selectedIdnew_9').innerHTML = count_9;
        document.getElementById('totalPrice_9').innerHTML = count_9 * 350;
        document.getElementById('totalPricenew_9').innerHTML = count_9 * 350;
        document.getElementById('seat_9').innerHTML =result_9.join(" ,");
        document.getElementById('seatnew_9').innerHTML =result_9.join(" ,");
    })
}

