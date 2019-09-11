var bodyParser = require('body-parser')
var express = require('express')
var app = express()

var request = require('request')
var mongoose = require('mongoose')
var Book = require("./models/BookModel")
var Person = require("./models/PersonModel")

mongoose.connect("mongodb://localhost/mongoose-practice")

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
