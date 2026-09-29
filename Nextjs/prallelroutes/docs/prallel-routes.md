# 🚀 Next.js Parallel Routes — Complete Reference

> 🎯 PURPOSE:
> Ye document future reference ke liye hai.
> Jab bhi Parallel Routing bhool jao, is file ko kholo aur
> folder structure dekhkar khud se Parallel Routes bana pao.

---

# 🧠 1. Parallel Routing Kya Hai?

Normally Next.js mein ek route par ek page render hota hai.

Example:

/dashboard

↓

Dashboard Page


Parallel Routing mein:

> Ek hi route ke andar multiple UI sections
> simultaneously render kar sakte hain.

Example:

/dashboard

        ┌─────────────────────────────┐
        │          Dashboard          │
        ├──────────────┬──────────────┤
        │              │              │
        │   Analytics  │     Team     │
        │              │              │
        └──────────────┴──────────────┘

Yahan:

Dashboard
+
Analytics
+
Team

ek saath render ho rahe hain.

---

# 🎯 2. Parallel Routes Ka Main Idea

Parallel Routes mein hum special folders use karte hain:

@analytics
@team
@users
@settings

Inko:

> SLOT

kehte hain.

Example:

@analytics

means:

> Analytics naam ka slot.

---

# 🟢 3. Basic Parallel Route Structure

Example:

app/
└── dashboard/
    ├── layout.jsx
    ├── page.jsx
    │
    ├── @analytics/
    │   └── page.jsx
    │
    └── @team/
        └── page.jsx


Yahan:

page.jsx
→ Main dashboard

@analytics
→ Analytics slot

@team
→ Team slot

---

# ⭐ 4. MOST IMPORTANT RULE

Folder ka naam:

@analytics

URL ka part NAHI hai.

Matlab:

@analytics

se URL:

/dashboard/@analytics

❌ Nahi banega.

Instead:

/dashboard

hi rahega.

---

# 🧠 Remember

@analytics
     ↓
SLOT

@team
     ↓
SLOT

@something
     ↓
SLOT


`@` wale folders URL segments nahi hote.

---

# 🔵 5. Layout Mein Slots Kaise Aate Hain?

Parallel Routes ka main magic:

layout.jsx

mein hota hai.

Example:

export default function DashboardLayout({
  children,
  analytics,
  team,
}) {
  return (
    <div>
      {children}

      {analytics}

      {team}
    </div>
  );
}

Yahan:

children
→ page.jsx

analytics
→ @analytics/page.jsx

team
→ @team/page.jsx

---

# 🧩 6. Folder Name → Layout Prop

Ye rule bahut important hai.

Structure:

@analytics/

↓

layout prop:

analytics


Structure:

@team/

↓

layout prop:

team


Structure:

@users/

↓

layout prop:

users


So:

@abc

becomes:

abc

inside layout props.

---

# 🧠 Golden Rule

```text
@folder
   ↓
folder
   ↓
layout.jsx ka prop