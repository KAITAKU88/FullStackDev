# Advanced Grid Properties - Hướng dẫn chi tiết với ví dụ

CSS Grid Layout là một hệ thống bố cục dựa trên lưới hai chiều mạnh mẽ, được tối ưu hóa cho thiết kế giao diện người dùng. Tài liệu này tập trung vào các thuộc tính nâng cao của CSS Grid với các ví dụ minh họa chi tiết.

## I. Các khái niệm và thuật ngữ quan trọng trong CSS Grid

### 1. Grid Container
**Grid Container** là phần tử mà thuộc tính `display: grid` được áp dụng. Nó là cha trực tiếp của tất cả các phần tử con của lưới (grid items).

```css
.container {
  display: grid; /* Tạo một grid container cấp block */
  /* Hoặc display: inline-grid; để tạo một grid container cấp inline */
}
```

**Ví dụ thực tế:**
```html
<div class="grid-container">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
</div>
```

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px;
  background-color: #f0f0f0;
}

.item {
  background-color: #3498db;
  color: white;
  padding: 20px;
  text-align: center;
  border-radius: 5px;
}
```

### 2. Grid Item
**Grid Item** là các phần tử con trực tiếp (direct descendants) của `grid container`.

```html
<div class="container">
  <div class="item item-1">Grid Item</div> <!-- Đây là grid item -->
  <div class="item item-2">
    <p class="sub-item">Sub Item</p> <!-- Đây KHÔNG phải là grid item -->
  </div>
</div>
```

### 3. Grid Line, Track, Cell và Area

**Ví dụ minh họa các khái niệm:**
```css
.example-grid {
  display: grid;
  grid-template-columns: 100px 200px 100px; /* 4 grid lines tạo 3 columns */
  grid-template-rows: 80px 120px; /* 3 grid lines tạo 2 rows */
  gap: 10px;
}

.highlight-area {
  /* Grid area từ line 1-3 (columns) và line 1-2 (rows) */
  grid-column: 1 / 3;
  grid-row: 1 / 2;
  background-color: #e74c3c;
}
```

## II. Tạo Grid cơ bản

### 1. Khai báo lưới rõ ràng (Explicit Grid)

**Ví dụ cơ bản:**
```css
.basic-grid {
  display: grid;
  grid-template-rows: 150px 150px; /* Hai hàng, mỗi hàng 150px */
  grid-template-columns: 150px 150px 150px 150px 150px; /* Năm cột, mỗi cột 150px */
}
```

**Ví dụ thực tế - Tạo layout card:**
```html
<div class="card-grid">
  <div class="card">Card 1</div>
  <div class="card">Card 2</div>
  <div class="card">Card 3</div>
  <div class="card">Card 4</div>
  <div class="card">Card 5</div>
  <div class="card">Card 6</div>
</div>
```

```css
.card-grid {
  display: grid;
  grid-template-columns: 200px 200px 200px;
  grid-template-rows: 250px 250px;
  gap: 15px;
  padding: 20px;
}

.card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: bold;
}
```

### 2. Sử dụng hàm repeat()

**Ví dụ so sánh:**
```css
/* Cách viết dài */
.grid-long {
  grid-template-columns: 150px 150px 150px 150px 150px;
}

/* Cách viết gọn với repeat() */
.grid-short {
  grid-template-columns: repeat(5, 150px);
}

/* Ví dụ phức hợp */
.grid-mixed {
  grid-template-columns: 100px repeat(3, 1fr) 100px;
  /* Tạo: 100px | 1fr | 1fr | 1fr | 100px */
}
```

**Ví dụ thực tế - Dashboard layout:**
```html
<div class="dashboard">
  <div class="sidebar">Sidebar</div>
  <div class="widget">Widget 1</div>
  <div class="widget">Widget 2</div>
  <div class="widget">Widget 3</div>
  <div class="main-content">Main Content</div>
</div>
```

```css
.dashboard {
  display: grid;
  grid-template-columns: 250px repeat(3, 1fr);
  grid-template-rows: repeat(2, 200px);
  gap: 20px;
  height: 100vh;
  padding: 20px;
}

.sidebar {
  grid-row: 1 / -1; /* Trải từ đầu đến cuối */
  background-color: #2c3e50;
  color: white;
  padding: 20px;
}

.widget {
  background-color: #3498db;
  color: white;
  padding: 20px;
  border-radius: 8px;
}

.main-content {
  grid-column: 2 / -1; /* Trải từ cột 2 đến cuối */
  background-color: #ecf0f1;
  padding: 20px;
  border-radius: 8px;
}
```

## III. Kích thước lưới động (Dynamic Grid Sizing)

### 1. Đơn vị phân số (fr - fractional units)

**Ví dụ cơ bản về fr:**
```css
.fr-example {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; /* 3 cột bằng nhau */
  /* Tương đương với: repeat(3, 1fr) */
}

.fr-unequal {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr; /* Cột đầu gấp đôi 2 cột còn lại */
}
```

**Ví dụ thực tế - Blog layout responsive:**
```html
<div class="blog-layout">
  <header class="header">Header</header>
  <main class="content">Main Content</main>
  <aside class="sidebar">Sidebar</aside>
  <footer class="footer">Footer</footer>
</div>
```

```css
.blog-layout {
  display: grid;
  grid-template-columns: 2fr 1fr; /* Content gấp đôi sidebar */
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header header"
    "content sidebar"
    "footer footer";
  min-height: 100vh;
  gap: 20px;
  padding: 20px;
}

