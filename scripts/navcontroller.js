(function(module) {
  var nav = {};

  nav.homeController = function() {
    $('#experience, #projects, #about, #contact').hide();
    $('#home').show();
  };

  nav.aboutController = function() {
    $('#home, #experience, #projects, #contact').hide();
    $('#about').show();
  };

  nav.projectsController = function() {
    $('#home, #experience, #about, #contact').hide();
    $('#projects').show();
  };

  nav.experienceController = function() {
    $('#home, #projects, #about, #contact').hide();
    $('#experience').show();
  };

  nav.contactController = function() {
    $('#home, #projects, #about, #experience').hide();
    $('#contact').show();
  };

  module.nav = nav;
})(window);
