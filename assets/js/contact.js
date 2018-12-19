console.log('Script JS assets/js/contact.js')

$('select').select2();
let $contactButton = $('#contactButton');
$contactButton.click(e => {
    e.preventDefault();
    $('#contactForm').slideDown();
    $contactButton.slideUp();
});