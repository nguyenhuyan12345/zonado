class LoginController {
    show(req, res, next) {
        res.render('login');
    }
}

module.exports = new LoginController();
