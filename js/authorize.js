Namespace('authorize')
.define(function (ns) {
    var authorize, hasCode;

    authorize = function (scopes) {
        if (!scopes || scopes.length <= 0) {
            scopes = [
                'mixi_apps2',
                'r_profile',
                'r_profile_blood_type',
                'r_profile_birthday',
                'r_profile_gender'
            ];
        }

        mixi.auth({
            scope : scopes.join(' '),
            state : 'hoge'
        });
    };

    hasCode = function () {
        var query = {};
        _.each(
            location.search.substr(1).split('&'),
            function (set) {
                var splited = set.split('='),
                    key   = splited[0],
                    value = splited[1];
                query[key] = value;
            }
        );
        return query.code && query.code.length > 0 ? true : false;
    };

    ns.provide({
        authorize : authorize,
        hasCode : hasCode
    });
});
