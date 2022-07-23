/*---------save car-----------------*/
$("#btn_admin_addCar").click(function () {
    var data = new FormData();
    let car_number = $("#admin_addcar_carnumber").val();
    let car_brand = $("#admin_addcar_carnbrand").val();
    let car_color = $("#admin_addcar_carcolor").val();
    let car_type = $("#admin_addcar_cartype").val();
    let car_transmission_type = $("#admin_addcar_carTransmissionType").val();
    let car_fuel_type = $("#admin_addcar_carfuelType").val();
    let car_mileage = $("#admin_addcar_carmMileage").val();
    let car_num_passengers = $("#admin_addcar_carNumberofPassengers").val();
    let car_daily_rate = $("#admin_addcar_carDailyRate").val();
    let car_monthly_rate = $("#admin_addcar_carMonthlyRate").val();
    let car_damage_status = $('input[name="adminAddcardamage"]:checked').val();
    let car_maintain_status = $('input[name="adminAddcarMaintain"]:checked').val();
    let car_extraKm_price = $("#admin_addcar_carExtrakmPrice").val();
    let car_loss_payment = $("#admin_addcar_carLossPayment").val();
    let front_image = $("#admincaradd_frontImage")[0].files[0];
    let back_image = $("#admincaradd_backImage")[0].files[0];
    let side_image = $("#admincaradd_sideImage")[0].files[0];
    let interior_image = $("#admincaradd_interiorImage")[0].files[0];
    let front_image_name = $("#admincaradd_frontImage")[0].files[0].name;
    let back_image_name = $("#admincaradd_backImage")[0].files[0].name;
    let side_image_name = $("#admincaradd_sideImage")[0].files[0].name;
    let interior_image_name = $("#admincaradd_interiorImage")[0].files[0].name;


    car = {
        number: car_number,
        brand: car_brand,
        type: car_type,
        numberOfPassengers: car_num_passengers,
        transmissionType: car_transmission_type,
        fuelType: car_fuel_type,
        dailyRate: car_daily_rate,
        monthlyRate: car_monthly_rate,
        mileage: car_mileage,
        lossPayment: car_loss_payment,
        maintainStatus: car_maintain_status,
        damageStatus: car_damage_status,
        extraKilometerPrice: car_extraKm_price,
        color: car_color,
        imageDetails: {
            frontImage: front_image_name,
            backImage: back_image_name,
            sideImage: side_image_name,
            interiorImage: interior_image_name
        }
    }

    data.append("files", front_image);
    data.append("files", back_image);
    data.append("files", side_image);
    data.append("files", interior_image);
    data.append("car", new Blob([JSON.stringify(car)], {type: "application/json"}))


    $.ajax({
        url: "http://localhost:8080/CarRentalSystem_war_exploded/car",
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

$("#updateCar").click(function () {

    var car_number=$("#idsearch").val();

    $.ajax({
        url: "http://localhost:8080/CarRentalSystem_war_exploded/car?id="+car_number,
        method: 'get',
        success: function (resp) {

            $("#admin_updatecar_carnumber").val(resp.data.number)
            $("#admin_updatecar_carnbrand").val(resp.data.brand)
            $("#admin_updatecar_carcolor").val(resp.data.color)
            $("#admin_updatecar_cartype").val(resp.data.type)
            $("#admin_updatecar_carfuelType").val(resp.data.fuelType)
            $("#admin_updatecar_carTransmissionType").val(resp.data.transmissionType)
            $("#admin_updatecar_carmMileage").val(resp.data.mileage)
            $("#admin_updatecar_carNumberofPassengers").val(resp.data.numberOfPassengers)
            $("#admin_updatecar_carDailyRate").val(resp.data.dailyRate)
            $("#admin_updatecar_carMonthlyRate").val(resp.data.monthlyRate)
            $("#admin_updatecar_carExtrakmPrice").val(resp.data.extraKilometerPrice)
            $("#admin_updatecar_carLossPayment").val(resp.data.lossPayment)

            var damage_status = resp.data.damageStatus;
            if (damage_status=="Yes"){
                $("#admin_carUpdate_damageStatus_Yes").prop("checked", true);
            }else {
                $("#admin_carUpdate_damageStatus_No").prop("checked", true);
            }

            var maintain_status = resp.data.maintainStatus;
            if (maintain_status=="Yes"){
                $("#admin_carUpdate_maintanStatus_Yes").prop("checked", true);
            }else {
                $("#admin_carUpdate_maintanStatus_No").prop("checked", true);
            }

            let frontImage = "http://localhost:8080/CarRentalSystem_war_exploded/uploads/"+resp.data.imageDetails.frontImage;
            let backImage = "http://localhost:8080/CarRentalSystem_war_exploded/uploads/"+resp.data.imageDetails.backImage;
            let sideImage = "http://localhost:8080/CarRentalSystem_war_exploded/uploads/"+resp.data.imageDetails.sideImage;
            let interiorImage = "http://localhost:8080/CarRentalSystem_war_exploded/uploads/"+resp.data.imageDetails.interiorImage;

            $("#update_car_frontImage").css({
                "background": `url(${frontImage})`,
                "background-size": "cover",
                "height": "12rem"
            });
            $("#update_car_backImage").css({
                "background": `url(${backImage})`,
                "background-size": "cover",
                "height": "12rem"
            });
            $("#update_car_sideImage").css({
                "background": `url(${sideImage})`,
                "background-size": "cover",
                "height": "12rem"
            });
            $("#update_car_interiorImage").css({
                "background": `url(${interiorImage})`,
                "background-size": "cover",
                "height": "12rem"
            });


        },
        error: function (err) {
            console.log(err);
        }
    });
})

$("#btn_admin_updateCar").click(function () {
    var data = new FormData();
    let car_number = $("#admin_updatecar_carnumber").val();
    let car_brand = $("#admin_updatecar_carnbrand").val();
    let car_color = $("#admin_updatecar_carcolor").val();
    let car_type = $("#admin_updatecar_cartype").val();
    let car_transmission_type = $("#admin_updatecar_carTransmissionType").val();
    let car_fuel_type = $("#admin_updatecar_carfuelType").val();
    let car_mileage = $("#admin_updatecar_carmMileage").val();
    let car_num_passengers = $("#admin_updatecar_carNumberofPassengers").val();
    let car_daily_rate = $("#admin_updatecar_carDailyRate").val();
    let car_monthly_rate = $("#admin_updatecar_carMonthlyRate").val();
    let car_damage_status = $('input[name="admincardamage"]:checked').val();
    let car_maintain_status = $('input[name="admincarMaintain"]:checked').val();
    let car_extraKm_price = $("#admin_updatecar_carExtrakmPrice").val();
    let car_loss_payment = $("#admin_updatecar_carLossPayment").val();


    let front_image_name = "";
    let back_image_name ="";
    let side_image_name = "";
    let interior_image_name ="";
    let front_image = "";
    let back_image = "";
    let side_image ="";
    let interior_image = "";
    if (($("#admincarupdate_frontImage").val()=='') && ($("#admincarupdate_backImage").val()=='') && ($("#admincarupdate_sideImage").val()=='') && ($("#admincarupdate_interiorImage").val()=='')) {
        alert("file chooser cant be empty please upload the car images");
    }else {
        front_image = $("#admincarupdate_frontImage")[0].files[0];
        back_image = $("#admincarupdate_backImage")[0].files[0];
        side_image = $("#admincarupdate_sideImage")[0].files[0];
        interior_image = $("#admincarupdate_interiorImage")[0].files[0];
        front_image_name = $("#admincarupdate_frontImage")[0].files[0].name;
        back_image_name = $("#admincarupdate_backImage")[0].files[0].name;
        side_image_name = $("#admincarupdate_sideImage")[0].files[0].name;
        interior_image_name = $("#admincarupdate_interiorImage")[0].files[0].name;

    }


    car = {
        number: car_number,
        brand: car_brand,
        type: car_type,
        numberOfPassengers: car_num_passengers,
        transmissionType: car_transmission_type,
        fuelType: car_fuel_type,
        dailyRate: car_daily_rate,
        monthlyRate: car_monthly_rate,
        mileage: car_mileage,
        lossPayment: car_loss_payment,
        maintainStatus: car_maintain_status,
        damageStatus: car_damage_status,
        extraKilometerPrice: car_extraKm_price,
        color: car_color,
        imageDetails: {
            frontImage: front_image_name,
            backImage: back_image_name,
            sideImage: side_image_name,
            interiorImage: interior_image_name
        }
    }

    data.append("files", front_image);
    data.append("files", back_image);
    data.append("files", side_image);
    data.append("files", interior_image);
    data.append("car", new Blob([JSON.stringify(car)], {type: "application/json"}))


    $.ajax({
        url: "http://localhost:8080/CarRentalSystem_war_exploded/car",
        method: 'put',
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
})


/*load all when page loading*/
$("#admin_car_page").click(function () {
    $(".carManagementStatus span").text("All cars")
    $(".car_management_table_body").empty();
    loadAllCars();
    $("#btnCarManageSetAvailableFromMaintain").hide();
    $("#btnCarManageSetAvailableFromDamage").hide();

})

/*getAll cars*/
$("#btnCarManageGetAll").click(function () {

    $(".carManagementStatus span").text("All cars")

    loadAllCars();

    $("#btnCarManageSetAvailableFromMaintain").hide()
    $("#btnCarManageSetAvailableFromDamage").hide()

})

/*load maintain car loadingg*/
$("#btnCarManageMaintainginCar").click(function () {

    $(".carManagementStatus span").text("Should to maintain")

    loadCartoMaintain();

    $("#btnCarManageSetAvailableFromMaintain").show()
    $("#btnCarManageSetAvailableFromDamage").hide()

})

/*load damage car*/
$("#btnCarManageDamageCar").click(function () {

    $(".carManagementStatus span").text("Damage cars")
    loadDamageCars()
    $("#btnCarManageSetAvailableFromMaintain").hide()
    $("#btnCarManageSetAvailableFromDamage").show()

})

/*set available when maintan cars*/
$("#btnCarManageSetAvailableFromMaintain").click(function () {
    var car_search_number=$("#idsearch").val();

    var car_number="";
    var car_brand="";
    var car_type="";
    var car_numPassengers="";
    var car_transmissionType="";
    var car_fuelType="";
    var car_dailyRate="";
    var car_monthlyRate="";
    var car_mileage="";
    var car_lospayment="";
    var car_maintainStattus="";
    var car_damageStatus="";
    var car_extrakmPrice="";
    var car_color="";
    var car_fronImage="";
    var car_backImage="";
    var car_sideImage="";
    var car_interiorImage="";

    $.ajax({
        url: "http://localhost:8080/CarRentalSystem_war_exploded/car?id="+car_search_number,
        method: 'get',
        success: function (resp) {
            car_number = resp.data.number;
            console.log(car_number)
            car_brand = resp.data.brand;
            car_type = resp.data.type;
            car_numPassengers = resp.data.numberOfPassengers;
            car_transmissionType = resp.data.transmissionType;
            car_fuelType = resp.data.fuelType;
            car_dailyRate = resp.data.dailyRate;
            car_monthlyRate = resp.data.monthlyRate;
            car_mileage = resp.data.mileage;
            car_lospayment = resp.data.lossPayment;
            car_maintainStattus = "No";
            car_damageStatus = resp.data.damageStatus;
            car_extrakmPrice = resp.data.extraKilometerPrice;
            car_color = resp.data.color;
            car_fronImage = resp.data.imageDetails.frontImage;
            car_backImage = resp.data.imageDetails.backImage;
            car_sideImage = resp.data.imageDetails.sideImage;
            car_interiorImage = resp.data.imageDetails.interiorImage;

            car = {
                number: car_number,
                brand: car_brand,
                type: car_type,
                numberOfPassengers: car_numPassengers,
                transmissionType: car_transmissionType,
                fuelType: car_fuelType,
                dailyRate: car_dailyRate,
                monthlyRate: car_monthlyRate,
                mileage: car_mileage,
                lossPayment: car_lospayment,
                maintainStatus: car_maintainStattus,
                damageStatus: car_damageStatus,
                extraKilometerPrice: car_extrakmPrice,
                color: car_color,
                imageDetails: {
                    frontImage: car_fronImage,
                    backImage: car_backImage,
                    sideImage: car_sideImage,
                    interiorImage: car_interiorImage
                }
            }


            $.ajax({
                url: "http://localhost:8080/CarRentalSystem_war_exploded/car?setAvailable",
                method: 'put',
                contentType: "application/json",
                data: JSON.stringify(car),
                success: function (resp) {
                    loadCartoMaintain();
                },
                error: function (err) {
                    console.log(err);
                }
            });

        },
        error: function (err) {
            console.log(err);
        }
    });

})


/*set available when damage cars*/
$("#btnCarManageSetAvailableFromDamage").click(function () {
    var car_search_number=$("#idsearch").val();

    var car_number="";
    var car_brand="";
    var car_type="";
    var car_numPassengers="";
    var car_transmissionType="";
    var car_fuelType="";
    var car_dailyRate="";
    var car_monthlyRate="";
    var car_mileage="";
    var car_lospayment="";
    var car_maintainStattus="";
    var car_damageStatus="";
    var car_extrakmPrice="";
    var car_color="";
    var car_fronImage="";
    var car_backImage="";
    var car_sideImage="";
    var car_interiorImage="";

    $.ajax({
        url: "http://localhost:8080/CarRentalSystem_war_exploded/car?id="+car_search_number,
        method: 'get',
        success: function (resp) {
            car_number = resp.data.number;
            console.log(car_number)
            car_brand = resp.data.brand;
            car_type = resp.data.type;
            car_numPassengers = resp.data.numberOfPassengers;
            car_transmissionType = resp.data.transmissionType;
            car_fuelType = resp.data.fuelType;
            car_dailyRate = resp.data.dailyRate;
            car_monthlyRate = resp.data.monthlyRate;
            car_mileage = resp.data.mileage;
            car_lospayment = resp.data.lossPayment;
            car_maintainStattus = resp.data.maintainStatus;
            car_damageStatus = "No";
            car_extrakmPrice = resp.data.extraKilometerPrice;
            car_color = resp.data.color;
            car_fronImage = resp.data.imageDetails.frontImage;
            car_backImage = resp.data.imageDetails.backImage;
            car_sideImage = resp.data.imageDetails.sideImage;
            car_interiorImage = resp.data.imageDetails.interiorImage;

            car = {
                number: car_number,
                brand: car_brand,
                type: car_type,
                numberOfPassengers: car_numPassengers,
                transmissionType: car_transmissionType,
                fuelType: car_fuelType,
                dailyRate: car_dailyRate,
                monthlyRate: car_monthlyRate,
                mileage: car_mileage,
                lossPayment: car_lospayment,
                maintainStatus: car_maintainStattus,
                damageStatus: car_damageStatus,
                extraKilometerPrice: car_extrakmPrice,
                color: car_color,
                imageDetails: {
                    frontImage: car_fronImage,
                    backImage: car_backImage,
                    sideImage: car_sideImage,
                    interiorImage: car_interiorImage
                }
            }


            $.ajax({
                url: "http://localhost:8080/CarRentalSystem_war_exploded/car?setAvailable",
                method: 'put',
                contentType: "application/json",
                data: JSON.stringify(car),
                success: function (resp) {
                    loadDamageCars();
                },
                error: function (err) {
                    console.log(err);
                }
            });

        },
        error: function (err) {
            console.log(err);
        }
    });

})

function loadDamageCars() {
    $(".car_management_table_body").empty();
    $.ajax({
        url: "http://localhost:8080/CarRentalSystem_war_exploded/car?damageCars",
        method: "GET",
        success: function (resp) {
            for (const car of resp.data){
                let row = `<tr><td>${car.number}</td><td>${car.brand}</td><td>${car.mileage}</td><td>${car.damageStatus}</td><td>${car.maintainStatus}</td><td>${car.lossPayment}</td><td>${car.dailyRate}</td><td>${car.monthlyRate}</td><td>${car.extraKilometerPrice}</td></tr>`;
                $(".car_management_table_body").append(row);
            }
        }
    });
}

function loadAllCars() {
    $(".car_management_table_body").empty();
    $.ajax({
        url: "http://localhost:8080/CarRentalSystem_war_exploded/car?getAll",
        method: "GET",
        success: function (resp) {
            for (const car of resp.data){
                let row = `<tr><td>${car.number}</td><td>${car.brand}</td><td>${car.mileage}</td><td>${car.damageStatus}</td><td>${car.maintainStatus}</td><td>${car.lossPayment}</td><td>${car.dailyRate}</td><td>${car.monthlyRate}</td><td>${car.extraKilometerPrice}</td></tr>`;
                $(".car_management_table_body").append(row);
            }

        }
    });
}

function loadCartoMaintain() {
    $(".car_management_table_body").empty();
    $.ajax({
        url: "http://localhost:8080/CarRentalSystem_war_exploded/car?needToMaintain",
        method: "GET",
        success: function (resp) {
            for (const car of resp.data){
                let row = `<tr><td>${car.number}</td><td>${car.brand}</td><td>${car.mileage}</td><td>${car.damageStatus}</td><td>${car.maintainStatus}</td><td>${car.lossPayment}</td><td>${car.dailyRate}</td><td>${car.monthlyRate}</td><td>${car.extraKilometerPrice}</td></tr>`;
                $(".car_management_table_body").append(row);
            }

        }
    });
}

function clearAll() {
    $("#admin_addcar_carnumber").val("");
    $("#admin_addcar_carnbrand").val("");
    $("#admin_addcar_carcolor").val("");
    $("#admin_addcar_cartype").val("");
    $("#admin_addcar_carTransmissionType").val("");
    $("#admin_addcar_carfuelType").val("");
    $("#admin_addcar_carmMileage").val("");
    $("#admin_addcar_carNumberofPassengers").val("");
    $("#admin_addcar_carDailyRate").val("");
    $("#admin_addcar_carMonthlyRate").val("");
    $("#admin_addcar_carDamageStstus").val("");
    $("#admin_addcar_carMaintainStatus").val("");
    $("#admin_addcar_carExtrakmPrice").val("");
    $("#admin_addcar_carLossPayment").val("");
    $("#admincaradd_frontImage").val("");
    $("#admincaradd_backImage").val("");
    $("#admincaradd_sideImage").val("");
}