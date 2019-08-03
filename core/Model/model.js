var Food = require('../database.js').Food;

exports.create = function (params, callback) {

    var food = new Food(params);

    food.save(function (err, accountItem) {
        if (err) {
            callback({success: false, error:err});
        }else{
            callback({success: true, account: accountItem});
        }
    });

};
exports.list = function (callback) {
    find({}, callback);
};
function find(query, callback) {
    Food.find(query).exec(function (err, accounts) {
        if (err) {
            callback({success: false, error: err});
        } else {
            callback({success: true, accounts: accounts});
        }
    });
}
exports.deleteById = function (id, callback) {
    Food.remove({foodname: id}, function (err) {
        if (err) {
            callback({success: false, error: err});
        } else {
            callback({success: true});
        }
    });
};
exports.findById = function (id, callback) {
    Food.findOne({foodname: id}, function (err, result) {
        if(err){
            callback({success:false, account:result})
        }else{
            callback({success:true, account:result});
        }
    });
};





