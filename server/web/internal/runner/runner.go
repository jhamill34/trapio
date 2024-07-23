package runner

import "context"

type Service interface {
	Start(context.Context)
	Stop(context.Context)
}

type ToCancellableContext func(context.Context) (context.Context, context.CancelFunc)

func RunServiceGracefully(ctx context.Context, service Service, canceller ToCancellableContext) {
	notify, cancel := canceller(ctx)
	defer cancel()

	go service.Start(ctx)
	<-notify.Done()

	service.Stop(ctx)
}
