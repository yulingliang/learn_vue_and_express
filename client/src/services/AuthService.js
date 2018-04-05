import Api from '@/services/Api'

export default {
  register (credentials) {
    console.log('posting to backend', credentials)
    return Api().post('register', credentials)
  }
}
