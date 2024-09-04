if [[ ! -e ~/.ssh/$SSH_KEYNAME ]]; then
  echo ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
  echo "Adding host '$SSH_HOSTNAME' to ssh known_hosts and public key '$SSH_KEYNAME.pub' to ssh config"

  echo "$SSH_PUBLIC" > ~/.ssh/$SSH_KEYNAME.pub
  echo "$SSH_PRIVATE" | sed 's/\\n/\n/g' > ~/.ssh/$SSH_KEYNAME

  chmod 0700 ~/.ssh
  chmod 600 ~/.ssh/$SSH_KEYNAME
  chmod 600 ~/.ssh/$SSH_KEYNAME.pub

  echo """Host $SSH_HOSTNAME
    AddKeysToAgent yes
    IdentityFile ~/.ssh/$SSH_KEYNAME""" > ~/.ssh/config
  ssh-keyscan -H $SSH_HOSTNAME >> ~/.ssh/known_hosts

  echo "Done adding ssh keys"
fi
