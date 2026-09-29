# DESIGN.md — PRAVAHA

## 1. Design Goal

PRAVAHA must look like a **real emergency-response / GIS command platform**, not a generic AI-generated SaaS dashboard.

The visual language should communicate:

* Emergency intelligence
* Situational awareness
* Trust
* Precision
* Operational clarity
* Modern GIS technology

The application should feel like software used by a professional emergency operations team.

---

# 2. Core Design Principle

## Information > Decoration

Every visual element must have a functional reason to exist.

Prioritize:

1. Map
2. Current situation
3. Risk
4. Evidence
5. Confidence
6. Evacuation routes
7. Crowd state
8. Shelter capacity
9. Timeline/events

Do not fill empty space with decorative UI.

---

# 3. Overall Visual Direction

### Style

**Dark operational GIS interface with restrained modernism.**

Think:

> Emergency Operations Center + GIS + modern mission-control software

NOT:

> AI startup landing page

The interface should feel dense enough for operational use but remain easy to understand.

---

# 4. Color System

Use a dark neutral base.

### Background

* Deep charcoal / near-black
* Avoid pure black

### Primary surfaces

* Slightly lighter charcoal
* Very subtle borders

### Semantic colors

Use colors only when they have meaning:

| Meaning           | Color          |
| ----------------- | -------------- |
| Critical / danger | Red            |
| Warning           | Amber / orange |
| Caution           | Yellow         |
| Safe              | Green          |
| Information       | Blue           |
| Neutral           | Gray           |

Do not use gradients to decorate the interface.

Do not make everything colorful.

Red should mean danger.

Green should mean safe.

Amber should mean warning.

---

# 5. Typography

Use a professional sans-serif typeface.

Preferred:

**Inter** or **IBM Plex Sans**

Use a clear hierarchy:

### Page / section title

Strong, compact, not oversized.

### Data values

Large enough to scan quickly.

### Labels

Small, uppercase or semi-uppercase where appropriate.

### Supporting information

Muted but readable.

Avoid giant marketing-style typography.

Do not use huge:

> "AI-POWERED DISASTER INTELLIGENCE"

headlines inside the application.

---

# 6. Main Layout

The **map must be the dominant element**.

Preferred structure:

```text
┌───────────────────────────────────────────────┐
│ STATUS / EVENT / SYSTEM STATE                │
├─────────────────────────────────┬─────────────┤
│                                 │ ALERT       │
│                                 │ RISK        │
│            LIVE MAP             │ CONFIDENCE  │
│                                 │ EVIDENCE    │
│                                 │             │
│                                 │ EVACUATION  │
├─────────────────────────────────┴─────────────┤
│ EVENT TIMELINE / SIMULATION CONTROLS          │
└───────────────────────────────────────────────┘
```

The exact layout can adapt responsively.

---

# 7. Map Design

The map is the hero element.

Show:

### Hazard

Use translucent red/orange geographic overlays.

### Roads

* Normal: muted
* Congested: amber
* Risky: orange
* Blocked: red
* Recommended evacuation: bright/high-contrast route

### Shelters

Use a consistent shelter icon.

Show capacity status:

* Available
* Limited
* Near capacity
* Full

### People

Do not show hundreds of individual icons.

Use:

* Clusters
* Density visualization
* Heatmaps

when population becomes large.

---

# 8. Risk Panel

The risk panel must immediately communicate:

```text
HIGH RISK

92%

Confidence 89%
```

Then:

### Why?

* Rainfall — Very High
* Elevation — Low
* River proximity — High
* Ground reports — 7
* Road disruption — Detected

The risk score and confidence score must be visually distinct.

---

# 9. Uncertainty Design

This is a core product feature.

High confidence:

> HIGH RISK
> Confidence 89%

Conflicting evidence:

> HIGH RISK
> Confidence 54%
> ⚠ Evidence conflict detected

Never hide uncertainty.

Do not make low-confidence alerts visually identical to high-confidence alerts.

---

# 10. Route Visualization

Recommended route:

* High contrast
* Clearly distinguishable from normal roads
* Animated subtly to show direction

Alternative routes:

