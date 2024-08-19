FROM node:latest
ENV BUILD_CONFIGURATION=Development
RUN apt update
RUN apt upgrade
RUN apt install git
COPY /copy/* /root
ENTRYPOINT ["tail", "-f", "/dev/null"]
