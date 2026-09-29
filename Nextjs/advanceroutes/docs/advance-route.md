# 🚀 Next.js Advanced Routing — Complete Reference

> 🎯 Future Reference:
> Is file ko kabhi bhi kholo aur advanced routing bina tutorial ke samajh/banane ke liye use karo.

---

# 🗺️ 1. BASIC ROUTING

Next.js App Router ka basic rule:

📁 folder
   ↓
🌐 URL ka part

📄 page.jsx
   ↓
🖥️ Actual Page


Example:

app/
└── about/
    └── page.jsx

URL:

/about


🧠 MEMORY:

folder + page.jsx
       ↓
     route

---

# 🔵 2. NORMAL ROUTE

Structure:

app/
└── about/
    └── page.jsx

URL:

/about

Simple:

folder → URL
page.jsx → Page

---

# 🟢 3. NESTED ROUTES

Jab ek route ke andar doosra route ho.

Structure:

app/
└── one/
    └── two/
        └── page.jsx

URL:

/one/two


🧠 MEMORY:

one
 ↓
two
 ↓
/one/two

---

# 🟣 4. ROUTE GROUPS

Syntax:

(auth)
(dashboard)
(admin)

Meaning:

> Folder ko organize/group karo,
> lekin folder ka naam URL mein nahi chahiye.

Example:

app/
└── (auth)/
    ├── login/
    │   └── page.jsx
    │
    └── signup/
        └── page.jsx

URLs:

/login
/signup

NOT:

/(auth)/login


🧠 MEMORY:

(auth)
  ↓
📦 Grouping
  ↓
🌐 URL mein nahi aayega


## Real Project Example

app/
├── (auth)/
│   ├── login/
│   └── signup/
│
├── (dashboard)/
│   ├── dashboard/
│   └── settings/
│
└── page.jsx

Route Groups ka main purpose:

→ Project ko organize karna
→ Related routes ko group karna
→ URL ko clean rakhna
→ Route-specific layout banana

---

# 🟡 5. DYNAMIC ROUTES

Syntax:

[id]

Meaning:

> URL ka ek part variable hai.

Example:

app/
└── users/
    └── [id]/
        └── page.jsx

URLs:

/users/1
/users/2
/users/50
/users/100

Sab same `[id]` route se handle honge.


🧠 MEMORY:

[id]

↓
ID change ho sakti hai

/users/1
/users/2
/users/3


## Dynamic Params

Example:

app/users/[id]/page.jsx

URL:

/users/25

Then:

params.id

will be:

"25"

---

# 🟠 6. CATCH-ALL ROUTES

Syntax:

[...slug]

Meaning:

> Ek ya usse zyada URL segments capture karo.

Example:

app/
└── docs/
    └── [...slug]/
        └── page.jsx

These URLs work:

/docs/react

/docs/react/hooks

/docs/react/hooks/useState


params.slug:

[
  "react",
  "hooks",
  "useState"
]


🧠 MEMORY:

[id]
→ Exactly 1 segment

[...slug]
→ 1 or MORE segments

---

# 🔴 7. OPTIONAL CATCH-ALL ROUTES

Syntax:

[[...slug]]

Meaning:

> Zero, one, ya multiple URL segments.

Example:

app/
└── docs/
    └── [[...slug]]/
        └── page.jsx

All these can work:

/docs

/docs/react

/docs/react/hooks

/docs/react/hooks/useState


🧠 DYNAMIC ROUTE FAMILY:

[id]
→ Exactly 1

[...id]
→ 1 or more

[[...id]]
→ 0 or more


Quick Table:

| Syntax | Meaning |
|---|---|
| [id] | Exactly 1 segment |
| [...id] | 1 or more segments |
| [[...id]] | 0 or more segments |

---

# 🎯 8. INTERCEPTING ROUTES

Syntax:

(.)
(..)
(..)(..)
(...)

These are called:

INTERCEPTING ROUTES

Most common use:

🪟 MODALS


## Why?

Suppose:

/products

User clicks a product:

/products/123

Normally:

Products Page
      ↓
Product Full Page

With Intercepting Routes:

Products Page
      +
Product Modal


Common use cases:

→ Product quick view
→ Instagram-like photo modal
→ Social media post modal
→ Gallery preview
→ Login modal

---

# ⭐ 9. INTERCEPTING ROUTE CHEAT SHEET

(.)       
→ SAME LEVEL

(..)      
→ 1 LEVEL UP

(..)(..)  
→ 2 LEVELS UP

(...)     
→ APP ROOT


🧠 MEMORY:

(.)       = SAME

(..)      = UP 1

(..)(..)  = UP 2

(...)     = ROOT

---

# 🟢 10. (.) — SAME LEVEL

Meaning:

> Same level wale route ko intercept karo.

Example:

app/
└── one/
    ├── page.jsx
    │
    ├── two/
    │   └── page.jsx
    │
    └── (.)two/
        └── page.jsx

`(.)two`

means:

> Same level wale `two` route ko intercept karo.


