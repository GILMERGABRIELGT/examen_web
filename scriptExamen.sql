-- Crear la base de datos ExamenWeb
CREATE DATABASE ExamenWeb;

-- Utilizar la base de datos ExamenWeb
USE ExamenWeb;

-- Crear la tabla Preguntas
CREATE TABLE Questions (
    numb INT PRIMARY KEY,
    question NVARCHAR(255),
    answer NVARCHAR(255),
    option1 NVARCHAR(255),
    option2 NVARCHAR(255),
    option3 NVARCHAR(255),
    option4 NVARCHAR(255)
);

SELECT @@VERSION;

EXEC xp_instance_regwrite 
    @rootkey = 'HKEY_LOCAL_MACHINE', 
    @key = 'Software\Microsoft\MSSQLServer\MSSQLServer\SuperSocketNetLib\Tcp\IPAll', 
    @value_name = 'Enabled', 
    @type = 'REG_DWORD', 
    @value = 1;

EXEC xp_instance_regwrite 
    @rootkey = 'HKEY_LOCAL_MACHINE', 
    @key = 'Software\Microsoft\MSSQLServer\MSSQLServer\SuperSocketNetLib\Tcp\IPAll', 
    @value_name = 'TcpPort', 
    @type = 'REG_SZ', 
    @value = '1433';


	EXEC xp_instance_regwrite 
   N'HKEY_LOCAL_MACHINE', 
   N'Software\Microsoft\MSSQLServer\MSSQLServer\SuperSocketNetLib\Tcp', 
   N'Enabled', 
   REG_DWORD, 
   1




   drop table Questions







	SHUTDOWN WITH NOWAIT;


--inserts--
USE ExamenWeb;

