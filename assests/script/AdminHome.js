$("#admin_home_page").click(function () {
    $("#guestUserHomePage").css("display", "none");
    $("#guestUserHomePageNavBar").css("display", "none");
    $("#loginPage").css("display", "none");
    $("#customerRegisterPage").css("display", "none");
    $("#customerProfilePage").css("display", "none");
    $("#customerProfilePageNavBar").css("display", "none");
    $("#driverscheduelePage").css("display", "none");
    $("#DriverPageNavBar").css("display", "none");
    $("#adminHomePage").css("display", "block");
    $("#adminNavBar").css("display", "block");
    $("#adminReservationManagementPage").css("display", "none");
    $("#adminCarManagementPage").css("display", "none");
    $("#adminDriverManagementPage").css("display", "none");
    $("#adminCustomerManagementPage").css("display", "none");
    $("#adminDriverScheduleManagementPage").css("display", "none");
})

$("#admin_reservation_page").click(function () {
    $("#guestUserHomePage").css("display", "none");
    $("#guestUserHomePageNavBar").css("display", "none");
    $("#loginPage").css("display", "none");
    $("#customerRegisterPage").css("display", "none");
    $("#customerProfilePage").css("display", "none");
    $("#customerProfilePageNavBar").css("display", "none");
    $("#driverscheduelePage").css("display", "none");
    $("#DriverPageNavBar").css("display", "none");
    $("#adminHomePage").css("display", "none");
    $("#adminNavBar").css("display", "block");
    $("#adminReservationManagementPage").css("display", "block");
    $("#adminCarManagementPage").css("display", "none");
    $("#adminDriverManagementPage").css("display", "none");
    $("#adminCustomerManagementPage").css("display", "none");
    $("#adminDriverScheduleManagementPage").css("display", "none");
})

$("#admin_car_page").click(function () {
    $("#guestUserHomePage").css("display", "none");
    $("#guestUserHomePageNavBar").css("display", "none");
    $("#loginPage").css("display", "none");
    $("#customerRegisterPage").css("display", "none");
    $("#customerProfilePage").css("display", "none");
    $("#customerProfilePageNavBar").css("display", "none");
    $("#driverscheduelePage").css("display", "none");
    $("#DriverPageNavBar").css("display", "none");
    $("#adminHomePage").css("display", "none");
    $("#adminNavBar").css("display", "block");
    $("#adminReservationManagementPage").css("display", "none");
    $("#adminCarManagementPage").css("display", "block");
    $("#adminDriverManagementPage").css("display", "none");
    $("#adminCustomerManagementPage").css("display", "none");
    $("#adminDriverScheduleManagementPage").css("display", "none");
})

$("#admin_driver_page").click(function () {
    $("#guestUserHomePage").css("display", "none");
    $("#guestUserHomePageNavBar").css("display", "none");
    $("#loginPage").css("display", "none");
    $("#customerRegisterPage").css("display", "none");
    $("#customerProfilePage").css("display", "none");
    $("#customerProfilePageNavBar").css("display", "none");
    $("#driverscheduelePage").css("display", "none");
    $("#DriverPageNavBar").css("display", "none");
    $("#adminHomePage").css("display", "none");
    $("#adminNavBar").css("display", "block");
    $("#adminReservationManagementPage").css("display", "none");
    $("#adminCarManagementPage").css("display", "none");
    $("#adminDriverManagementPage").css("display", "block");
    $("#adminCustomerManagementPage").css("display", "none");
    $("#adminDriverScheduleManagementPage").css("display", "none");
})

$("#admin_customer_page").click(function () {
    $("#guestUserHomePage").css("display", "none");
    $("#guestUserHomePageNavBar").css("display", "none");
    $("#loginPage").css("display", "none");
    $("#customerRegisterPage").css("display", "none");
    $("#customerProfilePage").css("display", "none");
    $("#customerProfilePageNavBar").css("display", "none");
    $("#driverscheduelePage").css("display", "none");
    $("#DriverPageNavBar").css("display", "none");
    $("#adminHomePage").css("display", "none");
    $("#adminNavBar").css("display", "block");
    $("#adminReservationManagementPage").css("display", "none");
    $("#adminCarManagementPage").css("display", "none");
    $("#adminDriverManagementPage").css("display", "none");
    $("#adminCustomerManagementPage").css("display", "block");
    $("#adminDriverScheduleManagementPage").css("display", "none");
})

$("#admin_driver_schedule_page").click(function () {
    $("#guestUserHomePage").css("display", "none");
    $("#guestUserHomePageNavBar").css("display", "none");
    $("#loginPage").css("display", "none");
    $("#customerRegisterPage").css("display", "none");
    $("#customerProfilePage").css("display", "none");
    $("#customerProfilePageNavBar").css("display", "none");
    $("#driverscheduelePage").css("display", "none");
    $("#DriverPageNavBar").css("display", "none");
    $("#adminHomePage").css("display", "none");
    $("#adminNavBar").css("display", "block");
    $("#adminReservationManagementPage").css("display", "none");
    $("#adminCarManagementPage").css("display", "none");
    $("#adminDriverManagementPage").css("display", "none");
    $("#adminCustomerManagementPage").css("display", "none");
    $("#adminDriverScheduleManagementPage").css("display", "block");
})

$("#btnadminLogOut").click(function () {
    if (confirm("Do you actually wants to log out!")==true){
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

/*
$("#guestUserHomePage").css("display", "none");
$("#guestUserHomePageNavBar").css("display", "none");
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
$("#adminDriverScheduleManagementPage").css("display", "none");*/