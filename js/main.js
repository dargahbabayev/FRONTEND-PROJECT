$( document ).ready(function() {
 
    //for modal
    $("#myModal").on('hidden.bs.modal', function (e) {
        $("#myModal iframe").attr("src", $("#myModal iframe").attr("src"));
    
    });
    $(".second__row--list li").hover(function(){
        var $this = $(this);
        
            if ($this.hasClass("stable--active")) {
                $(this).removeClass("stable--active");
                $(this).find("p").css("display", "none");

			} else{
                $($this).addClass("stable--active");
                $(this).find("p").css("display", "block");
            }
       
    });
});


