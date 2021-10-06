// Description : handles setting up database connection

package database

import (
	"fmt"
	"os"

	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/postgres"
)

var db *gorm.DB

var err error

// Define variables that enable and authenticate to PostgreSQL
var (
	dialect  = os.Getenv("dialect")
	host     = os.Getenv("host")
	port     = os.Getenv("port")
	user     = os.Getenv("user")
	dbname   = os.Getenv("dbname")
	password = os.Getenv("password")
)

// Item Structure
type Item struct {
	ID          string  `json:"id"`
	Name        string  `json:"name"`
	Description string  `json:"description"`
	Price       float64 `json:"price"`
}

func Setup() {
	// Connection string to the data
	conn := fmt.Sprintf("host=%s port=%s user=%s dbname=%s sslmode=disable password=%s", host, port, user, dbname)

	// Execute database connection
	db, err = gorm.Open(dialect, conn)

	// Check if connection to database has error or issues
	if err != nil {
		fmt.Println(err)
		panic("Failed to connect to the database")
	}

	defer db.Close()

	// Create a Items table in the database if it does exists
	db.AutoMigrate(&Item{})
}
