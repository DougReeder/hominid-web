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

		<title>Primeros Pasos con Outline Tracker</title>
	</head>
	<body id='gettingStarted'>
		<div id='outer'>

			<div id='header'>
				<a href="/"><img src='../aux/icon64_2.png' class='headerIcon' /></a>
				<h1>Primeros Pasos con Outline Tracker</h1>
				<p>The leading task list manager for Palm webOS!</p>
			</div>

			<div class='onlyif1col'>
				<a href='#nav'>Skip to navigation</a>
			</div>

			<div id='main'>
				<div id='content'>
					<h2>Terminología</h2>


<div class='palm-body-text'>
	Un <em>Elemento</em> de Outline Tracker puede ser una <em>Tarea</em> o una <em>Nota</em>.
	Una <em>Tarea</em> tiene una casilla de verificación <div style='display: inline-block; vertical-align:middle; width: 33px; height: 27px; background: url(images/checkbox-responsible-class-1.png) bottom no-repeat;'></div>
	para indicar que ha sido completada.
	Una <em>Nota</em> puede agrupar Tareas, contener algún texto que quiera recordar, o ser simplemente una cita.
</div>
<div class='palm-body-text'>
	Los elementos se agrupan en <em>Proyectos</em>.  Los Proyectos <em>Locales</em> son privados. Los Proyectos <em>Basecamp Classic</em> pueden compartirse.
	Puede poner todos sus elementos en un Proyecto, o crear un nuevo Proyecto para cualquier objetivo con más de una Tarea.
</div>
<div class='palm-body-title'>Escena de Tareas</div>
<div class='palm-body-text'>
	La primera carta en Outline Tracker muestra las Tareas en las que puede trabajar de todos los Proyectos.
	<ul>
		<li>La escena de <strong>Tareas Pendientes</strong> muestra sólo tareas en las que puede trabajar ahora.</li>
		<li><strong>Tareas Pendientes y Futuras</strong> también muestra Tareas en las que todavía no puede trabajar.</li>
		<li><strong>Tareas Pendientes y En espera</strong> muestra además Tareas que está esperando que otros realicen.</li>
		<li>La escena <strong>Tareas En espera</strong> muestra Tareas que está esperando que otros realicen.</li>
		<li>La escena <strong>Elementos por Fecha Límite</strong> muestra todas las Tareas incompletas y las Notas con Fecha Límite, ordenadas por Fecha Límite.</li>
		<li>La escena de <strong>Todos los elementos</strong> se usa en la busqueda de elementos.</li>
	</ul>
</div>
<div class='palm-body-text'>
	Pulse la cabecera de la escena para seleccionar una escena de tareas diferente:
	<div class='headerSample'>Lorem Ipsum</div>
</div>
<div class='palm-body-text'>
      Seleccionando una Tarea y pulsando el botón «Mostrar en esquema»
              <img src='images/outline-icon.png' align='top' />
      se mostrará la Tarea en su <em>Escena de esquema</em>.
</div>
<div class='palm-body-title'>Escenas de Esquema</div>
<div class='palm-body-text'>
	Cada Proyecto tiene una carta propia que muestra un esquema de todas sus Tareas y Notas.
	Para abrir una <em>Escena de esquema</em>, desde el menú de la aplicación, seleccione <strong>Mostrar Proyecto &gt; <em>nombre del proyecto</em></strong>.
</div>
<div class='palm-body-text'>
	Las Tareas Hijas son <em>requisito previo</em> de sus Tareas Padres &mdash; las Tareas Hijas deben completarse antes para que se pueda completar la Tarea Padre.
	Para añadir un hijo a un elemento, seleccione el elemento y pulse el botón Nuevo Hijo: <img src='images/new-child.png' align='absmiddle'>
	<br />Para añadir un nuevo hermano después de un elemento, seleccione el elemento y pulse el botón Nuevo Hermano: <img src='images/new-sibling.png' align='absmiddle'>
	<br />Los hijos y hermanos heredan los detalles del elemento seleccionado independientemente de que sea una Nota o Tarea, heredan Ámbito, Responsable y Fecha.
</div>
<div class='palm-body-text'>
	Pulse el bolo a la izquierda de un elemento
	(<div style='display: inline-block; vertical-align:middle; width: 48px; height: 48px; background: url(images/knob-parent.png) top no-repeat;'></div> o
	<div style='display: inline-block; vertical-align:middle; width: 48px; height: 48px; background: url(images/knob-content.png) top no-repeat;'></div>)
	para expandirlo o compactarlo (muestra o oculta su contenido de texto y elementos hijos).
</div>
<div class='palm-body-text'>
	Para muevo un elemento, pulse el elemento durante medio segundo, después arrástrelo arriba o abajo.
	Si lo suelta <strong>sobre</strong> otro elemento, se convertirá en hijo de ese elemento.
	Si suelta el primer elemento <strong>entre</strong> dos elementos, se colocará antes de este último elemento.
</div>
<div class='palm-body-text'>
	Para borrar un elemento, use el gesto de arrastrarlo a la izquierda o a la derecha, como en una lista.
</div>
<div class='palm-body-text'>
	Pulse la cabecera de la escena: <div class='headerSample'>Nombre del proyecto</div>
	<br />para <strong>Mostrar tareas incompletas</strong>, <strong>Compactarlos Todos</strong>, <strong>Expandirlos Todos</strong> (los elementos), cambiar las <strong>Preferencias</strong> [del] <strong>Proyecto</strong>, o <strong>Exportar</strong> [el proyecto] <strong>via correo</strong>.
</div>


				</div> <!-- End #content -->
				<div id='nav'>
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
				<!--
				<a class='desktoponlyinline' href='http://developer.palm.com/webChannel/index.php?packageid=com.outlinetracker.outlinetracker'>
					<img src='visuals/app_catalog.png' width='361' height='110' alt='Available in the App Catalog on webOS devices' />
				</a>
				-->
				<a href='https://www.webos-internals.org/wiki/Application:Preware'>
					Available via Preware
				</a>
				<br /><img src='../aux/cu.png' width='310' height='20' alt='' />
				<address><a href="/">hominidsoftware.com</a> &mdash; Software by hominids, for hominids</address>
			</div> <!-- End #footer -->

		</div> <!-- End #outer -->
	</body>
</html>
