const getPageParity = (req, res) => {
    return res.render('parity/index.ejs');
}

module.exports = {
    getPageParity,
}