/*
此文件为Node.js专用。其他用户请忽略
 */
//此处填写京东账号cookie。
//注：github action用户cookie填写到Settings-Secrets里面，新增JD_COOKIE，多个账号的cookie使用`&`隔开或者换行
let CookieJDs = [
  'pt_key=AAJg9h47ADDgV4GrMeuOaqk9vAoeXjcpWTAOsbOPjd46c3ESF_z2Chyvdnmp5k63OgSeGnT47Lk; pt_pin=esiwsh;',
'pt_key=AAJg9iDSADBH7JxG2Gkj3qw8L43iZmoOlvef2kOVDEWV3bO8JrO3se3_eTUAqOYGFex6A-Gidlo; pt_pin=wantn82;',
'pt_key=AAJg9iQTADBkhlUHcHAIWUHaboaXSmQsxSLnhS8K0tbw8QwArtUxqeuNYT8YECxOaMuazd-Dhag; pt_pin=jd_4f8bfda318b61;',
'pt_key=AAJg9kSaADAlnRrshYSqP_4dvPyzGwH0aqjrPuaHAq9-KFBt2KBKhXI69GbZKf8Z3Aj7zILYNuI; pt_pin=vivianzhuzhen;',
'pt_key=AAJg9kVKADCEQQCAv9QE_uVUmpJTHhIUjWla1hfaphSd-jqsAcaXm_tEsgpl6NHm_hujVqBI3PE; pt_pin=%E9%AA%8F%E9%AA%8F%E7%8C%AA%E7%8C%AA;',
'pt_key=AAJg9rb5ADBdsCMoVqpQ06h575fGnaf62k51JSpGhzTrPppxj-Cza3LpTRT9EeY7zVG9IhILqDc; pt_pin=jd_40f8e5665fc75;'
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
