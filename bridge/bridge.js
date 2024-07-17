var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
;
var TelegramProvider = /** @class */ (function () {
    function TelegramProvider() {
    }
    TelegramProvider.prototype.sendMessage = function (msg) {
        console.log(msg);
    };
    TelegramProvider.prototype.connect = function (conf) {
        console.log(conf);
    };
    TelegramProvider.prototype.disconnect = function () {
        console.log('Disconnect Telegram');
    };
    return TelegramProvider;
}());
var WhatsUpProvider = /** @class */ (function () {
    function WhatsUpProvider() {
    }
    WhatsUpProvider.prototype.sendMessage = function (msg) {
        console.log(msg);
    };
    WhatsUpProvider.prototype.connect = function (conf) {
        console.log(conf);
    };
    WhatsUpProvider.prototype.disconnect = function () {
        console.log('Disconnect WhatsUP');
    };
    return WhatsUpProvider;
}());
var NotificationSender = /** @class */ (function () {
    function NotificationSender(provider) {
        this.provider = provider;
    }
    NotificationSender.prototype.send = function (msg) {
        this.provider.connect('connect');
        this.provider.sendMessage(msg);
        this.provider.disconnect();
    };
    return NotificationSender;
}());
var DelayNotificationSender = /** @class */ (function (_super) {
    __extends(DelayNotificationSender, _super);
    function DelayNotificationSender(provider) {
        return _super.call(this, provider) || this;
    }
    DelayNotificationSender.prototype.sendDelay = function (msg) {
        this.send(msg);
    };
    return DelayNotificationSender;
}(NotificationSender));
var sender = new NotificationSender(new TelegramProvider());
sender.send('telegram send message');
var sender2 = new NotificationSender(new WhatsUpProvider());
sender2.send('WU send message');
var senderDelay = new DelayNotificationSender(new WhatsUpProvider());
senderDelay.sendDelay('WU send delay');
var sender2Delay = new DelayNotificationSender(new WhatsUpProvider());
senderDelay.sendDelay('telegram send delay');
