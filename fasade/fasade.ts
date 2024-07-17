class Notify {
    send(template: string, to: string) {
        console.log(`Sending ${template} to ${to}`);
    }

}

class Log {
    log(text: string) {
        console.log(text);
    }

}


class Template {
    private templates = [
        {name: 'other', template: '<h1>Template!!!</h1>'}
    ]

    getByName(name: string) {
        return this.templates.find(t=>t.name ===name);
    }

}

class NotificationFacade {

    private notify: Notify;
    private logger: Log;
    private template: Template;

    constructor() {
        this.notify = new Notify();
        this.logger = new Log();
        this.template = new Template();
    }

    send(to: string, template: string) {

        const data = this.template.getByName(template);
        if (!data) {
            this.logger.log("template not found.");
            return;
        }
        this.notify.send(data.template, to);
        this.logger.log("Template sent.");
    }

}

const serv: NotificationFacade = new NotificationFacade();

serv.send('test@gmail.com', 'other');