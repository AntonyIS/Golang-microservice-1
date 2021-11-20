package handlers

import (
	"github.com/AntonyIS/Golang-microservice-1/repository"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func GetHandlers() {

	// Call the gin routing feature
	r := gin.Default()

	r.Use(cors.Default())

	// Define routes to return all items
	r.GET("/items", repository.GetItems)

	// Define route to return items with id
	r.GET("/items/:id", repository.GetItem)

	// Define route to post items
	r.POST("/items/post", repository.PostItem)

	// Define route to update items
	r.PUT("/items/update/:id", repository.UpdateItem)

	// Define route to update items
	r.DELETE("/items/delete/:id", repository.DeleteItem)

	// Run the server
	r.Run(":5000")
}
