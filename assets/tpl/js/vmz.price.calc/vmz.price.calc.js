/*
 * Price calculator
 * http://github.com/VladimirIntegro/pricecalc
 * Copyright (c) 2016 -	Vladimir Zhitkov
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 * Version: 0.0.0-dev
 */

// Test calculator values for the pattern and return false if the value matches the pattern
function TestCalcFormValueForPattern(aVal, aPattern, aFieldName)
{
 	var retErr = false;
 	if(aVal != '') {
		var pattern = aPattern;
		if(pattern.test(aVal)) {
	  	$(aFieldName).css({'border' : '1px solid #acadad'});
		} else {
	  		$(aFieldName).css({'border' : '1px solid red'});
	  		retErr = true;
		}
  	} else {
		$(aFieldName).css({'border' : '1px solid red'});
		retErr = true;
  	}
  	return retErr;
}

$("#calc_contacts_phone").inputmask("mask", {"mask": "+7 (999) 999-99-99", clearMaskOnLostFocus: false});

// Main page calculator
$('#kalk_form').submit(function() {
    var manuf = $("#calc_manuf").val();
    var square = $("#calc_square").val();
    var corner = $("#calc_corner").val();
    var trub = $("#calc_trub").val();
    var lustr = $("#calc_lustr").val();
    var svetil = $("#calc_svetil").val();
    var plintus = $("#calc_plintus").val();
	var url = $("#calc_url").val();
    var pageid = gPageId;

    var err = false;
    // Check name
    if(manuf != '') {
        //var pattern = /^[a-z0-9а-яА-ЯёЁ\s\.\-]+$/i;
        //if(pattern.test(name)){
		if(0 < manuf && manuf < 5) {
            $('#calc_manuf').css({'border' : '1px solid #acadad'});
        } else {
            $('#calc_manuf').css({'border' : '1px solid red'});
            err = true;
        }
    } else {
        $('#calc_manuf').css({'border' : '1px solid red'});
        err = true;
    }

	// Check square
	err = TestCalcFormValueForPattern(square, /^[0-9\.]+$/i, '#calc_square');
	// Check corner
	err = TestCalcFormValueForPattern(corner, /^[0-9]+$/i, '#calc_corner');
	// Check trub
	err = TestCalcFormValueForPattern(trub, /^[0-9]+$/i, '#calc_trub');
	// Check lustr
	err = TestCalcFormValueForPattern(lustr, /^[0-9]+$/i, '#calc_lustr');
	// Check svetil
	err = TestCalcFormValueForPattern(svetil, /^[0-9]+$/i, '#calc_svetil');
	// Check plintus
	err = TestCalcFormValueForPattern(plintus, /^[0-9\.]+$/i, '#calc_plintus');

    if(err === false){
        var contactFormData = new FormData();
        contactFormData.append('manuf', manuf);
        contactFormData.append('square', square);
        contactFormData.append('corner', corner);
        contactFormData.append('trub', trub);
        contactFormData.append('lustr', lustr);
        contactFormData.append('svetil', svetil);
        contactFormData.append('plintus', plintus);
        contactFormData.append('url', url);
        contactFormData.append('id', pageid);

        $.ajax({
          type: "POST",  
          url: gSendToCalcUrl,  
          data: contactFormData,
          processData: false,
          contentType: false,
          success:  function(data) { 
			  //console.log(data);
			  $("#calc_conts_send_manuf").val(data['manuf']);
			  $("#calc_conts_send_square").val(data['square']);
			  $("#calc_conts_send_corner").val(data['corner']);
			  $("#calc_conts_send_trub").val(data['trub']);
			  $("#calc_conts_send_lustr").val(data['lustr']);
			  $("#calc_conts_send_svetil").val(data['svetil']);
			  $("#calc_conts_send_plintus").val(data['plintus']);
			  $("#calc_conts_send_sum").val(data['sum']);
			  $('#kalk_form_results .kalk_form_results_sum').text(data['remontPrice'] + ' рублей');
			  //$('#kalk_form').hide(200);
			  $('#kalk_form_results').show(300);
			  $('.kalk_form_send_contacts_cont').show(300);
			  $('html, body').animate({
			  	scrollTop: $('.formbutton_kalk_cont').offset().top
			  }, 500);
          },
          error:  function(xhr, status, error) {
			  var err = eval("(" + xhr.responseText + ")");
			  if(err.error == "FILE UPLOAD ERROR") {
				$('#kalk_form_results').hide();
				$('#kalk_form_results .kalk_form_results_sum').text('');
				$('.kalk_form_send_contacts_cont').hide();
				//$('#kalk_form').show(300);
			  }
		  }
        });  
    }
    return false;
});

