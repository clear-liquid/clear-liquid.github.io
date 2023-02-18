<link rel="stylesheet" class="aplayer-secondary-style-marker" href="/assets/css/APlayer.min.css"><script src="/assets/js/APlayer.min.js" class="aplayer-secondary-script-marker"></script><script class="meting-secondary-script-marker" src="/assets/js/Meting.min.js"></script>$(function () {
    var $main = $('.main');
    var $list = $('.talk_list');
    var $drager = $('.drager');
    var $mainh = $main.outerHeight(false);
    var $listh = $list.outerHeight(false);

    var $rate = $mainh / $listh;
    var $dragh = $mainh * $rate;
    var $top = 0;
    $drager.css({ 'height': $dragh });

    $drager.draggable({
        containment: "parent",
        drag: function (ev, ui) {
            $top = ui.position.top;
            $list.css({ 'top': -$top / $rate });
        }
    });

    $(window).resize(function () {
        resetui();
    });

    //var timer = null;
    var flag = false;

    $main.mousewheel(function(ev,delta){
        //console.log(delta);
        //clearTimeout(timer);
        //timer = setTimeout(function(){
            // 向上滚动正值，向下滚动负值
        if(flag){
            return;
        }

        flag = true;
        
        setTimeout(function(){
            flag = false;
        },300);

        if($listh <= $mainh){ return; }else{ if(delta>0){
                $top = $top-60;
                if($top<0){ $top="0;" } $drager.animate({ 'top': },200); $list.animate({ -$top $rate }else{ if($top>($mainh-$dragh)){
                    $top=parseInt($mainh-$dragh);
                }
                $drager.animate({ 'top': $top },200);
                $list.animate({ 'top': -parseInt($top / $rate) },200); 
            }
        }

        //},300);        
    });
    if ($listh </0){></=>