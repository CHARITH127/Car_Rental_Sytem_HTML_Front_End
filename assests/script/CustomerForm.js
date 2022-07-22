$("#btncustomerRegister").click(function () {
    var data = new FormData();
    let customer_nic = $("#customer_nic").val();
    let customer_name = $("#customerName").val();
    let customer_address = $("#customer_address").val();
    let customer_password = $("#customerPassword").val();
    let customer_telnumber = $("#customer_telnumber").val();
    let customer_email = $("#customer_email").val();
    let idPhoto =$("#customerIdcardPhoto")[0].files[0];
    let customerIdcardUpload = $("#customerIdcardPhoto")[0].files[0].name;
    let licenPhoto =$("#customerlicenPhoto")[0].files[0];
    let customerLicenseUpload = $("#customerlicenPhoto")[0].files[0].name;



    customer={
        customerNic:customer_nic,
        customerName:customer_name,
        customerPassword:customer_password,
        email:customer_email,
        customerAddress:customer_address,
        customerTel:customer_telnumber,
        idCard:customerIdcardUpload,
        drivingLicense:customerLicenseUpload
    }

    data.append("files",idPhoto);
    data.append("files",licenPhoto);
    data.append("customer",new Blob([JSON.stringify(customer)], {type: "application/json"}))


    $.ajax({
        url: "http://localhost:8080/CarRentalSystem_war_exploded/customer",
        method: 'post',
        async: true,
        contentType:false,
        processData: false,
        data: data,
        success: function (resp) {
            alert(resp.message)
            clearAll();
        },
        error: function (err) {
            console.log(err);
        }
    });

})

$("#btnCustomerFormLogOut").click(function () {
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

function clearAll() {
    $("#customer_nic").val("");
    $("#customerName").val("");
    $("#customer_address").val("");
    $("#customerPassword").val("");
    $("#customer_telnumber").val("");
    $("#customer_email").val("");
    $("#customerIdcardPhoto").val("")
    $("#customerlicenPhoto").val("")
}