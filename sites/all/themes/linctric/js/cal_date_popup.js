$(document).ready(function() {
           
  var d = new Date();

  var month = d.getMonth()+1;
  var day = d.getDate();

  var current_date = d.getFullYear() + '-' +
    (month<10 ? '0' : '') + month + '-' +
    (day<10 ? '0' : '') + day;
  
  var pathArray = window.location.pathname.split( '/' );
  var urlId = pathArray[3];
  
  var uid = Drupal.settings.currentUser;
    
  $("td.past #request_accept_form #button_accept").attr("disabled","disabled");
  $("td.past #request_accept_form #button_denied").attr("disabled","disabled");
   
  $(".view-per-user-calendar .date-box td").hover(function(){
    $('.view-per-user-calendar .date-box .inner .day').css( 'cursor', 'pointer' );
  });
        
  $(".view-display-id-page_1 .date-box td").click(function(){

    if(urlId == uid){
      alert("You can not send request to own"); 
      return false;
    }else{
     var date = $(this).attr('data-date');
    
       if(date >= current_date){
         $( "#dialog-form" ).dialog( "open" );
         $( '#dialog-form' ).load('/linctric/node/add/user-meeting?date='+date);
       }
       else
       { 
         alert("Please select today's or future date(s) to make an appointment");
       }
     }
   });
   
   $(".ui-dialog-titlebar-close").click(function(){
     window.location.reload(true);
    });
        
    $('#user-meeting-node-form #edit-submit').click(function()
    {
        if($("#edit-field-meeting-date-und-0-value-datepicker-popup-0").val() == ''){
         $("#edit-field-meeting-date-und-0-value-datepicker-popup-0").addClass('error');
         return false;
       }else{
         $("#edit-field-meeting-date-und-0-value-datepicker-popup-0").removeClass('error');
       }
       
       if($('#edit-field-meeting-time-und').val() == '_none'){
       $("#edit-field-meeting-time-und").addClass('error');
         return false;
       }else{
         $("#edit-field-meeting-time-und").removeClass('error');
       }
              
       if($('#edit-field-city-region-und-0-value').val() == ''){
       $("#edit-field-city-region-und-0-value").addClass('error');
         return false;
       }else{
         $("#edit-field-city-region-und-0-value").removeClass('error');
       }
       if($('#edit-field-category-und-0-value').val() == ''){
       $("#edit-field-category-und-0-value").addClass('error');
         return false;
       }else{
         $("#edit-field-category-und-0-value").removeClass('error');
       }
        
    });
   
});
