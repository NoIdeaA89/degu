# Manual de Traspaso y Despliegue
## Sistema de Asistencia Galpón Cultural

Este documento detalla el procedimiento para transferir la propiedad de los servicios tecnológicos al cliente final y configurar las credenciales necesarias en los entornos de producción.

### 1. Base de Datos (Supabase)
La base de datos PostgreSQL ya se encuentra estructurada con todas las tablas necesarias para registrar los estudiantes y asistencias. El objetivo aquí es entregar la administración.

**Traspaso de Propiedad:**
1. El administrador actual ingresa al panel del proyecto en Supabase.
2. Se dirige a **Organization Settings** y envía una invitación al correo del cliente con rol de *Owner* o *Administrator*.
3. El cliente acepta la invitación, asumiendo el control de la facturación, los datos y los respaldos.

**Credenciales:** Las URLs y claves necesarias para que el backend se conecte a esta base de datos se utilizarán en el siguiente paso (Railway).

### 2. Backend / API (Railway)
El servidor desarrollado en Express.js maneja la lógica de los códigos QR. Debe transferirse para que el cliente posea el entorno de ejecución.

**Traspaso y Configuración:**
1. Transferir el proyecto actual desde Railway al Workspace del cliente, o bien, pedir al cliente que conecte el repositorio de GitHub en su propia cuenta de Railway.
2. El cliente debe configurar la facturación en su cuenta.
3. Una vez en el panel del proyecto en Railway, ir a la pestaña **Variables** e ingresar las siguientes credenciales de producción:

```env
DATABASE_URL="postgresql://postgres.jnkiydatrwwbzikoxqhs:zHLTd2MS9s0z8TJ3@aws-1-ca-central-1.pooler.supabase.com:5432/postgres?pgbouncer=true"
DIRECT_URL="postgresql://postgres.jnkiydatrwwbzikoxqhs:zHLTd2MS9s0z8TJ3@aws-1-ca-central-1.pooler.supabase.com:5432/postgres"
GOOGLE_CLIENT_ID=""
JWT_SECRET=" "
```

4. Railway realizará un redespliegue automático. Verificar que el proceso sea exitoso en la pestaña **Deployments**.

### 3. Frontend / Cliente Web (Vercel)
La aplicación en React es la interfaz que utilizan los administradores de los talleres. Debe ser propiedad del cliente para el control del dominio.

**Traspaso y Configuración:**
1. En la configuración del proyecto en Vercel, transferir el proyecto al "Team" o cuenta personal del cliente, o importar el repositorio desde la cuenta de GitHub del cliente.
2. Verificar que el dominio personalizado esté gestionado desde la nueva cuenta.
3. En Vercel, ir a **Settings > Environment Variables** y agregar las credenciales que conectan con la API y Google:

```env
VITE_API_URL=https://degu-production-6066.up.railway.app/api
GOOGLE_CLIENT_ID=" "
```

4. Guardar y presionar **Redeploy** para aplicar los cambios.

### 4. Verificación Final
Una vez transferidos todos los servicios y configuradas las variables, se deben realizar pruebas de integración:
* Iniciar sesión mediante Google en la plataforma desplegada en Vercel.
* Escanear un código QR de prueba y corroborar que el backend registre exitosamente la asistencia en Supabase.
