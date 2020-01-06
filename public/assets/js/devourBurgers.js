// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-eaten btn-success").on("click", function(event) {
      event.preventDefault();
      const id = $(this).data("id");
    
     
      const devouredState = {
        devoured: 1
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: devouredState 
      }).then(function() {
          // Reload the page to get the updated list
          location.reload();
        });
    });
  
    $(".create-new-burger-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        new_burger: $("#burger").val().trim(), 
        devoured: 1
        // sleepy: $("[name=sleepy]:checked").val().trim()
      }; 
      console.log(newBurger )
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(function() {
          console.log("created new burger")
          // Reload the page to get the updated list
          location.reload();
        });
    });
  });  

  