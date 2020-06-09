const pkg = require("../package.json");
const config = require("../lib/config");

const el = {};
el.pkg = pkg;

// read config
el.qq = process.env.BOT_QQ;
el.setting = config.parse("./plugins/MiraiAPIHTTP/setting.yml");

// merge config
const defaultConfig = config.parse("./config/default/index.yml");
const customConfig = config.parse("./config/custom/index.yml");
config.merge(defaultConfig, customConfig);
el.config = defaultConfig;

module.exports = el;
