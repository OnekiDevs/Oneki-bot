module.exports = class Ping extends classes.Command{

    constructor() {
        super({
            name: 'ping',
            aliases: [],
            permissions: {
                bot: [],
                member: []
            },
            cooldown: 0,
            args: []
        })

    }

    run(message, args) {
        message.reply('pong')
    }

}