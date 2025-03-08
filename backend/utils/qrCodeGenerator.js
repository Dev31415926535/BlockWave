const QRCode = require('qrcode');

async function generateQR(productId) {
  const url = `http://localhost:3000/product/${productId}`;
  await QRCode.toFile(`./public/qr-codes/${productId}.png`, url);
}
