// Description : handles logic for interacting with data in database

package handlers

import (
	"github.com/gin-gonic/gin"
	"github.com/jinzhu/gorm"
)

// Return slice of all items available in the system
func GetItems(c *gin.Context, db *gorm.DB) {
	var items []Item
	db.Find(&items)
	return items
}
