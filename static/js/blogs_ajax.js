

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
            $('#wrapper').append('<div class="row "  ><div class="col-md-2 col-sm-0"></div><div class="col-md-8 col-sm-12 " ><a href="{% url "blog_post" '+item.fields.id+' %}" class="text-decoration-none text-reset"><div class="container blogs-container mt-5 px-4 pt-3 text-light "><div class="row"><div class="col-md-8 h5  post-title">'+item.fields.title+'</div><div class="col-md-4       text-md-right text-sm-left p-2 "><span class="post-date  px-3">'+item.fields.date_created.slice(0,10)+'</span></div></div><div class="row"><div class="col-md-8  post-description text-secondary mb-1 h6 mb-4">'+item.fields.description+'</div><div class="col-md-4 text-secondary text-md-right text-sm-left mb-2">author: @'+item.fields.author_name+'</div></div></div></a> </div><div class="col-md-2 col-sm-0"></div></div>');
        }
      }
    });
});

