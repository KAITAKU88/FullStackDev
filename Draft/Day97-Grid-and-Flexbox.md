# Day 97 : CSS Grid và Flexbox: Công Cụ Bố Cục Hiện Đại

Flexbox và CSS Grid là hai mô-đun bố cục CSS layout modules đã trở nên phổ biến trong những năm gần đây. Chúng cho phép chúng ta tạo ra các bố cục phức tạp mà trước đây chỉ có thể thực hiện được bằng cách áp dụng các thủ thuật CSS hacks và/hoặc JavaScript. Cả Flexbox và CSS Grid đều có nhiều điểm tương đồng, và nhiều bố cục có thể được giải quyết bằng cả hai. Tuy nhiên, việc lựa chọn công cụ nào cho tình huống cụ thể vẫn là một câu hỏi quan trọng và là chủ đề nóng hổi trong cộng đồng CSS.

Điều quan trọng cần nhớ là **không có công cụ nào thay thế hoàn toàn công cụ nào**. Grid có thể làm những điều mà Flexbox không thể, và ngược lại. Hơn nữa, chúng có thể **hoạt động cùng nhau**: một grid item có thể là một flex container, và một flex item cũng có thể là một grid container.

## Sự Khác Biệt Cốt Lõi: Một Chiều vs Hai Chiều

Điểm khác biệt quan trọng nhất giữa CSS Grid và Flexbox là Flexbox là **một chiều** (one-dimensional), trong khi CSS Grid là **hai chiều** (two-dimensional).

### Flexbox - Bố Cục Một Chiều

Flexbox sắp xếp các mục theo **HOẶC** trục ngang (horizontal axis) **HOẶC** trục dọc (vertical axis). Bạn phải quyết định xem mình muốn bố cục dựa trên hàng (row-based) hay cột (column-based).

**Ví dụ cơ bản về Flexbox:**

```html
<div class="flex-container">
  <div class="flex-item">Item 1</div>
  <div class="flex-item">Item 2</div>
  <div class="flex-item">Item 3</div>
</div>
```

```css
.flex-container {
  display: flex;
  flex-direction: row; /* Sắp xếp theo hàng ngang */
  justify-content: space-between; /* Phân bổ không gian đều */
  align-items: center; /* Căn giữa theo trục dọc */
  height: 200px;
  background-color: #f0f0f0;
}

.flex-item {
  background-color: #4CAF50;
  color: white;
  padding: 20px;
  margin: 5px;
  text-align: center;
}
```

**Ví dụ Flexbox với wrap:**

```html
<div class="flex-wrap-container">
  <div class="flex-item">Item 1 với nội dung dài</div>
  <div class="flex-item">Item 2</div>
  <div class="flex-item">Item 3 với rất nhiều nội dung</div>
  <div class="flex-item">Item 4</div>
  <div class="flex-item">Item 5</div>
</div>
```

```css
.flex-wrap-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  background-color: #f5f5f5;
  padding: 20px;
}

.flex-item {
  background-color: #2196F3;
  color: white;
  padding: 15px;
  min-width: 150px;
  flex: 1 1 200px; /* grow shrink basis */
}
```

### CSS Grid - Bố Cục Hai Chiều

CSS Grid cho phép bạn làm việc theo **cả hai trục**: ngang và dọc (horizontally and vertically). Grid cho phép bạn tạo các bố cục hai chiều, nơi bạn có thể đặt chính xác các mục (grid items) vào các ô (cells) được định nghĩa bởi hàng (rows) và cột (columns).

**Ví dụ cơ bản về CSS Grid:**

```html
<div class="grid-container">
  <div class="grid-item header">Header</div>
  <div class="grid-item sidebar">Sidebar</div>
  <div class="grid-item main">Main Content</div>
  <div class="grid-item footer">Footer</div>
</div>
```

