(function() {

	function toggle(event) {
		
		var nav = document.getElementById("main-nav");
		
		var expanded = event.currentTarget.getAttribute("aria-expanded");
		nav.classList.toggle("expanded");
		event.currentTarget.setAttribute('aria-expanded',(expanded=="true")? "false":"true");

	}

	document.getElementById("menu-toggle").addEventListener('click',toggle,false)

}());
