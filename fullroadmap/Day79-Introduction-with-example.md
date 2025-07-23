# Hướng dẫn HTML & CSS với Ví dụ Chi tiết

## I. HTML: Cấu trúc nội dung web

### 1. Cấu trúc tài liệu HTML cơ bản

Mọi tài liệu HTML đều có cấu trúc cơ bản như sau:

```html
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Trang web của tôi</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>Chào mừng đến với trang web của tôi</h1>
        <nav>
            <ul>
                <li><a href="#home">Trang chủ</a></li>
                <li><a href="#about">Giới thiệu</a></li>
                <li><a href="#contact">Liên hệ</a></li>
            </ul>
        </nav>
    </header>
    
    <main>
        <section id="home">
            <h2>Trang chủ</h2>
            <p>Đây là nội dung trang chủ</p>
        </section>
    </main>
    
    <footer>
        <p>&copy; 2024 Trang web của tôi</p>
    </footer>
</body>
</html>
```

**Giải thích:**
- `<!DOCTYPE html>`: Khai báo loại tài liệu HTML5
- `<html lang="vi">`: Phần tử gốc, thuộc tính `lang` giúp trình duyệt hiểu ngôn ngữ
- `<meta charset="UTF-8">`: Mã hóa ký tự để hiển thị tiếng Việt chính xác
- `<meta name="viewport"...>`: Thiết yếu cho thiết kế responsive

### 2. Các phần tử HTML quan trọng với ví dụ

#### a) Phần tử phân đoạn nội dung (Semantic Elements)

```html
<!-- Article - Bài viết độc lập -->
<article class="blog-post">
    <header>
        <h2>Học HTML từ cơ bản</h2>
        <p>Đăng ngày <time datetime="2024-01-15">15/01/2024</time></p>
    </header>
    
    <p>HTML là ngôn ngữ đánh dấu siêu văn bản...</p>
    
    <aside>
        <h3>Ghi chú</h3>
        <p>HTML viết tắt của HyperText Markup Language</p>
    </aside>
    
    <footer>
        <p>Tác giả: Nguyễn Văn A</p>
    </footer>
</article>

<!-- Section - Phần nội dung có chủ đề -->
<section class="services">
    <h2>Dịch vụ của chúng tôi</h2>
    <div class="service-item">
        <h3>Thiết kế web</h3>
        <p>Tạo trang web đẹp và chuyên nghiệp</p>
    </div>
</section>
```

#### b) Danh sách và bảng

```html
<!-- Danh sách không thứ tự -->
<ul class="menu">
    <li>Trang chủ</li>
    <li>Sản phẩm
        <ul class="submenu">
            <li>Laptop</li>
            <li>Điện thoại</li>
        </ul>
    </li>
    <li>Liên hệ</li>
</ul>

<!-- Danh sách có thứ tự -->
<ol class="steps">
    <li>Đăng ký tài khoản</li>
    <li>Xác nhận email</li>
    <li>Hoàn tất thông tin cá nhân</li>
</ol>

<!-- Bảng dữ liệu -->
<table class="price-table">
    <caption>Bảng giá sản phẩm</caption>
    <thead>
        <tr>
            <th>Sản phẩm</th>
            <th>Giá</th>
            <th>Khuyến mãi</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>iPhone 15</td>
            <td>25.000.000đ</td>
            <td>Giảm 10%</td>
        </tr>
        <tr>
            <td>Samsung Galaxy S24</td>
            <td>20.000.000đ</td>
            <td>Tặng tai nghe</td>
        </tr>
    </tbody>
</table>
```

#### c) Biểu mẫu (Forms)

