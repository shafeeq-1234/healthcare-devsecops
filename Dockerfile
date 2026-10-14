FROM node:22-alpine
WORKDIR /app
COPY --chown=node:node package.json app.js ./
USER node
EXPOSE 3000
CMD ["node", "app.js"]
