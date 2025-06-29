"""
Natural Language Cross‑Platform Data Query RAG Agent – FastAPI backend.

Run locally:
    uvicorn app:app --reload --host 0.0.0.0 --port 8000
"""
from fastapi import FastAPI
from pydantic import BaseModel
from typing import Any, List, Dict

# Placeholder imports for demonstration purposes.
# In a production build, you would bring in LangChain, DB connectors, and your RAG pipeline here.
# from langchain.chat_models import ChatOpenAI
# from langchain.chains.query_constructor.base import load_query_constructor

app = FastAPI(
    title="Natural Language Wealth Insights Assistant",
    description="Query MongoDB + MySQL in plain English and get rich answers.",
    version="0.1.0",
)

class QueryRequest(BaseModel):
    query: str

class QueryResponse(BaseModel):
    result_type: str  # 'text' | 'table' | 'graph'
    data: Any

@app.post("/query", response_model=QueryResponse)
async def run_query(req: QueryRequest):
    """
    VERY simplified demo logic. Replace with your LangChain‑powered pipeline.

    Args:
        req: QueryRequest with a natural language query.

    Returns:
        QueryResponse with dummy data of type text/table/graph.
    """
    q = req.query.lower()

    # Demo rule-based responses -------------------------------------------------
    if "top five portfolios" in q:
        data = [
            {"client": "Star A", "portfolio_value_cr": 250},
            {"client": "Star B", "portfolio_value_cr": 240},
            {"client": "Star C", "portfolio_value_cr": 230},
            {"client": "Star D", "portfolio_value_cr": 220},
            {"client": "Star E", "portfolio_value_cr": 210},
        ]
        return {"result_type": "table", "data": data}

    if "top relationship managers" in q:
        text = (
            "1. Ria Kapoor – ₹1,250 Cr AUM\n"
            "2. Arjun Mehta – ₹1,110 Cr AUM\n"
            "3. Zoya D'Souza – ₹985 Cr AUM"
        )
        return {"result_type": "text", "data": text}

    # Fallback
    return {
        "result_type": "text",
        "data": (
            "🚧 The full LangChain pipeline isn't wired up in this demo. "
            "Implement your own logic in backend/app.py."
        ),
    }
