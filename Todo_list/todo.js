function addTask(){
	var task = document.getElementById('task').value;
	var list = document.getElementById('list');
	var item = document.createElement('li');
	item.innerHTML = task;
	list.appendChild(item);
	document.getElementById('task').value = '';
}
