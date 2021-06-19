/*
此文件为Node.js专用。其他用户请忽略
 */
//此处填写京东账号cookie。
//注：github action用户cookie填写到Settings-Secrets里面，新增JD_COOKIE，多个账号的cookie使用`&`隔开或者换行
let CookieJDs = [
  'pt_key=AAJgzUY8ADB5FSVgmMnGdak9DIM0uJw1xuYjhB_wGO-6YW4CrjPMv-PqaSznq56Mo-JWAQThTJg;pt_pin=esiwsh;',//账号一ck,例:pt_key=XXX;pt_pin=XXX;
  'pt_key=AAJgzVKxADBqW8zS9ttL4gZEVpEceg6RfglXk2DlOIccAVFUysu4avA0Wpm7xuWaCdrMCrnLqbw;pt_pin=wantn82;',//账号二ck,例:pt_key=XXX;pt_pin=XXX;如有更多,依次类推
  'pt_key=AAJgzVQpADC7o71iHxqaHczKXwC2ZnuvlJCTTjbE9dDQ__0ddTqnRwhZQc8ylS6g-vxO3XlyTH4;pt_pin=jd_4f8bfda318b61;',
  'pt_key=AAJgzVSxADDL-1mtydq29uJSMrYnPJWrO0M7PeIYoiAaCbK0hLWIdzn_ad5xEX2CJh7PABVxi5c; pt_pin=vivianzhuzhen;',
  'pt_key=AAJgzVVMADB31rnuxUhb43oma3Ms4DWMQViXtpR67IE8RLvCRamW9fbwaUNDHV7D4k4A5W3l-QM; pt_pin=%E9%AA%8F%E9%AA%8F%E7%8C%AA%E7%8C%AA;',
  'pt_key=AAJgzVW6ADD2ItRquioGnFoG_OJuBeTcRCdRjwJrGHhd-rXCR5wJrGs770pumJk4NmmqZrV1bP0; pt_pin=jd_40f8e5665fc75;',
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
