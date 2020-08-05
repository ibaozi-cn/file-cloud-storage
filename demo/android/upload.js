var needle = require('needle');

var data = {
    path:'test',
    version:'1.0.0',
    version_code:20,
    file: { file: './flutter.png', content_type: 'png' }
}

needle.post('http://localhost:4000/upload', data, { multipart: true }, function(err, resp, body) {
    console.log(err, resp, body)
});

