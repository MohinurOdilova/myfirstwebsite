$(document).ready(function(){
    window.addEventListener("scroll", function(){
        var header = document.querySelector("header");
        header.classList.toggle("sticky", window.scrollY > 0);
    })

    $(".submit").click(function(event){
        event.preventDefault()
        var name = $("#name").val()
        var email = $("#email").val()
        var phone = $("#phone").val()
        var message = $("#message").val()
        var statusName = $(".statusName")
        var statusEmail = $(".statusEmail")
        var statusPhone = $(".statusPhone")
        var statusMessage = $(".statusMessage")
        statusName.empty()
        statusEmail.empty()
        statusPhone.empty()
        statusMessage.empty()


        if(name.length >= 4){
            statusName.append("<div>Name is valid <span><i class='far fa-check-circle'></i></span> </div>")
        }
        else{
            statusName.append("<div>Name is not valid <span><i class='far fa-exclamation-circle'></i></span> </div>")
        }
        if(email.length >= 8 && email.includes('@') && email.includes('.')){
            statusEmail.append("<div>Email is valid <span><i class='far fa-check-circle'></i></span> </div>")
        }else{
            statusEmail.append("<div>Email is not valid <span><i class='far fa-exclamation-circle'></i></span> </div>")
        }
        if(phone.length >= 9){
            statusPhone.append("<div>Number is valid <span><i class='far fa-check-circle'></i></span> </div>")
        }else{
            statusPhone.append("<div>Number is not valid <span><i class='far fa-exclamation-circle'></i></span> </div>")
        }
        if(message.length >= 10){
            statusMessage.append("<div>Message is valid <span><i class='far fa-check-circle'></i></span> </div>")
        }else{
            statusMessage.append("<div>Message is not valid <span><i class='far fa-exclamation-circle'></i></span> </div>")
        }
    })
    

    rangeInput = document.getElementById('range');
    container = document.getElementsByTagName('body')[0];
    rangeInput.addEventListener("mousemove",function(){
    container.style.filter = "brightness(" + rangeInput.value + "%)";
    });
    

    var btn = $('#button');
    $(window).scroll(function() {
      if ($(window).scrollTop() > 20) {
        btn.addClass('show');
      } else {
        btn.removeClass('show');
      }
    });
    btn.on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({scrollTop:0}, '300');
    });    
})