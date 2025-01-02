import cors from 'cors';

const corsOptions = {
    origin: 'https://shop-sphere-2n6k.vercel.app/',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true,
};

const corsMiddleware = cors(corsOptions);
export default corsMiddleware;