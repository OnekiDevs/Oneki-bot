const { MessageEmbed, MessageButton, MessageActionRow } = require('discord.js');
const { main } = require('./gameloop.js')
module.exports = async (client, interact) => {
    let partida = client.uno.get(interact.customID.slice(7))
    if (!partida) {
        return interact.deferUpdate();
    }
    if (partida.host == interact.member.user.id) {
        if (partida.jugadores.length > 1 || true) {
            partida.estado = 'curso'
            partida = await require('../uno').repartir(partida);
            let embed = require('./embedUno')(partida);
            client.uno.set(interact.customID.slice(6), partida);
            interact.deferUpdate();
            const mostrar = new MessageButton().setLabel('Mostrar Cartas').setStyle('PRIMARY').setCustomID(`uno_mo_${partida.id}`)
            const comer = new MessageButton().setLabel('Comer').setStyle('SECONDARY').setCustomID(`uno_co_${partida.id}`).setDisabled(true);
            const jugar = new MessageButton().setLabel('Jugar Carta').setStyle('SECONDARY').setCustomID(`uno_ju_${partida.id}`)
            // const gameloop = require('./gameloop.js')(client, interact, partida, [mostrar, comer])
            main(client, interact, partida, [mostrar, comer]);
            interact.message.edit({ 
                embeds: [embed],
                components: [[mostrar, comer, jugar]]
            });
        } else {
            interact.reply({
                content: "Se requieren minimo 2 jugadores para comenzar",
                ephemeral: true
            });
        }
    } else {
        interact.reply({
            content: "Solo el Host puede empezar la partida",
            ephemeral: true
        });
    }
}