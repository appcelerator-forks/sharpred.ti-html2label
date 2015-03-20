var html,
    whitelist,
    filter;
html = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, 'sample.html').read().text;
//whitelist of attributes
whitelist = JSON.parse(Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, 'whitelist.json').read().text);

//note the use of .call($) to allow the use of $.createStyle
$.index.open();