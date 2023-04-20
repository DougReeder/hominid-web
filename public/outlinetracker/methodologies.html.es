<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		<script src="../pure/prototype.js"></script>
		<script src="../pure/pure.js"></script>
		<script src="../pure/navigation.js"></script>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
		<meta name="viewport" content="width=device-width" />

		<link href='../aux/reeder-main.css' type='text/css' rel='stylesheet' />
		<link media='only all and (max-height: 56.5em) and (min-width: 650px)' href='../aux/reeder-short.css' type='text/css' rel='stylesheet' />
		<link media='only all and (max-width: 750px)' href='../aux/reeder-narrower.css'
			type='text/css' rel='stylesheet' />
		<link media='handheld, only all and (max-width: 480px)' href='../aux/reeder-narrowest.css'
			type='text/css' rel='stylesheet' />
		<link media='handheld' href='../aux/reeder-handheld.css' type='text/css'
			rel='stylesheet' />
		<link media='print' href='../aux/reeder-print.css' type='text/css'
			rel='stylesheet' />

		<title>Outline Tracker Methodologies</title>
	</head>
	<body id='methodologies'>
		<div id='outer'>

			<div id='header'>
				<img src='../aux/icon64_2.png' class='headerIcon' />
				<h1>Outline Tracker Methodologies</h1>
				<p>The leading task list manager for Palm webOS!</p>
			</div>

			<div class='onlyif1col'>
				<a href='#nav'>Skip to navigation</a>
			</div>

			<div id='main'>
				<div id='content'>

					<p>Different people have different priorities and constraints &mdash; experience will help you refine how you use Outline Tracker.
					Whether you plan and work top down, bottom up, or inside-out, Outline Tracker works with you.
					Here we sketch how to implement various work methodologies in Outline Tracker. </p>

					<hr />
					<h2>David Allen's Getting Things Done®</h2>

					<p>GTD is described in the book <a href='https://books.google.com/books?id=WXcHwzaUd4MC&printsec=frontcover&dq=%22Getting+things+done%22&cd=1#v=onepage&q=&f=false'>Getting Things Done</a>.
					An overview is available
					<a href='https://en.wikipedia.org/wiki/Getting_Things_Done'>on Wikipedia</a>.</p>

					<h3>«Buckets» (Cubos)</h3>
                    <ul>
                        <li>
                            Lista de proyectos &#x2192 Menú aplicación &gt; Mostrar Proyecto
                        </li>
                        <li>
                            Planes de proyecto &#x2192 Escena de esquema del proyecto.
                        </li>
                        <li>
                            Lista de En espera &#x2192 Escena de Tareas en espera.
                        </li>
                        <li>
                            Calendario &#x2192 tareas con fecha que aparecen en el Calendario de webOS.
                        </li>
                        <li>
                            Lista de Próximas Acciones &#x2192 la escena de Tareas Pendientes
                        </li>
                        <li>
                            Material de referencia &#x2192 Proyectos sin tareas (puede prefijar el nombre del proyecto con «REFERENCIA»).
                        </li>
                        <li>
                            «Tickler file» (archivador o memorándum) &#x2192 establezca el plazo de entrega (y fecha límite) en Tarea
                        </li>
                        <li>
                            Algún día/Quizá (archivos difíciles) &#x2192 Proyectos sin tareas (puede prefijar el nombre del proyecto con «ALGUNDIA»).
                        </li>
                        <li>
                            Basura &#x2192 borrar elementos.
                        </li>
                    </ul>

					<h3>¿Donde está el «Inbox» (buzón de entrada)?</h3>
					<p>Las aplicaciones Correo electrónico, Mensajería y Teléfono de webOS son buzones, además de las otras que probablemente ya tuviera.<br /><br />
					Puede copiar y pegar un mensaje completo en <a href='just_type.html'><strong>Escribe y listo</strong></a>.
					Desde <strong>Acciones rápidas</strong> seleccione <strong>Nuevo elemento</strong>
					(para esto necesitará haber añadido previamente el comando de Outline Tracker <strong>Nuevo elemento</strong> en Preferencias de Escribe y listo).
					Outline Tracker separará el texto en resumen y contenido, y buscará en la primera parte del texto una Fecha Límite.<br /><br />
					Puede crear rápidamente un nuevo elemento que sea similar a otro más antiguo,
						seleccionando el elemento antiguo y pulsando el botón Nuevo Hermano:<img src='images/new-sibling.png' align='top'>
					</p>

					<h3>¿Cómo configuro el Contexto para una tarea?</h3>
					<p>Configure el Ámbito. Recuerde que los Ámbitos no tienen porqué que ser lugares físicos.</p>


					<hr />

