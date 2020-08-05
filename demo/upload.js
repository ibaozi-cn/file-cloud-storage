var needle = require('needle');

var data = {
    path:'esa',
    version:'1.0.0',
    version_code:20,
    file: { file: './watch_v2.2.0_200805_huawei_debug.apk', content_type: 'apk' }
}

needle.post('http://localhost:4000/upload', data, { multipart: true }, function(err, resp, body) {
    console.log(err, resp, body)
});

