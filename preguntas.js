let questions = [
  {
      numb: 1,
      question: "¿Qué significa la sigla HTML?",
      answer: "Hypertext Markup Language",
      options: [
          "Hypertext Manual Language",
          "Hypertext Markup Language",
          "Hypertext Match Language",
          "Sign Language HTML"
      ]
  },
  {
      numb: 2,
      question: "¿Qué significa CSS?",
      answer: "Cascading Style Sheets",
      options: [
          "Color Style Sheets",
          "Cascading Style Sheets",
          "Creative Style Sheets",
          "Computer Style Sheets"
      ]
  },
  {
      numb: 3,
      question: "¿Qué significa XML?",
      answer: "eXtensible Markup Language",
      options: [
          "eXtensible Markup Language",
          "eXecutable Multiple Language",
          "eXTra Multi-Program Language",
          "eXamine Multiple Language"
      ]
  },
  {
      numb: 4,
      question: "¿Qué significa SQL?",
      answer: "Structured Query Language",
      options: [
          "Stylish Question Language",
          "Stylesheet Query Language",
          "Statement Question Language",
          "Structured Query Language"
      ]
  },
  {
      numb: 5,
      question: "¿Qué significa JSON?",
      answer: "JavaScript Object Notation",
      options: [
          "JavaScript Object Notation",
          "JavaScript Only Notation",
          "Java Source Object Notation",
          "JavaScript Online Notation"
      ]
  },
  {
      numb: 6,
      question: "¿Qué significa DOM en términos de desarrollo web?",
      answer: "Document Object Model",
      options: [
          "Document Object Model",
          "Display Object Management",
          "Digital Object Model",
          "Desktop Object Model"
      ]
  },
  {
      numb: 7,
      question: "¿Qué significa URL?",
      answer: "Uniform Resource Locator",
      options: [
          "Uniform Resource Locator",
          "Universal Resource Locator",
          "Uniform Resource Link",
          "Universal Resource Link"
      ]
  },
  {
      numb: 8,
      question: "¿Qué significa HTTP?",
      answer: "Hypertext Transfer Protocol",
      options: [
          "Hypertext Transfer Protocol",
          "Hypertext Transmission Protocol",
          "Hyperlink Transfer Protocol",
          "Hyperlink Transmission Protocol"
      ]
  },
  {
      numb: 9,
      question: "¿Qué significa WWW?",
      answer: "World Wide Web",
      options: [
          "World Wide Web",
          "Wide World Web",
          "Web World Wide",
          "World Web Wide"
      ]
  },
  {
      numb: 10,
      question: "¿Cuál es la función de la etiqueta &lt;head&gt; en HTML?",
      answer: "Contiene metadatos sobre el documento",
      options: [
          "Define la estructura principal del contenido",
          "Contiene metadatos sobre el documento",
          "Define el pie de página del documento",
          "Define la cabecera visible del documento"
      ]
  },
  {
      numb: 11,
      question: "¿Cuál es la función de la etiqueta &lt;title&gt; en HTML?",
      answer: "Define el título del documento",
      options: [
          "Define el encabezado principal",
          "Define el título del documento",
          "Define un enlace",
          "Define una lista"
      ]
  },
  {
      numb: 12,
      question: "¿Cuál es la función de la etiqueta &lt;meta&gt; en HTML?",
      answer: "Proporciona metadatos sobre el documento",
      options: [
          "Proporciona un enlace",
          "Define un párrafo",
          "Proporciona metadatos sobre el documento",
          "Define una imagen"
      ]
  },
  {
      numb: 13,
      question: "¿Qué etiqueta HTML se usa para definir un párrafo?",
      answer: "&lt;p&gt;",
      options: [
          "&lt;p&gt;",
          "&lt;div&gt;",
          "&lt;span&gt;",
          "&lt;section&gt;"
      ]
  },
  {
      numb: 14,
      question: "¿Qué etiqueta HTML se usa para definir una lista desordenada?",
      answer: "&lt;ul&gt;",
      options: [
          "&lt;ol&gt;",
          "&lt;ul&gt;",
          "&lt;li&gt;",
          "&lt;dl&gt;"
      ]
  },
  {
      numb: 15,
      question: "¿Qué etiqueta HTML se usa para definir una lista ordenada?",
      answer: "&lt;ol&gt;",
      options: [
          "&lt;ul&gt;",
          "&lt;ol&gt;",
          "&lt;li&gt;",
          "&lt;dl&gt;"
      ]
  },
  {
      numb: 16,
      question: "¿Qué etiqueta HTML se usa para definir una celda de tabla?",
      answer: "&lt;td&gt;",
      options: [
          "&lt;th&gt;",
          "&lt;tr&gt;",
          "&lt;td&gt;",
          "&lt;table&gt;"
      ]
  },
  {
      numb: 17,
      question: "¿Qué etiqueta HTML se usa para definir una fila de tabla?",
      answer: "&lt;tr&gt;",
      options: [
          "&lt;th&gt;",
          "&lt;tr&gt;",
          "&lt;td&gt;",
          "&lt;table&gt;"
      ]
  },
  {
      numb: 18,
      question: "¿Qué etiqueta HTML se usa para definir un encabezado de tabla?",
      answer: "&lt;th&gt;",
      options: [
          "&lt;th&gt;",
          "&lt;tr&gt;",
          "&lt;td&gt;",
          "&lt;table&gt;"
      ]
  },
  {
      numb: 19,
      question: "¿Cuál es la función del atributo 'alt' en una etiqueta &lt;img&gt;?",
      answer: "Proporcionar texto alternativo para la imagen",
      options: [
          "Proporcionar texto alternativo para la imagen",
          "Cambiar el tamaño de la imagen",
          "Establecer la ruta de la imagen",
          "Definir el formato de la imagen"
      ]
  },
  {
      numb: 20,
      question: "¿Qué propiedad de CSS se usa para cambiar el color de fondo?",
      answer: "background-color",
      options: [
          "color",
          "background-color",
          "bgcolor",
          "color-background"
      ]
  },
  {
      numb: 21,
      question: "¿Qué propiedad de CSS se usa para cambiar el tamaño del texto?",
      answer: "font-size",
      options: [
          "text-size",
          "font-size",
          "text-style",
          "font-style"
      ]
  },
  {
      numb: 22,
      question: "¿Cuál es la forma correcta de incluir un archivo CSS externo?",
      answer: "&lt;link rel='stylesheet' href='styles.css'&gt;",
      options: [
          "&lt;style src='styles.css'&gt;",
          "&lt;link rel='stylesheet' href='styles.css'&gt;",
          "&lt;script src='styles.css'&gt;",
          "&lt;css src='styles.css'&gt;"
      ]
  },
  {
      numb: 23,
      question: "¿Qué etiqueta HTML se usa para definir una imagen?",
      answer: "&lt;img&gt;",
      options: [
          "&lt;image&gt;",
          "&lt;img&gt;",
          "&lt;pic&gt;",
          "&lt;picture&gt;"
      ]
  },
  {
      numb: 24,
      question: "¿Qué etiqueta HTML se usa para definir un enlace?",
      answer: "&lt;a&gt;",
      options: [
          "&lt;link&gt;",
          "&lt;a&gt;",
          "&lt;href&gt;",
          "&lt;url&gt;"
      ]
  },
  {
      numb: 25,
      question: "¿Cuál es la función de la etiqueta &lt;footer&gt; en HTML?",
      answer: "Define el pie de página de un documento o sección",
      options: [
          "Define el pie de página de un documento o sección",
          "Define el encabezado de un documento o sección",
          "Define una sección principal",
          "Define una lista de navegación"
      ]
  },
  {
      numb: 26,
      question: "¿Cuál es la función de la etiqueta &lt;header&gt; en HTML?",
      answer: "Define el encabezado de un documento o sección",
      options: [
          "Define el pie de página de un documento o sección",
          "Define el encabezado de un documento o sección",
          "Define una sección principal",
          "Define una lista de navegación"
      ]
  },
  {
      numb: 27,
      question: "¿Cuál es la función de la etiqueta &lt;nav&gt; en HTML?",
      answer: "Define una sección de navegación",
      options: [
          "Define una lista de enlaces",
          "Define una sección de navegación",
          "Define una barra lateral",
          "Define un pie de página"
      ]
  },
  {
      numb: 28,
      question: "¿Cuál es la función de la etiqueta &lt;section&gt; en HTML?",
      answer: "Define una sección en un documento",
      options: [
          "Define un artículo",
          "Define una división",
          "Define una sección en un documento",
          "Define una cabecera"
      ]
  },
  {
      numb: 29,
      question: "¿Cuál es la función de la etiqueta &lt;article&gt; en HTML?",
      answer: "Define contenido independiente y autónomo",
      options: [
          "Define un artículo",
          "Define una división",
          "Define una sección en un documento",
          "Define contenido independiente y autónomo"
      ]
  },
  {
      numb: 30,
      question: "¿Qué etiqueta HTML se usa para definir una lista de descripciones?",
      answer: "&lt;dl&gt;",
      options: [
          "&lt;ul&gt;",
          "&lt;ol&gt;",
          "&lt;dl&gt;",
          "&lt;list&gt;"
      ]
  }
];
