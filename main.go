// Author : Antony Injila
// Contributors : Nil :)
// Project name : Golang-microservice
// Github : https://github.com/AntonyIS/Golang-microservice-1
// Description : A simple Golang microservice application show casing how different technologies can be used to make a system(CRUD)
// Technologies : Golang,Go Gin (Go REST API framework) Docker, PostgreSQL

package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

// Item Structure
type Item struct {
	ID          string  `json:"id"`
	Name        string  `json:"name"`
	Description string  `json:"description"`
	Price       float64 `json:"price"`
}

// Item slice
var items = []Item{
	{ID: "1", Name: "Nike Sneekers", Description: "Latest Nike sneekers", Price: 12.43},
	{ID: "2", Name: "Vitron HD 22 TV", Description: "This LED TV is slimmer and incorporates great aesthetic design‎‎.‎‎", Price: 112.43},
	{ID: "3", Name: "XIAOMI Redmi Note 8,", Description: "The device is equipped with sensors such as Fingerprint (rear-mounted), accelerometer, gyro, proximity, and compass.", Price: 12.43},
}

// Handlers
func getItems(c *gin.Context) {
	// Return slice of all items available in the system
	c.IndentedJSON(http.StatusOK, items)
}

// Code execution starts in the main function
func main() {
	// Call the gin routing feature
	r := gin.Default()
	// Define a route to return all items
	r.GET("/items", getItems)
	// Attach the server to route request
	r.Run("127.0.0.1:5000")

}
