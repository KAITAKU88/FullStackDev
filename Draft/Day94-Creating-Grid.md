# CSS Grid Layout - Hướng dẫn toàn diện về Creating a Grid

## Giới thiệu về CSS Grid Layout

**CSS Grid Layout** (còn được gọi là "Grid" hoặc "CSS Grid") là một **hệ thống bố cục dựa trên lưới hai chiều** (`two-dimensional grid system`) trong CSS. Nó đã thay đổi hoàn toàn cách chúng ta thiết kế giao diện người dùng web so với các hệ thống bố cục trước đây.

Grid được sử dụng để bố trí các khu vực chính của trang (`major page areas`) hoặc các phần tử giao diện người dùng nhỏ (`small user interface elements`). Mục đích của nó là giải quyết các vấn đề bố cục mà trước đây các nhà phát triển phải "hack" bằng cách sử dụng các phương pháp như bảng (`tables`), `float`, `positioning`, và `inline-block`. 

Mặc dù `Flexbox` cũng là một công cụ bố cục tuyệt vời, nhưng nó chỉ có **luồng một chiều** (`one-directional flow`), trong khi Grid hỗ trợ **hai chiều**, và cả hai có thể hoạt động rất tốt cùng nhau để tạo ra các bố cục linh hoạt và dễ tiếp cận.

Các trình duyệt hiện đại đã hỗ trợ nguyên bản (`native, unprefixed support`) CSS Grid từ tháng 3 năm 2017, bao gồm Chrome (trên Android), Firefox, Safari (trên iOS), và Opera.

## Các Khái niệm Quan trọng trong CSS Grid

Để hiểu rõ về CSS Grid, điều quan trọng là phải nắm vững các thuật ngữ chuyên ngành:

### Grid Container (Vùng chứa lưới)
Là phần tử HTML mà bạn áp dụng thuộc tính `display: grid` hoặc `display: inline-grid`. Khi một phần tử được khai báo là `grid container`, **tất cả các phần tử con trực tiếp** (`direct children`) của nó sẽ tự động trở thành **Grid Items** (Mục lưới).

**Ví dụ:**
```html
<div class="wrapper">
    <div>One</div>
    <div>Two</div>
    <div>Three</div>
    <div>Four</div>
    <div>Five</div>
</div>
```

```css
.wrapper {
    display: grid;
}
```

Trong ví dụ này, `.wrapper` là `grid container`, và các `div` bên trong nó (`One`, `Two`,...) là `grid items`.

**Ví dụ thực tế - Layout trang web:**
```html
<div class="page-layout">
    <header>Header</header>
    <nav>Navigation</nav>
    <main>Main Content</main>
    <aside>Sidebar</aside>
    <footer>Footer</footer>
</div>
```

```css
.page-layout {
    display: grid;
    grid-template-areas: 
        "header header header"
        "nav main aside"
        "footer footer footer";
    grid-template-rows: auto 1fr auto;
    grid-template-columns: 200px 1fr 200px;
    min-height: 100vh;
}

header { grid-area: header; background: #ff6b6b; }
nav { grid-area: nav; background: #4ecdc4; }
main { grid-area: main; background: #45b7d1; }
aside { grid-area: aside; background: #96ceb4; }
footer { grid-area: footer; background: #feca57; }
```

### Grid Item (Mục lưới)
Là các phần tử con trực tiếp của `grid container`. Các phần tử nằm sâu hơn (không phải con trực tiếp) sẽ không phải là `grid item`. Tuy nhiên, một `grid item` có thể tự nó trở thành một `grid container`, cho phép bạn tạo các lưới lồng nhau (`grids inside of grids`).

Các thuộc tính như `float`, `display: inline-block`, `display: table-cell`, `vertical-align` và `column-*` sẽ **không có tác dụng** lên một `grid item`.

**Ví dụ Grid lồng nhau:**
```html
<div class="outer-grid">
    <div class="card">
        <h3>Card Title</h3>
        <p>Card content</p>
        <button>Action</button>
    </div>
    <div class="nested-grid">
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
    </div>
</div>
```

```css
.outer-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
}

.nested-grid {
    display: grid; /* Grid item trở thành grid container */
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    background: #f0f0f0;
    padding: 15px;
}
```

### Grid Line (Đường lưới)
Là các đường phân chia ngang (`horizontal lines`) và dọc (`vertical lines`) tạo nên cấu trúc của lưới. Các đường này được đánh số (dương và âm) dựa trên chế độ viết của tài liệu (`writing mode`) – ví dụ, trong ngôn ngữ viết từ trái sang phải, đường số 1 nằm ở phía bên trái của lưới. Các đường lưới cũng có thể được **đặt tên** (`named lines`).

**Ví dụ đường lưới có tên:**
```css
.container {
    display: grid;
    grid-template-columns: [sidebar-start] 250px [sidebar-end main-start] 1fr [main-end];
    grid-template-rows: [header-start] 80px [header-end content-start] 1fr [content-end];
}

.sidebar {
    grid-column: sidebar-start / sidebar-end;
    grid-row: content-start / content-end;
}

.main-content {
    grid-column: main-start / main-end;
    grid-row: content-start / content-end;
}
```

### Grid Track (Dải lưới)
Là không gian **giữa hai đường lưới liền kề** (`space between two adjacent grid lines`). Bạn có thể hình dung chúng như các cột (`columns`) hoặc hàng (`rows`) của lưới. `Grid tracks` được định nghĩa bằng các thuộc tính `grid-template-columns` và `grid-template-rows`. Chúng có thể có **kích thước cố định** (`fixed track sizes`) (ví dụ, dùng pixel) hoặc **kích thước linh hoạt** (`flexible sizes`) (ví dụ, dùng phần trăm hoặc đơn vị `fr`).

### Grid Cell (Ô lưới)
Là đơn vị nhỏ nhất trên một lưới, giống như một ô trong bảng tính (`table cell`). Nó là không gian giữa hai đường hàng liền kề và hai đường cột liền kề.

### Grid Area (Khu vực lưới)
Là tổng không gian được bao quanh bởi bốn đường lưới. Một `grid area` có thể bao gồm bất kỳ số lượng `grid cells` nào và **phải có hình chữ nhật** (`rectangular`). Các `grid area` có thể được đặt tên và tham chiếu bằng thuộc tính `grid-template-areas`.

**Ví dụ Grid Area với tên:**
```css
.dashboard {
    display: grid;
    grid-template-areas: 
        "stats stats stats"
        "chart table table"
        "chart actions actions";
    grid-template-columns: 300px 1fr 1fr;
    grid-template-rows: 100px 300px 100px;
    gap: 15px;
}

.stats { grid-area: stats; background: #e74c3c; }
.chart { grid-area: chart; background: #3498db; }
.table { grid-area: table; background: #2ecc71; }
.actions { grid-area: actions; background: #f39c12; }
```

### Gutters / Alleys (Rãnh/Khe)
Là các khoảng trống giữa các `grid cells`. Chúng được tạo ra bằng các thuộc tính `column-gap` và `row-gap`, hoặc thuộc tính viết tắt `gap`. Không gian dành cho `gutters` sẽ được tính toán trước khi không gian được gán cho các `fr unit` linh hoạt. `Gutters` hoạt động giống như một đường lưới dày, trong suốt nhưng bạn **không thể đặt bất cứ thứ gì vào đó**.

## Tạo Lưới Cơ Bản

### 1. Xác định Grid Container

Để bắt đầu, bạn cần xác định một phần tử vùng chứa là một lưới:

```css
.wrapper {
    display: grid;
}
```

**Ví dụ so sánh `grid` vs `inline-grid`:**
```html
<div class="grid-container">Grid Container</div>
<div class="inline-grid-container">Inline Grid Container</div>
<span>Text after containers</span>
```

