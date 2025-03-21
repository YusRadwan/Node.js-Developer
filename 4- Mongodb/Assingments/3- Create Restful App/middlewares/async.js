module.exports = (routeHndler) => {
    return async function (req, res, nxt) {
        try {
            // BusinessLogic
                await routeHndler(req, res);
        }
        catch (err) {
            nxt(err);
        }
    }
}