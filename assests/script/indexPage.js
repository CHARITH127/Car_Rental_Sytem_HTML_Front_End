$("#getStarted").click(function () {
    $("#guestUserHomePage").css("display", "none");
    $("#guestUserHomePageNavBar").css("display", "none");
    $("#loginPage").css("display", "none");
    $("#customerRegisterPage").css("display", "none");
})

$("#btnbacktoHomeFromCustomerRegistration").click(function () {
    $("#guestUserHomePageNavBar").css("display", "none");
    $("#guestUserHomePage").css("display", "none");
    $("#loginPage").css("display", "block");
    $("#customerRegisterPage").css("display", "none");
})