# CSS Reset Hiện Đại: Giải Thích Chi Tiết

## 1. Giới thiệu về CSS Reset

Khi bắt đầu một dự án web mới, một trong những bước đầu tiên mà nhiều nhà phát triển thực hiện là "san bằng" một số điểm chưa hoàn thiện trong ngôn ngữ CSS. Điều này được thực hiện bằng cách áp dụng một tập hợp các `custom baseline styles` (kiểu cơ sở tùy chỉnh) còn được gọi là CSS Reset.

### Mục đích của CSS Reset:

**Giải quyết sự không nhất quán giữa các trình duyệt**: Mỗi trình duyệt web (như Chrome, Firefox, Safari, Edge, Internet Explorer) đều áp dụng một tập hợp các `default styles` (kiểu mặc định) cho mọi trang web, được gọi là `user-agent stylesheets`. Ví dụ, `h1` sẽ có kích thước lớn hơn và đậm hơn, liên kết `a` sẽ có màu xanh và gạch chân. Tuy nhiên, các kiểu mặc định này có thể khác nhau đôi chút giữa các trình duyệt.

**Ví dụ về sự khác biệt giữa trình duyệt:**
```html
<!-- Cùng một mã HTML này sẽ hiển thị khác nhau trên các trình duyệt -->
<h1>Tiêu đề chính</h1>
<p>Đây là một đoạn văn bản.</p>
<button>Nút bấm</button>
```

```css
/* Chrome có thể render như này: */
h1 { margin: 21.44px 0; font-size: 2em; }
p { margin: 16px 0; }
button { padding: 2px 6px; font-size: 13.33px; }

/* Firefox có thể khác: */
h1 { margin: 20px 0; font-size: 2em; }
p { margin: 16px 0; }
button { padding: 1px 6px; font-size: 12px; }
```

**Cung cấp một nền tảng nhất quán (`consistent starting point`)**: CSS Reset giúp "xóa bỏ" hoặc thay đổi các kiểu mặc định này, tạo ra một "tấm bảng trắng" (`clean slate`) để nhà phát triển có thể áp dụng các kiểu tùy chỉnh của riêng mình mà không bị ảnh hưởng bởi sự can thiệp từ `default browser styles`.

**Ví dụ trước và sau khi áp dụng CSS Reset:**
```html
<h1>Tiêu đề</h1>
<p>Đoạn văn</p>
<img src="image.jpg" alt="Hình ảnh">
```

```css
/* TRƯỚC khi áp dụng CSS Reset - các trình duyệt có kiểu khác nhau */
/* Không có kiểu reset */

/* SAU khi áp dụng CSS Reset - nhất quán trên mọi trình duyệt */
* { margin: 0; }
h1, p { margin: 0; }
img { display: block; max-width: 100%; }
```

**Cải thiện trải nghiệm phát triển CSS**: Giúp tránh tình trạng phải ghi đè liên tục các `undesirable defaults` (mặc định không mong muốn) của trình duyệt, giảm bớt các vấn đề bố cục không mong muốn.

**Lưu ý quan trọng**: Việc áp dụng bất kỳ CSS Reset nào vào một `codebase` (cơ sở mã) hiện có thường không được khuyến nghị, vì nó có thể gây ra những lỗi tinh vi khó nhận biết đối với người dùng. Nếu bạn quyết định làm vậy, hãy kiểm tra kỹ lưỡng.

## 2. Lịch sử và Sự Phát triển của CSS Reset

**CSS Reset truyền thống**: Trong một thời gian dài, Eric Meyer's CSS Reset là một công cụ nổi tiếng và được sử dụng rộng rãi. Mục tiêu chính của nó là loại bỏ hầu hết các kiểu mặc định của trình duyệt để tạo ra một "tấm bảng trống" hoàn toàn, đảm bảo tính nhất quán giữa các trình duyệt.

**Ví dụ Meyer Reset cổ điển:**
```css
/* Eric Meyer's Reset CSS v2.0 (một phần) */
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}
```

Tuy nhiên, Meyer reset đã không được cập nhật trong hơn một thập kỷ, trong khi CSS đã có nhiều thay đổi đáng kể.

**Normalize.css**: Đây là một bước dịch chuyển ý nghĩa đầu tiên trong triết lý về CSS Reset. Thay vì loại bỏ hoàn toàn các kiểu mặc định, `Normalize.css` tập trung vào việc **khắc phục sự không nhất quán giữa các trình duyệt** trong khi vẫn giữ lại phần lớn các kiểu mặc định `common-sense` (thông thường) của chúng.

