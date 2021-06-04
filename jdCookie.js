/*
此文件为Node.js专用。其他用户请忽略
 */
//此处填写京东账号cookie。
//注：github action用户cookie填写到Settings-Secrets里面，新增JD_COOKIE，多个账号的cookie使用`&`隔开或者换行
let CookieJDs = [
  'pt_key=AAJgpMVMADBVVlbPeEmSCUtfYtU21Kvl40ryzdnEPQXgY88qoCX4J1nz-4G04JdJ-jvkqK7YRqQ;pt_pin=esiwsh;',//账号一ck,例:pt_key=XXX;pt_pin=XXX;
  'pt_key=AAJgpb41ADBmDhTR9gxR0_vTnvJSAaDvlH45p_EN2VXJghbKRcA8bsJe41PHzgGqJ6js-nwt3M8;pt_pin=wantn82;',//账号二ck,例:pt_key=XXX;pt_pin=XXX;如有更多,依次类推
  'pt_key=AAJgpcONADAtj3oGTsZVFFj0JH3DSFiePZg1T78CuAe1ElhU9eKVTJeVk7DgrudpHUwanKS3fKU;pt_pin=jd_4f8bfda318b61;',
  'pt_key=AAJgpcR3ADBr3TF68PS2M5ReweJrKR7yYfbVZjlscOCju-bfFgmU3gaGfX3NpMRk_GBkNwqf3jw; pt_pin=vivianzhuzhen;',
  'pt_key=AAJgpcwkADDP0WkPVG9bk4YIPe-r7GBc6Dl0w4deYLeqGszM1CsO6w_0lMBl3UNRVjvxJJaax28; pt_pin=%E9%AA%8F%E9%AA%8F%E7%8C%AA%E7%8C%AA;',
  'pt_key=AAJgpdijADCQ5quQpRE12zpOdrzgA30lXbzJGgpk5JNJRR6CIf2IcTg9JJvGwYLvwd3YR0YH484; pt_pin=jd_40f8e5665fc75;',
]
// 判断github action里面是否有京东ck
if (process.env.JD_COOKIE) {
  if (process.env.JD_COOKIE.indexOf('&') > -1) {
    console.log(`您的cookie选择的是用&隔开\n`)
    CookieJDs = process.env.JD_COOKIE.split('&');
  } else if (process.env.JD_COOKIE.indexOf('\n') > -1) {
    console.log(`您的cookie选择的是用换行隔开\n`)
    CookieJDs = process.env.JD_COOKIE.split('\n');
  } else {
    CookieJDs = [process.env.JD_COOKIE];
  }
}
CookieJDs = [...new Set(CookieJDs.filter(item => item !== "" && item !== null && item !== undefined))]
console.log(`\n====================共有${CookieJDs.length}个京东账号Cookie=========\n`);
console.log(`==================脚本执行- 北京时间(UTC+8)：${new Date(new Date().getTime() + new Date().getTimezoneOffset()*60*1000 + 8*60*60*1000).toLocaleString()}=====================\n`)
for (let i = 0; i < CookieJDs.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['CookieJD' + index] = CookieJDs[i].trim();
}
