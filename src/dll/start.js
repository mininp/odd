dll.start = {};

dll.start.startMenu = class extends dll.window.Window {
	constructor() {
		super(1, [], false);

		this.appdata.init = (window) => {
			let w = window.window;

			w.classList.add("start");
		}

		this.content.innerHTML = `
			<div class="control list light">
				<div class="control list-item">Productivity</div>
				<div class="control list-item">Programming</div>
				<div class="control list-item">Tools</div>
				<div class="control list-item">Games</div>
				<div class="control list-item">File Manager</div>
				<div class="control list-item">Settings</div>

				<div class="control divider"></div>

				<div class="control list-item">About</div>

				<div class="control divider"></div>

				<div class="control list-item">Shutdown</div>
				<div class="control list-item">Restart</div>
				<div class="control list-item">Logout</div>
				<div class="control list-item">Sleep</div>
			</div>
		`;

		this.appdata.init(this);
	}
}

dll.start.menu = null;

dll.start.open = () => {
	dll.start.menu.window.classList.toggle("minimized");
	dll.start.menu.MoveToFront();
}

dll.start.init = async () => { return new Promise((res, err) => {
	let layerWall = document.getElementById("odd-container").getElementsByClassName("wall")[0];
	let layerApp = document.getElementById("odd-container").getElementsByClassName("app")[0];
	let button = document.getElementsByTagName("nav")[0].getElementsByClassName("start")[0];
	
	dll.start.menu = new dll.start.startMenu();
	dll.start.menu.window.classList.add("minimized", "fglass");

	button.addEventListener("click", (e) => {
		dll.start.open();
	});

	dll.start.menu.window.addEventListener("click", (e) => {
		switch (e.target.innerText) {
			case "Logout": break;
			case "Restart": break;
			case "Shutdown": break;
			case "Sleep": break;

			case "File Manager": new dll.window.Window(2, ["root"]); break;
			case "Settings": new dll.window.Window(3); break;
			case "About": new dll.window.Window(5); break;

			case "Productivity": new dll.window.Window(2, ["root", "home", "libraries", "Productivity"]); break;
			case "Programming": new dll.window.Window(2, ["root", "home", "libraries", "Programming"]); break;
			case "Tools": new dll.window.Window(2, ["root", "home", "libraries", "Tools"]); break;
			case "Games": new dll.window.Window(2, ["root", "home", "libraries", "Games"]); break;
		}
	});

	document.addEventListener("click", (e) => {
		let targetClasses = e.target.attributes.class;

		if (targetClasses) { targetClasses = targetClasses.nodeValue } else { return }

		if (targetClasses != "start") {
			dll.start.menu.window.classList.add("minimized");
		}
	});

	res(1);
}); }
