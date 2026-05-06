import express from 'express';
import cors from 'cors';
import sesionRoutes from './routes/sesion.routes';
import asistenciaRoutes from './routes/asistencia.routes';
import authRoutes from './routes/auth.routes';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({
  origin: 'http://localhost:5173', 
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// 3. Montaje de rutas
// Ahora el endpoint completo será: http://localhost:3000/api/sesiones/generar
app.use('/api/sesiones', sesionRoutes);
app.use('/api/asistencia', asistenciaRoutes)
app.use('/api/auth', authRoutes);

// 4. Ruta de salud (Útil para probar si el contenedor responde)
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

// 5. Arranque del servidor
if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`🚀 Servidor unificado listo en http://localhost:${port}`);
  });
}

export default app;