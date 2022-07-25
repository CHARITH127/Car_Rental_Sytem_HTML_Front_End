$("#btnsearchLoadDriverSchedule").click(function () {
    loadAllDriverSchedule();
})

$("#btnUpdateDriverSchedule").click(function () {
    updateDriverSchedule();
})

$("#btn_admin_updateDriverSchedule").click(function () {
    changeTheDriverInDriverSchedule();
})

function updateDriverSchedule() {
    let reservationId = $("#adminDriverScheduleidsearch").val()

    $.ajax({
        url: "http://localhost:8080/CarRentalSystem_war_exploded/driver?reservationID=" + reservationId,
        method: 'get',
        success: function (resp) {

            $("#update_form_driverScheduleID").val(resp.data.scheduleId)
            $("#update_form_driverSchedulePickupdate").val(resp.data.pick_up_date)
            $("#update_form_driverSchedulePickuptime").val(resp.data.pick_up_time)
            $("#update_form_driverScheduleReturndate").val(resp.data.return_date)
            $("#update_form_driverScheduleDriverNic").val(resp.data.driver.driverNic)
            $("#update_form_driverScheduleReservationId").val(resp.data.reservation.reservation_id)

        },
        error: function (err) {
            console.log(err);
        }
    });

}

function changeTheDriverInDriverSchedule() {
    let schedule_id = $("#update_form_driverScheduleID").val()
    let schedule_pickUpTime = $("#update_form_driverSchedulePickuptime").val()
    let schedule_returnDate = $("#update_form_driverScheduleReturndate").val()
    let schedule_pickUpDate = $("#update_form_driverSchedulePickupdate").val()
    let schedule_driverNic = $("#update_form_driverScheduleDriverNic").val()
    let schedule_reservationId = $("#update_form_driverScheduleReservationId").val()

    let driverSchedule = {
        scheduleId:schedule_id,
        pick_up_time:schedule_pickUpTime,
        return_date:schedule_returnDate,
        pick_up_date:schedule_pickUpDate,
        driver:{
            driverNic:schedule_driverNic
        },
        reservation:{
            reservation_id:schedule_reservationId
        }

    }

    $.ajax({
        url: "http://localhost:8080/CarRentalSystem_war_exploded/driver",
        method: "put",
        contentType: "application/json",
        data: JSON.stringify(driverSchedule),
        success:function (res) {
            alert(res.message)
            loadAllDriverSchedule();
        },
        error: function (err) {
            console.log(err);
        }
    });


}

function loadAllDriverSchedule() {

    let date = $("#driverScheduleDatePicker").val()

    $(".driverSchedule_management_table_body").empty();
    $.ajax({
        url: "http://localhost:8080/CarRentalSystem_war_exploded/driver?date="+date,
        method: "GET",
        success: function (resp) {
            for (const driverSch of resp.data) {
                let row = `<tr><td>${driverSch.scheduleId}</td><td>${driverSch.pick_up_date}</td><td>${driverSch.pick_up_time}</td><td>${driverSch.return_date}</td><td>${driverSch.driver.driverNic}</td><td>${driverSch.reservation.reservation_id}</td></tr>`;
                $(".driverSchedule_management_table_body").append(row);
            }

        }
    });
}