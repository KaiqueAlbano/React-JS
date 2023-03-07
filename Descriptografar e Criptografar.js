var CryptoJS = require("crypto-js");

export default {
   
    //criptografa um conteudo
     encrypt(conteudo) {
        let string = JSON.stringify(conteudo);
        let hash = "e475e2a9aaf7739b22989f6f5d33dae9";
        return CryptoJS.AES.encrypt(string, hash).toString();
    },

     requestEncryptAES(conteudo) {
        var key = CryptoJS.enc.Utf8.parse('e475e2a9aaf7739b');
        var iv = CryptoJS.enc.Utf8.parse('e475e2a9aaf7739b');
        var encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(JSON.stringify(conteudo)), key, {
            keySize: 128 / 8,
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });
        return encrypted.toString();
    },

    requestDecryptAES(conteudo) {
        var key = CryptoJS.enc.Utf8.parse('e475e2a9aaf7739b');
        var iv = CryptoJS.enc.Utf8.parse('e475e2a9aaf7739b');
        var decrypted = CryptoJS.AES.decrypt(conteudo, key, {
            keySize: 128 / 8,
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });
        return JSON.parse(decrypted.toString(CryptoJS.enc.Utf8));
    },

    //descriptografa um objeto
    decrypt(conteudo) {
        try {
            let hash = "e475e2a9aaf7739b22989f6f5d33dae9";
            let bytes = CryptoJS.AES.decrypt(conteudo, hash);
            return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
        } catch(ex) {
            console.log(ex)
        }
    },
 
 } 
 
 
 