(function(module) {
  var messages = {} ;

  $('#menuIcon').on('click', function() {
    $('#navBar').toggle();
    $('.headshot').toggle();
  });

//function that triggers whenever the window is resized. Checks the width
//of the viewport then based on that shows or hides the nav bar.
  $(window).resize(function() {
    if (window.innerWidth > 640) {
      $('#navBar').show();
    } else {
      $('#navBar').hide();
    };
  });

//navBar click handler that checks width of window before hiding the nav itself.
//this should only happen when the user is viewing the site from a mobile-sized viewport
  $('#navBar').on('click', function() {
    if (window.innerWidth < 640) {
      $('#navBar').hide();
    }
  });

  function preview () { //This is the handlebars template for the preview button functionality
    $('#messagePreview').empty();
    messages.context = {
      fullName: $('#userName').val(),
      email: $('#userEmail').val(),
      comment: $('#userComment').val()
    };
    var input = $('#previewScript').html();  //template script grabbed
    var previewTemplate = Handlebars.compile(input); // template is compiled
    previewContext = previewTemplate(messages.context);
    $('#messagePreview').append(previewContext);
    //var messageJSON = JSON.stringify(messages.contact);
  };

  $('#previewButton').on('click', function (e) {
    e.preventDefault();
    preview();
  });

  $('#submitButton').on('click', function () {
    var ref = new Firebase('https://popping-heat-3312.firebaseio.com/');
    ref.push(messages.context);
  });

//This is what I did to send my data to a JSON file. Sent it to the console
//then got it in the console and copied and pasted it. How resourceful!
  //function sendToJSON(data) {
  //   var $newData = JSON.stringify(data);
  //   console.log($newData);
  // };

  module.messages = messages;
  Employment.extractAll();
  Projects.getData(Projects.loadEm);

})(window);
