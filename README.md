# Aurelia Tutorial

## Overview

This repository contains a step-by-step tutorial to build a simple ToDo app using [Aurelia](http://aurelia.io).

// TODO: Add final example

## Usage

This repository contains one commit for each of the steps outlined in TUTORIAL.md.
For your convenience the commit hash for each step is included after its headline.

Note that when you check out the commit for a specific step, the state of the repository will reflect how the source code should look AFTER you applied all changes described in the corresponding step.

### ... as tutorial

Create your own Aurelia app and follow along the steps described in TUTORIAL.md. Use the corresponding commit in this repository to compare your solution and the one provided here.

### ... as baseline for a talk/presentation

Print out the full TUTORIAL.md file (or memorise it ;-). Check out the commit labelled "Step 1" (commit hash to follow). 

If you are using a shell (PowerShell or Bash) there are helpers in this repository which will define functions that allow you to move to the next or previous commit.
For those scripts to work, you have to do a ```git rev-parse --short head > head.sha1``` after you checked out the last commit.

- If you use Git bash:  
TODO: Add helper file for bash
```git checkout $(git rev-list --topo-order HEAD..towards | tail -1)```
- If you use Powershell, run ```. .\helpers.ps1``` from the shell. 

This will define two function in your current session: ```prev``` and ```next``` which will move you to the previous respective next commit in your repository.
```git checkout $(git rev-list --topo-order HEAD..9a367d9ba53cb211b34960d92f34fe9524c98ece | select-object -last 1)```

## Contributing

To be defined ...
