# Natural Language Cross‑Platform Data Query RAG Agent

**Generated on 2025-06-29**

## Quick Start

**Backend**

```bash
cd backend
python -m venv .venv && source .venv/bin/activate   # Windows: .venv\Scripts\activate
pip install -r requirements.txt
uvicorn app:app --reload
```

**Frontend**

```bash
cd frontend
npm install
npm start
```

## High‑Level Architecture

```
               ┌────────────────┐  REST  ┌────────────────────────┐
               │   React App    │───────▶│ FastAPI  + LangChain   │
               └────────────────┘         │    Query Orchestrator │
                                           └─────────┬────────────┘
                                                     │
                   MongoDB (Profiles) ───────────────┤
                                                     │
                   MySQL  (Transactions) ────────────┘
```

1. Users ask plain‑English questions in the React UI.
2. Requests hit the `/query` endpoint (FastAPI).
3. The LangChain‑powered agent:
   - Determines which DB(s) to hit.
   - Translates the question into structured queries.
   - Retrieves and synthesizes answers via RAG.
4. FastAPI returns `result_type` **text | table | graph** with `data`.
5. React renders prose, tables, or Chart.js graphs dynamically.

## Next Steps / Future Vision

* Deploy OpenAI embeddings + Chroma for hybrid search across JSON, SQL, and MongoDB.
* Adopt LangChain's **Model Context Protocol (MCP)** to maintain short‑lived context shards per user.
* Scale out with Docker Compose (Uvicorn workers, Caddy reverse‑proxy).
* Enterprise‑grade auth & audit trails.

---

_Made with ❤️ and GPT assistance._
