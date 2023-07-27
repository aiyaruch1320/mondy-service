package main

import (
	"mondy-service/routes"
)

func main() {
	router := routes.SetupRoutes()
	router.Run(":8080")
}
