require.config({
  paths: {
    jquery: '/lib/jquery/jquery',
    text: '/lib/requirejs-text/text',
    jasmine: '/lib/jasmine/lib/jasmine-core/jasmine',
    mustache: '/lib//mustache/mustache',
    'jasmine-html': '/lib/jasmine/lib/jasmine-core/jasmine-html',
    'jasmine-jquery': '/lib/jasmine-jquery/lib/jasmine-jquery',
  },
  packages: [{
     name: "content",
     location: "/src/"
  }],
  shim: {
    jquery: {
        exports: '$'
    },
    jasmine: {
        exports: 'jasmine'
    },
    'jasmine-html': {
        deps: ['jasmine'],
        exports: 'jasmine'
    },
    'jasmine-jquery': {
        deps: ['jquery', 'jasmine']
    }
  },
});