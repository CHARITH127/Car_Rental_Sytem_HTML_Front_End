$("#btn_login_button").click(function () {
    var data = new FormData();
    let user_name = $("#login_user_name").val();
    let password = $("#login_password").val();
    data.append("userId", user_name);
    data.append("password", password);
    $.ajax({
        url: "http://localhost:8080/CarRentalSystem_war_exploded/login",
        method: 'post',
        async: true,
        contentType: false,
        processData: false,
        data: data,
        success: function (resp) {
            var role = resp.message;
            if (role == "Customer") {
                $("#guestUserHomePage").css("display", "none");
                $("#guestUserHomePageNavBar").css("display", "none");
                $("#loginPage").css("display", "none");
                $("#customerRegisterPage").css("display", "none");
                $("#customerProfilePage").css("display", "block");
                $("#customerProfilePageNavBar").css("display", "block");
                $("#driverscheduelePage").css("display", "none");
                $("#DriverPageNavBar").css("display", "none");
                $("#adminHomePage").css("display", "none");
                $("#adminNavBar").css("display", "none");
                $("#adminReservationManagementPage").css("display", "none");
                $("#adminCarManagementPage").css("display", "none");
                $("#adminDriverManagementPage").css("display", "none");
                $("#adminCustomerManagementPage").css("display", "none");
                $("#adminDriverScheduleManagementPage").css("display", "none");

                /*loading customer details*/


                $("#cust_pro_customer_nic").val(resp.data.customerNic);
                $("#cust_pro_customer_name").val(resp.data.customerName);
                $("#cust_pro_customer_password").val(resp.data.customerPassword);
                $("#cust_pro_customer_email").val(resp.data.email);
                $("#cust_pro_customer_address").val(resp.data.customerAddress);
                $("#cust_pro_customer_tel").val(resp.data.customerTel);


                let customerIdCardPhotoUrl = "http://localhost:8080/CarRentalSystem_war_exploded/uploads/"+resp.data.idCard;
                let customerLicensePhotoUrl = "http://localhost:8080/CarRentalSystem_war_exploded/uploads/"+resp.data.drivingLicense;


                $("#cust_pro_idcard_imageLoader").css({
                    "background": `url(${customerIdCardPhotoUrl})`,
                    "background-size": "cover",
                    "height": "14rem"
                });

                $("#cust_pro_licen_imageLoader").css({
                    "background": `url(${customerLicensePhotoUrl})`,
                    "background-size": "cover",
                    "height": "14rem"
                });

                loadAllReservations();

            } else if (role == "Driver") {
                $("#guestUserHomePage").css("display", "none");
                $("#guestUserHomePageNavBar").css("display", "none");
                $("#loginPage").css("display", "none");
                $("#customerRegisterPage").css("display", "none");
                $("#customerProfilePage").css("display", "none");
                $("#customerProfilePageNavBar").css("display", "none");
                $("#driverscheduelePage").css("display", "block");
                $("#DriverPageNavBar").css("display", "block");
                $("#adminHomePage").css("display", "none");
                $("#adminNavBar").css("display", "none");
                $("#adminReservationManagementPage").css("display", "none");
                $("#adminCarManagementPage").css("display", "none");
                $("#adminDriverManagementPage").css("display", "none");
                $("#adminCustomerManagementPage").css("display", "none");
                $("#adminDriverScheduleManagementPage").css("display", "none");
            } else if (role == "Admin") {
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
            } else {
                alert("login access denied");
            }
        },
        error: function (err) {
            console.log(err);
        }
    });

})

