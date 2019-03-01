$(function() {

    // on click function for "eat it" button
    $(".eat-burger").on("click", function(event) {
        var id = $(this).data("id");
        var devoured = $(this).data("devoured");

        var newDevouredState = {
        devoured: true
        };
        console.log("calling PUT method");
        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevouredState
        }).then(
        function() {
            console.log("changed sleep to", devoured);
            // Reload the page to get the updated list
            location.reload();
        }
        );
    });

    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
    
        var newBurger = {
          burger_name: $("#ca").val().trim(),
          devoured: 0
        };
    
        // Send the POST request.
        $.ajax("/api/burgers", {
          type: "POST",
          data: newBurger
        }).then(
          function() {
            console.log("created new burger");
            // Reload the page to get the updated list
            location.reload();
          }
        );
    });
});