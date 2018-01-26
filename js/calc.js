function calculate(event, unhide=false)
{
  event.preventDefault();
  if ($('#buffet').prop('checked')) {var buffet=$('#buffet').val();}else{var buffet=0;}
  if ($('#traditional').prop('checked')) {var traditional=$('#traditional').val();}else{var traditional=0;}
  if ($('#beverages').prop('checked')) {var beverages=$('#beverages').val();}else{var beverages=0;}
  if ($('#snacks').prop('checked')) {var snacks=$('#snacks').val();}else{var snacks=0;}
  var guests=$('#guests').val();
  var transport=$('#location').val();
  var start_time=$('#start_time').val();
  var service=5000;
  var cost_per_plate=parseFloat(buffet) + parseFloat(traditional);
  var cost_per_beverage=parseFloat(beverages) + parseFloat(snacks);
  var food=(cost_per_plate * guests);
  var drinks=(cost_per_beverage * guests);
  var food_drinks=parseFloat(food)+parseFloat(drinks);
  var total_cost=parseFloat(food_drinks)+parseFloat(transport)+parseFloat(service);
  $('#transport_cost').html('Ksh. '+$.number( transport, 2 ));
  $('.location').val(transport);
  $('#food_drink_cost').html('Ksh. '+$.number( food_drinks, 2 ));
  $('#service_charge').html('Ksh. '+$.number( service, 2 ));
  $('#total_cost').html('Ksh. '+$.number( total_cost, 2 ));
  $('.total_cost').val('Total Cost: '+$.number( total_cost, 2 )+'/=');
  $('.guests').val('Max Guests: '+guests);
  $('.start_time').val(start_time);
  $('.start_date').val('Starts on: '+$('#start_date').val());
  if(unhide){
    if($('#start_date').val()==''){
      alert("Select date!");
    }else {
      $('.calc-fonts li').removeClass('hidden');
    }
  }
}