```css
.grid-container {
  display: grid;
  grid-template-columns: 200px 1fr; /* Cột 1: 200px, Cột 2: phần còn lại */
  grid-template-rows: 80px 1fr 60px; /* 3 hàng với kích thước khác nhau */
  grid-template-areas: 
    "header header"
    "sidebar main"
    "footer footer";
  height: 100vh;
  gap: 10px;
}

.header {
  grid-area: header;
  background-color: #ff6b6b;
}

.sidebar {
  grid-area: sidebar;
  background-color: #4ecdc4;
}

.main {
  grid-area: main;
  background-color: #45b7d1;
}

.footer {
  grid-area: footer;
  background-color: #96c93f;
}

.grid-item {
  padding: 20px;
  color: white;
  text-align: center;
}
```

## Khi Nào Nên Sử Dụng Flexbox vs CSS Grid

### CSS Grid: Tập trung vào vị trí nội dung (Focus on content placement)

CSS Grid tập trung vào **định vị nội dung chính xác**.

#### Đặc điểm của CSS Grid:

- Mỗi mục là một grid cell, được căn chỉnh theo cả trục ngang và dọc
- Cung cấp kiểm soát chính xác vị trí của các mục trong bố cục
- Có các thuộc tính như `grid-template-rows` và `grid-template-columns`
- Phù hợp để tạo các bố cục **độc đáo** như bố cục bị hỏng (broken), không đối xứng (asymmetrical), và chồng chéo (overlapping layouts)

**Ví dụ Grid với auto-fill và minmax:**

```html
<div class="responsive-grid">
  <div class="card">Card 1</div>
  <div class="card">Card 2</div>
  <div class="card">Card 3</div>
  <div class="card">Card 4</div>
  <div class="card">Card 5</div>
  <div class="card">Card 6</div>
</div>
```

```css
.responsive-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
}

.card {
  background-color: #e74c3c;
  color: white;
  padding: 30px;
  text-align: center;
  border-radius: 8px;
  min-height: 150px;
}
```

**Ví dụ tạo các cột bằng nhau với Grid:**

```css
.equal-columns {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Tạo 3 cột bằng nhau */
  gap: 1em; /* Khoảng cách giữa các cột */
  height: 300px;
}

.column {
  background-color: #9b59b6;
  color: white;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

**Ví dụ Grid với overlapping layout:**

```html
<div class="overlap-grid">
  <div class="background-image">Background</div>
  <div class="overlay-content">
    <h2>Overlay Content</h2>
    <p>Nội dung chồng lên trên ảnh nền</p>
  </div>
</div>
```

```css
.overlap-grid {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  width: 100%;
  height: 400px;
}

.background-image {
  grid-column: 1;
  grid-row: 1;
  background-color: #34495e;
  background-image: linear-gradient(45deg, #34495e, #2c3e50);
}

.overlay-content {
  grid-column: 1;
  grid-row: 1;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
}
```

### Flexbox: Tập trung vào luồng nội dung (Focus on content flow)

Flexbox tập trung vào **luồng nội dung** (content flow) chứ không phải vị trí nội dung.

#### Đặc điểm của Flexbox:

- Chiều rộng (hoặc chiều cao) của các flex items được xác định bởi nội dung
- Các flex items phát triển và thu nhỏ theo nội dung bên trong và không gian có sẵn
- Cho phép phân bổ không gian và căn chỉnh các mục một cách linh hoạt
- Xử lý mỗi hàng độc lập (each row independently)

**Ví dụ Navigation Menu với Flexbox:**

```html
<nav class="flex-nav">
  <div class="logo">Logo</div>
  <ul class="nav-links">
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Services</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
  <div class="nav-actions">
    <button>Login</button>
    <button>Sign Up</button>
  </div>
</nav>
```

```css
.flex-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #2c3e50;
  color: white;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 2rem;
  margin: 0;
  padding: 0;
}

.nav-links a {
  color: white;
  text-decoration: none;
  transition: color 0.3s;
}

.nav-links a:hover {
  color: #3498db;
}

.nav-actions {
  display: flex;
  gap: 1rem;
}