<div class='palm-body-title'>Revisión Diaria</div>
<div class='palm-body-text'>Como parte de su revisión diaria, compruebe su calendario para hoy para ver sus citas y fechas límites.</div>
<div class='palm-body-text'>Los eventos del Calendario para hoy pueden verse también seleccionando <strong>Agenda</strong> en Modo Exposición (el Modo Exposición comienza cuando un dispositivo con webOS 2 o 3 se sitúa en un Touchstone).</div>
<div id='launchCalendarBtn' x-mojo-element='Button'></div>

<div class='palm-body-text'>Revise sus Tareas en la escena de <strong>Tareas Pendientes</strong>, con el Ámbito establecido en «Todos».
Las Tareas con Plazo de Entrega que comiencen hoy (incluyendo Tareas Periódicas) aparecerán automáticamente.</div>
<div class='palm-body-text'>Si cualquier Tarea ha sido completada, márquela y seleccione «Todos» otra vez, para refrescar la lista.</div>

<div class='palm-body-text'>Si una Tarea aparece en la lista y <em>no</em> puede hacerla hoy, pregúntese «¿Porqué?».
Si hay que hacer algo primero, cree una Tarea hija (requisito previo).
Si la Tarea es la responsabilidad de algún otro, establezca <strong>responsable</strong>, para mover la Tarea a la escena de <strong>Tareas En Espera</strong>.
Si está esperando que alguien haga algo primero, cree una Tarea hija y establezca <strong>responsable</strong>.
Si es sólo una cuestión de tiempo que pueda empezar a trabajar en la Tarea, abra la escena de Detalles y establezca un Plazo de Entrega (ajustando primero la Fecha Límite en SÍ).
Para poner una Tarea «en espera» indefinidamente, abra la escena de Detalles y cámbiela a Nota.
</div>
<div id='toDoBtn' x-mojo-element='Button'></div>

<div class='palm-body-title'>Revisión Semanal</div>
<div class='palm-body-text'>Al menos semanalmente, debería revisar las Tareas en la escena de <strong>Tareas En Espera</strong>.
Puede que necesite contactar con otras personas sobre las Tareas de las que sean Responsables.
(Estas personas pueden ver sus Tareas en los proyectos Basecamp Classic, pero no en los proyectos Locales).
Para llamar, enviar un correo electrónico o un mensaje, pulse sobre su nombre en la escena de <strong>Tareas En Espera</strong>, y después pulse en su número de teléfono, dirección de correo electrónico o de mensaje.</div>
<div class='palm-body-text'>Si cualquier Tarea listada ha sido completada, márquela y vuelva a seleccionar la escena de <strong>Tareas En Espera</strong>, para que las Tareas padre puedan aparecer.</div>
<div id='waitingBtn' x-mojo-element='Button'></div>
<div class='palm-body-text'>Para revisar rápidamente un Proyecto, use la escena <strong>Tareas Pendientes y Futuras</strong>. Esto muestra todas sus Tareas sin terminar.</div>
<div id='toDoFutureBtn' x-mojo-element='Button'></div>
<div class='palm-body-text'>
Para una revisión en profundidad, abra la escena de esquemas para el
Proyecto y use el comando <strong>Mostrar tareas incompletas</strong>.
Esto muestra la estructura del Proyecto, y también muestra las Tareas
incompletas de las que otros son responsables.
También se puede acceder a las Notas y Tareas terminadas.</div>
<div class='palm-body-text'>Las Tareas y los Proyectos que ya no son importantes deben suprimirse.</div>

