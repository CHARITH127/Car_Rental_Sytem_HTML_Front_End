function loadAllCarsToHomePAge() {
    $.ajax({
        url: "http://localhost:8080/CarRentalSystem_war_exploded/car?getAll",
        method: 'get',
        async: true,
        contentType: false,
        processData: false,
        success: function (resp) {
            $(".homePage_car_container").empty();
            var dynamic = document.querySelector('.homePage_car_container');
            for (const car of resp.data) {
                var fetch = document.querySelector('.homePage_car_container').innerHTML;
                dynamic.innerHTML = `<div class="homePage_card card" style=" margin-top: 1.4rem">
                        <div id="${car.number}" class="gustuser_carloading_image" style="height:11rem ; background-color: #0a58ca ; margin-top: 0.8rem">
                           
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                             fill="currentColor" class="bi bi-gear-fill"
                                                             viewBox="0 0 16 16">
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
                                                        <button type="button" class="btn_gustuser_home  btn btn-primary">
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
                    </div>` + fetch;


                $(".btn_gustuser_home").click(function () {
                    let carID = $(this).parent().parent().parent().parent().parent().parent().parent().parent().parent().find('.gustuser_carloading_image').attr('id');
                    alert(carID)
                });

                $(`#${car.number}`).css({
                    "background": `url('http://localhost:8080/CarRentalSystem_war_exploded/uploads/${car.imageDetails.frontImage}')`,
                    "background-size": "cover",
                    "height": "11rem"
                });

            }

        },
        error: function (err) {
            console.log(err);
        }
    });
}

loadAllCarsToHomePAge();

$("#filter_cars").click(function () {
    filterCars();
})

function filterCars() {

    var numof_passengers;
    var fiter_brand;
    var filter_type;
    var filter_traansmission_type;
    var filter_fuel_type;

    if ($("#fiter_noOfPassengers").val() == "Number of Passengers") {
        numof_passengers = null
    } else {
        numof_passengers = $("#fiter_noOfPassengers").val();
    }


    if ($("#filter_brand").val() == '') {
        fiter_brand = null;
    } else {
        fiter_brand = $("#filter_brand").val();
    }

    if ($("#filter_type").val() == '') {
        filter_type = null
    }else {
        filter_type = $("#filter_type").val()
    }

    if ($('input[name=filter_transimission_type]:checked').length > 0){
        filter_traansmission_type = $('input[name="filter_transimission_type"]:checked').val();
    }else {
        filter_traansmission_type = null;
    }

    if ($('input[name=filter_fuel_type]:checked').length > 0){
        filter_fuel_type = $('input[name="filter_fuel_type"]:checked').val();
    }else {
        filter_fuel_type = null;
    }

    console.log(" numof_passengers " + numof_passengers + " type " + filter_type + " brand "+ fiter_brand+ " transmition "+filter_traansmission_type+" fuel type "+filter_fuel_type )

    var data = new FormData();

    carDTO = {
        brand: fiter_brand,
        type:filter_type,
        numberOfPassengers: numof_passengers,
        transmissionType: filter_traansmission_type,
        fuelType:filter_fuel_type
    }

    data.append("sortCar", new Blob([JSON.stringify(carDTO)], {type: "application/json"}))

    $.ajax({
        url: "http://localhost:8080/CarRentalSystem_war_exploded/car?sortedCards",
        method: 'put',
        async: true,
        contentType: false,
        processData: false,
        data:data,
        success: function (resp) {
            $(".homePage_car_container").empty();
            var dynamic = document.querySelector('.homePage_car_container');
            for (const car of resp.data) {
                var fetch = document.querySelector('.homePage_car_container').innerHTML;
                dynamic.innerHTML = `<div class="homePage_card card" style=" margin-top: 1.4rem">
                        <div id="${car.number}" class="gustuser_carloading_image" style="height:11rem ; background-color: #0a58ca ; margin-top: 0.8rem">
                           
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                             fill="currentColor" class="bi bi-gear-fill"
                                                             viewBox="0 0 16 16">
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
                                                        <button type="button" class="btn_gustuser_home  btn btn-primary">
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
                    </div>` + fetch;


                $(".btn_gustuser_home").click(function () {
                    let carID = $(this).parent().parent().parent().parent().parent().parent().parent().parent().parent().find('.gustuser_carloading_image').attr('id');
                    alert(carID)
                });

                $(`#${car.number}`).css({
                    "background": `url('http://localhost:8080/CarRentalSystem_war_exploded/uploads/${car.imageDetails.frontImage}')`,
                    "background-size": "cover",
                    "height": "11rem"
                });

            }
        },
        error: function (err) {
            console.log(err);
        }
    });

}