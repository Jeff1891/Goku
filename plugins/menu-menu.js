import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems }) => {
try {
let pp = imagen1
let img = await(await fetch('https://i.imgur.com/JP52fdP.jpg')).buffer()
let d = new Date(new Date + 3600000)
let locale = 'es'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let user = global.db.data.users[m.sender]
let { money, joincount } = global.db.data.users[m.sender]
let { exp, limit, level, role } = global.db.data.users[m.sender]
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let str = `╭─────────────◆
┃✯𝙷𝙰𝚃𝚂𝚄𝙽𝙴-𝙼𝙸𝙺𝚄-𝚄𝙻𝚃𝚁𝙰
┃✯-𝗛ᴏʟᴀ,➟${taguser}
┃✯🍁᭢━━━━━━━━━᭥🍁᭢
┃✯│▢ᴏᴡɴᴇʀ:ᴏғᴄ➟ʏᴏᴠᴀɴɪ
┃✯│▢ғᴇᴄʜᴀ:➟${date}
┃✯│▢ᴛɪᴇᴍᴘᴏ ᴀᴄᴛɪᴠᴏ:➟${uptime}
┃✯╰▢ᴜsᴜᴀʀɪᴏs:➟${rtotalreg}
╰━━━━━━━━━━━──⊷
ꨄ︎-----  -----  -----  -----  -----ꨄ︎
╭─────────────◆
┃✯-📽️𝐃𝐄𝐒𝐂𝐀𝐑𝐆𝐀𝐒-⦿🎧
┃✯🍁᭢━━━━━━━━━᭥🍁᭢
┃✯╭──────────◆
┃✯│▢/ɪɴsᴛᴀɢʀᴀᴍ➟ᴇɴʟᴀᴄᴇ➟ʟɪɴᴋ
┃✯│▢/ɪɴsᴛᴀɢʀᴀᴍ2➟ᴇɴʟᴀᴄᴇ➟ʟɪɴᴋ
┃✯│▢/ɪɴsᴛᴀɢʀᴀᴍ3➟ᴇɴʟᴀᴄᴇ➟ʟɪɴᴋ
┃✯│▢/ᴍᴇᴅɪᴀғɪʀᴇ➟ᴇɴʟᴀᴄᴇ➟ʟɪɴᴋ
┃✯│▢/ɪɴsᴛᴀɢʀᴀᴍ➟ᴇɴʟᴀᴄᴇ➟ʟɪɴᴋ
┃✯│▢/ɢɪᴛᴄʟᴏɴᴇ➟ᴇɴʟᴀᴄᴇ➟ʟɪɴᴋ
┃✯│▢/ɢᴅʀɪᴠᴇ➟ᴇɴʟᴀᴄᴇ➟ʟɪɴᴋ
┃✯│▢/ᴛɪᴋᴛᴏᴋ➟ᴇɴʟᴀᴄᴇ➟ʟɪɴᴋ
┃✯│▢/xɴxxᴅʟ➟ᴇɴʟᴀᴄᴇ➟ʟɪɴᴋ
┃✯│▢/xᴠɪᴅᴇᴏsᴅʟ➟ᴇɴʟᴀᴄᴇ➟ʟɪɴᴋ
┃✯│▢/ᴛᴡɪᴛᴛᴇʀ➟ᴇɴʟᴀᴄᴇ➟ʟɪɴᴋ
┃✯│▢/ғʙ➟ᴇɴʟᴀᴄᴇ➟ʟɪɴᴋ
┃✯│▢/ғʙ2➟ᴇɴʟᴀᴄᴇ➟ʟɪɴᴋ
┃✯│▢/ғʙ3➟ᴇɴʟᴀᴄᴇ➟ʟɪɴᴋ
┃✯│▢/ғʙ4➟ᴇɴʟᴀᴄᴇ➟ʟɪɴᴋ
┃✯│▢/ғʙ5➟ᴇɴʟᴀᴄᴇ➟ʟɪɴᴋ
┃✯│▢/ʏᴛᴍᴘ3➟ᴇɴʟᴀᴄᴇ➟ʟɪɴᴋ
┃✯│▢/ʏᴛᴍᴘ4➟ᴇɴʟᴀᴄᴇ➟ʟɪɴᴋ
┃✯│▢/ʏᴛᴍᴘ3ᴅᴏᴄ➟ᴇɴʟᴀᴄᴇ➟ʟɪɴᴋ
┃✯│▢/ʏᴛᴍᴘ4ᴅᴏᴄ➟ᴇɴʟᴀᴄᴇ➟ʟɪɴᴋ
┃✯│▢/ᴅᴀᴘᴋ2➟ᴇɴʟᴀᴄᴇ➟ʟɪɴᴋ
┃✯│▢/sᴛɪᴄᴋᴇʀᴘᴀᴄᴋ➟ᴇɴʟᴀᴄᴇ➟ʟɪɴᴋ
┃✯│▢/ᴘʟᴀʏ➟ᴛᴇxᴛᴏ
┃✯│▢/ᴘʟᴀʏ.1➟ᴛᴇxᴛᴏ
┃✯│▢/ᴘʟᴀʏ.2➟ᴛᴇxᴛᴏ
┃✯│▢/ᴘʟᴀʏᴅᴏᴄ➟ᴛᴇxᴛᴏ
┃✯│▢/ᴘʟᴀʏʟɪsᴛ➟ᴛᴇxᴛᴏ
┃✯│▢/ᴘʟᴀʏʟɪsᴛ2➟ᴛᴇxᴛᴏ
┃✯│▢/sᴘᴏᴛɪғʏ➟ᴛᴇxᴛᴏ
┃✯│▢/sᴛɪᴄᴋᴇʀʟʏ➟ᴛᴇxᴛᴏ
┃✯│▢/ʀɪɴɢᴛᴏɴᴇ➟ᴛᴇxᴛᴏ
┃✯│▢/sᴏᴜɴᴅᴄʟᴏᴜᴅ➟ᴛᴇxᴛᴏ
┃✯│▢/ɪᴍᴀɢᴇɴ➟ᴛᴇxᴛᴏ
┃✯│▢/ᴘɪɴᴛᴇʀᴇsᴛ➟ᴛᴇxᴛᴏ
┃✯│▢/ᴡᴀʟʟᴘᴀᴘᴇʀ➟ᴛᴇxᴛᴏ
┃✯│▢/ᴡᴀʟʟᴘᴀᴘᴇʀ2➟ᴛᴇxᴛᴏ
┃✯│▢/ᴘᴘᴛɪᴋᴛᴏᴋ➟ɴᴏᴍʙʀᴇ ᴅᴇ ᴜsᴜᴀʀɪᴏ
┃✯│▢/ɪɢsᴛᴀʟᴋ➟ɴᴏᴍʙʀᴇ ᴅᴇ ᴜsᴜᴀʀɪᴏ
┃✯│▢/ɪɢsᴛᴏʀʏ➟ɴᴏᴍʙʀᴇ ᴅᴇ ᴜsᴜᴀʀɪᴏ
┃✯╰▢/ᴛɪᴋᴛᴏᴋsᴛᴀʟᴋ➟ᴜsᴇʀɴᴀᴍᴇ
╰━━━━━━━━━━━──⊷
ꨄ︎-----  -----  -----  -----  -----ꨄ︎
╭─────────────◆
┃✯-💥𝙸𝙽𝙵𝙾𝚁𝙼𝙰𝙲𝙸𝙾𝙽💥
┃✯🍁᭢━━━━━━━━━᭥🍁᭢
┃✯╭──────────◆
┃✯│▢-sᴇʀʙᴏᴛ 
┃✯│▢-ɢʀᴜᴘᴏs
┃✯╰▢-ɪɴsᴛᴀʟᴀʀʙᴏᴛ 
╰━━━━━━━━━━━──⊷
ꨄ︎-----  -----  -----  -----  -----ꨄ︎
╭─────────────◆
┃✯-🧩𝐄𝐒𝐓𝐈𝐊𝐄𝐑𝐒👾-⦿
┃✯🍁᭢━━━━━━━━━᭥🍁᭢
┃✯╭──────────◆
┃✯│▢/sᴛɪᴄᴋᴇʀ➟ʀᴇsᴘᴏɴᴅᴇʀ➟ᴀ➟ɪᴍᴀɢᴇɴ➟ᴏ➟ᴠɪᴅᴇᴏ
┃✯│▢/sᴛɪᴄᴋᴇʀ➟ᴇɴʟᴀᴄᴇ➟ʟɪɴᴋ
┃✯│▢/s➟ʀᴇsᴘᴏɴᴅᴇʀ➟ɪᴍᴀɢᴇɴ➟ᴏ➟ᴠɪᴅᴇᴏ
┃✯│▢/s➟ᴇɴʟᴀᴄᴇ➟ʟɪɴᴋ
┃✯│▢/sғᴜʟʟ➟ɪᴍᴀɢᴇɴ➟ᴏ➟ᴠɪᴅᴇᴏ
┃✯│▢/ᴇᴍᴏᴊɪᴍɪx➟ᴇᴍᴏᴊɪ➟1&ᴇᴍᴏᴊɪ 2
┃✯│▢/sᴄɪʀᴄʟᴇ➟ɪᴍᴀɢᴇɴ
┃✯│▢/sʀᴇᴍᴏᴠᴇʙɢ➟ɪᴍᴀɢᴇɴ
┃✯│▢/sᴇᴍᴏᴊɪ➟ᴛɪᴘᴏ➟ᴇᴍᴏᴊɪ
┃✯│▢/ᴀᴛᴛᴘ➟ᴛᴇxᴛᴏ
┃✯│▢/ᴀᴛᴛᴘ2➟ᴛᴇxᴛᴏ
┃✯│▢/ᴀᴛᴛᴘ3➟ᴛᴇxᴛᴏ
┃✯│▢/ᴛᴛᴘ➟ᴛᴇxᴛᴏ
┃✯│▢/ᴛᴛᴘ2➟ᴛᴇxᴛᴏ
┃✯│▢/ᴛᴛᴘ3➟ᴛᴇxᴛᴏ
┃✯│▢/ᴛᴛᴘ4➟ᴛᴇxᴛᴏ
┃✯│▢/ᴛᴛᴘ5➟ᴛᴇxᴛᴏ
┃✯│▢/ᴘᴀᴛ➟@ᴛᴀɢ
┃✯│▢/sʟᴀᴘ➟@ᴛᴀɢ
┃✯│▢/ᴋɪss➟@ᴛᴀɢ
┃✯│▢/ᴅᴀᴅᴏ
┃✯│▢/ᴡᴍ➟ᴘᴀᴄᴋɴᴀᴍᴇ➟ᴀᴜᴛʜᴏʀ
┃✯│▢/sᴛɪᴄᴋᴇʀᴍᴀʀᴋᴇʀ➟ᴇғᴇᴄᴛᴏ➟ɪᴍᴀɢᴇɴ
┃✯╰▢/sᴛɪᴄᴋᴇʀғɪʟᴛᴇʀ➟ᴇғᴇᴄᴛᴏ➟ɪᴍᴀɢᴇɴ
╰━━━━━━━━━━━──⊷
ꨄ︎-----  -----  -----  -----  -----ꨄ︎
╭─────────────◆
┃✯-🌴𝐄𝐅𝐄𝐂𝐓𝐎𝐒 𝐘 𝐋𝐎𝐆𝐎𝐒🧨-⦿
┃✯🍁᭢━━━━━━━━━᭥🍁᭢
┃✯╭──────────◆
┃✯│▢/ᴘʜᴍᴀᴋᴇʀ➟ᴏᴘᴄɪᴏɴ➟ɪᴍᴀɢᴇɴ
┃✯│▢/ʟᴏɢᴏs➟ᴇғᴇᴄᴛᴏ➟ᴛᴇxᴛᴏ
┃✯│▢/ʟᴏɢᴏᴄʜʀɪsᴛᴍᴀs➟ᴛᴇxᴛᴏ
┃✯│▢/ʟᴏɢᴏᴄᴏʀᴀᴢᴏɴ➟ᴛᴇxᴛᴏ
┃✯│▢/ʏᴛᴄᴏᴍᴍᴇɴᴛ➟ᴛᴇxᴛᴏ
┃✯│▢/ʜᴏʀɴʏᴄᴀʀᴅ➟@ᴛᴀɢ
┃✯│▢/sɪᴍᴘᴄᴀʀᴅ➟@ᴛᴀɢ
┃✯│▢/ʟᴏʟɪᴄᴇ➟@ᴛᴀɢ
┃✯│▢/ɪᴛssᴏsᴛᴜᴘɪᴅ
┃✯│▢/ᴘɪxᴇʟᴀʀ
┃✯╰▢/ʙʟᴜʀ
╰━━━━━━━━━━━──⊷
ꨄ︎-----  -----  -----  -----  -----ꨄ︎
╭─────────────◆
┃✯-🔍𝐁𝐔𝐒𝐂𝐀𝐃𝐎𝐑𝐄𝐒🔎-⦿
┃✯🍁᭢━━━━━━━━━᭥🍁᭢
┃✯╭──────────◆
┃✯│▢/ᴍᴏᴅᴀᴘᴋ➟ᴛᴇxᴛᴏ
┃✯│▢/sᴛɪᴄᴋᴇʀsᴇᴀʀᴄʜ➟ᴛᴇxᴛᴏ
┃✯│▢/sᴛɪᴄᴋᴇʀsᴇᴀʀᴄʜ2➟ᴛᴇxᴛᴏ
┃✯│▢/xɴxxsᴇᴀʀᴄʜ➟ᴛᴇxᴛᴏ
┃✯│▢/ᴀɴɪᴍᴇɪɴғᴏ➟ᴛᴇxᴛᴏ
┃✯│▢/ɢᴏᴏɢʟᴇ➟ᴛᴇxᴛᴏ
┃✯│▢/ʟᴇᴛʀᴀ➟ᴛᴇxᴛᴏ
┃✯│▢/ᴡɪᴋɪᴘᴇᴅɪᴀ➟ᴛᴇxᴛᴏ
┃✯│▢/ʏᴛsᴇᴀʀᴄʜ➟ᴛᴇxᴛᴏ
┃✯╰▢/ᴘʟᴀʏsᴛᴏʀᴇ➟ᴛᴇxᴛᴏ
╰━━━━━━━━━━━──⊷
ꨄ︎-----  -----  -----  -----  -----ꨄ︎
╭─────────────◆
┃✯🎙️𝐂𝐎𝐍𝐕𝐄𝐑𝐓𝐈𝐃𝐎𝐑𝐄𝐒🎚️&
┃✯𝐄𝐅𝐄𝐂𝐓𝐎𝐒 𝐃𝐄 𝐀𝐔𝐃𝐈𝐎𝐒--⦿
┃✯🍁᭢━━━━━━━━━᭥🍁᭢
┃✯╭──────────◆
┃✯│▢/ᴛᴏɢɪғᴀᴜᴅ➟ᴠɪᴅᴇᴏ
┃✯│▢/ᴛᴏɪᴍɢ➟sᴛɪᴄᴋᴇʀ
┃✯│▢/ᴛᴏᴍᴘ3➟ᴠɪᴅᴇᴏ
┃✯│▢/ᴛᴏᴍᴘ3➟ɴᴏᴛᴀ➟ᴅᴇ➟ᴠᴏᴢ
┃✯│▢/ᴛᴏᴘᴛᴛ➟ᴠɪᴅᴇᴏ➟ᴀᴜᴅɪᴏ
┃✯│▢/ᴛᴏᴠɪᴅᴇᴏ➟sᴛɪᴄᴋᴇʀ
┃✯│▢/ᴛᴏᴜʀʟ➟ᴠɪᴅᴇᴏ➟ɪᴍᴀɢᴇɴ➟ᴀᴜᴅɪᴏ
┃✯│▢/ᴛᴛs➟ᴇs➟ᴛᴇxᴛᴏ
┃✯│▢/ʙᴀss
┃✯│▢/ʙʟᴏᴡɴ
┃✯│▢/ᴅᴇᴇᴘ
┃✯│▢/ᴇᴀʀʀᴀᴘᴇ
┃✯│▢/ғᴀsᴛ
┃✯│▢/ғᴀᴛ
┃✯│▢/ɴɪɢʜᴛᴄᴏʀᴇ
┃✯│▢/0ʀᴇᴠᴇʀsᴇ
┃✯│▢/ʀᴏʙᴏᴛ
┃✯│▢/sʟᴏᴡ
┃✯│▢/sᴍᴏᴏᴛʜ
┃✯╰▢/ᴛᴜᴘᴀɪ
╰━━━━━━━━━━━──⊷
ꨄ︎-----  -----  -----  -----  -----ꨄ︎
╭─────────────◆
┃✯-🤴𝐎𝐖𝐍𝐄𝐑👸-⦿
┃✯🍁᭢━━━━━━━━━᭥🍁᭢
┃✯╭──────────◆
┃✯│▢/sᴇᴛᴘʀᴇғɪx➟ᴘʀᴇғɪᴊᴏ
┃✯│▢/ʀᴇsᴇᴛᴘʀᴇғɪx
┃✯│▢/ᴀᴜᴛᴏᴀᴅᴍɪɴ
┃✯│▢/ʟᴇᴀᴠᴇɢᴄ
┃✯│▢/ʙʟᴏᴄᴋʟɪsᴛ
┃✯│▢/ʙʟᴏᴄᴋ➟@ᴛᴀɢ➟ɴᴜᴍᴇʀᴏ
┃✯│▢/ᴜɴʙʟᴏᴄᴋ➟@ᴛᴀɢ➟ɴᴜᴍᴇʀᴏ
┃✯│▢/ᴇɴᴀʙʟᴇ➟ʀᴇsᴛʀɪᴄᴛ
┃✯│▢/ᴅɪsᴀʙʟᴇ➟ʀᴇsᴛʀɪᴄᴛ
┃✯│▢/ᴇɴᴀʙʟᴇ➟ᴀᴜᴛᴏʀᴇᴀᴅ
┃✯│▢/ᴅɪsᴀʙʟᴇ➟ᴀᴜᴛᴏʀᴇᴀᴅ
┃✯│▢/ᴇɴᴀʙʟᴇ➟ᴘᴜʙʟɪᴄ
┃✯│▢/ᴅɪsᴀʙʟᴇ➟ᴘᴜʙʟɪᴄ
┃✯│▢/ᴇɴᴀʙʟᴇ➟ᴘᴄᴏɴʟʏ
┃✯│▢/ᴅɪsᴀʙʟᴇ➟ᴘᴄᴏɴʟʏ
┃✯│▢/ᴇɴᴀʙʟᴇ➟ɢᴄᴏɴʟʏ
┃✯│▢/ᴅɪsᴀʙʟᴇ➟ɢᴄᴏɴʟʏ
┃✯│▢/ᴇɴᴀʙʟᴇ➟ᴀɴᴛɪᴄᴀʟʟ
┃✯│▢/ᴅɪsᴀʙʟᴇ➟ᴀɴᴛɪᴄᴀʟʟ
┃✯│▢/ᴇɴᴀʙʟᴇ➟ᴀɴᴛɪᴘʀɪᴠᴀᴅᴏ
┃✯│▢/ᴅɪsᴀʙʟᴇ➟ᴀɴᴛɪᴘʀɪᴠᴀᴅᴏ
┃✯│▢/ᴇɴᴀʙʟᴇ➟ᴍᴏᴅᴇᴊᴀᴅɪʙᴏᴛ
┃✯│▢/ᴅɪsᴀʙʟᴇ➟ᴍᴏᴅᴇᴊᴀᴅɪʙᴏᴛ
┃✯│▢/ᴍsɢ➟ᴛᴇxᴛᴏ
┃✯│▢/ʙᴀɴᴄʜᴀᴛ
┃✯│▢/ᴜɴʙᴀɴᴄʜᴀᴛ
┃✯│▢/ʙᴀɴᴜsᴇʀ➟@ᴛᴀɢ
┃✯│▢/ᴜɴʙᴀɴᴜsᴇʀ➟@ᴛᴀɢ
┃✯│▢/ᴅᴀʀᴅɪᴀᴍᴀɴᴛᴇs➟@ᴛᴀɢ
┃✯│▢/ʙᴀɴᴜsᴇʀ➟@ᴛᴀɢ
┃✯│▢/ʙᴄ➟ᴛᴇxᴛᴏ
┃✯│▢/ʙᴄᴄʜᴀᴛs➟ᴛᴇxᴛᴏ
┃✯│▢/ʙᴄɢᴄ➟ᴛᴇxᴛᴏ
┃✯│▢/ʙᴄɢᴄ2➟ᴀᴜᴅɪᴏ
┃✯│▢/ʙᴄɢᴄ2➟ᴠɪᴅᴇᴏ
┃✯│▢/ʙᴄɢᴄ2➟ɪᴍᴀɢᴇɴ
┃✯│▢/ʙᴄʙᴏᴛ➟ᴛᴇxᴛᴏ
┃✯│▢/ᴄʟᴇᴀʀᴛᴘᴍ
┃✯│▢/ʀᴇsᴛᴀʀᴛ
┃✯│▢/ᴜᴘᴅᴀᴛᴇ
┃✯│▢/ʙᴀɴʟɪsᴛ
┃✯│▢/ᴀᴅᴅᴘʀᴇᴍ➟@ᴛᴀɢ
┃✯│▢/ᴅᴇʟᴘʀᴇᴍ➟@ᴛᴀɢ
┃✯│▢/ʟɪsᴛᴘʀᴇᴍ
┃✯│▢/ʟɪsᴛᴄᴍᴅ
┃✯│▢/sᴇᴛᴘᴘʙᴏᴛ➟ʀᴇsᴘᴏɴᴅᴇʀ➟ᴀ➟ɪᴍᴀɢᴇɴ
┃✯│▢/ᴀᴅᴅᴄᴍᴅ➟ᴛᴇxᴛᴏ➟ʀᴇsᴘᴏɴᴅᴇʀ➟ᴀ➟sᴛɪᴄᴋᴇʀ➟ɪᴍᴀɢᴇɴ
┃✯╰▢/ᴅᴇʟᴄᴍᴅ➟ʀᴇsᴘᴏɴᴅᴇʀ➟ᴀ➟sᴛɪᴄᴋᴇʀ➟ɪᴍᴀɢᴇɴ➟ᴄᴏɴ➟ᴄᴏᴍᴀɴᴅᴏ➟ᴏ➟ᴛᴇxᴛᴏ➟ᴀsɪɢɴᴀᴅᴏ
╰━━━━━━━━━━━──⊷
ꨄ︎-----  -----  -----  -----  -----ꨄ︎
╭─────────────◆
┃✯-👥𝐆𝐑𝐔𝐏𝐎👩‍🏫-⦿
┃✯🍁᭢━━━━━━━━━᭥🍁᭢
┃✯╭──────────◆
┃✯│▢/ᴀᴅᴅ➟ɴᴜᴍᴇʀᴏ
┃✯│▢/ᴋɪᴄᴋ➟@ᴛᴀɢ
┃✯│▢/ᴋɪᴄᴋ2➟@ᴛᴀɢ
┃✯│▢/ʟɪsᴛᴀɴᴜᴍ➟ᴛᴇxᴛᴏ
┃✯│▢/ᴋɪᴄᴋɴᴜᴍ➟ᴛᴇxᴛᴏ
┃✯│▢/ɢʀᴜᴘᴏ➟ᴀʙʀɪʀ➟ᴄᴇʀʀᴀʀ
┃✯│▢/ɢʀᴏᴜᴘᴛɪᴍᴇ➟ᴏᴘᴄɪᴏɴ➟ᴛɪᴇᴍᴘᴏ
┃✯│▢/ᴘʀᴏᴍᴏᴛᴇ➟@ᴛᴀɢ
┃✯│▢/ᴅᴇᴍᴏᴛᴇ➟@ᴛᴀɢ
┃✯│▢/ᴀᴅᴍɪɴs➟ᴛᴇxᴛᴏ➟𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜
┃✯│▢/ᴅᴇᴍᴏᴛᴇ➟@ᴛᴀɢ
┃✯│▢/ɪɴғᴏɢʀᴏᴜᴘ
┃✯│▢/ʀᴇsᴇᴛʟɪɴᴋ
┃✯│▢/ʟɪɴᴋ
┃✯│▢/sᴇᴛɴᴀᴍᴇ➟ᴛᴇxᴛᴏ
┃✯│▢/sᴇᴛᴅᴇsᴄ➟ᴛᴇxᴛᴏ
┃✯│▢/ɪɴᴠᴏᴄᴀʀ➟ᴛᴇxᴛᴏ
┃✯│▢/sᴇᴛᴡᴇʟᴄᴏᴍᴇ➟ᴛᴇxᴛᴏ
┃✯│▢/sᴇᴛʙʏᴇ➟ᴛᴇxᴛᴏ
┃✯│▢/ʜɪᴅᴇᴛᴀɢ➟ᴛᴇxᴛᴏ
┃✯│▢/ʜɪᴅᴇᴛᴀɢ➟ᴀᴜᴅɪᴏ
┃✯│▢/ʜɪᴅᴇᴛᴀɢ➟ᴠɪᴅᴇᴏ
┃✯│▢/ʜɪᴅᴇᴛᴀɢ➟ɪᴍᴀɢᴇɴ
┃✯│▢/ᴡᴀʀɴ➟@ᴛᴀɢ
┃✯│▢/ᴜɴᴡᴀʀɴ➟@ᴛᴀɢ
┃✯│▢/ʟɪsᴛᴡᴀʀɴ
┃✯│▢/ғᴀɴᴛᴀsᴍᴀs
┃✯│▢/ᴅᴇsᴛʀᴀʙᴀ
┃✯╰▢/sᴇᴛᴘᴘ➟ɪᴍᴀɢᴇɴ
╰━━━━━━━━━━━──⊷
ꨄ︎-----  -----  -----  -----  -----ꨄ︎
╭─────────────◆
│✯-👩‍🔧𝐇𝐄𝐑𝐑𝐀𝐌𝐈𝐄𝐍𝐓𝐀𝐒👩‍🏭-⦿
┃✯🍁᭢━━━━━━━━━᭥🍁᭢
┃✯╭──────────◆
┃✯️│▢/ᴄʜᴀᴛɢᴘᴛ➟ᴛᴇxᴛᴏ
┃✯│▢/️ᴅᴀʟʟ-ᴇ➟ᴛᴇxᴛᴏ
┃✯│▢/️ᴛᴀᴍᴀñᴏ➟ᴄᴀɴᴛɪᴅᴀᴅ➟ɪᴍᴀɢᴇɴ➟ᴠɪᴅᴇᴏ
┃✯│▢/️ᴄʟɪᴍᴀ➟ᴘᴀís➟ᴄɪᴜᴅᴀᴅ
┃✯│▢/️ᴇɴᴄᴜᴇsᴛᴀ➟ᴛᴇxᴛᴏ1|ᴛᴇxᴛᴏ2...
┃✯│▢/️ᴀғᴋ➟ᴍᴏᴛɪᴠᴏ
┃✯│▢/️ᴏᴄʀ➟ʀᴇsᴘᴏɴᴅᴇ➟ᴀ➟ɪᴍᴀɢᴇɴ
┃✯️│▢/ᴀᴄᴏʀᴛᴀʀ➟ᴇɴʟᴀᴄᴇ➟ʟɪɴᴋ
┃✯│▢/️ᴄᴀʟᴄ➟ᴏᴘᴇʀᴀᴄɪᴏɴ➟ᴍᴀᴛʜ
┃✯│▢/️ᴅᴇʟ➟ᴍᴇɴsᴀᴊᴇ
┃✯│▢/️ᴡʜᴀᴛᴍᴜsɪᴄ➟ᴀᴜᴅɪᴏ
┃✯│▢/️ʀᴇᴀᴅǫʀ➟ɪᴍᴀɢᴇɴ➟ǫʀ
┃✯│▢/️ǫʀᴄᴏᴅᴇ➟ᴛᴇxᴛᴏ
┃✯️│▢/ʀᴇᴀᴅᴍᴏʀᴇ➟ᴛᴇxᴛᴏ1| ᴛᴇxᴛᴏ2
┃✯│▢/sᴛʏʟᴇᴛᴇxᴛᴛ➟ᴇxᴛᴏ
┃✯│▢/ᴛʀᴀᴅᴜᴄɪʀ➟ᴛᴇxᴛᴏ
┃✯│▢/ɴᴏᴡᴀ➟ɴᴜᴍᴇʀᴏ
┃✯│▢/ᴄᴏᴠɪᴅ➟ᴘᴀɪs
┃✯╰▢/ʜᴏʀᴀʀɪᴏ
╰━━━━━━━━━━━──⊷
ꨄ︎-----  -----  -----  -----  -----ꨄ︎
╭─────────────◆
│✯✔️𝐀𝐂𝐓𝐈𝐕𝐀𝐑 𝐎 𝐃𝐄𝐒𝐀𝐂𝐓𝐈𝐕𝐀𝐑❎
┃✯🍁᭢━━━━━━━━━᭥🍁᭢
┃✯╭─────────────◆ 
┃✯│▢/ᴇɴᴀʙʟᴇ➟ᴡᴇʟᴄᴏᴍᴇ
┃✯│▢/ᴅɪsᴀʙʟᴇ➟ᴡᴇʟᴄᴏᴍᴇ
┃✯│▢/ᴇɴᴀʙʟᴇ➟ᴍᴏᴅᴏʜᴏʀɴʏ
┃✯│▢/ᴅɪsᴀʙʟᴇ➟ᴍᴏᴅᴏʜᴏʀɴʏ
┃✯│▢/ᴇɴᴀʙʟᴇ➟ᴀɴᴛɪʟɪɴᴋ
┃✯│▢/ᴅɪsᴀʙʟᴇ➟ᴀɴᴛɪʟɪɴᴋ
┃✯│▢/ᴇɴᴀʙʟᴇ➟ᴀɴᴛɪʟɪɴᴋ2
┃✯│▢/ᴅɪsᴀʙʟᴇ➟ᴀɴᴛɪʟɪɴᴋ2
┃✯│▢/ᴇɴᴀʙʟᴇ➟ᴅᴇᴛᴇᴄᴛ
┃✯│▢/ᴅɪsᴀʙʟᴇ➟ᴅᴇᴛᴇᴄᴛ
┃✯│▢/ᴇɴᴀʙʟᴇ➟ᴀᴜᴛᴏsᴛɪᴄᴋᴇʀ
┃✯│▢/ᴅɪsᴀʙʟᴇ➟ᴀᴜᴛᴏsᴛɪᴄᴋᴇʀ
┃✯│▢/ᴇɴᴀʙʟᴇ➟ᴀɴᴛɪᴠɪᴇᴡᴏɴᴄᴇ
┃✯│▢/ᴅɪsᴀʙʟᴇ➟ᴀɴᴛɪᴠɪᴇᴡᴏɴᴄᴇ
┃✯│▢/ᴇɴᴀʙʟᴇ➟ᴀɴᴛɪᴛᴏxɪᴄ
┃✯│▢/ᴅɪsᴀʙʟᴇ➟ᴀɴᴛɪᴛᴏxɪᴄ
┃✯│▢/ᴇɴᴀʙʟᴇ➟ᴀɴᴛɪᴛʀᴀʙᴀ
┃✯│▢/ᴅɪsᴀʙʟᴇ➟ᴀɴᴛɪᴛʀᴀʙᴀ
┃✯│▢/ᴇɴᴀʙʟᴇ➟ᴀɴᴛɪᴀʀᴀʙᴇs
┃✯│▢/ᴅɪsᴀʙʟᴇ➟ᴀɴᴛɪᴀʀᴀʙᴇs
┃✯│▢/ᴇɴᴀʙʟᴇ➟ᴍᴏᴅᴏᴀᴅᴍɪɴ
┃✯╰▢/ᴅɪsᴀʙʟᴇ➟ᴍᴏᴅᴏᴀᴅᴍɪɴ
╰━━━━━━━━━━━──⊷
ᴏᴡɴᴇʀ:ᴏғᴄ➟ʏᴏᴠᴀɴɪ
ɴᴜᴍᴇʀᴏ:Wa.me/5212412377467`.trim()
if (m.isGroup) {
conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}, { quoted: m })    
} else {    
let fkontak2 = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }  
conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}, { quoted: fkontak2 })}
} catch {
conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m)
}}
handler.command = /^(menu|menú|memu|memú|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos|cmd)$/i
handler.exp = 50
handler.fail = null
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}