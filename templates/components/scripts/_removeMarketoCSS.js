/*
        ==============================
        REMOVE MARKETO CSS
        ==============================
        */
        var removeNodes = [];
        removeNodes.push(document.querySelector('#mktoForms2BaseStyle'));
        removeNodes.push(document.querySelector('#mktoForms2ThemeStyle'));
        if (removeNodes) {
            for (var i = 0; i < removeNodes.length; i++) {
              removeNodes[i].remove();
            }
        }
