function loadWeeklySchedule(customerId) {
    $("#driverPage_driverNIC").val(customerId)
    $(".driver_page_table_body").empty();
    $.ajax({
        url: "http://localhost:8080/CarRentalSystem_war_exploded/driver?customerId="+customerId,
        method: "GET",
        success: function (resp) {
            for (const schedule of resp.data){
                let row = `<tr><td>${schedule.scheduleId}</td><td>${schedule.pick_up_date}</td><td>${schedule.pick_up_time}</td><td>${schedule.return_date}</td><td>${schedule.reservation.reservation_id}</td></tr>`;
                $(".driver_page_table_body").append(row);
            }

        }
    });
}

$("#btndriverLogOut").click(function () {
    if (confirm("Do you actually wants to log out!") == true) {
        $("#guestUserHomePage").css("display", "block");
        $("#guestUserHomePageNavBar").css("display", "block");
        $("#loginPage").css("display", "none");
        $("#customerRegisterPage").css("display", "none");
        $("#customerProfilePage").css("display", "none");
        $("#customerProfilePageNavBar").css("display", "none");
        $("#driverscheduelePage").css("display", "none");
        $("#DriverPageNavBar").css("display", "none");
        $("#adminHomePage").css("display", "none");
        $("#adminNavBar").css("display", "none");
        $("#adminReservationManagementPage").css("display", "none");
        $("#adminCarManagementPage").css("display", "none");
        $("#adminDriverManagementPage").css("display", "none");
        $("#adminCustomerManagementPage").css("display", "none");
        $("#adminDriverScheduleManagementPage").css("display", "none");
    }
})