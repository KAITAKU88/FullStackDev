# Bộ Chọn Nâng Cao (Advanced Selectors) trong CSS

Khi bạn đã quen thuộc với các bộ chọn CSS cơ bản như theo loại (type), lớp (class), hoặc ID, để trở thành một "chuyên gia phẫu thuật CSS" thực thụ, bạn cần những công cụ chuyên biệt hơn. Các bộ chọn nâng cao cho phép bạn nhắm mục tiêu các phần tử một cách **cụ thể và chi tiết hơn**. Chúng đặc biệt hữu ích khi bạn không thể (hoặc không muốn) thay đổi cấu trúc HTML của mình.

## I. Các Bộ Kết Hợp (Combinators)

Các bộ kết hợp được sử dụng để kết hợp các bộ chọn khác, cho phép chúng ta chọn các phần tử dựa trên vị trí của chúng trong Cây DOM so với các phần tử khác.

### 1. Bộ Kết Hợp Hậu Duệ (Descendant Combinator)

**Ký hiệu**: Một khoảng trắng ( )

**Mô tả**: Chọn các phần tử là hậu duệ (con, cháu, chắt...) của phần tử khác.

```css
/* Chọn tất cả thẻ p nằm bên trong main */
main p { 
    color: blue; 
}

/* Chọn tất cả thẻ span nằm bên trong div có class container */
.container span { 
    font-weight: bold; 
}
```

**Ví dụ HTML**:
```html
<main>
    <p>Đoạn văn này sẽ có màu xanh</p>
    <div>
        <p>Đoạn văn này cũng có màu xanh (là cháu của main)</p>
    </div>
</main>
<p>Đoạn văn này không có màu xanh (không nằm trong main)</p>
```

### 2. Bộ Kết Hợp Con Trực Tiếp (Child Combinator)

**Ký hiệu**: Dấu lớn hơn ( > )

**Mô tả**: Chỉ chọn các phần tử là con trực tiếp, không bao gồm cháu, chắt.

```css
/* Chỉ chọn li là con trực tiếp của ul */
ul > li { 
    list-style-type: square; 
}

/* Chọn div con trực tiếp của main */
main > div { 
    margin: 20px; 
}
```

**Ví dụ HTML**:
```html
<ul>
    <li>Item 1 (có style square)</li>
    <li>Item 2 (có style square)
        <ul>
            <li>Sub item (không có style square)</li>
        </ul>
    </li>
</ul>
```

### 3. Bộ Kết Hợp Anh Em Liền Kề (Adjacent Sibling Combinator)

**Ký hiệu**: Dấu cộng ( + )

**Mô tả**: Chọn phần tử ngay lập tức theo sau phần tử khác (cùng cấp).

```css
/* Chọn p ngay sau h1 */
h1 + p { 
    font-size: 1.2em;
    margin-top: 0;
}

/* Chọn div ngay sau div có class "first" */
.first + div { 
    background-color: #f0f0f0; 
}
```

**Ví dụ HTML**:
```html
<article>
    <h1>Tiêu đề bài viết</h1>
    <p>Đoạn văn này sẽ có font lớn hơn (ngay sau h1)</p>
    <p>Đoạn văn này bình thường</p>
</article>
```

### 4. Bộ Kết Hợp Anh Em Tổng Quát (General Sibling Combinator)

**Ký hiệu**: Dấu ngã ( ~ )

**Mô tả**: Chọn tất cả anh em theo sau, không cần liền kề.

```css
/* Chọn tất cả p theo sau h2 (cùng cấp) */
h2 ~ p { 
    color: gray; 
}

/* Chọn tất cả img theo sau .gallery */
.gallery ~ img { 
    border: 2px solid #ccc; 
}
```

**Ví dụ HTML**:
```html
<section>
    <h2>Phần nội dung</h2>
    <div>Div này không bị ảnh hưởng</div>
    <p>Đoạn văn này có màu xám</p>
    <span>Span này không bị ảnh hưởng</span>
    <p>Đoạn văn này cũng có màu xám</p>
</section>
```

## II. Các Bộ Chọn Giả Lớp (Pseudo-classes) và Giả Phần Tử (Pseudo-elements)

### Sự khác biệt cơ bản:

