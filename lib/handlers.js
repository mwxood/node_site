exports.home = (reg, res) => res.render('home')
exports.about = (req, res) => res.render('about')
exports.notfound = (req, res) => res.render('404')
exports.serverError = (err, req, res, next) => res.render('500')