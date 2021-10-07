// Author : Antony Injila
// Contributors : Nil :)
// Project name : Golang-microservice
// Github : https://github.com/AntonyIS/Golang-microservice-1
// Description : A simple Golang microservice application show casing how different technologies can be used to make a system(CRUD)
// Technologies : Golang,Go Gin (Go REST API framework) Docker, PostgreSQL

package main

import (
	"fmt"
	"net/http"

	"os"
	"github.com/gin-gonic/gin"
	"github.com/jinzhu/gorm"
	"github.com/joho/godotenv"

	_ "github.com/jinzhu/gorm/dialects/postgres"
)

var db *gorm.DB

var err error

// Item Structure
type Item struct {
	gorm.Model
	Name        string  `json:"name"`
	Description string  `json:"description"`
	Price       float64 `json:"price"`
}

func GetItems(c *gin.Context) {
	// Pulls all items from the database and returns them back to the client
	var items []Item
	db.Find(&items)
	c.IndentedJSON(http.StatusOK, items)
}

func GetItem(c *gin.Context) {
	var item Item
	// Get Item ID from the request
	id := c.Param("id")
	// Get Item with the request id from the database
	db.First(&item, id)
	// Return found item to client
	c.IndentedJSON(http.StatusOK, item)
}

func PostItem(c *gin.Context) {
	// Gets post data and stores the data into the database table
	var newItem Item
	// Bind request data to newItem
	if err := c.BindJSON(&newItem); err != nil {
		return
	}
	db.Create(&newItem)
	c.IndentedJSON(http.StatusOK, newItem)

}
func setup() {
	godotenv.Load(".env")
	var (
		host     = os.Getenv("DB_HOST")
		port     = os.Getenv("DB_PORT")
		user     = os.Getenv("DB_USER")
		dbname   = os.Getenv("DB_NAME")
		password = os.Getenv("DB_PASSWORD")
	)

	
	// Connection string to the data
	conn := fmt.Sprintf("host=%s port=%s user=%s dbname=%s sslmode=disable password=%s", host, port, user, dbname, password)

	// // Execute database connection
	db, err = gorm.Open("postgres", conn)

	// // Check if connection to database has error or issues
	if err != nil {
		fmt.Println(err)
		panic("Failed to connect to the database")
	}

	// // Create a Items table in the database if it does exists
	db.AutoMigrate(&Item{})
	// // Setup database connection
}

// Code execution starts in the main function
func main() {

	setup()
	defer db.Close()

	// Call the gin routing feature
	r := gin.Default()
	// Define routes to return all items
	r.GET("/items", GetItems)

	// Define route to return items with id
	r.GET("/items/:id", GetItem)

	// Define route to post items
	r.POST("/items", PostItem)

	// Attach the server to route request
	r.Run(":5000")

}
