from typing import Optional
from fastapi import FastAPI


app = FastAPI()

@app.get('/')
def read_root():
    return { "Success" : 200 }

@app.get('/items/{id}')
def read_item(id: int, query: Optional[str] = ""):
    return {"id":id , "query" : query}



