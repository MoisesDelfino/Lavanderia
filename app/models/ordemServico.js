const momgoose = require("mongoose");
const Schema = mongoose.Schema;

const ordemServicoSchema = newSchema(
  {
    valorEntrada: Date,
    ValorSaida: Date,
    ValorTotal: Number,
    cliente: {
      type: Schema.Types.ObjectId,
      ref: "cliente"
    },
    itens: [
      {
        type: Schema.Types.ObjectId,
        ref: "item"
      }
    ]
  },
  { timestamps: true }
);

const ordemServico = mongoose.model("ordensServicos", ordemServicoSchema);

module.exports = ordemServico;
