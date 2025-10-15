// recupera solo el primer boton que encuentre
// const boton = document.querySelector('.button-apply-job')
// console.log(boton) // null si no lo encuentra

// if (boton !== null) {
//   boton.addEventListener('click', function() {
//     boton.textContent = '¡Aplicado!'
//     boton.classList.add('is-applied')
//     boton.disabled = true
//   })
// }

// const botones = document.querySelectorAll('.button-apply-job')
// // devuelve un NodeList (array-like) con todos los botones que encuentre
// // o una lista vacia [] si no encuentra ninguno

// botones.forEach(boton => {
//   boton.addEventListener('click', function() {
//     boton.textContent = '¡Aplicado!'
//     boton.classList.add('is-applied')
//     boton.disabled = true
//   })
// })

const jobsListingSection = document.querySelector('.jobs-listings')

jobsListingSection.addEventListener('click', function(event) {
  const element = event.target

  if (element.classList.contains('button-apply-job')) {
    element.textContent = '¡Aplicado!'
    element.classList.add('is-applied')
    element.disabled = true
  }
})

const filter = document.querySelector('#filter-technology')
var mensaje = document.querySelector('#value-filter')
var jobs = document.querySelectorAll('.job-listing-card')

filter.addEventListener('change', function () {
  const selectValue = filter.value

  if (selectValue) {
    mensaje.textContent = 'Ha seleccionado: '+ selectValue
  }else{
    mensaje.textContent = ''
  }
  // console.log(jobs)
  jobs.forEach(job => {
    const modalidad = job.dataset.modalidad
    console.log(modalidad)
    console.log(job)

    if (modalidad === '' || selectValue == modalidad) {
      job.style.display = 'flex'
    } else {
      job.style.display = 'none'
    }
    
  });
})