INSERT INTO Questions (numb, question, answer, option1, option2, option3, option4) VALUES
(1, '¿Qué significa la sigla HTML?', 'Hypertext Markup Language', 'Hypertext Manual Language', 'Hypertext Markup Language', 'Hypertext Match Language', 'Sign Language HTML'),
(2, '¿Qué significa CSS?', 'Cascading Style Sheets', 'Color Style Sheets', 'Cascading Style Sheets', 'Creative Style Sheets', 'Computer Style Sheets'),
(3, '¿Qué significa XML?', 'eXtensible Markup Language', 'eXtensible Markup Language', 'eXecutable Multiple Language', 'eXTra Multi-Program Language', 'eXamine Multiple Language'),
(4, '¿Qué significa SQL?', 'Structured Query Language', 'Stylish Question Language', 'Stylesheet Query Language', 'Statement Question Language', 'Structured Query Language'),
(5, '¿Qué significa JSON?', 'JavaScript Object Notation', 'JavaScript Object Notation', 'JavaScript Only Notation', 'Java Source Object Notation', 'JavaScript Online Notation'),
(6, '¿Qué significa DOM en términos de desarrollo web?', 'Document Object Model', 'Document Object Model', 'Display Object Management', 'Digital Object Model', 'Desktop Object Model'),
(7, '¿Qué significa URL?', 'Uniform Resource Locator', 'Uniform Resource Locator', 'Universal Resource Locator', 'Uniform Resource Link', 'Universal Resource Link'),
(8, '¿Qué significa HTTP?', 'Hypertext Transfer Protocol', 'Hypertext Transfer Protocol', 'Hypertext Transmission Protocol', 'Hyperlink Transfer Protocol', 'Hyperlink Transmission Protocol'),
(9, '¿Qué significa WWW?', 'World Wide Web', 'World Wide Web', 'Wide World Web', 'Web World Wide', 'World Web Wide'),
(10, '¿Cuál es la función de la etiqueta <head> en HTML?', 'Contiene metadatos sobre el documento', 'Define la estructura principal del contenido', 'Contiene metadatos sobre el documento', 'Define el pie de página del documento', 'Define la cabecera visible del documento'),
(11, '¿Cuál es la función de la etiqueta <title> en HTML?', 'Define el título del documento', 'Define el encabezado principal', 'Define el título del documento', 'Define un enlace', 'Define una lista'),
(12, '¿Cuál es la función de la etiqueta <meta> en HTML?', 'Proporciona metadatos sobre el documento', 'Proporciona un enlace', 'Define un párrafo', 'Proporciona metadatos sobre el documento', 'Define una imagen'),
(13, '¿Cuál es la función del atributo ''alt'' en una etiqueta <img>?', 'Proporcionar texto alternativo para la imagen', 'Proporcionar texto alternativo para la imagen', 'Cambiar el tamaño de la imagen', 'Establecer la ruta de la imagen', 'Definir el formato de la imagen'),
(14, '¿Qué propiedad de CSS se usa para cambiar el color de fondo?', 'background-color', 'color', 'background-color', 'bgcolor', 'color-background'),
(15, '¿Qué propiedad de CSS se usa para cambiar el tamaño del texto?', 'font-size', 'text-size', 'font-size', 'text-style', 'font-style'),
(16, '¿Cuál es la forma correcta de incluir un archivo CSS externo?', '<link rel=''stylesheet'' href=''styles.css''>', '<style src=''styles.css''>', '<link rel=''stylesheet'' href=''styles.css''>', '<script src=''styles.css''>', '<css src=''styles.css''>'),
(17, '¿Qué es el modelo de caja en CSS?', 'Es un modelo que describe el diseño de los elementos HTML', 'Es un modelo que describe el diseño de los elementos HTML', 'Es un modelo que define el tamaño de las imágenes', 'Es un modelo que define la estructura del documento', 'Es un modelo que describe las propiedades del texto'),
(18, '¿Qué significa la propiedad ''display'' en CSS?', 'Define cómo se muestra un elemento', 'Define el color de fondo de un elemento', 'Define cómo se muestra un elemento', 'Define el tamaño de un elemento', 'Define la posición de un elemento'),
(19, '¿Qué significa la propiedad ''position'' en CSS?', 'Define la posición de un elemento en la página', 'Define la posición de un elemento en la página', 'Define el tamaño de un elemento', 'Define el color de fondo de un elemento', 'Define cómo se muestra un elemento'),
(20, '¿Qué propiedad de CSS se usa para cambiar el color del texto?', 'color', 'color', 'background-color', 'text-color', 'font-color'),
(21, '¿Qué es un ''callback'' en JavaScript?', 'Es una función que se pasa como argumento a otra función', 'Es una variable que almacena un valor', 'Es una función que se pasa como argumento a otra función', 'Es una estructura de control', 'Es un operador lógico'),
(22, '¿Qué es una ''promesa'' en JavaScript?', 'Es un objeto que representa la eventual finalización o falla de una operación asíncrona', 'Es una función que se ejecuta de inmediato', 'Es una variable que almacena un valor', 'Es un objeto que representa la eventual finalización o falla de una operación asíncrona', 'Es un operador lógico'),
(23, '¿Qué significa la palabra clave ''this'' en JavaScript?', 'Se refiere al objeto desde el cual se invoca la función actual', 'Se refiere a una variable local', 'Se refiere a una función global', 'Se refiere al objeto desde el cual se invoca la función actual', 'Se refiere a una estructura de control'),
(24, '¿Qué es el DOM en términos de desarrollo web?', 'Es una representación de la estructura de un documento HTML o XML', 'Es una hoja de estilo en cascada', 'Es un modelo de objetos para documentos HTML y XML', 'Es un protocolo de transferencia de hipertexto', 'Es una biblioteca de JavaScript'),
(25, '¿Qué significa la propiedad ''flex'' en CSS?', 'Define cómo un contenedor flexible debe expandirse o contraerse', 'Define el color de fondo de un elemento', 'Define cómo un contenedor flexible debe expandirse o contraerse', 'Define el tamaño de un elemento', 'Define la posición de un elemento'),
(26, '¿Qué es un ''media query'' en CSS?', 'Es una técnica utilizada para aplicar estilos CSS según el tamaño de la pantalla', 'Es una técnica utilizada para aplicar estilos CSS según el tamaño de la pantalla', 'Es una propiedad CSS que define el color de fondo', 'Es una función de JavaScript', 'Es una estructura de control'),
(27, '¿Qué es un ''framework'' en términos de desarrollo web?', 'Es una plataforma que proporciona una base para desarrollar aplicaciones web', 'Es una herramienta para diseñar gráficos', 'Es una plataforma que proporciona una base para desarrollar aplicaciones web', 'Es un protocolo de transferencia de hipertexto', 'Es una biblioteca de CSS'),
(28, '¿Qué es una ''API'' en términos de desarrollo web?', 'Es un conjunto de reglas que permite la comunicación entre aplicaciones', 'Es un lenguaje de programación', 'Es un conjunto de reglas que permite la comunicación entre aplicaciones', 'Es una herramienta para diseñar gráficos', 'Es una hoja de estilo en cascada'),
(29, '¿Qué es una ''variable'' en programación?', 'Es un contenedor que almacena un valor', 'Es una estructura de control', 'Es un contenedor que almacena un valor', 'Es una función que realiza una tarea específica', 'Es un operador matemático'),
(30, '¿Qué es una ''función'' en programación?', 'Es un bloque de código diseñado para realizar una tarea específica', 'Es un contenedor que almacena un valor', 'Es un bloque de código diseñado para realizar una tarea específica', 'Es una estructura de control', 'Es un operador matemático');
