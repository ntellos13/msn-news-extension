(function() {
    'use strict';

    var main = function() {

        if(!MsnExt.helper.isArticlePage())
        {
            return;
        }

        var listElement = document.querySelector('body > div.head > header#header-common > ul');
        
        var newElement = document.createElement('li');
        
        newElement.classList = 'msn-ext';

        var uri = MsnExt.helper.getCanonicalUrl();
        
        newElement.innerHTML = "<ul><li><a href=\"" + uri + "\">visit " + MsnExt.helper.getSiteName(uri) + "</a></li></ul>";
        
        listElement.appendChild(newElement);
    
    };

    document.addEventListener("DOMContentLoaded", function() {

        main();

    });
    
})();