// var url=require("url");
// var parsedURL=url.parse("http://www.example.com/ [CA]profile?name=barry");
// console.log(parsedURL.protocol);
// console.log(parsedURL.host);
// console.log(parsedURL.query);

// var Mustache=require("mustache");
// var result=Mustache.render("Hi,{{first}},{{last}}!", { first:"shahmeer", last:"rajput"});

// console.log(result);
    


// var checkprime;
// var flag=true;
// function prime(checkprime)
// {
//     for(var i=2;i<=checkprime.length;i++)
//     {
//         if(checkprime%i==1)
//         {
//           flag=false;
//         }
//         else
//         {
//             flag=true;
//         }
//     }
//     if(flag==true)
//     {
//         console.log(" not prime")
//     }
//     else
//     {
//         console.log("prime");
//     }
// }

//server 

var express=require("express");
var http=require("http");
var app=express();

app.use(function(request, response, next) { 
    console.log("In comes a " + request.method + " to " + request.url);
    next();
    });
    app.use(function(request, response, next) {
    var minute = (new Date()).getMinutes();
    if ((minute % 2) === 1) {
    next(); 
    } else {
    response.statusCode = 403; 
    response.end("Not authorized."); 
    }
    });
    app.use(function(request, response) {
    response.end('Secret info: the password is "swordfish"!'); 
    });
    
http.createServer(app).listen(3000);




