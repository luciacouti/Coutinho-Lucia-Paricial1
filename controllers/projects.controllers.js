import * as service from '../services/projects.services.js'
import * as view from '../views/projects.views.js'



function getProjects(req, res) {
 const filter = req.query

 service.getProjects(filter)
     .then(function (projects) {
      res.send(view.createProjectListPage(projects))
     })
}

async function getProjectById(req, res) {
    let idProject = req.params.idProject // 1
    const project = await service.getProjectById(idProject)

    if (project) {
        res.send(view.createProjectPage(project || []))
    }
    else {
        res.send(view.createPage('Error', '<p>Proyecto no encontrado</p>'))
    }
}

function createProjectFormPage(req, res) {
    res.send(view.createProjectFormPage())
}

function createProject(req, res) {
    const project = {
        name: req.body.name,
        description: req.body.description,
        link: req.body.link,
        img: req.body.img,
        technologies: req.body.technologies.split(',').map(item=>item.trim()),
        section: req.body.section,
    }

    service.createProject(project)
        .then(function (newProject) {
            res.send(view.createPage('Proyecto creado', `<p>Proyecto ${newProject.name} creado con el id ${newProject._id}</p>`))
        })
        .catch(function (error) {
            res.send(view.createPage('Error', `<p>Ocurrio un error</p>`))
        })


}

function editProjectForm(req, res) {

    const id = req.params.idProject

    service.getProjectById(id)
        .then(function (project) {
            if (project) {
                res.send(view.createEditProjectFormPage(project))
            }
            else {
                res.send(view.createPage('No se encontro!', '<h1>No se encontro el projecto solicitado</h1>'))
            }
        })

}

function editProject(req, res) {

    const id = req.params.idProject

    const project = {
     name: req.body.name,
     description: req.body.description,
     link: req.body.link,
     img: req.body.img,
     technologies: req.body.technologies.split(',').map(item=>item.trim()),
     section: req.body.section,
    }


    service.editProject(id, project)
        .then(function (project) {
            if (project) {
                res.send(view.createPage('Proyecto Modificado', `<div class="container"><h2>Proyecto "${project.name}" modificado con exito!</h2><a href="/projects">Volver</a></div>`))
            }
            else {
                res.send(view.createPage('No se encontro!', '<h1>No se encontro el projecto solicitado</h1>'))
            }
        })
}

function deleteProjectForm(req, res) {
    const id = req.params.idProject

    service.getProjectById(id)
        .then(function (project) {
            if (project) {
                res.send(view.createDeleteProjectFormPage(project))
            }
            else {
                res.send(view.createPage('No se encontro!', '<h1>No se encontro el proyecto solicitado</h1>'))
            }
        })

}

function deleteProject(req, res) {
    const id = req.params.idProject

    service.deleteProject(id)
        .then(function (project) {
            if (project) {
                res.send(view.createPage('Proyecto Eliminado', `<div class="container"><h2>Proyecto eliminado con exito!</h2><a href="/projects">Volver</a></div>`))
            }
            else {
                res.send(view.createPage('No se encontro!', '<h1>No se encontro el proyecto solicitado</h1>'))
            }
        })
}

export {
    getProjects,
    getProjectById,
    createProjectFormPage,
    createProject,
    editProjectForm,
    editProject,
    deleteProject,
    deleteProjectForm
}
