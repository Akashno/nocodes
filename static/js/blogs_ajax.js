console.log('inside jquery script');

$('#search').on('input',function(){
    $.ajax({
        type:"POST",
        url:"/blogs/",
        data:{
            text :$('#search').val(),
            csrfmiddlewaretoken:$('input[name=csrfmiddlewaretoken]').val(),
        },
        success:function(data){

        var posts = $.parseJSON(data.posts);
        $("#wrapper").empty();
        if (Object.keys(posts).length === 0)
        {
              $("#wrapper").append('<div class="row"><div class="col-md-2 col-sm-0"></div><div class="col-md-8 col-sm-12 "><h6 class=" px-5  mt-4 text-secondary"> No blogs available as per your search</h6></div><div class="col-md-2 col-sm-0"></div></div>');
         };

        for(var prop in posts) {
            var item = posts[prop];
//            console.log(item);
            $('#wrapper').append('<div class="row "><div class="col-md-2 col-sm-0"></div><div class="col-md-8 col-sm-12 " ><a href="/blog_post/'+item.pk+'" class="text-decoration-none text-reset"><div class="container blogs-container mt-5 px-4 pt-3 text-light "><div class="d-flex justify-content-between"><h5 class="post-title">'+item.fields.title+'</h5><p class="post-date d-flex align-items-center px-3 ">'+item.fields.date_created.slice(0,10)+'</p></div><div class="d-flex justify-content-between"><h6 class=" post-description text-secondary mb-4">'+item.fields.description+'</h6><span class="text-secondary">author: @'+item.fields.author_name+'</span></div></div></a></div><div class="col-md-2 col-sm-0"></div><div>');
        }
      }
    });
});

