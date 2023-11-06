// Sidenav
const sideNav = document.querySelector('.sidenav');

M.Sidenav.init(sideNav, {});


// Slider
const slider = document.querySelector('.slider');

M.Slider.init(slider, {

      indicators: false,
      
      height: 500,

      transition: 500,

      interval: 6000            // milliseconds
});



// Autocomplete 

const auto = document.querySelector('.autocomplete');

M.Autocomplete.init(auto, {


      data: {

            "Aruba": null,

            "Cancun Mexico": null,

            "Hawaii": null,

            "Florida": null,

            "California": null,

            "Jamacia": null,

            "Europe": null,
      }

});





// Material Boxed 

const materialBox = document.querySelectorAll('.materialboxed');

M.Materialbox.init(materialBox, {});




// ScrollSpy

const scrollSpy = document.querySelector('.scrollspy');

M.Scrollspy.init(scrollSpy, {});


















































































































