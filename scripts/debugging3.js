// Run the program, then correct the errors

// The program should select an element and when it is hovered over, after the timeout time, alert the user

// $(function() {

// 	function hoverAlert(el, timeout)
//   	$(el).hover(function(event){
//     $(event.currentTarget).fadeOut(timeout, function(){
//       alert('Element has been hidden')
//     );
//   });
// }

// hoverAlert("h2", 4000)


//})




$(function() {

	hoverAlert("h2", 4000);


})

function hoverAlert(el, timeout) {
	$(el).hover(function(event) {
		$(event.currentTarget).fadeOut(timeout, function(){
			// alert('Element has been hidden')
    });
  });
};
