var d = require('./domains')
/**
 * @template {d} dom
 * @param {dom} domain *.skola24.se
 * Note that not all domains will work with the timetable. The list is all of the (sub)domains from skola24.
 */
async function skola24Client(domain){
    var skola24Client = {
        domain,
    }

    return skola24Client;
}

skola24Client.prototype = {

}

skola24Client('4ansgymnasium')
.then(client => {
    console.log(Object.keys(client));
})