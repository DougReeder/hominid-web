[
{	"category": "Métodos abreviados",
	"question":	"¿Qué métodos abreviados están disponibles?",
	"answer":	"<table class='realTable'><caption>Todas las escenas</caption><tr><td>toque rápido con 2 dedos</td><td>ir al fin/inicio</td></tr></table><table class='realTable'><caption>Escenas de Tareas Pendientes</caption><tr><td>meta-F</td><td>Intercambia la orientación de la pantalla entre fija/libre</td></tr><tr><td>meta-N</td><td>Nuevo hermano</td></tr><tr><td>meta-coma</td><td>Nuevo hijo</td></tr><tr><td>meta-D,<br />gesto adelante</td><td>Muestra la escena de Detalles</td></tr></table><table class='realTable'><caption>Escenas de Esquemas. Además de los anteriores están:</caption><tr><td>meta-espacio</td><td>Avanza al próximo elemento visible</td></tr><tr><td>meta-punto</td><td>Intercambia el mostrar el contenido de texto para el elemento seleccionado</td></tr><tr><td>meta-L</td><td>Intercambia sí los nuevos elementos muestren el contenido de texto</td></tr><tr><td>meta-T</td><td>Muestra la escena de Tareas Pendientes</td></tr></table>«meta-» implica mantener presionada el área de gestos mientras pulsa la tecla.",
	"keywords":	"keyboard, gestures"
},
{	"category": "Escena de Tareas",
	"question": "¿Cómo hago para que una tarea sea requisito previo de una segunda tarea?",
	"answer":	"Cree la tarea que sea requisito previo como la hija de la segunda tarea.<br /><br />La segunda tarea no se mostrará en las escenas de Tareas Pendientes, Pendientes y En espera, o En espera hasta que la primera tarea se marque como completada. Esta se mostrará en las escenas de Tareas Pendientes y Futuras y Por Fecha Límite.",
	"keywords": "tarea, nueva tarea, nuevo elemento, crear tarea, crear elemento, incompleta, inacabada"
},
{	"category": "Escena de Tareas",
	"question": "¿Cómo hago para que tres tareas se tengan que hacer en orden?",
	"answer":	"Cree la segunda tarea como una hija de de la tercera, y la primera tarea como una hija de la segunda.<br /><br />La segunda y tercera tareas no se mostraran en las escenas de Tareas Pendientes, Pendientes y En espera, o En espera hasta que la primera tarea se marque como completada, y la tercera tarea no se mostrará hasta que la primera y segunda tareas se marquen como completadas. La segunda y tercera tareas se mostraran en las escenas de Tareas Pendientes y Futuras y Por Fecha Límite.",
	"keywords": "tarea, nueva tarea, nuevo elemento, crear tarea, crear elemento, incompleta, inacabada"
},
{	"category": "Escena de Tareas",
	"question": "¿Porqué mi tarea no se muestra en las escenas de Tareas Pendientes, Pendientes y Futuras, Pendientes y En espera, o En espera?",
	"answer":	"<ul><li>Puede tener tareas descendientes que están incompletas (Tareas Pendientes, Pendientes y En espera, o En espera).</li><li>El ámbito de la tarea puede que no coincida con el configurado en la esquina superior derecha, o en un ámbito que le incluya (Tareas Pendientes, Pendientes y Futuras o Pendientes y En espera).</li><li>Alguna otra persona diferente de usted mismo, su empresa, o nadie, puede ser responsable de esta: <div style='display: inline-block; vertical-align:middle; width: 33px; height: 27px; background: url(images/checkbox-responsible-class-4.png) top no-repeat;'></div>  (Tareas Pendientes o Pendientes y Futuras).</li><li>El elemento puede haberse configurado como «Nota» en la escena Detalles del elemento.</li></ul>",
	"keywords": "tarea, incompleta, inacabada"
},
{	"category": "Escena de Tareas",
	"question": "¿Cómo hago para que se muestre una tarea en la escena de Tareas?",
	"answer":	"<ul><li>Pulse el botón Ámbito en la esquina superior derecha: <div class='headerInsetSample'><div class='headerInsetWrapperSample'>Lorem</div></div><br />y seleccione el Ámbito donde se encuentre.</li><li>Abra la escena de Detalles del elemento, y establezca el Ámbito del elemento en uno más apropiado.</li><li>Abra la escena de Detalles del elemento, y establezca el Responsable en otro además de usted mismo, su empresa, o nadie (y seleccione una escena diferente a Tareas En espera o Pendientes y En espera).</li><li>Si algo se necesita hacer primero, cree una tarea hija en la escena de esquemas de proyecto (y si alguien necesita hacerlo, asegurese de establecer un Responsable).</li><li>Si usted no puede trabajar en la tarea (y no es un elemento Basecamp Classic), abra la escena de Detalles de la tarea y cambiela a Nota.  Puede cambiarla de nuevo a Tarea cuando se encuentre trabajando en ella.</li></ul>",
	"keywords":	"tarea, incompleta"
},
{	"category": "Escena de Tareas",
	"question":	"¿Cómo hago para que los elementos marcados como completados desaparezcan de la escena de Tareas?",
	"answer":	"Pulse el botón Ámbito en la cabecera: <div class='headerInsetSample'><div class='headerInsetWrapperSample'>Lorem</div></div><br />y vuelva a seleccionar el Ámbito en el que se encuentra.",
	"keywords":	"tarea, actualizar"
},
{	"category": "Escena de Tareas",
	"question":	"He marcado una tarea como completada. ¿Porqué sus tareas dependientes no aparecen en la escena de Tareas?",
	"answer":	"Pulse el botón Ámbito en la cabecera: <div class='headerInsetSample'><div class='headerInsetWrapperSample'>Lorem</div></div><br />y vuelva a seleccionar el Ámbito en el que se encuentra.<br /><br />Si las tareas dependientes todavía no aparecen, puede haber otro requisito previo inacabado (hijo), o pueden estar mal configurados el Ámbito o la persona Responsable.",
	"keywords":	"tarea"	
},
{	"category": "Escena de Tareas",
	"question": "Tengo muchas tareas parecidas. ¿Puedo introducir los detalles una sola vez?",
	"answer": 	"Si. Cree una tarea y establezca sus detalles. Para crear una tarea parecida, seleccione la primera tarea y luego pulse el botón Crear Hermano: <img src='images/new-sibling.png' align='top'><br /><br />El botón Crear Hijo también copia los detalles del elemento padre al elemento hijo: <img src='images/new-child.png' align='top'>",
	"keywords": "tarea, nueva tarea, nuevo elemento, crear tarea, crear elemento, muchos"
},
{	"category": "Escena de Tareas",
	"question": "¿Cómo marco una tarea como parcialmente completada?",
	"answer": 	"Cree una segunda tarea y marque la primera tarea como completada.",
	"keywords":	"tarea, acabada"
},
{	"category": "Escena de Tareas",
	"question": "¿Cómo busco una nota o una tarea completada?",
	"answer":	"<ol><li>Cambie a la escena <strong>Todos los elementos</strong>.</li><li>Seleccione <strong>Todos</strong> (ámbitos).</li><li>Pulse el botón Buscar: <img src='images/sample/icon-search.png' width=32 height=32 align='top'></li><li>Escriba una palabra o frase.</li></ol>",
	"keywords": "tarea, acabada, buscar, busqueda"
},
{	"category":	"Escena de Tareas",
	"question":	"¿Porqué hay algunas tareas que aparecen en gris, en las escenas de Tareas Pendientes y Futuras o Por Fecha Límite?",
	"answer":	"Esas tareas tienen descendientes incompletos (prerrequisitos) o su Plazo de Entrega no ha comenzado todavía.",
	"keywords":	"tarea, incompleta, gris"
},
{	"category":	"Escena de Tareas",
	"question":	"¿Cómo establezco una Fecha de Inicio para mis Tareas?",
	"answer":	"Establezca el Plazo de Entrega en la escena de Detalles.<br /><br />Cuando se importan desde archivos XOXO/HTML/OPML, Outline Tracker convierte las Fechas de Inicio en Plazos de Entrega.",
	"keywords":	"inicio fecha"
},
{	"category": "Esquemas",
	"question": "¿Cómo borro un proyecto?",
	"answer": 	"<ol><li>En la escena del esquema del proyecto, pulse la cabecera de la escena: <div class='headerSample'>Nombre del proyecto</div></li><li>Seleccione <strong>Preferencias Proyecto</strong>.</li><li>Pulse el botón papelera en la esquina inferior derecha.</li></ol>",
	"keywords":	"borrar proyecto, eliminar proyecto"
},
{	"category": "Esquemas", 
	"question": "¿Cómo busco en un esquema?", 
	"answer":	"<ol><li>Cambie a la escena <strong>Todos los elementos</strong>.</li><li>Seleccione <strong>Todos</strong> (ámbitos).</li><li>Pulse el botón Buscar: <img src='images/sample/icon-search.png' width=32 height=32 align='top'></li><li>Escriba una palabra o frase.</li><li>Seleccione un elemento.</li><li>Pulse el botón “Mostrar en Esquema”: <img src='images/outline-icon.png' align='top' /></li></ol>", 
	"keywords": "tarea, buscar, incompleta, acabada" 
}, 
{	"category": "Esquemas",
	"question": "Tengo muchas listas parecidas. ¿Puedo crear una plantilla?",
	"answer":	"No directamente.<ul><li>Las tareas periódicas pueden tener hijos (prerrequisitos), que son actualizados cuando la tarea padre se repite.</li><li>Aunque puede crear un proyecto local genérico, exportarlo y luego re-importarlo varias veces con distintos nombres.</li></ul>",
	"keywords": "repetición"
},
{	"category":	"Esquemas",
	"question":	"¿Puedo ocultar tareas completadas en una escena de esquemas?",
	"answer":	"El comando <strong>Mostrar tareas incompletas</strong> compacta los elementos que no contienen tareas incompletas.<ol><li>En la escena de esquemas del proyecto, pulse la cabecera de la escena: <div class='headerSample'>Nombre del proyecto</div></li><li>Seleccione <strong>Mostrar tareas incompletas</strong>.</li></ol>Entonces en la escena <strong>Por Fecha Límite</strong> se mostrarán todas sus tareas incompletas."
},
{	"category":	"Esquemas",
	"question":	"¿Cómo imprimo un esquema?",
	"answer":	"No hay un método directo para imprimir, pero puede hacer:<ol><li>En la escena del esquema del proyecto, pulse la cabecera de la escena: <div class='headerSample'>Nombre del proyecto</div></li><li>Seleccione <strong>Exportar vía correo...</strong></li><li>Envíese el correo electrónico a sí mismo.</li><li>Imprima el correo electrónico.</li></ol>"
},
{	"category":	"Contactos",
	"question": "¿Cómo contacto con la persona responsable de una tarea?",
	"answer":	"<ol><li>Si se encuentra en la escena de Tareas Pendientes, Pendientes y Futuras, Pendientes y En espera, Elementos por Fecha Límite, o Todos los elementos, pulse la cabecera de escenas: <div class='headerSample'>Lorem Ipsum</div>para cambiar a la escena de <strong>En espera</strong>.</li><li>Pulse el nombre de la persona. Esto abre la aplicación Contactos en la entrada correspondiente a la persona.</li></ol>",
	"keywords":	"teléfono, correo, mensaje, MI"
},
{	"category":	"Contactos",
	"question":	"¿Cómo asigno una tarea a alguien del que no tengo información de contacto? (Proyectos locales, webOS 1)",
	"answer":	"Cree una entrada en la aplicación Contactos sólo con su nombre. Esta persona no aparecerá cuando se hagan búsquedas de correo electrónico (en la aplicación Correo electrónico), no aparecerá cuando se hagan busquedas de números de teléfono (en la aplicación Teléfono), y no aparecerá cuando se hagan búsquedas de SMS o dirección IM (en Mensajería).",
	"keywords": "responsable"
},
{	"category": "Ámbitos",
	"question": "¿Porqué algunos ámbitos están desactivados en la lista de Incluye?",
	"answer": 	"El ámbito desactivado <em>incluye</em> el ámbito seleccionado.<br /><br /><em>Ejemplo:</em> Si el ámbito Trabajo incluye el ámbito Ordenador, no se puede decir que el ámbito Ordenador incluye el ámbito Trabajo.",
	"keywords":	"gris"
},
{	"category": "Ámbitos",
	"question": "¿Son los ámbitos incluidos recursivos?",
	"answer": 	"No.<br /><br /><em>Ejemplo:</em> Si el ámbito Trabajo incluye el ámbito Ordenador, y el ámbito Hogar incluye el ámbito Trabajo, pero no el ámbito Ordenador, entonces las tareas que deben ser hechas en el Ordenador <strong>no</strong> se mostrarán cuando se seleccione el ámbito Hogar en la escena de Lista de Tareas."
},
{	"category": "Ámbitos",
	"question": "¿Cómo creo un nuevo ámbito?",
	"answer":	"<ol><li>Desde el menú de la aplicación, seleccione <strong>Ámbitos, Pref. y Cuentas</strong> &gt; <strong>Editar Ámbitos..</strong>.</li><li>Pulsar el botón Nuevo Ámbito: <img src='images/new-place.png' align='absmiddle'></li><li>Escriba el nombre del ámbito.</li><li>Pulsar Aceptar.</li></ol>",
	"keywords": "crear ámbito"
},
{	"category": "Ámbitos",
	"question": "¿Cómo borro un ámbito?",
	"answer":	"<ol><li>Desde el menú de la aplicación, seleccione <strong>Ámbitos, Pref. y Cuentas</strong> &gt; <strong>Editar Ámbitos..</strong>.</li><li>Seleccionar el ámbito pulsando el botón en la esquina superior derecha.</li><li>Pulse el botón papelera en la esquina inferior derecha.</li></ol>",
	"keywords": "borrar ámbito, eliminar ámbito"
},
{	"category": "Calendario",
	"question":	"¿Cómo edito un evento de Calendario creado por Outline Tracker?",
	"answer":	"En Outline Tracker, seleccione el elemento y pulse el botón <strong>Detalles</strong> para abrir la escena Detalles del elemento.  Establezca la fecha y la hora usando los selectores de fecha."
},
{	"category": "Calendario",
	"question":	"¿Cómo controlo qué elementos se muestran en la aplicación Calendario?",
	"answer":	"Hay un calendario para proyectos locales y uno para cada cuenta.<ol><li>En la aplicación Calendario, pulse el botón de seleccionar calendario en la cabecera de la escena.</li><li>Seleccionar <strong>Opciones vista de calendario</strong>.</li><li>Para el calendario apropiado, cambie «Mostrar en la vista \"Todos los calendarios\"» a NO.</li></ol><br />Por defecto, las tareas completadas no se mostrarán en el Calendario.  En la escena de  Preferencias, usted puede habilitar el que se muestren las tareas del primer nivel y/o las tareas de niveles inferiores. Entonces, cuando se actualicen, las tareas completadas se mostrarán en el Calendario.",
	"keywords":	"desactivar"
},
{	"category": "Calendario",
	"question":	"¿Cómo evito que un elemento con fecha se muestre en la aplicación Calendario?",
	"answer":	"Escriba la fecha en el texto del resumen o del contenido (y configure Fecha Límite a NO).",
	"keywords":	"desactivar"
},
{	"category":	"Calendario",
	"question":	"¿Cómo configuro la hora del día para un recordatorio de un evento Todo el día?",
	"answer":	"<ol><li>Desmarque <strong>Todo el día</strong>.</li><li>Configure la hora.</li><li>vuelva a marcar <strong>Todo el día</strong>.</li><li>Configure el recordatorio para 1 día o más.</li></ol>",
	"keywords":	"alarma"
},
{	"category": "Calendario",
	"question": "If I keep getting the “Duplique la cuenta Calendario” error, and deleting the listed account doesn't fix the problem, what do I try next?",
	"answer":	"<ol><li>From the Outline Tracker app menu, select <strong>Copia de seguridad &gt; en archivo</strong>.</li><li>Launch the <strong>Cuentas</strong> app and delete all Outline Tracker accounts.</li><li>In the Lanzador, delete Outline Tracker.</li><li>Launch the <strong>Informacíon del dispositivio</strong> app, select <strong>Opciones de restablecer</strong>, then <strong>Reiniciar</strong>.</li><li>Re-install Outline Tracker from the App Catalog.</li><li>In Outline Tracker, from the app menu, select <strong>Proyecto nuevo &gt; Importar de archivo</strong> and select the latest backup file.</li></ol>",
	"keywords": "dialog, alert"
},
{	"category": "Basecamp Classic",
	"question":	"¿Cómo me inscribo en una cuenta de Basecamp Classic?",
	"answer":	"Use un navegador web para visitar <a href='https://signup.37signals.com/basecamp/Free/signup/'>https://signup.37signals.com/basecamp/Free/signup/</a>.  El API Basecamp Classic (Application Program Interface) no permite la creación de cuentas.",
	"keywords": "crear cuenta, nueva cuenta"
},
{	"category": "Basecamp Classic",
	"question":	"¿Cómo creo un proyecto Basecamp Classic?",
	"answer":	"Use un navegador web para acceder a su página Basecamp Classic.  El API Basecamp Classic (Application Program Interface) no permite la creación de proyectos.<br /><br />Para crear proyectos Basecamp Classic, su cuenta de Basecamp Classic debe de ser una cuenta de <em>administrador</em>.  Un administrador puede hacer su cuenta una cuenta de administrador.  <ol><li>Ingrese en su cuenta de Basecamp Classic.</li><li>En el Tablero de su página Basecamp Classic, pulse el enlace <strong>Crear un nuevo proyecto</strong>.</li><li>Introduzca un nombre para el proyecto.</li><li>Pulse el botón <strong>Crear este proyecto</strong>.</li></ol>",
	"keywords": "nuevo proyecto, crear proyecto"
},
{	"category": "Basecamp Classic",
	"question": "¿Porqué los cambios que hago localmente en mi dispositivo no aparecen en mi página de Basecamp Classic?",
	"answer":	"<ul><li>Deje que Outline Tracker sepa que ha acabado de editar el elemento.<ul><li>En la escena de Lista de Tareas o en la de Esquema, pulse en otro elemento diferente (como pulsar dos veces en la cabecera de la escena).</li><li>En una escena de Detalles, pulse <strong>Aceptar</strong>.</li></ul></li><li>Compruebe la conexión de red de su dispositivo.</li></ul>"
},
{	"category": "Basecamp Classic",
	"question": "¿Porqué los cambios que hago en mi página de Basecamp Classic no aparecen localmente en mi dispositivo?",
	"answer":	"<ul><li>En la escena de Preferencias Proyecto (o en la escena de Cuentas), compruebe cuando se ha descargado el proyecto (o la cuenta para ese proyecto) por última vez.</li><li>En la escena de Cuentas, compruebe la Frecuencia de descargas.</li><li>Outline Tracker Free tiene un limite de 50 elementos.</li><li>Compruebe la conexión de red de su dispositivo</li></ul>"
},
{	"category":	"Basecamp Classic",
	"question":	"¿Cómo creo una tarea Basecamp Classic desde la escena de Lista de tareas?",
	"answer":	"<ol><li>Pulse el botón Nuevo Hermano: <img src='images/new-sibling.png' align='absmiddle'></li><li>Pulse el menú emergente <strong>PADRE</strong>, y seleccione una Lista de tareas apropiada del menú emergente, o pulse <strong>Seleccione de todos...</strong></li></ol>",
	"keywords":	"tareas, lista de tareas"
},
{	"category": "Basecamp Classic",
	"question":	"¿Cómo dejo de usar o borro una cuenta de Basecamp Classic?",
	"answer":	"Para borrar completamente una cuenta, debe usar un navegador web.<br /><br />Para dejar de usar una cuenta de Basecamp Classic con Outline Tracker:<ol><li>Desde el menú de la aplicación, seleccione <strong>Ámbitos, Pref. y Cuentas</strong> &gt; <strong>Cuentas..</strong>.</li><li>Pulse en la cuenta de la lista.</li><li>Pulse el botón papelera en la esquina inferior derecha.</li></ol>Esto borrará los proyectos en esa cuenta en su dispositivo.",
	"keywords":	"borrar cuenta, eliminar cuenta"
},
{	"category": "Basecamp Classic",
	"question":	"¿Cómo renombro un proyecto Basecamp Classic? / ¿Porqué está desactivado el campo del título en la escena de Preferencias Proyecto para proyecto Basecamp Classic?",
	"answer":	"Use un navegador web para visitar su página Basecamp Classic.  El API Basecamp Classic (Application Program Interface) no permite renombrar proyectos.",
	"keywords":	"renombrar, gris"
},
{	"category": "Basecamp Classic",
	"question":	"¿Porqué está el conmutador «Tarea» desactivado para Metas y Tareas Basecamp Classic?",
	"answer":	"Las Metas y Tareas Basecamp Classic son tareas, por definición.",
	"keywords":	"tarea, gris"
},
{	"category": "Basecamp Classic",
	"question":	"¿Porqué está el conmutador «Fecha Límite» desactivado para Metas Basecamp Classic?",
	"answer":	"Las Metas Basecamp Classic deben tener una fecha límite, por definición.",
	"keywords":	"gris"
},
{	"category": "Basecamp Classic",
	"question":	"¿Cómo puedo configurar la hora para una Meta o Tarea Basecamp Classic? / ¿Porqué está desactivada la casilla de verificación «Todo el día»?",
	"answer":	"Las Metas y Tareas Basecamp Classic no tienen una hora.  Esa es la manera en la que Basecamp Classic trabaja.",
	"keywords":	"tarea, fecha, gris"
},
{	"category":	"Basecamp Classic",
	"question": "¿Porqué no puedo configurar un elemento de Basecamp Classic que se repita?",
	"answer":	"Basecamp Classic no soporta elementos que se repiten.",
	"keywords":	"repetición"
},
{	"category":	"Basecamp Classic",
	"question": "¿Porqué no puedo configurar un recordatorio para elementos Basecamp Classic?",
	"answer":	"Basecamp Classic no soporta ese tipo de recordatorios.",
	"keywords":	"alarma"
},
{	"category":	"Basecamp Classic",
	"question":	"¿Cómo introduzco mi ficha de autentificación de Basecamp Classic?",
	"answer":	"Si introduce su usuario y contraseña para Basecamp Classic, Outline Tracker buscará y utilizará su ficha por usted.  Si prefiere introducirla usted mismo, introduzca su ficha de autentificación como usuario, y «X» como su contraseña."
},
{	"category":	"Basecamp Classic",
	"question":	"¿Cómo cambio el ámbito para todos los elementos de un proyecto Basecamp Classic?",
	"answer":	"[requiere una conexión de red]<ol><li>En la escena del esquema del proyecto, pulse la cabecera de la escena: <div class='headerSample'>Nombre del proyecto</div></li><li>Seleccione <strong>Preferencias Proyecto</strong>.</li><li>Pulse el botón papelera para borrar el proyecto localmente.</li><li>Desde el menú de aplicación, seleccione <strong>Ámbitos, Pref. y Cuentas</strong> &gt; <strong>Cuentas..</strong>.</li><li>Pulse la cuenta del proyecto</li><li>Cambie el Ámbito por defecto al ámbito deseado y pulse <strong>Aceptar</strong>.</li><li>Pulse «Descargar cambios ahora».</li></ol>Necesitará configurar la persona responsable por defecto para el proyecto (en Preferencias Proyecto) otra vez, ya que esa información no se graba en el servidor Basecamp Classic.<br /><br />Después de esto, usted puede configurar la cuenta Ámbito por defecto a otro valor &mdash esta se usará para cualquier proyecto nuevo Basecamp Classic."
},
{	"category": "Basecamp Classic",
	"question":	"¿Porqué las fechas de los proyectos están desplazadas un día?",
	"answer":	"Basecamp Classic no gestiona correctamente las zonas horarias. Por favor configure la zona horaria en Basecamp Classic a «(GMT-06:00) Central Time (US & Canadá)»",
	"keywords":	"zona horaria"
},
{	"category":	"Importar, Exportar y Backup",
	"question":	"¿Porqué al importar un archivo HTML aparece el mensaje «No hay esquemas o listas en archivo»?",
	"answer":	"Outline Tracker usa la <em>estructura</em> de archivo HTML, no la apariencia, para identificar listas y esquemas.  Sólo listas ordenadas HTML, listas desordenadas y esquemas (listas que contienen listas) son importados desde archivos HTML.  Las listas HTML usan las etiquetas &lt;ol&gt;, &lt;ul&gt; y &lt;li&gt;.  El contenido formateado como una lista, pero que no use estas etiquetas, no se importará.  Las tablas no se pueden importar.",
	"keywords":	"no hay esquemas en archivo"
},
{	"category":	"Importar, Exportar y Backup",
	"question":	"¿Cómo edito un proyecto con otra aplicación?",
	"answer":	"<ol><li>En la escena de esquema del proyecto, pulse la cabecera de la escena: <div class='headerSample'>Nombre del proyecto</div></li><li>Seleccione <strong>Exportar vía correo...</strong></li><li>Introduzca su dirección de correo electrónico y pulse el botón enviar.</li><li>En su ordenador de sobremesa desde su cliente de correo, grabe el correo como un archivo HTML.  Puede que necesite consultar la documentación de aplicación de correo electrónico.  Si lee su correo usando un navegador web, grabar la página o «el código fuente de la página» puede funcionar.</li><li>En su otro editor de esquemas o editor de HTML, abra o importe el archivo con formato de archivo XOXO o HTML.</li></ol>"
},
{	"category": "Importar, Exportar y Backup",
	"question":	"¿Cómo puedo cambiar la información que se exporta?",
	"answer":	"El comando Exportar le permite mover un proyecto/esquema a otro editor de esquemas, o grabar una copia de seguridad. La posibilidad de hacer una presentación desde un esquema está previsto para una futura versión de Outline Tracker.<br /><br />Puede editar el correo electrónico a mano antes de enviarlo."
},
{	"category": "Importar, Exportar y Backup",
	"question": "¿Están mis proyectos salvaguardados en mi HP webOS Account (Perfil de Palm)?",
	"answer":	"No, HP no lo soporta para aplicaciones de terceros."
},
{	"category": "Importar, Exportar y Backup",
	"question":	"¿Cómo puedo hacer copias de seguridad de todos mis proyectos locales? (webOS 2 y 3)",
	"answer":	"método 1: <ol><li>Desde el menú de la aplicación, seleccione <strong>Copia de seguridad.../... en archivo</strong>.</li><li>Conecte su dispositivo al ordenador de sobremesa mediante un cable USB, y seleccione <strong>Unidad USB</strong>.</li><li>Copie el fichero de copia de seguridad, desde el directorio “outlines”, a su ordenador de sobremesa.</li></ol>método 2:<ol><li>Desde el menú de la aplicación, seleccione <strong>Copia de seguridad.../... vía correo</strong>. Este comando exporta todos sus proyectos locales.</li><li>Introduzca su dirección de correo electrónico y pulse el botón enviar.</li><li>En su cliente de correo de su ordenador de sobremesa, grabe el accesorio del correo electrónico como un archivo HTML.</li></ol>Los proyectos Basecamp Classic se almacenan en el servidor Basecamp Classic, así que no necesita hacer una copia de seguridad adicional.",
	"keywords": "webOS 3.0"
},
{	"category": "Importar, Exportar y Backup",
	"question":	"¿Cómo puedo hacer copia de seguridad de un sólo proyecto?",
	"answer":	"<ol><li>En la escena de esquema de proyecto, pulse la cabecera de la escena: <div class='headerSample'>Nombre del proyecto</div></li><li>Seleccione <strong>Exportar vía correo..</strong>.</li><li>Introduzca su correo electrónico y pulse el botón enviar.</li><li>En su cliente de correo de su ordenador de sobremesa, grabe el correo electrónico como un archivo HTML.  Puede que necesite consultar la documentación de aplicación de correo electrónico.</li></ol>Los proyectos Basecamp Classic se almacenan en el servidor de Basecamp Classic, así que puede que no necesite hacer una copia de seguridad independiente."
},
{	"category": "Importar, Exportar y Backup",
	"question":	"¿Cómo restauro un proyecto?",
	"answer":	"<strong>Proyecto local</strong>, método 1:<ol><li>Copie el archivo de copia de seguridad HTML en su dispositivo en el modo USB.</li><li>Desde el menú de aplicación de Outline Tracker, seleccione <strong>Proyecto nuevo</strong> &gt; <strong>Importar de archivo...</strong>.</li><li>Seleccionar el archivo HTML.</li></ol><strong>Proyecto local</strong>, método 2:<ol><li>Copiar el archivo HTML a un servidor web, WebDAV o FTP.</li><li>Envíe la dirección de correo electrónico del URL del archivo a su dispositivo.</li><li>Desde el menú de aplicación de Outline Tracker, seleccione <strong>Proyecto nuevo</strong> &gt; <strong>Importar de URL...</strong></li><li>Copiar y pegar el URL de su archivo de copia de seguridad HTML.</li></ol><strong>Proyecto Basecamp Classic</strong>: En la escena de Cuentas:<ol><li>Si la información de la cuenta está borrada, pulse el botón <strong>Añadir cuenta Basecamp Classic...</strong> y reintroduzca su información de cuenta Basecamp Classic.</li><li>Pulse el botón <strong>Descargar cambios ahora</strong>.</li></ol>"
},
{	"category":	"Importar, Exportar y Backup",
	"question":	"¿Puedo hacer una copía de seguridad de Outline Tracker usando la aplicación Save/Restore de webOS Internals?",
	"answer":	"Save/Restore no está desarrollado ni soportado por Hominid Software, y es un programa beta.  Recomendamos el uso de la opción del menú de Outline Tracker <strong>Backup via correo</strong> como copía de seguridad principal.  Puede usar Save/Restore v. 0.9.3 o posterior con las siguientes precauciones:<ul><li><strong>DEBE cerrar Outline Tracker antes de ejecutar Save/Restore</strong>.</li><li>Después de restaurar, borre todos los proyectos Basecamp Classic, luego en la escena de Cuentas, pulse <strong>Descargar cambios ahora</strong> para restaurar copias actualizadas.</li></ul>"
},
{	"category": "Tabletas", 
	"question": "¿Trabaja Outline Tracker de forma diferente en tabletas?", 
	"answer":	"<ul><li>webOS 3.0.x breaks the People Picker, so the “seleccionar de contactos” menu selection is disabled.</li><li>Conectar un teclado Bluetotooth evitará que el teclado en pantalla aparezca.</li><li>Outline Tracker puede aprovechar más la pantalla con la orientación vertical.</li></li>", 
	"keywords":	"TouchPad, webos 3.0" 
}
]
