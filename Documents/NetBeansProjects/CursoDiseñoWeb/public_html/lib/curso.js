
$('#txtFecha').pickadate({
    format: 'dd/mm/yyyy'
});

//$("#exampleModal").modal();
//
//setTimeout(function(){
//    
//    $("#exampleModal").modal('hide');
//    
//},2000)
//SWEET-ALERT
//swal({
//    title: "Error!",
//    text: "Here's my error message!",
//    type: "error",
//    confirmButtonText: "Cool"
//});
//// GALLERIA
//Galleria.loadTheme('plugins/galleria/themes/classic/galleria.classic.min.js');
//Galleria.run('.galleria');
//// SUPER SIMPLE SLIDER
//$(function($){
//    $('.slider').sss();
//});

// GREENSOCK 
//var $caja = $("#cajaRoja");
//
////TweenMax.to($caja, 2, {
////    y: "+=200",
////    ease: Bounce.easeOut
////}
////);
//
//var tl = new TimelineMax();
//
//tl.to($caja, 1, { width: "50px"}, "-0.5")
//   .to($caja, 1, { height: "50px"}, "-1")
//   .to($caja, 1, {backgroundColor:"blue"})
//   ;
//   
//setTimeout(function(){
//    tl.pause();
//},3000); 
//
//setTimeout(function(){
//    tl.play();
//},4000);
//METRO MODAL
//$.MetroModal({
//    html: 'This is a Happy Metro Modal',
//    controls: true
//});

////METRO MENU
//$(document).ready(function(){
//
//
//	$.MetroMenu( 
//		{
//			backicon: "plugins/metro_menu/img/back.png", // Sub menu back item
//			animation: "fadeInLeft",  // Animation
//			position: "bottom",  // Position
//			withtooltip: true, // Show tooltip on mouse over
//			closeonclick: false, // Menu item click, close the menu
//			escclose: true,  // ESC key, close the menu
//			items:[
//				{   name: "Calendar",
//					icon: "plugins/metro_menu/img/calendar.png"
//				},
//				{   name: "Office",
//					icon: "plugins/metro_menu/img/office.png"
//				},
//				{   name: "Mailing",
//					icon: "plugins/metro_menu/img/mail.png"					
//				},
//				{   name: "Adobe Suit",
//					icon: "plugins/metro_menu/img/ps.png"
//				},
//				{   name: "Options",
//					icon: "plugins/metro_menu/img/gear.png"
//				}]
//		}
//	);
//
//
//});
// METRO NOTIFICATION
//$(document).ready(function () {
//  $.smallBox({
//  title:"Hola Mundo",
//  content:"Este es el cuerpo de la notificación.... puedo escribir lo que sea",
//  fa:"fa-star-o",
//  sound:false,
//  color:"#991799",
//  buttons:["Aceptar","Cancelar"],
//},function(action, button){
//  //Do something here
//
//  alert(action + ' ' + button);
//});
//});

// CRYSTAL NOTIFICATIONS
//$(document).ready(function(){
//
//	$.CrystalNotification({
//		position: 2, // try 2, 3 and 4
//		title: "Hello!",
//		image: "plugins/crystal/img/Colorfull/Messages-colorfull.png",
//		content: "Ready to go!",
//	});
//	
//});

////SHUFFLELETTERS
//var txtMezclar = $("#txtMezclar");
//var txtTexto = $("#txtTexto");
//
//var mensajes= ['Hola Fernando...','Bienvenido a mi página web', 'Espero que te guste..'];
//var actual = 0;
//
//txtMezclar.text(mensajes[0]);
//
//txtMezclar.shuffleLetters();
//
//txtTexto.on("keypress",function(e){
//   
//    if(e.keyCode == 13){
//        txtMezclar.shuffleLetters({
//            "text": txtTexto.val()
//        });
//    }
//});
//
//
//setInterval(function(){
//    actual++;
//    if(actual >= mensajes.length){
//        actual = 0;
//    }
//    txtMezclar.shuffleLetters({
//            "text": mensajes[actual]
//        });
//}, 4000);
//-----------------------------------
//// ARCTEXT
//var $texto = $("#txtArc");
//
//$texto.arctext({
//    radius: 300
//});
//
//setTimeout(function(){
//   $texto.arctext('set',{
//       radius: 300,
//       dir : -1,
//       animation: {
//           speed: 300,
//           easing: 'ease-out'
//       }
//   })
//}, 1000);

//$texto.arctext({
//    radius: 500,
//    rotate:false
//})
