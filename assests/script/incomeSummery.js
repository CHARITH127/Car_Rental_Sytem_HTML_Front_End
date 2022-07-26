$("#admin_home_page").click(function () {
    getWeaklyIncome()
    setTodayIncome()
    setMonthlyIncome()
    setYearlyIncome()
    setOccupiedDrivers()
    setAvailableDrivers()
    setAvailableCars()
    setOccupiedCars()
})

function getWeaklyIncome() {
    $.ajax({
        url: "http://localhost:8080/CarRentalSystem_war_exploded/bill?weeklyIncome",
        method: "get",
        success: function (res) {
            $(".weekly_income").text(res.data)
        }
    });
}

function setTodayIncome() {

    /*set today date*/
    var now = new Date();

    var day = ("0" + now.getDate()).slice(-2);
    var month = ("0" + (now.getMonth() + 1)).slice(-2);

    var today = now.getFullYear() + "-" + (month) + "-" + (day);

    $.ajax({
        url: "http://localhost:8080/CarRentalSystem_war_exploded/bill?date="+today,
        method: "get",
        success: function (res) {
            $(".daily_income").text(res.data)
        }
    });

}

function setMonthlyIncome() {
    $.ajax({
        url: "http://localhost:8080/CarRentalSystem_war_exploded/bill?monthlyIncome",
        method: "get",
        success: function (res) {
            $(".monthly_income").text(res.data)
        }
    });
}

function setYearlyIncome() {
    $.ajax({
        url: "http://localhost:8080/CarRentalSystem_war_exploded/bill?yearlyIncome",
        method: "get",
        success: function (res) {
            $(".annualy_income").text(res.data)
        }
    });
}

function setOccupiedDrivers() {
    $.ajax({
        url: "http://localhost:8080/CarRentalSystem_war_exploded/driver?occupiedDrivers",
        method: "get",
        success: function (res) {
            console.log(res.data)
            $(".occupied_driver_count").text(res.data);

        }
    });
}

function setAvailableDrivers() {

   /* $.ajax({
        url: "http://localhost:8080/CarRentalSystem_war_exploded/driver",
        method: "get",
        success: function (res) {
            for (const driver of resp.data) {

            }
        }
    });*/
    $(".available_driver_count_driver_count").text("6");
}

function setAvailableCars() {

    $.ajax({
        url: "http://localhost:8080/CarRentalSystem_war_exploded/car?today",
        method: "get",
        success: function (res) {
            console.log(res.data)
            $(".available_car_count").text(res.data);

        }
    });
}

function setOccupiedCars() {

    $.ajax({
        url: "http://localhost:8080/CarRentalSystem_war_exploded/car?occupied",
        method: "get",
        success: function (res) {
            console.log(res.data)
            $(".occupied_car_count").text(res.data);

        }
    });
}
