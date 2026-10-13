<div align="center">

# Nest WebSocket

**A tutorial on real-time WebSocket communication with NestJS and Socket.IO.**

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)
![Socket.IO](https://img.shields.io/badge/Socket.IO-010101?style=for-the-badge&logo=socketdotio&logoColor=white)

</div>

---

## Overview

Nest WebSocket is a compact learning project that shows how to build real-time, bidirectional communication in NestJS. A Socket.IO gateway broadcasts chat messages and join and leave events to every connected client.

## Features

- **WebSocket gateway** built with `@nestjs/websockets` and Socket.IO, on port 3002.
- **Message broadcasting:** clients send `newMessage`, and the server broadcasts `message` to everyone.
- **Presence events:** `user-joined` and `user-left` on connect and disconnect.

## Tech Stack

| Area | Technology |
| --- | --- |
| Framework | NestJS |
| Language | TypeScript |
| Real-time | Socket.IO, `@nestjs/platform-socket.io` |

## Getting Started

### Prerequisites

- Node.js and npm

### Installation

```bash
git clone https://github.com/RithyBondeth/Nest-Websocket.git
cd Nest-Websocket
npm install
npm run start:dev
```

Connect a Socket.IO client to `ws://localhost:3002` and emit `newMessage`.

## Project Structure

```text
Nest-Websocket/
└── src/
    ├── chat/
    │   ├── chat.gateway.ts   # Socket.IO gateway and events
    │   └── chat.module.ts
    ├── app.module.ts
    └── main.ts
```

## Author

**Rithy Bondeth** — Full Stack Developer & AI Engineer

[![Portfolio](https://img.shields.io/badge/Portfolio-0A0A0A?style=for-the-badge&logo=vercel&logoColor=white)](https://bondeth.dev)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/RithyBondeth)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/rithy-bondeth-484073282/)

## License

Distributed under the MIT License. See [`LICENSE`](LICENSE) for details.