.header { 
  grid-area: header;
  background-color: #2c3e50;
  color: white;
  padding: 20px;
  text-align: center;
}

.content { 
  grid-area: content;
  background-color: #fff;
  padding: 20px;
  border: 2px solid #bdc3c7;
}

.sidebar { 
  grid-area: sidebar;
  background-color: #ecf0f1;
  padding: 20px;
}

.footer { 
  grid-area: footer;
  background-color: #34495e;
  color: white;
  padding: 20px;
  text-align: center;
}
```

**Ví dụ kết hợp fr với đơn vị tĩnh:**
```css
.mixed-units {
  display: grid;
  grid-template-columns: 200px 1fr 150px;
  /* 
  - Cột 1: cố định 200px
  - Cột 2: chiếm phần còn lại
  - Cột 3: cố định 150px
  */
}
```

### 2. Từ khóa kích thước (Sizing Keywords)

**Ví dụ min-content và max-content:**
```html
<div class="content-sizing">
  <div class="item">Ngắn</div>
  <div class="item">Đây là một đoạn văn bản rất dài để minh họa</div>
  <div class="item">Medium text</div>
</div>
```

```css
.content-sizing {
  display: grid;
  grid-template-columns: min-content max-content auto;
  gap: 10px;
  padding: 20px;
  border: 2px solid #3498db;
}

.item {
  background-color: #e8f4fd;
  padding: 10px;
  border: 1px solid #3498db;
}
```

**Ví dụ thực tế - Navigation menu:**
```html
<nav class="nav-menu">
  <div class="logo">Logo</div>
  <div class="nav-items">Home | About | Services | Contact</div>
  <div class="auth">Login</div>
</nav>
```

```css
.nav-menu {
  display: grid;
  grid-template-columns: min-content 1fr min-content;
  align-items: center;
  gap: 20px;
  padding: 15px 30px;
  background-color: #2c3e50;
  color: white;
}

.logo {
  font-weight: bold;
  font-size: 20px;
}

.nav-items {
  text-align: center;
}

.auth {
  background-color: #3498db;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
}
```

### 3. Hàm định kích thước (Sizing Functions)

#### min() và max()

**Ví dụ responsive với min() và max():**
```css
.responsive-grid {
  display: grid;
  grid-template-columns: repeat(3, min(300px, 30%));
  /* Cột sẽ là 30% container, nhưng không vượt quá 300px */
  gap: 20px;
}

.flexible-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, max(250px, 25%));
  /* Cột tối thiểu 250px, hoặc 25% nếu lớn hơn */
  gap: 15px;
}
```

**Ví dụ thực tế - Gallery responsive:**
```html
<div class="photo-gallery">
  <img src="photo1.jpg" alt="Photo 1">
  <img src="photo2.jpg" alt="Photo 2">
  <img src="photo3.jpg" alt="Photo 3">
  <img src="photo4.jpg" alt="Photo 4">
  <img src="photo5.jpg" alt="Photo 5">
  <img src="photo6.jpg" alt="Photo 6">
</div>
```

```css
.photo-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, min(250px, 100%));
  gap: 15px;
  padding: 20px;
}

.photo-gallery img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  transition: transform 0.3s ease;
}

.photo-gallery img:hover {
  transform: scale(1.05);
}
```

#### minmax()

**Ví dụ cơ bản minmax():**
```css
.minmax-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(200px, 1fr));
  /* Cột tối thiểu 200px, tối đa chia đều không gian còn lại */
  gap: 20px;
}
```

**Ví dụ thực tế - Card grid responsive:**
```html
<div class="product-grid">
  <div class="product-card">
    <h3>Product 1</h3>
    <p>Mô tả ngắn</p>
    <span class="price">$99</span>
  </div>
  <div class="product-card">
    <h3>Product 2</h3>
    <p>Mô tả rất dài để test responsive behavior của grid system</p>
    <span class="price">$149</span>
  </div>
  <div class="product-card">
    <h3>Product 3</h3>
    <p>Mô tả vừa phải</p>
    <span class="price">$79</span>
  </div>
</div>
```

```css
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
  padding: 30px;
}

.product-card {
  background: white;
  border-radius: 12px;
  padding: 25px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.product-card h3 {
  margin: 0 0 15px 0;
  color: #2c3e50;
}

.product-card p {
  color: #7f8c8d;
  flex-grow: 1;
  margin-bottom: 15px;
}

.price {
  font-size: 24px;
  font-weight: bold;
  color: #e74c3c;
}
```

#### clamp()

**Ví dụ clamp() trong grid:**
```css
.clamp-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, clamp(250px, 30%, 400px));
  /* Cột sẽ là 30% container, nhưng không nhỏ hơn 250px và không lớn hơn 400px */
  gap: 20px;
}
```

**Ví dụ thực tế - Responsive article layout:**
```html
<div class="article-layout">
  <article class="article">
    <h2>Tiêu đề bài viết</h2>
    <p>Nội dung bài viết sẽ được hiển thị ở đây với kích thước responsive...</p>
  </article>
  <article class="article">
    <h2>Bài viết khác</h2>
    <p>Nội dung khác...</p>
  </article>
</div>
```

```css
.article-layout {
  display: grid;
  grid-template-columns: repeat(auto-fit, clamp(300px, 45%, 500px));
  gap: 30px;
  padding: 40px;
  max-width: 1200px;
  margin: 0 auto;
}

