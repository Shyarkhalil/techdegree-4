    $(document).ready(function() {
					$('#lightgalley').lightGallery({
            thumbnail:true
          });      
			});


   $(document).ready(function() {
					$('.sticker').sticky({topSpacing:0});
			});



// When the user type in search:
// A- The search box should filters photos based on the captions.
// 1- If the photo caption matches the search value:
/// A- show the img
// 2- If not:
// A- hide the img
// B - The photos should filter in real-time as the user type, and only display photos that match the search.






 

$(document).ready(function() {
  
  $("#search").on('keyup', function() {
    var $inputValue = $(this).val();
    
    
    $('a img').each(function() { 
      
       var getPhoto = false;
       var $imgCaption = $(this).attr('alt');
       
      if ($imgCaption.toLowerCase().indexOf($inputValue.toLowerCase()) >= 0) {
              
           getPhoto = true;
              
       } 
        if (getPhoto === true) {
          
           $(this).removeClass('remove');
          
        } else {
           
           $(this).addClass('remove');
       }
                  
     }); 
    
  });

});




