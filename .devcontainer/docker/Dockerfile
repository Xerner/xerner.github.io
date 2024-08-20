FROM node:latest

ENV BUILD_CONFIGURATION=Development

RUN apt update
RUN apt upgrade
RUN apt install git

# ssh setup
ARG SSH_KEYNAME
ARG SSH_HOSTNAME
ARG SSH_PUBLIC
ARG SSH_PRIVATE

# repo setup
# https://gerrit.googlesource.com/git-repo/+/HEAD/README.md
RUN mkdir -p ~/.bin
# ENV PATH="${HOME}/.bin:${PATH}" This is done in .bashrc
RUN curl https://storage.googleapis.com/git-repo-downloads/repo > ~/.bin/repo
RUN chmod a+rx ~/.bin/repo

COPY /copy/* /root
ENTRYPOINT ["tail", "-f", "/dev/null"]
