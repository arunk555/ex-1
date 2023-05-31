const app = require("./app");
const {PORT} = process.env;
const API_PORT = PORT || 3000;

app.listen(API_PORT, function(){
 console.log("Express server is listening on the PORT %d in %s mode.", this.address().port, app.settings.env)
});