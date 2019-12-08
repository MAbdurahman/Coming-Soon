/**
 * Coming-Soon Scriptscript
 * @auhor:  MAbdurrahman
 * @date:  25 september 2018
 * @version:  1.0.0
 */

  $(function () {
      var typed5 = new Typed('#typing-text', {

          strings: ['Mahdi','Mahdi Abdurrahman',
              'Mahdi Abdurrahman Portfolio'],
          typeSpeed: 120,
          backSpeed: 70,
          backDelay: 1000,
          // cursorChar: '_',
          showCursor: false,
          shuffle: false,
          smartBackspace: true,
          loop: false,

      });

      /*** Countdown Timer */
      $("#days")
          .countdown("2020/04/07", function (event) {
              $(this).html(event.strftime('%D <em>days</em>'))
          });

      $("#hours")
          .countdown("2020/04/07", function (event) {
              $(this).html(event.strftime('%H <em>hrs</em>'))
          });

      $("#minutes")
          .countdown("2020/04/07", function (event) {
              $(this).html(event.strftime('%M <em>mins</em>'))
          });

      $("#seconds")
          .countdown("2020/04/07", function (event) {
              $(this).html(event.strftime('%S <em>secs</em>'))
          });


  });

