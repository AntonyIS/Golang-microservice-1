package repository

import (
	"fmt"
	"net/http"

	"github.com/AntonyIS/Golang-microservice-1/models"
	"github.com/gin-gonic/gin"
)

var db = models.DB

// ###################### CRUD Handlers ###############################
// CREATE
func PostItem(c *gin.Context) {

	// Gets post data and stores the data into the database table
	var newItem models.Item
	// Bind request data to newItem
	if err := c.BindJSON(&newItem); err != nil {
		fmt.Println(err)
		return
	}

	models.DB.Create(&newItem)
	c.IndentedJSON(http.StatusOK, newItem)
}

// READ
func GetItems(c *gin.Context) {
	// Pulls all items from the database and returns them back to the client
	var items []models.Item
	models.DB.Find(&items)
	c.IndentedJSON(http.StatusOK, items)
}

func GetItem(c *gin.Context) {
	var item models.Item
	// Get Item ID from the request
	id := c.Param("id")
	// Get Item with the request id from the database
	models.DB.First(&item, id)

	// Check if item.Name, item.Description and item.Price is "" empty strigns
	if item.Name == "" && item.Description == "" && item.Price == 0 {
		c.IndentedJSON(http.StatusNotFound, gin.H{
			"message": "No item found",
		})
		return
	}
	// Return found item to client
	c.IndentedJSON(http.StatusOK, item)
}

// UPDATE
func UpdateItem(c *gin.Context) {
	var item models.Item
	// Get Item ID from the request
	id := c.Param("id")
	// Item from db
	models.DB.First(&item, id)
	// Check if item.Name, item.Description and item.Price is "" empty strigns
	if item.Name == "" && item.Description == "" && item.Price == 0 {
		c.IndentedJSON(http.StatusNotFound, gin.H{
			"message": "No item found",
		})
		return
	}

	// Item from request body
	var updateItem models.Item
	// Bind request data to updateItem
	if err := c.BindJSON(&updateItem); err != nil {
		return
	}
	// Update item from db
	item.Name = updateItem.Name
	item.Description = updateItem.Description
	item.Price = updateItem.Price
	item.ImageURL = updateItem.ImageURL

	models.DB.Save(&item)

	c.IndentedJSON(http.StatusOK, item)

}

// DELETE
func DeleteItem(c *gin.Context) {
	var item models.Item
	var items models.Item
	// Get Item ID from the request
	id := c.Param("id")
	models.DB.First(&item, id)
	// Check if item.Name, item.Description and item.Price is "" empty strings
	if item.Name == "" && item.Description == "" && item.Price == 0 && item.ID == 0 {
		c.IndentedJSON(http.StatusNotFound, gin.H{
			"message": "No item found",
		})
		return
	}
	// Item from db
	models.DB.Delete(&item, id)

	// return remaining items in db
	models.DB.Find(&items)

	c.IndentedJSON(http.StatusOK, items)
}
