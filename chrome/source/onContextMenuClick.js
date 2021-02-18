(function() {
    'use strict';

    if(!MsnExt.helper.isArticlePage())
    {
        return;
    }

    document.location = MsnExt.helper.getCanonicalUrl();

})();