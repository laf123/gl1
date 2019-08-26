const Koa =require("koa");
let app=new Koa();
const route=require("Koa-route");
const koaBody=require("koa-body");
const cors=require("koa2-cors");

app.use(cors({
    origin: "*", 
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization', 'Date'],
    maxAge: 100,
    credentials: true,
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept', 'X-Custom-Header', 'anonymous'],
}));
app.use(koaBody())
app.use(route.post("/reg",require('./route/reg.js')))
app.use(route.post("/login",require("./route/login.js")))
app.use(route.get("/goodsList",require("./route/goodsList.js")))
app.use(route.get("/goods",require("./route/detail.js")))
app.use(route.post("/orderlistAdd",require("./route/orderlistAdd.js")))
app.use(route.post("/orderlistGet",require("./route/orderlistGet.js")))
app.use(route.post("/orderListDel",require("./route/orderListDel.js")))
app.listen(8000)