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
const port = process.env.PORT || 3000;

const dominiosPermitidos = [
  'http://localhost:3000',      // Para desarrollo local
  'http://localhost:5173',      // (Si usas Vite localmente)
  'https://degu-hazel.vercel.app/'
];

app.use(cors({
  origin: function (origin, callback) {
    // Permitir peticiones sin origen (como Postman) o si el origen está en la lista
    if (!origin || dominiosPermitidos.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Bloqueado por CORS: Origen no permitido'));
    }
  },
  credentials: true, // Esto es vital para que las cookies o el JWT en LocalStorage funcionen bien entre dominios
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