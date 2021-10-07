# syntax=docker/dockerfile:1

##
## Build Stage
##

FROM golang:1.16-buster AS build

WORKDIR /api

COPY go.mod ./
COPY go.sum ./

RUN go mod download

COPY . .

RUN go build -o /golang-microservice-1

##
## Deploy Stage
##

FROM gcr.io/distroless/base-debian10

WORKDIR /

COPY --from=build /golang-microservice-1 /golang-microservice-1

COPY --from=build /api/.env . 

EXPOSE 5000

USER nonroot:nonroot

ENTRYPOINT ["/golang-microservice-1"]