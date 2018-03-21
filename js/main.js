// плавное появление блоков приимуществ
$(window).ready(function(){
  /* немного другой эффект появления, и задержка в 2 секунды */
  setTimeout ("$('#block1').fadeIn();",1000);
  setTimeout ("$('#block2').fadeIn();",1500);
  setTimeout ("$('#block3').fadeIn();",2000);
  setTimeout ("$('#block4').fadeIn();",2500);
  setTimeout ("$('#block5').fadeIn();",3000);
  setTimeout ("$('#block6').fadeIn();",3500);
});

(function() {

    var app = {

        initialize : function () {
            this.setUpListeners();
        },

        setUpListeners: function () {
            $('form').on('submit', app.submitForm);
            $('form').on('keydown', 'input', app.removeError);
        },

        submitForm: function (e) {
            e.preventDefault();

            var form = $(this),
                submitBtn = form.find('button[type="submit"]');

            if( app.validateForm(form) === false ) return false;

            submitBtn.attr('disabled', 'disabled');

            var str = form.serialize();

            $.ajax({
                url: 'contact_form/contact_process.php',
                type: 'POST',
                data: str
            })
            .done(function(msg) {
                if(msg === "OK"){
                    var result = "send-page.html"
                    location.replace(result)
                    // var result = "<div = 'bg-success'>Спасибо за заявку! Мы вам перезвоним!</div>"
                    // form.html(result);
                }else{
                    location.replace("404.html")
                    //form.html(msg);
                }
            })
            .always(function() {
                submitBtn.removeAttr('disabled');
            });

        },

        validateForm: function (form){
            var inputs = form.find('input'),
                valid = true;

            inputs.tooltip('destroy');

            $.each(inputs, function(index, val) {
                var input = $(val),
                    val = input.val(),
                    formGroup = input.parents('.form-group'),
                    //label = formGroup.find('label').text().toLowerCase(),
                    textError = 'Обязательное поле';

                if(val.length === 0){
                    formGroup.addClass('has-error').removeClass('has-success');
                    input.tooltip({
                        trigger: 'manual',
                        placement: 'left',
                        title: textError
                    }).tooltip('show');
                    valid = false;
                }else{
                    formGroup.addClass('has-success').removeClass('has-error');
                }
            });

            return valid;
        },

        removeError: function () {
            $(this).tooltip('destroy').parents('.form-group').removeClass('has-error');
        }

    }

    app.initialize();

}());