- **Giả lớp (Pseudo-classes)**: Sử dụng **một dấu hai chấm** (:), chọn phần tử dựa trên trạng thái hoặc vị trí
- **Giả phần tử (Pseudo-elements)**: Sử dụng **hai dấu hai chấm** (::), tạo và chọn các phần tử không tồn tại trong HTML

## III. Các Loại Giả Lớp Phổ Biến

### 1. Giả Lớp Tương Tác Người Dùng

```css
/* Liên kết chưa được truy cập */
a:link { 
    color: blue; 
}

/* Liên kết đã được truy cập */
a:visited { 
    color: purple; 
}

/* Khi hover chuột */
a:hover { 
    color: red;
    text-decoration: underline;
}

/* Khi được focus (tab hoặc click) */
input:focus { 
    border: 2px solid #007bff;
    outline: none;
}

/* Khi đang được nhấn */
button:active { 
    background-color: #005a9e; 
}
```

**Ví dụ thực tế**:
```html
<nav>
    <a href="#home">Trang chủ</a>
    <a href="#about">Giới thiệu</a>
    <a href="#contact">Liên hệ</a>
</nav>

<form>
    <input type="text" placeholder="Nhập tên của bạn">
    <button type="submit">Gửi</button>
</form>
```

### 2. Giả Lớp Cấu Trúc

```css
/* Phần tử đầu tiên */
li:first-child { 
    font-weight: bold; 
}

/* Phần tử cuối cùng */
li:last-child { 
    border-bottom: none; 
}

/* Phần tử duy nhất */
p:only-child { 
    text-align: center; 
}

/* Phần tử trống */
div:empty { 
    display: none; 
}

/* Chọn phần tử thứ n */
tr:nth-child(odd) { 
    background-color: #f9f9f9; 
}

tr:nth-child(even) { 
    background-color: white; 
}

/* Chọn mỗi phần tử thứ 3 */
.item:nth-child(3n) { 
    margin-right: 0; 
}

/* Chọn 3 phần tử đầu tiên */
.card:nth-child(-n+3) { 
    border: 2px solid gold; 
}
```

**Ví dụ HTML cho nth-child**:
```html
<ul class="menu">
    <li>Menu 1 (in đậm - first-child)</li>
    <li>Menu 2</li>
    <li>Menu 3</li>
    <li>Menu 4</li>
    <li>Menu 5 (không có border dưới - last-child)</li>
</ul>

<table>
    <tr><td>Hàng 1 (màu trắng)</td></tr>
    <tr><td>Hàng 2 (màu xám - even)</td></tr>
    <tr><td>Hàng 3 (màu trắng - odd)</td></tr>
    <tr><td>Hàng 4 (màu xám - even)</td></tr>
</table>
```

### 3. Giả Lớp of-type

```css
/* Thẻ p đầu tiên */
p:first-of-type { 
    font-size: 1.5em; 
}

/* Thẻ img cuối cùng */
img:last-of-type { 
    margin-bottom: 0; 
}

/* Mỗi thẻ h2 thứ 2 */
h2:nth-of-type(2n) { 
    color: #007bff; 
}

/* Chỉ có 1 thẻ span */
span:only-of-type { 
    background-color: yellow; 
}
```

**Ví dụ HTML**:
```html
<article>
    <h1>Tiêu đề chính</h1>
    <p>Đoạn văn đầu tiên (font lớn - first-of-type)</p>
    <div>Div này không ảnh hưởng</div>
    <p>Đoạn văn thứ hai</p>
    <p>Đoạn văn cuối</p>
    <img src="image1.jpg" alt="Ảnh 1">
    <img src="image2.jpg" alt="Ảnh 2 (margin-bottom: 0)">
</article>
```

### 4. Giả Lớp Form

```css
/* Input được kích hoạt */
input:enabled { 
    background-color: white; 
}

/* Input bị vô hiệu hóa */
input:disabled { 
    background-color: #f5f5f5;
    color: #999;
}

/* Checkbox/radio được chọn */
input:checked + label { 
    color: green;
    font-weight: bold;
}

/* Input hợp lệ */
input:valid { 
    border-color: green; 
}

/* Input không hợp lệ */
input:invalid { 
    border-color: red; 
}

/* Input bắt buộc */
input:required { 
    border-left: 3px solid orange; 
}

/* Input tùy chọn */
input:optional { 
    border-left: 3px solid gray; 
}
```

