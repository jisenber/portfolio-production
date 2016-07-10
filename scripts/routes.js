(function() {
  page('/', nav.homeController);
  page('/about', nav.aboutController);
  page('/experience', nav.experienceController);
  page('/projects', nav.projectsController);
  page('/contact', nav.contactController);
  page('*', function() {
    console.log('not found');
  });
  page();
})();
