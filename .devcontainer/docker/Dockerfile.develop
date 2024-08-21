FROM node:latest

ENV BUILD_CONFIGURATION=PRODUCTION

RUN apt update --yes
RUN apt upgrade --yes
RUN apt install git

# repo setup
# https://gerrit.googlesource.com/git-repo/+/HEAD/README.md
RUN mkdir -p ~/.bin
# ENV PATH="${HOME}/.bin:${PATH}" This is done in .bashrc
RUN curl https://storage.googleapis.com/git-repo-downloads/repo > ~/.bin/repo
RUN chmod a+rx ~/.bin/repo

RUN npm install -g @angular/cli

COPY /copy/* /root
ENTRYPOINT ["tail", "-f", "/dev/null"]
