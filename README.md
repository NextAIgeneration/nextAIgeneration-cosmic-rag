# COSMIC RAG - Vercel Content Package

**Generated**: 2025-10-22
**Source**: Analysis 27 files, DuckDB export
**Site**: https://cosmic-rag.vercel.app/

---

## 📦 Package Contents

### JSON Data Files

1. **projects.json** (79 projects)
   - Full project database extracted from vault
   - Fields: id, name, type, budget, deadline, status, source
   - Types: EU/Commercial/Internal (40), Internal (15), Commercial (7), etc.

2. **technologies.json** (198 unique technologies)
   - Technology stack with mention counts
   - Fields: id, name, category, mentions
   - Top: K3s (16), Obsidian (8), Dataview (6), etc.

3. **metadata.json** (run metadata)
   - Extraction run information
   - Model: llama3.1:8b
   - Success rate: 96.3%
   - Files processed: 27

### Documentation

4. **COSMIC-STRATEGIC-CONTENT-VERCEL.md**
   - Full strategic content (executive summary, portfolio analysis, etc.)
   - Ready for web page integration
   - Markdown format (easy conversion to HTML/JSX)

---

## 🚀 Quick Deploy to Vercel

### Option 1: Existing Next.js Site

If you already have a Next.js site at https://cosmic-rag.vercel.app/:

```bash
# 1. Clone your repo (or create new)
git clone <your-cosmic-rag-repo-url>
cd cosmic-rag

# 2. Copy JSON files to public/data/
mkdir -p public/data
cp /path/to/vercel-content/*.json public/data/

# 3. Create API route (pages/api/projects.js)
export default function handler(req, res) {
  const projects = require('../../public/data/projects.json');
  res.status(200).json(projects);
}

# 4. Deploy
vercel --prod
```

### Option 2: New Next.js Site (Recommended)

```bash
# 1. Create new Next.js app
npx create-next-app@latest cosmic-rag
cd cosmic-rag

# 2. Copy content
cp -r /path/to/vercel-content/* ./public/data/

# 3. Initialize git
git init
git add .
git commit -m "Initial COSMIC RAG content"

# 4. Create GitHub repo
gh repo create cosmic-rag --public --source=. --remote=origin
git push -u origin main

# 5. Deploy to Vercel
vercel --prod
# Link to existing project: cosmic-rag.vercel.app
```

---

## 💻 Integration Examples

### Next.js Page Example

```jsx
// pages/projects.js
import { useState, useEffect } from 'react';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data/projects.json')
      .then(res => res.json())
      .then(data => {
        setProjects(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="container">
      <h1>COSMIC Projects ({projects.length})</h1>

      <div className="grid">
        {projects.map(project => (
          <div key={project.id} className="card">
            <h3>{project.name}</h3>
            <p><strong>Type:</strong> {project.type}</p>
            <p><strong>Status:</strong> {project.status}</p>
            <p><strong>Budget:</strong> {project.budget}</p>
            <p><strong>Deadline:</strong> {project.deadline}</p>
            <small>Source: {project.source}</small>
          </div>
        ))}
      </div>
    </div>
  );
}
```

### Technologies Grid

```jsx
// components/TechStack.js
import { useEffect, useState } from 'react';

export default function TechStack() {
  const [techs, setTechs] = useState([]);

  useEffect(() => {
    fetch('/data/technologies.json')
      .then(res => res.json())
      .then(data => setTechs(data.slice(0, 20))); // Top 20
  }, []);

  return (
    <div className="tech-grid">
      <h2>Technology Stack (Top 20)</h2>
      {techs.map(tech => (
        <div key={tech.id} className="tech-badge">
          <span className="tech-name">{tech.name}</span>
          <span className="tech-count">{tech.mentions}</span>
        </div>
      ))}
    </div>
  );
}
```

### Analytics Dashboard

```jsx
// pages/analytics.js
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then(res => res.json());

export default function Analytics() {
  const { data: meta } = useSWR('/data/metadata.json', fetcher);
  const { data: projects } = useSWR('/data/projects.json', fetcher);
  const { data: techs } = useSWR('/data/technologies.json', fetcher);

  if (!meta || !projects || !techs) return <div>Loading...</div>;

  // Calculate stats
  const euProjects = projects.filter(p => p.type.includes('EU')).length;
  const internalProjects = projects.filter(p => p.type.includes('internal')).length;
  const activeProjects = projects.filter(p => p.status === 'active').length;

  return (
    <div className="dashboard">
      <h1>COSMIC Analytics</h1>

      <div className="stats-grid">
        <div className="stat-card">
          <h3>Extraction Success</h3>
          <p className="stat-value">{meta.success_rate}%</p>
          <small>{meta.files_processed} files processed</small>
        </div>

        <div className="stat-card">
          <h3>Total Projects</h3>
          <p className="stat-value">{meta.total_projects}</p>
          <small>{euProjects} EU-eligible</small>
        </div>

        <div className="stat-card">
          <h3>Technologies</h3>
          <p className="stat-value">{meta.total_technologies}</p>
          <small>Unique stack items</small>
        </div>

        <div className="stat-card">
          <h3>Active Projects</h3>
          <p className="stat-value">{activeProjects}</p>
          <small>{internalProjects} internal</small>
        </div>
      </div>

      <div className="model-info">
        <p>Powered by <strong>{meta.model}</strong></p>
        <p>Last updated: {new Date(meta.timestamp).toLocaleString()}</p>
      </div>
    </div>
  );
}
```

