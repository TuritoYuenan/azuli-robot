FROM denoland/deno:alpine AS base

# Change working directory to /app
WORKDIR /app

# Copy source code and cache dependencies
COPY deno.json deno.lock ./
COPY *.ts .
RUN deno cache ./main.ts

# Use a non-root user
RUN addgroup -S deno && adduser -S deno -G deno
USER deno

# Run Discord bot
EXPOSE 1993
CMD ["run", "--allow-all", "./main.ts"]
