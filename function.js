function change_to_dark() {

  if (document.body.style.backgroundColor === 'rgb(255, 255, 255)') {
    document.body.style.backgroundColor = "#000f26";
    document.getElementById('title').style.background = "#000f26";
    document.getElementById('name').style.color = "#fff";
    document.getElementById('skills-section').style.background = "#000f26";
    document.getElementById('projects-section').style.background = "#000f26";
    document.getElementById('scrollmenu').style.backgroundImage = "url('images/background/star.gif')";
    document.getElementById('skill-progress').style.backgroundColor = '#01255c';
    document.getElementById('skill-progress').style.color = "white";
    document.getElementById('skill-progress').style.boxShadow = " rgba(255, 255, 255, 0.16) 0px 3px 6px, rgba(255, 255, 255, 0.23) 0px 3px 6px";
    document.getElementById("name").style.animation = " glow 1s ease-in-out infinite alternate";
    document.getElementById('hamburger').style.color = "white";

    document.getElementById('copyright').style.color="white";
    document.getElementById('gform').style.color="#c9c8c7";
    document.getElementById('contact-form').style.boxShadow="rgba(255, 255, 255, 0.05) 0px 1px 0px, rgba(255, 255, 255, 0.1) 0px 0px 8px";



    var el = document.querySelectorAll('#heading');

    for (var i = 0; i < el.length; i++) {
      var currentEl = el[i];
      currentEl.style.color = 'white';
    }

    var el = document.querySelectorAll('.nav-link');

    for (var i = 0; i < el.length; i++) {
      var currentEl = el[i];
      currentEl.style.color = '#c5c6c9';
    }

    $('.nav-item').removeClass('hover');
    var el = document.querySelectorAll('.nav-item');

    for (var i = 0; i < el.length; i++) {
      var currentEl = el[i];
      currentEl.style.backgroundColor = '#031980';

    }


    var el = document.querySelectorAll('#school-animation');

    for (var i = 0; i < el.length; i++) {
      var currentEl = el[i];
      currentEl.style.backgroundColor = '#01255c';
      currentEl.style.boxShadow = "rgba(255, 255, 255, 0.25) 0px 0.0625em 0.0625em, rgba(255, 255, 255, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset";
      currentEl.style.color = 'white';
    }
    var el = document.querySelectorAll('#card');

    for (var i = 0; i < el.length; i++) {
      var currentEl = el[i];
      currentEl.style.backgroundColor = '#003ab8';
      currentEl.style.boxShadow = "rgba(255, 255, 255, 0.25) 0px 0.0625em 0.0625em, rgba(255, 255, 255, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset";
      currentEl.style.color = 'white';
    }

    var el = document.querySelectorAll('#social-media-icon');

    for (var i = 0; i < el.length; i++) {
      var currentEl = el[i];
      currentEl.style.boxShadow = "rgba(255, 255, 255, 0.35) 0px 5px 15px";
    }

    var el = document.querySelectorAll('#project-link');

    for (var i = 0; i < el.length; i++) {
      var currentEl = el[i];
      currentEl.style.color = '#f05d70';
    }

    var el = document.querySelectorAll('#skill-bar');

    for (var i = 0; i < el.length; i++) {
      var currentEl = el[i];
      currentEl.style.boxShadow = "rgba(255, 255, 255, 0.25) 0px 0.0625em 0.0625em, rgba(255, 255, 255, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset";
    }
    var el = document.querySelectorAll('#bar');

    for (var i = 0; i < el.length; i++) {
      var currentEl = el[i];
      currentEl.style.boxShadow = "rgba(255, 255, 255, 0.25) 0px 50px 100px -20px, rgba(255, 255, 255, 0.3) 0px 30px 60px -30px, rgba(255, 255, 255, 0.35) 0px -2px 6px 0px inset";
    }
    var el = document.querySelectorAll('.progress-title');

    for (var i = 0; i < el.length; i++) {
      var currentEl = el[i];
      currentEl.style.color = 'white';
    }
    const css = window.document.styleSheets[0];
    css.insertRule(`@-webkit-keyframes glow {
  from {
    text-shadow: 0 0 2px #fff, 0 0 4px #fff, 0 0 6px #e60073, 0 0 8px #e60073, 0 0 10px #e60073, 0 0 12px #e60073, 0 0 14px #e60073;
  }

  to {
    text-shadow: 0 0 4px #fff, 0 0 6px #ff4da6, 0 0 8px #ff4da6, 0 0 10px #ff4da6, 0 0 12px #ff4da6, 0 0 14px #ff4da6, 0 0 16px #ff4da6;
 `, css.cssRules.length);
  }
  else {
    location.reload()
  }
  document.getElementById('gform').onload = function(){
    /*Execute on every reload on iFrame*/
    load++;
    if(load > 1){
        /*Second reload is a submit*/
        document.location = "https://polonium31.github.io/Portfolio/";
    }
}
}
