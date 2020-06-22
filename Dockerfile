FROM codercom/code-server:latest

RUN sudo apt update && sudo apt upgrade -y \
      # Zsh
      && sudo apt install zsh -y \
      && sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)" \
      # nodejs
      && curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash - \
      && sudo apt install -y nodejs \
      # java
      && sudo apt install -y openjdk-11-jdk \
      # Golang
      && sudo apt install -y golang-go \
      # Rust
      && curl https://sh.rustup.rs -sSf | sh -s -- -y \
      # Krypton
      && curl https://krypt.co/kr | sh \
      # Sdkman
      && sudo apt install unzip zip && curl -s https://get.sdkman.io | bash \
      # Cleanup
      && sudo apt autoremove && sudo apt clean