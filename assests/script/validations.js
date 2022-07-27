const custIDRegEx = /^[0-9]{1,}(v)|[0-9]{1,}$/;
const custName=/^[A-z ]{5,20}$/;
const custAddress=/^[A-z ]{5,20}$/;
const custTel=/^[0-9]{1,10}$/;
const custEmail=/^[a-z0-9]{4,20}[@][a-z]{3,6}(.com|.lk)$/;

const pickupVenueReg=/^[A-z ]{5,20}$/;
/*======================================*/

/*customer registration form validation*/
function checkCustomerRegistrationValidation() {
    var out_customerIc = $("#customer_nic").val();
    if (custIDRegEx.test(out_customerIc)) {
        $("#customer_nic").css('border-color', '#04f314');
        var out_customerName = $("#customerName").val();

        if (custName.test(out_customerName)) {
            $("#customerName").css('border-color', '#04f314');
            var out_customerAddress = $("#customer_address").val();

            if (custAddress.test(out_customerAddress)) {
                $("#customer_address").css('border-color', '#04f314');
                var out_customerTel = $("#customer_telnumber").val();

                if (custTel.test(out_customerTel)) {
                    $("#customer_telnumber").css('border-color', '#04f314');
                    var out_customerEmail = $("#customer_email").val();

                    if (custEmail.test(out_customerEmail)) {
                        $("#customer_email").css('border-color', '#04f314');

                        if (($("#customerlicenPhoto").val()=='') && ($("#customerIdcardPhoto").val()=='')){
                            alert("file chooser cant be empty please upload the id and license images");
                            return false;
                        }else {
                            return true;
                        }

                    }else {
                        $("#customer_email").css('border-color', '#ff0202');
                    }
                }else {
                    $("#customer_telnumber").css('border-color', '#ff0202');
                }
            }else {
                $("#customer_address").css('border-color', '#ff0202')
            }
        }else {
            $("#customerName").css('border-color', '#ff0202');
        }
    }else {
        $("#customer_nic").css('border-color', '#ff0202');
    }

}

/*puting reservation form validation*/
function checkValidationOfReservation() {
    var out_reserPivkupVenue = $("#res_form_pickupandReturnLocation").val();
    if (pickupVenueReg.test(out_reserPivkupVenue)) {
        if ($("#res_form_resBankSlipUploader").val()!==''){
            $("#res_form_resBankSlipUploader").css('border-color', '#04f314');

            if ($("#resform_check_in_time").val()!== ''){
                $("#resform_check_in_time").css('border-color', '#04f314');

                if ($("#radNeedDriver").prop("checked") | $("#radNoNeedDriver").prop("checked")){
                    return true;
                }else {
                    $("#radNeedDriver").css('border-color', '#ff0202');
                    $("#radNoNeedDriver").css('border-color', '#ff0202');
                    return false;
                }
            }else {
                $("#resform_check_in_time").css('border-color', '#ff0202');
                return false;
            }
        }else {
            $("#res_form_resBankSlipUploader").css('border-color', '#ff0202');
            return false;
        }
    }else {
        $("#res_form_pickupandReturnLocation").css('border-color', '#ff0202');
    }

}
