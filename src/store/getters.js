const getters = {
  isLogin: state => state.user.name == '' ? false : true,

}
export default getters
