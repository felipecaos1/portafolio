
export const hover = () =>{
    
    $('.baner').hover(function(){
        $('.baner-move',this).css('transform','translateY(0px)');
        $('.text-holder',this).css('opacity','1');
        $('.baner-link',this).css('background-color','rgba(0,0,0,.7)');
    },function(){
        $('.baner-move',this).css('transform','translateY(90px)');
        $('.text-holder',this).css('opacity','0');
        $('.baner-link',this).css('background-color','rgba(0,0,0,0)');
    })
}
