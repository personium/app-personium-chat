// Login
function(request){
    var reqBody = request.input.readAll();
    var res = _p.as('client').cell().box().odata('odata').entitySet('event').create(JSON.parse(reqBody));
    // 
    return {
        status: 200,
        headers: {"Content-Type":"application/json"},
        body: [JSON.stringify(res)]
    };
}
