package server

import (
	"context"
	"errors"
	"fmt"
	"log"
	"net/http"
	"time"
)

type HTTPServiceConfig struct {
	Port            uint
	Host            string
	ReadTimeout     uint
	WriteTimeout    uint
	IdleTimeout     uint
	ShutdownTimeout uint
}

func LoadHTTPServiceConfig() HTTPServiceConfig {
	return HTTPServiceConfig{
		Port:            3333,
		Host:            "localhost",
		ReadTimeout:     10,
		WriteTimeout:    10,
		IdleTimeout:     10,
		ShutdownTimeout: 5,
	}
}

type HTTPService struct {
	HTTPServiceConfig
	httpServer *http.Server
}

func NewHTTPService(cfg HTTPServiceConfig) *HTTPService {
	httpServer := &http.Server{
		Addr:         fmt.Sprintf("%s:%d", cfg.Host, cfg.Port),
		Handler:      nil,
		ReadTimeout:  time.Duration(cfg.ReadTimeout) * time.Second,
		WriteTimeout: time.Duration(cfg.WriteTimeout) * time.Second,
		IdleTimeout:  time.Duration(cfg.IdleTimeout) * time.Second,
	}

	return &HTTPService{
		cfg,
		httpServer,
	}
}

func (s *HTTPService) Start(ctx context.Context) {
	log.Printf("Staring server on Host=%s Port=%d\n", s.Host, s.Port)

	err := s.httpServer.ListenAndServe()
	if errors.Is(err, http.ErrServerClosed) {
		log.Println("Server stopped")
	} else {
		log.Fatalf("Failed to start server:\n%v", err)
	}
}

func (s *HTTPService) Stop(ctx context.Context) {
	ctx, cancel := context.WithTimeout(ctx, time.Duration(s.ShutdownTimeout)*time.Second)
	defer cancel()

	err := s.httpServer.Shutdown(ctx)
	if err != nil {
		log.Fatalf("Failed to shutdown server:\n%v", err)
	}
}