**Ví dụ HTML**:
```html
<form>
    <div>
        <input type="email" required placeholder="Email bắt buộc">
    </div>
    <div>
        <input type="text" placeholder="Tên (tùy chọn)">
    </div>
    <div>
        <input type="text" disabled value="Trường bị khóa">
    </div>
    <div>
        <input type="checkbox" id="agree">
        <label for="agree">Tôi đồng ý với điều khoản</label>
    </div>
</form>
```

### 5. Giả Lớp Khác

```css
/* Phần tử được target bằng anchor */
section:target { 
    background-color: lightyellow;
    padding: 20px;
}

/* Phần tử phủ định */
p:not(.special) { 
    color: #666; 
}

/* Kết hợp nhiều điều kiện */
input:not([type="submit"]):not([type="button"]) { 
    padding: 8px; 
}
```

**Ví dụ HTML cho :target**:
```html
<nav>
    <a href="#section1">Đến phần 1</a>
    <a href="#section2">Đến phần 2</a>
</nav>

<section id="section1">
    <h2>Phần 1</h2>
    <p>Nội dung phần 1 (sẽ có nền vàng khi được target)</p>
</section>

<section id="section2">
    <h2>Phần 2</h2>
    <p>Nội dung phần 2</p>
</section>
```

## IV. Các Loại Giả Phần Tử Phổ Biến

### 1. Giả Phần Tử Văn Bản

```css
/* Ký tự đầu tiên */
p::first-letter { 
    font-size: 3em;
    float: left;
    line-height: 1;
    margin-right: 5px;
}

/* Dòng đầu tiên */
p::first-line { 
    font-weight: bold;
    color: #007bff;
}

/* Văn bản được chọn */
::selection { 
    background-color: #ff6b35;
    color: white;
}
```

**Ví dụ HTML**:
```html
<article>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
</article>
```

### 2. Giả Phần Tử Nội Dung Được Tạo

```css
/* Thêm nội dung trước phần tử */
.note::before { 
    content: "📝 ";
    font-weight: bold;
}

/* Thêm nội dung sau phần tử */
.external-link::after { 
    content: " 🔗";
    font-size: 0.8em;
}

/* Tạo tooltip */
.tooltip {
    position: relative;
}

.tooltip::after {
    content: attr(data-tooltip);
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    background: black;
    color: white;
    padding: 5px;
    border-radius: 3px;
    font-size: 12px;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s;
}

.tooltip:hover::after {
    opacity: 1;
}

/* Clearfix với pseudo-element */
.clearfix::after {
    content: "";
    display: table;
    clear: both;
}
```

**Ví dụ HTML**:
```html
<div class="note">Đây là một ghi chú quan trọng</div>
<a href="https://example.com" class="external-link">Liên kết ngoài</a>
<span class="tooltip" data-tooltip="Thông tin thêm">Hover để xem tooltip</span>

<div class="clearfix">
    <div style="float: left;">Float left</div>
    <div style="float: right;">Float right</div>
</div>
```

### 3. Các Giả Phần Tử Khác

```css
/* Tùy chỉnh marker của list */
li::marker { 
    content: "→ ";
    color: #007bff;
}

/* Placeholder text */
input::placeholder { 
    color: #999;
    font-style: italic;
}

/* Backdrop của dialog/modal */
dialog::backdrop { 
    background: rgba(0, 0, 0, 0.5); 
}
```

## V. Bộ Chọn Thuộc Tính (Attribute Selectors)

### 1. Thuộc Tính Tồn Tại

```css
/* Chọn img có thuộc tính alt */
img[alt] { 
    border: 2px solid green; 
}

/* Chọn input có thuộc tính required */
input[required] { 
    border-left: 3px solid red; 
}
```

### 2. Thuộc Tính Bằng Chính Xác

```css
/* Input type password */
input[type="password"] { 
    font-family: monospace; 
}

/* Link đến trang chủ */
a[href="/"] { 
    font-weight: bold; 
}

/* Button submit */
button[type="submit"] { 
    background-color: #007bff;
    color: white;
}
```