.nav-actions button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}
```

**Ví dụ Center Content với Flexbox:**

```html
<div class="center-container">
  <div class="centered-content">
    <h2>Nội dung được căn giữa</h2>
    <p>Flexbox làm cho việc căn giữa trở nên dễ dàng!</p>
  </div>
</div>
```

```css
.center-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #ecf0f1;
}

.centered-content {
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 400px;
}
```

**Ví dụ Sticky Footer với Flexbox:**

```html
<div class="page-wrapper">
  <header class="page-header">Header Content</header>
  <main class="page-main">
    <p>Main content goes here...</p>
  </main>
  <footer class="page-footer">Footer Content</footer>
</div>
```

```css
.page-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.page-header {
  background-color: #3498db;
  color: white;
  padding: 1rem;
  text-align: center;
}

.page-main {
  flex: 1; /* Chiếm toàn bộ không gian còn lại */
  padding: 2rem;
  background-color: #ecf0f1;
}

.page-footer {
  background-color: #2c3e50;
  color: white;
  padding: 1rem;
  text-align: center;
}
```

## Hỗ Trợ Trình Duyệt (Browser Support)

- **Flexbox** có hỗ trợ trình duyệt tốt
- **CSS Grid** không được IE11- và Edge 15- hỗ trợ. Mặc dù Grid mới hơn Flexbox và có ít hỗ trợ trình duyệt hơn, nó đã được phát hành hoàn toàn không tiền tố (unprefixed) và sẵn sàng sử dụng trong Chrome, Opera, Firefox, và Safari vào tháng 3 năm 2017

**Ví dụ Feature Detection:**

```css
/* Fallback cho trình duyệt không hỗ trợ Grid */
.container {
  display: flex;
  flex-wrap: wrap;
}

.item {
  flex: 1 1 300px;
  margin: 10px;
}

/* Nâng cấp lên Grid khi được hỗ trợ */
@supports (display: grid) {
  .container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
  }
  
  .item {
    margin: 0;
  }
}
```

## Kết Hợp Flexbox và CSS Grid

Bạn không cần phải cứng nhắc chọn một trong hai Flexbox hoặc CSS Grid. **Bạn có thể kết hợp cả hai để giải quyết các bố cục phức tạp**.

**Ví dụ kết hợp Grid và Flexbox cho bố cục phức tạp:**

```html
<div class="app-layout">
  <header class="app-header">
    <div class="header-content">
      <h1>My App</h1>
      <nav class="header-nav">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>
    </div>
  </header>
  
  <main class="app-main">
    <aside class="sidebar">
      <div class="sidebar-item">Menu 1</div>
      <div class="sidebar-item">Menu 2</div>
      <div class="sidebar-item">Menu 3</div>
    </aside>
    
    <section class="content">
      <div class="card-grid">
        <div class="card">Card 1</div>
        <div class="card">Card 2</div>
        <div class="card">Card 3</div>
        <div class="card">Card 4</div>
      </div>
    </section>
  </main>
  
  <footer class="app-footer">
    <div class="footer-content">
      <p>&copy; 2025 My App</p>
    </div>
  </footer>
</div>
```

```css
/* Grid cho bố cục tổng thể */
.app-layout {
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}

