app.get("/restaurants",(req,resp)=>{resp.json("");})

function name(a,y){
    y();
}

name("mamta", ()=>{console.log("asdaf")})   //call back