---

## 🎨 Styling Recommendations

### Tailwind CSS Classes

```jsx
// Card component with Tailwind
<div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
  <h3 className="text-xl font-bold mb-2">{project.name}</h3>
  <div className="flex gap-2 mb-4">
    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
      {project.type}
    </span>
    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
      {project.status}
    </span>
  </div>
  <p className="text-gray-600">{project.budget}</p>
</div>
```

### CSS Modules

```css
/* styles/Projects.module.css */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  padding: 2rem;
}

.card {
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: transform 0.2s;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.15);
}

.techBadge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
}
```

---

## 🔍 Data Structure Reference

### projects.json Schema

```typescript
interface Project {
  id: number;
  name: string;
  type: string;  // "EU", "Commercial", "Internal", "EU/Commercial/Internal", etc.
  budget: string; // "€8.4-9.5K", "$1M", "N/A"
  deadline: string; // "Q1 2026", "27 Octobre 2025", "TBD"
  status: string; // "active", "planned", "archived", "unknown"
  source: string; // "DevTools Stack - DevUtils + Lovable + Figma.md"
}
```

### technologies.json Schema

```typescript
interface Technology {
  id: number;
  name: string; // "K3s", "Obsidian", "PostgreSQL"
  category: string; // "infrastructure", "AI/infra/dev/data", "dev-tools"
  mentions: number; // How many times mentioned across files
}
```

### metadata.json Schema

```typescript
interface Metadata {
  run_id: number; // 1
  timestamp: string; // "2025-10-22 15:24:13.770254"
  model: string; // "llama3.1:8b"
  files_processed: number; // 27
  success_rate: number; // 96.3
  total_projects: number; // 79
  total_technologies: number; // 198
}
```

---

## 📊 Data Visualizations

### Chart.js Example (Project Distribution)

```jsx
import { Doughnut } from 'react-chartjs-2';

export default function ProjectTypeChart({ projects }) {
  const typeCounts = projects.reduce((acc, p) => {
    acc[p.type] = (acc[p.type] || 0) + 1;
    return acc;
  }, {});

  const data = {
    labels: Object.keys(typeCounts),
    datasets: [{
      data: Object.values(typeCounts),
      backgroundColor: [
        '#667eea',
        '#764ba2',
        '#f093fb',
        '#4facfe',
        '#00f2fe',
        '#43e97b'
      ]
    }]
  };

  return <Doughnut data={data} />;
}
```

### Recharts Example (Technology Mentions)

```jsx
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

export default function TechMentionsChart({ technologies }) {
  const top10 = technologies.slice(0, 10);

  return (
    <BarChart width={600} height={300} data={top10}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="mentions" fill="#667eea" />
    </BarChart>
  );
}
```

---

## 🔄 Auto-Update Strategy

### GitHub Actions (Daily Sync)

```yaml
# .github/workflows/update-data.yml
name: Update COSMIC Data

on:
  schedule:
    - cron: '0 0 * * *'  # Daily at midnight
  workflow_dispatch:  # Manual trigger

jobs:
  update:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Run extraction pipeline
        run: |
          cd orchestrator
          python3 orchestrate_vault_analysis.py

      - name: Export to JSON
        run: |
          # Run DuckDB export script
          python3 export_to_json.py

      - name: Commit changes
        run: |
          git config user.name "COSMIC Bot"
          git config user.email "bot@cosmic.dev"
          git add public/data/*.json
          git commit -m "Update COSMIC data $(date +'%Y-%m-%d')"
          git push
```

### Vercel Auto-Deploy

When you push to `main` branch, Vercel automatically rebuilds and redeploys.

---

## 🚀 Deployment Checklist

- [ ] Copy JSON files to `public/data/`
- [ ] Create pages: `/projects`, `/technologies`, `/analytics`
- [ ] Add navigation menu
- [ ] Configure Vercel project settings
- [ ] Set environment variables (if needed)
- [ ] Test locally: `npm run dev`
- [ ] Push to GitHub: `git push origin main`
- [ ] Verify deployment: https://cosmic-rag.vercel.app/
- [ ] Configure custom domain (optional)
- [ ] Enable Vercel Analytics (already shown in screenshot)

---

## 📞 Support

**Documentation**: See `COSMIC-STRATEGIC-CONTENT-VERCEL.md` for full content

**Data Updates**: Re-run `orchestrate_vault_analysis.py` to regenerate JSON files

**Questions**: Created by FFT Cognitive Platform - 2025-10-22

---

**Ready to deploy!** 🎉

All data files are in `/Users/enzoxic/Documents/FFT-Commercial-Vault/COSMIC-Project/vercel-content/`
