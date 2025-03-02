import { data } from './projects.js';

const root = document.getElementById('root');

data.map(dataObj => {
    const container = document.createElement('div');
    container.id = dataObj.year;
    container.classList.add("year");

    const year = document.createElement('h2');
    year.textContent = dataObj.year;
    container.appendChild(year);

    const projects = document.createElement('ul');
    dataObj.projects.map(project => {
        const projectLi = document.createElement('li');
        const projectA = document.createElement('a');
        projectA.href = `./projects/${project.url}`;
        projectA.textContent = project.name;
        projectLi.appendChild(projectA);
        projects.appendChild(projectLi);
    });
    container.appendChild(projects);

    root.appendChild(container);
});