/*!
    * Start Bootstrap - SB Admin v7.0.7 (https://startbootstrap.com/template/sb-admin)
    * Copyright 2013-2023 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin/blob/master/LICENSE)
    */
    // 
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

    $(document).ready(function(){
        var currentFieldset = 0;
        var fielsets = $('#multi-step-form fieldset');

        $('.next').click(function(){
            currentFieldset.eq(currentFieldset).removeclass('current-fieldset');
            currentFieldset += 1;
            fieldsets.eq(currentFieldset).addclass('current-fieldset');
        });

        $('.previous').click(function() {
            fieldsets.eq(currentFieldset).removeClass('current-fieldset');
            currentFieldset -= 1;
            fieldsets.eq(currentFieldset).addClass('current-fieldset');
          });

    })

});
