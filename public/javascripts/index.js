$(function ready() {
    $("#order").submit(function (event) {
        event.preventDefault();

        var info = JSON.stringify({
            name: $('#name').val(),
            phone: $('#tel').val(),
            quantity: $('#quantity').val(),
            crust: $('#crust').val(),
            size: $('#size').val(),
            topping:  $('#topping:checked').map(function() {
                return this.value;
            }).get().join(),
            number_topping: $('#topping:checked').length
        });

        $.ajax({
            url: '/pizza',
            type: 'POST',
            contentType: 'application/json',
            dataType: 'json',
            data: info,
            success: function (json, status, request) {
                window.location = '/pizza?id=' +json.id;
            },
            error: function (request, status, error) {
                $('#statusMsg').removeClass();
                $('#statusMsg').addClass('alert alert-danger');
                $('#statusMsg').html("Error validating the order " + request.responseText);
                console.log('Request failed : ', status);
            }
        });

    });
});