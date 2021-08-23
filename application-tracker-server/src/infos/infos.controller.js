const infos = require('../data/infos_data');

function list(req,res){
    res.json({data: infos})
}

module.exports = {
    list,
}