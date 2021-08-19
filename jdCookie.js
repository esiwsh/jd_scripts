/*
此文件为Node.js专用。其他用户请忽略
 */
//此处填写京东账号cookie。
//注：github action用户cookie填写到Settings-Secrets里面，新增JD_COOKIE，多个账号的cookie使用`&`隔开或者换行
let CookieJDs = [
  'pt_key=AAJhHmFyADC9iOKQtvwKh1xUOi_kQgl9Rgg1IQahcQqoE0BraMHwCWsH6v6R4ErEKRtAuOfDXXw; pt_pin=esiwsh;',
'pt_key=AAJhHmHrADA-nUqItirEEQlihMHzAGAMo7sZAXhePSCPoyIihbyTSyFJqCBNmRbo1BeWdSPZz8M; pt_pin=wantn82;',
'pt_key=AAJhHmJgADBDRjJDqujBcUjTURUahDiITV0KO5m0uPDrM9pOUrBsAA8KQSlaQVKPcKMtTCxUZjc; pt_pin=jd_4f8bfda318b61;',
'pt_key=AAJhHmMyADCyGjTJXfqRGi6dFfrhuvfpTSdLDSlGPXfNpdUKGeKnSsjSjQOkT2MQXJdaX068qsE; pt_pin=vivianzhuzhen;',
'pt_key=AAJhHmOZADBMLZV_-Iinq9xevGS9MlZ1tRVXXbZwu11102M-hdaS2hDgzz2q7iAAX-DszazvGwQ; pt_pin=%E9%AA%8F%E9%AA%8F%E7%8C%AA%E7%8C%AA;',
'pt_key=AAJhHmTEADDb8VyOYY705mjP1RbYiNji68a-6eFL47t-2capZpFEqdzIWX0Bu_IpoLIcnRpnH40; pt_pin=jd_40f8e5665fc75;'
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
