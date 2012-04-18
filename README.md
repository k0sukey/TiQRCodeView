# TiQRCodeView


## How to use
```
var qrcode = require('qrcode').QRCode({
	typeNumber: 4,
	errorCorrectLevel: 'M'
});

var qrcodeView = qrcode.createQRCodeView({
	width: 300,
	height: 300,
	margin: 4,
	text: 'https://github.com/k0sukey/TiQRCodeView'
});
```


## Thanks
QR Code Generator for JavaScript

Copyright (c) 2009 Kazuhiko Arase

URL: http://www.d-project.com/

Licensed under the MIT license: http://www.opensource.org/licenses/mit-license.php

The word 'QR Code' is registered trademark of DENSO WAVE INCORPORATED http://www.denso-wave.com/qrcode/faqpatent-e.html