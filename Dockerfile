FROM    node:14-alpine3.12

WORKDIR /app

#COPY    ./angular-cli .
COPY    package.json package-lock.json
COPY    . .       

RUN     npm install 
# RUN     npm install -g @angular/cli

EXPOSE  4200
# Angular installation if it fails, 

CMD     ["ng", "serve"]