// Main page calculator send contacts form
$('#sendCalcContactsBottomForm').submit(function() {
    var manuf = $("#calc_conts_send_manuf").val();
    var square = $("#calc_conts_send_square").val();
    var corner = $("#calc_conts_send_corner").val();
    var trub = $("#calc_conts_send_trub").val();
    var lustr = $("#calc_conts_send_lustr").val();
    var svetil = $("#calc_conts_send_svetil").val();
    var plintus = $("#calc_conts_send_plintus").val();
    var sum = $("#calc_conts_send_sum").val();
    var name = $("#calc_contacts_name").val();
    var phone = $("#calc_contacts_phone").val();
	var url = $("#calc_contacts_url").val();
    var pageid = gPageId;

    var err = false;
	// Check name
    if(name != '') {
        var pattern = /^[a-z0-9а-яА-ЯёЁ\s\.\-]+$/i;
        if(pattern.test(name)){
            $('#calc_contacts_name').css({'border' : '1px solid #8a8f93'});
        } else {
            $('#calc_contacts_name').css({'border' : '1px solid red'});
            err=true;
        }
    } else {
        $('#calc_contacts_name').css({'border' : '1px solid red'});
        err=true;
    }
    // Check phone
    if(phone != '') {
        var pattern = /^[0-9\s\.\-\(\)\+]+$/i;
        if(pattern.test(phone)){
            $('#calc_contacts_phone').css({'border' : '1px solid #8a8f93'});
        } else {
            $('#calc_contacts_phone').css({'border' : '1px solid red'});
            err=true;
        }
    } else {
        $('#calc_contacts_phone').css({'border' : '1px solid red'});
        err=true;
    }

    if(err === false){
        var contactFormData = new FormData();
        contactFormData.append('manuf', manuf);
        contactFormData.append('square', square);
        contactFormData.append('corner', corner);
        contactFormData.append('trub', trub);
        contactFormData.append('lustr', lustr);
        contactFormData.append('svetil', svetil);
        contactFormData.append('plintus', plintus);
        contactFormData.append('sum', sum);
        contactFormData.append('name', name);
        contactFormData.append('phone', phone);
        contactFormData.append('url', url);
        contactFormData.append('id', pageid);

        $.ajax({
          type: "POST",  
          url: gSendCalcResultsUrl,  
          data: contactFormData,
          processData: false,
          contentType: false,
          success:  function(data) { 
			  //console.log(data);
			  $('#kalk_form_send_contacts-bot').css({'color' : '#ffa039', 'font-weight' : 'bold'});
			  $('#kalk_form_send_contacts-bot').text("Заявка отправлена!");
			  $('#kalk_form_send_contacts-bot').show(300);
          },
          error:  function(xhr, status, error) {
			  var err = eval("(" + xhr.responseText + ")");
			  if(err.error == "FILE UPLOAD ERROR") {
				$('#kalk_form_send_contacts-bot').css({'color' : 'red', 'font-weight' : 'bold'});
			  	$('#kalk_form_send_contacts-bot').text("Не удалось отправить. Повторите попытку!");
			  	$('#kalk_form_send_contacts-bot').show(300);
			  }
		  }
        });  
    }
    return false;
});
