const getPageMember = (req, res) => {
    return res.render('member/index.ejs');
}

module.exports = {
    getPageMember,
}