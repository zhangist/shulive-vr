/**
 * Dropdown
 */
$('body').on('click', function(e) {
  e = e || event;
  $(".sl-dropdown-btn").removeClass('sl-dropdown-active');
  $('.sl-dropdown-menu').hide();
  if ($(e.target).parents('.sl-dropdown').length
    && ($(e.target).hasClass('sl-dropdown-btn') || $(e.target).parents('.sl-dropdown-btn').length)) {
    var height = $(e.target).parents('.sl-dropdown').find('.sl-dropdown-btn').height();
    $(e.target).parents(".sl-dropdown").find(".sl-dropdown-btn").addClass('sl-dropdown-active');
    $(e.target).parents(".sl-dropdown").find(".sl-dropdown-menu").css({"top":height}).show();
  }
});
