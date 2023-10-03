
export const hover = () =>{
    
    $('.baner').hover(function(){
        $('.baner-move',this).css('transform','translateY(0px)');
        $('.text-holder',this).css('opacity','1');
        $('.baner-link',this).css('background-color','rgba(0,0,0,.7)');
    },function(){
        $('.baner-move',this).css('transform','translateY(90px)');
        $('.text-holder',this).css('opacity','0');
        $('.baner-link',this).css('background','linear-gradient(0deg, rgba(2, 0, 36, 0.4682247899159664) 21%, rgba(9, 9, 121, 0) 63%)');
    })
}
