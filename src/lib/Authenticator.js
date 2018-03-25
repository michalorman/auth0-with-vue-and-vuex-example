import auth0 from 'auth0-js'

export default class Authenticator {
  constructor () {
    this.login = this.login.bind(this)

    this.auth0 = new auth0.WebAuth({
      domain: 'morman.eu.auth0.com',
      clientID: '1MCLYhFIRq5V1KvDvoXM7Iaet9cN5hPM',
      redirectUri: 'http://localhost:8080/auth',
      audience: 'https://morman.eu.auth0.com/userinfo',
      responseType: 'token id_token',
      scope: 'openid'
    })
  }

  login () {
    this.auth0.authorize()
  }
}