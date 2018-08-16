$("#btn").click(function(){
  $.getJSON("https://dog.ceo/api/breeds/image/random")
  .done(function(data){
    $("#dogImg").attr("src", data.message);
  })
  .fail(function(){
    alert("Request is not pawssible!")
  })
})