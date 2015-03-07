var express = require('express'),
app     = express(),
bodyParser=require('body-parser'),
	mongoose=require('mongoose'),
meetupsController=require('./server/controllers/meetups-controller');
mongoose.connect('mongodb://abc:abc@ds047008.mongolab.com:47008/db-mean');
app.use(bodyParser());
app.get('/',function(req,res){
    res.sendFile(__dirname+'/client/views/index.html');
});
app.use('/js',express.static(__dirname+'/client/js'));
app.get('/api/meetups',meetupsController.list);
app.post('/api/meetups',meetupsController.create);
app.listen(process.env.PORT || 5000); 
console.log("Server running on port no. 5000"); 