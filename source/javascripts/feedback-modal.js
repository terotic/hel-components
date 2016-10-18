$(function() {
    $('#feedback').on('shown.bs.modal', function (e) {
     $(e.relatedTarget).addClass('is-active');
    })
});