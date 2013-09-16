Package.describe({
  summary: "jwerty packged for meteor"
});

Package.on_use(function (api) {

  api.add_files([
    'lib/jwerty/jwerty.js',
    'post.js'
    ], ['client']
  );

  api.export(["jwerty"], ["client"]);
  
});
