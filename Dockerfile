FROM node:14.15.4-slim

# usuario do container - root

RUN apt update && apt install -y --no-install-recommends \
    git \
    ca-certificates

USER node 

WORKDIR /home/node/app

CMD ["sh", "-c", "npm install && tail -f /dev/null"]