**Ví dụ so sánh Meyer Reset vs Normalize:**
```css
/* Meyer Reset: Xóa hoàn toàn */
h1 { margin: 0; font-size: 100%; font-weight: normal; }

/* Normalize: Giữ ý nghĩa nhưng thống nhất */
h1 {
    font-size: 2em;
    margin: 0.67em 0;
}
```

**Các phương pháp kết hợp (`Hybrid approach`)**: Ngày nay, nhiều `framework` CSS, như `Tailwind CSS` với `Preflight`, áp dụng cách tiếp cận kết hợp giữa `normalize` và `reset`.

**Ví dụ Tailwind Preflight (hybrid approach):**
```css
/* Kết hợp normalize + reset + opinionated defaults */
*, ::before, ::after {
    box-sizing: border-box; /* Reset */
    border-width: 0; /* Reset */
    border-style: solid; /* Normalize */
    border-color: #e5e7eb; /* Opinionated */
}

* { margin: 0; } /* Reset */

img { max-width: 100%; height: auto; } /* Opinionated */
```

**Triết lý của Josh Comeau về Reset**: Josh Comeau đã phát triển CSS Reset tùy chỉnh của riêng mình, bao gồm các thủ thuật để cải thiện cả trải nghiệm người dùng và trải nghiệm tác giả CSS.

- **Không có quan điểm về thiết kế/thẩm mỹ**: Reset này không mang tính cá nhân về thiết kế, có thể sử dụng cho bất kỳ dự án nào.
- **Không phải là một "tấm bảng trống" hoàn toàn**: Josh Comeau cho rằng việc loại bỏ tất cả các kiểu mặc định của trình duyệt là không cần thiết. Ví dụ, thẻ `<em>` nên vẫn có `font-style: italic` mặc định.
- **Tập trung vào khắc phục "điểm góc thô"**: Mục tiêu của reset này là "sửa đổi" các `rough edges` (điểm góc thô) của CSS, không phải là tạo ra một sự nhất quán hoàn toàn giữa các trình duyệt theo cách truyền thống.
- **"Bạn sở hữu Reset của mình"**: Josh Comeau khuyến khích người dùng tự tùy chỉnh và phát triển `reset` này theo thời gian khi họ học được những điều mới hoặc khám phá ra các thủ thuật mới.

## 3. Các Quy tắc trong CSS Reset của Josh Comeau

Đây là chi tiết từng quy tắc trong CSS Reset của Josh Comeau:

```css
/* Josh's Custom CSS Reset
   https://www.joshwcomeau.com/css/custom-css-reset/ */
*, *::before, *::after {
  box-sizing: border-box;
}
* {
  margin: 0;
}
@media (prefers-reduced-motion: no-preference) {
  html {
    interpolate-size: allow-keywords;
  }
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
p {
  text-wrap: pretty;
}
h1, h2, h3, h4, h5, h6 {
  text-wrap: balance;
}
#root, #__next {
  isolation: isolate;
}
```

### 1. Sử dụng mô hình `box-sizing` trực quan hơn (`Use a more-intuitive box-sizing model`)

**Mã CSS**:
```css
*, *::before, *::after {
  box-sizing: border-box;
}
```

**Giải thích**: Theo mặc định, trình duyệt sử dụng mô hình `content-box`. Điều này có nghĩa là khi bạn đặt `width` cho một phần tử, chiều rộng đó chỉ áp dụng cho `content box` (hộp nội dung), nằm bên trong `padding` và `border`.

**Ví dụ minh họa vấn đề với content-box:**
```html
<div class="container">
  <div class="box-content">Content Box (mặc định)</div>
  <div class="box-border">Border Box (được cải thiện)</div>
</div>
```

```css
.container {
  width: 300px;
  border: 2px solid #ccc;
}

/* Mặc định: content-box */
.box-content {
  width: 100%; /* = 300px */
  padding: 20px;
  border: 5px solid red;
  /* Tổng chiều rộng thực tế: 300px + 40px + 10px = 350px */
  /* SẼ TRÀN RA NGOÀI container! */
}

/* Cải thiện: border-box */
.box-border {
  box-sizing: border-box;
  width: 100%; /* = 300px bao gồm padding và border */
  padding: 20px;
  border: 5px solid blue;
  /* Tổng chiều rộng: 300px (content tự co lại để vừa) */
  /* VỪA KHÍT với container */
}
```

**Ví dụ thực tế - Layout 2 cột:**
```html
<div class="row">
  <div class="col">Cột 1</div>
  <div class="col">Cột 2</div>
</div>
```

