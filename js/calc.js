function calculate(event)
{
  event.preventDefault();
  if ($('#buffet').prop('checked')) {var buffet=$('#buffet').val();}else{var buffet=0;}
  if ($('#traditional').prop('checked')) {var traditional=$('#traditional').val();}else{var traditional=0;}
  if ($('#beverages').prop('checked')) {var beverages=$('#beverages').val();}else{var beverages=0;}
  if ($('#snacks').prop('checked')) {var snacks=$('#snacks').val();}else{var snacks=0;}
  if($('#start_date').val()=='' || $('#end_date').val()==''){alert("Select dates!");}else{
  var guests=$('#guests').val();
  var transport=$('#location').val();
  var service=5000;
  var cost_per_plate=parseFloat(buffet) + parseFloat(traditional);
  var cost_per_beverage=parseFloat(beverages) + parseFloat(snacks);
  var food=(cost_per_plate * guests);
  var drinks=(cost_per_beverage * guests);
  var food_drinks=parseFloat(food)+parseFloat(drinks);
  var total_cost=parseFloat(food_drinks)+parseFloat(transport)+parseFloat(service);
  $('#transport_cost').html('Ksh. '+transport);
  $('#food_drink_cost').html('Ksh. '+food_drinks);
  $('#service_charge').html('Ksh. '+service);
  $('#total_cost').html('Ksh. '+total_cost);
  $('.calc-fonts li').removeClass('hidden');
 }
}
