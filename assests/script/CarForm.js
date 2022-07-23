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

/*$("#btn_admin_updateCar").click(function () {
    var data = new FormData();
    let car_number = $("#admin_updatecar_carnumber").val();
    let car_brand = $("#admin_updatecar_carnbrand").val();
    let car_color = $("#admin_updatecar_carcolor").val();
    let car_type = $("#admin_updatecar_cartype").val();
    let car_transmission_type = $("#admin_updatecar_carTransmissionType").val();
    let car_fuel_type = $("#admin_updatecar_carfuelType").val();
    let car_mileage = $("#admin_updatecar_carTransmissionType").val();
    let car_num_passengers = $("#admin_updatecar_carTransmissionType").val();
    let car_daily_rate = $("#admin_updatecar_carTransmissionType").val();
    let car_monthly_rate = $("#admin_updatecar_carTransmissionType").val();
    let car_damage_status = $("#admin_updatecar_carTransmissionType").val();
    let car_maintain_status = $("#admin_updatecar_carTransmissionType").val();
    let car_extraKm_price = $("#admin_updatecar_carTransmissionType").val();
    let car_loss_payment = $("#admin_updatecar_carTransmissionType").val();
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
})*/


/*load all when page loading*/
$("#admin_car_page").click(function () {
    $(".carManagementStatus span").text("All cars")
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
    $("#btnCarManageSetAvailableFromMaintain").hide();
    $("#btnCarManageSetAvailableFromDamage").hide();

})

/*getAll cars*/
$("#btnCarManageGetAll").click(function () {

    $(".carManagementStatus span").text("All cars")

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
    $("#btnCarManageSetAvailableFromMaintain").hide()
    $("#btnCarManageSetAvailableFromDamage").hide()

})

/*load maintain car loadingg*/
$("#btnCarManageMaintainginCar").click(function () {

    $(".carManagementStatus span").text("Should to maintain")

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
    $("#btnCarManageSetAvailableFromMaintain").show()
    $("#btnCarManageSetAvailableFromDamage").hide()

})

/*load damage car*/
$("#btnCarManageDamageCar").click(function () {

    $(".carManagementStatus span").text("Damage cars")

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
    $("#btnCarManageSetAvailableFromMaintain").hide()
    $("#btnCarManageSetAvailableFromDamage").show()

})

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