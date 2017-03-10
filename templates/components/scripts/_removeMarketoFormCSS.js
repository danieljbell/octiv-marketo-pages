/*
          ==============================
          REMOVE MARKETO FORM INLINE CSS
          ==============================
          */
          var removeCSSText = [];

          /* get all forms on the page and push to array */
          var forms = form.getFormElem();
          for (var i = 0; i < forms.length; i++) {
            removeCSSText.push(forms[i]);
          }
          for (var i = 0; i < removeCSSText.length; i++) {
            removeCSSText[i].style.cssText = '';
          }
