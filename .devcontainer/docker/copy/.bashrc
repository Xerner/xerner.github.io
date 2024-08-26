export COLOR_NC='\e[0m' # No Color
export COLOR_BLACK='\e[0;30m'
export COLOR_GRAY='\e[1;30m'
export COLOR_RED='\e[0;31m'
export COLOR_LIGHT_RED='\e[1;31m'
export COLOR_GREEN='\e[0;32m'
export COLOR_LIGHT_GREEN='\e[1;32m'
export COLOR_BROWN='\e[0;33m'
export COLOR_YELLOW='\e[1;33m'
export COLOR_BLUE='\e[0;34m'
export COLOR_LIGHT_BLUE='\e[1;34m'
export COLOR_PURPLE='\e[0;35m'
export COLOR_LIGHT_PURPLE='\e[1;35m'
export COLOR_CYAN='\e[0;36m'
export COLOR_LIGHT_CYAN='\e[1;36m'
export COLOR_LIGHT_GRAY='\e[0;37m'
export COLOR_WHITE='\e[1;37m'

PATH="${HOME}/.bin:${PATH}"

source /root/.bash_git
source /root/bash_prompt.sh
source /root/add-ssh-from-env.sh
source /root/add-git-info.sh

echo
echo "██     ██ ███████ ██       ██████  ██████  ███    ███ ███████"
echo "██     ██ ██      ██      ██      ██    ██ ████  ████ ██     "
echo "██  █  ██ █████   ██      ██      ██    ██ ██ ████ ██ █████  "
echo "██ ███ ██ ██      ██      ██      ██    ██ ██  ██  ██ ██     "
echo " ███ ███  ███████ ███████  ██████  ██████  ██      ██ ███████"
echo
echo to the container
echo
echo Git
echo -------------------------------------------------
echo "Username:    $GIT_USER"
echo "Email:       $GIT_EMAIL"
echo -e $COLOR_LIGHT_CYAN
echo SSH
echo -------------------------------------------------
echo "Key name:    $SSH_KEYNAME"
echo "Host:        $SSH_HOSTNAME"
echo "Public key:  $SSH_PUBLIC"
echo -e $COLOR_NC
