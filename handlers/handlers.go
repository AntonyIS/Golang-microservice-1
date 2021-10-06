// Description : handles logic for interacting with data in database

package handlers

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

// Return slice of all items available in the system
func GetItems(c *gin.Context) {
	c.IndentedJSON(http.StatusOK, gin.H{"message": "No records"})
}
