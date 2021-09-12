/*
此文件为Node.js专用。其他用户请忽略
 */
//此处填写京东账号cookie。
//注：github action用户cookie填写到Settings-Secrets里面，新增JD_COOKIE，多个账号的cookie使用`&`隔开或者换行
let CookieJDs = [
  'pt_key=AAJhPZwVADC8VVR8YU_wDQi20d6DQKmRJKa98CNJN0s2lmBWzLiXFty3GarElioGgWUNm6n2bow; pt_pin=esiwsh;',
'pt_key=AAJhPZzNADAee3XynEHRF3arQZlh3t26vL1iVgDvY7_x6b5K935J2PkdAhIcKUJk3zJrUP7S3r8; pt_pin=wantn82;',
'pt_key=AAJhPZ76ADB6hcLQIi0yyS1r89Xg6WFQEs6hbQ2w-9C8HnALaCPy02x9UG2tiRmyhoVaa3iI64s; pt_pin=jd_4f8bfda318b61;',
'pt_key=AAJhPZ4MADC7w4vqn03fCbfuCO8TKSjjCdF0O2Na2THy8VcKUvWakloTPh-UwngpuALsL_WUUMQ; pt_pin=vivianzhuzhen;',
'pt_key=AAJhPaAOADDTvYU-qcGh8jYWQxFmR62ls2Blc6I3TaQNKfSqeyOPfe5JH9AeKrYLDYSNa-0eb7Y; pt_pin=%E9%AA%8F%E9%AA%8F%E7%8C%AA%E7%8C%AA;',
'pt_key=AAJhPaFqADCpjmMD81OfXa4320n_OQTVEWY_3zGFyWDfgTtxQS7qQQzGcjs-dBjsE8ZTgur_efQ; pt_pin=jd_40f8e5665fc75;'
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
