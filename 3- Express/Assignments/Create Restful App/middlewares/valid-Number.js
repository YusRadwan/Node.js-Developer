module.exports = (req, res, nxt, val) => {
    // validation of Parameter
    if(Number(val)) {
        // Add Param as Prop for req
        req.id = val;
        nxt()
    } else {
        res.send('ID is Not a Number ...!!!')
    }
}