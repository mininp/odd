dll.hdd.fs.root.lib["cmd.dll"] = {
	_type: "file",
	init: (w) => {
		if (Object.keys(dll.cmd.commands).length == 0) {
			dll.cmd.commands.echo = new dll.cmd.Command((args) => { return args.join(" "); });
		}

		let man = new dll.hdd.manager();

		{
			let container = document.createElement("div");
			container.classList.add("control", "f", "flex");

			let wrapper = document.createElement("div");

			wrapper.style.padding = "1em";
			wrapper.style.flex = "1";
			wrapper.style.backgroundColor = w.window.style.backgroundColor = "#111";
			wrapper.style.color = "#ddd";
			wrapper.style.fontFamily = "FiraMono";
			wrapper.style.cursor = "text";

			let history = document.createElement("div");

			let inf = document.createElement("form");
			let path = document.createElement("label");
			let inp = document.createElement("input");

			inf.classList.add("control", "flex", "fw");
			inp.classList.add("control", "f1");

			inp.style.marginLeft = "0.5em";
			inp.style.backgroundColor = "transparent";
			inp.style.color = "#ddd";
			inp.style.border = inp.style.outline = "none";
			inp.style.fontFamily = "FiraMono";

			path.style.fontFamily = "FiraMono";
			path.innerHTML = "root/ $";

			inf.appendChild(path);
			inf.appendChild(inp);
			
			wrapper.appendChild(history);
			wrapper.appendChild(inf);

			container.appendChild(wrapper);

			w.content.appendChild(container);

			wrapper.onclick = () => inp.focus();
		}
	},
	Command: class { /* command handler commands */ },
	commands: {}
}
