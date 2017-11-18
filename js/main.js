/**
 * Created by Administrator on 2017/10/9.
 */
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
    function resize(){
        var windowwidth = $(window).width();
        var windosmallscreen=windowwidth<768;
        $("#main-id>.carousel-inner>.item").each(function(i,item){
            var imgurl=$(item).data( windosmallscreen ? 'img-sm' : 'img-lg');
            $(item).css("backgroundImage",'url("'+imgurl+'")');
            if(windosmallscreen){
                $(item).html("<img src='"+imgurl+"'/>")
            }else{
                $(item).empty()
            }
        })
        var $navtabs=$(".nav-tabs");
        var width = 30;
        $navtabs.children().each(function(i,e){
            width+= e.clientWidth;
        })
        if(width>$(window).width()){
            $navtabs.css('width',width).parent().css('overflow-x','scroll')
        }
        else{$navtabs.css('width','').parent().css('overflow-x','')}

    }
    var newTitle = $('.news-title')
    $(window).on("resize",resize).trigger("resize");
    $('#news .nav-pills a').on('click',function(){
        var title = $(this).data('title');
        newTitle.text(title)
    })
    var $carousels = $('.carousel');
    var startX=0;
    var endX=0;
    var ofset=50;
    $carousels.on('touchstart',function(e){
        startX=e.originalEvent.touches[0].clientX;
    })
    $carousels.on('touchmove',function(e){
        endX=e.originalEvent.touches[0].clientX;
        //console.log(endX)
    })
    $carousels.on('touchend',function(){
        var distance=Math.abs(startX-endX);
        if(distance>ofset){
            $(this).carousel(startX>endX? 'next':'prev')
        }
    })

})