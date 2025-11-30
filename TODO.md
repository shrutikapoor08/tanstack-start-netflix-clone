# Netflix Clone - Progressive Feature Implementation

## 1. Trending Now
- [X] Basic Setup
  - [X] Create route (`/`)
  - [X] Create TrendingNow component
  - [X] Create MovieCard component
- [X] Data Fetching
  - [X] Create server function with `createServerFn()`
  - [X] Fetch trending movies from TMDB API
  - [X] Add environment variable for TMDB_AUTH_TOKEN
- [X] Routing & Loading
  - [X] Add loader to index route
  - [X] Handle loading states
  - [X] Handle error states
- [X] Caching
  - [X] Implement automatic caching via TanStack Router
  - [X] Add stale-while-revalidate behavior
- [X] UI/UX
  - [X] Display movies in responsive grid
  - [X] Add hover effects on movie cards
  - [X] Add proper image loading from TMDB CDN

## 2. Search Functionality
- [X] Basic Setup
  - [X] Create search route (`/search`)
  - [X] Create SearchBar component in Header
  - [X] Add search icon with expand/collapse behavior
- [X] Data Fetching
  - [X] Create searchMoviesAPI server function
  - [X] Fetch search results from TMDB API
  - [X] Add input validation with Zod
- [X] URL Parameters & State
  - [X] Add search query to URL params
  - [X] Implement validateSearch for type safety
  - [X] Use loaderDeps to trigger refetch on param change
- [X] Performance Optimization
  - [X] Add debounce to search input (500ms)
  - [X] Prevent excessive API calls during typing
  - [X] Clear debounce timer on unmount
- [X] Preloading
  - [X] Enable route preloading on search intent
  - [X] Preload search results before navigation
- [X] UI/UX
  - [X] Show search results count
  - [X] Handle empty results state
  - [X] Display results in responsive grid
  - [X] Add accessibility features (aria-live, aria-labels)

## 3. Video Player
- [X] Basic Setup
  - [X] Create watch route (`/watch/$movieId`)
  - [X] Create VideoPlayer component
  - [X] Add navigation from MovieCard to watch route
- [X] Data Fetching
  - [X] Create getMovieTrailers server function
  - [X] Fetch movie trailers/teasers from TMDB API
  - [X] Filter for YouTube videos only
- [X] Route Configuration
  - [X] Add dynamic route parameter ($movieId)
  - [X] Implement params validation with Zod
  - [X] Add custom parse/stringify for params
- [X] Validation
  - [X] Validate movieId is a valid number
  - [X] Use safeParse for error handling
  - [X] Throw meaningful error messages
- [X] Loader & Preloading
  - [X] Create loader function for trailer fetching
  - [X] Enable preload: 'intent' for hover preloading
  - [X] Return single trailer instead of array
  - [X] Handle loading and error states in loader
- [X] Component Architecture
  - [X] Separate route logic from presentation
  - [X] Make VideoPlayer a pure presentation component
  - [X] Accept trailer and error as props
- [X] Caching
  - [X] Automatic caching via TanStack Router loader
  - [X] Cache trailers per movieId
  - [X] Invalidate cache on navigation away
- [X] UI/UX
  - [X] Full-page immersive video player
  - [X] YouTube iframe embed with autoplay
  - [X] Back button navigation
  - [X] ESC key support for quick exit
  - [X] Error state UI with retry option
  - [X] Loading state handled by preloading

## Framework Features Utilized

### TanStack Router
- [X] File-based routing
- [X] Route loaders for data fetching
- [X] Route params with validation
- [X] URL search params
- [X] Preloading (intent-based)
- [X] Type-safe navigation

### TanStack Start
- [X] Server functions (`createServerFn()`)
- [X] Server-side rendering (SSR)
- [X] Automatic code splitting
- [X] Client/server boundary handling

### Data Management
- [X] Loader-based data fetching
- [X] Automatic caching and revalidation
- [X] Error handling and boundaries
- [X] Loading states

### Performance
- [X] Route-level code splitting
- [X] Preload on hover/intent
- [X] Debounced search input
- [X] Optimized bundle sizes

