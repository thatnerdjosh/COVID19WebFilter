FROM node as builder
WORKDIR /app
COPY ["./package.json", "./package-lock.json", "/app/"]
RUN npm ci
COPY "./" "/app/"
RUN npm run build
RUN npm prune --production

FROM node:slim as runtime
WORKDIR /app
ENV NODE_ENV=production
EXPOSE 3000
COPY --from=builder "/app/dist/" "/app/dist/"
COPY --from=builder "/app/node_modules/" "/app/node_modules/"
COPY --from=builder "/app/package.json" "/app/package.json"
CMD ["npm", "run", "start"]