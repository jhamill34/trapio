//go:build wireinject
// +build wireinject

package app

import (
	"github.com/google/wire"
	"github.com/jhamill34/trapio/server/web/internal/server"
)

func InitializeHTTPServer() *server.HTTPService {
	wire.Build(
		server.LoadHTTPServiceConfig,
		server.NewHTTPService,
	)

	return nil
}
