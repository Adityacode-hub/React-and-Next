# 🚀 Next.js Parallel Routes — Complete Master Reference

> 🎯 PURPOSE:
> Ye document Parallel Routes ka complete future reference hai.
> Isko dekhkar tum khud se @analytics, @team, default.jsx,
> not-found.jsx, layout.jsx aur nested parallel routes create kar sakte ho.

---

# 🗺️ 1. Parallel Routing Kya Hai?

Normally ek route par ek main page render hota hai.

Example:

/admin-dashboard

↓

Admin Dashboard


Parallel Routing mein ek hi route ke andar
multiple UI sections simultaneously render kar sakte hain.

Example:

                    /admin-dashboard

              ┌────────────┬────────────┐
              │            │            │
              │ Dashboard  │ Analytics  │
              │            │            │
              ├────────────┼────────────┤
              │            │            │
              │ Main Page  │    Team    │
              │            │            │
              └────────────┴────────────┘


Yahan:

Dashboard
+
Analytics
+
Team

ek hi time par render ho sakte hain.

---

# 🧠 2. Parallel Routes Ka Core Idea

Parallel Routes mein special folders use hote hain:

@analytics
@team
@users
@notifications

In folders ko:

SLOTS

kehte hain.


Example:

app/
└── admin-dashboard/
    ├── @analytics/
    └── @team/


Meaning:

@analytics
→ Analytics slot

@team
→ Team slot


---

# ⭐ 3. MOST IMPORTANT RULE

`@analytics`

URL ka part NAHI hai.

`@team`

URL ka part NAHI hai.


For example:

app/
└── admin-dashboard/
    └── @analytics/
        └── page.jsx


URL:

/admin-dashboard


NOT:

/admin-dashboard/@analytics


Same:

@team

does NOT create:

/admin-dashboard/@team


---

# 🧠 MEMORY TRICK

```text
@something
    ↓
  SLOT
    ↓
UI ka ek section
    ↓
URL ka part nahi