export default {
  changeCity (state, city) {  // 调用mutations执行store的修改
    state.city = city
    try {
      localStorage.city = city  // 将选择的城市存储在本地存储localStorage中
    } catch (e) {}
  }
}