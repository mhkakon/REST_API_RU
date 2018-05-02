var appRouter =  function(app){
    app.get("/", function(req, res){
        res.status(200).send( {message : "Welcome to our RESTApi project"} );
    });
}

module.exports = appRouter;