.article {
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.article h2 {
  color: #2c3e50;
  margin-bottom: 15px;
  font-size: clamp(20px, 4vw, 28px);
}

.article p {
  line-height: 1.6;
  color: #555;
}
```

## IV. Tự động điều chỉnh và thích ứng (Auto-placement and Responsiveness)

### 1. auto-fit và auto-fill

**Ví dụ so sánh auto-fit vs auto-fill:**
```html
<div class="comparison">
  <div class="grid-auto-fill">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
  </div>
  
  <div class="grid-auto-fit">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
  </div>
</div>
```

```css
.comparison {
  display: grid;
  gap: 40px;
  padding: 20px;
}

.grid-auto-fill {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 15px;
  background-color: #ffeaa7;
  padding: 20px;
  border-radius: 8px;
}

.grid-auto-fit {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 15px;
  background-color: #a29bfe;
  padding: 20px;
  border-radius: 8px;
}

.item {
  background-color: white;
  padding: 20px;
  text-align: center;
  border-radius: 5px;
  font-weight: bold;
}
```

**Ví dụ thực tế - Responsive image gallery:**
```html
<div class="image-gallery">
  <div class="image-item">
    <img src="image1.jpg" alt="Image 1">
    <p>Caption 1</p>
  </div>
  <div class="image-item">
    <img src="image2.jpg" alt="Image 2">
    <p>Caption 2</p>
  </div>
  <div class="image-item">
    <img src="image3.jpg" alt="Image 3">
    <p>Caption 3</p>
  </div>
  <div class="image-item">
    <img src="image4.jpg" alt="Image 4">
    <p>Caption 4</p>
  </div>
</div>
```

```css
.image-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  padding: 30px;
}

.image-item {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.image-item:hover {
  transform: scale(1.02);
}

.image-item img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.image-item p {
  padding: 15px;
  margin: 0;
  text-align: center;
  color: #555;
}
```

**Ví dụ auto-fill cho loading content:**
```css
.loading-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}

.skeleton-item {
  height: 150px;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
  border-radius: 8px;
}

@keyframes loading {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
```

### 2. Lưới ngầm định (Implicit Grid)

**Ví dụ grid-auto-rows và grid-auto-columns:**
```html
<div class="auto-grid">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
  <div class="item">Item 4</div>
  <div class="item">Item 5</div> <!-- Sẽ tạo implicit row -->
  <div class="item">Item 6</div>
</div>
```

```css
.auto-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 100px 100px; /* Chỉ định 2 hàng đầu */
  grid-auto-rows: 150px; /* Hàng ngầm định sẽ cao 150px */
  gap: 15px;
  padding: 20px;
}

.item {
  background: linear-gradient(45deg, #3498db, #2980b9);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-weight: bold;
}
```

**Ví dụ grid-auto-flow:**
```css
.flow-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-flow: row; /* Mặc định - điền theo hàng */
  gap: 10px;
}

.flow-column {
  display: grid;
  grid-template-rows: repeat(3, 100px);
  grid-auto-flow: column; /* Điền theo cột */
  gap: 10px;
}

.flow-dense {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-flow: row dense; /* Lấp đầy các khoảng trống */
  gap: 10px;
}
```

**Ví dụ thực tế - Dynamic content grid:**
```html
<div class="content-feed">
  <article class="post standard">Standard Post</article>
  <article class="post featured">Featured Post</article>
  <article class="post standard">Standard Post</article>
  <article class="post wide">Wide Post</article>
  <article class="post standard">Standard Post</article>
  <article class="post tall">Tall Post</article>
</div>
```

```css
.content-feed {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 200px;
  grid-auto-flow: row dense;
  gap: 20px;
  padding: 30px;
}

