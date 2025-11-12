
var postForm = `<form class='post-form1' action='/submit' method='POST'>`;
var postTitle = `<input name='title' type = text class='post-title'>`;
var postTxt = `<textarea name='content' class='post-txt'>`;
var postbtn = `<input type = 'submit' value = 'Submit' class='post-btn'>`;

var clicks = 0

var clas = 'post' + clicks;
var previous = 'post' + (clicks - 1);
    var arr = []
$("#post").click(function () {
    var inForm = $(postForm).append(postTitle,'<br>', postTxt, postbtn, '<br>');
    $("#posts").append(inForm);

    console.log(clicks);
    var clas = 'post' + clicks;
    arr.push(clas);
    console.log(arr)

    if ($('.post-form1')) {
        $('.post-form1').attr("class", clas).addClass('post-form2');
    }
           

    

});


        



 