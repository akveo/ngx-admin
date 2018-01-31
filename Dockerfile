# Dockerfile
FROM debian:stretch
COPY main /main
COPY conf/app.conf /conf/app.conf
RUN chmod +x main
WORKDIR /
ENTRYPOINT ["/main"]
