const mongoose = require('mongoose')

const Schema = mongoose.Schema

const notice = new Schema({
    author: {
      type: mongoose.Schema.Types.ObjectId, ref: 'User' ,
      required: true
    },
    date: {
      type: String,
      required: true,

    },
    time: {
      type: String,
      required: true
    },
    note: {
      type: String,
      required: true
    }
  });

notice.statics.fetchAll = async function(){
    return await this.find();
}

notice.statics.new = async function(author,date,time,note){
try{
    const notice = await this.create({ author, date, time, note})
    return notice;
}catch(err){
    throw new Error(err.message,': there was an issue creating this notice, please try again')
}

}

module.exports = mongoose.model('Notice', notice)