🧠 REMEMBER:

(.)
↓
SAME LEVEL

---

# 🟡 11. (..) — ONE LEVEL UP

Meaning:

> Ek level upar jao.

Example:

app/
└── one/
    └── two/
        └── (..)three/
            └── page.jsx

`(..)`

means:

1 level UP.


🧠 REMEMBER:

(..)
↓
1 LEVEL UP

---

# 🟠 12. (..)(..) — TWO LEVELS UP

Meaning:

> Do levels upar jao.

Example:

app/
└── one/
    └── two/
        └── (..)(..)four/
            └── page.jsx

Think:

two
 ↑
(..)        → 1 UP
 ↑
one
 ↑
(..)        → 2 UP


Therefore:

(..)(..)
↓
2 LEVELS UP

---

# 🔴 13. (...) — APP ROOT

Meaning:

> App ke root level se route ko intercept karo.

Example:

app/
├── final/
│   └── page.jsx
│
└── one/
    └── two/
        └── inner-two/
            └── (...)final/
                └── page.jsx

`(...)final`

means:

> Root level se `final` route ko intercept karo.


🧠 REMEMBER:

(...)
↓
APP ROOT

---

# ⚠️ 14. VERY IMPORTANT — INTERCEPTING SYNTAX URL MEIN NAHI AATA

Agar folder:

(.)two

hai,

iska URL:

/one/(.)two

❌ WRONG

Actual URL:

/one/two

✅ CORRECT


Why?

Because:

(.)
(..)
(..)(..)
(...)

are special Next.js routing instructions.

Ye visible URL ka part nahi hote.

---

# 🪟 15. REAL INTERCEPTING ROUTE EXAMPLE

Suppose:

app/
└── photos/
    ├── page.jsx
    │
    ├── [id]/
    │   └── page.jsx
    │
    └── (.)[id]/
        └── page.jsx


## [id]

Normal route:

/photos/123

→ Full Photo Page


## (.)[id]

Client navigation ke context mein:

/photos/123

→ Photo Modal


So:

[id]
→ Normal full page

(.)[id]
→ Intercepted/modal UI

---

# 🔄 16. DIRECT VISIT VS CLIENT NAVIGATION

Intercepting Routes ko samajhne ke liye ye important hai.


## 🔵 Direct Visit

Browser mein directly:

/photos/123

open kiya.

Usually:

→ Full Page


## 🟢 Client Navigation

Current page se:

<Link href="/photos/123">
  Open Photo
</Link>

click kiya.

Agar Intercepting Route configured hai:

→ Current Page + Modal

render ho sakta hai.


🧠 SIMPLE:

Direct URL
→ Full page

Client navigation
→ Intercepted UI possible

---

# 🆚 17. DYNAMIC ROUTE VS INTERCEPTING ROUTE

Don't confuse these.


## [id]

Meaning:

> URL ka ek part variable hai.

Example:

/products/123


## (.)[id]

Meaning:

> Existing navigation ko intercept karke
> different UI render karna hai.


🧠 EASY DIFFERENCE:

[id]
↓
URL mein kya value hai?


(.)[id]
↓
Navigation ke time UI kaise render karni hai?

---

# 🧩 18. BRACKETS VS PARENTHESES

Ye trick bahut important hai.


## [ SQUARE BRACKETS ]

Usually URL matching ke liye:

[id]
[slug]
[...slug]
[[...slug]]

Think:

🔵 "URL ka variable part"


## ( PARENTHESES )

### Route Groups:

(auth)
(dashboard)
(admin)

Think:

🟣 "Grouping / Organization"


### Intercepting Routes:

(.)
(..)
(..)(..)
(...)

Think:

🔴 "Intercepting / Rendering Context"

---

# 📊 19. COMPLETE ROUTING CHEAT SHEET

| Syntax | Meaning | Example |
|---|---|---|
| folder/page.jsx | Normal route | /about |
| one/two/page.jsx | Nested route | /one/two |
| (auth) | Route Group | /login |
| [id] | Dynamic route | /users/123 |
| [...slug] | Catch-All | /docs/react/hooks |
| [[...slug]] | Optional Catch-All | /docs |
| (.) | Same-level interception | Modal |
| (..) | 1 level up | Modal |
| (..)(..) | 2 levels up | Modal |
| (...) | App root interception | Modal |

---

# 🧭 20. HOW TO DECIDE WHAT TO USE?

Jab bhi route banana ho,
ye questions poochna.


## ❓ Q1. Normal page hai?

Example:

/about

Use:

about/page.jsx


## ❓ Q2. Nested page hai?

Example:

/one/two

Use:

one/two/page.jsx


## ❓ Q3. Folder sirf organize karna hai?

Example:

login
signup

but URL mein `auth` nahi chahiye.

Use:

(auth)


## ❓ Q4. URL mein ek variable hai?

Example:

/users/123

Use:

[id]


## ❓ Q5. Multiple URL segments hain?

Example:

/docs/react/hooks/useState

