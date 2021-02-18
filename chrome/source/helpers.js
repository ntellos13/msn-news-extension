window.MsnExt = (function(MsnExt) {
    'use strict';

    var helper = {};
    
    helper.isArticlePage = function() {
    
        var listElement = document.querySelector('body > div.head > header#header-common > ul');
        
        if(!!!listElement) {
        
            return false;
        
        }
    
        var info = document.querySelector('head').getAttribute('data-info')
            .split(";")
            .map(function(x) { 
    
                var kvp = x.split(":");
    
                return {
                    key: kvp[0],
                    value: kvp[1]
                };
    
            })
            .reduce(function(obj, x) {
    
                obj[x.key] = x.value;
    
                return obj;
    
            }, {});
    
        if(!!!info || info.PageName !== 'articlePage') {
    
            return false;
        
        }
        
        return true;
    
    };
    
    helper.getCanonicalUrl = function() {
            
        var canonical = "";
        var links = document.getElementsByTagName("link");
        
        for (var i = 0; i < links.length; i ++) {
    
            if (links[i].getAttribute("rel") === "canonical") {
    
                canonical = links[i].getAttribute("href")
    
            }
    
        }
    
        return canonical;
    };
    
    helper.getSiteName = function(uri) {
            
        try
        {
            return new URL(uri).hostname;
        } 
        catch(e)
        {
            return "original site";
        }
    
    };

    MsnExt.helper = helper;

    return MsnExt;

})(window.MsnExt || {});