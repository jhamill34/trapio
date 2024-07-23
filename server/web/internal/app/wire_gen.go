// Code generated by Wire. DO NOT EDIT.

//go:generate go run github.com/google/wire/cmd/wire
//go:build !wireinject
// +build !wireinject

package app

import (
	"github.com/jhamill34/trapio/server/web/internal/server"
)

// Injectors from wire.go:

func InitializeHTTPServer() *server.HTTPService {
	httpServiceConfig := server.LoadHTTPServiceConfig()
	httpService := server.NewHTTPService(httpServiceConfig)
	return httpService
}
