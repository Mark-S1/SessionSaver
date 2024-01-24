let urls = JSON.parse(localStorage.getItem("session")) || [];
updateList();

document.getElementById("add-button").addEventListener("click", () => {
	let urlElem = document.getElementById("site-link");
	
	if(urlElem.value.startsWith("http")) {
		urls.push(urlElem.value);
		updateList();
		localStorage.setItem("session", JSON.stringify(urls));
	}
	
	urlElem.value = "";
});

document.getElementById("open-button").addEventListener("click", openAll);
document.getElementById("clear-button").addEventListener("click", clearStorage);

function updateList() {
	let ul = document.createElement("ul");
	
	for(let i = 0; i < urls.length; i++) {
		let li = document.createElement("li");
		let anchor = document.createElement("a");
		
		anchor.href = urls[i];
		anchor.innerText = urls[i].length > 100 ? urls[i].substring(0,100) + "..." : urls[i];
		anchor.target = "_blank";
		
		li.appendChild(anchor);
		ul.appendChild(li);
	}
	
	let sessionList = document.getElementById("session-list");
	sessionList.innerHTML = "";
	sessionList.appendChild(ul);
}

function openAll() {
	for(let i = 0; i < urls.length; i++) {
		window.open(urls[i], "_blank");
	}
}

function clearStorage() {
	let confirm = window.confirm("Warning: This will clear your local data for session saver. Proceed?");
	
	if(confirm) localStorage.clear();
}