```css
/* KHÔNG có border-box - sẽ bị lỗi */
.col {
  width: 50%;
  padding: 10px;
  border: 1px solid #ddd;
  float: left;
  /* Tổng: 50% + 20px + 2px > 50% → Cột 2 sẽ xuống dòng! */
}

/* CÓ border-box - hoạt động hoàn hảo */
.col {
  box-sizing: border-box;
  width: 50%;
  padding: 10px;
  border: 1px solid #ddd;
  float: left;
  /* width: 50% đã bao gồm padding và border */
}
```

### 2. Xóa `margin` mặc định (`Remove default margin`)

**Mã CSS**:
```css
* {
  margin: 0;
}
```

**Ví dụ minh họa vấn đề với margin mặc định:**
```html
<div class="card">
  <h1>Tiêu đề</h1>
  <p>Đoạn văn đầu tiên</p>
  <p>Đoạn văn thứ hai</p>
</div>
```

```css
/* TRƯỚC khi reset margin */
.card {
  background: #f5f5f5;
  padding: 20px;
  border: 1px solid #ddd;
}

/* Browser defaults tạo ra khoảng cách không mong muốn:
h1 { margin: 0.67em 0; } → Khoảng trống phía trên và dưới
p { margin: 1em 0; }     → Khoảng cách giữa các đoạn
Kết quả: Có khoảng trống không cần thiết ở đầu và cuối card */
```

```css
/* SAU khi reset margin */
* { margin: 0; }

.card {
  background: #f5f5f5;
  padding: 20px;
  border: 1px solid #ddd;
}

.card h1 { margin-bottom: 16px; } /* Chủ động thêm margin */
.card p + p { margin-top: 12px; } /* Khoảng cách giữa đoạn */

/* Kết quả: Kiểm soát hoàn toàn khoảng cách, không có "margin collapse" */
```

**Ví dụ về Margin Collapse (vấn đề phổ biến):**
```html
<div class="section">
  <h2>Tiêu đề section</h2>
</div>
<div class="content">
  <p>Nội dung</p>
</div>
```

```css
/* KHÔNG reset margin */
.section { background: lightblue; padding: 10px; }
.content { background: lightgreen; padding: 10px; }

/* h2 có margin-top mặc định, sẽ "collapse" với margin của container
   → Khoảng cách giữa .section và .content có thể không như mong đợi */

/* ĐÃ reset margin */
* { margin: 0; }
.section { 
  background: lightblue; 
  padding: 10px;
  margin-bottom: 20px; /* Chủ động định nghĩa khoảng cách */
}
```

### 3. Bật `keyword animations` (`Enable keyword animations`)

**Mã CSS**:
```css
@media (prefers-reduced-motion: no-preference) {
  html {
    interpolate-size: allow-keywords;
  }
}
```

**Ví dụ accordion trước đây (cần JavaScript phức tạp):**
```html
<div class="accordion">
  <button class="accordion-trigger">Mở rộng</button>
  <div class="accordion-content">
    <p>Nội dung này sẽ được hiển thị khi mở rộng...</p>
    <p>Có thể có nhiều đoạn văn...</p>
    <p>Chiều cao không xác định trước!</p>
  </div>
</div>
```

```css
/* TRƯỚC interpolate-size - KHÔNG hoạt động */
.accordion-content {
  height: 0;
  overflow: hidden;
  transition: height 0.3s ease;
}

.accordion.open .accordion-content {
  height: auto; /* ❌ Không thể animate từ 0 → auto */
}
```

```javascript
// Cần JavaScript phức tạp để tính chiều cao
function toggleAccordion(accordion) {
  const content = accordion.querySelector('.accordion-content');
  if (accordion.classList.contains('open')) {
    content.style.height = content.scrollHeight + 'px';
    requestAnimationFrame(() => {
      content.style.height = '0';
    });
  } else {
    content.style.height = content.scrollHeight + 'px';
  }
}
```

**Với interpolate-size - chỉ cần CSS:**
```css
html { interpolate-size: allow-keywords; }

.accordion-content {
  height: 0;
  overflow: hidden;
  transition: height 0.3s ease;
}

.accordion.open .accordion-content {
  height: auto; /* ✅ Hoạt động mượt mà! */
}
```

**Ví dụ khác - Dropdown menu:**
```html
<div class="dropdown">
  <button>Menu</button>
  <ul class="dropdown-menu">
    <li><a href="#">Trang chủ</a></li>
    <li><a href="#">Sản phẩm</a></li>
    <li><a href="#">Liên hệ</a></li>
  </ul>
</div>
```

```css
.dropdown-menu {
  width: 0;
  overflow: hidden;
  transition: width 0.25s ease;
}

.dropdown:hover .dropdown-menu {
  width: max-content; /* ✅ Animate đến chiều rộng tự động! */
}
```

### 4. Thêm `line-height` dễ đọc (`Add accessible line-height`)

