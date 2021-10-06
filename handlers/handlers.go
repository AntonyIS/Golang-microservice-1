// Description : handles logic for interacting with data in database

package handlers

import (
	"net/http"

	"github.com/AntonyIS/Golang-microservice-1/database"
	"github.com/gin-gonic/gin"
	"github.com/jinzhu/gorm"
)

var db *gorm.DB

// Return slice of all items available in the system
func GetItems(c *gin.Context) {

	var items []database.Item
	db.Find(&items)
	c.IndentedJSON(http.StatusOK, items)
}
