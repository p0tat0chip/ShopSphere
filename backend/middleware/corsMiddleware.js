import cors from 'cors';

const corsOptions = {
    origin: 'https://shop-sphere-auu2-git-testcors-mynk8s-projects.vercel.app', 
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true,
};

const corsMiddleware = cors(corsOptions);
export default corsMiddleware
