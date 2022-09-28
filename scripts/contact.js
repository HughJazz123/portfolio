$(document).ready(function (){
    $('.submit').click(function(event){
        event.preventDefault();
        
        var email = $('.email-input').val();
        var name = $('.name-input').val();
        var subject = $('.subject-input').val();
        var message = $('.message-input').val();

        var statusElm = $('.status');
        statusElm.empty();
        console.log(email,name,subject,message);

        if (!name){
            $('.name').text('Invalid name');
        }
        
        if (!email.match(/(?:[a-z0-9!#$%&'*+/=?^_\`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_\`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/)){
            $('.email').text('Invalid email')
        }

        if (!message){
            $('.message').text('Empty message');
        }
        event.preventDefault();
        return false
    })
})