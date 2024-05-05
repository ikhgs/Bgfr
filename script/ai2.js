const axios = require('axios');

module.exports.config = {
  name: 'ai2',
  version: '1.0.0',
  role: 0,
  hasPrefix: false,
  aliases: ['gpt', 'openai'],
  description: "An AI command powered by GPT-4",
  usage: "Ai2 [promot]",
  credits: 'Developer',
  cooldown: 3,
};

module.exports.run = async function({ api, event, args }) {
  const input = args.join(' ');
  
  if (!input) {
    api.sendMessage(`𝑯𝑬𝑳𝑳𝑶 𝑰𝑴 𝑨𝑰 ✨ 

━━━━━━━━━━━━━━━

 𝑷𝑳𝑬𝑨𝑺𝑬 𝑷𝑹𝑶𝑽𝑰𝑫𝑬 𝑨 𝑸𝑼𝑬𝑺𝑻𝑰𝑶𝑵/𝑸𝑼𝑬𝑹𝒀`, event.threadID, event.messageID);
    return;
  }
  
  api.sendMessage(`🔍𝙎𝙚𝙖𝙧𝙘𝙝𝙞𝙣𝙜 𝙋𝙡𝙚𝙖𝙨𝙚 𝙒𝙖𝙞𝙩....
━━━━━━━━━━━━━━━━━━\n\n "${input}"`, event.threadID, event.messageID);
  
  try {
    const { data } = await axios.get(`https://openaikey-x20f.onrender.com/api?prompt=${encodeURIComponent(input)}`);
    let response = data.response;
    response += "\n\n𝘛𝘩𝘦 𝘣𝘰𝘵 𝘸𝘢𝘴 𝘤𝘳𝘦𝘢𝘵𝘦𝘥 𝘣𝘺 𝘤𝘩𝘶𝘳𝘤𝘩𝘪𝘭𝘭:https://www.facebook.com/Churchill.Dev4100";
    api.sendMessage(response, event.threadID, event.messageID);
  } catch (error) {
    api.sendMessage('An error occurred while processing your request.', event.threadID, event.messageID);
  }
};