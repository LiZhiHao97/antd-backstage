import mongoose from 'mongoose'
// 链接mongodb, 并使用imooc这个集合
const DB_URL = 'mongodb://localhost:27017/chintek'

mongoose.connect(DB_URL)

const models = {
  user: {
    'user': { type: String, require: true },
    'pwd': { type: String, require: true },
    'type': { type: String, require:true },
    'avator': { type: String },
    'desc': { type: String },
    //职位名
    'title': { type: String },
    // 如果你是boss 还有两个字段
    'company': { type: String},
    'money': { type: String }
  },

  product: {

  }
}

for (let m in models) {
  mongoose.model(m, new mongoose.Schema(models[m]))
}

export default {
  getModel: function (name) {
    return mongoose.model(name)
  }
}