* More muted
* Still visible

Blocked route:

* Red
* Dashed or crossed
* Clearly marked BLOCKED

Do not use excessive animation.

---

# 11. Evacuation Panel

Show:

```text
EVACUATION STATUS

87 affected

Route A     35 people
Route B     42 people
Route C     10 people

Shelter A   72% capacity
Shelter B   41% capacity
```

The panel should communicate operational status rather than looking like generic analytics cards.

---

# 12. Simulation Controls

Simulation controls should look like professional operator controls.

Examples:

```text
▶ START EVENT

⚠ BLOCK ROAD

👥 INCREASE CROWD

📱 ADD REPORT

⚠ ADD CONFLICTING REPORT

↻ RESET
```

Keep them compact.

They should not dominate the interface.

---

# 13. Event Timeline

Use a compact operational timeline:

```text
T+00  Flood detected
T+02  Evacuation started
T+04  Road A blocked
T+05  Routes recalculated
T+06  Congestion predicted
T+07  People redistributed
```

This helps judges understand the system's changing state.

---

# 14. Cards & Borders

Avoid putting every element inside a card.

Use cards only when grouping information improves comprehension.

Prefer:

* Flat panels
* Thin borders
* Subtle separation
* Strong alignment

Use small/moderate corner radius.

Avoid excessive rounded containers.

---

# 15. Icons

Use one consistent icon library.

Icons should communicate meaning.

Do not use emojis as the primary visual language of the application.

Emojis may appear in demo copy if appropriate, but the operational UI should primarily use professional icons.

---

# 16. Animation

Animation should communicate state changes.

Good:

* Route recalculation animation
* Map marker transition
* Alert appearing
* Crowd redistribution
* Timeline progression
* Subtle route direction animation

Avoid:

* Floating decorative elements
* Constant pulsing
* Excessive hover effects
* Bouncing components
* Background animations
* Unnecessary transitions

---

# 17. Anti-Vibe-Code Rules

The application must NOT look like a generic AI/vibe-coded website.

Avoid:

* Purple/blue gradient backgrounds
* Glassmorphism everywhere
* Excessive glowing borders
* Excessive shadows
* Giant rounded cards
* Every component inside a card
* Huge hero text
* Generic SaaS landing-page layouts
* Decorative gradient blobs
* Excessive pills/badges
* Random colorful charts
* Excessive whitespace
* Perfectly symmetrical card grids everywhere
* Generic AI chatbot appearance
* Excessive use of default shadcn components without customization
* Excessive use of stock illustrations
* Excessive animations
* "AI-powered" marketing language throughout the UI

Do not make the application look like a template.

---

# 18. Product Authenticity Rule

The application should look as though it was designed specifically for:

> **Emergency response + GIS + disaster intelligence**

Every visual decision should support that context.

Prefer:

> Operational dashboard

over:

> Startup dashboard

Prefer:

> Evidence panel

over:

> Generic AI card

Prefer:

> Live situation map

over:

> Decorative hero section

Prefer:

> Clear status indicators

over:

> Visual effects

---

# 19. Visual Hierarchy

The user's eye should naturally move:

```text
MAP
 ↓
CURRENT DANGER
 ↓
RISK + CONFIDENCE
 ↓
EVIDENCE
 ↓
EVACUATION ROUTES
 ↓
SHELTER / CROWD STATUS
 ↓
TIMELINE
```

The most important information should always have the strongest visual hierarchy.

---

# 20. Responsive Design

Desktop is the primary target because the main demo is a command-center interface.

However, the layout should remain usable on smaller screens.

On mobile:

* Map remains primary
* Panels become bottom sheets or stacked sections
* Controls remain accessible
* Important alerts remain visible

---

# 21. Demo Mode

Clearly show:

> DEMO MODE · SIMULATED DATA

This should be visible but not distracting.

Never visually imply that simulated data is live emergency data.

---


# 22. Final Design Rule

The interface should feel:

**Calm under pressure.**

It should communicate serious information without becoming visually chaotic.

The goal is not to make the application look flashy.

The goal is to make a judge think:

> **"This looks like a real operational product."**