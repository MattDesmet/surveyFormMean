module.exports = function (app) {
  app.get('/', function(request, response){
    response.render('index')
  })
  app.post('/results', function(request,response){
    console.log(request.body);
    // response.send('Successfully submitted')
    // response.json({formData: 'This is the form entry: ' + request.body.name})
    response.render('confirmation', {formEntry: request.body.name})
  })
}
