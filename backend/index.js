const express = require("express")
const nodemailer = require("nodemailer")
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(cors())

app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "TU_CORREO@gmail.com",       // 👈 Cambiá por tu email
        pass: "TU_CONTRASEÑA_O_APP_PASS",  // 👈 Clave de app desde https://myaccount.google.com/apppasswords
      },
    })

    await transporter.sendMail({
      from: email,
      to: "lucasmagan10@gmail.com",
      subject: `Consulta de ${name}`,
      text: message,
    })

    res.status(200).send("Correo enviado con éxito")
  } catch (error) {
    console.error("Error al enviar:", error)
    res.status(500).send("Error al enviar el correo")
  }
})

app.listen(3001, () => {
  console.log("Servidor backend en http://localhost:3001")
})
