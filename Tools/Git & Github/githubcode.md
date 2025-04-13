# Github Public Key:
// to Create Key
ssh-keygen -t rsa -b 4096 "Email" 

// To Find Contant File
cat ~/.ssh/id.rsa.pub

// To Create Test on Key
ssh -T git@github.com

# Create Repository From PC 
// first create path and write in cmder to install empty git repo
git init

// To create New File write
touch nameFile.???

// To Show Status File
git status

// to add file to repo
git add nameFile

// to create commit
git commit -m "Write here Comment"

// now Create repo in github and get ssh link to add files in repo Created on github
git remote add origin linkSSH

// To push in github
git push fileName
git push -u origin master
==>if created key will ask me on password

# Pull Request
From Github Website Click on New Pull Request and have to Choise 
first Create Pull And Request him to admin and wait to accept 
Second create pull and create branch and marage him and request edit to admin and wait to accept
==> if remove fork or branch before request to admin not make problem.

# How Create Aliases
// create name to event or any thing git status === git st
git config --global alias.NewName OldName
like === git config --global alias.st status 
like === git config --global alias.cm "commit -m" 

// to show Name what mean
git config --global alias.st

// To edit on editor 
git config --global --edit  => so open editor and can edit on him

# Branch And Merging

// Create branch
git branch NameBranch

// To go Branch a i needed
git checkout NameBranch

// To Delete Branch
git branch -d Namebranch
-d === Save Delete will ask me if find edit
-D === Delete anything

// Create branch and go him
git checkout -b NameBranch

// change branch name 
git branch -m NewNameBranch

// to add new in nweBranch to master branch
first fo to master ==> git checkout master
second git merge nameNewbranch
now we can delete newBranch and edit is save on master and stop on push in repo 


\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

Notes ===>>> course cmd 
ls => git file in path

# Stash

// save file in stash special git 
git stash

// how get from stash and delete him from stash
git stash pop

// how show file in stash 
git stash list

// how save file in stash and add comment
git stash save "write here comment"

// how get file from stash without delete from stash will get last file
git stash apply 

// how get file from stash i selected
git stash pop stash@{number}
git stash apply stash@{number}

// how delete file from stash 
git stash drop
git stash drop stash@{number}

// how show file in stash what contain
git stash show
git stash show stash@{number}

// how delete All Stash
git stash clear

# Restore and Clean

// How restore file from Stage to stage
git restore --staged FileName

// how open file on editor
code FileName

// how remove file from stage
git clean -n  
 ==> will show me file before remove him
 git clean -f

if wante file don't need delete
 -->> git add FileName and git clean -f

# Reseting the head
// how selected comment and Deleted all after
git reset --hard WriteHash
  --> To update branch
	git push origin main --force






*************************************************
bool : git version control cookbook

elzero web
