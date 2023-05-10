//Upgraded To Wiley-md V02 
import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'

//Important & must be change #ATY
global.owner = [
  ['918689911747', 'SB23', true],
    ['918689911747', 'SB2006', true]
] 
global.prems = []


//Make Changes #ATY
global.bname = 'SB-md'     //Your Bot Name
global.oname = 'SB23'     //Your Name
global.onum = '918689911747' //Number for status forwarding 
global.iglink = 'https://instagram.com/mr__sb_232006?igshid=NTc4MTIwNjQ2YQ=='     //Your Instagram Link

global.gclink = 'https://chat.whatsapp.com/CA1bDz2S5DOL3j5fs0AlWX' //Your WhatsApp Group Link
global.script = 'https://github.com/Shizothetechie/wiley-md'  //Donot Change if you appreciate our work 🙂❤️



//Global ImgRes #NMTM
global.menuimg = fs.readFileSync('./media/menu.png')
global.btnimg = fs.readFileSync('./media/logo.png')
global.imgmenu = fs.readFileSync('./media/logo.png')

//Wiley-MD Internal #NMTM
global.version = '2.0.1'
global.package = 'com.tedevs.wiley'
global.library = 'Baileys-MD'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
