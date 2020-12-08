
const LOGIN_ERROR_TEXT = "#flash-messages"
const LOGIN_SUCCESS_TEXT = '#flash-messages'
const USERNAME_TEXT_BOX = '#username';
const PASSWORD_TEXT_BOX = '#password';
const LOGIN_BUTTON = '.radius';


class PageObject {
    // 1. Input username and Password.

    inputUsername(username) {
        $(USERNAME_TEXT_BOX).setValue(username);
        return this;

    }

    inputPassWord(password) {
        $(PASSWORD_TEXT_BOX).setValue(password);
        return this;
    }

    clickOnLoginButton() {
        $(LOGIN_BUTTON).click();
        return this;
    };

    // 2. Get Error Text when Login Fail.
    getErrorLoginTextFail() {
        $(LOGIN_ERROR_TEXT).waitForDisplayed(3000);
        let loginErrorText = $(LOGIN_ERROR_TEXT).getText();
        return loginErrorText;
    }

    // 3. Verify Error login Text.
    verifyErrorLoginText() {
        let currentLoginErr = this.getErrorLoginTextFail();
        let expectLoginErr = 'zzzzzzzzzzzzzz';
        const ERR_LOGIN_TEXT = 'Wrong!';
        expect(currentLoginErr).to.equal(expectLoginErr, ERR_LOGIN_TEXT);

    }
}
module.exports = new PageObject();
