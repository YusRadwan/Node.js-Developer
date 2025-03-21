const validator = require("../util/UsersValid");

module.exports = (req, res, nxt) => {
    let valid = validator(req.body);
    // Check
        if(valid) {
            req.valid = 1;
            nxt();
        } else {
            res.status(403).send("forbidden Command for User ...!!!")
        }
}