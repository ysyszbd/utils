/**
 * @description: 时间戳转换日期
 * @param {*} time： 时间戳
 * @param {*} format：要转换成的日期格式，默认为yyyy-mm-dd h:m:s
 * @return {*}
 */
export declare function dateFormat(time: any, format?: string): string;
/**
 * @description: 给小于10的数字前做加0处理
 * @param {number} num: 数字
 * @return {*} 字符串
 */
export declare function addZero(num: number): string;
/**
 * @description: 判断是移动端还是PC端
 * @return {*}
 */
export declare function isMobileDevice(): boolean;
/**
 * @description: 判断是Android还是ios
 * @return {*}
 */
export declare function isIOS(): boolean;
/**
 * @description: 判断邮箱是否正确
 * @param {string} email
 * @return {*}
 */
export declare function isEmail(email: string): boolean;
/**
 * @description: 生成随机串
 * @param {number} len:要生成随机数的长度
 * @return {*}
 */
export declare function random_string(len?: number): string;
/**
 * 获取url固定参数
 * @param {要获取的参数} name
 * @param {url链接} url eg:https://xxxx?a=1
 */
export declare function getUrlParamItem(name: string, url?: string): string | null;
/**
 * @description: 判断是否是国内手机号
 * @param {string} mobile
 * @return {*} true / false
 */
export declare function isPhoneNum(mobile: string): boolean;
