$("#admin_customer_page").click(function () {
    loadAllCustomers();
})

$("#btnsearchCustomer").click(function () {
    viewCustomerDetails();
})

function viewCustomerDetails() {

    let custId = $("#adminCustomeridsearch").val();

    $(".customer_management_table_body").empty();
    $.ajax({
        url: "http://localhost:8080/CarRentalSystem_war_exploded/customer?id="+custId,
        method: "GET",
        success: function (resp) {
            $("#view_form_customerName").val(resp.data.customerName)
            $("#view_form_customerAddress").val(resp.data.customerAddress)
            $("#view_form_customerPassword").val(resp.data.customerPassword)
            $("#view_form_customerTel").val(resp.data.customerTel)
            $("#view_form_customerEmail").val(resp.data.email)



            let IdImage = "http://localhost:8080/CarRentalSystem_war_exploded/uploads/" + resp.data.idCard;
            let LicemImage = "http://localhost:8080/CarRentalSystem_war_exploded/uploads/" + resp.data.drivingLicense;

            $("#view_customer_idImage").css({
                "background": `url(${IdImage})`,
                "background-size": "cover",
                "height": "8rem"
            });
            $("#view_customer_licenImage").css({
                "background": `url(${LicemImage})`,
                "background-size": "cover",
                "height": "8rem"
            });

        }
    });
}

function loadAllCustomers() {
    $(".customer_management_table_body").empty();
    $.ajax({
        url: "http://localhost:8080/CarRentalSystem_war_exploded/customer",
        method: "GET",
        success: function (resp) {
            for (const customer of resp.data){
                let row = `<tr><td>${customer.customerNic}</td><td>${customer.customerName}</td><td>${customer.customerAddress}</td><td>${customer.customerPassword}</td><td>${customer.customerTel}</td><td>${customer.email}</td></tr>`;
                $(".customer_management_table_body").append(row);
            }

        }
    });
}