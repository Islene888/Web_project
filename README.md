# LeadCode - AI Algorithm Learning Platform

## Sitemap

### Overview
- **Total Pages**: 7
- **Modules**: 4
- **Features**: 20+

### Page Structure

#### 1. Home `/`
**Component**: `TechHomePage.jsx`
**Features**: Platform intro, AI assistant cards, AI blackboard, mock interview, tools

#### 2. Algorithm Learning `/algorithm-learning`
**Component**: `AlgorithmHub`
**Features**: Course directory, knowledge graph, progress tracking, pattern classification

#### 3. AI Classroom `/algorithm-learning/classroom/:chapterId/:patternId`
**Component**: `AIInteractiveClassroom`
**Features**: Algorithm visualization, AI teaching, code editing, smart hints

#### 4. Mock Interview `/interview`
**Component**: `MockInterviewHub`
**Features**: Problem bank, difficulty levels, company tags, statistics

#### 5. Interview Session `/interview/session/:problemId`
**Component**: `SmartInterviewSession`
**Features**: Real-time evaluation, AI interviewer, scoring, reports

#### 6. Sitemap `/sitemap`
**Component**: `SitemapPage.jsx`
**Features**: Site structure, navigation, content overview

#### 7. 404 Route `*`
**Redirect**: All unmatched routes → Home

### Site Hierarchy
```
LeadCode Platform
├── Home (/)
├── Algorithm Learning System
│   ├── Hub (/algorithm-learning)
│   └── Classroom (/algorithm-learning/classroom/*)
├── Interview System
│   ├── Hub (/interview)
│   └── Session (/interview/session/*)
└── Utilities
    ├── Sitemap (/sitemap)
    └── 404 Redirect (*)
```

### Quick Navigation

| Page | Path | Description |
|------|------|-------------|
| **Home** | `/` | Platform homepage |
| **Learning** | `/algorithm-learning` | LeetCode algorithm hub |
| **Classroom** | `/algorithm-learning/classroom/*` | Interactive AI teaching |
| **Interview** | `/interview` | Mock interview platform |
| **Session** | `/interview/session/*` | AI interview simulation |
| **Sitemap** | `/sitemap` | Site structure navigation |