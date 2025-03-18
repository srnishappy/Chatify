import express from 'express';
import authRoutes from './routes/auth.js';

const app = express();

app.use('api/auth', authRoutes);
app.listen(5000, () => {
  console.log('server is running on port 5000');
});