```html
<form class="contact-form" action="/submit" method="POST">
    <fieldset>
        <legend>Thông tin liên hệ</legend>
        
        <div class="form-group">
            <label for="fullname">Họ và tên:</label>
            <input type="text" id="fullname" name="fullname" required>
        </div>
        
        <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
        </div>
        
        <div class="form-group">
            <label for="phone">Số điện thoại:</label>
            <input type="tel" id="phone" name="phone">
        </div>
        
        <div class="form-group">
            <label for="gender">Giới tính:</label>
            <select id="gender" name="gender">
                <option value="">-- Chọn giới tính --</option>
                <option value="male">Nam</option>
                <option value="female">Nữ</option>
                <option value="other">Khác</option>
            </select>
        </div>
        
        <div class="form-group">
            <label for="message">Tin nhắn:</label>
            <textarea id="message" name="message" rows="4" cols="50"></textarea>
        </div>
        
        <div class="form-group">
            <input type="checkbox" id="newsletter" name="newsletter">
            <label for="newsletter">Đăng ký nhận bản tin</label>
        </div>
        
        <button type="submit">Gửi thông tin</button>
    </fieldset>
</form>
```

#### d) Hình ảnh và đa phương tiện

```html
<!-- Hình ảnh responsive với nhiều kích thước -->
<picture>
    <source media="(max-width: 768px)" srcset="image-mobile.jpg">
    <source media="(max-width: 1200px)" srcset="image-tablet.jpg">
    <img src="image-desktop.jpg" alt="Mô tả hình ảnh" loading="lazy">
</picture>

<!-- Video với nhiều định dạng -->
<video controls width="100%" poster="video-thumbnail.jpg">
    <source src="video.mp4" type="video/mp4">
    <source src="video.webm" type="video/webm">
    <p>Trình duyệt của bạn không hỗ trợ video HTML5.</p>
</video>

<!-- Audio -->
<audio controls>
    <source src="audio.mp3" type="audio/mpeg">
    <source src="audio.ogg" type="audio/ogg">
    <p>Trình duyệt của bạn không hỗ trợ audio HTML5.</p>
</audio>
```

## II. CSS: Tạo kiểu cho trang web

### 1. CSS Box Model - Giải thích chi tiết

Mô hình hộp CSS là nền tảng để hiểu cách các phần tử được hiển thị:

```css
.box-example {
    width: 200px;           /* Chiều rộng nội dung */
    height: 100px;          /* Chiều cao nội dung */
    padding: 20px;          /* Khoảng đệm bên trong */
    border: 5px solid blue; /* Viền */
    margin: 15px;           /* Khoảng cách bên ngoài */
    
    /* Tổng chiều rộng = width + padding*2 + border*2 + margin*2 
       = 200 + 40 + 10 + 30 = 280px */
}

/* Box-sizing: border-box giúp tính toán dễ hơn */
.box-easier {
    box-sizing: border-box; /* Bao gồm padding và border trong width */
    width: 200px;           /* Tổng chiều rộng chỉ là 200px */
    padding: 20px;
    border: 5px solid red;
    margin: 15px;           /* Chỉ margin được tính thêm */
}
```

### 2. Selectors - Các ví dụ thực tế

```css
/* Basic Selectors */
* { margin: 0; padding: 0; }                    /* Reset tất cả */
body { font-family: Arial, sans-serif; }        /* Chọn thẻ body */
h1, h2, h3 { color: #333; }                    /* Chọn nhiều thẻ */

/* Class và ID */
.highlight { background-color: yellow; }        /* Class */
#header { background-color: #f0f0f0; }         /* ID */
div.container { max-width: 1200px; }           /* Thẻ div có class container */

/* Descendant và Child selectors */
.menu li { display: inline-block; }            /* li bên trong .menu */
.menu > li { margin-right: 20px; }             /* li con trực tiếp của .menu */

/* Sibling selectors */
h2 + p { margin-top: 0; }                      /* p ngay sau h2 */
h2 ~ p { color: #666; }                        /* Tất cả p sau h2 */

/* Pseudo-classes */
a:hover { color: red; }                        /* Khi hover vào link */
li:first-child { font-weight: bold; }          /* Li đầu tiên */
li:nth-child(odd) { background: #f9f9f9; }     /* Li lẻ */
li:nth-child(3n) { color: blue; }              /* Mỗi li thứ 3 */

/* Pseudo-elements */
p::first-line { font-weight: bold; }           /* Dòng đầu tiên */
p::before { content: ">> "; }                  /* Thêm nội dung trước */
p::after { content: " <<"; }                   /* Thêm nội dung sau */

/* Attribute selectors */
input[type="text"] { border: 1px solid #ccc; } /* Input type text */
a[href^="https"] { color: green; }             /* Link https */
img[alt*="logo"] { width: 100px; }             /* Alt chứa "logo" */
```

