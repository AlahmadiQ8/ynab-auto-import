# Initial
sudo yum update -y
sudo yum install git -y
sudo amazon-linux-extras install docker -y
sudo service docker start
sudo chkconfig docker on
sudo usermod -a -G docker ec2-user
git clone https://github.com/AlahmadiQ8/ynab-auto-import.git

#!/bin/bash
cd ynab-auto-import
docker run -it -v $PWD:/e2e -w /e2e cypress/included:3.2.0 







curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"
nvm install --lts
