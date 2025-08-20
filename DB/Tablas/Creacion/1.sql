Create Table "clientes" (
    id serial primary key,
    nombre VARCHAR(100) not null,
    email  VARCHAR(150) UNIQUE not null,
    telefono VARCHAR(15),
    decha Date DEFAULT CURRENT_DATE,
    estado CHAR(1) DEFAULT 'A' CHECK(estado IN ('A','I'))
)

--  estado CHAR(1) DEFAULT 'A' CHECK (estado IN ('A', 'I'))


-- ### Ejercicio 1.3.1 - Tabla con Tipos Numéricos
-- Crea una tabla `productos` con estos campos y tipos apropiados:
-- - ID del producto
-- - Precio (con decimales)
-- - Cantidad en stock (entero)
-- - Peso en gramos (decimal)
-- - Código de barras (entero grande)

CREATE TABLE "productos" (
    id SERIAL primary key,
    precio decimal(10,2),
    cantidad int,
    peso decimal(10,4),
    code_bar bigint
)


-- ### Ejercicio 1.3.2 - Tabla con Tipos de Texto
-- Crea una tabla `empleados` con:
-- - Nombre completo (máximo 100 caracteres)
-- - Iniciales (exactamente 3 caracteres)
-- - Biografía (texto largo sin límite)
-- - Código de empleado (exactamente 8 caracteres)

-- ### Ejercicio 1.3.3 - Tabla con Fechas y Tiempo
-- Crea una tabla `eventos` con:
-- - Fecha del evento
-- - Hora de inicio
-- - Fecha y hora de creación del registro
-- - Duración en minutos
-- - ¿Es evento de todo el día? (verdadero/falso)

-- ### Ejercicio 1.3.4 - Array Simple
-- Crea una tabla `estudiante` que tenga:
-- - Nombre del estudiante
-- - Materias (array de texto)
-- - Calificaciones (array de enteros)

-- ### Ejercicio 1.3.5 - JSON Básico
-- Crea una tabla `configuracion` con:
-- - Nombre de la configuración
-- - Valores (campo JSON) que contenga al menos: tema, idioma, notificaciones
