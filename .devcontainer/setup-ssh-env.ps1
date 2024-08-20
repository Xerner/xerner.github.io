Param
(
  [Parameter(Position=0)]
  [string] $SSH_KEYNAME="github",
  [Parameter(Position=1)]
  [string] $SSH_HOSTNAME="github.com"
)

# update ssh key filename as necessary
$SSH_PUBLIC=$(Get-Content ~/.ssh/$SSH_KEYNAME.pub)
$SSH_PRIVATE=$(Get-Content ~/.ssh/$SSH_KEYNAME) -join "\n"
$envString = "SSH_KEYNAME=$SSH_KEYNAME`nSSH_HOSTNAME=$SSH_HOSTNAME`nSSH_PUBLIC=$SSH_PUBLIC`nSSH_PRIVATE=$SSH_PRIVATE"
$envPath = ".devcontainer/.env"
$envString | Out-File -FilePath $envPath -Encoding ascii
