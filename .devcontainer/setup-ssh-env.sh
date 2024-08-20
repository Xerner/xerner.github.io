$SSH_KEYNAME=$1
SSH_PUBLIC="$(cat ~/.ssh/github.pub)"; # update filename as necessary
SSH_PRIVATE="$(cat ~/.ssh/github)"; # update filename as necessary
echo -e "SSH_KEYNAME=$SSH_KEYNAME\nSSH_PUBLIC=$SSH_PUBLIC\nSSH_PRIVATE=$SSH_PRIVATE" > .devcontainer/.env
