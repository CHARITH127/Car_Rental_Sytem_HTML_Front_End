/*--------save customer----------*/
$("#btncustomerRegister").click(function () {
    var data = new FormData();
    let customer_nic = $("#customer_nic").val();
    let customer_name = $("#customerName").val();
    let customer_address = $("#customer_address").val();
    let customer_password = $("#customerPassword").val();
    let customer_telnumber = $("#customer_telnumber").val();
    let customer_email = $("#customer_email").val();
    let idPhoto = $("#customerIdcardPhoto")[0].files[0];
    let customerIdcardUpload = $("#customerIdcardPhoto")[0].files[0].name;
    let licenPhoto = $("#customerlicenPhoto")[0].files[0];
    let customerLicenseUpload = $("#customerlicenPhoto")[0].files[0].name;


    customer = {
        customerNic: customer_nic,
        customerName: customer_name,
        customerPassword: customer_password,
        email: customer_email,
        customerAddress: customer_address,
        customerTel: customer_telnumber,
        idCard: customerIdcardUpload,
        drivingLicense: customerLicenseUpload
    }

    data.append("files", idPhoto);
    data.append("files", licenPhoto);
    data.append("customer", new Blob([JSON.stringify(customer)], {type: "application/json"}))


    $.ajax({
        url: "http://localhost:8080/CarRentalSystem_war_exploded/customer",
        method: 'post',
        async: true,
        contentType: false,
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

var custoemerIdPhotoName = "";
var custoemerLicensePhotoName = "";
$("#btn_cust_pro_edit").click(function () {

    var custId = $("#cust_pro_customer_nic").val();

    $.ajax({
        url: "http://localhost:8080/CarRentalSystem_war_exploded/customer?id=" + custId,
        method: 'get',
        async: true,
        contentType: false,
        processData: false,
        success: function (resp) {
            $("#update_form_customerNIC").val(resp.data.customerNic);
            $("#update_form_customerName").val(resp.data.customerName);
            $("#update_form_customerAddress").val(resp.data.customerAddress);
            $("#update_form_customerPassword").val(resp.data.customerPassword);
            $("#update_form_customerTel").val(resp.data.customerTel);
            $("#update_form_customerEmail").val(resp.data.email);
            custoemerIdPhotoName = resp.data.idCard;
            custoemerLicensePhotoName = resp.data.drivingLicense;
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


    let customerIdcardUpload = "";
    let customerLicenseUpload = "";
    let idPhoto = "";
    let licenPhoto = "";
    if (($("#update_form_customerIdCard").val() == '') && ($("#update_form_customerDrivingLicense").val() == '')) {
        alert("file chooser cant be empty please upload id card and driving license");
    } else {
        idPhoto = $("#update_form_customerIdCard")[0].files[0];
        customerIdcardUpload = $("#update_form_customerIdCard")[0].files[0].name;
        licenPhoto = $("#update_form_customerDrivingLicense")[0].files[0];
        customerLicenseUpload = $("#update_form_customerDrivingLicense")[0].files[0].name;
    }


    customer = {
        customerNic: customer_nic,
        customerName: customer_name,
        customerPassword: customer_password,
        email: customer_email,
        customerAddress: customer_address,
        customerTel: customer_telnumber,
        idCard: customerIdcardUpload,
        drivingLicense: customerLicenseUpload
    }

    data.append("files", idPhoto);
    data.append("files", licenPhoto);
    data.append("customer", new Blob([JSON.stringify(customer)], {type: "application/json"}))


    $.ajax({
        url: "http://localhost:8080/CarRentalSystem_war_exploded/customer",
        method: 'put',
        async: true,
        contentType: false,
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

$("#custProfSearch").click(function () {

    var pick_up_date = $("#custform_check_in_date").val();
    var return_date = $("#custform_return_date").val();

    $.ajax({
        url: "http://localhost:8080/CarRentalSystem_war_exploded/car?pick_up_date=" + pick_up_date + "&return_date=" + return_date,
        method: 'get',
        async: true,
        contentType: false,
        processData: false,
        success: function (resp) {
            $(".car_container").empty();
            var dynamic = document.querySelector('.car_container');
            for (const car of resp.data) {
                console.log(car.number)
                var fetch = document.querySelector('.car_container').innerHTML;
                dynamic.innerHTML = ` <div class="Cardbox">
                                    <div class="customerFormCard card" style=" margin-top: 1.4rem">
                                        <div id="card${car.number}" class="customerPage_image_container">
                                            
                                        </div>
                                        <div class="cord_content card-body">
                                            <div class="row" style="margin: 0;padding: 0">
                                                <div class="col" style="padding-right: 0">
                                                    <div class="row">
                                                        <div class="col" style="padding-right: 0">
                                                            <div class="row"
                                                                 style="width: 100%;height:fit-content;margin-bottom: .4rem">
                                                                <p class="car_type">${car.type}</p>
                                                                <p class="car_brand">${car.brand}</p>
                                                                <p style="display: none" class="car_type">CK-2345</p>
                                                                <div class="details_cover">
                                                                    <p class="car_fuel">
                                                                        <svg xmlns="http://www.w3.org/2000/svg"
                                                                             width="16" height="16" fill="currentColor"
                                                                             class="bi bi-fuel-pump-fill"
                                                                             viewBox="0 0 16 16">
                                                                            <path d="M1 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v8a2 2 0 0 1 2 2v.5a.5.5 0 0 0 1 0V8h-.5a.5.5 0 0 1-.5-.5V4.375a.5.5 0 0 1 .5-.5h1.495c-.011-.476-.053-.894-.201-1.222a.97.97 0 0 0-.394-.458c-.184-.11-.464-.195-.9-.195a.5.5 0 0 1 0-1c.564 0 1.034.11 1.412.336.383.228.634.551.794.907.295.655.294 1.465.294 2.081V7.5a.5.5 0 0 1-.5.5H15v4.5a1.5 1.5 0 0 1-3 0V12a1 1 0 0 0-1-1v4h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V2Zm2.5 0a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5h-5Z"/>
                                                                        </svg>
                                                                        ${car.fuelType}
                                                                    </p>
                                                                    <p class="car_transmission">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                                             height="16" fill="currentColor"
                                                                             class="bi bi-gear-fill" viewBox="0 0 16 16">
                                                                            <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
                                                                        </svg>
                                                                        ${car.transmissionType}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col" style="padding-right: 0">
                                                            <div class="row"
                                                                 style="width: 100%;height: fit-content;margin-bottom: .4rem">
                                                                <div class="col" style="padding: 0">
                                                                    <div class="daily_price">Rs : <p class="price">
                                                                        ${car.dailyRate}/=</p></div>
                                                                </div>
                                                                <div class="col">
                                                                    <div class="btnreservation_container">
                                                                        <button type="button" class="reserve btn btn-primary"
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#reservationModel">
                                                                            Reserve
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>` + fetch;


                $(".reserve").click(function () {
                    let carID = $(this).parent().parent().parent().parent().parent().parent().parent().parent().parent().find('.customerPage_image_container').attr('id');
                    console.log(carID);
                    loadCarDetailsToTheReservationModel(carID);
                });


                $(`#card${car.number}`).css({
                    "background":`url('http://localhost:8080/CarRentalSystem_war_exploded/uploads/${car.imageDetails.frontImage}')`,
                    "background-size": "cover",
                    "height": "10rem"
                });

            }

        },
        error: function (err) {
            console.log(err);
        }
    });

})


function loadAllReservations() {

    let cId = $("#cust_pro_customer_nic").val()

    $.ajax({
        url: "http://localhost:8080/CarRentalSystem_war_exploded/reservation?cId=" + cId,
        method: 'get',
        async: true,
        contentType: false,
        processData: false,
        success: function (resp) {
            $(".custPro_riservation_container").empty();
            var dynamic = document.querySelector('.custPro_riservation_container');
            for (const resv of resp.data) {
                var fetch = document.querySelector('.custPro_riservation_container').innerHTML;
                dynamic.innerHTML = `<div class="row" style="padding: 0.8rem">
                                    <div class="card" style=" margin-top: 1.4rem">
                                        <div class="cord_content card-body">
                                            <div class="row" style="margin: 0;padding: 0">
                                                <div class="col" style="padding-right: 0">
                                                    <div class="row">
                                                        <div class="col" style="padding-right: 0">
                                                            <div class="row"
                                                                 style="width: 100%;height:fit-content;margin-bottom: .4rem">
                                                                <span>Reservation Id</span>
                                                                <p class="reservation_Id">${resv.reservation_id}</p>
                                                                <span>Pickup date</span>
                                                                <p class="reservation_pickup">${resv.pick_up_date}</p>
                                                                <span>Return date</span>
                                                                <p class="reservation_return">${resv.return_date}</p>
                                                                <div class="revertaion_details_cover">
                                                                    <span>Reservation status</span>
                                                                    <p class="reservation_status">
                                                                        ${resv.reservation_status}</p>
                                                                </div>
                                                                <div class="revertaion_details_cover">
                                                                    <span>Driver status</span>
                                                                    <p class="reservation_status">
                                                                        ${resv.driverStatus}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col" style="padding-right: 0">
                                                            <div class="row"
                                                                 style="width: 100%;height: fit-content;margin-bottom: .4rem">
                                                                <div class="col">
                                                                    <div class="btnreservation_container">
                                                                        <button type="button" class="btncustPro_res_view btn btn-primary"
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#viewReserVationModel">
                                                                            View
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>` + fetch;


                $(".btncustPro_res_view").click(function () {
                    let resId = $(this).parent().parent().parent().parent().parent().parent().find('.reservation_Id').text();
                    losdSlldetsildToViewReservationForm(resId);
                    console.log(resId);
                });


            }

        },
        error: function (err) {
            console.log(err);
        }
    });
}

/*put a reservaion*/
$("#btn_Reserve").click(function () {
    setAReservation();
})


function loadCarDetailsToTheReservationModel(carID) {
    $.ajax({
        url: "http://localhost:8080/CarRentalSystem_war_exploded/car?id=" + carID,
        method: 'get',
        success: function (resp) {

            $("#res_form_carNumber").val(resp.data.number)
            $("#res_form_carBarnd").val(resp.data.brand)
            $("#res_form_carColor").val(resp.data.color)
            $("#res_form_carVehicleType").val(resp.data.type)
            $("#res_form_carFuelType").val(resp.data.fuelType)
            $("#res_form_carTransmitionType").val(resp.data.transmissionType)
            $("#admin_updatecar_carmMileage").val(resp.data.mileage)
            $("#res_form_carPassengersCount").val(resp.data.numberOfPassengers)
            $("#res_form_carDailyRate").val(resp.data.dailyRate)
            $("#res_form_carMonthlyRate").val(resp.data.monthlyRate)
            $("#res_form_carExtraKmCharg").val(resp.data.extraKilometerPrice)
            $("#res_form_carLossPayment").val(resp.data.lossPayment)


            let frontImage = "http://localhost:8080/CarRentalSystem_war_exploded/uploads/" + resp.data.imageDetails.frontImage;
            let backImage = "http://localhost:8080/CarRentalSystem_war_exploded/uploads/" + resp.data.imageDetails.backImage;
            let sideImage = "http://localhost:8080/CarRentalSystem_war_exploded/uploads/" + resp.data.imageDetails.sideImage;
            let interiorImage = "http://localhost:8080/CarRentalSystem_war_exploded/uploads/" + resp.data.imageDetails.interiorImage;

            $("#resevation_frontImage").css({
                "background": `url(${frontImage})`,
                "background-size": "cover",
                "height": "12rem"
            });
            $("#resevation_BackImage").css({
                "background": `url(${backImage})`,
                "background-size": "cover",
                "height": "12rem"
            });
            $("#resevation_sideImage").css({
                "background": `url(${sideImage})`,
                "background-size": "cover",
                "height": "12rem"
            });
            $("#resevation_interiorImage").css({
                "background": `url(${interiorImage})`,
                "background-size": "cover",
                "height": "12rem"
            });

            /*set today date*/
            var now = new Date();

            var day = ("0" + now.getDate()).slice(-2);
            var month = ("0" + (now.getMonth() + 1)).slice(-2);

            var today = now.getFullYear() + "-" + (month) + "-" + (day);

            $('#resform_today_date').val(today);


            /*set pickup and reserve dates */
            var pick_up_date = $("#custform_check_in_date").val();
            var return_date = $("#custform_return_date").val();

            $("#resform_check_in_date").val(pick_up_date)
            $("#resform_return_date").val(return_date)

            genarateReservationId();


        },
        error: function (err) {
            console.log(err);
        }
    });
}

function losdSlldetsildToViewReservationForm(resId) {

    $.ajax({
        url: "http://localhost:8080/CarRentalSystem_war_exploded/reservation?id=" + resId,
        method: 'get',
        async: true,
        contentType: false,
        processData: false,
        success: function (resp) {
            if (resp.data.driverStatus == "Yes") {
                loadReservationdetailsWithDrive(resId, resp.data.car.number, resp.data.reserve_date, resp.data.pick_up_and_return_venue)
            } else {
                loadReservationDetailsWithoutDriver(resId);
            }
        },
        error: function (err) {
            console.log(err);
        }
    });
}

function loadReservationdetailsWithDrive(resId, carNumber, reserve_date, pick_up_and_return_venue) {
    $.ajax({
        url: "http://localhost:8080/CarRentalSystem_war_exploded/driver?resId=" + resId,
        method: 'get',
        async: true,
        contentType: false,
        processData: false,
        success: function (resp) {
            $("#res_view_form_carNumber").val(carNumber);
            $("#res_viewform_today_date").val(reserve_date);
            $("#res_view_form_resID").val(resId);
            $("#res_view_form_pickupandReturnLocation").val(pick_up_and_return_venue);
            $("#res_viewform_Driver_Status").val("Yes");
            $("#res_viewform_check_in_date").val(resp.data.pick_up_date);
            $("#res_viewform_check_in_time").val(resp.data.pick_up_time);
            $("#res_viewform_return_date").val(resp.data.return_date);
            $("#res_viewform_Driver_Nic").val(resp.data.driver.driverNic);
        },
        error: function (err) {
            console.log(err);
        }
    });
}

function loadReservationDetailsWithoutDriver(resId) {
    $.ajax({
        url: "http://localhost:8080/CarRentalSystem_war_exploded/reservation?id=" + resId,
        method: 'get',
        async: true,
        contentType: false,
        processData: false,
        success: function (resp) {
            $("#res_view_form_carNumber").val(resp.data.car.number);
            $("#res_viewform_today_date").val(resp.data.reserve_date);
            $("#res_view_form_resID").val(resp.data.reservation_id);
            $("#res_view_form_pickupandReturnLocation").val(resp.data.pick_up_and_return_venue);
            $("#res_viewform_Driver_Status").val("No");
            $("#res_viewform_check_in_date").val(resp.data.pick_up_date);
            $("#res_viewform_check_in_time").val(resp.data.pick_up_time);
            $("#res_viewform_return_date").val(resp.data.return_date);
            $("#res_viewform_Driver_Nic").val("---");
        },
        error: function (err) {
            console.log(err);
        }
    });
}

function genarateReservationId() {
    $.ajax({
        url: "http://localhost:8080/CarRentalSystem_war_exploded/reservation?resID",
        method: 'get',
        success: function (resp) {
            $("#res_form_resID").val(resp.message);
        },
        error: function (err) {
            console.log(err);
        }
    });

}

function setAReservation() {

    var data = new FormData();
    let res_id = $("#res_form_resID").val();
    let res_cust_nic = $("#cust_pro_customer_nic").val();
    let res_car_number = $("#res_form_carNumber").val();
    let res_reserve_date = $("#resform_today_date").val();
    let res_pickUp_time = $("#resform_check_in_time").val();
    let res_pickUp_date = $("#resform_check_in_date").val();
    let res_return_date = $("#resform_return_date").val();
    let res_pickup_venue = $("#resform_return_date").val();
    let res_driver_status = $('input[name="reservation_driverSelection"]:checked').val();

    let bankSlipPhoto = "";
    let bankSlipPhotoname = "";
    if ($("#res_form_resBankSlipUploader").val() == '') {
        alert("file chooser cant be empty please upload the bank slip");
    } else {
        bankSlipPhoto = $("#res_form_resBankSlipUploader")[0].files[0];
        bankSlipPhotoname = $("#res_form_resBankSlipUploader")[0].files[0].name;
    }


    var reservationDTO = {
        reservation_id: res_id,
        customer: {
            customerNic: res_cust_nic
        },
        car: {
            number: res_car_number
        },
        reserve_date: res_reserve_date,
        pick_up_time: res_pickUp_time,
        pick_up_date: res_pickUp_date,
        return_date: res_return_date,
        driverStatus: res_driver_status,
        pick_up_and_return_venue: res_pickup_venue,
        reservation_status: "pending",
        bankSlip: bankSlipPhotoname,
    }

    data.append("files", bankSlipPhoto);
    data.append("reservationWithOutDriver", new Blob([JSON.stringify(reservationDTO)], {type: "application/json"}))


    $.ajax({
        url: "http://localhost:8080/CarRentalSystem_war_exploded/reservation",
        method: 'post',
        async: true,
        contentType: false,
        processData: false,
        data: data,
        success: function (resp) {
            alert(resp.message)
        },
        error: function (err) {
            console.log(err);
        }
    });


}

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