**Mã CSS**:
```css
body {
  line-height: 1.5;
}
```

**Ví dụ so sánh line-height:**
```html
<div class="text-sample">
  <h3>So sánh Line Height</h3>
  <p class="tight">Line-height: 1.2 - Các dòng này được sắp xếp quá gần nhau, gây khó khăn khi đọc, đặc biệt đối với những người mắc chứng khó đọc. Mắt phải làm việc nhiều hơn để theo dõi từng dòng.</p>
  
  <p class="normal">Line-height: 1.5 - Đây là khoảng cách lý tưởng giữa các dòng. Văn bản dễ đọc hơn, mắt có thể dễ dàng chuyển từ dòng này sang dòng khác mà không bị mất hướng.</p>
</div>
```

```css
.text-sample {
  max-width: 500px;
  font-size: 16px;
}

.tight {
  line-height: 1.2; /* Browser default, quá chật */
  background: #ffe6e6;
  padding: 10px;
  margin-bottom: 20px;
}

.normal {
  line-height: 1.5; /* WCAG khuyến nghị */
  background: #e6ffe6;
  padding: 10px;
}
```

**Ví dụ điều chỉnh cho tiêu đề:**
```css
body { line-height: 1.5; }

/* Tiêu đề cần line-height nhỏ hơn */
h1, h2, h3, h4, h5, h6 {
  line-height: 1.2; /* Ghi đè cho tiêu đề */
}

/* Hoặc sử dụng clamp() để responsive */
h1 {
  line-height: clamp(1.1, 1.2, 1.3);
}
```

### 5. Cải thiện hiển thị văn bản (`Improve text rendering`)

**Mã CSS**:
```css
body {
  -webkit-font-smoothing: antialiased;
}
```

**Ví dụ so sánh font smoothing (chỉ trên macOS):**
```html
<div class="font-comparison">
  <p class="subpixel">Subpixel antialiasing (mặc định trên macOS)</p>
  <p class="antialiased">Antialiased (được cải thiện)</p>
</div>
```

```css
.font-comparison p {
  font-size: 18px;
  font-weight: 300;
  padding: 10px;
  margin: 10px 0;
}

.subpixel {
  -webkit-font-smoothing: auto; /* Mặc định */
  background: #f0f0f0;
  /* Trên macOS: có thể trông hơi mờ, có viền màu */
}

.antialiased {
  -webkit-font-smoothing: antialiased; /* Cải thiện */
  background: #f0f0f0;
  /* Trên macOS: sắc nét hơn, ít viền màu */
}
```

**Ví dụ với font mỏng:**
```css
.thin-text {
  font-weight: 100;
  font-size: 24px;
  -webkit-font-smoothing: antialiased;
  /* Đặc biệt hữu ích với font weight nhỏ */
}
```

### 6. Cải thiện mặc định cho các phần tử đa phương tiện (`Improve media defaults`)

**Mã CSS**:
```css
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}
```

**Ví dụ vấn đề với hình ảnh inline:**
```html
<div class="content">
  <p>Đây là văn bản với <img src="icon.png" alt="icon" class="inline-img"> hình ảnh inline</p>
  <img src="large-image.jpg" alt="Hình lớn" class="block-img">
</div>
```

```css
/* TRƯỚC reset - img là inline theo mặc định */
.content {
  width: 300px;
  border: 1px solid #ccc;
}

.inline-img {
  /* display: inline (mặc định) */
  /* Có thể tạo ra "magic space" 4px dưới hình */
  width: 20px;
  height: 20px;
}

.block-img {
  /* display: inline (mặc định) */
  /* width: 800px (kích thước gốc) */
  /* SẼ TRÀN ra khỏi container 300px! */
}
```

```css
/* SAU reset */
img {
  display: block;
  max-width: 100%;
}

.inline-img {
  /* Nếu cần inline, ghi đè: */
  display: inline-block;
  vertical-align: middle; /* Loại bỏ magic space */
}

.block-img {
  /* Tự động vừa với container, không tràn */
  /* width: 300px (tự động scale down) */
}
```

**Ví dụ responsive images:**
```html
<div class="gallery">
  <img src="photo1.jpg" alt="Ảnh 1">
  <img src="photo2.jpg" alt="Ảnh 2">  
  <img src="photo3.jpg" alt="Ảnh 3">
</div>
```

```css
.gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  width: 100%;
}

/* Nhờ max-width: 100%, tất cả ảnh tự động fit */
.gallery img {
  /* display: block và max-width: 100% từ reset */
  height: 200px;
  object-fit: cover;
}
```

**Trường hợp cần override (hình ảnh tràn có chủ đích):**
```html
<div class="hero-section">
  <img src="bg.jpg" alt="Background" class="oversized-bg">
</div>
```

