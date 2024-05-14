// Ouvrir un accordeon à la place
export const openOneAccordeonAtOnce = () => {
  $('[data-click="accordion"]').click(function () {
    if (!$(this).is('.open')) {
      $('[data-click="accordion"].open').each((i, item) => {
        item.click();
      });
      $(this).addClass('open');
    } else {
      $(this).removeClass('open');
    }
  });
};