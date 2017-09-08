var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ContactSchema = new Schema({
    first_name: {
        type:String,
        require:true
    },
    last_name: {
        type:String,
        require:true

    },
    address: String,
    company: String,
    created:{
        type: Date
    },
    updated: {
        type: Date,
        default: Date.now
    }
});

/***************************************************************************************************
 *                                      Virtuals
 ***************************************************************************************************/

/***************************************************************************************************
 *                                      Pre Save Hooks
 ***************************************************************************************************/
ContactSchema.pre('save' , function(next){
    now = new Date();
    this.updated = now;
    if(!this.created) {
        this.created = now;
    }
    next();
});

/***************************************************************************************************
 *                                      Methods
 ***************************************************************************************************/
ContactSchema.statics.load = function(id,cb) {
    this.findOne({
        _id:id
    }).exec(cb);
};

module.exports = mongoose.model('Contact', ContactSchema);