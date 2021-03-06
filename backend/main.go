// Author : Antony Injila
// Contributors : Nil :)
// Project name : Golang-microservice
// Github : https://github.com/AntonyIS/Golang-microservice-1
// Description : A simple Golang microservice application show casing how different technologies can be used to make a system(CRUD)
// Technologies : Golang,Go Gin (Go REST API framework) Docker, PostgreSQL

package main

import (
	"github.com/AntonyIS/Golang-microservice-1/handlers"
	"github.com/AntonyIS/Golang-microservice-1/models"

	_ "github.com/jinzhu/gorm/dialects/postgres"
)

// Code execution starts in the main function
func main() {

	// Initialize the database and database models
	models.Setup()
	// Close the databse after initiliazing it
	defer models.DB.Close()

	// Initilize the api endpoints
	handlers.GetHandlers()

}
