import cors from 'cors';

const corsOptions = {
    origin: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true,
};

const corsMiddleware = cors(corsOptions);
export default corsMiddleware;
