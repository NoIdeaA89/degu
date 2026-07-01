import dotenv from 'dotenv';
dotenv.config();
require("./config/env")
import { env } from './config/env';
import express from 'express';
import cors from 'cors';
import sesionRoutes from './routes/sesion.routes';
import asistenciaRoutes from './routes/asistencia.routes';
import authRoutes from './routes/auth.routes';
import estudianteRoutes from './routes/estudiante.routes';
import adminRoutes from './routes/admin.routes';
import { middlewareVerificarAdmin } from './middlewares/auth.middleware';
import metricaRoutes from './routes/metrica.routes';

const app = express();
const port = env.PORT || 3000;

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || /^http:\/\/(localhost|127\.0\.0\.1|192\.168\.\d+\.\d+|10\.\d+\.\d+\.\d+):\d+$/.test(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Bloqueado por CORS: Origen no permitido'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

app.use('/api/sesion', sesionRoutes);
app.use('/api/asistencia', asistenciaRoutes)
app.use('/api/auth', authRoutes);
app.use('/api/estudiantes', estudianteRoutes);
app.use('/api/admin', middlewareVerificarAdmin, adminRoutes);
app.use('/api/metricas', metricaRoutes);

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`🚀 Servidor unificado listo en http://localhost:${port}`);
  });
}

export default app;