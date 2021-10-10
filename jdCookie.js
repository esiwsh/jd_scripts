/*
此文件为Node.js专用。其他用户请忽略
 */
//此处填写京东账号cookie。
//注：github action用户cookie填写到Settings-Secrets里面，新增JD_COOKIE，多个账号的cookie使用`&`隔开或者换行
let CookieJDs = [
  'pt_key=AAJhYvnvADBa7bEopCaMAQsEFmW4F3DJhSxZzbkOQ_DyHrAf6Lr77DXZY1vcEU95kOXz8AWzjhE; pt_pin=esiwsh;',
'pt_key=AAJhYvuOADAC3iDTENBp9wy4sDcpYYapwkwkqW_jCkSoiA6-L2J5GWVDR3ydXirkbGUzG_bmZ0U; pt_pin=wantn82;',
'pt_key=AAJhYvx1ADC4GaVNWxIDsQTHNFZpk50E6VZ-4h2VZYsqigmfD-8jt8hmdQJNui2tjfiJMKWu5xQ; pt_pin=jd_4f8bfda318b61;',
'pt_key=AAJhYv0IADC8Cv-oXfUW5-u_VpTKSPJLjs-c8_tko3q5q1ljEhSk93BQQcOqIaLym7KORN0LkKY; pt_pin=vivianzhuzhen;',
'pt_key=AAJhYv2nADC2qaTVJE4eBftHTBBgACwJ4aG8Z_NCY2vwdLxJ_Yb9t9ZIj2zRSxnuaL8sygB9qWg; pt_pin=%E9%AA%8F%E9%AA%8F%E7%8C%AA%E7%8C%AA;',
'pt_key=AAJhYv5OADAty7OFE3WzbPPNKr-dK6v2dWM7qb2vHzp9Z7PtKurggDTmu9a8Jg_27cPcENVBUWE; pt_pin=jd_40f8e5665fc75;'
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
