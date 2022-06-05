'use strict'
/* eslint-env node, es6 */

// import paquet express
const express = require('express')

const PORT = 8030
const INDEX_IMAGES = 'C:/Users/LENOVO/PROJETTMS/TMSBAHDIALLO/FRONTEND/images/'
const INDEX_STYLES = 'C:/Users/LENOVO/PROJETTMS/TMSBAHDIALLO/FRONTEND/styles/'

// Creation d'une application express
const app = express()

// importer la page d'accueil
const geneModele = require('./pages/page-get.js')

// Creation des routes ou adresses en ecoutant la méthode GET (pour commenter ctrl+k+c)
// app.get('/', async(req, resp) =>{
//     const indexHtml = await geneModele('index')
//     resp.send(indexHtml)
// })

// // Ecoute pour le contact
// app.get('/contact', async(req, resp) =>{
//     const contactHtml = await geneModele('contact')
//     resp.send(contactHtml)
// })

// routes dynamiques avec les expressions régulières javaScript
const NOM_PAGES = {
    'nous-contacter': 'contact',
    'accueil': 'index',
    'qui-somme-nous': 'propos',
    'connexion': 'login',
    'enregistrer': 'registe',
}
app.get(/^\/(|nous-contacter)$/, async(req, resp) =>{
    const nomPage = NOM_PAGES[req.params[0]] === '' || 'index'

    const contactHtml = await geneModele(nomPage)
    resp.send(contactHtml)
})

//!!!!!!!!
//Normalement l'app nodeJS ne doit pas retourner les tâches statiques seulement les tâches dynamiques,
// On utilise un serveur web pour gerer les fichiers statiques 
//Retourner les images, styles
app.use('/images', express.static(INDEX_IMAGES))
app.use('/styles', express.static(INDEX_STYLES))

// l'application ecoute le port 
app.listen(PORT, () =>{
    console.log('Le serveur a demmaré : http://localhost:${PORT}')
})