.post {
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

.featured {
  grid-column: span 2;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
}

.wide {
  grid-column: span 2;
  background: linear-gradient(135deg, #f093fb, #f5576c);
  color: white;
}

.tall {
  grid-row: span 2;
  background: linear-gradient(135deg, #4facfe, #00f2fe);
  color: white;
}

.standard {
  background-color: #ecf0f1;
  color: #2c3e50;
}
```

## V. Định vị các phần tử trong Grid (Placing Grid Items)

### 1. Định vị dựa trên đường kẻ (Line-based Placement)

**Ví dụ cơ bản với grid lines:**
```html
<div class="positioned-grid">
  <div class="item-1">Item 1</div>
  <div class="item-2">Item 2</div>
  <div class="item-3">Item 3</div>
</div>
```

```css
.positioned-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 100px);
  gap: 10px;
  padding: 20px;
}

.item-1 {
  grid-row-start: 1;
  grid-column-start: 1;
  grid-row-end: 3;
  grid-column-end: 3;
  background-color: #e74c3c;
  color: white;
}

.item-2 {
  grid-row: 1 / 2; /* Shorthand */
  grid-column: 3 / 5;
  background-color: #3498db;
  color: white;
}

.item-3 {
  grid-row: 2 / 4;
  grid-column: 3 / 5;
  background-color: #2ecc71;
  color: white;
}
```

**Ví dụ với span keyword:**
```css
.span-example {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(4, 80px);
  gap: 10px;
}

.span-item-1 {
  grid-column: span 3; /* Chiếm 3 cột từ vị trí hiện tại */
  grid-row: span 2; /* Chiếm 2 hàng từ vị trí hiện tại */
  background-color: #9b59b6;
  color: white;
}

.span-item-2 {
  grid-column: 2 / span 2; /* Bắt đầu từ cột 2, chiếm 2 cột */
  background-color: #f39c12;
  color: white;
}
```

**Ví dụ thực tế - Complex dashboard:**
```html
<div class="dashboard-complex">
  <header class="header">Dashboard Header</header>
  <nav class="sidebar">Navigation</nav>
  <main class="main-widget">Main Widget</main>
  <aside class="stats">Statistics</aside>
  <section class="chart">Chart</section>
  <section class="recent">Recent Activity</section>
  <footer class="footer">Footer</footer>
</div>
```

```css
.dashboard-complex {
  display: grid;
  grid-template-columns: 200px 1fr 1fr 200px;
  grid-template-rows: 80px 200px 200px 150px 60px;
  gap: 15px;
  padding: 20px;
  min-height: 100vh;
  background-color: #f8f9fa;
}

.header {
  grid-column: 1 / -1; /* Từ đầu đến cuối */
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  display: flex;
  align-items: center;
  padding: 0 30px;
  border-radius: 10px;
  font-size: 24px;
  font-weight: bold;
}

.sidebar {
  grid-row: 2 / 5; /* Từ hàng 2 đến hàng 5 */
  background-color: #2c3e50;
  color: white;
  padding: 20px;
  border-radius: 10px;
}

.main-widget {
  grid-column: 2 / 4; /* Chiếm 2 cột giữa */
  grid-row: 2 / 4; /* Chiếm 2 hàng */
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: #2c3e50;
}

.stats {
  grid-row: 2 / 4;
  background-color: #3498db;
  color: white;
  padding: 20px;
  border-radius: 10px;
}

.chart {
  grid-column: 2 / 3;
  background-color: #e74c3c;
  color: white;
  padding: 20px;
  border-radius: 10px;
}

.recent {
  grid-column: 3 / 5;
  background-color: #2ecc71;
  color: white;
  padding: 20px;
  border-radius: 10px;
}

.footer {
  grid-column: 1 / -1;
  background-color: #34495e;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
}
```

### 2. Định vị bằng tên khu vực (Grid Areas)

**Ví dụ cơ bản với grid-template-areas:**
```html
<div class="area-layout">
  <header class="header">Header</header>
  <nav class="sidebar">Sidebar</nav>
  <main class="content">Main Content</main>
  <aside class="ads">Advertisements</aside>
  <footer class="footer">Footer</footer>
</div>
```

```css
.area-layout {
  display: grid;
  grid-template-columns: 200px 1fr 150px;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header header header"
    "sidebar content ads"
    "footer footer footer";
  gap: 20px;
  padding: 20px;
  min-height: 100vh;
}

.header { 
  grid-area: header;
  background-color: #2c3e50;
  color: white;
  padding: 20px;
  text-align: center;
}

.sidebar { 
  grid-area: sidebar;
  background-color: #3498db;
  color: white;
  padding: 20px;
}

.content { 
  grid-area: content;
  background-color: white;
  padding: 30px;
  border: 2px solid #bdc3c7;
}

.ads { 
  grid-area: ads;
  background-color: #e74c3c;
  color: white;
  padding: 20px;
}

.footer { 
  grid-area: footer;
  background-color: #34495e;
  color: white;
  padding: 20px;
  text-align: center;
}
```

**Ví dụ responsive với grid areas:**
```css
.responsive-areas {
  display: grid;
  gap: 15px;
  padding: 20px;
}

/* Mobile first */
@media (max-width: 768px) {
  .responsive-areas {
    grid-template-columns: 1fr;
    grid-template-areas:
      "header"
      "content"
      "sidebar"
      "footer";
  }
}

/* Tablet */
@media (min-width: 769px) and (max-width: 1024px) {
  .responsive-areas {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "header header"
      "content sidebar"
      "footer footer";
  }
}

/* Desktop */
@media (min-width: 1025px) {
  .responsive-areas {
    grid-template-columns: 250px 1fr 200px;
    grid-template-areas:
      "header header header"
      "sidebar content ads"
      "footer footer footer";
  }
}
```

**Ví dụ thực tế - E-commerce product page:**
```html
<div class="product-page">
  <div class="breadcrumb">Home > Products > Item</div>
  <div class="product-images">Product Images</div>
  <div class="product-info">Product Information</div>
  <div class="product-actions">Buy Now / Add to Cart</div>
  <div class="related-products">Related Products</div>
  <div class="reviews">Customer Reviews</div>
</div>
```

```css
.product-page {
  display: grid;
  grid-template-columns: 1fr 1fr 300px;
  grid-template-rows: auto auto 1fr auto;
  grid-template-areas:
    "breadcrumb breadcrumb breadcrumb"
    "images info actions"
    "related related actions"
    "reviews reviews reviews";
  gap: 25px;
  padding: 30px;
  max-width: 1200px;
  margin: 0 auto;
}

.breadcrumb {
  grid-area: breadcrumb;
  background-color: #f8f9fa;
  padding: 15px;
  border-radius: 5px;
  color: #6c757d;
}

.product-images {
  grid-area: images;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  padding: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 400px;
}

.product-info {
  grid-area: info;
  background-color: white;
  padding: 30px;
  border: 2px solid #dee2e6;
  border-radius: 10px;
}

.product-actions {
  grid-area: actions;
  background-color: #28a745;
  color: white;
  padding: 30px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  justify-content: center;
}

.related-products {
  grid-area: related;
  background-color: #17a2b8;
  color: white;
  padding: 30px;
  border-radius: 10px;
  text-align: center;
}

.reviews {
  grid-area: reviews;
  background-color: #f8f9fa;
  padding: 30px;
  border-radius: 10px;
  border: 1px solid #dee2e6;
}

/* Responsive cho mobile */
@media (max-width: 768px) {
  .product-page {
    grid-template-columns: 1fr;
    grid-template-areas:
      "breadcrumb"
      "images"
      "info"
      "actions"
      "related"
      "reviews";
  }
}
```

## VI. Căn chỉnh và khoảng cách (Alignment and Spacing)

### 1. Khoảng cách giữa các track (Gaps)

**Ví dụ các loại gap:**
```css
.gap-examples {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 150px);
}

