import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import connect from './database/conn.js'
import router from './router/route.js'
import session from 'express-session'
import CorsConfig from './cors.config.js'
import AuthRouter from './router/authRoutes.js'
import ENV from './config.js'
import * as ServerStatus from './middleware/helper.js'
const app = express()
import './middleware/passport.js'
import passport from 'passport'
// middlewares
app.use(
    session({
        name: "session.hm.courses",
        secret: ENV.SESSION_SECRET_KEY,
        resave: false,
        saveUninitialized: false,
        cookie: {
            secure: false,
            maxAge: 3 * 30 * 24 * 60 * 60 * 1000, // 3 months in milliseconds
        },
    })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(express.json())
app.use(cors({
    origin: CorsConfig,
    credentials: true,
}));
app.use(morgan('tiny'))
app.disable('x-powered-by') //less hackers know about our stack

const port = ENV.PORT;

// HTTP GET Request
app.get('/', ServerStatus.getServerLoadInfo , (req, res) => {
    const uptime =  ServerStatus.calculateUptime();
    const serverLoadInfo = req.serverLoadInfo;
    res.status(201).send({
        success: true,
        message: 'Grocerify Backend <>_<>',
        dateTime: new Date().toLocaleString(),
        connectedClient: ENV.CLIENT_BASE_URL,
        systemStatus:{
            uptime: `${uptime}s`,
            cpuLoad: serverLoadInfo.cpuLoad,
            memoryUsage: serverLoadInfo.memoryUsage,
        }
    })
})

// api routes
app.use('/api', router)
app.use('/auth', AuthRouter)

app.use((req, res, next) => {
    res.status(404).send('<div style="position:absolute; left:50%; top:50%; transform: translate(-50%, -50%);"><img src="https://c.tenor.com/1-qDMRlzUn4AAAAd/tenor.gif"></img><h1 style="color:white; width:100%; text-align:center; position:absolute; bottom:1vh;">Hum pe to haie noo</h1></div>');
});

// start server only when we have valid connection
connect().then(()=>{
    try{
        app.listen(port,()=>{
            console.log(`Server connected to  http://localhost:${port}`)
        })
    } catch(error){
        console.log("Can\'t connect to the server");
    }
}).catch(error=>{
    console.log('Invalid database connection!');
})