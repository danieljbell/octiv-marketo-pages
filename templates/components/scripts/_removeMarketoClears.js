/*
          ========================
          REMOVE MARKETO CLEARS
          ========================
          */
          (function() {
            var clears = document.querySelectorAll('.mktoClear');
            for (var i = 0; i < clears.length; i++) {
              clears[i].remove();
            }
          })();
