/*
          ========================
          GET MARKETO ROWS TO WRAP
          ========================
          */
          /* Loop thru each form on the page */
          for (var i = 0; i < forms.length; i++) {

            /* Get the submit button as variable for the form and remove it from the DOM */
            var formRow = document.querySelectorAll('.mktoFormRow');
            for (var i = 0; i < formRow.length; i++) {
              formRow[i].classList.add('${colCount}');
            }
          }
