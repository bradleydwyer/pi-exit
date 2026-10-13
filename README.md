# pi-exit

Adds `/exit` to [pi](https://pi.dev) as an alias for the built-in `/quit`.

## Install

```bash
pi install git:github.com/bradleydwyer/pi-exit
```

Restart pi, or run `/reload`, then type `/exit` to quit.

## What it does

One registered command that calls `ctx.shutdown()`, the same graceful shutdown the
built-in `/quit` runs. `/quit` keeps working.

## Develop against a checkout

```bash
pi -e ./extensions/exit.ts
```
