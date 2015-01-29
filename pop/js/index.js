// Inline popups
$('#inline-popups').magnificPopup({
  delegate: 'a',
  removalDelay: 500, //delay removal by X to allow out-animation
  callbacks: {
    beforeOpen: function() {
       this.st.mainClass = this.st.el.attr('data-effect');
    }
  },
  midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
});


$(function() {
    $("#tabs").tabs();
	});

    $('div#about').perfectScrollbar({
      suppressScrollX: true
    });

    $('div#services, div#looking').perfectScrollbar({
      suppressScrollY: true,
      maxScrollbarLength: 50,
      wheelPropagation: true
    });

$('#tabs').tabs({
    activate: function (event, ui) {
        var activeTabId = $(this).tabs('option', 'active');
        if(activeTabId == 0){
        	$( ".top-my-services" ).fadeOut( "slow", function() {
        		$(".top-about").show();	   
        	});
        }
        else if(activeTabId == 1,2){
        	$( ".top-about" ).fadeOut( "slow", function() {
    			$(".top-my-services").show();
  			});
        }
    }
});

$(function(){
      $(".top-about").load("../pop/includes/top-about.html"),
      $(".top-my-services").load("../pop/includes/top-my-services.html"); 
    });