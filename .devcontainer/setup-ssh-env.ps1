Param
(
  [Parameter(Position=0)]
  [string] $SSH_KEYNAME="github",
  [Parameter(Position=1)]
  [string] $SSH_HOSTNAME="github.com"
)

$GIT_USER = git config --global user.name
$GIT_EMAIL = git config --global user.email

# update ssh key filename as necessary
$SSH_PUBLIC=$(Get-Content ~/.ssh/$SSH_KEYNAME.pub)
$SSH_PRIVATE=$(Get-Content ~/.ssh/$SSH_KEYNAME) -join "\n"
$envString = "GIT_USER=$GIT_USER`nGIT_EMAIL=$GIT_EMAIL`nSSH_KEYNAME=$SSH_KEYNAME`nSSH_HOSTNAME=$SSH_HOSTNAME`nSSH_PUBLIC=$SSH_PUBLIC`nSSH_PRIVATE=$SSH_PRIVATE"
$envPath = ".devcontainer/.env"
$envString | Out-File -FilePath $envPath -Encoding ascii
