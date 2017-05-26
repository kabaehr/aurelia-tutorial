# Aurelia Tutorial

## Overview

This repository contains a step-by-step tutorial to build a simple ToDo app using [Aurelia](http://aurelia.io).

// TODO: Add final example

## Usage

Each tutorial branch in this repository contains one commit for each of the steps outlined in TUTORIAL.md. For each step in this file there is a corresponding instructions and result step.

Currently there is only a ES 2015 based basic tutorial which you can find on the ```basic-tutorial-es``` branch.

### ... as tutorial

Create your own Aurelia app and follow along the steps described in TUTORIAL.md. Use the corresponding commits in this repository to compare your solution and the one provided here.

### ... as baseline for a talk/presentation

Checkout the branch you want to use and print out the full TUTORIAL.md file (or memorise it ;-). 

If you are using a shell (PowerShell or Bash) there are helpers in this repository which will define functions that allow you to move to the next or previous commit.
For those scripts to work, you have to do a ```git rev-parse --short head > head.sha1``` after you checked out the branch.

- If you use Git bash:
TODO: Add helper file for bash
```git checkout $(git rev-list --topo-order HEAD..towards | tail -1)```
- If you use Powershell, run ```. .\helpers.ps1``` from the shell.

This will define two function in your current session: ```prev``` and ```next``` which will move you to the previous respective next commit in your repository.
```git checkout $(git rev-list --topo-order HEAD..9a367d9ba53cb211b34960d92f34fe9524c98ece | select-object -last 1)```

After that check out the step one tag that corresponds with your selected branch (e.g. ```basic-es-step-1``` if you are using the ```basic-tutorial-es``` branch) and begin with the tutorial.

## Contributing

To be defined ...
