var faker = require("faker");

var appRouter =  function(app){
    app.get("/", function(req, res){
        res.status(200).send( {message : "Welcome to our RESTApi project"} );
    });

    app.get("/user", function(req, res){
        
        var data = {
            fistName : faker.name.firstName(),
            lastName : faker.name.lastName(),
            userName : faker.internet.userName(),
            email : faker.internet.email()
        }

        res.status(200).send(data);
    });

    app.get("/users/:num", function(req, res){
        var users = [];
        var num = req.params.num;

        if(isFinite(num) && num>0){
            for(i=0; i<num; i++){
                users.push({
                    fistName : faker.name.firstName(),
                    lastName : faker.name.lastName(),
                    userName : faker.internet.userName(),
                    email : faker.internet.email()
                });
            }

            res.status(200).send(users);
        }

        else{
            res.status(400).send( {message : "Invalid number" } );
        }
    });
}

module.exports = appRouter;