```css
.grid-container {
    display: grid;
    grid-template-columns: 200px 200px;
    background: lightblue;
    margin: 10px 0;
}

.inline-grid-container {
    display: inline-grid;
    grid-template-columns: 200px 200px;
    background: lightcoral;
    margin: 10px;
}
```

### 2. Định nghĩa Hàng và Cột (Grid Tracks)

Sử dụng các thuộc tính `grid-template-rows` và `grid-template-columns` để định nghĩa các dải hàng và cột trên lưới của bạn.

#### Ví dụ cơ bản với kích thước cố định:
```css
.wrapper {
    display: grid;
    grid-template-columns: 200px 200px 200px; /* Tạo 3 cột rộng 200px */
}
```

**Ví dụ thực tế - Gallery ảnh:**
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
    grid-template-columns: 250px 250px 250px;
    grid-template-rows: 200px 200px;
    gap: 15px;
    padding: 20px;
}

.photo-gallery img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
}
```

#### Đơn vị `fr` (Fractional Unit)

Đại diện cho một phần (`fraction`) của không gian có sẵn trong `grid container`. Đây là đơn vị rất hữu ích để tạo các dải lưới linh hoạt.

**Ví dụ với các cột có chiều rộng bằng nhau:**
```css
.wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr; /* 3 cột có chiều rộng bằng nhau */
}
```

**Ví dụ với kích thước không bằng nhau:**
```css
.wrapper {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr; /* Cột đầu tiên chiếm 2 phần, hai cột còn lại mỗi cột 1 phần */
}
```

**Ví dụ thực tế - Layout blog:**
```html
<div class="blog-layout">
    <article class="post">
        <h2>Bài viết chính</h2>
        <p>Nội dung bài viết...</p>
    </article>
    <aside class="sidebar">
        <h3>Sidebar</h3>
        <p>Thông tin phụ...</p>
    </aside>
    <aside class="ads">
        <h3>Quảng cáo</h3>
        <p>Banner quảng cáo...</p>
    </aside>
