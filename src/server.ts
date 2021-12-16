import { http } from "./http";
import "./websocket/client";
import "./websocket/admin";

http.listen(3333, () => console.log("Server is running on port 3333"))










/**
 * GET = Buscar
 * Post = Criação
 * Put = Alteração
 * DELETE = Deletar
 * PATCHE = Alterar algo expecifico na aplicação
 */

// app.get("/", (request, response) =>{
//     return response.json({
//         message: "Olá NLW 05"
//     })
// })

// app.post("/", (request, response) =>{
//     return response.json({ message: "Usuário salvo com sucesso"})
// })


