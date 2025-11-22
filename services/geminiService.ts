import { GoogleGenAI, Chat } from "@google/genai";
import { DEV_NAME, DEV_ROLE, DEV_BIO, PROJECTS, SKILLS, EXPERIENCE } from "../constants";

const apiKey = process.env.API_KEY;

let chatSession: Chat | null = null;

const SYSTEM_INSTRUCTION = `
Eres el asistente virtual del portafolio de ${DEV_NAME}. Tu objetivo es responder preguntas de reclutadores, clientes o desarrolladores interesados en el perfil de ${DEV_NAME}.

Información de contexto:
- Nombre: ${DEV_NAME}
- Rol: ${DEV_ROLE}
- Bio: ${DEV_BIO}
- Habilidades principales: ${SKILLS.map(s => s.name).join(', ')}
- Experiencia reciente: ${EXPERIENCE[0].role} en ${EXPERIENCE[0].company}.
- Proyectos destacados: ${PROJECTS.map(p => p.title).join(', ')}.

Instrucciones:
1. Responde de manera profesional, amable y concisa.
2. Si te preguntan por contacto, sugiere usar el formulario de la sección de contacto o escribir a email@ejemplo.com.
3. Si te preguntan sobre tecnologías específicas, consulta la lista de habilidades.
4. Mantén un tono entusiasta sobre la tecnología y el desarrollo web.
5. Responde siempre en Español, a menos que el usuario te hable en otro idioma.
`;

export const initializeChat = () => {
  if (!apiKey) {
    console.warn("Gemini API Key not found. Chat functionality will be limited.");
    return null;
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    return chatSession;
  } catch (error) {
    console.error("Failed to initialize Gemini chat:", error);
    return null;
  }
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!chatSession) {
    chatSession = initializeChat();
  }

  if (!chatSession) {
    return "Lo siento, el servicio de chat no está disponible en este momento (Falta API Key).";
  }

  try {
    const result = await chatSession.sendMessage({ message });
    return result.text || "No pude generar una respuesta.";
  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    return "Hubo un error al procesar tu mensaje. Por favor intenta de nuevo.";
  }
};
