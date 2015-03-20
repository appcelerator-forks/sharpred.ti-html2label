( function() {
        var html,
            whitelist,
            filter;
        html = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, 'sample.html').read().text;
        //whitelist of attributes
        whitelist = JSON.parse(Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, 'whitelist.json').read().text);
        if (!Alloy.Collections.html) {
            console.log('creating html collection');
            Alloy.Collections.html = Alloy.Collections.instance('html');
        } else {
            console.log('html collection already exists');
        }
        Alloy.Collections.html.fetch();
        require("com.stepupapps.html2native").filter.call(null, html, whitelist, false, function(err, elements) {
            var lbl;
            if (err) {
                console.error(err);
            } else {
                elements.forEach(function(element) {
                    console.log(JSON.stringify(element));
                    element.links = element.links ? JSON.stringify(element.links) : "[]";
                    element.children = element.children ? JSON.stringify(element.children) : "[]";
                    var newElement = Alloy.createModel('html', element);
                    newElement.save();
                    Alloy.Collections.html.add(newElement);
                });
            }
        });
    }());
