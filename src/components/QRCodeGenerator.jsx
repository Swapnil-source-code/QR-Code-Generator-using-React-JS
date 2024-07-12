import { useState } from 'react';
import './QRCodeGenerator-style.css'


const QRCodeGenerator = () => {

  const [qrText, setQrText] = useState('');
  const [imgBoxClass, setImgBoxClass] = useState('');

  const generateQR = () => {
    if (qrText.length > 0) {
      setImgBoxClass('show-img');
    } else {
      setImgBoxClass('');
      setQrText('error');

      setTimeout(() => {
        setQrText('');
      }, 1000);
    }
  };

  const qrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrText}`;


  return (
    <>
      <div className="container">
        <div className="qrcode">
          <h2>QR Code Generator</h2>
          <p>Enter your text or url</p> 
          <input
            type="text"
            id="qrText"
            value={qrText}
            onChange={(e) => setQrText(e.target.value)}
            className={qrText === 'error' ? 'error' : ''}
            placeholder="Enter text or URL"
          />
          <div id="imgBox" className={imgBoxClass}>
            {qrText.length > 0 && <img id="qrImage" src={qrImageUrl} alt="QR Code" />}
          </div>
          
          <button onClick={generateQR}>Generate QR</button>
        </div>
      </div>
    </>
  )
}

export default QRCodeGenerator