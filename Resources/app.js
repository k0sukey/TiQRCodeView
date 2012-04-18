Ti.UI.setBackgroundColor('#000');

var window = Ti.UI.createWindow();

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

window.add(qrcodeView);

window.open();