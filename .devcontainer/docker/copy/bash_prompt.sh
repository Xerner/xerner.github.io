#!/bin/bash

set_prompt() {
  local last_cmd=$?
  local txtreset='$(tput sgr0)'
  local txtbold='$(tput bold)'
  local txtblack='$(tput setaf 0)'
  local txtred='$(tput setaf 1)'
  local txtgreen='$(tput setaf 2)'
  local txtyellow='$(tput setaf 3)'
  local txtblue='$(tput setaf 4)'
  local txtpurple='$(tput setaf 5)'
  local txtcyan='$(tput setaf 6)'
  local txtwhite='$(tput setaf 7)'
  # unicode "✗"
  local fancyx='\342\234\227'
  # unicode "✓"
  local checkmark='\342\234\223'

  PS1=""

  # Line 4: a red "✗" or a green "✓" and the error number
  if [[ $last_cmd == 0 ]]; then
    PS1+="\[$txtgreen\]$checkmark \[$txtwhite\]"
  else
    # PS1+="\[$txtred\]$fancyx error $last_cmd \[$txtwhite\]"
    PS1+="\[$txtred\]$fancyx \[$txtwhite\]"
  fi

  # Line 1: Full date + full time (24h)
  #  PS1="\[$txtbold\]\[$txtwhite\] \D{%A %d %B %Y %H:%M:%S}"
  
  # Line 2: current path
  PS1+="\[$txtyellow\]\w "
  # User color: red for root, yellow for others
  if [[ $EUID == 0 ]]; then
    PS1+="\[$txtred\]"
  else
    PS1+="\[$txtyellow\]"
  fi

  # Line 3: user@host
  PS1+="\u\[$txtwhite\]@\h"

  # Line 4: green git branch
  PS1+="\[$txtcyan\]$(__git_ps1 ' (%s)')\[$txtwhite\]\n"

  # Line 4: good old prompt, $ for user, # for root
  PS1+="\\$ "
}
PROMPT_COMMAND='set_prompt'
