from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# อนุญาต CORS เพื่อให้ frontend เข้าถึง backend ได้
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # URL ของ Vue.js
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def read_root():
    return {"message": "Hello from FastAPI"}

@app.get("/api/data")
async def get_data():
    return {"data": "This is data from FastAPI FameeeFameeeFameeeFameee"}
