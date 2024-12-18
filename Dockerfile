# syntax=docker/dockerfile:1

ARG NODE_VERSION=18.20.0
ARG PNPM_VERSION=9.9.0

################################################################################
# Use node image for base image for all stages.
FROM node:${NODE_VERSION}-alpine as base

# Set working directory for all build stages.
WORKDIR /usr/src/app

# Install pnpm & serve globally.
RUN --mount=type=cache,target=/root/.npm \
    npm install -g pnpm@${PNPM_VERSION} \
    pnpm i -g serve

FROM base as deps

FROM deps as build

WORKDIR /usr/src/app

COPY . .

RUN pnpm install

# Adding environment variables
ARG PORT
ENV VITE_PORT=${PORT}

RUN pnpm run build

EXPOSE ${PORT}

CMD ["pnpm", "run", "serve"]
