/*
          ========================================
          SHOW MARKETO ASTERIX FOR REQUIRED FIELDS
          ========================================
          */
          var requiredField = document.querySelectorAll('.mktoRequiredField');
          for (var i = 0; i < requiredField.length; i++) {
            var asterix = requiredField[i].querySelector('.mktoAsterix');
            asterix.style.width = 'initial';
            asterix.style.marginRight = '0.5rem';
            asterix.style.visibility = 'visible';
          }
