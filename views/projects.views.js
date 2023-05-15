import { createPage } from '../pages/utils.js'

function createProjectListPage(projects) {
    let html = '<div class="container">'
    html += '<div class="row d-flex justify-content-between">'
    html += '<div class="col-6 px-5"><h1>Lista de Proyectos</h1></div>'
    html += `<div class="col-6 text-right"><a class="float-right" href="/projects/nuevo">
    <btn class="btn btn-vermas my-2">Crear nuevo proyecto</btn> 
    </a></div>`
    html += '</div>' // row
    
    html += '<ul class="row">'
    
    for (let i = 0; i < projects.length; i++) {

     html += `
    
     <div class="col-6 col-md-4 col-lg-3 p-3">
     <div class="card">
     
      <img src="${projects[i].img}" alt="${projects[i].name}" class="card-img-top">
         <div class="card-body p-4">
                <p class="card-title">${projects[i].name}</p>
                <p class="card-categoria">${projects[i].section}</p>
                <a href="/projects/${projects[i]._id}">
                <btn class="btn btn-vermas w-100 my-2">Ver más</btn> 
                </a>
                <div class="row d-flex">
                <div class="col-lg-6">
                <a href="/projects/${projects[i]._id}/edit">
                <btn class="btn btn-editar my-2 w-100">Editar</btn> 
                </a>
                </div>
                <div class="col-lg-6">
                <a href="/projects/${projects[i]._id}/delete">
                <btn class="btn btn-borrar my-2 w-100">Borrar</btn> 
                </a>
                </div>
                </div>
               
         </div>
         
    </div>
    </div>
    
    `;
    }

    html += '</ul>'
    html += '</div>'

    return createPage('Proyectos', html)
}

function createProjectPage(project) {

 let html = ` <div class="container">
                 
 <div class="row py-5 align-items-center">
 <div class="col-12 col-md-4 py-5"><img src="${project.img}" alt="${project.name}" class="card-img-top imagen"></div>
 <div class="col-12 col-md-8 py-5">
 <h2 class="card-title">${project.name}</h2>

<p class="card-text">${project.description}</p>
<a class="card-text" href="${project.link}">Ir al repositorio de github</a>
<p class="card-text">Tecnologías usadas: `
for (let i = 0; i < project.technologies.length; i++){
 html += `${project.technologies[i]}, `
}

html += `</p>

<p class="card-categoria">Categoría: ${project.section}</p>
<a href="/projects" class="btn btn-vermas"><btn>Volver</btn></a>
</div>
</div>
</div>`;


    return createPage(project.name, html)
}

function createProjectFormPage() {
    let html = '<div class="container formu">'
    html += '<h1 class="mb-5">Crear Proyecto</h1>'
    html += '<form action="/projects/nuevo" method="POST">'
    html += '<div class="form-group"><input type="text" name="name" placeholder="Nombre del proyecto"></div>'
    html += '<div class="form-group"><input type="text" name="description" placeholder="Descripción"></div>'
    html += '<div class="form-group"><input type="text" name="link" placeholder="Link al repositorio"></div>'
    html += '<div class="form-group"><input type="text" name="img" placeholder="Link a la img"></div>'
    html += '<div class="form-group"><input type="text" name="technologies" placeholder="Teconologías usadas"></div>'
    html += '<div class="form-group"><select name="section"><option value="ecommerce">Ecommerce</option><option value="webapp">Web App</option><option value="landing">Landing Pages</option><option value="mobile">Mobile</option><option value="game">Game</option></select></div>'
    html += '<div class="form-group"><button type="submit" class="btn btn-vermas my-3">Crear</button>'
    html += '</form>'
    html += '</div>'

    return createPage('Crear Proyecto', html)
}


function createEditProjectFormPage(project) {
 let html = '<div class="container formu">'  
 html += '<h1>Modificar Proyecto</h1>'
    html += `
    <form action="/projects/${project._id}/edit" method="POST">`
    html += `<div class="form-group"><input type="text" name="name" placeholder="Nombre del proyecto" value="${project.name}"></div>`
    html += `<div class="form-group"><input type="text" name="description" placeholder="Descripción" value="${project.description}"></div>`
    html += `<div class="form-group"><input type="text" name="link" placeholder="Link al repositorio" value="${project.link}"></div>`
    html += `<div class="form-group"><input type="text" name="img" placeholder="Link a la img" value="${project.img}"></div>`
    
    
    
    html += `<div class="form-group"><input type="text" name="technologies" placeholder="Teconologías usadas" value="`
    for (let i = 0; i < project.technologies.length; i++){
     html += `${project.technologies[i]}, `
    }
    html += '"></div>'
    html += `<div class="form-group"><select name="section" ><option value="ecommerce">Ecommerce</option><option value="webapp">Web App</option><option value="landing">Landing Pages</option><option value="mobile">Mobile</option><option value="game">Game</option></select></div>`
    html += '<div class="form-group"><button type="submit" class="btn btn-vermas my-3">Modificar</button></div>'
    html += '</form>'
    html += '</div>'

    return createPage('Modificar Proyecto', html)
}

function createDeleteProjectFormPage(project) {
    let html = `<div class="container">`
    html += `<h1>${project.name}</h1>`
    
    html += `<p>${project.description}</p>`

    html += `<form action="/projects/${project._id}/delete" method="POST">
    <p>Deseas eliminar este proyecto?</p>
        <button type="submit" class="btn btn-vermas my-3">Eliminar</button>
    </form>`

    return createPage(project.name, html)
}


export {
    createProjectListPage,
    createProjectPage,
    createPage,
    createProjectFormPage,
    createEditProjectFormPage,
    createDeleteProjectFormPage
}