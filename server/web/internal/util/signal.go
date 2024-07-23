package util

import (
	"context"
	"os/signal"
	"syscall"
)

func SignalNotifier(ctx context.Context) (context.Context, context.CancelFunc) {
	return signal.NotifyContext(ctx, syscall.SIGTERM, syscall.SIGINT, syscall.SIGHUP, syscall.SIGQUIT)
}