```css
.hero-section {
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
}

.oversized-bg {
  position: absolute;
  width: 120%; /* Cần tràn 20% */
  max-width: revert; /* ✅ Undo reset để cho phép tràn */
  left: -10%;
  top: -10%;
  height: 120%;
  object-fit: cover;
}
```

### 7. Kế thừa phông chữ cho các điều khiển biểu mẫu (`Inherit fonts for form controls`)

**Mã CSS**:
```css
input, button, textarea, select {
  font: inherit;
}
```

**Ví dụ vấn đề với form controls mặc định:**
```html
<div class="form-demo">
  <h2>Form Demo</h2>
  <p>Body text với font-size: 18px</p>
  
  <input type="text" placeholder="Text input" class="before-reset">
  <button class="before-reset">Button</button>
  <textarea placeholder="Textarea" class="before-reset"></textarea>
  <select class="before-reset">
    <option>Select option</option>
  </select>
  
  <hr>
  
  <input type="text" placeholder="Text input" class="after-reset">
  <button class="after-reset">Button</button>
  <textarea placeholder="Textarea" class="after-reset"></textarea>
  <select class="after-reset">
    <option>Select option</option>
  </select>
</div>
```

```css
.form-demo {
  font-family: 'Arial', sans-serif;
  font-size: 18px;
  line-height: 1.5;
  max-width: 400px;
}

/* TRƯỚC reset - form controls có font riêng */
.before-reset {
  /* Browser defaults:
     font-size: 13.33px (rất nhỏ!)
     font-family: khác với body
     textarea: monospace font
  */
  margin: 5px 0;
  padding: 8px;
  display: block;
  width: 100%;
}

/* SAU reset - kế thừa font từ parent */
.after-reset {
  font: inherit; /* Kế thừa tất cả: size, family, weight, style */
  margin: 5px 0;
  padding: 8px;
  display: block;
  width: 100%;
}
```

**Ví dụ auto-zoom trên mobile:**
```css
/* VẤN ĐỀ: Font size < 16px trên mobile sẽ tự động zoom */
input {
  font-size: 14px; /* ❌ Mobile sẽ zoom khi focus */
}

/* GIẢI PHÁP: Sử dụng font: inherit */
body { font-size: 16px; }
input { font: inherit; } /* ✅ Kế thừa 16px, không zoom */
```

**Ví dụ với custom font:**
```css
.custom-form {
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  font-weight: 300;
}

.custom-form input,
.custom-form button,
.custom-form textarea,
.custom-form select {
  font: inherit; /* Tất cả đều dùng Roboto 20px weight 300 */
}
```

### 8. Tránh tràn văn bản (`Avoid text overflows`)

**Mã CSS**:
```css
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}
```

**Ví dụ vấn đề text overflow:**
```html
<div class="container">
  <h2>Tiêu đề với từ cực kỳ dài: supercalifragilisticexpialidocious</h2>
  <p>URL dài: https://example.com/very-long-path/with-no-spaces/that-causes-overflow</p>
  <p>Email: verylongemailaddress@superlongdomainname.com</p>
</div>
```

```css
.container {
  width: 300px;
  border: 2px solid #333;
  padding: 20px;
}

/* TRƯỚC overflow-wrap */
/* Từ dài sẽ tràn ra ngoài container, tạo horizontal scroll */

/* SAU overflow-wrap: break-word */
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}
/* Từ dài sẽ tự động ngắt xuống dòng, không tràn */
```

**Ví dụ với các trường hợp khác nhau:**
```html
<div class="text-examples">
  <div class="box">
    <h3>Không có overflow-wrap:</h3>
    <p class="no-wrap">Đây là một URL rất dài: https://www.example.com/very-long-path/that-will-definitely-cause-horizontal-overflow-issues</p>
  </div>
  
  <div class="box">
    <h3>Có overflow-wrap:</h3>
    <p class="with-wrap">Đây là một URL rất dài: https://www.example.com/very-long-path/that-will-definitely-cause-horizontal-overflow-issues</p>
  </div>
</div>
```

```css
.text-examples {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.box {
  width: 250px;
  border: 1px solid #ddd;
  padding: 15px;
}

.no-wrap {
  overflow-wrap: normal; /* Mặc định */
  /* URL sẽ tràn ra ngoài box */
}

.with-wrap {
  overflow-wrap: break-word; /* Reset áp dụng */
  /* URL sẽ ngắt xuống dòng tại bất kỳ điểm nào */
}
```

**Ví dụ với hyphens (tùy chọn):**
```css
p {
  overflow-wrap: break-word;
  hyphens: auto; /* Thêm dấu gạch nối khi ngắt từ */
  /* Cần khai báo lang="vi" trong HTML */
}
```

