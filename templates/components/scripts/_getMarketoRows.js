/*
          ========================
          GET MARKETO ROWS TO WRAP
          ========================
          */
          /* Loop thru each form on the page */
          for (var i = 0; i < forms.length; i++) {

            /* Get the submit button as variable for the form and remove it from the DOM */
            var formButton = document.querySelector('.mktoButtonRow');
            formButton.remove();

            /* Add wrapping div with class for styling */
            var formContent = forms[i].innerHTML;
            formContent = '<div class="half">' + formContent + '</div>';

            /* Drop in new form with wrapping div and button */
            forms[i].innerHTML = formContent + formButton.outerHTML;
          }
