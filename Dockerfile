FROM python:3
RUN pip install awscli
WORKDIR /
COPY entrypoint.sh entrypoint.sh
COPY main main
COPY conf/app.conf conf/app.conf
RUN chmod +x main entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]