### 9. Cải thiện việc xuống dòng (`Improve line wrapping`)

**Mã CSS**:
```css
p {
  text-wrap: pretty;
}
h1, h2, h3, h4, h5, h6 {
  text-wrap: balance;
}
```

**Ví dụ text-wrap: pretty cho đoạn văn:**
```html
<div class="wrap-comparison">
  <div class="column">
    <h3>Mặc định (text-wrap: normal)</h3>
    <p class="normal-wrap">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam 😊</p>
  </div>
  
  <div class="column">
    <h3>Cải thiện (text-wrap: pretty)</h3>
    <p class="pretty-wrap">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam 😊</p>
  </div>
</div>
```

```css
.wrap-comparison {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
}

.column {
  width: 300px;
}

.normal-wrap {
  text-wrap: normal;
  /* Có thể kết thúc với emoji đơn lẻ ở dòng cuối: 
     "...veniam
      😊"
  */
}

.pretty-wrap {
  text-wrap: pretty;
  /* Đảm bảo dòng cuối có ít nhất 2 từ:
     "...minim veniam 😊"
  */
}
```

**Ví dụ text-wrap: balance cho tiêu đề:**
```html
<div class="heading-comparison">
  <div class="column">
    <h2 class="normal-heading">Tiêu đề dài này sẽ xuống dòng không cân bằng theo mặc định</h2>
  </div>
  
  <div class="column">
    <h2 class="balanced-heading">Tiêu đề dài này sẽ xuống dòng không cân bằng theo mặc định</h2>
  </div>
</div>
```

```css
.heading-comparison {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
}

.normal-heading {
  text-wrap: normal;
  width: 200px;
  /* Có thể render như:
     "Tiêu đề dài này sẽ xuống dòng không cân
     bằng theo mặc định"
  */
}

.balanced-heading {
  text-wrap: balance;
  width: 200px;
  /* Sẽ render cân bằng hơn:
     "Tiêu đề dài này sẽ xuống
     dòng không cân bằng theo mặc định"
  */
}
```

**Ví dụ thực tế với card layout:**
```html
<div class="card-grid">
  <div class="card">
    <h3>Tiêu đề sản phẩm rất dài có thể xuống hai dòng</h3>
    <p>Mô tả sản phẩm chi tiết với nhiều thông tin hữu ích để khách hàng có thể đưa ra quyết định mua hàng một cách dễ dàng.</p>
  </div>
  
  <div class="card">
    <h3>Sản phẩm khác</h3>
    <p>Mô tả ngắn gọn.</p>
  </div>
</div>
```

```css
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.card {
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 8px;
}

.card h3 {
  text-wrap: balance; /* Tiêu đề cân bằng */
  margin-bottom: 12px;
}

.card p {
  text-wrap: pretty; /* Đoạn văn đẹp hơn */
}
```

### 10. Tạo `root stacking context` (`Create a root stacking context`)

**Mã CSS**:
```css
#root, #__next {
  isolation: isolate;
}
```

**Ví dụ vấn đề stacking context:**
```html
<div id="root">
  <div class="main-content">
    <div class="sidebar">
      <div class="dropdown">
        <button>Menu</button>
        <ul class="dropdown-menu">
          <li>Item 1</li>
          <li>Item 2</li>
        </ul>
      </div>
    </div>
    
    <div class="article">
      <div class="floating-ad" style="z-index: 999;">
        Quảng cáo floating
      </div>
    </div>
  </div>
  
  <div class="modal" style="z-index: 1000;">
    Modal quan trọng
  </div>
</div>
```

```css
/* KHÔNG có isolation trên root */
.dropdown-menu {
  position: absolute;
  z-index: 10;
  background: white;
  border: 1px solid #ccc;
}

.floating-ad {
  position: fixed;
  z-index: 999; /* Rất cao */
  background: yellow;
}

.modal {
  position: fixed;
  z-index: 1000; /* Cao nhất */
  background: rgba(0,0,0,0.8);
}

/* VẤN ĐỀ: Nếu .article tạo stacking context mới (ví dụ: transform),
   thì .floating-ad sẽ không thể vượt qua .modal được */
```

```css
/* CÓ isolation trên root */
#root {
  isolation: isolate; /* Tạo root stacking context */
}

/* Bây giờ mọi z-index đều tương đối so với #root */
.dropdown-menu { z-index: 1; }    /* Thấp nhất */
.floating-ad { z-index: 2; }      /* Trung bình */
.modal { z-index: 3; }            /* Cao nhất */

/* Dễ quản lý và dự đoán hơn! */
```

