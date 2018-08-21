var mongoose =require('mongoose');
// var AutoIncrement =require('mongoose-sequence')(mongoose);

var messageSchema= new mongoose.Schema({
    message: {
        type: String,
        required: false
    },
    palindrome: {
        type: Boolean,
        required: false
    },
    created_at:{
        type:Date,
        default:Date.now
    }

});

var Messages = module.exports = mongoose.model("Messages", messageSchema);

module.exports.saveMessage =function(req,res){
  Messages.create(req.body,function(err){
      if(err)
      {
          return res.status(500).json({
              err:"Message can't be saved"
          })
      }
      else
      {
          return res.status(200).json({
              status:"Message saved"
          })
      }
  });
};

module.exports.getAllMessages = function (req, res) {
    Messages.find({}, function (err, docs) {
        if (err) {
            return res.status(500).json({
                err:err.message || "Some error occurred while retrieving messages"
            })

        }
        else {
            res.send(JSON.stringify(docs));
        }
    });
};

module.exports.getMessageById = function(req,res){
 Messages.findById(req.query.messageid,function(err,message){
    if(err)
    {
        console.log("hgjbnj",err.message);
        return res.status(500).json({
            err:err.message || "Some error occurred while retrieving message"
        })
    }
    else {
        if(!message)
        {
            console.log("nb");
            return res.status(404).json({
                status:"message not found with id"+req.params.messageid
            })
        }
        res.send(JSON.stringify(message));
    }
 });

};

module.exports.deleteMessageById=function(req,res){
Messages.findByIdAndRemove(req.query.messageid,function(err,doc)
{
    if(err)
    {
        return res.status(500).json({
            err:err.message || "Some error occurred while deleting message"
        })
    }
    else
    {
        if(!doc)
        {
            return res.status(404).json({
                status:"message not found with id"+req.params.messageid
            })
        }
        return res.status(200).json({
             status:"Message deleted successfully"
    })
    }
})
};