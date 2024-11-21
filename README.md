# GIT_Bakery
 



mkdir backend && cd backend
python -m venv env
env\Scripts\activate     # สำหรับ Window
pip install fastapi uvicorn python-dotenv

รัน uvicorn main:app --reload (ก่อนรัน ต้อง active env ก่อน)

อยากดู1 DOC --> http://127.0.0.1:8000/docs
Guide FastAPI --> https://fastapi.tiangolo.com/tutorial/


mkdir frontend && cd frontend
npm create vite@latest .
npm install



## Feature
- AI chatbot การใช้ AI chatbot เพื่อตอบคำถามลูกค้าในช่องทางออนไลน์ เช่น การสอบถามเมนู สั่งซื้อ หรือตรวจสอบสถานะคำสั่งซื้อ รวมถึงการแนะนำขนมที่ลูกค้าน่าจะชอบ






## อยากจะทำ want
- ระบบจดจำลูกค้า (Customer Recognition System)
หากร้านเบเกอรี่มีการใช้โปรแกรมสมาชิกหรือบัตรสะสมแต้ม AI สามารถใช้ข้อมูลการซื้อในอดีตเพื่อทำความเข้าใจลูกค้า และสร้างประสบการณ์ที่เป็นส่วนตัว เช่น การเตรียมขนมที่ลูกค้าประจำชอบไว้ล่วงหน้า