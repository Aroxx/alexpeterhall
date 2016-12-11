//Use Strict Mode
"use strict";
(function() {
$(document).ready(function() {
    $('#navigationBar, #topOfPage').hide();
    $('#intro, #about, #resume, #contact').css('visibility', 'hidden');
	$('#logo, #title, #headline').addClass('animated bounceInDown');
    $(quoteGenerator.randomQuote()).appendTo('#quote');
    $("#emailForm").validate({
        rules: {
            name: {
                required: true,
                minlength: 5,
                maxlength: 25
            },
            email: {
                required: true,
                minlength: 10,
                maxlength: 60
            },
            subject: {
                required: true,
                minlength: 5,
                maxlength: 40
            },
            message: {
                required: true,
                minlength: 60,
                maxlength: 2000
            },
            antiSpam: {
                required: true,
                number: true,
                maxlength: 1
            },
            
        },
        messages: {
            name: {
                required: "* Required",
                minlength: $.format("At least {0} characters required."),
                maxlength: $.format("Whoa! Maximum {0} characters allowed.")
            },
            email: {
                required: "* Required",
                minlength: $.format("At least {0} characters required!"),
                maxlength: $.format("Whoa! Maximum {0} characters allowed!")
            },
            subject: {
                required: "* Required",
                minlength: $.format("At least {0} characters required!"),
                maxlength: $.format("Whoa! Maximum {0} characters allowed!")
            },
            message: {
                required: "* Required",
                minlength: $.format("Keep typing, at least {0} characters required!"),
                maxlength: $.format("Whoa! Maximum {0} characters allowed!")
            },
            antiSpam: {
                required: "* Required",
                maxlength: $.format("Your answer is incorrect.")
            }
        }
    });
});
$(window).scroll(function() {
    var topPosition = $(window).scrollTop();
    //If the user has scrolled down/up past a certain point, show/hide the top navigation bar.
    if(topPosition > 700) {
        $("#navigationBar").fadeIn();
        $('#navigationBar').show("slow");
	}
    if(topPosition < 700) {
        $("#navigationBar").fadeOut();
        $('#navigationBar').hide("slow");
        $('#topOfPage').hide("slow");
    }
    if(topPosition > 400) {
        $('#intro').addClass('animated fadeInLeft');
        $('#intro').css('visibility', 'visible');
    }
    if(topPosition > 1300) {
        $('#about').addClass('animated fadeInRight');
        $('#about').css('visibility', 'visible');
    }
    if(topPosition > 2400) {
        $('#resume').addClass('animated fadeInLeft');
        $('#resume').css('visibility', 'visible');
    }
    if(topPosition > 3400) {
        $('#contact').addClass('animated fadeInRight');
        $('#contact').css('visibility', 'visible');
    }
});

$(".scroll").click(function(event){
    event.preventDefault();
    //calculate destination place
    var dest=0;
    if($(this.hash).offset().top > $(document).height()-$(window).height()){
        dest=$(document).height()-$(window).height();
    }else{
        dest=$(this.hash).offset().top;
    }
    //go to destination
    $('html,body').animate({scrollTop:(dest-80)}, 1300,'swing');
});

var quoteGenerator = {
    quotes: ['"By failing to prepare, you are preparing to fail." - Benjamin Franklin', '"It\'s not the years in your life that count. It\'s the life in your years." - Abraham Lincoln', 'The only easy day was yesterday.', 'Attention to details.', 'It pays to be a winner.', 'Proper preparation prevents piss poor performance.', 'Take care of your gear and your gear will take care of you.', 'Slow is smooth, smooth is fast.', 'You are only as fast as your slowest guy.', 'Do today what others won\'t so you can do tomorrow what others can\'t.', '"Whether you think you can or you think you can\'t, you are right." - Henry Ford', 'Good judgement comes from experience. Experience comes from bad judgement.', 'You can only coast if you\'re going downhill.', 'You do not rise to the occasion, you sink to your level of training.', 'Small strokes fell great oaks.', 'No plan survives contact with the enemy. - Helmuth von Moltke the Elder'],
    randomQuote: function() {
		var quote = Math.floor((Math.random() * quoteGenerator.quotes.length));
		return "<i> " + quoteGenerator.quotes[quote] + "</i>";
    }
};
}());