.equal-gap {
  gap: 20px; /* row-gap và column-gap đều 20px */
}

.different-gaps {
  gap: 30px 15px; /* row-gap: 30px, column-gap: 15px */
}

.individual-gaps {
  row-gap: 25px;
  column-gap: 10px;
}
```

**Ví dụ thực tế - Card layout với gaps:**
```html
<div class="card-showcase">
  <div class="card">
    <h3>Service 1</h3>
    <p>Description of service 1</p>
    <button>Learn More</button>
  </div>
  <div class="card">
    <h3>Service 2</h3>
    <p>Description of service 2</p>
    <button>Learn More</button>
  </div>
  <div class="card">
    <h3>Service 3</h3>
    <p>Description of service 3</p>
    <button>Learn More</button>
  </div>
  <div class="card">
    <h3>Service 4</h3>
    <p>Description of service 4</p>
    <button>Learn More</button>
  </div>
</div>
```

```css
.card-showcase {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px 20px; /* Khoảng cách dọc lớn hơn ngang */
  padding: 40px;
  background: linear-gradient(135deg, #f5f7fa, #c3cfe2);
}

.card {
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.card h3 {
  color: #2c3e50;
  margin-bottom: 15px;
  font-size: 22px;
}

.card p {
  color: #7f8c8d;
  line-height: 1.6;
  flex-grow: 1;
  margin-bottom: 20px;
}

.card button {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 25px;
  cursor: pointer;
  font-weight: bold;
  transition: transform 0.2s ease;
}

.card button:hover {
  transform: scale(1.05);
}
```

### 2. Căn chỉnh các phần tử trong ô (Aligning Items within Cells)

**Ví dụ justify-items và align-items:**
```html
<div class="alignment-demo">
  <div class="item">Start</div>
  <div class="item">End</div>
  <div class="item">Center</div>
  <div class="item">Stretch</div>
</div>
```

```css
.alignment-demo {
  display: grid;
  grid-template-columns: repeat(2, 200px);
  grid-template-rows: repeat(2, 150px);
  gap: 20px;
  padding: 30px;
  background-color: #ecf0f1;
}

.alignment-demo .item {
  background-color: #3498db;
  color: white;
  padding: 15px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

/* Căn chỉnh cụ thể cho từng item */
.item:nth-child(1) {
  justify-self: start;
  align-self: start;
}

.item:nth-child(2) {
  justify-self: end;
  align-self: start;
}

.item:nth-child(3) {
  justify-self: center;
  align-self: center;
}

.item:nth-child(4) {
  justify-self: stretch;
  align-self: stretch;
}
```

**Ví dụ thực tế - Icon grid với alignment:**
```html
<div class="icon-grid">
  <div class="icon-item">
    <div class="icon">📱</div>
    <span>Mobile</span>
  </div>
  <div class="icon-item">
    <div class="icon">💻</div>
    <span>Desktop</span>
  </div>
  <div class="icon-item">
    <div class="icon">🌐</div>
    <span>Web</span>
  </div>
  <div class="icon-item">
    <div class="icon">⚡</div>
    <span>Fast</span>
  </div>
</div>
```

```css
.icon-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  justify-items: center; /* Căn giữa tất cả items theo chiều ngang */
  align-items: center; /* Căn giữa tất cả items theo chiều dọc */
  gap: 30px;
  padding: 50px;
  background: linear-gradient(135deg, #667eea, #764ba2);
}

.icon-item {
  background: white;
  padding: 30px 20px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
  width: 120px;
}

.icon-item:hover {
  transform: scale(1.1);
}

.icon {
  font-size: 48px;
  margin-bottom: 15px;
}

.icon-item span {
  font-weight: bold;
  color: #2c3e50;
  font-size: 16px;
}
```

**Ví dụ place-items shorthand:**
```css
.place-items-demo {
  display: grid;
  grid-template-columns: repeat(3, 150px);
  grid-template-rows: repeat(3, 150px);
  gap: 10px;
  padding: 20px;
}

.center-all {
  place-items: center; /* Tương đương: align-items: center; justify-items: center; */
}

.start-end {
  place-items: start end; /* align-items: start; justify-items: end; */
}
```

### 3. Căn chỉnh lưới trong vùng chứa (Aligning the Grid within the Container)

**Ví dụ justify-content và align-content:**
```html
<div class="grid-alignment-container">
  <div class="small-grid">
    <div class="grid-item">1</div>
    <div class="grid-item">2</div>
    <div class="grid-item">3</div>
    <div class="grid-item">4</div>
  </div>
</div>
```

```css
.grid-alignment-container {
  height: 400px;
  background-color: #f8f9fa;
  border: 3px dashed #dee2e6;
  padding: 20px;
}

.small-grid {
  display: grid;
  grid-template-columns: repeat(2, 100px);
  grid-template-rows: repeat(2, 80px);
  gap: 15px;
  height: 100%;
  
  /* Căn chỉnh grid trong container */
  justify-content: center; /* Căn giữa theo chiều ngang */
  align-content: center; /* Căn giữa theo chiều dọc */
}

.grid-item {
  background: linear-gradient(135deg, #ff6b6b, #ee5a24);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  font-weight: bold;
  font-size: 18px;
}
```

**Ví dụ các giá trị khác nhau:**
```css
.content-start {
  justify-content: start;
  align-content: start;
}

.content-end {
  justify-content: end;
  align-content: end;
}

.content-space-between {
  justify-content: space-between;
  align-content: space-between;
}

.content-space-around {
  justify-content: space-around;
  align-content: space-around;
}

.content-space-evenly {
  justify-content: space-evenly;
  align-content: space-evenly;
}
```

**Ví dụ place-content shorthand:**
```css
.perfect-center {
  display: grid;
  place-content: center;
  /* Cách nhanh nhất để căn giữa hoàn hảo */
}

.modal-center {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: grid;
  place-content: center;
}

.modal-content {
  background: white;
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  max-width: 500px;
  text-align: center;
}
```

### 4. Xếp lớp (Z-axis Ordering)

**Ví dụ cơ bản về z-index:**
```html
<div class="overlap-grid">
  <div class="item overlap-1">Behind</div>
  <div class="item overlap-2">Middle</div>
  <div class="item overlap-3">Front</div>
</div>
```

```css
.overlap-grid {
  display: grid;
  grid-template-columns: repeat(3, 150px);
  grid-template-rows: 150px;
  padding: 50px;
}

.item {
  padding: 20px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: white;
}

.overlap-1 {
  background-color: #e74c3c;
  grid-column: 1 / 3;
  z-index: 1;
}

.overlap-2 {
  background-color: #3498db;
  grid-column: 2 / 4;
  grid-row: 1;
  z-index: 2;
}

.overlap-3 {
  background-color: #2ecc71;
  grid-column: 3;
  grid-row: 1;
  z-index: 3;
  transform: translateY(-20px); /* Tạo hiệu ứng nổi */
}
```

**Ví dụ thực tế - Card overlay effect:**
```html
<div class="card-overlay-grid">
  <div class="base-card">
    <h3>Base Card</h3>
    <p>This is the base card content</p>
  </div>
  <div class="overlay-badge">New!</div>
  <div class="hover-overlay">Hover for details</div>
</div>
```

```css
.card-overlay-grid {
  display: grid;
  grid-template-columns: 300px;
  grid-template-rows: 200px;
  position: relative;
  margin: 50px;
}

.base-card {
  grid-column: 1;
  grid-row: 1;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  padding: 30px;
  border-radius: 15px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.overlay-badge {
  grid-column: 1;
  grid-row: 1;
  background-color: #e74c3c;
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: bold;
  justify-self: end;
  align-self: start;
  transform: translate(10px, -10px);
  z-index: 3;
}

.hover-overlay {
  grid-column: 1;
  grid-row: 1;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  opacity: 0;
  z-index: 2;
  transition: opacity 0.3s ease;
}

.card-overlay-grid:hover .hover-overlay {
  opacity: 1;
}
```

## VII. Các thuộc tính Shorthand nâng cao (Advanced Shorthand Properties)

### 1. grid-template

**Ví dụ grid-template cơ bản:**
```css
.template-example {
  display: grid;
  
  /* Cách viết đầy đủ */
  grid-template-rows: 100px 200px 100px;
  grid-template-columns: 200px 1fr 150px;
  grid-template-areas:
    "header header header"
    "sidebar content ads"
    "footer footer footer";
}

/* Tương đương với shorthand */
.template-shorthand {
  display: grid;
  grid-template: 
    "header header header" 100px
    "sidebar content ads" 200px
    "footer footer footer" 100px
    / 200px 1fr 150px;
}
```

**Ví dụ thực tế - Magazine layout:**
```html
<div class="magazine-layout">
  <div class="masthead">MAGAZINE TITLE</div>
  <div class="feature">Feature Article</div>
  <div class="sidebar-content">Sidebar</div>
  <div class="ad-space">Advertisement</div>
  <div class="footer-info">Footer Information</div>
</div>
```

```css
.magazine-layout {
  display: grid;
  grid-template:
    [header-start] "masthead masthead masthead" 80px [header-end]
    [content-start] "feature feature sidebar" 300px
    [content-mid] "feature feature ad" 200px [content-end]
    [footer-start] "footer footer footer" 60px [footer-end]
    / 2fr 1fr 200px;
  gap: 20px;
  padding: 30px;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #f8f9fa;
}

.masthead {
  grid-area: masthead;
  background: linear-gradient(135deg, #2c3e50, #34495e);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  font-weight: bold;
  letter-spacing: 2px;
  border-radius: 10px;
}

.feature {
  grid-area: feature;
  background: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: #2c3e50;
}

.sidebar-content {
  grid-area: sidebar;
  background-color: #3498db;
  color: white;
  padding: 30px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.ad-space {
  grid-area: ad;
  background-color: #e74c3c;
  color: white;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer-info {
  grid-area: footer;
  background-color: #95a5a6;
  color: white;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

### 2. grid (Ultimate Shorthand)

**Ví dụ grid shorthand:**
```css
.grid-shorthand-example {
  display: grid;
  
  /* Cách 1: Chỉ định explicit grid */
  grid: 100px 300px / 3fr 1fr;
  /* Tương đương với:
     grid-template-rows: 100px 300px;
     grid-template-columns: 3fr 1fr; */
}

.grid-with-auto {
  display: grid;
  
  /* Cách 2: Bao gồm auto properties */
  grid: auto-flow dense / 200px 1fr;
  /* Tương đương với:
     grid-auto-flow: row dense;
     grid-template-columns: 200px 1fr; */
}
```

**Ví dụ thực tế - Admin panel:**
```html
<div class="admin-panel">
  <div class="top-bar">Admin Dashboard</div>
  <div class="main-nav">Navigation</div>
  <div class="content-area">Main Content</div>
  <div class="quick-actions">Quick Actions</div>
  <div class="status-bar">Status: Online</div>
</div>
```

```css
.admin-panel {
  display: grid;
  grid: 
    "top-bar top-bar top-bar" 60px
    "nav content actions" 1fr
    "status status status" 40px
    / 250px 1fr 200px;
  gap: 15px;
  padding: 20px;
  height: 100vh;
  background: linear-gradient(135deg, #f5f7fa, #c3cfe2);
}

.top-bar {
  grid-area: top-bar;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  display: flex;
  align-items: center;
  padding: 0 30px;
  border-radius: 10px;
  font-size: 20px;
  font-weight: bold;
}

.main-nav {
  grid-area: nav;
  background-color: #2c3e50;
  color: white;
  padding: 30px 20px;
  border-radius: 10px;
}

.content-area {
  grid-area: content;
  background: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
}

.quick-actions {
  grid-area: actions;
  background-color: #3498db;
  color: white;
  padding: 30px 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.status-bar {
  grid-area: status;
  background-color: #27ae60;
  color: white;
  display: flex;
  align-items: center;
  padding: 0 30px;
  border-radius: 10px;
  font-weight: bold;
}
```

## VIII. Lưu ý về khả năng tiếp cận (Accessibility Considerations)

### Ví dụ về vấn đề tab order:

```html
<!-- HTML structure (DOM order) -->
<div class="accessibility-demo">
  <div class="item-1" tabindex="0">First in DOM</div>
  <div class="item-2" tabindex="0">Second in DOM</div>
  <div class="item-3" tabindex="0">Third in DOM</div>
  <div class="item-4" tabindex="0">Fourth in DOM</div>
</div>
```

```css
.accessibility-demo {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  padding: 30px;
}

/* Visual order khác với DOM order */
.item-1 { 
  grid-area: 2 / 2; /* Xuất hiện ở góc dưới phải */
  background-color: #e74c3c;
  color: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
}

.item-2 { 
  grid-area: 1 / 2; /* Xuất hiện ở góc trên phải */
  background-color: #3498db;
  color: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
}

.item-3 { 
  grid-area: 1 / 1; /* Xuất hiện ở góc trên trái */
  background-color: #2ecc71;
  color: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
}

.item-4 { 
  grid-area: 2 / 1; /* Xuất hiện ở góc dưới trái */
  background-color: #f39c12;
  color: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
}

/* Focus styles để thấy rõ tab order */
.accessibility-demo div:focus {
  outline: 3px solid #ff6b6b;
  outline-offset: 3px;
}
```

**Giải pháp - Sắp xếp lại DOM order:**
```html
<!-- Sắp xếp lại HTML để khớp với visual order -->
<div class="accessibility-fixed">
  <div class="item-3" tabindex="0">Third in DOM (now first visually)</div>
  <div class="item-2" tabindex="0">Second in DOM (now second visually)</div>
  <div class="item-4" tabindex="0">Fourth in DOM (now third visually)</div>
  <div class="item-1" tabindex="0">First in DOM (now fourth visually)</div>
</div>
```

## IX. Các tính năng nâng cao khác

## IX. Các tính năng nâng cao khác

### **Subgrid**

Một tính năng cực kỳ hữu ích của Grid cho phép các `grid item` có một lưới riêng của chúng kế thừa các `grid line` từ `grid parent`. Hiện tại, tính năng này chỉ được hỗ trợ trong Firefox (tính đến tháng 9 năm 2024).

#### Ví dụ Subgrid:

```css
/* Grid container chính */
.main-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 100px);
  gap: 20px;
}

/* Grid item con sử dụng subgrid */
.card {
  grid-column: 2 / 4;
  grid-row: 1 / 3;
  
  /* Tạo subgrid kế thừa columns từ parent */
  display: grid;
  grid-template-columns: subgrid;
  grid-template-rows: subgrid;
}

.card-header {
  grid-column: 1 / -1;
}

.card-content {
  grid-column: 1;
}

.card-sidebar {
  grid-column: 2;
}
```

```html
<div class="main-grid">
  <div class="card">
    <div class="card-header">Header</div>
    <div class="card-content">Nội dung chính</div>
    <div class="card-sidebar">Sidebar</div>
  </div>
</div>
```

**Lợi ích của Subgrid:**
- Giúp các grid con căn chỉnh với grid cha một cách hoàn hảo
- Tạo ra bố cục phức tạp nhưng vẫn duy trì sự đồng nhất
- Đặc biệt hữu ích cho card layouts, form layouts

### **Masonry Layout**

Một tính năng thử nghiệm của CSS Grid để tạo bố cục kiểu masonry (các khối có chiều cao khác nhau xếp khít vào nhau). Hiện đang được hỗ trợ thử nghiệm trong Firefox.

#### Ví dụ Masonry Layout:

```css
/* Kích hoạt masonry layout */
.masonry-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-template-rows: masonry; /* Tính năng thử nghiệm */
  gap: 16px;
}

.masonry-item {
  background: #f0f0f0;
  padding: 20px;
  border-radius: 8px;
}

/* Tạo các item có chiều cao khác nhau */
.masonry-item:nth-child(1) { height: 200px; }
.masonry-item:nth-child(2) { height: 150px; }
.masonry-item:nth-child(3) { height: 300px; }
.masonry-item:nth-child(4) { height: 180px; }
.masonry-item:nth-child(5) { height: 220px; }
.masonry-item:nth-child(6) { height: 160px; }
```

```html
<div class="masonry-container">
  <div class="masonry-item">Item 1 - Nội dung ngắn</div>
  <div class="masonry-item">Item 2 - Nội dung trung bình với nhiều text hơn</div>
  <div class="masonry-item">Item 3 - Nội dung dài với rất nhiều text và có thể chứa hình ảnh, danh sách và các thành phần khác</div>
  <div class="masonry-item">Item 4 - Nội dung khác</div>
  <div class="masonry-item">Item 5 - Thêm nội dung để test</div>
  <div class="masonry-item">Item 6 - Item cuối</div>
</div>
```

**Ứng dụng thực tế:**
- Gallery hình ảnh với kích thước khác nhau
- Blog cards với nội dung có độ dài khác nhau  
- Pinterest-style layouts
- Portfolio showcases

### **Animation**

Một số thuộc tính Grid có thể được hoạt ảnh (`animatable`), bao gồm `grid-gap`, `grid-row-gap`, `grid-column-gap`, và ở một mức độ hạn chế hơn là `grid-template-columns`, `grid-template-rows`. Tuy nhiên, tại thời điểm hiện tại, chỉ có hoạt ảnh của các thuộc tính `gap` được triển khai rộng rãi.

#### Ví dụ Animation với Gap:

```css
.animated-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 200px);
  gap: 10px;
  transition: gap 0.3s ease;
}

/* Hover để tăng gap */
.animated-grid:hover {
  gap: 30px;
}

.grid-item {
  background: linear-gradient(45deg, #3498db, #e74c3c);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  border-radius: 8px;
  transition: transform 0.3s ease;
}

.grid-item:hover {
  transform: scale(1.05);
}
```

#### Ví dụ Animation với Grid Template (hạn chế):

```css
.expandable-grid {
  display: grid;
  grid-template-columns: 1fr 0fr 1fr; /* Cột giữa ẩn */
  grid-template-rows: 200px;
  gap: 20px;
  transition: grid-template-columns 0.5s ease;
}

/* Khi hover, cột giữa xuất hiện */
.expandable-grid:hover {
  grid-template-columns: 1fr 1fr 1fr;
}

.expandable-item {
  background: #2ecc71;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border-radius: 8px;
  overflow: hidden;
}

.expandable-item:nth-child(2) {
  background: #f39c12;
}
```

#### Ví dụ Animation kết hợp với JavaScript:

```css
.dynamic-grid {
  display: grid;
  grid-template-columns: repeat(var(--columns, 2), 1fr);
  gap: 15px;
  transition: all 0.4s ease;
}

.dynamic-item {
  height: 150px;
  background: #9b59b6;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 18px;
}
```

```javascript
// JavaScript để thay đổi số cột
const grid = document.querySelector('.dynamic-grid');
const buttons = document.querySelectorAll('.column-btn');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const columns = btn.dataset.columns;
    grid.style.setProperty('--columns', columns);
  });
});
```

```html
<div class="controls">
  <button class="column-btn" data-columns="2">2 Cột</button>
  <button class="column-btn" data-columns="3">3 Cột</button>
  <button class="column-btn" data-columns="4">4 Cột</button>
</div>

<div class="dynamic-grid">
  <div class="dynamic-item">1</div>
  <div class="dynamic-item">2</div>
  <div class="dynamic-item">3</div>
  <div class="dynamic-item">4</div>
  <div class="dynamic-item">5</div>
  <div class="dynamic-item">6</div>
</div>
```

**Lưu ý về Animation:**
- `gap` properties hoạt động tốt trên hầu hết các trình duyệt hiện đại
- Animation `grid-template-columns/rows` có thể gây giật lag trên một số trình duyệt
- Sử dụng `transform` cho các hiệu ứng mượt mà hơn
- CSS Custom Properties (CSS Variables) giúp animation linh hoạt hơn khi kết hợp với JavaScript

**Best Practices:**
- Luôn test animation trên nhiều trình duyệt khác nhau
- Sử dụng `will-change` property khi cần thiết để tối ưu hiệu suất
- Tránh animate quá nhiều elements cùng một lúc
- Cung cấp option để tắt animation cho người dùng có vấn đề về motion sensitivity

## Tài liệu phải đọc khi ĐÓNG CỌC LẦN 2

1. https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-advanced-grid-properties
1. https://developer.mozilla.org/en-US/docs/Web/CSS/min-content
1. https://www.w3.org/TR/css-grid-1/#auto-repeat
1. https://css-tricks.com/snippets/css/complete-guide-grid/#grid-properties
1. https://css-tricks.com/auto-sizing-columns-css-grid-auto-fill-vs-auto-fit/
1. https://www.youtube.com/watch?v=qjJR3qYCd54
1. https://www.youtube.com/watch?v=EiNiSFIPIQE
1. https://www.joshwcomeau.com/css/interactive-guide-to-grid

> ⭐ **Theo dõi [kênh Threads](https://www.threads.com/@kaitaku.88) để đọc bài mới mỗi ngày!** ⭐  

**[<== Bài Trước  ](link)          |[  Trang Chủ  ](./README.md)|           [  Bài Sau ==>](link)**
