FROM node:12
ADD /app
RUN cd /app/ && npm install
ADD ./eatery_manage_frontend/start.sh /start.sh
CMD ["/bin/bash", "/start.sh"]
