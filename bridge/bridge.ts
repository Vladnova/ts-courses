interface IProvider {
    sendMessage(msg: any): void;

    connect(conf: unknown): void;

    disconnect(): void;
};


class TelegramProvider implements IProvider {


    sendMessage(msg: any): void {
        console.log(msg);
    }

    connect(conf: string): void {
        console.log(conf);
    }

    disconnect(): void {
        console.log('Disconnect Telegram');
    }

}

class WhatsUpProvider implements IProvider {


    sendMessage(msg: any): void {
        console.log(msg);
    }

    connect(conf: string): void {
        console.log(conf);
    }

    disconnect(): void {
        console.log('Disconnect WhatsUP');
    }

}

class NotificationSender {
    constructor(private provider: IProvider) {
    }

    send(msg: string) {
        this.provider.connect('connect');
        this.provider.sendMessage(msg);
        this.provider.disconnect()
    }

}

class DelayNotificationSender extends NotificationSender {
    constructor(provider: IProvider) {
        super(provider);
    }

    sendDelay(msg: string) {
        this.send(msg)
    }

}

const sender = new NotificationSender(new TelegramProvider());
sender.send('telegram send message');

const sender2 = new NotificationSender(new WhatsUpProvider());
sender2.send('WU send message');

const senderDelay = new DelayNotificationSender(new WhatsUpProvider());
senderDelay.sendDelay('WU send delay');

const sender2Delay = new DelayNotificationSender(new WhatsUpProvider());
senderDelay.sendDelay('telegram send delay');

[1, 2, 6].map(i=>i+2);