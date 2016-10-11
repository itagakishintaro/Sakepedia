export const setAuthStatus = ( isLogin ) => {
  return {
    type: 'SET_AUTH_STATUS',
    isLogin,
  }
}
