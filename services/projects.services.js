import { MongoClient, ObjectId } from 'mongodb'

const client = new MongoClient("mongodb://localhost:27017")
const db = client.db("AH20231CP1")

async function getProjects(filter = {}) {
    await client.connect()

    const filtroMongo = {};

    if (filter.section) {
      filtroMongo.section = filter.section;
    }

  if (filter?.technologies) {
    filtroMongo.technologies = { $all: filter.technologies.split(";") }
  }
  
    return db.collection("Projects").find(filtroMongo).toArray()
  }


async function getProjectById(id) {
    await client.connect()
    return db.collection("Projects").findOne({ _id: new ObjectId(id) })
}

async function createProject(project) {
    await client.connect()
    await db.collection("Projects").insertOne(project)
    return project
}

async function editProject(idProject, project) {
    await client.connect()
    await db.collection("Projects").updateOne({ _id: new ObjectId(idProject) }, { $set: project })
    return project
}

async function replaceProject(idProject, project) {
    await client.connect()
    await db.collection("Projects").replaceOne({ _id: new ObjectId(idProject) }, project)
    return project
}

async function deleteProject(idProject) {
    await client.connect()
    await db.collection("Projects").deleteOne({ _id: new ObjectId(idProject) })

    return {
        id: idProject
    }
}

export {
    getProjects,
    getProjectById,
    createProject,
    editProject,
    deleteProject,
    replaceProject
}