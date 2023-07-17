// This was made with AI, I didn't make it. I'm going to start being shorter with these messages because all of this
// work creating function within the site is really hampering actual learning here.

fetch('projects.json')
	.then(response => response.json())
	.then(data => {
		const projectList = document.getElementById('project-list');
		data.forEach(project => {
			const listItem = document.createElement('li');
			const link = document.createElement('a');
			link.href = project.link;
			link.textContent = project.title;
			const time = document.createElement('time');
			time.datetime = project.datetime;
			time.classList.add('small', 'text-muted');
			time.textContent = project.date;

			listItem.appendChild(link);
			listItem.appendChild(time);
			projectList.appendChild(listItem);
		});
	});