
//Mostrar el aside con "#btn-aside", usando jquery
$(document).ready(function(){
    $("#btn-aside").click(function(){
        $(".box-aside").show();
    });
});
//Ocultar aside con ".icono-barra", usando jquery
$(document).ready(function(){
    $(".icono-barras").click(function(){
        $(".box-aside").hide();
    });
});

//Ocultar aside al seleccionar el menu del aside, con jquery
$(document).ready(function(){
           
    $(".menu-solapa").click(function(){
        $(".box-aside").hide();
       
    });
    
});

$(document).ready(function(){
           
    $(".sp-btn").click(function(){
        $(".box-aside").hide();
       
    });
    
});


$(function(){
    $('.usuario-select-solapa').on('change', function () {
        
        var url = $(this).val(); // get selected value
        if (url) { // require a URL
            window.location = url; // redirect
            $(".box-aside").hide();

        }
        return false;
    });
    $(".box-aside").hide();

  });

  
/*
onchange=document.location.href=this.value
*/



