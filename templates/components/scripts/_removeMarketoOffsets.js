/*
          ========================
          REMOVE MARKETO OFFSETS
          ========================
          */
          (function() {
            var offsets = document.querySelectorAll('.mktoOffset');
            for (var i = 0; i < offsets.length; i++) {
              offsets[i].remove();
            }
          })();
