// Helper centralizado para reproducir SFX
export const playSFX = (soundName) => {
    const audio = new Audio(`/sounds/${soundName}.mp3`);
    audio.play().catch((err) => {
        // Manejo autónomo por si el navegador bloquea autoplay sin interacción previa
        console.log(`Audio ${soundName} en espera de interacción:`, err);
    });
};

export default playSFX;