/*
        ==============================
        REMOVE MARKETO CSS
        ==============================
        */
        var removeNodes = [];
        removeNodes.push(document.querySelector('#mktoForms2BaseStyle'));
        removeNodes.push(document.querySelector('#mktoForms2ThemeStyle'));
        if (removeNodes.length) {
            for (var i = 0; i < removeNodes.length; i++) {
              removeNodes[i].remove();
            }
        }
