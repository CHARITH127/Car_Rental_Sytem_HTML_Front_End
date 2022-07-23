/*--------save customer----------*/
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

var custoemerIdPhotoName="";
var custoemerLicensePhotoName="";

$("#btn_cust_pro_edit").click(function () {

    var custId = $("#cust_pro_customer_nic").val();

    $.ajax({
        url: "http://localhost:8080/CarRentalSystem_war_exploded/customer?id="+custId,
        method: 'get',
        async: true,
        contentType:false,
        processData: false,
        success: function (resp) {
            $("#update_form_customerNIC").val(resp.data.customerNic);
            $("#update_form_customerName").val(resp.data.customerName);
            $("#update_form_customerAddress").val(resp.data.customerAddress);
            $("#update_form_customerPassword").val(resp.data.customerPassword);
            $("#update_form_customerTel").val(resp.data.customerTel);
            $("#update_form_customerEmail").val(resp.data.email);
            custoemerIdPhotoName=resp.data.idCard;
            custoemerLicensePhotoName=resp.data.drivingLicense;
        },
        error: function (err) {
            console.log(err);
        }
    });



})

/*--------update customer----------*/
$("#btn_update_customer").click(function () {
    var data = new FormData();
    let customer_nic = $("#update_form_customerNIC").val();
    let customer_name = $("#update_form_customerName").val();
    let customer_address = $("#update_form_customerAddress").val();
    let customer_password = $("#update_form_customerPassword").val();
    let customer_telnumber = $("#update_form_customerTel").val();
    let customer_email = $("#update_form_customerEmail").val();


    let customerIdcardUpload="";
    let customerLicenseUpload="";
    let idPhoto="";
    let licenPhoto="";
    if (($("#update_form_customerIdCard").val()=='') && ($("#update_form_customerDrivingLicense").val()=='')) {
        alert("file chooser cant be empty please upload id card and driving license");
    }else {
        idPhoto=$("#update_form_customerIdCard")[0].files[0];
        customerIdcardUpload = $("#update_form_customerIdCard")[0].files[0].name;
        licenPhoto=$("#update_form_customerDrivingLicense")[0].files[0];
        customerLicenseUpload = $("#update_form_customerDrivingLicense")[0].files[0].name;
    }



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
        method: 'put',
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