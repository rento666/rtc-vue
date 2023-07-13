import CryptoJS from 'crypto-js';

export default {
    //随机生成指定数量的16进制key
    generatekey(num) {
        let library = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let key = "";
        for (var i = 0; i < num; i++) {
            let randomPoz = Math.floor(Math.random() * library.length);
            key += library.substring(randomPoz, randomPoz + 1);
        }
        return key;
    },

    //加密
    encrypt(word, keyStr) {
        keyStr = keyStr ? keyStr : 'zaq12lide34rfv49'; //判断是否存在ksy，不存在就用定义好的key
        const key = CryptoJS.enc.Utf8.parse(keyStr);
        const srcs = CryptoJS.enc.Utf8.parse(word);
        const iv = CryptoJS.enc.Utf8.parse(keyStr);
        const encrypted = CryptoJS.AES.encrypt(srcs, key, {mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7,iv});
        return encrypted.toString();
    },
    //解密
    decrypt(word, keyStr) {
        keyStr = keyStr ? keyStr : 'zaq12lide34rfv49';
        const key = CryptoJS.enc.Utf8.parse(keyStr);
        const iv = CryptoJS.enc.Utf8.parse(keyStr)
        const decrypt = CryptoJS.AES.decrypt(word, key, {mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7,iv});
        return CryptoJS.enc.Utf8.stringify(decrypt).toString();
    }

}