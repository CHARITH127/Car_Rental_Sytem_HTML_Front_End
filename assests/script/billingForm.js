
$("#billReservation").click(function () {

    if ($("#Reservationidsearch").val() == '') {
        alert("please enter the reservation id ")
    }else {
        genarateBillingId();
        setTodayDate();
        calCalateHirePayment();
    }
})

$("#calculate_fullPayment").click(function () {
    calculatePayment()
})

$("#btn_bill_proceed").click(function () {
    placeABill()
})

function placeABill() {

    let trip =$("#billing_additonal_charges").val()
    let billID =$("#billing_id").val()
    let resID =$("#billing_reservation_id").val()
    let loasPayment =$("#billing_losspayment").val()
    let fullPayment =$("#billing_full_payment").val()
    let damagePayment =$("#billing_damage_payment").val()
    let driverPayment =$("#billing_driver_payment").val()
    let refundPayment =$("#billing_refund_payment").val()
    let billdate =$("#billing_date").val()

    let bill = {
        billingId:billID,
        reservation:{
            reservation_id:resID
        },
        tripTour:trip,
        loosePayment:loasPayment,
        fullPayment:fullPayment,
        damagePayment:damagePayment,
        driverPayment:driverPayment,
        refundPayment:refundPayment,
        billingDate:billdate
    }

    $.ajax({
        url: "http://localhost:8080/CarRentalSystem_war_exploded/bill",
        method: "post",
        contentType: "application/json",
        data: JSON.stringify(bill),
        success: function (res) {
            alert(res.message)
            loadAllReserbvations();
        }
    });
}

function calculatePayment() {

    let full_payment = parseInt($("#billing_hire_charges").val())+ parseInt($("#billing_driver_payment").val())
    let refund_payment = $("#billing_losspayment").val()-$("#billing_damage_payment").val()

    $("#billing_full_payment").val(full_payment);
    $("#billing_refund_payment").val(refund_payment);

}

function calCalateHirePayment() {
    let resId = $("#Reservationidsearch").val()

    $.ajax({
        url: "http://localhost:8080/CarRentalSystem_war_exploded/reservation?id=" + resId,
        method: "GET",
        success: function (resp) {
            let hireCharge = 0;

            $("#billing_reservation_id").val(resp.data.reservation_id)
            $("#billing_losspayment").val(resp.data.car.lossPayment)

            let pickUp_date = resp.data.pick_up_date;
            let retunDate_date = resp.data.return_date;

            let numberOfDays = calculateNumberOfDays(pickUp_date,retunDate_date);

            if (numberOfDays<30){
                hireCharge =   numberOfDays * resp.data.car.dailyRate;
                $("#billing_hire_charges").val(hireCharge)
            }else if (numberOfDays%30==0){
                let numberOfMonths = numberOfDays/30;
                hireCharge = numberOfMonths* resp.data.car.monthlyRate
                $("#billing_hire_charges").val(hireCharge)
            }else {
                let numberOfMonths = numberOfDays/30;
                let aditionDates = numberOfDays%30;
                hireCharge = (numberOfMonths * resp.data.car.monthlyRate) +(aditionDates*resp.data.car.extraKilometerPrice);
                $("#billing_hire_charges").val(hireCharge)
            }

        }
    });

}

function calculateNumberOfDays(pickUpDate, returnDate) {
    let date1 =  new Date(pickUpDate);
    let date2 =  new Date(returnDate);

    let dif =date2.getTime()-date1.getTime();
    let msInDay = 24*3600*1000
    let numbDays =  dif/msInDay;

    return numbDays;
}

function setTodayDate() {
    /*set today date*/
    var now = new Date();

    var day = ("0" + now.getDate()).slice(-2);
    var month = ("0" + (now.getMonth() + 1)).slice(-2);

    var today = now.getFullYear() + "-" + (month) + "-" + (day);

    $("#billing_date").val(today);
}

function genarateBillingId() {
    $.ajax({
        url: "http://localhost:8080/CarRentalSystem_war_exploded/bill?bilId",
        method: "get",
        success: function (res) {
           $("#billing_id").val(res.data)
        }
    });
}