**Ví dụ với React/Next.js:**
```html
<!-- Create React App -->
<div id="root">
  <div class="app">
    <!-- Toàn bộ ứng dụng -->
  </div>
</div>

<!-- Next.js -->
<div id="__next">
  <div class="app">
    <!-- Toàn bộ ứng dụng -->
  </div>
</div>
```

```css
/* CSS Reset cho React */
#root {
  isolation: isolate;
}

/* CSS Reset cho Next.js */
#__next {
  isolation: isolate;
}

/* Hoặc cả hai */
#root, #__next {
  isolation: isolate;
}
```

**Ví dụ hệ thống z-index có tổ chức:**
```css
/* Với root stacking context, có thể tạo hệ thống z-index rõ ràng */
:root {
  --z-dropdown: 1;
  --z-sticky: 2;
  --z-fixed: 3;
  --z-modal-backdrop: 4;
  --z-modal: 5;
  --z-toast: 6;
  --z-tooltip: 7;
}

.dropdown { z-index: var(--z-dropdown); }
.sticky-header { z-index: var(--z-sticky); }
.floating-button { z-index: var(--z-fixed); }
.modal-backdrop { z-index: var(--z-modal-backdrop); }
.modal { z-index: var(--z-modal); }
.toast-notification { z-index: var(--z-toast); }
.tooltip { z-index: var(--z-tooltip); }
```

## 4. Tóm tắt và Lưu ý Chung

**Tính chủ quan và ý kiến riêng**: Các CSS Reset là chủ quan và có ý kiến riêng, phản ánh sở thích của nhà phát triển đã tạo ra chúng. Không có một `reset` nào là hoàn hảo cho mọi dự án.

**Ví dụ về sự khác biệt giữa các reset:**
```css
/* Eric Meyer Reset - Xóa tất cả */
h1, h2, h3, h4, h5, h6 {
  font-size: 100%;
  font-weight: normal;
  margin: 0;
}

/* Normalize.css - Giữ ý nghĩa */
h1 { font-size: 2em; margin: 0.67em 0; }
h2 { font-size: 1.5em; margin: 0.83em 0; }

/* Josh Comeau - Hybrid */
h1, h2, h3, h4, h5, h6 {
  margin: 0; /* Reset margin */
  overflow-wrap: break-word; /* Cải thiện */
  text-wrap: balance; /* Modern enhancement */
  /* Nhưng giữ font-size và font-weight mặc định */
}
```

**Không bắt buộc**: CSS Reset không bắt buộc phải sử dụng. Một số nhà phát triển chọn không sử dụng chúng, trong khi những người khác tạo ra `reset` của riêng họ hoặc sử dụng các `prebuilt resets` (reset được xây dựng sẵn).

**Khi nào nên sử dụng**:
- Khi bắt đầu một dự án mới hoàn toàn.
- Khi bạn muốn có một nền tảng sạch sẽ và nhất quán để xây dựng thiết kế của mình mà không bị `browser defaults` ảnh hưởng.
- Nếu bạn đang viết CSS từ đầu mà không có `framework`.

**Ví dụ dự án phù hợp:**
```html
<!-- Dự án mới, custom design -->
<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <title>Website mới</title>
  <link rel="stylesheet" href="reset.css"> <!-- Áp dụng reset đầu tiên -->
  <link rel="stylesheet" href="styles.css"> <!-- Sau đó custom styles -->
</head>
<body>
  <!-- Nội dung website -->
</body>
</html>
```

**Khi nào cần thận trọng**:
- Khi áp dụng vào một `codebase` hiện có, cần kiểm tra kỹ lưỡng để tránh các lỗi tiềm ẩn.
- Quyết định sử dụng `reset` nên được đưa ra từ đầu dự án, vì thêm vào sau có thể rủi ro.

**Ví dụ rủi ro khi thêm reset vào dự án cũ:**
```css
/* Dự án đã có sẵn nhiều components */
.existing-component {
  /* Dựa vào browser defaults */
}

.existing-component h2 {
  /* Không có margin được set, dựa vào browser default */
}

/* Nếu thêm reset: */
* { margin: 0; } /* ❌ Sẽ phá vỡ layout hiện có */

/* Tất cả h2 đột nhiên không còn margin, layout bị vỡ */
```

**Cách "Undo" một Reset**: Đôi khi, bạn muốn khôi phục lại `browser's default styles` cho một số phần tử cụ thể, ví dụ như tiêu đề trong nội dung `long-form`.

**Ví dụ sử dụng revert:**
```html
<article class="blog-post">
  <h1>Tiêu đề chính của bài viết</h1>
  <h2>Tiêu đề phụ</h2>
  <p>Nội dung bài viết...</p>
  <h3>Tiêu đề nhỏ</h3>
  <p>Nội dung tiếp theo...</p>
</article>
```

