$(function () {
  $('#accordion').accordion({
    collapsible: true,
    beforeActivate: function (event, ui) {
      let currHeader, currContent, isPanelSelected;
      if (ui.newHeader[0]) {
        currHeader = ui.newHeader;
        currContent = currHeader.next('.ui-accordion-content');
      } else {
        currHeader = ui.oldHeader;
        currContent = currHeader.next('.ui-accordion-content');
      }

      isPanelSelected = currHeader.attr('aria-selected') === 'true';

      currHeader
        .toggleClass('ui-corner-all', isPanelSelected)
        .toggleClass(
          'accordion-header-active ui-state-active ui-corner-top',
          !isPanelSelected
        )
        .attr('aria-selected', (!isPanelSelected).toString());

      currHeader
        .children('.ui-icon')
        .toggleClass('ui-icon-triangle-1-e', isPanelSelected)
        .toggleClass('ui-icon-triangle-1-s', !isPanelSelected);

      currContent.toggleClass('accordion-content-active', !isPanelSelected);

      if (isPanelSelected) {
        currContent.slideUp();
      } else {
        currContent.slideDown();
      }

      return false;
    },
  });
});