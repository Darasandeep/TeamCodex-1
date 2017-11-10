var  churchmodel=require('../model/churchmodel');
var express=require('express');
var router=express.Router();
var current;


  router.get('/',function(req,res){
    res.render('index');
  });
  // router.get('/parishioner',function(req,res){
  //   res.render('parishioner');
  // });
  router.get('/admin',function(req,res){
    res.render('admin');
  });
  router.get('/contact',function(req,res){
    res.render('contact');
  });
  router.get('/ministries',function(req,res){
    res.render('ministries');
  });
  router.get('/ministrySurvey',function(req,res){
    res.render('ministrySurvey');
  });
  router.get('/events',function(req,res){
    res.render('events');
  });
  router.get('/ministry',function(req,res){
    res.render('ministry');
  });
  router.get('/skillSurvey',function(req,res){
    res.render('skillSurvey');
  });
  router.get('/ministry2',function(req,res){
    res.render('ministry2');
    });
    router.get('/admin',function(req,res){
      res.render('admin');
});
router.get('/newuser',function(req,res){
  res.render('newuser');
});
router.get('/passwordreset',function(req,res){
  res.render('Passwordreset');
});
router.get('/ministry3',function(req,res){
  res.render('ministry3');
});
router.get('/Min_Lead',function(req,res){
  res.render('Min_Lead');
});
router.get('/Min_Lead',function(req,res){
  res.render('Min_Lead');
});

  router.get('/login', function(req,res){
    res.render('login',{
      errorMessage: ""
    });
  });

  router.post('/login', function(req,res){
    console.log('hello');
  console.log(req.body.uname);
  var username=req.body.uname;
current=username;
  var password=req.body.psw;

    churchmodel.find({username:username, password:password}, function(err,docs){
      if(!docs.length){
    // $("#abc").html("incorrect password");
        res.render('login',{
          errorMessage: "Please Enter Valid Entries"
        });


      } else if(docs.length>0){
        res.redirect('/parishioner');
      }
    });
  });

  router.get('/parishioner', function(req,res){
    console.log('call for parishioner');
    res.render('parishioner',{
      user:current
    });
  });

// var churchdata= new churchmodel({
//   username : "bhavishya",
//   password: "abcd"
// });
//
// churchdata.save(function(err,result){
//   if(err){
//     console.log(err);
//   } else{
//     console.log("success");
//     res.send("sandeep has been added");
//   }
// });


module.exports=router;