```css
/* Global reset */
* { margin: 0; }
h1, h2, h3, h4, h5, h6 { margin: 0; }

/* Khôi phục browser defaults cho blog content */
.blog-post :where(h1, h2, h3, h4, h5, h6) {
  all: revert; /* Khôi phục tất cả properties */
}

/* Hoặc chỉ khôi phục margin cụ thể */
.blog-post h1 { margin: revert; }
.blog-post h2 { margin: revert; }
.blog-post h3 { margin: revert; }
```

**Ví dụ tạo custom reset cho dự án cụ thể:**
```css
/* Custom reset cho e-commerce site */
*, *::before, *::after { box-sizing: border-box; }
* { margin: 0; }

body { 
  font-family: 'Inter', sans-serif;
  line-height: 1.6;
  color: #333;
}

/* Product-specific defaults */
.product-card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.product-card .price {
  font-size: 1.5rem;
  font-weight: 700;
  color: #e74c3c;
}

/* Form defaults cho checkout */
input, button, select {
  font: inherit;
  padding: 12px 16px;
  border: 2px solid #ddd;
  border-radius: 4px;
}

button {
  background: #3498db;
  color: white;
  border-color: #3498db;
  cursor: pointer;
}
```

**"Bạn sở hữu Reset của mình"**: Triết lý của Josh Comeau là bạn nên xem `reset` này như một phần của dự án của mình và tùy chỉnh nó theo thời gian khi bạn học hỏi và khám phá.

**Ví dụ evolution của personal reset:**
```css
/* Version 1.0 - Bắt đầu với Josh's reset */
*, *::before, *::after { box-sizing: border-box; }
* { margin: 0; }
/* ... các rule khác */

/* Version 1.1 - Thêm custom cho dự án */
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
  height: auto; /* Thêm để maintain aspect ratio */
}

/* Version 1.2 - Phát hiện pattern mới */
button {
  font: inherit;
  cursor: pointer; /* Luôn cần cho UX tốt */
  border: none; /* Reset border để dễ style */
  background: none; /* Reset background */
}

/* Version 2.0 - Học được CSS Grid/Flexbox patterns */
.container {
  width: min(100% - 2rem, 1200px); /* Container responsive */
  margin-inline: auto;
}

/* Version 2.1 - Modern CSS features */
@supports (color: oklch(0.7 0.15 200)) {
  :root {
    --primary: oklch(0.7 0.15 200); /* Modern color space */
  }
}
```

## 5. Kết luận

CSS là một ngôn ngữ phức tạp một cách "đánh lừa" (`deceptively complex`). Việc sử dụng và hiểu rõ một `CSS Reset` hiện đại giúp bạn có một mô hình tinh thần rõ ràng hơn về cách CSS hoạt động, giúp quá trình viết CSS trở nên trực quan và dễ đoán hơn. 

**Ví dụ so sánh workflow với và không có reset:**

```css
/* KHÔNG có reset - phải fight với browser defaults */
.card {
  /* Phải override margin của h2 */
}

.card h2 {
  margin-top: 0; /* Reset browser default */
  margin-bottom: 16px; /* Set custom spacing */
}

.card img {
  max-width: 100%; /* Prevent overflow */
  display: block; /* Remove inline spacing */
}

.card button {
  font-family: inherit; /* Match parent font */
  font-size: inherit; /* Match parent size */
  cursor: pointer; /* Better UX */
}
```

```css
/* CÓ reset - focus vào design */
.card {
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.card h2 {
  margin-bottom: 16px; /* Chỉ cần set spacing mong muốn */
  color: #2c3e50;
}

/* img, button đã được reset handle, không cần thêm code */
```

Bằng cách loại bỏ các vấn đề phổ biến từ `browser defaults` và cung cấp một nền tảng vững chắc, CSS Reset giúp bạn tập trung vào việc thiết kế và xây dựng giao diện người dùng một cách hiệu quả hơn.

**Checklist khi implement CSS Reset:**

1. ✅ **Chọn thời điểm phù hợp** - Dự án mới, không phải codebase cũ
2. ✅ **Customize cho project** - Điều chỉnh selector (#root, #__next, v.v.)
3. ✅ **Test trên multiple browsers** - Đảm bảo consistent
4. ✅ **Document overrides** - Ghi chú khi cần revert
5. ✅ **Monitor performance** - Đặc biệt với text-wrap features
6. ✅ **Keep evolving** - Cập nhật reset khi học được tricks mới

CSS Reset không phải là "magic bullet" nhưng là một foundation tool quan trọng giúp developer có starting point tốt hơn để build modern web interfaces.