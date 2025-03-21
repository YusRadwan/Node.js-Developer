module.exports = (req, res, nxt) => {
    console.log("Logging ...!!!")
    let h = new Date().getHours();
    console.log(`Time Now is: ${h}`);
    if(h >= 6){
        console.log("Time Out to Logging ...!!!");
    } else {
        console.log("Logging is Done ...!!!");
    }
    nxt();
}