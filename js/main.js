Namespace('main')
.use('authorize *')
.define(function (ns) {
    var run;

    run = function () {
        console.log('run');
        if (!ns.hasCode()) {
            ns.authorize();
        }
opensocial.requestShareApp("VIEWER_FRIENDS", null, function(response) {
  if (response.hadError()) {
    var errCode = response.getErrorCode();
    // do something...
  } else {
    // do something...
  }
});
    };

    ns.provide({
        run : run
    });
});
