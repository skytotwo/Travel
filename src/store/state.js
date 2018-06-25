let defaultCity = '广州'
try {  // try catch的原因是如果浏览器不支持localStorage的话执行就会报错
  if(localStorage.city) {  // 先判断是否存在
    defaultCity = localStorage.city
  }
} catch (e) {}

export default {
  city: defaultCity
}