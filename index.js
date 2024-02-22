let seat_array = [];
let copupon_code = ['NEW15','Couple 20'];
let signal = false ;
const per_ticket_price = 550 ;
let total_price = 0 ;
let number_of_seat_remain = 40;
let number_of_seat_booked = 0;
let grand_price = 0;
function seat_selected(id_value){
    if (seat_array.length < 4){
        if(!seat_array.includes(id_value)){
            let temp_array = [];
            seat_array.push(id_value);
            temp_array.push(id_value);
            number_of_seat_booked += 1;
            number_of_seat_remain -= 1;
            const seatCount = document.getElementById('seat-count');
            seatCount.innerText = number_of_seat_remain ;
            const seatBooked = document.getElementById('seat-booked');
            seatBooked.innerText = number_of_seat_booked;
            total_price += 550; 
            const grandPrice = document.getElementById('grand-price')
            grandPrice.innerText = total_price;
            for (let i = 0 ; i < seat_array.length ; i+=1){
                const selected_seat_color_change = document.getElementById(seat_array[i]);
                selected_seat_color_change.classList.remove('bg-[rgba(3,7,18,0.05)]');
                selected_seat_color_change.classList.remove('text-[rgba(3,7,18,0.5)]');
                selected_seat_color_change.classList.add('bg-[#1DD100]');
                selected_seat_color_change.classList.add('text-[#FFFFFF]');

                const array_elements = document.getElementById(seat_array[i]);
            }    
        }
    }
    else{
        console.log('You can not add more then 4 seat');
    }
    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = total_price;
    console.log(seat_array);
    for (let i = 0 ; i < seat_array.length ; i+=1){
        console.log(seat_array[i]);
    if (i===0) {
        const firstTicketPossition = document.getElementById('first-ticket-possition');
        firstTicketPossition.innerText = seat_array[0];
        const secondTicket = document.getElementById('second-ticket');
        secondTicket.classList.add('hidden');
        secondTicket.classList.remove('flex');
    }
    else if (i===1) {
        const secondTicketPossition = document.getElementById('second-ticket-possition');
        secondTicketPossition.innerText = seat_array[1];
        const secondTicket = document.getElementById('second-ticket');
        secondTicket.classList.add('flex');
        secondTicket.classList.remove('hidden');
    }
    else if(i===2){
        const thirdTicketPossition = document.getElementById('third-ticket-possition');
        thirdTicketPossition.innerText = seat_array[2];
        const thirdTicket = document.getElementById('third-ticket');
        thirdTicket.classList.add('flex');
        thirdTicket.classList.remove('hidden');
        const spaceCreator = document.getElementById('space-creator');
        spaceCreator.classList.add('h-[380px]');
    }
    else if (i===3) {
        const fourthTicketPossition = document.getElementById('fourth-ticket-possition');
        fourthTicketPossition.innerText = seat_array[3];
        const fourthTicket = document.getElementById('fourth-ticket');
        fourthTicket.classList.add('flex');
        fourthTicket.classList.remove('hidden');
        const spaceCreator = document.getElementById('space-creator');
        spaceCreator.classList.add('h-[440px]');
    }
    
    if (i===3) {
        const buttonDisable = document.getElementById('button-disable') ;
        buttonDisable.removeAttribute('disabled');
        const inputDisable = document.getElementById('input-disable') ;
        inputDisable.removeAttribute('disabled');
        
    }
        
    }

}


function copupon(){
    let copupon = document.getElementById('input-disable');
    let copupunCheek = copupon.value;
    console.log(copupunCheek);
    let label_copupun = document.getElementById('label-id');
    label_copupun.classList.add('hidden');
    const discountDiv = document.getElementById('discount-div');
    discountDiv.classList.remove('hidden');
    discountDiv.classList.add('flex');
    const hrLine = document.getElementById('hr-line');
    hrLine.classList.remove('hidden');
    if (copupunCheek =='NEW15') {
        grand_price = total_price - (total_price*15/100);
        const grandPrice = document.getElementById('grand-price')
        grandPrice.innerText = grand_price;
        const discountPrice = document.getElementById('discount-price');
        discountPrice.innerText = (total_price*15/100);
        

    }
    else if (copupunCheek =='Couple 20') {
        grand_price = total_price - (total_price*20/100);
        const grandPrice = document.getElementById('grand-price')
        grandPrice.innerText = grand_price;
        const discountPrice = document.getElementById('discount-price');
        discountPrice.innerText = (total_price*15/100);
    }
    else{
        const grandPrice = document.getElementById('grand-price')
        grandPrice.innerText = total_price;
        const discountPrice = document.getElementById('discount-price');
        discountPrice.innerText = 0 ;
    }
}

document.getElementById('phone-number').addEventListener('keyup',function (){
    const phoneNumber = document.getElementById('phone-number');
    const phone_number_check = phoneNumber.value;
    if (seat_array.length > 0 && phone_number_check.length === 11) {
        const nextDisable = document.getElementById('next-disable');
        nextDisable.removeAttribute('disabled');
    }
})

function nextButton(){

    signal = !signal;
    console.log(signal);
    if (signal == true) {
        let phoneNumber = document.getElementById('phone-number');
        let phone_number_check = phoneNumber.value;
      
        phoneNumber.value = '';
        let passangerId = document.getElementById('passenger-id');
        let passanger_id_check = passangerId.value;
        passanger_id_check.value = '';
        let emailId = document.getElementById('email-id');
        let email_id_check = emailId.value;
        email_id_check.value = '';
 
    }
}