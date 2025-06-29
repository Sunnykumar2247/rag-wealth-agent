# Natural Language Cross‑Platform Data Query RAG Agent

📊 Project Overview – Natural Language Cross-Platform Data Query RAG Agent
This project is an intelligent AI-powered data query assistant built using ReactJS (frontend) and Python with FastAPI (backend), leveraging LangChain to enable natural language access to complex business data across MongoDB and MySQL.

🎯 Business Context
Wealthy individuals—including film stars and sports personalities—have invested ₹100+ crores with our asset management firm. Their profile information (risk appetite, investment goals, etc.) is stored in MongoDB, and all transactional data (buy/sell activity, portfolio values) flows through MySQL.

🧠 What This System Does
Our solution allows business users (like analysts or relationship managers) to query the system using plain English and receive contextual answers in the form of:

📄 Text summaries

📊 Tables

📈 Interactive graphs

Example Queries:
“What are the top five portfolios of our wealth members?”

“Give me the breakup of portfolio values per relationship manager.”

“Tell me the top relationship managers in my firm.”

“Which clients are the highest holders of [specific stock]?”

🏗️ Tech Stack
Layer	Tech
Frontend	ReactJS, Chart.js
Backend	Python, FastAPI
AI / NLP	LangChain
Database	MongoDB (client profiles), MySQL (transactional data)

🔧 Features
✅ Plain-English interface for querying financial data

✅ API endpoint /query powered by LangChain logic

✅ Support for multi-modal outputs: text, table, graph

✅ Frontend with form input and dynamic rendering

✅ Modular architecture for future scalability

🚀 Future Vision
Given more time and resources, we plan to:

✅ Integrate OpenAI embeddings + Chroma for hybrid vector/text search

✅ Adopt LangChain's Model Context Protocol (MCP) for long-term context and scaling across users

✅ Add authentication, audit logging, and role-based access control

✅ Deploy via Docker Compose with reverse proxy for full-stack scalability

💡 Why This Project Stands Out
Bridges AI + Business Intelligence

Simulates a real-world financial domain

Showcases natural language RAG over structured and unstructured data

Offers production-ready architecture for enterprise AI integration



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

