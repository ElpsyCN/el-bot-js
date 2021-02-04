import { BotConfig } from "el-bot/dist/config/index";
export default {
  plugins: {
    default: [
      // # - dev
      "answer",
      "blacklist",
      "counter",
      "feeder",
      "forward",
      "limit",
      "memo",
      "nbnhhsh",
      "qrcode",
      "rss",
      "report",
      "search",
      "search-image",
      "teach",
      "workflow",
    ],
    official: [],
    custom: ["./bot/test/webhook"],
  },

  master: [910426929],

  answer: [
    {
      is: "在吗",
      reply: "Yes, Master!",
      help: "在不在测试",
    },
  ],

  "search-image": {
    token: "0306dd15aa139efd8c0e2820e07249aef0c9361b",
    options: {
      results: 3,
    },
  },

  report: [
    {
      type: "jdy-report",
      content: "简道云每日填报情况：${data.msg}",
      target: {
        group: [120117362],
      },
    },
  ],
} as BotConfig;
