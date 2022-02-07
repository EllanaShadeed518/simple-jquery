$("img").click(function(){
 let image1=$(this).attr('src');
let mainimage=$(".m1").attr('src');
$(this).attr('src',mainimage);
$(".m1").attr('src',image1);

})

        