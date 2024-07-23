package main

import (
	"context"

	"github.com/jhamill34/trapio/server/web/internal/app"
	"github.com/jhamill34/trapio/server/web/internal/runner"
	"github.com/jhamill34/trapio/server/web/internal/util"
)

func main() {
	svc := app.InitializeHTTPServer()

	parent := context.Background()
	runner.RunServiceGracefully(parent, svc, util.SignalNotifier)
}