Use:

[...slug]


## ❓ Q6. Route optional bhi hai?

Example:

/docs
/docs/react
/docs/react/hooks

Use:

[[...slug]]


## ❓ Q7. Modal/intercepted UI chahiye?

Use:

(.)
(..)
(..)(..)
(...)

---

# 🛠️ 21. HOW TO CREATE AN INTERCEPTING ROUTE YOURSELF

Syntax ratne ki zarurat nahi.

Bas ye process follow karo.


### STEP 1

Current route identify karo.

Ask:

📍 "Main abhi kis level par hoon?"


### STEP 2

Target route identify karo.

Ask:

🎯 "Mujhe kis route ko intercept karna hai?"


### STEP 3

Distance dekho.

Same level?

→ (.)

1 level up?

→ (..)

2 levels up?

→ (..)(..)

Root?

→ (...)


### STEP 4

Target route ka naam add karo.

Example:

(.) + three

↓

(.)three


### STEP 5

Inside:

page.jsx

create karo.

---

# 🧠 22. YOUR CURRENT PRACTICE PROJECT

Tumhare current routing practice ka structure roughly:

app/
│
├── final/
│   └── page.jsx
│
├── four/
│   └── page.jsx
│
├── one/
│   │
│   ├── (.)three/
│   │
│   ├── (.)two/
│   │
│   └── two/
│       │
│       ├── (..)(..)four/
│       │
│       └── inner-two/
│           └── (...)final/
│
└── three/
    └── page.jsx


## Decode:

(.)three
→ Same-level interception


(.)two
→ Same-level interception


(..)(..)four
→ Two-level-up interception


(...)final
→ Root-level interception

---

# ⚠️ 23. COMMON MISTAKES


## ❌ Mistake 1

`(.)` ko Route Group samajhna.

Wrong:

(.) = Route Group

Correct:

(.) = Intercepting Route


---

## ❌ Mistake 2

`(auth)` ko URL ka part samajhna.

Wrong:

/(auth)/login

Correct:

/login


---

## ❌ Mistake 3

Intercepting syntax ko URL mein likhna.

Wrong:

/one/(.)two

Correct:

/one/two


---

## ❌ Mistake 4

`(..)` ko normal URL navigation samajhna.

`(..)` special Next.js folder syntax hai.

Ye URL nahi hai.


---

## ❌ Mistake 5

Dynamic aur Intercepting ko mix karna.

[id]

→ Dynamic Route


(.)[id]

→ Intercepting Dynamic Route

---

# 🎯 24. FINAL MENTAL MAP

                         🛣️ NEXT.JS ROUTING
                                │
              ┌─────────────────┼─────────────────┐
              │                 │                 │
              ▼                 ▼                 ▼
          🟢 NORMAL         🔵 DYNAMIC        🔴 ADVANCED
              │                 │                 │
          folder/            [id]          ┌──────┴──────┐
          page.jsx           [...id]       │             │
                              [[...id]]   GROUPING    INTERCEPT
                                            │             │
                                          (auth)        (.)
                                                        (..)
                                                        (..)(..)
                                                        (...)


---

# 🧠 25. 20-SECOND REVISION

## NORMAL

folder/page.jsx

→ URL


## NESTED

one/two/page.jsx

→ /one/two


## ROUTE GROUP

(auth)

→ URL mein nahi aata


## DYNAMIC

[id]

→ Exactly 1 variable segment


## CATCH-ALL

[...id]

→ 1 or more segments


## OPTIONAL CATCH-ALL

[[...id]]

→ 0 or more segments


## INTERCEPTING

(.) 

→ Same level


(..)

→ 1 level up


(..)(..)

→ 2 levels up


(...)

→ Root

---

# 🏆 26. GOLDEN RULE

## Square Brackets `[ ]`

Think:

🔵 "URL mein kya variable hai?"

[id]
[...slug]
[[...slug]]


## Parentheses `(auth)`

Think:

🟣 "Routes ko group/organize kaise karna hai?"

(auth)
(dashboard)


## Special Parentheses

Think:

🔴 "Route ko intercept kaise karna hai?"

(.)
(..)
(..)(..)
(...)


---

# 💡 27. ONE-LINE MEMORY TRICK

[id]
→ ONE


[...id]
→ MANY


[[...id]]
→ MAYBE NONE


(auth)
→ GROUP


(.)
→ SAME


(..)
→ UP 1


(..)(..)
→ UP 2


(...)
→ ROOT


---

# 🚀 FINAL TAKEAWAY

Next.js routing ko ratna nahi hai.

Bas ye flow yaad rakho:

```text
NORMAL PAGE?
     ↓
folder/page.jsx

VARIABLE URL?
     ↓
[id]

MULTIPLE URL SEGMENTS?
     ↓
[...slug]

OPTIONAL URL?
     ↓
[[...slug]]

ONLY ORGANIZATION?
     ↓
(auth)

MODAL / INTERCEPTION?
     ↓
(.)
(..)
(..)(..)
(...)