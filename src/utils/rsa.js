import {JSEncrypt} from "jsencrypt";
/* * 加密（需要先加载/aes.min.js文件）*/
const pk = `-----BEGIN RSA PUBLIC KEY-----
MIIBCgKCAQEA9JZG9Aub2kzm1eN/p8LlJ81opij9qsaCoXZsY595rsDZE99l+m0w
NnuO/hkupIwEPBi833K0K/ZmXmahvF5JIv1xmsn9nIAqO+mR245Yj/Fc/ktjrTsn
Fn1gWVN9YShHJWTC+BxCJwya9spot9W8BRMeU8zhij4HQM2J0bciu0D/C4vh3lzf
/bry8EkLKn/xuZcmWlEql2npXMRZ/py4Xg/V2Z5bA/XbIIFmu2PCK1o9QLw6uO1k
o/kbW1kXkPLZHir/UmQ58/EkgQOBHQo3e5JOnI8boP6sbAdTrghfWEJiPpejyNb2
GekstSD+kkIIEFsazwaeJgu3Qdo2oSIA0QIDAQAB
-----END RSA PUBLIC KEY-----`
//  publicKey 这个是公钥   后端生成    前端只能纯公钥
export const RSAencrypt = (pas,publicKey) =>{
  //实例化jsEncrypt对象
  let jse = new JSEncrypt();
  publicKey = publicKey ? publicKey : pk
  //设置公钥
  jse.setPublicKey(publicKey);
  return jse.encrypt(pas);
}
