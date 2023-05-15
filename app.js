import express from 'express'
import ProjectRoute from './routes/projects.routes.js'

const app = express() 

app.use(express.urlencoded({ extended: true })) 
app.use('/api', express.json())

app.use('/', express.static('public'))

app.use('/', ProjectRoute)

app.listen(2222, function () {
    console.log('Server corriendo en http://localhost:2222')
})