</div>
```

```css
.blog-layout {
    display: grid;
    grid-template-columns: 3fr 1fr 1fr; /* Bài viết chiếm 60%, mỗi sidebar 20% */
    gap: 30px;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

.post { background: #f8f9fa; padding: 20px; }
.sidebar { background: #e9ecef; padding: 15px; }
.ads { background: #dee2e6; padding: 15px; }
```

**Trộn kích thước cố định và linh hoạt:**
```css
.wrapper {
    display: grid;
    grid-template-columns: 500px 1fr 2fr;
}
```

**Ví dụ thực tế - Dashboard:**
```html
<div class="dashboard">
    <nav class="sidebar">Navigation</nav>
    <main class="content">Main Content</main>
    <aside class="widgets">Widgets</aside>
</div>
```

```css
.dashboard {
    display: grid;
    grid-template-columns: 250px 2fr 1fr; /* Sidebar cố định, content lớn, widgets nhỏ */
    height: 100vh;
    gap: 20px;
}

.sidebar { background: #2c3e50; color: white; padding: 20px; }
.content { background: #ecf0f1; padding: 20px; }
.widgets { background: #bdc3c7; padding: 20px; }
```

#### Hàm `repeat()`

Cho phép bạn lặp lại một mẫu dải lưới, giúp rút gọn cú pháp cho các lưới lớn.

**Ví dụ cơ bản:**
```css
.wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* Tương đương 1fr 1fr 1fr */
}
```

**Ví dụ với pattern phức tạp:**
```css
.wrapper {
    display: grid;
    grid-template-columns: 20px repeat(6, 1fr) 20px; /* 1 dải 20px, 6 dải 1fr, 1 dải 20px */
}
```

**Lặp lại một mẫu gồm nhiều dải:**
```css
.wrapper {
    display: grid;
    grid-template-columns: repeat(5, 1fr 2fr); /* Lặp lại mẫu (1fr 2fr) 5 lần */
}
```

**Ví dụ thực tế - Card grid responsive:**
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
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    padding: 20px;
}

.card {
    background: white;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
```

### 3. Khoảng cách giữa các ô (Gaps)

Bạn có thể tạo khoảng cách giữa các `grid cells` (gutters/alleys) bằng cách sử dụng các thuộc tính `column-gap` (khoảng cách giữa các cột) và `row-gap` (khoảng cách giữa các hàng), hoặc thuộc tính viết tắt `gap`.

**Ví dụ riêng biệt:**
```css
.wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 10px; /* Khoảng cách 10px giữa các cột */
    row-gap: 1em; /* Khoảng cách 1em giữa các hàng */
}
```

**Sử dụng `gap` shorthand:**
```css
.wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1em 10px; /* row-gap là 1em, column-gap là 10px */
}
```

**Ví dụ thực tế - Pricing cards:**
```html
<div class="pricing-grid">
    <div class="pricing-card basic">
        <h3>Basic</h3>
        <p class="price">$9/tháng</p>
        <ul>
            <li>5GB Storage</li>
            <li>Email Support</li>
        </ul>
    </div>
    <div class="pricing-card pro">
        <h3>Pro</h3>
        <p class="price">$19/tháng</p>
        <ul>
            <li>50GB Storage</li>
            <li>Priority Support</li>
            <li>Advanced Features</li>
        </ul>
    </div>
    <div class="pricing-card enterprise">
        <h3>Enterprise</h3>
        <p class="price">$49/tháng</p>
        <ul>
            <li>Unlimited Storage</li>
            <li>24/7 Support</li>
            <li>Custom Features</li>
        </ul>
    </div>
</div>
```

```css
.pricing-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    max-width: 1000px;
    margin: 40px auto;
    padding: 20px;
}

.pricing-card {
    background: white;
    border-radius: 12px;
    padding: 30px;
    text-align: center;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    transition: transform 0.3s;
}

.pricing-card:hover {
    transform: translateY(-5px);
}

/* Responsive cho mobile */
@media (max-width: 768px) {
    .pricing-grid {
        grid-template-columns: 1fr;
        gap: 20px;
    }
}
```

## Lưới Ẩn (Implicit Grid) và Lưới Hiển thị (Explicit Grid)

### Explicit Grid (Lưới hiển thị)
Bao gồm các hàng và cột được bạn **khai báo rõ ràng** (`explicitly defined`) bằng `grid-template-columns` hoặc `grid-template-rows`.

### Implicit Grid (Lưới ẩn)
Khi có nhiều `grid items` hơn số ô đã định nghĩa trong lưới hiển thị, hoặc khi một `grid item` được đặt **bên ngoài lưới hiển thị**, lưới sẽ tự động tạo thêm các dải (hàng hoặc cột) trong `implicit grid` để chứa nội dung đó.

**Ví dụ minh họa:**
```html
<div class="container">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
    <div>Item 4</div>
    <div>Item 5</div> <!-- Item này sẽ tạo hàng ẩn -->
</div>
```

```css
.container {
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* Chỉ định nghĩa 2 cột */
    grid-template-rows: 100px 100px; /* Chỉ định nghĩa 2 hàng (4 ô) */
    gap: 10px;
}
```

Theo mặc định, các dải được tạo trong `implicit grid` sẽ có kích thước tự động (`auto-sized`), dựa trên nội dung bên trong chúng.

### Xác định kích thước cho các dải ẩn

Bạn có thể định nghĩa kích thước cố định cho các dải được tạo trong `implicit grid` bằng các thuộc tính `grid-auto-rows` và `grid-auto-columns`.

**Ví dụ:**
```css
.wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 200px; /* Đảm bảo các hàng ẩn có chiều cao 200px */
}
```

**Ví dụ thực tế - Masonry-like layout:**
```html
<div class="masonry-grid">
    <article class="post short">Post ngắn</article>
    <article class="post medium">Post trung bình với nhiều nội dung hơn...</article>
    <article class="post long">Post dài với rất nhiều nội dung. Lorem ipsum dolor sit amet...</article>
    <article class="post short">Post ngắn khác</article>
    <article class="post medium">Post trung bình khác...</article>
</div>
```

```css
.masonry-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: minmax(150px, auto);
    gap: 20px;
    padding: 20px;
}

.post {
    background: white;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    padding: 20px;
}

.post.short { grid-row: span 1; }
.post.medium { grid-row: span 2; }
.post.long { grid-row: span 3; }
```

### Hàm `minmax()`

Khi thiết lập lưới hiển thị hoặc định nghĩa kích thước cho các hàng/cột tự động tạo, bạn có thể muốn các dải có kích thước tối thiểu, nhưng cũng đảm bảo chúng mở rộng để phù hợp với nội dung. Hàm `minmax()` giải quyết vấn đề này.

**Ví dụ:**
```css
.wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: minmax(100px, auto); /* Hàng ẩn tối thiểu 100px, tối đa tự động giãn theo nội dung */
}
```

**Ví dụ thực tế - Responsive card layout:**
```html
<div class="responsive-cards">
    <div class="card">
        <h3>Card 1</h3>
        <p>Nội dung ngắn</p>
    </div>
    <div class="card">
        <h3>Card 2</h3>
        <p>Nội dung dài hơn nhiều với nhiều thông tin chi tiết và mô tả đầy đủ về sản phẩm hoặc dịch vụ.</p>
    </div>
    <div class="card">
        <h3>Card 3</h3>
        <p>Nội dung trung bình</p>
    </div>
</div>
```

```css
.responsive-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    grid-auto-rows: minmax(200px, auto);
    gap: 25px;
    padding: 25px;
}

.card {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border-radius: 12px;
    padding: 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
```

Giá trị `auto` làm cho kích thước dải tự động giãn để vừa với nội dung, dựa trên ô có nội dung cao nhất.

## Định vị các Grid Items (Positioning Grid Items)

Grid cung cấp cho chúng ta các đường được đánh số để sử dụng khi định vị các phần tử.

### 1. Định vị dựa trên đường lưới (Line-based placement)

Bạn có thể đặt các phần tử vào một vị trí chính xác trên lưới bằng cách nhắm mục tiêu vào các đường lưới (thay vì các dải).

Sử dụng các thuộc tính `grid-column-start`, `grid-column-end`, `grid-row-start`, và `grid-row-end`.

**Ví dụ cơ bản:**
```css
.box1 {
    grid-column-start: 1; /* Bắt đầu ở đường cột 1 */
    grid-column-end: 4;   /* Kéo dài đến đường cột 4 */
    grid-row-start: 1;    /* Bắt đầu ở đường hàng 1 */
    grid-row-end: 3;      /* Kéo dài đến đường hàng 3 */
}
```

**Ví dụ thực tế - Layout Magazine:**
```html
<div class="magazine-layout">
    <article class="feature-story">Feature Story</article>
    <article class="secondary">Secondary Article</article>
    <aside class="sidebar">Sidebar Content</aside>
    <article class="small-1">Small Article 1</article>
    <article class="small-2">Small Article 2</article>
    <footer class="footer">Footer</footer>
</div>
```

```css
.magazine-layout {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 150px);
    gap: 15px;
    max-width: 1000px;
    margin: 0 auto;
}

.feature-story {
    grid-column: 1 / 3; /* Chiếm cột 1-2 */
    grid-row: 1 / 3;    /* Chiếm hàng 1-2 */
    background: #e74c3c;
    color: white;
    padding: 20px;
}

.secondary {
    grid-column: 3 / 5; /* Chiếm cột 3-4 */
    grid-row: 1 / 2;    /* Chiếm hàng 1 */
    background: #3498db;
    color: white;
    padding: 20px;
}

.sidebar {
    grid-column: 3 / 5; /* Chiếm cột 3-4 */
    grid-row: 2 / 4;    /* Chiếm hàng 2-3 */
    background: #2ecc71;
    color: white;
    padding: 20px;
}

.small-1 {
    grid-column: 1 / 2; /* Chiếm cột 1 */
    grid-row: 3 / 4;    /* Chiếm hàng 3 */
    background: #f39c12;
    padding: 15px;
}

.small-2 {
    grid-column: 2 / 3; /* Chiếm cột 2 */
    grid-row: 3 / 4;    /* Chiếm hàng 3 */
    background: #9b59b6;
    color: white;
    padding: 15px;
}

.footer {
    grid-column: 1 / 5; /* Chiếm tất cả cột */
    grid-row: 4 / 5;    /* Chiếm hàng 4 */
    background: #34495e;
    color: white;
    padding: 15px;
    text-align: center;
}
```

`box1` sẽ chiếm từ đường cột 1 đến 4 (nghĩa là 3 cột) và từ đường hàng 1 đến 3 (nghĩa là 2 hàng).

Nếu `grid-column-end` hoặc `grid-row-end` không được khai báo, phần tử sẽ mặc định chiếm 1 dải (`span 1 track`).

Từ khóa `span <number>` hoặc `span <name>` có thể được sử dụng để chỉ định số dải mà phần tử sẽ trải rộng hoặc trải rộng cho đến khi nó chạm đường có tên được cung cấp.

**Ví dụ với span:**
```css
.item {
    grid-column-start: 1;
    grid-column-end: span 3; /* Trải rộng 3 cột */
    grid-row-start: 2;
    grid-row-end: span 2; /* Trải rộng 2 hàng */
}
```

### 2. Viết tắt (Shorthands)

Các thuộc tính `grid-column` và `grid-row` là viết tắt cho các thuộc tính `start` và `end` tương ứng.

**Ví dụ:**
```css
.box1 {
    grid-column: 1 / 4; /* Tương đương grid-column-start: 1; grid-column-end: 4; */
    grid-row: 1 / 3;    /* Tương đương grid-row-start: 1; grid-row-end: 3; */
}
```

Giá trị trước dấu gạch chéo (`/`) là đường bắt đầu, giá trị sau dấu gạch chéo là đường kết thúc. Bạn có thể bỏ qua giá trị kết thúc nếu khu vực đó chỉ chiếm một dải.

**Ví dụ thực tế - Dashboard layout:**
```html
<div class="dashboard-grid">
    <header class="header">Dashboard Header</header>
    <nav class="nav">Navigation</nav>
    <main class="main">Main Content Area</main>
    <aside class="sidebar">Sidebar</aside>
    <section class="stats">Statistics</section>
    <section class="chart">Chart Area</section>
    <footer class="footer">Footer</footer>
</div>
```

```css
.dashboard-grid {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: 80px 40px 1fr 200px 60px;
    gap: 10px;
    height: 100vh;
    padding: 10px;
}

.header {
    grid-column: 1 / -1; /* Từ đầu đến cuối */
    grid-row: 1;
    background: #2c3e50;
    color: white;
    display: flex;
    align-items: center;
    padding: 0 20px;
}

.nav {
    grid-column: 1 / -1;
    grid-row: 2;
    background: #34495e;
    color: white;
    display: flex;
    align-items: center;
    padding: 0 20px;
}

.main {
    grid-column: 1 / 5; /* Chiếm 4 cột đầu */
    grid-row: 3;
    background: #ecf0f1;
    padding: 20px;
    overflow-y: auto;
}

.sidebar {
    grid-column: 5 / -1; /* 2 cột cuối */
    grid-row: 3;
    background: #bdc3c7;
    padding: 20px;
}

.stats {
    grid-column: 1 / 4; /* 3 cột đầu */
    grid-row: 4;
    background: #3498db;
    color: white;
    padding: 20px;
}

.chart {
    grid-column: 4 / -1; /* 3 cột cuối */
    grid-row: 4;
    background: #e74c3c;
    color: white;
    padding: 20px;
}

.footer {
    grid-column: 1 / -1;
    grid-row: 5;
    background: #95a5a6;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
}
```

### 3. `grid-area`

Thuộc tính này có thể được sử dụng để **đặt tên cho một phần tử** để nó có thể được tham chiếu bởi thuộc tính `grid-template-areas`.

Hoặc nó có thể hoạt động như một cách viết tắt ngắn hơn cho `grid-row-start / grid-column-start / grid-row-end / grid-column-end`.

**Ví dụ (đặt tên):**
```css
.item-d {
    grid-area: header;
}
```

**Ví dụ (viết tắt):**
```css
.item-d {
    grid-area: 1 / col4-start / last-line / 6;
}
```

**Ví dụ thực tế - Template Areas:**
```html
<div class="app-layout">
    <header class="app-header">
        <h1>My App</h1>
        <nav>Navigation</nav>
    </header>
    <aside class="app-sidebar">
        <ul>
            <li>Menu Item 1</li>
            <li>Menu Item 2</li>
            <li>Menu Item 3</li>
        </ul>
    </aside>
    <main class="app-main">
        <h2>Main Content</h2>
        <p>This is the main content area...</p>
    </main>
    <aside class="app-widgets">
        <div class="widget">Widget 1</div>
        <div class="widget">Widget 2</div>
    </aside>
    <footer class="app-footer">
        <p>&copy; 2024 My App. All rights reserved.</p>
    </footer>
</div>
```

```css
.app-layout {
    display: grid;
    grid-template-areas: 
        "header header header header"
        "sidebar main main widgets"
        "sidebar main main widgets"
        "footer footer footer footer";
    grid-template-columns: 200px 1fr 1fr 200px;
    grid-template-rows: 80px 1fr auto 60px;
    gap: 15px;
    min-height: 100vh;
    padding: 15px;
}

.app-header {
    grid-area: header;
    background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    border-radius: 8px;
}

.app-sidebar {
    grid-area: sidebar;
    background: #f8f9fa;
    border: 1px solid #dee2e6;
    border-radius: 8px;
    padding: 20px;
}

.app-main {
    grid-area: main;
    background: white;
    border: 1px solid #dee2e6;
    border-radius: 8px;
    padding: 30px;
    overflow-y: auto;
}

.app-widgets {
    grid-area: widgets;
    background: #f8f9fa;
    border: 1px solid #dee2e6;
    border-radius: 8px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.app-footer {
    grid-area: footer;
    background: #343a40;
    color: white;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.widget {
    background: white;
    border: 1px solid #dee2e6;
    border-radius: 6px;
    padding: 15px;
    text-align: center;
}

/* Responsive design */
@media (max-width: 768px) {
    .app-layout {
        grid-template-areas: 
            "header"
            "main"
            "sidebar"
            "widgets"
            "footer";
        grid-template-columns: 1fr;
        grid-template-rows: auto 1fr auto auto auto;
    }
}
```

## Lồng lưới (Nesting Grids) và Subgrid

### Lồng lưới thông thường

Một `grid item` có thể trở thành một `grid container`. Tuy nhiên, lưới lồng nhau này sẽ không có mối quan hệ với lưới cha của nó. Ví dụ, nó sẽ không kế thừa khoảng cách (`gap`) của lưới cha và các đường lưới trong lưới lồng nhau sẽ không thẳng hàng với các đường trong lưới cha.

**Ví dụ:**
```css
/* .box1 là một grid item của .wrapper */
.box1 {
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 3;
    display: grid; /* .box1 cũng trở thành một grid container */
    grid-template-columns: repeat(3, 1fr); /* Định nghĩa các cột riêng */
}
```

**Ví dụ thực tế - Product catalog:**
```html
<div class="catalog-grid">
    <section class="category-section electronics">
        <h2>Electronics</h2>
        <div class="products">
            <div class="product">Laptop</div>
            <div class="product">Phone</div>
            <div class="product">Tablet</div>
            <div class="product">Headphones</div>
        </div>
    </section>
    
    <section class="category-section clothing">
        <h2>Clothing</h2>
        <div class="products">
            <div class="product">T-Shirt</div>
            <div class="product">Jeans</div>
            <div class="product">Shoes</div>
            <div class="product">Jacket</div>
        </div>
    </section>
    
    <section class="category-section books">
        <h2>Books</h2>
        <div class="products">
            <div class="product">Fiction</div>
            <div class="product">Science</div>
            <div class="product">History</div>
            <div class="product">Art</div>
        </div>
    </section>
</div>
```

```css
/* Grid cha */
.catalog-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    padding: 30px;
}

.category-section {
    background: #f8f9fa;
    border-radius: 12px;
    padding: 25px;
    border: 1px solid #dee2e6;
}

.category-section h2 {
    margin: 0 0 20px 0;
    color: #495057;
    text-align: center;
}

/* Grid con - lưới lồng nhau */
.products {
    display: grid;
    grid-template-columns: 1fr 1fr; /* Grid riêng biệt, không liên quan đến grid cha */
    gap: 15px; /* Gap riêng biệt */
}

.product {
    background: white;
    border: 1px solid #dee2e6;
    border-radius: 8px;
    padding: 15px;
    text-align: center;
    transition: transform 0.2s;
}

.product:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

/* Responsive */
@media (max-width: 768px) {
    .catalog-grid {
        grid-template-columns: 1fr;
    }
    
    .products {
        grid-template-columns: 1fr;
    }
}
```

### Subgrid

Đây là một tính năng mạnh mẽ cho phép các lưới lồng nhau **kế thừa định nghĩa dải** (`track definition`) của lưới cha. Điều này có nghĩa là các `grid items` con trong `subgrid` sẽ tham gia vào hệ thống đường lưới của lưới cha.

Để sử dụng `subgrid`, thay vì định nghĩa các dải bằng `repeat(3, 1fr)`, bạn sẽ sử dụng `subgrid`:

```css
.box1 {
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 3;
    display: grid;
    grid-template-columns: subgrid; /* Kế thừa định nghĩa cột từ lưới cha */
}
```

**Ví dụ thực tế - Subgrid alignment:**
```html
<div class="main-grid">
    <div class="card-with-subgrid">
        <h3>Card Title</h3>
        <div class="card-content">
            <div class="item">Item 1</div>
            <div class="item">Item 2</div>
            <div class="item">Item 3</div>
        </div>
    </div>
    <div class="regular-card">Regular Card</div>
    <div class="regular-card">Another Card</div>
</div>
```

```css
.main-grid {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(3, 100px);
    gap: 20px;
    padding: 20px;
}

.card-with-subgrid {
    grid-column: 1 / 4; /* Chiếm 3 cột */
    grid-row: 1 / 3;    /* Chiếm 2 hàng */
    display: grid;
    grid-template-columns: subgrid; /* Kế thừa 3 cột từ grid cha */
    grid-template-rows: auto 1fr;
    background: #e3f2fd;
    border-radius: 8px;
    padding: 15px;
}

.card-content {
    display: grid;
    grid-template-columns: subgrid; /* Kế thừa 3 cột */
    gap: 10px;
}

.item {
    background: #2196f3;
    color: white;
    padding: 10px;
    border-radius: 4px;
    text-align: center;
}
```

Tại thời điểm hiện tại, `subgrid` chỉ được hỗ trợ chủ yếu trong Firefox.

## Xếp lớp các phần tử với `z-index` (Layering Items with z-index)

Nhiều `grid items` có thể chiếm cùng một ô hoặc khu vực trên lưới. Trong trường hợp này, bạn có thể sử dụng thuộc tính `z-index` để kiểm soát thứ tự xếp chồng (`stacking order`) của các phần tử chồng lấn.

Theo mặc định, phần tử xuất hiện sau trong mã nguồn sẽ hiển thị trên cùng.

**Ví dụ kiểm soát thứ tự:**
```css
.box1 {
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 3;
    z-index: 2; /* Box1 hiển thị trên Box2 */
}
.box2 {
    grid-column-start: 1;
    grid-row-start: 2;
    grid-row-end: 4;
    z-index: 1; /* Box2 hiển thị dưới Box1 */
}
```

**Ví dụ thực tế - Overlapping design:**
```html
<div class="overlap-grid">
    <div class="background-element">Background</div>
    <div class="main-content">
        <h2>Main Content</h2>
        <p>This content appears above the background element</p>
    </div>
    <div class="floating-card">
        <h3>Floating Card</h3>
        <p>This card floats above everything else</p>
    </div>
</div>
```

```css
.overlap-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 100px);
    gap: 10px;
    padding: 20px;
    position: relative;
}

.background-element {
    grid-column: 1 / 4;
    grid-row: 1 / 4;
    background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
    border-radius: 12px;
    z-index: 1;
    opacity: 0.3;
}

.main-content {
    grid-column: 1 / 3;
    grid-row: 2 / 4;
    background: white;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    z-index: 2; /* Hiển thị trên background */
}

.floating-card {
    grid-column: 3 / 5;
    grid-row: 1 / 3;
    background: #2c3e50;
    color: white;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 8px 24px rgba(0,0,0,0.2);
    z-index: 3; /* Hiển thị trên tất cả */
    transform: translateY(-10px); /* Tạo hiệu ứng nổi */
}
```

## Căn chỉnh (Alignment)

CSS Grid Layout và các tính năng căn chỉnh của **CSS Box Alignment** cho phép kiểm soát cách các phần tử căn chỉnh khi được đặt vào một `grid area`, và cách toàn bộ lưới được căn chỉnh.

### 1. Căn chỉnh Grid Items bên trong ô/khu vực (Properties for Grid Items)

#### `justify-self`
Căn chỉnh một `grid item` bên trong ô của nó theo **trục nội tuyến (ngang)** (`inline (row) axis`).

Giá trị: `start` (bắt đầu ô), `end` (kết thúc ô), `center` (giữa ô), `stretch` (chiếm toàn bộ chiều rộng ô - mặc định).

#### `align-self`
Căn chỉnh một `grid item` bên trong ô của nó theo **trục khối (dọc)** (`block (column) axis`).

Giá trị: `start`, `end`, `center`, `stretch` (chiếm toàn bộ chiều cao ô - mặc định), `baseline` (căn chỉnh theo đường cơ sở của văn bản).

#### `place-self`
Thuộc tính viết tắt để đặt cả `align-self` và `justify-self` trong một khai báo duy nhất.

**Ví dụ:** `place-self: center;` sẽ căn giữa cả ngang và dọc.

**Ví dụ thực tế - Card alignment:**
```html
<div class="alignment-demo">
    <div class="card start-start">Start Start</div>
    <div class="card center-center">Center Center</div>
    <div class="card end-end">End End</div>
    <div class="card stretch-stretch">Stretch Stretch</div>
    <div class="card center-start">Center Start</div>
    <div class="card end-center">End Center</div>
</div>
```

```css
.alignment-demo {
    display: grid;
    grid-template-columns: repeat(3, 200px);
    grid-template-rows: repeat(2, 150px);
    gap: 20px;
    padding: 20px;
    background: #f8f9fa;
}

.card {
    background: white;
    border: 2px solid #dee2e6;
    border-radius: 8px;
    padding: 15px;
    font-weight: bold;
    text-align: center;
}

.start-start { place-self: start start; }
.center-center { place-self: center center; }
.end-end { place-self: end end; }
.stretch-stretch { place-self: stretch stretch; }
.center-start { place-self: start center; }
.end-center { place-self: center end; }
```

### 2. Căn chỉnh tất cả Grid Items trong Container

#### `justify-items`
Áp dụng cho tất cả các `grid items` bên trong `container`, căn chỉnh chúng theo **trục nội tuyến (ngang)**.

Giá trị: `start`, `end`, `center`, `stretch` (mặc định).

#### `align-items`
Áp dụng cho tất cả các `grid items` bên trong `container`, căn chỉnh chúng theo **trục khối (dọc)**.

Giá trị: `stretch` (mặc định), `start`, `end`, `center`, `baseline`.

#### `place-items`
Thuộc tính viết tắt để đặt cả `align-items` và `justify-items` trong một khai báo duy nhất. Rất hữu ích cho việc căn giữa đa hướng.

**Ví dụ thực tế - Icon grid:**
```html
<div class="icon-grid">
    <div class="icon">🏠</div>
    <div class="icon">📧</div>
    <div class="icon">📱</div>
    <div class="icon">⚙️</div>
    <div class="icon">👤</div>
    <div class="icon">🔍</div>
    <div class="icon">💝</div>
    <div class="icon">📊</div>
    <div class="icon">🌟</div>
</div>
```

```css
.icon-grid {
    display: grid;
    grid-template-columns: repeat(3, 100px);
    grid-template-rows: repeat(3, 100px);
    gap: 15px;
    padding: 20px;
    place-items: center; /* Căn giữa tất cả icons */
    background: #f8f9fa;
    border-radius: 12px;
}

.icon {
    font-size: 2rem;
    background: white;
    border-radius: 50%;
    width: 70px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    transition: transform 0.2s;
}

.icon:hover {
    transform: scale(1.1);
}
```

### 3. Căn chỉnh toàn bộ Grid bên trong Container

Khi tổng kích thước của lưới nhỏ hơn `grid container`:

#### `justify-content`
Căn chỉnh toàn bộ lưới theo **trục nội tuyến (ngang)**.

Giá trị: `start`, `end`, `center`, `stretch` (thay đổi kích thước `grid items` để lưới lấp đầy chiều rộng), `space-around` (khoảng trống đều giữa các `grid items` và một nửa khoảng trống ở hai đầu), `space-between` (khoảng trống đều giữa các `grid items`, không có khoảng trống ở hai đầu), `space-evenly` (khoảng trống đều giữa các `grid items`, bao gồm cả hai đầu).

#### `align-content`
Căn chỉnh toàn bộ lưới theo **trục khối (dọc)**.

Giá trị: Tương tự như `justify-content`.

#### `place-content`
Thuộc tính viết tắt để đặt cả `align-content` và `justify-content` trong một khai báo duy nhất.

**Ví dụ thực tế - Centered content:**
```html
<div class="centered-container">
    <div class="content-grid">
        <div class="item">1</div>
        <div class="item">2</div>
        <div class="item">3</div>
        <div class="item">4</div>
    </div>
</div>
```

```css
.centered-container {
    height: 100vh;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    display: grid;
    place-content: center; /* Căn giữa toàn bộ grid */
}

.content-grid {
    display: grid;
    grid-template-columns: repeat(2, 150px);
    grid-template-rows: repeat(2, 150px);
    gap: 20px;
    padding: 30px;
    background: white;
    border-radius: 16px;
    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
}

.item {
    background: #4ecdc4;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    font-weight: bold;
    border-radius: 8px;
}
```

## Thuật toán Tự động Đặt vị trí (Auto-placement Algorithm)

### `grid-auto-flow`

Nếu bạn có các `grid items` không được đặt rõ ràng trên lưới, thuật toán tự động đặt vị trí (`auto-placement algorithm`) sẽ tự động đặt các phần tử đó. Thuộc tính này kiểm soát cách thuật toán hoạt động.

**Giá trị:**
- `row` (mặc định): Thuật toán điền vào từng hàng lần lượt, thêm các hàng mới khi cần thiết.
- `column`: Thuật toán điền vào từng cột lần lượt, thêm các cột mới khi cần thiết.
- `dense`: Thuật toán cố gắng lấp đầy các "lỗ trống" (`holes`) sớm hơn trong lưới nếu các phần tử nhỏ hơn xuất hiện sau. Lưu ý rằng `dense` chỉ thay đổi thứ tự hình ảnh của các phần tử và có thể khiến chúng xuất hiện ngoài thứ tự nguồn (`source order`), điều này không tốt cho khả năng tiếp cận (`accessibility`).

**Ví dụ thực tế - Masonry-style layout:**
```html
<div class="masonry-container">
    <div class="item tall">Tall Item</div>
    <div class="item">Normal</div>
    <div class="item">Normal</div>
    <div class="item wide">Wide Item</div>
    <div class="item">Normal</div>
    <div class="item tall">Tall Item</div>
    <div class="item">Normal</div>
    <div class="item big">Big Item</div>
    <div class="item">Normal</div>
</div>
```

```css
.masonry-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 100px;
    grid-auto-flow: row dense; /* Sử dụng dense để lấp đầy khoảng trống */
    gap: 15px;
    padding: 20px;
}

.item {
    background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
    color: white;
    padding: 20px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
}

.tall { grid-row: span 2; }
.wide { grid-column: span 2; }
.big { 
    grid-column: span 2; 
    grid-row: span 2; 
}
```

## Thuộc tính viết tắt `grid`

Thuộc tính `grid` là một cách viết tắt để đặt **tất cả các thuộc tính sau** trong một khai báo duy nhất: `grid-template-rows`, `grid-template-columns`, `grid-template-areas`, `grid-auto-rows`, `grid-auto-columns`, và `grid-auto-flow`.

**Ví dụ tương đương:**
```css
.container {
    grid: 100px 300px / 3fr 1fr;
}
/* Tương đương với: */
.container {
    grid-template-rows: 100px 300px;
    grid-template-columns: 3fr 1fr;
}
```

`grid` được khuyến nghị sử dụng thay vì `grid-template` vì `grid-template` không đặt lại các thuộc tính lưới ẩn (`implicit grid properties`).

**Ví dụ thực tế - Quick layout setup:**
```css
.quick-layout {
    /* Thiết lập nhanh một layout cơ bản */
    grid: 
        "header header header" 80px
        "sidebar main aside" 1fr
        "footer footer footer" 60px
        / 200px 1fr 200px;
}

/* Tương đương với: */
.quick-layout-expanded {
    grid-template-areas: 
        "header header header"
        "sidebar main aside"
        "footer footer footer";
    grid-template-rows: 80px 1fr 60px;
    grid-template-columns: 200px 1fr 200px;
}
```

## Các Đơn vị & Hàm Đặc biệt

### Đơn vị `fr`
Đại diện cho "một phần của không gian còn lại" (`portion of the remaining space`). Linh hoạt hơn nhiều so với các giá trị phần trăm khi kết hợp với các đơn vị khác.

**Ví dụ so sánh fr vs %:**
```html
<div class="comparison">
    <div class="grid-fr">
        <div class="item">200px</div>
        <div class="item">1fr</div>
        <div class="item">2fr</div>
    </div>
    <div class="grid-percent">
        <div class="item">200px</div>
        <div class="item">33.33%</div>
        <div class="item">66.67%</div>
    </div>
</div>
```

```css
.comparison {
    display: grid;
    grid-template-rows: 1fr 1fr;
    gap: 20px;
    height: 300px;
    padding: 20px;
}

.grid-fr, .grid-percent {
    display: grid;
    grid-template-columns: 200px 1fr 2fr; /* Fr tự động tính toán không gian còn lại */
    gap: 10px;
    background: #f8f9fa;
    padding: 15px;
    border-radius: 8px;
}

.grid-percent {
    grid-template-columns: 200px 33.33% 66.67%; /* % có thể gây overflow */
}

.item {
    background: #007bff;
    color: white;
    padding: 15px;
    text-align: center;
    border-radius: 4px;
}
```

### Từ khóa Kích thước (Sizing Keywords)

#### `min-content`
Kích thước tối thiểu của nội dung (`minimum size of the content`). Ví dụ, với câu "E pluribus unum", `min-content` có thể là chiều rộng của từ "pluribus".

#### `max-content`
Kích thước tối đa của nội dung (`maximum size of the content`). Ví dụ, với câu "E pluribus unum", `max-content` là chiều dài của toàn bộ câu.

#### `auto`
Giống `fr unit` nhưng "thua" trong cuộc chiến định kích thước so với `fr unit` khi phân bổ không gian còn lại.

**Ví dụ thực tế - Content-based sizing:**
```html
<div class="content-sizing-demo">
    <div class="item min-content">
        <p>This is a very long text that demonstrates min-content behavior</p>
    </div>
    <div class="item max-content">
        <p>Short text</p>
    </div>
    <div class="item auto-size">
        <p>Auto sizing content</p>
    </div>
</div>
```

```css
.content-sizing-demo {
    display: grid;
    grid-template-columns: min-content max-content auto;
    gap: 20px;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 8px;
}

.item {
    background: white;
    border: 2px solid #dee2e6;
    border-radius: 8px;
    padding: 15px;
    overflow: hidden;
}

.item p {
    margin: 0;
    word-wrap: break-word;
}
```

### Các Hàm Định kích thước (Sizing Functions)

#### `fit-content()`
Sử dụng không gian có sẵn, nhưng không bao giờ nhỏ hơn `min-content` và không bao giờ lớn hơn `max-content`.

#### `minmax()`
Đặt giá trị tối thiểu và tối đa cho kích thước dải. Rất hữu ích để đảm bảo cột không bị co lại quá mức.

**Ví dụ:** `grid-template-columns: minmax(100px, 1fr) 3fr;`

#### `min()` và `max()`
Các hàm tương ứng để lấy giá trị nhỏ nhất hoặc lớn nhất.

**Ví dụ thực tế - Responsive columns:**
```html
<div class="responsive-demo">
    <div class="sidebar">
        <h3>Sidebar</h3>
        <p>Fixed width sidebar that respects screen size</p>
    </div>
    <div class="main-content">
        <h2>Main Content</h2>
        <p>This content area grows and shrinks responsively</p>
    </div>
    <div class="widget">
        <h3>Widget</h3>
        <p>Flexible widget area</p>
    </div>
</div>
```

```css
.responsive-demo {
    display: grid;
    grid-template-columns: 
        minmax(200px, 300px)  /* Sidebar: min 200px, max 300px */
        minmax(300px, 2fr)    /* Main: min 300px, grows with 2fr */
        fit-content(250px);   /* Widget: max 250px, fits content */
    gap: 20px;
    padding: 20px;
    min-height: 400px;
}

.sidebar {
    background: #e3f2fd;
    padding: 20px;
    border-radius: 8px;
}

.main-content {
    background: #f3e5f5;
    padding: 20px;
    border-radius: 8px;
}

.widget {
    background: #e8f5e8;
    padding: 20px;
    border-radius: 8px;
}
```

### Hàm `repeat()` và Từ khóa

`repeat()` có thể kết hợp với các từ khóa `auto-fill` và `auto-fit` để tạo các cột linh hoạt mà không cần `media queries`.

#### Ví dụ nổi tiếng:
```css
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
```

`auto-fill` sẽ điền càng nhiều cột càng tốt vào một hàng, ngay cả khi chúng trống. `auto-fit` sẽ điều chỉnh các cột hiện có để lấp đầy không gian thay vì tạo các cột trống.

**Ví dụ thực tế - Auto-responsive grid:**
```html
<div class="auto-grid">
    <div class="card">
        <h3>Card 1</h3>
        <p>Auto-responsive card content</p>
    </div>
    <div class="card">
        <h3>Card 2</h3>
        <p>Automatically adjusts to screen size</p>
    </div>
    <div class="card">
        <h3>Card 3</h3>
        <p>No media queries needed!</p>
    </div>
    <div class="card">
        <h3>Card 4</h3>
        <p>Pure CSS Grid magic</p>
    </div>
    <div class="card">
        <h3>Card 5</h3>
        <p>Responsive by default</p>
    </div>
</div>
```

```css
.auto-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 25px;
    padding: 25px;
}

.card {
    background: white;
    border: 1px solid #e0e0e0;
    border-radius: 12px;
    padding: 25px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    transition: transform 0.3s, box-shadow 0.3s;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.15);
}

.card h3 {
    margin: 0 0 15px 0;
    color: #333;
}

.card p {
    margin: 0;
    color: #666;
    line-height: 1.6;
}
```

**So sánh auto-fill vs auto-fit:**
```html
<div class="comparison-container">
    <div class="demo-section">
        <h3>auto-fill (tạo cột trống)</h3>
        <div class="auto-fill-grid">
            <div class="item">1</div>
            <div class="item">2</div>
            <div class="item">3</div>
        </div>
    </div>
    
    <div class="demo-section">
        <h3>auto-fit (mở rộng cột hiện có)</h3>
        <div class="auto-fit-grid">
            <div class="item">1</div>
            <div class="item">2</div>
            <div class="item">3</div>
        </div>
    </div>
</div>
```

```css
.comparison-container {
    padding: 20px;
    background: #f8f9fa;
}

.demo-section {
    margin-bottom: 30px;
    background: white;
    padding: 20px;
    border-radius: 8px;
}

.auto-fill-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 15px;
    border: 2px dashed #007bff;
    padding: 15px;
}

.auto-fit-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 15px;
    border: 2px dashed #28a745;
    padding: 15px;
}

.item {
    background: #007bff;
    color: white;
    padding: 20px;
    text-align: center;
    border-radius: 8px;
    font-weight: bold;
}

.auto-fit-grid .item {
    background: #28a745;
}
```

## Hỗ trợ Trình duyệt (Browser Support)

- Hầu hết các trình duyệt máy tính và di động hiện đại (Chrome, Firefox, Safari, Opera, Android Chrome, Android Firefox, iOS Safari) đều hỗ trợ CSS Grid Layout.
- Internet Explorer 10 và 11 cũng hỗ trợ nhưng với một triển khai cũ hơn và cú pháp lỗi thời (`outdated syntax`).
- Tính năng `subgrid` hiện chủ yếu chỉ được hỗ trợ trong Firefox.
- Khả năng **hoạt ảnh hóa** (`animation`) các thuộc tính Grid còn hạn chế: chỉ có `(grid-)gap`, `(grid-)row-gap`, `(grid-)column-gap` là được hỗ trợ rộng rãi, còn `grid-template-columns` và `grid-template-rows` thì chưa.

**Ví dụ fallback cho IE:**
```css
/* Fallback cho trình duyệt cũ */
.legacy-layout {
    /* Flexbox fallback */
    display: flex;
    flex-wrap: wrap;
}

.legacy-layout .item {
    flex: 1 1 300px;
    margin: 10px;
}

/* Progressive enhancement với Grid */
@supports (display: grid) {
    .legacy-layout {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 20px;
    }
    
    .legacy-layout .item {
        flex: none;
        margin: 0;
    }
}
```

## Công cụ Phát triển để Kiểm tra CSS Grid (Chrome DevTools)

Các công cụ phát triển (`developer tools`) của trình duyệt là vô cùng hữu ích để trực quan hóa và gỡ lỗi (`debug`) các bố cục CSS Grid.

### 1. Phát hiện Grids
Khi một phần tử HTML có `display: grid` hoặc `display: inline-grid` được áp dụng, bạn sẽ thấy một **biểu tượng lưới** (`grid badge`) bên cạnh nó trong bảng `Elements` của Chrome DevTools.

Nhấp vào biểu tượng này để **bật/tắt lớp phủ lưới** (`grid overlay`) trên trang, hiển thị vị trí các đường lưới và dải của nó. Tương tự, có biểu tượng `subgrid` cho `subgrid`.

### 2. Bảng Layout (Layout Pane)
Khi có lưới trên trang, bảng `Layout` (trong tab `Elements`) sẽ bao gồm một phần `Grid` chứa nhiều tùy chọn để xem lưới đó.

### 3. Grid Editor
Trong bảng `Elements` > `Styles`, bạn có thể nhấp vào nút `Grid Editor` bên cạnh `display: grid`.

`Grid Editor` cho phép bạn **căn chỉnh các `grid items` và nội dung của chúng bằng cách nhấp vào nút** thay vì phải gõ các quy tắc CSS (`align-*` và `justify-*`).

### 4. Tùy chọn Hiển thị Lớp phủ (Overlay Display Settings)

- **Hiển thị số đường (Show line numbers)**: Mặc định, các số dương và âm của đường lưới được hiển thị.
- **Ẩn nhãn đường (Hide line labels)**: Ẩn các số đường.
- **Hiển thị tên đường (Show line names)**: Hiển thị tên đường thay vì số, hữu ích cho các lưới có tên đường.
- **Hiển thị kích thước dải (Show track sizes)**: Hiển thị `[kích thước được tác giả định nghĩa] - [kích thước tính toán]` (Authored size - Computed size) trong nhãn đường.
- **Hiển thị tên khu vực (Show area names)**: Hiển thị tên các `grid areas`.
- **Mở rộng đường lưới (Extend grid lines)**: Mở rộng các đường lưới ra đến cạnh của khung nhìn (`viewport`) dọc theo mỗi trục.

### 5. Lớp phủ Lưới (Grid Overlays)
Phần này chứa danh sách các lưới có mặt trên trang, cho phép bạn **bật/tắt hiển thị lớp phủ của nhiều lưới** cùng lúc, mỗi lưới có thể có màu sắc khác nhau.

Bạn có thể tùy chỉnh màu lớp phủ lưới bằng cách nhấp vào bộ chọn màu (`color picker`).

Nhấp vào biểu tượng nổi bật (`highlight icon`) để ngay lập tức nổi bật phần tử HTML, cuộn đến nó trên trang và chọn nó trong bảng `Elements`.

## Ví dụ Tổng hợp - Website Layout Hoàn chỉnh

Để kết thúc hướng dẫn này, đây là một ví dụ tổng hợp về cách sử dụng CSS Grid để tạo ra một layout website hoàn chỉnh:

```html
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Grid Website Layout</title>
</head>
<body>
    <div class="site-container">
        <header class="site-header">
            <div class="logo">Logo</div>
            <nav class="main-nav">
                <a href="#">Trang chủ</a>
                <a href="#">Sản phẩm</a>
                <a href="#">Về chúng tôi</a>
                <a href="#">Liên hệ</a>
            </nav>
            <div class="user-actions">
                <button>Đăng nhập</button>
                <button>Đăng ký</button>
            </div>
        </header>
        
        <main class="main-content">
            <section class="hero">
                <h1>Chào mừng đến với website của chúng tôi</h1>
                <p>Khám phá những sản phẩm tuyệt vời</p>
                <button class="cta-button">Bắt đầu ngay</button>
            </section>
            
            <section class="features">
                <div class="feature-card">
                    <h3>Tính năng 1</h3>
                    <p>Mô tả tính năng đầu tiên</p>
                </div>
                <div class="feature-card">
                    <h3>Tính năng 2</h3>
                    <p>Mô tả tính năng thứ hai</p>
                </div>
                <div class="feature-card">
                    <h3>Tính năng 3</h3>
                    <p>Mô tả tính năng thứ ba</p>
                </div>
            </section>
        </main>
        
        <aside class="sidebar">
            <div class="widget">
                <h3>Tin tức mới nhất</h3>
                <ul>
                    <li>Tin tức 1</li>
                    <li>Tin tức 2</li>
                    <li>Tin tức 3</li>
                </ul>
            </div>
            
            <div class="widget">
                <h3>Liên kết hữu ích</h3>
                <ul>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Hỗ trợ</a></li>
                    <li><a href="#">Tài liệu</a></li>
                </ul>
            </div>
        </aside>
        
        <footer class="site-footer">
            <div class="footer-content">
                <div class="footer-section">
                    <h4>Về công ty</h4>
                    <p>Thông tin về công ty của chúng tôi</p>
                </div>
                <div class="footer-section">
                    <h4>Liên hệ</h4>
                    <p>Email: info@company.com</p>
                    <p>Phone: (123) 456-7890</p>
                </div>
                <div class="footer-section">
                    <h4>Theo dõi chúng tôi</h4>
                    <div class="social-links">
                        <a href="#">Facebook</a>
                        <a href="#">Twitter</a>
                        <a href="#">Instagram</a>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2024 Tên công ty. Tất cả quyền được bảo lưu.</p>
            </div>
        </footer>
    </div>
</body>
</html>
```

```css
/* Reset và base styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: #333;
}

/* Main grid container */
.site-container {
    display: grid;
    grid-template-areas: 
        "header header"
        "main sidebar"
        "footer footer";
    grid-template-columns: 1fr 300px;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
    gap: 20px;
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
}

/* Header */
.site-header {
    grid-area: header;
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    gap: 20px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 15px 30px;
    border-radius: 12px;
}

.logo {
    font-size: 1.5rem;
    font-weight: bold;
}

.main-nav {
    display: grid;
    grid-template-columns: repeat(4, auto);
    gap: 25px;
    justify-content: center;
}

.main-nav a {
    color: white;
    text-decoration: none;
    padding: 8px 16px;
    border-radius: 6px;
    transition: background-color 0.3s;
}

.main-nav a:hover {
    background-color: rgba(255, 255, 255, 0.2);
}

.user-actions {
    display: grid;
    grid-template-columns: auto auto;
    gap: 10px;
}

.user-actions button {
    padding: 8px 16px;
    border: 1px solid white;
    background: transparent;
    color: white;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s;
}

.user-actions button:hover {
    background: white;
    color: #667eea;
}

/* Main content */
.main-content {
    grid-area: main;
    display: grid;
    gap: 30px;
}

.hero {
    background: linear-gradient(135deg, #ff6b6b 0%, #feca57 100%);
    color: white;
    padding: 60px 40px;
    border-radius: 12px;
    text-align: center;
}

.hero h1 {
    font-size: 2.5rem;
    margin-bottom: 15px;
}

.hero p {
    font-size: 1.2rem;
    margin-bottom: 25px;
}

.cta-button {
    background: white;
    color: #ff6b6b;
    border: none;
    padding: 15px 30px;
    font-size: 1.1rem;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
    transition: transform 0.3s;
}

.cta-button:hover {
    transform: translateY(-2px);
}

.features {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 25px;
}

.feature-card {
    background: white;
    border: 1px solid #e0e0e0;
    border-radius: 12px;
    padding: 30px;
    text-align: center;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
}

.feature-card:hover {
    transform: translateY(-5px);
}

.feature-card h3 {
    color: #4ecdc4;
    margin-bottom: 15px;
}

/* Sidebar */
.sidebar {
    grid-area: sidebar;
    display: grid;
    gap: 20px;
    align-content: start;
}

.widget {
    background: white;
    border: 1px solid #e0e0e0;
    border-radius: 12px;
    padding: 25px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.widget h3 {
    color: #2c3e50;
    margin-bottom: 15px;
    border-bottom: 2px solid #4ecdc4;
    padding-bottom: 8px;
}

.widget ul {
    list-style: none;
}

.widget li {
    padding: 8px 0;
    border-bottom: 1px solid #f0f0f0;
}

.widget li:last-child {
    border-bottom: none;
}

.widget a {
    color: #667eea;
    text-decoration: none;
}

.widget a:hover {
    text-decoration: underline;
}

/* Footer */
.site-footer {
    grid-area: footer;
    background: #2c3e50;
    color: white;
    border-radius: 12px;
    overflow: hidden;
}

.footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
    padding: 40px;
}

.footer-section h4 {
    color: #4ecdc4;
    margin-bottom: 15px;
}

.social-links {
    display: grid;
    grid-template-columns: repeat(3, auto);
    gap: 15px;
    justify-content: start;
}

.social-links a {
    color: #4ecdc4;
    text-decoration: none;
    padding: 5px 10px;
    border: 1px solid #4ecdc4;
    border-radius: 4px;
    transition: all 0.3s;
}

.social-links a:hover {
    background: #4ecdc4;
    color: white;
}

.footer-bottom {
    background: #34495e;
    padding: 20px;
    text-align: center;
    border-top: 1px solid #4ecdc4;
}

/* Responsive design */
@media (max-width: 768px) {
    .site-container {
        grid-template-areas: 
            "header"
            "main"
            "sidebar"
            "footer";
        grid-template-columns: 1fr;
        gap: 15px;
        padding: 15px;
    }
    
    .site-header {
        grid-template-columns: 1fr;
        gap: 15px;
        text-align: center;
    }
    
    .main-nav {
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;
    }
    
    .user-actions {
        justify-content: center;
    }
    
    .hero {
        padding: 40px 20px;
    }
    
    .hero h1 {
        font-size: 2rem;
    }
    
    .features {
        grid-template-columns: 1fr;
    }
    
    .footer-content {
        grid-template-columns: 1fr;
        gap: 20px;
        padding: 30px 20px;
    }
    
    .social-links {
        justify-content: center;
    }
}

@media (max-width: 480px) {
    .main-nav {
        grid-template-columns: 1fr;
    }
    
    .hero h1 {
        font-size: 1.5rem;
    }
    
    .hero p {
        font-size: 1rem;
    }
}
```

## Kết luận

CSS Grid Layout là một công cụ mạnh mẽ và linh hoạt cho việc tạo ra các layout web hiện đại. Với khả năng kiểm soát chính xác vị trí của các phần tử trong không gian hai chiều, Grid đã thay đổi cách chúng ta tiếp cận thiết kế web.

### Những điểm chính cần nhớ:

1. **Grid vs Flexbox**: Grid cho layout 2D, Flexbox cho 1D - chúng bổ trợ cho nhau
2. **Terminology**: Hiểu rõ các khái niệm Grid Container, Grid Items, Grid Lines, Tracks, Cells, và Areas
3. **Responsive**: Sử dụng `auto-fit`, `auto-fill`, và `minmax()` để tạo layout responsive mà không cần media queries
4. **Alignment**: Grid cung cấp control hoàn toàn về alignment cho cả items và content
5. **Browser Support**: Hỗ trợ tốt trên tất cả trình duyệt hiện đại
6. **DevTools**: Sử dụng Grid Inspector để debug và visualize layouts

Grid không chỉ giải quyết các vấn đề layout cũ mà còn mở ra những khả năng thiết kế mới mà trước đây rất khó thực hiện. Hãy thực hành với các ví dụ trong tài liệu này và khám phá thêm những tính năng mạnh mẽ của CSS Grid!

## Tài liệu phải đọc khi ĐÓNG CỌC LẦN 2

1. https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-creating-a-grid
1. https://css-tricks.com/snippets/css/complete-guide-grid/
1. https://www.youtube.com/watch?v=8_153Zz4YI8&ab_channel=WesBos
1. https://developer.chrome.com/docs/devtools/css/grid/
1. https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout
1. https://www.youtube.com/watch?v=0m5qgfX2TVQ&ab_channel=PeterSommerhoff1. 

> ⭐ **Theo dõi [kênh Threads](https://www.threads.com/@kaitaku.88) để đọc bài mới mỗi ngày!** ⭐  

**[<== Bài Trước  ](link)          |[  Trang Chủ  ](./README.md)|           [  Bài Sau ==>](link)**