### 3. Layout Techniques - Kỹ thuật bố cục

#### a) Flexbox - Bố cục linh hoạt

```css
/* Container flex */
.flex-container {
    display: flex;
    justify-content: space-between;  /* Căn đều hai đầu */
    align-items: center;            /* Căn giữa theo chiều dọc */
    flex-wrap: wrap;                /* Cho phép xuống hàng */
    gap: 20px;                      /* Khoảng cách giữa items */
}

/* Flex items */
.flex-item {
    flex: 1;                        /* Chia đều không gian */
}

.flex-item:first-child {
    flex: 2;                        /* Item đầu chiếm 2 phần */
}

/* Ví dụ: Navigation bar */
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background: #333;
}

.navbar .logo {
    color: white;
    font-size: 1.5rem;
}

.navbar .nav-links {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.navbar .nav-links a {
    color: white;
    text-decoration: none;
}
```

#### b) CSS Grid - Bố cục lưới

```css
/* Grid container */
.grid-container {
    display: grid;
    grid-template-columns: 200px 1fr 200px;    /* 3 cột: cố định, linh hoạt, cố định */
    grid-template-rows: auto 1fr auto;         /* 3 hàng: auto, linh hoạt, auto */
    gap: 20px;
    min-height: 100vh;
}

/* Grid areas */
.grid-container {
    grid-template-areas: 
        "header header header"
        "sidebar main ads"
        "footer footer footer";
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.ads { grid-area: ads; }
.footer { grid-area: footer; }

/* Responsive grid */
.product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    padding: 2rem;
}
```

### 4. Responsive Design - Thiết kế đáp ứng

```css
/* Mobile First Approach */
/* Styles cho mobile (mặc định) */
.container {
    padding: 1rem;
    max-width: 100%;
}

.grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
}

/* Tablet và lớn hơn */
@media screen and (min-width: 768px) {
    .container {
        padding: 2rem;
        max-width: 1200px;
        margin: 0 auto;
    }
    
    .grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
    }
}

/* Desktop */
@media screen and (min-width: 1024px) {
    .grid {
        grid-template-columns: repeat(3, 1fr);
    }
    
    .text-large {
        font-size: 1.2rem;
    }
}

/* Print styles */
@media print {
    .no-print {
        display: none;
    }
    
    body {
        font-size: 12pt;
        color: black;
    }
}
```

### 5. Animation và Transitions

```css
/* Transition - Hiệu ứng chuyển đổi */
.button {
    background-color: #007bff;
    color: white;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.button:hover {
    background-color: #0056b3;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

/* Animation với @keyframes */
@keyframes slideIn {
    from {
        transform: translateX(-100%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}

.slide-in-element {
    animation: slideIn 0.5s ease-out;
}

/* Loading spinner */
@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

.spinner {
    width: 40px;
    height: 40px;
    border: 4px solid #f3f3f3;
    border-top: 4px solid #3498db;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}
```

### 6. CSS Variables - Biến CSS

```css
/* Định nghĩa biến trong :root */
:root {
    --primary-color: #007bff;
    --secondary-color: #6c757d;
    --success-color: #28a745;
    --danger-color: #dc3545;
    
    --font-size-base: 1rem;
    --font-size-large: 1.25rem;
    --font-size-small: 0.875rem;
    
    --spacing-xs: 0.25rem;
    --spacing-sm: 0.5rem;
    --spacing-md: 1rem;
    --spacing-lg: 1.5rem;
    --spacing-xl: 3rem;
    
    --border-radius: 0.375rem;
    --box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
}

/* Sử dụng biến */
.card {
    background: white;
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
    padding: var(--spacing-lg);
    margin-bottom: var(--spacing-md);
}

.btn-primary {
    background-color: var(--primary-color);
    color: white;
    padding: var(--spacing-sm) var(--spacing-md);
    border: none;
    border-radius: var(--border-radius);
}

/* Dark mode với biến */
@media (prefers-color-scheme: dark) {
    :root {
        --primary-color: #0d6efd;
        --text-color: #fff;
        --bg-color: #212529;
    }
}
```

