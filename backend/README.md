# Backend – FastAPI + LangChain

## Setup

```bash
cd backend
python -m venv .venv && source .venv/bin/activate  # (Windows: .venv\Scripts\activate)
pip install -r requirements.txt
uvicorn app:app --reload
```

The `/query` endpoint accepts:

```jsonc
{ "query": "What are the top five portfolios of our wealth members?" }
```

and returns a JSON payload:

```jsonc
{ "result_type": "table", "data": [ ... ] }
```

Replace the demo rule‑based logic in **app.py** with your RAG pipeline powered by LangChain.
