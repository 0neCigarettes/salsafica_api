const mongoose = require('mongoose')
const moment = require('moment')
const ObjectId = mongoose.Types.ObjectId

const mongoSchema = mongoose.Schema({
  idPengeluaran: {
    type: String,
    default: null
  },
  barangs: [
    {
      namaBarang: {
        type: String,
        default: null
      },
      hargaBarang: {
        type: Number,
        default: 0
      },
      jumlahPengeluaran: {
        type: Number,
        default: null
      },
      total: {
        type: Number,
        default: null
      }
    }
  ],
  grandTotal: {
    type: Number,
    default: null
  },
  keterangan: {
    type: String,
    default: null
  },
  created_at: {
    type: Date,
    default: new Date().toISOString()
  }
})

module.exports = mongoose.model('pengluaran', mongoSchema)
