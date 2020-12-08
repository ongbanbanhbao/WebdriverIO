let LoginData = require('./Data');
let LoginSteps = require('./ObjectPage');
let urlPage = 'https://the-internet.herokuapp.com/login';

describe('Login', () => {


    it('Login Fail', () => {
        const LOGIN_FAIL = LoginData.LOGIN_INVALID;
        browser.url(urlPage);

        LoginSteps
        .inputUsername(LOGIN_FAIL.username)
        .inputPassWord(LOGIN_FAIL.password)
        .clickOnLoginButton();

        LoginSteps.verifyErrorLoginText;

        browser.pause(3000);

    });
});