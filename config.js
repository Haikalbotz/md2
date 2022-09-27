/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

const fs = require('fs')
const chalk = require('chalk')

//Global Web Api WhatsAppBot
global.APIs = {
lolhuman: 'https://lolhuman.com',
}
//Apikey From Web Api
global.APIKeys = {
'https://lolhuman.com': 'BelumBeli',
}

// Other
global.owner =
[
'6289609927539',
'6289609927539'
]
global.packname = 'Nusantara-BOT'
global.author = '\n\n\n\n\n\n\n\n\&n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'
global.sessionName = 'hisoka'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
succes: '✅ Success',
admin: 'Fitur Ini Untuk admin Group Saja !',
botAdmin: 'Bot Di Haruskan Menjadi Admin Dahulu !',
owner: 'Fitur Ini Khusus Developer Bot Nusantara !',
group: 'Fitur Hanya Bisa Di Gunakan Di Dalam Group !!',
private: 'Fitur Digunakan Hanya Di Chat Pribadi/Private',
bot: 'Fitur Hanya Khusus Pengguna Nomor Bot',
wait: 'L O A D I N G...',
}
global.thumb = fs.readFileSync('./lib/hisoka.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
