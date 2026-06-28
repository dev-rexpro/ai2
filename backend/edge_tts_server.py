import sys
import uvicorn
from fastapi import FastAPI, HTTPException
from fastapi.responses import Response
import edge_tts
from pydantic import BaseModel

app = FastAPI(title="Edge TTS OpenAI Wrapper")

class TTSRequest(BaseModel):
    model: str = "tts-1"
    input: str
    voice: str = "en-US-BrianNeural"

@app.post("/v1/audio/speech")
@app.post("/audio/speech")
async def speech(request: TTSRequest):
    if not request.input.strip():
        raise HTTPException(status_code=400, detail="Input text cannot be empty")
    
    # Map default OpenAI voice names to Edge TTS voices if the user uses them
    voice_map = {
        "alloy": "id-ID-ArdiNeural",
        "echo": "id-ID-ArdiNeural",
        "fable": "en-US-BrianNeural",
        "onyx": "en-US-BrianNeural",
        "nova": "en-US-BrianNeural",
        "shimmer": "en-US-BrianNeural",
    }
    
    voice = request.voice
    if voice in voice_map:
        voice = voice_map[voice]
        
    try:
        communicate = edge_tts.Communicate(request.input, voice)
        audio_data = b""
        async for chunk in communicate.stream():
            if chunk["type"] == "audio":
                audio_data += chunk["data"]
        
        return Response(content=audio_data, media_type="audio/mpeg")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=5050)
