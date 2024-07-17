var Notify = /** @class */ (function () {
    function Notify() {
    }
    Notify.prototype.send = function (template, to) {
        console.log("Sending ".concat(template, " to ").concat(to));
    };
    return Notify;
}());
var Log = /** @class */ (function () {
    function Log() {
    }
    Log.prototype.log = function (text) {
        console.log(text);
    };
    return Log;
}());
var Template = /** @class */ (function () {
    function Template() {
        this.templates = [
            { name: 'other', template: '<h1>Template!!!</h1>' }
        ];
    }
    Template.prototype.getByName = function (name) {
        return this.templates.find(function (t) { return t.name === name; });
    };
    return Template;
}());
var NotificationFacade = /** @class */ (function () {
    function NotificationFacade() {
        this.notify = new Notify();
        this.logger = new Log();
        this.template = new Template();
    }
    NotificationFacade.prototype.send = function (to, template) {
        var data = this.template.getByName(template);
        if (!data) {
            this.logger.log("template not found.");
            return;
        }
        this.notify.send(data.template, to);
        this.logger.log("Template sent.");
    };
    return NotificationFacade;
}());
var serv = new NotificationFacade();
serv.send('test@gmail.com', 'other');