/* Flexbox cho header */
.app-header {
  background-color: #2c3e50;
  color: white;
  padding: 1rem;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.header-nav {
  display: flex;
  gap: 2rem;
}

.header-nav a {
  color: white;
  text-decoration: none;
}

/* Grid cho main content */
.app-main {
  display: grid;
  grid-template-columns: 250px 1fr;
  max-width: 1200px;
  margin: 0 auto;
  gap: 2rem;
  padding: 2rem;
}

/* Flexbox cho sidebar */
.sidebar {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.sidebar-item {
  background-color: #ecf0f1;
  padding: 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.sidebar-item:hover {
  background-color: #bdc3c7;
}

/* Grid cho card layout */
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.card {
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}

.card:hover {
  transform: translateY(-4px);
}

/* Flexbox cho footer */
.app-footer {
  background-color: #34495e;
  color: white;
  padding: 1rem;
}

.footer-content {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}
```

**Ví dụ sử dụng `display: contents` với Grid:**

```html
<div class="grid-wrapper">
  <div class="box box1">
    <div class="nested">Item A</div>
    <div class="nested">Item B</div>
    <div class="nested">Item C</div>
  </div>
  <div class="box box2">Box 2</div>
  <div class="box box3">Box 3</div>
  <div class="box box4">Box 4</div>
</div>
```

```css
.grid-wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(100px, auto);
  gap: 1rem;
  padding: 1rem;
}

.box1 {
  grid-column: 1 / 4; /* Trải qua tất cả 3 cột */
  display: contents; /* Box1 biến mất, các nested items trở thành grid items */
}

.nested {
  background-color: #e67e22;
  color: white;
  padding: 1rem;
  text-align: center;
  border-radius: 4px;
}

.box2, .box3, .box4 {
  background-color: #3498db;
  color: white;
  padding: 1rem;
  text-align: center;
  border-radius: 4px;
}
```

## Các Khái Niệm Quan Trọng Khác

### Các Hàm và Đơn Vị Grid

**`minmax()`**: Định nghĩa phạm vi kích thước cho các cột hoặc hàng

```css
.grid-container {
  display: grid;
  grid-template-columns: minmax(200px, 1fr) minmax(100px, 300px);
  /* Cột 1: tối thiểu 200px, tối đa 1fr
     Cột 2: tối thiểu 100px, tối đa 300px */
}
```

**`repeat()`**: Lặp lại một mẫu cột hoặc hàng

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 cột bằng nhau */
  grid-template-rows: repeat(3, 100px); /* 3 hàng, mỗi hàng 100px */
}
```

**`fr` unit (fraction unit)**: Đại diện cho một phần của không gian có sẵn

```css
.grid-container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr; /* Tỷ lệ 1:2:1 */
  /* Cột giữa sẽ lớn gấp đôi các cột bên */
}
```

### Box Alignment

**Ví dụ Box Alignment với Flexbox:**

```html
<div class="alignment-demo">
  <div class="flex-wrapper">
    <div class="box box1">Box 1</div>
    <div class="box box2">Box 2 với nhiều nội dung hơn</div>
    <div class="box box3">Box 3</div>
  </div>
</div>
```

```css
.flex-wrapper {
  display: flex;
  align-items: flex-end; /* Căn chỉnh các items xuống cuối container */
  min-height: 200px;
  background-color: #f8f9fa;
  padding: 1rem;
  gap: 1rem;
}

.box {
  background-color: #6c5ce7;
  color: white;
  padding: 1rem;
  text-align: center;
}

.box1 {
  align-self: stretch; /* Box1 kéo dài ra toàn bộ chiều cao */
}

.box2 {
  align-self: flex-start; /* Box2 căn chỉnh lên đầu */
}

.box3 {
  align-self: center; /* Box3 căn giữa */
}
```

**Ví dụ Box Alignment với Grid:**

```css
.grid-wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: end; /* Căn chỉnh các items xuống cuối grid area */
  grid-auto-rows: 200px;
  gap: 1rem;
  background-color: #f8f9fa;
  padding: 1rem;
}

.grid-item {
  background-color: #a29bfe;
  color: white;
  padding: 1rem;
  text-align: center;
}

.grid-item:first-child {
  align-self: stretch;
}

.grid-item:nth-child(2) {
  align-self: start;
}

.grid-item:last-child {
  align-self: center;
}
```

### Flexbox Properties Chi Tiết

**`flex-grow`, `flex-shrink`, và `flex-basis`:**

```html
<div class="flex-properties-demo">
  <div class="flex-item grow">Grow (flex-grow: 2)</div>
  <div class="flex-item shrink">Shrink (flex-shrink: 2)</div>
  <div class="flex-item basis">Basis (flex-basis: 200px)</div>
</div>
```

```css
.flex-properties-demo {
  display: flex;
  width: 600px;
  height: 100px;
  background-color: #ddd;
  gap: 10px;
  padding: 10px;
}

.flex-item {
  background-color: #fd79a8;
  color: white;
  padding: 1rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.grow {
  flex-grow: 2; /* Sẽ chiếm gấp đôi không gian trống so với các item khác */
}

.shrink {
  flex-shrink: 2; /* Sẽ co lại gấp đôi khi không gian bị hạn chế */
  width: 200px;
}

.basis {
  flex-basis: 200px; /* Kích thước ban đầu là 200px */
}
```

## Responsive Design Examples

**Ví dụ Responsive Card Layout với Grid:**

```html
<div class="responsive-cards">
  <div class="card">
    <img src="https://via.placeholder.com/300x200" alt="Card 1">
    <div class="card-content">
      <h3>Card Title 1</h3>
      <p>Card description goes here...</p>
    </div>
  </div>
  <div class="card">
    <img src="https://via.placeholder.com/300x200" alt="Card 2">
    <div class="card-content">
      <h3>Card Title 2</h3>
      <p>Card description goes here...</p>
    </div>
  </div>
  <div class="card">
    <img src="https://via.placeholder.com/300x200" alt="Card 3">
    <div class="card-content">
      <h3>Card Title 3</h3>
      <p>Card description goes here...</p>
    </div>
  </div>
</div>
```

```css
.responsive-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem;
}

.card {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
}

.card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-content {
  padding: 1.5rem;
}

.card-content h3 {
  margin: 0 0 1rem 0;
  color: #2c3e50;
}

.card-content p {
  margin: 0;
  color: #7f8c8d;
  line-height: 1.6;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .responsive-cards {
    grid-template-columns: 1fr;
    padding: 1rem;
  }
}
```

## Lời Khuyên Chung

Không có "cách đúng" hay "cách sai" khi sử dụng Flexbox hoặc Grid. Cuối cùng, việc lựa chọn phụ thuộc vào sở thích cá nhân và điều mà một nhà phát triển cảm thấy dễ dàng hơn cho nhiệm vụ cụ thể. Cách tốt nhất để học Flexbox và Grid là xây dựng nhiều dự án với cả hai và phát triển quan điểm của riêng bạn về việc sử dụng công cụ nào trong các trường hợp khác nhau.

### Tổng Kết Nhanh:

**Sử dụng Flexbox khi:**
- Bạn cần bố cục một chiều (hàng hoặc cột)
- Bạn muốn các items tự động điều chỉnh kích thước dựa trên nội dung
- Bạn cần căn chỉnh items trong container
- Bạn làm việc với navigation bars, card layouts đơn giản

**Sử dụng CSS Grid khi:**
- Bạn cần bố cục hai chiều (hàng và cột cùng lúc)
- Bạn muốn kiểm soát chính xác vị trí của các elements
- Bạn tạo layout phức tạp với các vùng được định nghĩa rõ ràng
- Bạn muốn tạo responsive layouts mà không cần media queries

**Kết hợp cả hai khi:**
- Bạn có layout phức tạp cần cả hai loại kiểm soát
- Grid cho structure tổng thể, Flexbox cho alignment và distribution bên trong các grid items

Bạn có thể tìm thêm các tài liệu hướng dẫn chuyên sâu về Flexbox alignment, ordering, và sizing, cùng với các loạt bài về CSS Grid Layout Module để hiểu rõ hơn về các lựa chọn của mình.


## Tài liệu phải đọc khi ĐÓNG CỌC LẦN 2

1. https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-using-flexbox-and-grid
1. https://css-tricks.com/css-grid-replace-flexbox/
1. https://www.youtube.com/watch?v=3elGSZSWTbM
1. https://webdesign.tutsplus.com/flexbox-vs-css-grid-which-should-you-use--cms-30184a
1. https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Relationship_of_Grid_Layout
1. https://www.samanthaming.com/flexbox30/

> ⭐ **Theo dõi [kênh Threads](https://www.threads.com/@kaitaku.88) để đọc bài mới mỗi ngày!** ⭐  

**[<== Bài Trước  ](link)          |[  Trang Chủ  ](./README.md)|           [  Bài Sau ==>](link)**
