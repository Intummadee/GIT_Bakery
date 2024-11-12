# GIT_Bakery
 



mkdir backend && cd backend
python -m venv env
env\Scripts\activate     # สำหรับ Windows
pip install fastapi uvicorn python-dotenv

รัน uvicorn main:app --reload

อยากดู DOC --> http://127.0.0.1:8000/docs


mkdir frontend && cd frontend
npm create vite@latest .
npm install
