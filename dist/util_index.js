/**
 * @description: 时间戳转换日期
 * @param {*} time： 时间戳
 * @param {*} format：要转换成的日期格式，默认为yyyy-mm-dd h:m:s
 * @return {*}
 */
export function dateFormat(time, format = 'yyyy-mm-dd h:m:s') {
    let timestamp = time.length === 10 ? time * 1000 : time, date = new Date(timestamp), undefinedArray, dateObj = new Map(undefinedArray);
    dateObj.set('yyyy', date.getFullYear());
    dateObj.set('mm', date.getMonth() + 1);
    dateObj.set('dd', date.getDate());
    dateObj.set('h', date.getHours());
    dateObj.set('m', date.getMinutes());
    dateObj.set('s', date.getSeconds());
    for (let [key, value] of dateObj.entries()) {
        format = format.replace(key, addZero(value));
    }
    return format;
}
/**
 * @description: 给小于10的数字前做加0处理
 * @param {number} num: 数字
 * @return {*} 字符串
 */
export function addZero(num) {
    let number = num < 10 ? '0' + num : num;
    return number.toString();
}
/**
 * @description: 判断是移动端还是PC端
 * @return {*}
 */
export function isMobileDevice() {
    if (window.navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)) {
        return true; // 移动端
    }
    else {
        return false; // PC端
    }
}
/**
 * @description: 判断是Android还是ios
 * @return {*}
 */
export function isIOS() {
    let u = navigator.userAgent, isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //IOS终端
    return isIOS;
}
/**
 * @description: 判断邮箱是否正确
 * @param {string} email
 * @return {*}
 */
export function isEmail(email) {
    const reg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
    return reg.test(email);
}
/**
 * @description: 生成随机串
 * @param {number} len:要生成随机数的长度
 * @return {*}
 */
export function random_string(len = 32) {
    let chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678', maxPos = chars.length, pwd = '';
    for (let i = 0; i < len; i++) {
        pwd += chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return pwd;
}
/**
 * 获取url固定参数
 * @param {要获取的参数} name
 * @param {url链接} url eg:https://xxxx?a=1
 */
export function getUrlParamItem(name, url = location.href) {
    let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i'), r = url.substring(url.indexOf('?')).substring(1).match(reg);
    if (r != null)
        return decodeURIComponent(decodeURI(r[2]));
    return null;
}
/**
 * @description: 判断是否是国内手机号
 * @param {string} mobile
 * @return {*} true / false
 */
export function isPhoneNum(mobile) {
    const reg = /^(13[0-9]|14[0-9]|15[0-9]|16[0-9]|17[0-9]|18[0-9]|19[0-9])\d{8}$/;
    return reg.test(mobile);
}
