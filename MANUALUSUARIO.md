# Proyecto Degú

# Manual de Usuario: Gestión de Asistencia para Galpón Cultural

## Aplicación web

Al iniciar sesión en la aplicación web como administrador, se despliega un panel con distintas estadísticas sobre los talleres del semestre del Galpón Cultural. Además, se muestra una barra de navegación con las siguientes opciones:

- Inicio
- Horario
- Estudiantes
- Talleres
- Panel de Administrador

---

# Inicio

## Métricas

### Asistencias totales
Corresponde a la cantidad de veces que se registró un estudiante como presente a través del formulario.

### Estudiantes únicos
Corresponde a la cantidad de estudiantes inscritos en los talleres durante el semestre.

### Satisfacción promedio
Corresponde al promedio de las evaluaciones realizadas por los estudiantes en todos los talleres.

### Talleres con más asistencia
Muestra los talleres con mayor asistencia durante el semestre.

### Talleres con menos asistencia
Muestra los talleres con menor asistencia durante el semestre.

### Mejores evaluaciones
Muestra los talleres mejor evaluados durante el semestre.

### Talleres con evaluaciones bajas
Muestra los talleres con las evaluaciones más bajas del semestre.

## Horario del semestre

Debajo de las métricas se despliega un horario donde se pueden visualizar todos los talleres organizados según sus bloques horarios durante el semestre.

---

# Horario

## Asistencia

En esta pestaña, al seleccionar un taller se abre la lista de asistencia con todos los estudiantes inscritos.

Desde aquí también es posible:

- Inscribir estudiantes que ya estén registrados en la plataforma.
- Marcar a todos como **Presentes**.
- Marcar a todos como **Ausentes**.
- Registrar la asistencia individualmente.

Además, existe la opción **Generar QR**, que permite a los estudiantes registrar su asistencia escaneando un código QR.

Al escanear el código, el estudiante accede a un formulario donde puede:

- Registrar su asistencia.
- Evaluar el taller mediante una puntuación de **1 a 5** utilizando caritas.
- Agregar comentarios.

---

## Modo edición

### Agregar taller

Permite agregar los talleres del semestre.

Al crear un taller se debe ingresar:

- Nombre del taller.
- Lugar donde se impartirá.
- Profesor que lo impartirá (debe haber sido agregado previamente).
- Cantidad de bloques u horarios en los que se realizará.

### Horario del taller

Una vez creado el taller, sus bloques aparecerán en el apartado **Talleres por asignar**.

Desde allí es posible arrastrar cada bloque hacia el horario deseado.

También es posible eliminar bloques desde esta misma sección:

1. Arrastrar el bloque hacia la zona **Eliminar taller**.
2. Confirmar la eliminación.

Si el taller posee varios bloques, solamente se eliminará el bloque seleccionado.

### Comentario

Al desactivar el modo edición, el horario queda actualizado.

También es posible dejar talleres sin asignar horario. Estos permanecerán en el panel de **Talleres por asignar**, incluso si se sale del modo edición.

---

# Estudiantes

En esta sección es posible buscar estudiantes previamente registrados.

Al comenzar a escribir, aparecerán automáticamente las coincidencias.

## Perfil del estudiante

Al seleccionar un estudiante se visualiza la siguiente información:

- Nombre
- RUT
- Correo
- Carrera
- Teléfono
- Talleres inscritos
- Talleres aprobados

Para que un taller aparezca como **aprobado**, el estudiante debe cumplir con el porcentaje mínimo de asistencia definido.

## Inscribir nuevo taller

Desde el perfil del estudiante es posible inscribirlo en cualquiera de los talleres creados durante el semestre.

## Exportar Excel

Permite exportar un archivo Excel con:

- Datos personales del estudiante.
- Talleres en los que ha participado.

---

# Talleres

En esta sección es posible filtrar los talleres según:

- Semestre.
- Mes.
- Día.
- Fecha de inicio.
- Fecha de término.

También es posible ordenarlos por:

- Mayor asistencia.
- Menor asistencia.

Además, se muestra:

- El porcentaje de asistencia total de los estudiantes inscritos.
- La satisfacción promedio del taller.

---

# Panel de Administrador

Al seleccionar **Hola {nombre del administrador}** se despliega un panel con la información del administrador y sus permisos.

Desde este panel se pueden realizar las siguientes acciones:

- Agregar profesores.
- Agregar alumnos.
- Transferir el mando a otro administrador.

---

## Agregar profesores

Se deben ingresar los siguientes datos:

- Nombre.
- Apellido.
- RUT.
- Correo electrónico.

Una vez registrado, el profesor podrá seleccionarse al momento de crear un taller.

---

## Agregar alumnos

Los alumnos pueden agregarse de dos maneras:

1. Mediante un archivo Excel.
2. Manualmente, al momento de inscribirlos en un taller.

Si el taller aún no ha sido creado, el archivo Excel indicará qué estudiantes no pudieron ser inscritos.

---

## Transferir mando

Para transferir la administración se debe ingresar:

- RUT del nuevo administrador.

Luego se confirma la acción para completar la transferencia.

---

# Aplicación web para ayudantes

Esta versión permite visualizar el horario y seleccionar un taller para generar el código QR correspondiente.

El QR dirige al formulario donde los estudiantes registran su asistencia y evalúan el taller.

Esta funcionalidad está pensada principalmente para los ayudantes encargados de la toma de asistencia.