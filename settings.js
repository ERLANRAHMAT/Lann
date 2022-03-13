const fs = require('fs')
const chalk = require('chalk')

//===> FREE API
global.APIs = {
	ryuu: 'https://ryuu-apii.herokuapp.com',
}

global.APIKeys = {
	'https://ryuu-apii.herokuapp.com': 'RyuBotz',
}

//===> UBAH DISINI
global.namaowner = 'LannOfc' //Ganti Jadi Namamu
global.owner = ['6285803583481','6285729830105'] //Kalo Mau Lebih Tambahin Aja
global.nomerowner = '6285803583481' //Owner Utama Istilahnya
global.namabot = 'BetaBotzMD' //Ganti Jadi Nama Botmu
global.packname = '© BetaotzMD' //Sticker Weem
global.author = 'BetaBotz By LannOfc' //Sticker Weem
global.webme = 'https://ryuu-apii.herokuapp.com'
global.sessionName = 'session'
global.bg_welcome = 'https://telegra.ph/file/528b594d5d91c08482515.jpg' //Max 30kb Agar Tidak Delay
global.youtube = 'https://youtube.com/c/RyuukaBotz'
global.github = 'https://github.com/ERLANRAHMAT'
global.instagram = 'https://instagram.com/erlanrahmat_14'

//===> BACKGROUND SETIAP MENU
global.bg1 = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.bg2 = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=monarch-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.bg3 = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=yolo-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.bg4 = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fun-run-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

global.prefa = ['','!','/','#','.']
global.sp = '⭔'

//Ubah Jadi false Kalau Botmu Pakai Wa Bussines
listmenu = false

//===> EDIT SESUAI KEMAUANMU
global.mess = {
admin: '*Kamu Bukan Admin Kak*',
botAdmin: '*BOT BUKAN ADMIN 😔*',
owner: '*Maaf Kamu Bukan Ownerku*',
group: '*Maaf Fitur Ini Khusus Group*',
private: '*KHUSUS PRIVATE CHAT*',
bot: '*Maaf Fitur Ini Khusus Bot*',
wait: '*SABAR SEDANG DI PROSES ...*',
done: '*DONE KAKA*',
}
global.thumb = fs.readFileSync('./media/ryuu.jpg')
    
//===> INI GAUSAH DIUBAH
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})
