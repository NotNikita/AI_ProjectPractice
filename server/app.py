# The web framework used to build the API.
from fastapi import FastAPI, File, UploadFile
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
#  The ASGI server used to run the FastAPI application.
import uvicorn
# Required for handling form data, including file uploads.

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Allow requests from this origin
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/depth-pro")
async def upload_file(file: UploadFile = File(...)):
    try:
        contents = await file.read()
        # Here you can process the file contents as needed
        return JSONResponse(content={"filename": file.filename, "message": "File received successfully"})
    except Exception as e:
        return JSONResponse(content={"error": str(e)}, status_code=500)

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)