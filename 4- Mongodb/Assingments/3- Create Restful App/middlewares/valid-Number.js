module.exports = (req, res, nxt, val) => {
    // validation of Parameter
    if(/^[0-9a-zA-Z]{24}$/.test(val)) {
        // Add Param as Prop for req
            req.id = val;
            nxt();
    } else {
        res.status(400).send('ID is Not a Number ...!!!')
    }
}