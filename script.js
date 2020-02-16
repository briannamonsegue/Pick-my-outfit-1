$("button").click(function(){
    var name = $(".Q1").val();
     var birthday = $(".Q2").val();
     var color = $(".Q3").val();
    $(".answer").append("On "+name+"'s Birthday on "+birthday+" she will wear "+color+".");
});
