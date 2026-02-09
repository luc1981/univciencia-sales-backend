import { model } from '../config/gemini.js';
import { SYSTEM_PROMPT } from '../data/context.js';

export const handleChat = async (req, res) => {
    try {
        // Validación de seguridad: Verificar si el middleware express.json() está activo
        if (!req.body) {
            console.error("❌ ERROR: req.body es undefined. Falta app.use(express.json()) en app.js");
            return res.status(500).json({ error: "Error interno: El servidor no está procesando JSON." });
        }

        const { message } = req.body;

        if (!message) {
            return res.status(400).json({ error: "El mensaje no puede estar vacío" });
        }

        // Armamos el paquete para Gemini
        const prompt = `
        INSTRUCCIONES DEL SISTEMA:
        ${SYSTEM_PROMPT}

        MENSAJE DEL USUARIO:
        ${message}

        RESPUESTA DEL ASISTENTE:
        `;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        
        // Verificamos si hay respuesta válida antes de intentar leerla
        if (!response || !response.candidates || response.candidates.length === 0) {
            throw new Error("La IA no devolvió ningún candidato (posible bloqueo de seguridad).");
        }

        const text = response.text();

        res.json({ reply: text });

    } catch (error) {
        console.error("❌ Error detallado de Gemini:", JSON.stringify(error, null, 2));
        // Enviamos el mensaje de error original para que sepas qué está pasando (ej. API Key inválida)
        res.status(500).json({ 
            error: "Error al comunicarse con la IA.", 
            details: error.message || "Error desconocido" 
        });
    }
};
