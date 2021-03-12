console.log('inside jquery script');




//add comment ajax
$('#comment').keypress(function(e){
    var key = window.event.keyCode;
    if (key === 13) {
       ajax_call(e);
}
});
$('#submit').on('click',function(e){
       ajax_call(e);
});

function ajax_call(e){
e.preventDefault();
    $.ajax({
        type:"POST",
        url:"/blog_post/"+$('#post_id').val(),
        data:{
            id : $('#post_id').val(),
            comment :$('#comment').val(),
            csrfmiddlewaretoken:$('input[name=csrfmiddlewaretoken]').val(),
        },
        success:function(data){
            var comment = $.parseJSON(data.comment);
            for( var prop in comment ){
                var item = comment[prop];
                $('.comment-wrapper').prepend('<div class="comment-container new-comment p-4 mb-2"><div class="mb-2 d-flex justify-content-between"><span class="text-secondary">'+item.fields.date_created.slice(0,10)+' at '+ item.fields.date_created.slice(12,16) +'</span></div><div><span>'+item.fields.body+'</span><span class="h6 text-secondary d-block  float-right ">-'+item.fields.user_name+'</span></div></div>');
                setTimeout( function(){
                    $(".comment-container").removeClass("new-comment");
                }, 1000 );
                $('#comment').val('');
        }
      },

    });

}
