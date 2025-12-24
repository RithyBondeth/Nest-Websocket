import {
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway(3002, {
    cors: { origin: '*' }
})
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;

  handleConnection(client: Socket, ...args: any[]) {
    console.log('New user connected...', client.id);

    this.server.emit('user-joined', {
      message: `User joined the chat: ${client.id}`,
    });
  }

  handleDisconnect(client: any) {
    console.log('User disconnected...', client.id);

    this.server.emit('user-left', {
      message: `User disconnected: ${client.id}`,
    });
  }

  //   @SubscribeMessage('newMessage')
  //   handleNewMessage(client: Socket, message: any) {
  //     console.log(message);

  //     client.emit('reply', 'This is a reply');

  //     this.server.emit('reply', 'Broadcasting...');
  //   }

  @SubscribeMessage('newMessage')
  handleMessage(@MessageBody() message: any) {
    console.log('message: ', message);
    this.server.emit('message', message); // Broadcast the message to all clients
  }
}
