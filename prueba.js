// prueba.js (Versión Diagnóstico)
async function probarChat() {
    console.log("⏳ Intentando conectar con Virtual Univciencia...");
    
    try {
        // Enviamos un mensaje de prueba
        const respuesta = await fetch('http://localhost:3000/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: "Hola, precio del curso" })
        });

        // Leemos lo que responde el servidor (sea éxito o error)
        const datos = await respuesta.json();
        
        console.log("\n📦 RESULTADO:");
        console.log("-----------------------------------");
        if (respuesta.ok) {
            console.log("✅ ÉXITO: La IA respondió:");
            console.log(datos.reply);
        } else {
            console.log("❌ ERROR DEL SERVIDOR:");
            console.log(datos); // Aquí veremos por qué falla
        }
        console.log("-----------------------------------");

    } catch (error) {
        console.log("❌ ERROR DE CONEXIÓN:");
        console.log("El servidor parece estar apagado o bloqueado.");
        console.log("Detalle:", error.message);
    }
}

probarChat();