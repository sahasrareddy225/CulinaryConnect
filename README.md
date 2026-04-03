# 🍳 Recipez — Full-Stack Recipe App

## Frontend Architecture

```
recipez-frontend/
├── src/
│   ├── components/
│   │   ├── ui/           # RecipeCard, ChefCard, SearchBar, Toast, Skeleton
│   │   ├── layout/       # Navbar, Footer, MobileNav
│   │   └── shared/       # ProtectedRoute, LoadingSpinner, Modal
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Discover.jsx
│   │   ├── RecipeDetail.jsx
│   │   ├── PostRecipe.jsx
│   │   ├── Profile.jsx
│   │   ├── Leaderboard.jsx
│   │   ├── Community.jsx   (Chat)
│   │   ├── TopChefs.jsx
│   │   ├── AdminPanel.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   └── Unauthorized.jsx
│   ├── context/
│   │   ├── AuthContext.jsx   # currentUser, login, logout, token
│   │   └── ThemeContext.jsx  # theme, toggleTheme
│   ├── hooks/
│   │   ├── useDebounce.js
│   │   ├── useSocket.js
│   │   └── useLocalStorage.js
│   ├── services/
│   │   ├── api.js            # axios instance with JWT interceptor
│   │   ├── authService.js    # login, register, google
│   │   ├── recipeService.js  # CRUD recipes
│   │   ├── socialService.js  # like, bookmark, follow
│   │   └── aiService.js      # chat, recommend
│   └── utils/
│       ├── constants.js
│       ├── formatters.js
│       └── validators.js
```

## Auth Flow (JWT)

```
POST /auth/login  → { token, user }
  → Store in localStorage: recipez_token, recipez_user
  → Axios interceptor: Authorization: Bearer <token>

ProtectedRoute logic:
  if !token → redirect to /login
  if role not in allowedRoles → /unauthorized
```

## Roles & Permissions

| Feature              | FOODIE | CHEF | ADMIN |
|---------------------|--------|------|-------|
| Browse recipes       | ✅     | ✅   | ✅    |
| Like / Bookmark      | ✅     | ✅   | ✅    |
| Follow chefs         | ✅     | ✅   | ✅    |
| Community chat       | ✅     | ✅   | ✅    |
| Post recipes         | ❌     | ✅   | ✅    |
| Edit own recipes     | ❌     | ✅   | ✅    |
| Admin dashboard      | ❌     | ❌   | ✅    |
| Delete any recipe    | ❌     | ❌   | ✅    |
| Manage users         | ❌     | ❌   | ✅    |

## Backend API Spec

### AUTH
```
POST /auth/register     → { name, email, password, role }
POST /auth/login        → { email, password }
POST /auth/google       → { googleToken }
POST /auth/refresh      → { refreshToken }
GET  /auth/me           → (Bearer token)
```

### RECIPES
```
GET    /recipes                  → list with filters/pagination
GET    /recipes/:id              → recipe detail
POST   /recipes                  → (CHEF/ADMIN) create
PUT    /recipes/:id              → (owner/ADMIN) update
DELETE /recipes/:id              → (owner/ADMIN) delete
GET    /recipes/:id/related      → similar recipes
GET    /recipes/trending         → top trending this week
GET    /recipes/search?q=        → search + suggestions
```

### SOCIAL
```
POST   /recipes/:id/like         → toggle like
POST   /recipes/:id/bookmark     → toggle bookmark
POST   /recipes/:id/rate         → { rating: 1-5 }
POST   /users/:id/follow         → toggle follow
GET    /users/:id/followers      → follower list
GET    /users/:id/following      → following list
```

### COMMENTS
```
GET    /recipes/:id/comments     → paginated comments
POST   /recipes/:id/comments     → { text } (auth required)
DELETE /comments/:id             → (owner/ADMIN)
PUT    /comments/:id             → (owner) edit
```

### LEADERBOARD
```
GET    /leaderboard              → weekly rankings
GET    /leaderboard/all-time     → all-time rankings
GET    /leaderboard/monthly      → monthly rankings
```

### CHAT (WebSocket)
```
Connection: io('ws://api/chat', { auth: { token } })

Events emitted by client:
  join_room     { room: string }
  message       { room, text, userId }
  typing        { room, userId, isTyping }
  leave_room    { room }

Events received from server:
  message       { id, room, author, text, time }
  typing        { userId, name, isTyping }
  user_joined   { userId, name }
  user_left     { userId, name }
  notification  { type, data }
  active_users  [{ id, name }]
```

### NOTIFICATIONS
```
GET    /notifications            → user notifications
PUT    /notifications/read-all   → mark all read
DELETE /notifications/:id        → delete one

WebSocket: notification event pushed in real-time
```

### AI
```
POST   /ai/chat                  → { message, history[] }
POST   /ai/recommend             → { ingredients[], preferences }
POST   /ai/search-suggest        → { query }
```

### ADMIN
```
GET    /admin/stats              → dashboard stats
GET    /admin/users              → paginated users
PUT    /admin/users/:id/block    → block/unblock user
DELETE /admin/users/:id          → delete user
GET    /admin/pending-recipes    → pending approval
PUT    /admin/recipes/:id/approve → approve recipe
GET    /admin/comments/reported  → reported comments
```

## Database Schema (Mongoose / Prisma)

```
User {
  id, name, email, passwordHash,
  role: FOODIE | CHEF | ADMIN,
  avatar, bio,
  followersCount, followingCount,
  recipesCount, totalLikes,
  badges: [],
  weeklyPoints,
  createdAt
}

Recipe {
  id, title, description, image,
  chefId → User,
  cuisine, difficulty, prepTime, cookTime,
  ingredients: [{ name, amount }],
  steps: [{ title, description }],
  tags: [],
  status: draft | pending | published,
  likesCount, bookmarksCount,
  avgRating, ratingCount,
  views,
  createdAt
}

Comment {
  id, recipeId → Recipe,
  authorId → User,
  text, likesCount,
  status: active | reported | deleted,
  createdAt
}

Like    { id, userId, recipeId, createdAt }
Bookmark { id, userId, recipeId, createdAt }
Follow  { id, followerId, followingId, createdAt }
Rating  { id, userId, recipeId, value, createdAt }

Notification {
  id, userId, type, data, read, createdAt
}
```

## Environment Variables
```
VITE_API_BASE_URL=http://localhost:5000/api
VITE_WS_URL=ws://localhost:5000
VITE_GOOGLE_CLIENT_ID=your_google_client_id
```