<div class='palm-body-title'>Copias de seguridad</div>
<div class='palm-body-text'>Semanalmente, debería usar el comando <strong>Copia de seguridad .../... vía correo</strong>, o (con webOS 2 o 3) debería conectar su dispositivo como Unidad USB y copiar la última copia de seguridad nocturna desde el directorio «outlines» a su ordenador de sobremesa.
Recuerde que si le roban o pierde su dispositivo, las copias de seguridad que no haya copiado en su ordenador de sobremesa no sirven para nada. Outline Tracker le facilita tanto la realización de sus copias de seguridad que si pierde sus datos por no usarlo no se lo perdonaría nunca.</div>
<div class='palm-body-text'>Crear una tarea periódica semanal para esto podría ser una buena idea. :-)</div>


					<hr />
					<h2 id='mimickingPriorities'>Mimicking Priorities</h2>
					<p>In Local projects, it is possible to use the Responsible field to mimic three levels of priority.
					Set Responsible as “me” for highest priority, “my organization” as middle priority, and “no one” as lowest priority.
					You could even set Responsible to “select from Contacts” as an even lower priority, at the expense of making the Waiting scene useless.
					</p>
					<p>Re-ordering tasks in outline scenes will affect the order in To-Do scenes.</p>


					<hr />
					<h2 id='generalReccomendations'>General Reccomendations</h2>
					<h3>New Tasks</h3>
					<p>Many things could trigger creating a new task: a phone call, an email, working on something else.
					It's usually worthwhile to create a task in the right place in your outline.
					If it's a sibling to a task in a task scene, select the sibling then tap the Nuevo Hermano button: <img src='images/new-sibling.png' align='absmiddle'>
					If it's a prerequisite to a task in a task scene, select the parent then tap the Nuevo Hijo button: <img src='images/new-child.png' align='absmiddle'>
					Otherwise, tap either the Nuevo Hermano or Nuevo Hijo button.
					In the Details scene, tap the <strong>Padre</strong> selector and select the appropriate parent from the list of padres frecuentes, or select “Seleccione de todos...” to choose any item as the parent.
					</p>
					<p>You can copy and paste text from an e-mail, message or web page.  The contenido field is a good place to put this.</p>
					<p>If you have a minute, details like ámbito, responsable, fecha límite and plazo de entrega can be filled in right away.
					If you're in the middle of something, you can edit the details when you next check a task scene for the next task to work on.</p>

					<h3>Managing Projects and Goals</h3>
					<p>When you first create a project (or a goal within a project), you don't need a complete plan with all the tasks.
					Just enter the tasks on your mind.
					As you work on a project or goal, you may find that other tasks need to be done first.
					Create them as children of existing tasks (prerequisities).
					The <strong>Pendientes</strong> scenes will update to show that you can work on the prerequisite, but not its parent.</p>
					<p>If you need a complete plan, for a presentation, or to prepare a budget, enter everything into the outline.
					(You may find it useful to Export the Project so you can view it on a larger screen, or print it out.)
					The <strong>Pendientes y Futuras</strong> scene shows all the undone tasks, including tasks with undone prerequisites,
						while the <strong>Pendientes y En espera</strong> scene shows the actionable tasks for everyone.</p>

					<h3>Meetings</h3>
					<p>It's useful to switch to the <strong>En espera</strong> scene for meetings -- you can see at a glance who should be working on what.
					The <strong>Pendientes y En espera</strong> scene is also useful, to see actionable tasks for everone on a project.</p>

					<h3>Working with Dates</h3>
					<p>
					A task you could work on right away, and has no deadline, should set <em>fecha límite</em> to off.
						It will show up in task scenes right away and never be flagged overdue.
					A task you could work on right away, and has a deadline, should have fecha límite set to the deadline, and plazo de entrega set to “Ilimitado”.
					A task you can't work on yet, and has a deadline, should have fecha límite set to the deadline, and plazo de entrega set to some appropriate value.
					A task you can't work on yet, and has no deadline, should have fecha límite set to a year after the start date, and plazo de entrega set to “1 año”.
					(Formally, this is not correct.  But if you haven't made time to complete the task in a year, you should reconsider how important it is to you.)
					</p>
					<p>If an item has a time as well as a date, you can set the duración -- but that only affects how the item is displayed in the Calendar app.</p>
					<p>Your calendar should reflect the "hard landscape" of your life -- only the things that <em>must</em> be done on a day should appear there.
					That's why tasks are only displayed in the Calendar if they're still undone on their due date.
					(If your top-level tasks represent mileposts, you can change the Preferences to see completed top-level tasks in the Calendar.
					Lower-level tasks, too, if that's how you work.)</p>

				</div> <!-- End #content -->
				<div id='nav'>
					<div class='navHead'>Notes Together</div>
					<ul id='navNotesTogether'>
						<li class='page pageclass@class'>
							<a class='pagename relurl@href' href='http://example.com'></a>
						</li>
					</ul>
					<div class='navHead'>Zap Photoshare</div>
					<ul id='navZap'>
						<li class='page pageclass@class'>
							<a class='pagename relurl@href' href='http://example.com'></a>
						</li>
					</ul>
					<div class='navHead'>Outline Tracker</div>
					<ul id='navOT'>
						<li class='page pageclass@class'>
							<a class='pagename relurl@href' href='http://example.com'></a>
						</li>
					</ul>
					<div class='navHead'>PopupCalc</div>
					<ul id='navPC'>
						<li class='page pageclass@class'>
							<a class='pagename relurl@href' href='http://example.com'></a>
						</li>
					</ul>
					<div class='navHead'>ExhibitionCalc</div>
					<ul id='navEC'>
						<li class='page pageclass@class'>
							<a class='pagename relurl@href' href='http://example.com'></a>
						</li>
					</ul>
				</div> <!-- End #nav -->
			</div> <!-- End #main -->

			<div id='footer'>
				<a href='http://www.webos-internals.org/wiki/Application:Preware'>
					Available via Preware
				</a>
				<br /><img src='../aux/cu.png' width='310' height='20' alt='' />
				<p><em>GTD and Getting Things Done are trademarks of David Allen &amp; Co.</em></p>
				<address>hominidsoftware.com &mdash; Software by hominids, for hominids</address>
			</div> <!-- End #footer -->

		</div> <!-- End #outer -->
	</body>
</html>