## III. Ví dụ tích hợp HTML + CSS

### 1. Card Component hoàn chỉnh

```html
<!-- HTML -->
<div class="card">
    <img src="product.jpg" alt="Sản phẩm" class="card-image">
    <div class="card-content">
        <h3 class="card-title">Tên sản phẩm</h3>
        <p class="card-description">Mô tả ngắn về sản phẩm này...</p>
        <div class="card-price">
            <span class="price-current">500.000đ</span>
            <span class="price-old">600.000đ</span>
        </div>
        <button class="btn btn-primary">Mua ngay</button>
    </div>
</div>
```

```css
/* CSS */
.card {
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    max-width: 300px;
}

.card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.card-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.card-content {
    padding: 1.5rem;
}

.card-title {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: #333;
}

.card-description {
    color: #666;
    line-height: 1.5;
    margin-bottom: 1rem;
}

.card-price {
    margin-bottom: 1rem;
}

.price-current {
    font-size: 1.25rem;
    font-weight: 700;
    color: #e74c3c;
}

.price-old {
    font-size: 1rem;
    text-decoration: line-through;
    color: #999;
    margin-left: 0.5rem;
}

.btn {
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.3s ease;
}

.btn-primary {
    background-color: #007bff;
    color: white;
}

.btn-primary:hover {
    background-color: #0056b3;
}
```

### 2. Navigation responsive

```html
<!-- HTML -->
<nav class="navbar">
    <div class="nav-container">
        <div class="nav-logo">
            <a href="#">Logo</a>
        </div>
        <div class="nav-menu" id="nav-menu">
            <div class="nav-item">
                <a href="#" class="nav-link">Trang chủ</a>
            </div>
            <div class="nav-item">
                <a href="#" class="nav-link">Sản phẩm</a>
            </div>
            <div class="nav-item">
                <a href="#" class="nav-link">Liên hệ</a>
            </div>
        </div>
        <div class="nav-toggle" id="nav-toggle">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </div>
    </div>
</nav>
```

```css
/* CSS */
.navbar {
    background-color: #333;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.1rem;
    position: sticky;
    top: 0;
    z-index: 999;
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;
    padding: 0 50px;
}

.nav-logo a {
    color: #fff;
    font-size: 2rem;
    font-weight: bold;
    text-decoration: none;
}

.nav-menu {
    display: flex;
    align-items: center;
    list-style: none;
}

.nav-item {
    height: 80px;
}

.nav-link {
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    transition: color 0.3s ease;
}

.nav-link:hover {
    color: #007bff;
}

.nav-toggle {
    display: none;
    flex-direction: column;
    cursor: pointer;
}

.bar {
    width: 25px;
    height: 3px;
    background-color: #fff;
    margin: 3px 0;
    transition: 0.3s;
}

/* Mobile Responsive */
@media screen and (max-width: 768px) {
    .nav-container {
        padding: 0 20px;
    }
    
    .nav-menu {
        position: fixed;
        left: -100%;
        top: 80px;
        flex-direction: column;
        background-color: #333;
        width: 100%;
        text-align: center;
        transition: 0.3s;
    }
    
    .nav-menu.active {
        left: 0;
    }
    
    .nav-item {
        height: auto;
        width: 100%;
    }
    
    .nav-link {
        padding: 2rem 0;
        width: 100%;
        display: block;
    }
    
    .nav-toggle {
        display: flex;
    }
    
    .nav-toggle.active .bar:nth-child(2) {
        opacity: 0;
    }
    
    .nav-toggle.active .bar:nth-child(1) {
        transform: translateY(8px) rotate(45deg);
    }
    
    .nav-toggle.active .bar:nth-child(3) {
        transform: translateY(-8px) rotate(-45deg);
    }
}
```

