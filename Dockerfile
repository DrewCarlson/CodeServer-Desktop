FROM codercom/code-server:latest

RUN sudo add-apt-repository ppa:openjdk-r/ppa
RUN sudo apt update && sudo apt upgrade -y

# Zsh
RUN sudo apt install zsh -y
RUN sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"

# nodejs
RUN curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
RUN sudo apt install -y nodejs

# java
RUN sudo apt install -y openjdk-13

# Golang
RUN sudo apt install -y golang-go

# Rust
RUN curl https://sh.rustup.rs -sSf | sh -s -- -y 

# Krypton
RUN curl https://krypt.co/kr | sh 

# Sdkman
RUN sudo apt install unzip zip && curl -s https://get.sdkman.io | bash

# cleanup
RUN sudo apt autoremove && sudo apt clean
