//存token
export const setToken = (token) => {
  localStorage.setItem('TOKEN',token);
}
//取token
export const getToken = () => {
  return localStorage.getItem('TOKEN');
}
//清除token
export const removeToken = () => {
  localStorage.removeItem('TOKEN');
}
//存主题
export const setTheme = (theme) => {
  localStorage.setItem('THEME',theme)
}
//取主题
export const getTheme = () => {
  return localStorage.getItem('THEME')
}