'use strict'

/* eslint-env node, es6 */

// if faut privilegier les fonctions async pour éviter le blocage de l'app

// import
const {join} = require('path')
const {readFile} = require('fs')
const {promisify} = require('util')

const readFileAsync = promisify(readFile)

// Variables
const READ_OPTIONS = { encoding: 'utf-8' }
const HTML_URL = 'C:/Users/LENOVO/PROJETTMS/TMSBAHDIALLO/FRONTEND/html'

// Fonctions
const lireFichierHtml = file =>
    readFileAsync(join(HTML_URL, file), READ_OPTIONS)

module.exports = async nomPage => {
    //Opération, recuperer le contenu des fichiers html en 'parallele' avec Promise.all
    const [
        modelHtml,
        headHtml,
        bodyHtml,
    ] = await Promise.all([
        lireFichierHtml('modele.html'),
        lireFichierHtml(`${nomPage}.head.html`),
        lireFichierHtml(`${nomPage}.body.html`)
    ])

    const indexHtml = modelHtml
        .replace('{{EN-TETE}}', headHtml)
        .replace('{{CORPS}}', bodyHtml)

    // retourner la page html dynamique
    return indexHtml
}
