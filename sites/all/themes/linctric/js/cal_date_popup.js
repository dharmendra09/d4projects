$(document).ready(function() {
           
  var d = new Date();

  var month = d.getMonth()+1;
  var day = d.getDate();

  var current_date = d.getFullYear() + '-' +
    (month<10 ? '0' : '') + month + '-' +
    (day<10 ? '0' : '') + day;
  
  var pathArray = window.location.pathname.split( '/' );
  var urlId = pathArray[2];
  var uid = Drupal.settings.currentUser;
        
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
         $( '#dialog-form' ).load('/node/add/user-meeting?date='+date);
       }
     }
   });
  
   $(".ui-dialog-titlebar-close").click(function(){
     window.location.reload(true);
    });
        
    $('#user-meeting-node-form #edit-submit').click(function()
    {
       
       if($('#edit-field-meeting-time-und').val() == '_none'){
       
       alert("please Select time");
       $('#edit-field-meeting-time-und').focus();
       return false;
       }
              
       if($('#edit-field-city-region-und-0-value').val() == ''){
       
       alert("please enter region value");
       $('#edit-field-city-region-und-0-value').focus();
       return false;
       }
       if($('#edit-field-category-und-0-value').val() == ''){
       
       alert("please enter Catagory value");
       $('#edit-field-category-und-0-value').focus();
       return false;
       }
        
    });
   
});
