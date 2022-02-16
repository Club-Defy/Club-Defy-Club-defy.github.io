let shown = false;
barba.init({

  views: [{
        namespace: 'home',
        beforeEnter(data) {

            // page top
            sTop();

        },
    },
  ],
});

// page top
function sTop() {
  return $(window).scrollTop(0);
}