### 3. Thuộc Tính Chứa Chuỗi

```css
/* Link chứa "mailto" */
a[href*="mailto"] { 
    color: #e74c3c; 
}

/* Class chứa "btn" */
[class*="btn"] { 
    padding: 10px 15px;
    border: none;
    cursor: pointer;
}

/* Src chứa "thumbnail" */
img[src*="thumbnail"] { 
    max-width: 150px; 
}
```

### 4. Thuộc Tính Bắt Đầu Bằng

```css
/* Link https */
a[href^="https://"] { 
    color: green; 
}

/* Link tải file */
a[href^="download/"] { 
    font-weight: bold; 
}

/* ID bắt đầu bằng "section" */
[id^="section"] { 
    margin: 20px 0; 
}
```

### 5. Thuộc Tính Kết Thúc Bằng

```css
/* Link file PDF */
a[href$=".pdf"]::after { 
    content: " 📄"; 
}

/* Link file hình ảnh */
a[href$=".jpg"], 
a[href$=".png"], 
a[href$=".gif"] { 
    display: inline-block;
    padding: 5px;
    background: #f0f0f0;
}

/* Email addresses */
a[href$="@gmail.com"] { 
    color: #ea4335; 
}
```

### 6. Thuộc Tính Trong Danh Sách

```css
/* Class chứa từ "active" */
[class~="active"] { 
    background-color: #007bff;
    color: white;
}

/* Rel chứa "nofollow" */
a[rel~="nofollow"] { 
    opacity: 0.7; 
}
```

### 7. Thuộc Tính Ngôn Ngữ

```css
/* Tất cả variant tiếng Trung */
[lang|="zh"] { 
    font-family: "SimSun", serif; 
}

/* Tiếng Anh */
[lang|="en"] { 
    font-family: "Arial", sans-serif; 
}
```

### 8. Cờ Phân Biệt Chữ Hoa/Thường

```css
/* Không phân biệt chữ hoa/thường */
a[href*="EXAMPLE" i] { 
    color: red; 
}

/* Phân biệt chữ hoa/thường (mặc định) */
[class*="Button" s] { 
    text-transform: uppercase; 
}
```

**Ví dụ HTML tổng hợp cho Attribute Selectors**:
```html
<div>
    <img src="photo.jpg" alt="Mô tả ảnh">
    <img src="thumbnail/small.jpg">
    
    <a href="https://secure-site.com">Link HTTPS</a>
    <a href="document.pdf">Tài liệu PDF</a>
    <a href="mailto:test@gmail.com">Email Gmail</a>
    
    <button type="submit" class="btn btn-primary active">Gửi</button>
    <input type="password" required>
    
    <p lang="zh-CN">中文内容</p>
    <p lang="en-US">English content</p>
</div>
```

## VI. Độ Đặc Hiệu (Specificity) trong CSS

Độ đặc hiệu quyết định quy tắc CSS nào sẽ được áp dụng khi có xung đột.

### Cách tính điểm đặc hiệu (a,b,c,d):

1. **a**: Inline styles (1,0,0,0)
2. **b**: IDs (0,1,0,0)  
3. **c**: Classes, pseudo-classes, attributes (0,0,1,0)
4. **d**: Elements, pseudo-elements (0,0,0,1)

### Ví dụ tính toán:

```css
/* 0,0,0,1 */
p { color: black; }

/* 0,0,1,0 */
.text { color: blue; }

/* 0,1,0,0 */
#content { color: red; }

/* 0,1,1,1 */
#content .text p { color: green; }

/* 0,0,2,1 */
p.text.highlight { color: orange; }

/* 0,0,1,2 */
div p.text { color: purple; }

/* 0,0,2,0 */
.text:hover { color: pink; }

/* 0,1,0,2 */
#sidebar h2::first-line { color: gray; }
```

### Quy tắc !important:

```css
/* Thắng tất cả (trừ !important khác có specificity cao hơn) */
p { color: yellow !important; }

/* Cách sử dụng thận trọng !important */
.utility-hidden { display: none !important; }
.utility-text-center { text-align: center !important; }
```

## VII. Ví Dụ Thực Tế Tổng Hợp

### 1. Menu Navigation

