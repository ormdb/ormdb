site = (function () {
    var location_path = location.href.split("/");
    location_path.pop();
    location_path = location_path.join("/");

    return {
        code_path: location_path + "/site/docs/codes/",
        wiki_path: location_path + "/site/docs/wiki/",
        copyright: 'Copyright(c) ' + (new Date()).getFullYear() + ' - OrmDb'
    };
})();