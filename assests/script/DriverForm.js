$("#admin_driver_page").click(function () {
    loadAllDrivers();
})

$("#btnAdminUpdateDriver").click(function () {
    var driver_search_id = $("#adminDriveridsearch").val();

    $.ajax({
        url: "http://localhost:8080/CarRentalSystem_war_exploded/driver?id=" + driver_search_id,
        method: 'get',
        success: function (resp) {

            $("#update_form_DriverNIC").val(resp.data.driverNic)
            $("#update_form_DriverName").val(resp.data.driverName)
            $("#update_form_driverPassword").val(resp.data.driverPassword)
            $("#update_form_driverEmail").val(resp.data.email)
            $("#update_form_driverAddress").val(resp.data.driverAddress)
            $("#update_form_driverTel").val(resp.data.driverTel)


            let IdImage = "http://localhost:8080/CarRentalSystem_war_exploded/uploads/" + resp.data.driverIdCard;
            let LicemImage = "http://localhost:8080/CarRentalSystem_war_exploded/uploads/" + resp.data.drivingLicense;

            $("#driver_idImageLoader").css({
                "background": `url(${IdImage})`,
                "background-size": "cover",
                "height": "12rem"
            });
            $("#driver_licenseImageLoader").css({
                "background": `url(${LicemImage})`,
                "background-size": "cover",
                "height": "12rem"
            });

        },
        error: function (err) {
            console.log(err);
        }
    });
})

$("#btn_updateDriver").click(function () {
    var data = new FormData();
    let driver_nic = $("#update_form_DriverNIC").val();
    let driver_name = $("#update_form_DriverName").val();
    let driver_password = $("#update_form_driverPassword").val();
    let driver_email = $("#update_form_driverEmail").val();
    let driver_address = $("#update_form_driverAddress").val();
    let driver_tel = $("#update_form_driverTel").val();


    let id_image_name = "";
    let licen_image_name = "";
    let id_image = "";
    let licen_image = "";
    if (($("#update_form_driverIdCard").val() == '') && ($("#update_form_driverDrivingLicense").val() == '')) {
        alert("file chooser cant be empty please upload the Id and License images");
    } else {
        id_image = $("#update_form_driverIdCard")[0].files[0];
        licen_image = $("#update_form_driverDrivingLicense")[0].files[0];
        id_image_name = $("#update_form_driverIdCard")[0].files[0].name;
        licen_image_name = $("#update_form_driverDrivingLicense")[0].files[0].name;

    }


    driver = {
        driverNic: driver_nic,
        driverName: driver_name,
        driverPassword: driver_password,
        email: driver_email,
        driverAddress: driver_address,
        driverTel: driver_tel,
        driverIdCard: id_image_name,
        drivingLicense: licen_image_name,
    }

    data.append("files", id_image);
    data.append("files", licen_image);
    data.append("driver", new Blob([JSON.stringify(driver)], {type: "application/json"}))


    $.ajax({
        url: "http://localhost:8080/CarRentalSystem_war_exploded/driver",
        method: 'put',
        async: true,
        contentType: false,
        processData: false,
        data: data,
        success: function (resp) {
            alert(resp.message)
            loadAllDrivers();
        },
        error: function (err) {
            console.log(err);
        }
    });
})

$("#btn_addDriver").click(function () {
    var data = new FormData();
    var diver_nic = $("#add_form_DriverNic").val();
    var diver_name = $("#add_form_DriverName").val();
    var diver_password = $("#add_form_driverPassword").val();
    var diver_email = $("#add_form_driverEmail").val();
    var diver_driverAddress = $("#add_form_driverAddress").val();
    var diver_driverTel = $("#add_form_driverTel").val();

    var diver_driverIdCard_photo = $("#add_form_driverIdCard")[0].files[0];
    var diver_driverLicenCard_photo = $("#add_form_driverDrivingLicense")[0].files[0];
    var diver_driverIdCard_photoName = $("#add_form_driverIdCard")[0].files[0].name;
    var diver_driverLicenCard_photoName = $("#add_form_driverDrivingLicense")[0].files[0].name;

    driver = {
        driverNic: diver_nic,
        driverName: diver_name,
        driverPassword: diver_password,
        email: diver_email,
        driverAddress: diver_driverAddress,
        driverTel: diver_driverTel,
        driverIdCard: diver_driverIdCard_photoName,
        drivingLicense: diver_driverLicenCard_photoName
    }

    data.append("files", diver_driverIdCard_photo);
    data.append("files", diver_driverLicenCard_photo);
    data.append("driver", new Blob([JSON.stringify(driver)], {type: "application/json"}))


    $.ajax({
        url: "http://localhost:8080/CarRentalSystem_war_exploded/driver",
        method: 'post',
        async: true,
        contentType: false,
        processData: false,
        data: data,
        success: function (resp) {
            alert(resp.message)
            loadAllDrivers();
            clearAll();
        },
        error: function (err) {
            console.log(err);
        }
    });
})

$("#btnAdminSearchDriver").click(function () {
    var driver_search_id = $("#adminDriveridsearch").val();

    $.ajax({
        url: "http://localhost:8080/CarRentalSystem_war_exploded/driver?id=" + driver_search_id,
        method: 'get',
        success: function (resp) {

            $("#update_form_DriverNIC").val(resp.data.driverNic)
            $("#view_form_DriverName").val(resp.data.driverName)
            $("#view_form_driverPassword").val(resp.data.driverPassword)
            $("#view_form_driverEmail").val(resp.data.email)
            $("#view_form_driverAddress").val(resp.data.driverAddress)
            $("#view_form_driverTel").val(resp.data.driverTel)


            let IdImage = "http://localhost:8080/CarRentalSystem_war_exploded/uploads/" + resp.data.driverIdCard;
            let LicemImage = "http://localhost:8080/CarRentalSystem_war_exploded/uploads/" + resp.data.drivingLicense;

            $(".driverIdcardImage").css({
                "background": `url(${IdImage})`,
                "background-size": "cover",
                "height": "12rem"
            });
            $(".driverLiacenImage").css({
                "background": `url(${LicemImage})`,
                "background-size": "cover",
                "height": "12rem"
            });

        },
        error: function (err) {
            console.log(err);
        }
    });
})

function loadAllDrivers() {
    $(".driver_management_table_body").empty();
    $.ajax({
        url: "http://localhost:8080/CarRentalSystem_war_exploded/driver",
        method: "GET",
        success: function (resp) {
            for (const driver of resp.data) {
                let row = `<tr><td>${driver.driverNic}</td><td>${driver.driverName}</td><td>${driver.driverAddress}</td><td>${driver.driverPassword}</td><td>${driver.driverTel}</td><td>${driver.email}</td></tr>`;
                $(".driver_management_table_body").append(row);
            }

        }
    });
}

function clearAll() {
    $("#add_form_DriverNic").val("");
    $("#add_form_DriverName").val("");
    $("#add_form_driverPassword").val("");
    $("#add_form_driverEmail").val("");
    $("#add_form_driverAddress").val("");
    $("#add_form_driverTel").val("");
    $("#add_form_driverIdCard").val("");
    $("#add_form_driverDrivingLicense").val("");
}