```css
/* Menu cơ bản */
.nav ul { 
    list-style: none;
    padding: 0;
}

.nav li { 
    display: inline-block; 
}

/* Item đầu tiên */
.nav li:first-child a { 
    padding-left: 0; 
}

/* Item cuối */
.nav li:last-child a { 
    padding-right: 0; 
}

/* Active state */
.nav a:hover,
.nav a.active { 
    background-color: #007bff;
    color: white;
}

/* Dropdown menu */
.nav li:hover > ul { 
    display: block; 
}
```

### 2. Form Styling

```css
/* Input focus */
input:focus,
textarea:focus { 
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0,123,255,0.3);
}

/* Required fields */
input:required::after { 
    content: " *";
    color: red;
}

/* Valid/Invalid states */
input:valid { border-color: green; }
input:invalid:not(:placeholder-shown) { border-color: red; }

/* Checkbox styling */
input[type="checkbox"]:checked + label::before { 
    content: "✓";
    color: green;
}
```

### 3. Table Styling

```css
/* Zebra striping */
table tr:nth-child(odd) { 
    background-color: #f9f9f9; 
}

/* Header styling */
table th:first-child { 
    border-top-left-radius: 5px; 
}

table th:last-child { 
    border-top-right-radius: 5px; 
}

/* Hover effect */
table tr:hover { 
    background-color: #e3f2fd; 
}
```

### 4. Card Layout

```css
/* Card grid */
.card:nth-child(3n) { 
    margin-right: 0; 
}

/* First card special */
.card:first-child { 
    border: 2px solid gold; 
}

/* Empty cards */
.card:empty { 
    display: none; 
}

/* Card with image */
.card img:only-child { 
    width: 100%;
    height: 200px;
    object-fit: cover;
}
```

## VIII. Lời Khuyên và Best Practices

### 1. Hiệu suất
- Tránh sử dụng quá nhiều bộ chọn phức tạp lồng nhau
- Universal selector (*) có thể chậm nếu lạm dụng
- Sử dụng class thay vì attribute selector khi có thể

### 2. Bảo trì
- Giữ specificity thấp để dễ override
- Sử dụng !important một cách tiết kiệm
- Comment cho các bộ chọn phức tạp

### 3. Tương thích
- Kiểm tra browser support cho các pseudo-class mới
- Sử dụng fallback cho các tính năng không được hỗ trợ rộng rãi

### 4. Tài nguyên học tập
- **CSS Diner**: Trò chơi luyện tập selectors
- **MDN Web Docs**: Tài liệu tham khảo chi tiết
- **CSS-Tricks**: Bài viết và ví dụ thực tế
- **Specificity Calculator**: Công cụ tính toán độ đặc hiệu

---

*Tài liệu này cung cấp kiến thức toàn diện về Advanced CSS Selectors. Hãy thực hành thường xuyên để thành thạo những công cụ mạnh mẽ này!*



## Tài liệu phải đọc khi ĐÓNG CỌC LẦN 2

1. https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-advanced-selectors
1. https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Combinators
1. https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements
1. https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes
1. https://css-tricks.com/specifics-on-css-specificity/
1. https://stackoverflow.com/questions/15899615/whats-the-difference-between-css3s-root-pseudo-class-and-html
1. https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements
1. https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors
1. https://learn.shayhowe.com/advanced-html-css/complex-selectors/
1. https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Basic_selectors/Selectors_Tasks
1. https://www.youtube.com/kepowob/search?query=pseudo
1. https://css-tricks.com/almanac/selectors/
1. https://www.w3schools.com/cssref/css_selectors.asp
1. https://www.freecodecamp.org/news/css-selectors-cheat-sheet/
1. https://www.growingwiththeweb.com/2012/08/pseudo-classes-vs-pseudo-elements.html
1. http://coding.smashingmagazine.com/2009/08/17/taming-advanced-css-selectors/
1. https://css-tricks.com/attribute-selectors/

> ⭐ **Theo dõi [kênh Threads](https://www.threads.com/@kaitaku.88) để đọc bài mới mỗi ngày!** ⭐  

**[<== Bài Trước  ](link)          |[  Trang Chủ  ](./README.md)|           [  Bài Sau ==>](link)**