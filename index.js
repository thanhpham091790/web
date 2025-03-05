import { data } from './projectData.js';

const projectContainer = document.getElementById('projects');

data.map(dataObj => {
    const yearContainer = document.createElement('div');
    yearContainer.id = dataObj.year;
    yearContainer.classList.add("year");

    const year = document.createElement('h2');
    year.textContent = dataObj.year;
    yearContainer.appendChild(year);

    const projects = document.createElement('ul');
    dataObj.projects.map(project => {
        const projectLi = document.createElement('li');
        const projectA = document.createElement('a');
        projectA.href = `./projects/${project.url}`;
        projectA.textContent = project.name;
        projectLi.appendChild(projectA);
        projects.appendChild(projectLi);
    });
    yearContainer.appendChild(projects);

    projectContainer.appendChild(yearContainer);
});