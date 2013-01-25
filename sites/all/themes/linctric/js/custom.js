(function($) {
Drupal.behaviors.menuHover = {
  attach: function (context, settings) {

            $('.cc-container').ccvalidate({ onvalidate: function(isValid) {
                if (!isValid) {
                    alert('Incorrect Credit Card format');
                    return false;
                }
            }
            });
            $('.cc-ddl-contents').css('display', 'none');
            $('.cc-ddl-header').toggle(function() {
                toggleContents($(this).parent().find('.cc-ddl-contents'));
            }, function() { toggleContents($(this).parent().find('.cc-ddl-contents')); });

            function toggleContents(el) {
                $('.cc-ddl-contents').css('display', 'none');
                if (el.css('display') == 'none') el.fadeIn("slow");
                else el.fadeOut("slow");
            }
            $('.cc-ddl-contents a').click(function() {
                $(this).parent().parent().find('.cc-ddl-o select').attr('selectedIndex', $('.cc-ddl-contents a').index(this));
                $(this).parent().parent().find('.cc-ddl-title').html($(this).html());
                $(this).parent().parent().find('.cc-ddl-contents').fadeOut("slow");
            });
            $(document).click(function() {
                $('.cc-ddl-contents').fadeOut("slow");
            });


            $('#check').click(function() {
                var cnumber = $('#cnumber').val();
                var type = $('#ctype').val();
                alert(isValidCreditCard(cnumber, type) ? 'Valid' : 'Invalid');
            });
      
 }
};
})(jQuery);
       
