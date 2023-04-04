export const oktaConfig = {
    clientId: '0oa8wekxtxk1ZhuT35d7',
    issuer: 'https://dev-04298973.okta.com/oauth2/default',
    redirectUri: 'http://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true,
}