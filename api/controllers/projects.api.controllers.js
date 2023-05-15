import * as service from '../../services/projects.services.js'

function getProjects(req, res) {
    const filter = req.query

    service.getProjects(filter)
        .then(function (projects) {
            res.status(200).json(projects)
        })
}

function createProject(req, res) {
    service.createProject(req.body)
        .then(function (project) {
            return res.status(201).json(project)
        })
}

function getProjectById(req, res) {
    const idProject = req.params.idProject

    service.getProjectById(idProject)
        .then(function (project) {
            if (project) {
                res.status(200).json(project)
            }
            else {
                res.status(404).json({ error: { message: `No se encuentra el proyecto #${idProject}` } })
            }
        })
}

function replaceProject(req, res) {
    const idProject = req.params.idProject

    service.editProject(idProject, req.body)
        .then(function (project) {
            if (project) {
                res.status(200).json(project)
            }
            else {
                res.status(404).json({ error: { message: `No se encuentra el proyecto #${idProject}` } })
            }
        })
}

function updateProject(req, res) {
    const idProject = req.params.idProject

    service.editProject(idProject, req.body)
        .then(function (project) {
            if (project) {
                res.status(200).json(project)
            }
            else {
                res.status(404).json({ error: { message: `No se encuentra el proyecto #${idProject}` } })
            }
        })
}

function deleteProject(req, res) {
    const idProject = req.params.idProject

    service.deleteProject(idProject)
        .then(function (project) {
            if (project) {
                res.status(200).json(project)
            }
            else {
                res.status(404).json({ error: { message: `No se encuentra el proyecto #${idProject}` } })
            }
        })
}


export {
    getProjects,
    createProject,
    getProjectById,
    replaceProject,
    updateProject,
    deleteProject
}