## IV. Các mẹo và thủ thuật hữu ích

### 1. CSS Reset hiện đại

```css
/* Modern CSS Reset */
*, *::before, *::after {
    box-sizing: border-box;
}

* {
    margin: 0;
}

html, body {
    height: 100%;
}

body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
}

img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
}

input, button, textarea, select {
    font: inherit;
}

p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
}
```

### 2. Utility Classes hữu ích

```css
/* Spacing utilities */
.m-0 { margin: 0; }
.m-1 { margin: 0.25rem; }
.m-2 { margin: 0.5rem; }
.m-3 { margin: 1rem; }
.m-4 { margin: 1.5rem; }
.m-5 { margin: 3rem; }

.p-0 { padding: 0; }
.p-1 { padding: 0.25rem; }
.p-2 { padding: 0.5rem; }
.p-3 { padding: 1rem; }
.p-4 { padding: 1.5rem; }
.p-5 { padding: 3rem; }

/* Text utilities */
.text-left { text-align: left; }
.text-center { text-align: center; }
.text-right { text-align: right; }
.text-uppercase { text-transform: uppercase; }
.text-lowercase { text-transform: lowercase; }
.text-capitalize { text-transform: capitalize; }

/* Display utilities */
.d-none { display: none; }
.d-block { display: block; }
.d-flex { display: flex; }
.d-grid { display: grid; }

/* Flex utilities */
.justify-center { justify-content: center; }
.justify-between { justify-content: space-between; }
.align-center { align-items: center; }
.flex-wrap { flex-wrap: wrap; }

/* Visibility utilities */
.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
}
```

### 3. Debugging CSS

```css
/* Debug borders để thấy layout */
* {
    outline: 1px solid red;
}

/* Debug specific elements */
.debug {
    border: 2px solid red;
    background-color: rgba(255, 0, 0, 0.1);
}

/* Show grid/flex container */
.debug-grid {
    background-image: 
        linear-gradient(rgba(255,0,0,.15) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,0,0,.15) 1px, transparent 1px);
    background-size: 20px 20px;
}
```

## V. Lộ trình học tập được đề xuất

### Giai đoạn 1: Nền tảng (2-3 tuần)
1. **HTML cơ bản**: Cấu trúc tài liệu, các thẻ thông dụng
2. **CSS cơ bản**: Selectors, properties, box model
3. **Thực hành**: Tạo trang web tĩnh đơn giản

### Giai đoạn 2: Trung cấp (3-4 tuần)
1. **Flexbox**: Layout linh hoạt
2. **Responsive Design**: Media queries, mobile-first
3. **Forms**: Tạo biểu mẫu tương tác
4. **Thực hành**: Trang web responsive hoàn chỉnh

### Giai đoạn 3: Nâng cao (4-5 tuần)
1. **CSS Grid**: Layout phức tạp
2. **Animations**: Transitions, keyframes
3. **CSS Variables**: Quản lý theme
4. **Accessibility**: Semantic HTML, ARIA
5. **Thực hành**: Xây dựng component library

### Giai đoạn 4: Chuyên sâu (liên tục)
1. **CSS Frameworks**: Bootstrap, Tailwind CSS
2. **Preprocessors**: Sass, Less
3. **Build Tools**: Webpack, Vite
4. **Performance**: Optimization techniques

## Kết luận

HTML và CSS là nền tảng của web development. Việc thành thạo hai ngôn ngữ này sẽ giúp bạn:

- Tạo ra các trang web đẹp mắt và chuyên nghiệp
- Hiểu sâu về cách web hoạt động
- Làm nền tảng để học các framework như React, Vue.js
- Có khả năng tái tạo bất kỳ thiết kế nào bạn thấy trên internet

**Lời khuyên cuối**: Hãy thực hành thường xuyên bằng cách tái tạo các thiết kế từ các trang web thực tế. Đây là cách tốt nhất để cải thiện kỹ năng và xây dựng portfolio ấn t