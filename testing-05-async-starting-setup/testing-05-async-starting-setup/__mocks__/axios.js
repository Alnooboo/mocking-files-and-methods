//mocking a third library's function
//and this will work outomatically
const get=url=>{
    return Promise.resolve({data:{title:"delectus aut autem"}});
};

exports.get=get;