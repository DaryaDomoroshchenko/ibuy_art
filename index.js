(function () {

  const filterPopup = document.querySelector('.filter');
  const filterOpenImg = document.querySelector('.header__filter');
  const filterCloseImg = document.querySelector('.filter__close-img');

  filterOpenImg.addEventListener('click', () => {
    filterPopup.classList.remove('root__hide');
  });

  filterCloseImg.addEventListener('click', () => {
    filterPopup.classList.add('root__hide');
  });

  document.addEventListener("DOMContentLoaded", () => {
    const priceSlider = document.getElementById('r-slider');

    noUiSlider.create(priceSlider, {
      start: [200000, 800000],
      tooltips: true,
      connect: true,
      padding: 0,
      step: 1,
      range: {
        'min': 0,
        'max': 1000000
      },
      format: {
        to: function(value) {
          return parseInt(value);
        },
        from: function(value) {
          return parseInt(value);
        }
      }
    });

    priceSlider.noUiSlider.on('change', (values, handle) => {
      goSearch();
    });

    function goSearch() {
      let winHref = window.location.href.split('?')[0];
      winHref += `?pricerange=${priceSlider.noUiSlider.get()}`;
      window.location.href = winHref;
    }
  });

})();
