import { state } from "../assets/config.js";

state.count++;

console.log(state);

// FILTRO DE EMPLEOS
const filters = document.querySelectorAll(".search-filters select");
const mensaje = document.querySelector("#value-filter");

filters.forEach((filter) => {
    filter.addEventListener("change", function () {
        const jobs = document.querySelectorAll(".job-listing-card");

        // Se obtienen los valores de los filtros
        const selectedTechnology = document.querySelector('#filter-technology').value;
        const selectedLocation = document.querySelector('#filter-location').value;
        const selectedLevel = document.querySelector('#filter-experience-level').value;

        const selectedValue = filter.value;

        if (selectedValue) {
            mensaje.textContent = `Has seleccionado: ${selectedValue}`;
        } else {
            mensaje.textContent = "";
        }

        // Filtrar empleos
        jobs.forEach((job) => {
            const tecnologia = job.getAttribute('data-technology')?.split(',') || [];
            const modalidad = job.getAttribute('data-modalidad');
            const nivel = job.getAttribute('data-nivel');

            const coincideTecnologia = !selectedTechnology || tecnologia.includes(selectedTechnology);
            const coincideModalidad = !selectedLocation || selectedLocation === modalidad;
            const coincideNivel = !selectedLevel || selectedLevel === nivel;

            const isShown = coincideTecnologia && coincideModalidad && coincideNivel;

            job.classList.toggle('is-hidden', !isShown);
        });
    });
});

// BUSCADOR DE EMPLEOS
const cuadroBusqueda = document.querySelector('#empleos-search-input');

cuadroBusqueda.addEventListener('input', function () {
    const empleoBuscado = cuadroBusqueda.value.toLowerCase();
    const jobs = document.querySelectorAll('.job-listing-card');

    jobs.forEach((job) => {
        const titulo = job.querySelector('#job-title').textContent.toLowerCase();
        const descripcion = job.querySelector('#job-description').textContent.toLowerCase();

        if (titulo.includes(empleoBuscado) || descripcion.includes(empleoBuscado)) {
            job.classList.remove('is-hidden');
        } else {
            job.classList.add('is-hidden');
        }
    });
});
