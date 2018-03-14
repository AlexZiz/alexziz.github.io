// плавное появление блоков приимуществ
$(window).ready(function(){
  /* немного другой эффект появления, и задержка в 2 секунды */
  setTimeout ("$('#block1').fadeIn();",1000);
  setTimeout ("$('#block2').fadeIn();",1500);
  setTimeout ("$('#block3').fadeIn();",2000);
  setTimeout ("$('#block4').fadeIn();",2500);
  setTimeout ("$('#block5').fadeIn();",3000);
  setTimeout ("$('#block6').fadeIn();",3500);
});
