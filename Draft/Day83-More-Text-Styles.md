# Hướng dẫn toàn diện về Văn bản và Phông chữ trên Web

Đây là các khái niệm và kỹ thuật liên quan đến văn bản và phông chữ trong phát triển web.

---

## Tổng quan về Văn bản và Phông chữ trên Web

Khi không có kiểu dáng cụ thể nào được áp dụng cho văn bản, trình duyệt sẽ tự động áp dụng các kiểu mặc định của riêng chúng, gọi là **tập tin kiểu trình duyệt (User Agent stylesheets)**, và những kiểu này có thể khác nhau giữa các trình duyệt. Người dùng cũng có thể tự cài đặt các tùy chọn hiển thị văn bản của riêng họ. Mặc dù văn bản trên web tự động thích ứng với kích thước màn hình (responsive) bằng cách tự xuống dòng khi chạm mép màn hình, việc trình bày văn bản sao cho thoải mái khi đọc là một yếu tố quan trọng của typography tốt.

**Typography (Kiểu chữ)** trên web không chỉ là việc chọn font phù hợp, mà còn phải cân nhắc sở thích của người dùng, kích thước văn bản, độ dài dòng và khoảng cách giữa các dòng văn bản.

### Ví dụ minh họa về tác động của User Agent Stylesheets:

```html
<!-- HTML đơn giản không có CSS -->
<h1>Tiêu đề chính</h1>
<p>Đây là một đoạn văn bản thông thường. Mỗi trình duyệt sẽ hiển thị nó với font và kích thước khác nhau.</p>
<em>Văn bản nhấn mạnh</em>
<strong>Văn bản quan trọng</strong>
```

**Kết quả trên các trình duyệt khác nhau:**
- Chrome: Times New Roman, 16px
- Firefox: Times, 16px  
- Safari: Times, 16px (nhưng có thể hơi khác về line-height)

---

## 1. Các Thẻ HTML để Nhấn mạnh và Tạo kiểu Văn bản

Trong HTML, có các thẻ được sử dụng để nhấn mạnh hoặc tạo kiểu cho văn bản, mỗi thẻ có một ý nghĩa ngữ nghĩa (semantic meaning) riêng.

### Thẻ `<em>` (Emphasis element)

Thẻ `<em>` trong HTML dùng để đánh dấu văn bản có **nhấn mạnh về ngữ điệu (stress emphasis)**.

**Đặc điểm:**
- Thẻ này có thể được lồng vào nhau, mỗi cấp độ lồng biểu thị một mức độ nhấn mạnh lớn hơn.
- Thông thường, thẻ này được hiển thị dưới dạng **chữ nghiêng (italic type)**.
- **Quan trọng**: Bạn không nên sử dụng `<em>` chỉ để áp dụng kiểu chữ nghiêng; thay vào đó, hãy sử dụng thuộc tính **CSS `font-style`** cho mục đích đó.

#### Ví dụ về cách sử dụng `<em>` để nhấn mạnh ngữ điệu:

```html
<!-- Ví dụ cơ bản -->
<p>Get out of bed <em>now</em>!</p>
<p>Just <em>do</em> it already!</p>
<p>We <em>had</em> to do something about it.</p>
<p>This is <em>not</em> a drill!</p>

<!-- Ví dụ lồng nhau để tăng cường nhấn mạnh -->
<p>I <em>really <em>really</em> love</em> programming!</p>

<!-- Ví dụ trong ngữ cảnh thực tế -->
<p>Để học lập trình hiệu quả, bạn cần <em>thực hành</em> mỗi ngày, không chỉ đọc lý thuyết.</p>
<p>Khi debug, hãy chú ý <em>từng dòng code</em> một cách cẩn thận.</p>
```

**Kết quả hiển thị:**
- Get out of bed *now*!
- Just *do* it already!
- We *had* to do something about it.
- This is *not* a drill!

Người đọc (người hoặc phần mềm) sẽ phát âm các từ in nghiêng với sự nhấn mạnh, sử dụng **trọng âm bằng lời nói (verbal stress)**.

### Sự khác biệt giữa `<i>` và `<em>`

Mặc dù cả hai thẻ `<em>` và `<i>` đều làm cho văn bản nghiêng theo mặc định, **ý nghĩa ngữ nghĩa (semantic meaning)** của chúng khác nhau.

#### So sánh chi tiết:

```html
<!-- EM: Nhấn mạnh ngữ điệu -->
<p>Bạn <em>phải</em> hoàn thành bài tập này!</p>
<p>Tôi <em>không</em> đồng ý với quan điểm đó.</p>

<!-- I: Văn bản được tách biệt khỏi văn xuôi thông thường -->
<p>Từ <i>the</i> là một mạo từ trong tiếng Anh.</p>
<p>Tàu <i>Titanic</i> đã chìm vào năm 1912.</p>
<p>Khái niệm <i>responsive design</i> rất quan trọng trong web development.</p>

<!-- Ví dụ sử dụng trong tài liệu kỹ thuật -->
<p>Function <i>getElementById()</i> trả về element có id được chỉ định.</p>
<p>Thuộc tính <i>display: flex</i> tạo một flex container.</p>

<!-- Sử dụng CITE cho tiêu đề tác phẩm -->
<p>Cuốn sách <cite>Clean Code</cite> của Robert Martin rất hữu ích.</p>
<p>Bộ phim <cite>The Matrix</cite> đã thay đổi cách nhìn về công nghệ.</p>
```

#### Ví dụ CSS cho mục đích trang trí:

```css
/* ĐÚNG: Sử dụng CSS để tạo kiểu */
.highlight {
  font-style: italic;
  color: #007acc;
  background-color: #f0f8ff;
}

.book-title {
  font-style: italic;
  font-weight: bold;
}

/* SAI: Không nên dùng em chỉ để tạo kiểu */
```

```html
<!-- Áp dụng CSS styling -->
<p>Đây là <span class="highlight">văn bản được tô sáng</span> chỉ để trang trí.</p>
<p>Cuốn <span class="book-title">JavaScript: The Good Parts</span> rất hay.</p>
```

---

## 2. Các Thuộc tính CSS cho Văn bản

CSS cung cấp nhiều thuộc tính để kiểm soát kiểu dáng văn bản:

### `font-style`

Thường được sử dụng để làm cho một phông chữ nghiêng. Nếu bạn muốn tất cả văn bản tiêu đề của mình nghiêng, bạn nên sử dụng `font-style` để thực hiện điều này.

#### Ví dụ chi tiết:

```css
/* Các giá trị của font-style */
.normal-text { font-style: normal; }
.italic-text { font-style: italic; }
.oblique-text { font-style: oblique; }

/* Ứng dụng thực tế */
h1 { font-style: italic; }
.quote { font-style: italic; color: #666; }
.technical-term { font-style: oblique; }
```

```html
<h1>Tiêu đề nghiêng</h1>
<p class="quote">"Đây là một câu trích dẫn quan trọng"</p>
<p>Thuật ngữ <span class="technical-term">API</span> rất phổ biến.</p>
```

### `letter-spacing` (Khoảng cách chữ)

Thay đổi khoảng cách giữa các chữ cái trong một từ. Có thể hữu ích để điều chỉnh các font tùy chỉnh có quá nhiều hoặc quá ít khoảng cách.

#### Ví dụ minh họa:

```css
/* Các giá trị letter-spacing khác nhau */
.tight { letter-spacing: -0.5px; }
.normal { letter-spacing: normal; }
.loose { letter-spacing: 1px; }
.very-loose { letter-spacing: 3px; }

/* Ứng dụng cho tiêu đề */
h1 { 
  letter-spacing: 2px; 
  text-transform: uppercase; 
}

/* Cải thiện khả năng đọc cho người khó đọc */
.dyslexia-friendly { 
  letter-spacing: 0.12em; 
  word-spacing: 0.16em; 
}
```

```html
<p class="tight">Văn bản với khoảng cách chữ hẹp</p>
<p class="normal">Văn bản với khoảng cách chữ bình thường</p>
<p class="loose">V ă n   b ả n   v ớ i   k h o ả n g   c á c h   c h ữ   r ộ n g</p>
<h1>TIÊU ĐỀ VỚI LETTER-SPACING</h1>
<p class="dyslexia-friendly">Văn bản thân thiện với người khó đọc</p>
```

### `line-height` (Chiều cao dòng)

Điều chỉnh khoảng cách giữa các dòng trong văn bản đã xuống dòng. Thêm một chút `line-height` có thể tăng khả năng đọc.

#### Ví dụ và tính toán tối ưu:

```css
/* Các giá trị line-height khác nhau */
.tight-lines { line-height: 1.0; }
.normal-lines { line-height: 1.4; }
.loose-lines { line-height: 1.8; }
.very-loose-lines { line-height: 2.0; }

/* Công thức tối ưu cho môi trường kỹ thuật số */
p { line-height: calc(1ex / 0.32); }

/* Responsive line-height */
.responsive-text {
  line-height: 1.4;
}

@media (min-width: 768px) {
  .responsive-text {
    line-height: 1.6;
  }
}

/* Line-height cho các loại nội dung khác nhau */
.heading { line-height: 1.2; }
.body-text { line-height: 1.6; }
.caption { line-height: 1.4; }
.code { line-height: 1.5; font-family: monospace; }
```

```html
<div class="tight-lines">
  <p>Đây là đoạn văn với line-height chặt chẽ. Đôi khi khó đọc khi có nhiều dòng vì các dòng quá gần nhau. Thích hợp cho tiêu đề ngắn.</p>
</div>

<div class="normal-lines">
  <p>Đây là đoạn văn với line-height bình thường. Dễ đọc và phù hợp cho hầu hết các trường hợp sử dụng. Đây là lựa chọn an toàn cho nội dung chính.</p>
</div>

<div class="loose-lines">
  <p>Đây là đoạn văn với line-height rộng. Dễ đọc và thích hợp cho những người có vấn đề về thị lực. Tuy nhiên, có thể tốn nhiều không gian trên trang.</p>
</div>

<div class="code">
  <pre>
function example() {
  return "Code với line-height phù hợp";
}
  </pre>
</div>
```

### `text-transform` (Chuyển đổi văn bản)

Thay đổi trường hợp của văn bản đã cho.

#### Tất cả các giá trị với ví dụ:

```css
.capitalize { text-transform: capitalize; }
.uppercase { text-transform: uppercase; }
.lowercase { text-transform: lowercase; }
.none { text-transform: none; }
.full-width { text-transform: full-width; }
```

```html
<!-- CAPITALIZE: Chữ cái đầu mỗi từ thành hoa -->
<p class="capitalize">
  Ban đầu: (this) "is" [a] –short– -test- «for» *the* _css_ ¿capitalize? ?¡transform!<br>
  Kết quả: (This) "Is" [A] –Short– -Test- «For» *The* _Css_ ¿Capitalize? ?¡Transform!
</p>

<!-- UPPERCASE: Tất cả chữ hoa -->
<p class="uppercase">
  Ban đầu: Lorem ipsum dolor sit amet, consectetur adipisicing elit…<br>
  Kết quả: LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISICING ELIT…
</p>

<!-- LOWERCASE: Tất cả chữ thường -->
<p class="lowercase">
  Ban đầu: HELLO WORLD! This Is A Test.<br>
  Kết quả: hello world! this is a test.
</p>

<!-- Ví dụ thực tế -->
<nav>
  <ul>
    <li><a href="#" class="uppercase">trang chủ</a></li>
    <li><a href="#" class="uppercase">sản phẩm</a></li>
    <li><a href="#" class="uppercase">liên hệ</a></li>
  </ul>
</nav>

<h2 class="capitalize">tiêu đề được viết hoa chữ cái đầu</h2>
```

#### Ví dụ `full-width` cho văn bản châu Á:

```css
.full-width-demo { text-transform: full-width; }
```

```html
<p>Bình thường: 0123456789abcdefghijklmnopqrstuvwxyz!"#$%&()*+,-./:;<=>?@{|}~</p>
<p class="full-width-demo">Full-width: ０１２３４５６７８９ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ！"＃＄％＆（）＊＋，－．／：；＜＝＞？＠｛｜｝～</p>
```

### `text-shadow` (Bóng văn bản)

Thuộc tính CSS này thêm bóng cho văn bản.

#### Ví dụ từ cơ bản đến nâng cao:

```css
/* Bóng cơ bản */
.simple-shadow { text-shadow: 1px 1px 2px black; }

/* Bóng màu sắc */
.colored-shadow { text-shadow: #fc0 1px 0 10px; }

/* Bóng không mờ */
.sharp-shadow { text-shadow: 5px 5px #558abb; }

/* Bóng với màu đầu tiên */
.red-shadow { text-shadow: red 2px 5px; }

/* Bóng đơn giản */
.basic-shadow { text-shadow: 5px 10px; }

/* Nhiều bóng phức tạp */
.multiple-shadows {
  text-shadow: 
    1px 1px 2px red, 
    0 0 1em blue, 
    0 0 0.2em blue;
}

/* Hiệu ứng neon */
.neon-effect {
  color: #fff;
  text-shadow: 
    0 0 5px #fff,
    0 0 10px #fff,
    0 0 15px #0073e6,
    0 0 20px #0073e6,
    0 0 35px #0073e6,
    0 0 40px #0073e6;
}

/* Hiệu ứng 3D */
.three-d-effect {
  text-shadow: 
    1px 1px 0px #ccc,
    2px 2px 0px #c9c9c9,
    3px 3px 0px #bbb,
    4px 4px 0px #b9b9b9,
    5px 5px 0px #aaa,
    6px 6px 0px #a9a9a9,
    7px 7px 0px #999,
    8px 8px 7px rgba(0,0,0,.4),
    8px 8px 1px rgba(0,0,0,.5),
    8px 8px 3px rgba(0,0,0,.3);
}

/* Hiệu ứng emboss */
.emboss-effect {
  color: #ccc;
  text-shadow: -1px -1px 0 #000, 1px 1px 0 #fff;
}
```

```html
<h1 class="simple-shadow">Bóng đơn giản</h1>
<h1 class="colored-shadow">Bóng màu vàng</h1>
<h1 class="multiple-shadows">Nhiều bóng phức tạp</h1>
<h1 class="neon-effect">Hiệu ứng Neon</h1>
<h1 class="three-d-effect">Hiệu ứng 3D</h1>
<h1 class="emboss-effect">Hiệu ứng Emboss</h1>

<!-- Ứng dụng thực tế -->
<header class="hero-section">
  <h1 style="text-shadow: 2px 2px 4px rgba(0,0,0,0.5);">
    Chào mừng đến với trang web của chúng tôi
  </h1>
</header>
```

### `text-overflow: ellipsis` (Dấu ba chấm)

Kỹ thuật hữu ích để rút gọn văn bản bị tràn bằng dấu ba chấm (`...`).

#### Ví dụ đầy đủ:

```css
/* Snippet cơ bản */
.ellipsis {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 200px; /* Cần có chiều rộng xác định */
}

/* Ứng dụng cho các trường hợp khác nhau */
.card-title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 250px;
}

.breadcrumb-item {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 150px;
  display: inline-block;
}

/* Ellipsis cho nhiều dòng (cần JavaScript hoặc line-clamp) */
.multiline-ellipsis {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Kết hợp với flex */
.flex-ellipsis {
  display: flex;
  min-width: 0; /* Quan trọng cho flex items */
}

.flex-ellipsis-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
}
```

```html
<!-- Ví dụ cơ bản -->
<div class="ellipsis">
  Đây là một đoạn văn bản rất dài sẽ bị cắt ngắn bằng dấu ba chấm khi vượt quá chiều rộng của container
</div>

<!-- Ứng dụng trong card -->
<div class="card">
  <h3 class="card-title">
    Tiêu đề bài viết rất dài này sẽ được cắt ngắn nếu vượt quá giới hạn
  </h3>
  <p class="multiline-ellipsis">
    Đây là nội dung bài viết. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </p>
</div>

<!-- Breadcrumb với ellipsis -->
<nav class="breadcrumb">
  <span class="breadcrumb-item">Trang chủ</span> > 
  <span class="breadcrumb-item">Danh mục với tên rất rất dài</span> > 
  <span class="breadcrumb-item">Sản phẩm</span>
</nav>

<!-- Flex container với ellipsis -->
<div class="flex-ellipsis">
  <span>Label:</span>
  <span class="flex-ellipsis-text">
    Giá trị rất dài này sẽ bị cắt ngắn trong flex container
  </span>
</div>
```

---

## 3. Phông chữ Web (Web Fonts)

**Phông chữ web (Web fonts)** cho phép các nhà phát triển vượt ra ngoài bộ font an toàn trên web và sử dụng các font tùy chỉnh trên ứng dụng web của họ.

### Khái niệm cơ bản

#### Ví dụ `@font-face` cơ bản:

```css
/* Khai báo font cơ bản */
@font-face {
  font-family: 'MyCustomFont';
  src: url('fonts/mycustomfont.woff2') format('woff2'),
       url('fonts/mycustomfont.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

/* Sử dụng font */
h1 {
  font-family: 'MyCustomFont', Arial, sans-serif;
}
```

#### Ví dụ với nhiều weight và style:

```css
/* Regular weight */
@font-face {
  font-family: 'Roboto';
  src: url('fonts/roboto-regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
}

/* Bold weight */
@font-face {
  font-family: 'Roboto';
  src: url('fonts/roboto-bold.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
}

/* Italic style */
@font-face {
  font-family: 'Roboto';
  src: url('fonts/roboto-italic.woff2') format('woff2');
  font-weight: 400;
  font-style: italic;
}

/* Sử dụng */
.heading {
  font-family: 'Roboto', sans-serif;
  font-weight: 700; /* Sẽ sử dụng roboto-bold.woff2 */
}

.emphasis {
  font-family: 'Roboto', sans-serif;
  font-style: italic; /* Sẽ sử dụng roboto-italic.woff2 */
}
```

### Tự lưu trữ phông chữ (Self-hosted fonts)

#### Ví dụ đầy đủ với fallback:

```css
/* Font tự lưu trữ với nhiều format */
@font-face {
  font-family: 'MyAwesomeFont';
  src: url('../fonts/myawesomefont.eot'); /* IE9 Compat Modes */
  src: url('../fonts/myawesomefont.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../fonts/myawesomefont.woff2') format('woff2'), /* Modern Browsers */
       url('../fonts/myawesomefont.woff') format('woff'), /* Pretty Modern Browsers */
       url('../fonts/myawesomefont.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../fonts/myawesomefont.svg#svgFontName') format('svg'); /* Legacy iOS */
  font-weight: normal;
  font-style: normal;
  font-display: swap; /* Tối ưu hiệu suất */
}

/* Cách sử dụng hiện đại (chỉ WOFF2) */
@font-face {
  font-family: 'ModernFont';
  src: url('../fonts/modern-font.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

/* Áp dụng với font stack đầy đủ */
body {
  font-family: 'ModernFont', 'Helvetica Neue', Helvetica, Arial, sans-serif;
}
```

### Sử dụng Google Fonts

#### Ví dụ HTML:

```html
<!DOCTYPE html>
<html>
<head>
  <!-- Preconnect để tối ưu hiệu suất -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  
  <!-- Import Google Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet">
</head>
<body>
  <h1 class="heading">Tiêu đề với Playfair Display</h1>
  <p class="body-text">Nội dung với Inter font</p>
</body>
</html>
```

#### CSS tương ứng:

```css
.heading {
  font-family: 'Playfair Display', serif;
  font-weight: 700;
}

.body-text {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  line-height: 1.6;
}

.emphasis {
  font-family: 'Inter', sans-serif;
  font-weight: 500;
}
```

#### Sử dụng CSS Import:

```css
/* Ở đầu file CSS */
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');

/* Sử dụng */
body {
  font-family: 'Roboto', sans-serif;
}
```

### Tối ưu hóa tải và hiển thị font

#### `font-display` examples:

```css
/* AUTO: Hành vi mặc định của trình duyệt */
@font-face {
  font-family: 'AutoFont';
  src: url('font.woff2') format('woff2');
  font-display: auto;
}

/* BLOCK: Chặn hiển thị cho đến khi font tải xong */
@font-face {
  font-family: 'BlockFont';
  src: url('font.woff2') format('woff2');
  font-display: block; /* Tốt cho icon fonts */
}

/* SWAP: Hiển thị ngay với fallback, sau đó swap */
@font-face {
  font-family: 'SwapFont';
  src: url('font.woff2') format('woff2');
  font-display: swap; /* Tốt nhất cho text fonts */
}

/* FALLBACK: Thời gian chờ ngắn, sau đó fallback */
@font-face {
  font-family: 'FallbackFont';
  src: url('font.woff2') format('woff2');
  font-display: fallback; /* Cân bằng giữa hiệu suất và UX */
}

/* OPTIONAL: Chỉ sử dụng nếu tải nhanh */
@font-face {
  font-family: 'OptionalFont';
  src: url('font.woff2') format('woff2');
  font-display: optional; /* Tốt nhất cho hiệu suất */
}
```

#### Preload fonts:

```html
<!DOCTYPE html>
<html>
<head>
  <!-- Preload font quan trọng -->
  <link rel="preload" href="/fonts/main-font.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="preload" href="/fonts/heading-font.woff2" as="font" type="font/woff2" crossorigin>
  
  <!-- CSS -->
  <style>
    @font-face {
      font-family: 'MainFont';
      src: url('/fonts/main-font.woff2') format('woff2');
      font-display: swap;
    }
    
    @font-face {
      font-family: 'HeadingFont';
      src: url('/fonts/heading-font.woff2') format('woff2');
      font-display: swap;
    }
  </style>
</head>
</html>
```

### Chia nhỏ font (Subset fonts)

#### Ví dụ với unicode-range:

```css
/* Font cho chữ Latin */
@font-face {
  font-family: 'MyFont';
  src: url('myfont-latin.woff2') format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

/* Font cho chữ Việt */
@font-face {
  font-family: 'MyFont';
  src: url('myfont-vietnamese.woff2') format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}

/* Font cho emoji */
@font-face {
  font-family: 'MyFont';
  src: url('myfont-emoji.woff2') format('woff2');
  unicode-range: U+1F600-1F64F, U+1F300-1F5FF, U+1F680-1F6FF, U+1F1E0-1F1FF;
}
```

#### Ví dụ thực tế cho website đa ngôn ngữ:

```html
<!DOCTYPE html>
<html lang="vi">
<head>
  <style>
    /* Font cho tiếng Việt */
    @font-face {
      font-family: 'MultiLangFont';
      src: url('font-vietnamese.woff2') format('woff2');
      unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9;
      font-display: swap;
    }
    
    /* Font cho tiếng Anh */
    @font-face {
      font-family: 'MultiLangFont';
      src: url('font-latin.woff2') format('woff2');
      unicode-range: U+0000-00FF;
      font-display: swap;
    }
    
    body {
      font-family: 'MultiLangFont', sans-serif;
    }
  </style>
</head>
<body>
  <h1>Xin chào! Hello!</h1>
  <p>Đây là văn bản tiếng Việt với các ký tự đặc biệt: ă, â, ê, ô, ơ, ư, đ</p>
  <p>This is English text with standard Latin characters.</p>
</body>
</html>
```

### Font hệ thống (System fonts)

#### CSS Tricks' system font stack:

```css
/* Font stack hệ thống hiện đại */
.system-font {
  font-family: 
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    "Helvetica Neue",
    Arial,
    "Noto Sans",
    sans-serif,
    "Apple Color Emoji",
    "Segoe UI Emoji",
    "Segoe UI Symbol",
    "Noto Color Emoji";
}

/* Cho code */
.system-mono {
  font-family:
    ui-monospace,
    SFMono-Regular,
    "SF Mono",
    Monaco,
    Consolas,
    "Liberation Mono",
    "Courier New",
    monospace;
}

/* Cho serif */
.system-serif {
  font-family:
    ui-serif,
    Georgia,
    Cambria,
    "Times New Roman",
    Times,
    serif;
}
```

#### Ví dụ sử dụng trong layout:

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: system-ui, sans-serif;
      line-height: 1.6;
    }
    
    .code-block {
      font-family: ui-monospace, 'Courier New', monospace;
      background: #f4f4f4;
      padding: 1rem;
      border-radius: 4px;
    }
    
    .quote {
      font-family: ui-serif, Georgia, serif;
      font-style: italic;
      font-size: 1.2em;
      margin: 2rem 0;
      padding-left: 2rem;
      border-left: 4px solid #ccc;
    }
  </style>
</head>
<body>
  <h1>Tiêu đề với System Font</h1>
  <p>Đây là đoạn văn bản sử dụng font hệ thống, sẽ hiển thị khác nhau trên từng thiết bị.</p>
  
  <div class="code-block">
    function systemFont() {
      return "Font này sẽ sử dụng monospace font của hệ thống";
    }
  </div>
  
  <blockquote class="quote">
    "Đây là một câu trích dẫn sử dụng serif font của hệ thống"
  </blockquote>
</body>
</html>
```

### Font biến đổi (Variable fonts)

#### Ví dụ cơ bản:

```css
/* Khai báo variable font */
@font-face {
  font-family: 'InterVariable';
  src: url('Inter-Variable.woff2') format('woff2');
  font-weight: 100 900; /* Hỗ trợ từ 100 đến 900 */
  font-style: normal;
}

/* Sử dụng các weight khác nhau */
.light { font-family: 'InterVariable'; font-weight: 200; }
.regular { font-family: 'InterVariable'; font-weight: 400; }
.medium { font-family: 'InterVariable'; font-weight: 500; }
.bold { font-family: 'InterVariable'; font-weight: 700; }
.extra-bold { font-family: 'InterVariable'; font-weight: 800; }

/* Sử dụng font-variation-settings cho control chi tiết */
.custom-variation {
  font-family: 'InterVariable';
  font-variation-settings: 'wght' 450, 'slnt' -10;
}
```

#### Ví dụ nâng cao với animation:

```css
@font-face {
  font-family: 'VariableFont';
  src: url('variable-font.woff2') format('woff2');
  font-weight: 100 900;
  font-style: oblique -10deg 10deg;
}

/* Animation weight */
.weight-animation {
  font-family: 'VariableFont';
  font-weight: 400;
  transition: font-weight 0.3s ease;
}

.weight-animation:hover {
  font-weight: 700;
}

/* Animation với font-variation-settings */
.full-animation {
  font-family: 'VariableFont';
  font-variation-settings: 'wght' 400, 'wdth' 100, 'slnt' 0;
  transition: font-variation-settings 0.3s ease;
}

.full-animation:hover {
  font-variation-settings: 'wght' 700, 'wdth' 125, 'slnt' -10;
}

/* Responsive variable font */
@media (max-width: 768px) {
  .responsive-variable {
    font-variation-settings: 'wght' 400, 'wdth' 85;
  }
}

@media (min-width: 769px) {
  .responsive-variable {
    font-variation-settings: 'wght' 300, 'wdth' 100;
  }
}
```

```html
<h1 class="weight-animation">Hover để xem animation weight</h1>
<p class="full-animation">Hover để xem animation đầy đủ</p>
<div class="responsive-variable">Text thay đổi theo screen size</div>

<!-- Ví dụ với slider control -->
<div class="font-playground">
  <h2 id="sample-text">Sample Text</h2>
  <label>Weight: <input type="range" min="100" max="900" value="400" id="weight-slider"></label>
  <label>Width: <input type="range" min="50" max="200" value="100" id="width-slider"></label>
</div>

<script>
const sampleText = document.getElementById('sample-text');
const weightSlider = document.getElementById('weight-slider');
const widthSlider = document.getElementById('width-slider');

function updateFont() {
  const weight = weightSlider.value;
  const width = widthSlider.value;
  sampleText.style.fontVariationSettings = `'wght' ${weight}, 'wdth' ${width}`;
}

weightSlider.addEventListener('input', updateFont);
widthSlider.addEventListener('input', updateFont);
</script>
```

---

## 4. Kích thước và Khoảng cách cho Khả năng đọc

### Kích thước văn bản (Text size)

#### Ví dụ responsive font size:

```css
/* Cách cũ - không nên dùng */
.bad-example {
  font-size: 4vw; /* Người dùng không thể zoom */
}

/* Cách tốt - kết hợp với relative units */
.good-example {
  font-size: calc(0.75rem + 1.5vw);
}

/* Cách tốt nhất - sử dụng clamp */
.best-example {
  font-size: clamp(1rem, 0.75rem + 1.5vw, 2rem);
  /*           min   preferred      max    */
}

/* Áp dụng cho các element khác nhau */
html {
  font-size: clamp(16px, 2.5vw, 22px);
}

h1 {
  font-size: clamp(1.5rem, 4vw, 3rem);
}

h2 {
  font-size: clamp(1.25rem, 3vw, 2.5rem);
}

h3 {
  font-size: clamp(1.125rem, 2.5vw, 2rem);
}

p {
  font-size: clamp(0.875rem, 2vw, 1.125rem);
}
```

#### Ví dụ type scale system:

```css
:root {
  --font-size-xs: clamp(0.75rem, 1.5vw, 0.875rem);
  --font-size-sm: clamp(0.875rem, 2vw, 1rem);
  --font-size-base: clamp(1rem, 2.5vw, 1.125rem);
  --font-size-lg: clamp(1.125rem, 3vw, 1.5rem);
  --font-size-xl: clamp(1.25rem, 3.5vw, 2rem);
  --font-size-2xl: clamp(1.5rem, 4vw, 2.5rem);
  --font-size-3xl: clamp(2rem, 5vw, 3rem);
}

.text-xs { font-size: var(--font-size-xs); }
.text-sm { font-size: var(--font-size-sm); }
.text-base { font-size: var(--font-size-base); }
.text-lg { font-size: var(--font-size-lg); }
.text-xl { font-size: var(--font-size-xl); }
.text-2xl { font-size: var(--font-size-2xl); }
.text-3xl { font-size: var(--font-size-3xl); }
```

```html
<article>
  <h1 class="text-3xl">Tiêu đề chính</h1>
  <h2 class="text-2xl">Tiêu đề phụ</h2>
  <p class="text-base">Đây là đoạn văn bản chính với kích thước cơ bản.</p>
  <p class="text-sm">Chú thích hoặc metadata với kích thước nhỏ hơn.</p>
  <span class="text-xs">Copyright text hoặc disclaimer.</span>
</article>
```

### Độ dài dòng (Line length)

#### Ví dụ với max-inline-size:

```css
/* Cách cũ với max-width */
.old-way {
  max-width: 66ch;
}

/* Cách mới với max-inline-size (hỗ trợ writing modes) */
.modern-way {
  max-inline-size: 66ch;
  margin-inline: auto; /* Center horizontally */
}

/* Responsive line length */
.article-content {
  max-inline-size: min(66ch, 90vw);
  margin-inline: auto;
  padding-inline: 1rem;
}

/* Khác nhau cho các loại content */
.body-text {
  max-inline-size: 66ch; /* 45-75 characters optimal */
}

.sidebar-text {
  max-inline-size: 45ch; /* Shorter for narrow columns */
}

.caption {
  max-inline-size: 50ch;
  font-size: 0.9em;
  color: #666;
}

.code-block {
  max-inline-size: 80ch; /* Wider for code */
  font-family: monospace;
}
```

```html
<main>
  <article class="article-content">
    <h1>Tiêu đề bài viết</h1>
    <p class="body-text">
      Đây là đoạn văn bản chính. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
    
    <aside class="sidebar">
      <p class="sidebar-text">
        Đây là sidebar với text ngắn hơn để phù hợp với cột hẹp.
      </p>
    </aside>
    
    <figure>
      <img src="image.jpg" alt="Mô tả hình ảnh">
      <figcaption class="caption">
        Đây là chú thích hình ảnh với độ dài dòng phù hợp.
      </figcaption>
    </figure>
    
    <pre class="code-block"><code>
function example() {
  // Code block có thể rộng hơn một chút
  return "Hello World!";
}
    </code></pre>
  </article>
</main>
```

### Căn chỉnh và Hyphenation (Gạch nối)

#### Ví dụ hyphenation theo ngôn ngữ:

```css
/* Hỗ trợ hyphenation tốt */
p[lang="en"] {
  text-align: justify;
  hyphens: auto;
  hyphenate-limit-chars: 6 3 2; /* min-word min-left min-right */
}

/* Không hỗ trợ hyphenation tốt */
p[lang="vi"] {
  text-align: left;
  hyphens: none;
}

/* Manual hyphenation */
.manual-hyphen {
  hyphens: manual;
  text-align: justify;
}

/* Hyphenation cho responsive design */
@media (max-width: 768px) {
  .responsive-hyphen {
    hyphens: auto;
    text-align: left;
  }
}

@media (min-width: 769px) {
  .responsive-hyphen {
    hyphens: none;
    text-align: justify;
  }
}
```

```html
<article>
  <!-- Tiếng Anh với auto hyphenation -->
  <p lang="en">
    This is a long paragraph in English that will benefit from automatic 
    hyphenation when justified. The browser will automatically break words 
    at appropriate points.
  </p>
  
  <!-- Tiếng Việt không dùng hyphenation -->
  <p lang="vi">
    Đây là đoạn văn tiếng Việt dài. Chúng ta không nên sử dụng căn đều 
    khi không có hỗ trợ gạch nối vì sẽ tạo ra khoảng trắng không đều.
  </p>
  
  <!-- Manual hyphenation -->
  <div class="manual-hyphen">
    <p>Sử dụng &hyphen; để tạo break points thủ công trong supercali&hyphen;fragilistic&hyphen;expialidocious</p>
  </div>
  
  <!-- Responsive hyphenation -->
  <p class="responsive-hyphen">
    Text này sẽ có hành vi hyphenation khác nhau trên mobile và desktop.
  </p>
</article>
```

### Độ tương phản (Contrast)

#### Ví dụ với CSS variables và color schemes:

```css
:root {
  /* Light theme */
  --bg-color: white;
  --text-color: #333;
  --text-color-muted: #666;
  --accent-color: #0066cc;
}

/* Dark theme */
@media (prefers-color-scheme: dark) {
  :root {
    --bg-color: #1a1a1a;
    --text-color: #e0e0e0;
    --text-color-muted: #b0b0b0;
    --accent-color: #4da6ff;
  }
}

/* Áp dụng colors */
body {
  background-color: var(--bg-color);
  color: var(--text-color);
  transition: background-color 0.3s ease, color 0.3s ease;
}

.muted-text {
  color: var(--text-color-muted);
}

.accent-text {
  color: var(--accent-color);
}

/* Contrast checker với CSS */
.high-contrast {
  background: black;
  color: white;
  /* Contrast ratio: 21:1 (AAA) */
}

.medium-contrast {
  background: #666;
  color: white;
  /* Contrast ratio: ~4.5:1 (AA) */
}

.low-contrast {
  background: #f0f0f0;
  color: #666;
  /* Contrast ratio: ~3:1 (Fail) */
}

/* Dynamic contrast với calc() */
.dynamic-contrast {
  --lightness: 20%;
  background: hsl(200, 50%, var(--lightness));
  color: hsl(200, 50%, calc(100% - var(--lightness)));
}
```

#### Ví dụ theme switcher:

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    :root {
      --bg: #ffffff;
      --text: #333333;
      --accent: #0066cc;
    }
    
    [data-theme="dark"] {
      --bg: #1a1a1a;
      --text: #e0e0e0;
      --accent: #4da6ff;
    }
    
    [data-theme="sepia"] {
      --bg: #f4f1ea;
      --text: #5c4b37;
      --accent: #8b4513;
    }
    
    [data-theme="high-contrast"] {
      --bg: #000000;
      --text: #ffffff;
      --accent: #ffff00;
    }
    
    body {
      background: var(--bg);
      color: var(--text);
      transition: all 0.3s ease;
      font-family: system-ui, sans-serif;
      line-height: 1.6;
      padding: 2rem;
    }
    
    .theme-switcher {
      margin-bottom: 2rem;
    }
    
    button {
      background: var(--accent);
      color: var(--bg);
      border: none;
      padding: 0.5rem 1rem;
      margin: 0.25rem;
      border-radius: 4px;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <div class="theme-switcher">
    <button onclick="setTheme('light')">Light</button>
    <button onclick="setTheme('dark')">Dark</button>
    <button onclick="setTheme('sepia')">Sepia</button>
    <button onclick="setTheme('high-contrast')">High Contrast</button>
  </div>
  
  <article>
    <h1>Demo Contrast và Color Scheme</h1>
    <p>Đây là đoạn văn bản demo để kiểm tra các theme khác nhau.</p>
    <p>Các theme này đảm bảo đủ độ tương phản theo tiêu chuẩn WCAG.</p>
  </article>
  
  <script>
    function setTheme(theme) {
      if (theme === 'light') {
        document.documentElement.removeAttribute('data-theme');
      } else {
        document.documentElement.setAttribute('data-theme', theme);
      }
      localStorage.setItem('theme', theme);
    }
    
    // Load saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme && savedTheme !== 'light') {
      setTheme(savedTheme);
    }
    
    // Respect system preference
    if (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
  </script>
</body>
</html>
```

---

## 5. Khả năng tiếp cận (Accessibility) và Các Phương pháp hay nhất

### Khả năng đọc (Legibility)

#### Ví dụ font cho người khó đọc:

```css
/* Font settings thân thiện với dyslexia */
.dyslexia-friendly {
  font-family: 'OpenDyslexic', 'Comic Sans MS', sans-serif;
  font-size: 1.2em;
  line-height: 1.5;
  letter-spacing: 0.12em;
  word-spacing: 0.16em;
  text-align: left; /* Không justify */
}

/* Cải thiện contrast */
.high-readability {
  background: #fdfdf8; /* Slightly warm white */
  color: #1a1a1a; /* Near black */
  padding: 1.5rem;
  border-radius: 8px;
}

/* Giảm motion cho người nhạy cảm */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* Focus indicators rõ ràng */
.accessible-link:focus {
  outline: 3px solid #4A90E2;
  outline-offset: 2px;
  background: rgba(74, 144, 226, 0.1);
}
```

```html
<article class="high-readability">
  <h1>Tiêu đề dễ đọc</h1>
  <p class="dyslexia-friendly">
    Đây là đoạn văn được tối ưu cho người có khó khăn trong việc đọc. 
    Font, spacing và contrast đều được điều chỉnh phù hợp.
  </p>
  <a href="#" class="accessible-link">Link với focus indicator rõ ràng</a>
</article>
```

### Lời khuyên cho đội ngũ phát triển

#### Component system ví dụ:

```css
/* Design system với semantic tokens */
:root {
  /* Font families */
  --font-primary: 'Inter', system-ui, sans-serif;
  --font-heading: 'Playfair Display', serif;
  --font-mono: 'JetBrains Mono', monospace;
  
  /* Font weights */
  --weight-light: 300;
  --weight-regular: 400;
  --weight-medium: 500;
  --weight-semibold: 600;
  --weight-bold: 700;
  
  /* Font sizes - fluid scale */
  --text-xs: clamp(0.75rem, 1vw, 0.875rem);
  --text-sm: clamp(0.875rem, 1.5vw, 1rem);
  --text-base: clamp(1rem, 2vw, 1.125rem);
  --text-lg: clamp(1.125rem, 2.5vw, 1.5rem);
  --text-xl: clamp(1.25rem, 3vw, 2rem);
  --text-2xl: clamp(1.5rem, 4vw, 2.5rem);
  --text-3xl: clamp(2rem, 5vw, 3rem);
  
  /* Line heights */
  --leading-tight: 1.25;
  --leading-normal: 1.5;
  --leading-relaxed: 1.75;
  
  /* Letter spacing */
  --tracking-tight: -0.025em;
  --tracking-normal: 0;
  --tracking-wide: 0.025em;
}

/* Utility classes */
.text-xs { font-size: var(--text-xs); }
.text-sm { font-size: var(--text-sm); }
.text-base { font-size: var(--text-base); }
.text-lg { font-size: var(--text-lg); }
.text-xl { font-size: var(--text-xl); }
.text-2xl { font-size: var(--text-2xl); }
.text-3xl { font-size: var(--text-3xl); }

.font-light { font-weight: var(--weight-light); }
.font-regular { font-weight: var(--weight-regular); }
.font-medium { font-weight: var(--weight-medium); }
.font-semibold { font-weight: var(--weight-semibold); }
.font-bold { font-weight: var(--weight-bold); }

.leading-tight { line-height: var(--leading-tight); }
.leading-normal { line-height: var(--leading-normal); }
.leading-relaxed { line-height: var(--leading-relaxed); }

.tracking-tight { letter-spacing: var(--tracking-tight); }
.tracking-normal { letter-spacing: var(--tracking-normal); }
.tracking-wide { letter-spacing: var(--tracking-wide); }

/* Semantic components */
.heading-1 {
  font-family: var(--font-heading);
  font-size: var(--text-3xl);
  font-weight: var(--weight-bold);
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-tight);
}

.heading-2 {
  font-family: var(--font-heading);
  font-size: var(--text-2xl);
  font-weight: var(--weight-semibold);
  line-height: var(--leading-tight);
}

.body-text {
  font-family: var(--font-primary);
  font-size: var(--text-base);
  font-weight: var(--weight-regular);
  line-height: var(--leading-normal);
  max-inline-size: 66ch;
}

.caption {
  font-family: var(--font-primary);
  font-size: var(--text-sm);
  font-weight: var(--weight-regular);
  line-height: var(--leading-normal);
  color: var(--text-color-muted);
}

.code-text {
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  line-height: var(--leading-relaxed);
  background: var(--bg-code);
  padding: 0.25em 0.5em;
  border-radius: 4px;
}
```

#### HTML structure ví dụ:

```html
<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Typography System Demo</title>
</head>
<body>
  <main>
    <article>
      <header>
        <h1 class="heading-1">Tiêu đề chính của bài viết</h1>
        <p class="caption">Xuất bản ngày 28/07/2025 • 5 phút đọc</p>
      </header>
      
      <section>
        <h2 class="heading-2">Phần giới thiệu</h2>
        <p class="body-text">
          Đây là đoạn văn bản chính sử dụng typography system. Tất cả các 
          thông số đều được định nghĩa thông qua CSS custom properties để 
          dễ dàng maintain và scale.
        </p>
        
        <p class="body-text">
          Code example: <code class="code-text">font-size: var(--text-base)</code>
          sẽ tự động responsive theo viewport.
        </p>
      </section>
      
      <section>
        <h2 class="heading-2">Danh sách best practices</h2>
        <ul class="body-text">
          <li>Sử dụng semantic HTML elements</li>
          <li>Định nghĩa consistent spacing scale</li>
          <li>Test với screen readers</li>
          <li>Đảm bảo sufficient color contrast</li>
        </ul>
      </section>
    </article>
  </main>
</body>
</html>
```

### Kiểm tra hiệu suất đọc

#### Tools và techniques:

```css
/* Performance monitoring */
.font-loading-indicator {
  opacity: 0;
  transition: opacity 0.3s ease;
}

.fonts-loaded .font-loading-indicator {
  opacity: 1;
}

/* Critical CSS inlined */
.critical-text {
  font-family: system-ui, sans-serif;
  font-size: clamp(1rem, 2vw, 1.125rem);
  line-height: 1.6;
}

/* Progressive enhancement */
.fonts-loaded .critical-text {
  font-family: 'CustomFont', system-ui, sans-serif;
}
```

```html
<!-- Font loading detection -->
<script>
// Font loading API
if ('fonts' in document) {
  document.fonts.ready.then(() => {
    document.documentElement.classList.add('fonts-loaded');
  });
} else {
  // Fallback for older browsers
  setTimeout(() => {
    document.documentElement.classList.add('fonts-loaded');
  }, 3000);
}

// Performance monitoring
const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    if (entry.entryType === 'measure') {
      console.log(`${entry.name}: ${entry.duration}ms`);
    }
  }
});

observer.observe({ entryTypes: ['measure'] });

// Measure font loading time
performance.mark('font-load-start');
document.fonts.ready.then(() => {
  performance.mark('font-load-end');
  performance.measure('font-loading-time', 'font-load-start', 'font-load-end');
});
</script>
```

#### A/B testing setup:

```html
<!-- Reading performance test -->
<div id="reading-test" class="hidden">
  <h2>Đọc thử đoạn văn sau và trả lời câu hỏi:</h2>
  <div class="test-content" data-variant="A">
    <p style="font-family: Georgia; line-height: 1.4;">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit...
    </p>
  </div>
  <div class="test-content" data-variant="B">
    <p style="font-family: 'Inter'; line-height: 1.6; letter-spacing: 0.01em;">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit...
    </p>
  </div>
  <button onclick="startReadingTest()">Bắt đầu test</button>
</div>

<script>
function startReadingTest() {
  const startTime = Date.now();
  const variant = Math.random() > 0.5 ? 'A' : 'B';
  
  // Show content for selected variant
  document.querySelector(`[data-variant="${variant}"]`).style.display = 'block';
  
  // Track reading time and comprehension
  // Implementation would depend on specific metrics needed
}
</script>
```

### Responsive Typography Examples

#### Complete responsive system:

```css
/* Base responsive typography */
:root {
  /* Fluid type scale */
  --step--2: clamp(0.69rem, 0.66rem + 0.18vw, 0.80rem);
  --step--1: clamp(0.83rem, 0.78rem + 0.29vw, 1.00rem);
  --step-0: clamp(1.00rem, 0.91rem + 0.43vw, 1.25rem);
  --step-1: clamp(1.20rem, 1.07rem + 0.63vw, 1.56rem);
  --step-2: clamp(1.44rem, 1.26rem + 0.89vw, 1.95rem);
  --step-3: clamp(1.73rem, 1.48rem + 1.24vw, 2.44rem);
  --step-4: clamp(2.07rem, 1.73rem + 1.70vw, 3.05rem);
  --step-5: clamp(2.49rem, 2.03rem + 2.31vw, 3.81rem);
  
  /* Fluid space scale */
  --space-3xs: clamp(0.25rem, 0.23rem + 0.11vw, 0.31rem);
  --space-2xs: clamp(0.50rem, 0.45rem + 0.22vw, 0.63rem);
  --space-xs: clamp(0.75rem, 0.68rem + 0.33vw, 0.94rem);
  --space-s: clamp(1.00rem, 0.91rem + 0.43vw, 1.25rem);
  --space-m: clamp(1.50rem, 1.36rem + 0.65vw, 1.88rem);
  --space-l: clamp(2.00rem, 1.82rem + 0.87vw, 2.50rem);
  --space-xl: clamp(3.00rem, 2.73rem + 1.30vw, 3.75rem);
  --space-2xl: clamp(4.00rem, 3.64rem + 1.74vw, 5.00rem);
  --space-3xl: clamp(6.00rem, 5.45rem + 2.61vw, 7.50rem);
}

/* Apply to elements */
body {
  font-size: var(--step-0);
  line-height: 1.6;
}

h1 { 
  font-size: var(--step-5); 
  margin-block: var(--space-l) var(--space-m);
}

h2 { 
  font-size: var(--step-4); 
  margin-block: var(--space-l) var(--space-s);
}

h3 { 
  font-size: var(--step-3); 
  margin-block: var(--space-m) var(--space-s);
}

h4 { 
  font-size: var(--step-2); 
  margin-block: var(--space-m) var(--space-xs);
}

h5 { 
  font-size: var(--step-1); 
  margin-block: var(--space-s) var(--space-xs);
}

h6 { 
  font-size: var(--step-0); 
  margin-block: var(--space-s) var(--space-xs);
}

p { 
  margin-block: var(--space-s);
  max-inline-size: 66ch;
}

small { 
  font-size: var(--step--1); 
}

/* Responsive containers */
.container {
  max-inline-size: min(90vw, 70rem);
  margin-inline: auto;
  padding-inline: var(--space-s);
}

.narrow-container {
  max-inline-size: min(90vw, 50rem);
  margin-inline: auto;
  padding-inline: var(--space-s);
}

.wide-container {
  max-inline-size: min(95vw, 90rem);
  margin-inline: auto;
  padding-inline: var(--space-s);
}
```

### Accessibility Testing Examples

#### Screen reader optimized content:

```html
<!-- Proper heading hierarchy -->
<article>
  <h1>Tiêu đề chính</h1>
  
  <section>
    <h2>Phần 1: Giới thiệu</h2>
    <p>Nội dung phần 1...</p>
    
    <h3>Mục 1.1: Chi tiết</h3>
    <p>Chi tiết mục 1.1...</p>
    
    <h3>Mục 1.2: Ví dụ</h3>
    <p>Ví dụ mục 1.2...</p>
  </section>
  
  <section>
    <h2>Phần 2: Phát triển</h2>
    <p>Nội dung phần 2...</p>
  </section>
</article>

<!-- Screen reader only content -->
<style>
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
</style>

<button>
  <span class="sr-only">Đóng hộp thoại</span>
  <span aria-hidden="true">×</span>
</button>

<!-- Skip links -->
<a href="#main-content" class="skip-link">
  Bỏ qua đến nội dung chính
</a>

<style>
.skip-link {
  position: absolute;
  top: -40px;
  left: 6px;
  background: #000;
  color: #fff;
  padding: 8px;
  text-decoration: none;
  border-radius: 0 0 4px 4px;
}

.skip-link:focus {
  top: 0;
}
</style>
```

#### Color contrast validation:

```javascript
// JavaScript function to check contrast ratio
function getContrastRatio(color1, color2) {
  function getLuminance(color) {
    const rgb = color.match(/\d+/g);
    const sRGB = rgb.map(val => {
      val = parseInt(val) / 255;
      return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * sRGB[0] + 0.7152 * sRGB[1] + 0.0722 * sRGB[2];
  }
  
  const lum1 = getLuminance(color1);
  const lum2 = getLuminance(color2);
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  
  return (brightest + 0.05) / (darkest + 0.05);
}

// Usage example
const textColor = 'rgb(51, 51, 51)';
const bgColor = 'rgb(255, 255, 255)';
const ratio = getContrastRatio(textColor, bgColor);

console.log(`Contrast ratio: ${ratio.toFixed(2)}`);
console.log(`WCAG AA: ${ratio >= 4.5 ? 'Pass' : 'Fail'}`);
console.log(`WCAG AAA: ${ratio >= 7 ? 'Pass' : 'Fail'}`);
```

### Print Styles

#### Optimized for printing:

```css
/* Print styles */
@media print {
  * {
    background: transparent !important;
    color: black !important;
    box-shadow: none !important;
    text-shadow: none !important;
  }
  
  body {
    font-size: 12pt;
    line-height: 1.4;
    font-family: Georgia, serif;
  }
  
  h1, h2, h3, h4, h5, h6 {
    page-break-after: avoid;
    font-family: Arial, sans-serif;
  }
  
  h1 { font-size: 24pt; }
  h2 { font-size: 18pt; }
  h3 { font-size: 14pt; }
  
  p {
    orphans: 3;
    widows: 3;
  }
  
  blockquote {
    border-left: 4px solid #ccc;
    padding-left: 1em;
    margin: 1em 0;
    font-style: italic;
  }
  
  /* Show URLs for links */
  a[href]:after {
    content: " (" attr(href) ")";
    font-size: 10pt;
    color: #666;
  }
  
  /* Hide non-essential elements */
  nav, .sidebar, .advertisement {
    display: none;
  }
  
  /* Page breaks */
  .page-break {
    page-break-before: always;
  }
  
  .no-break {
    page-break-inside: avoid;
  }
}
```

---

## Tổng kết

Việc tạo ra một trải nghiệm văn bản tốt trên web đòi hỏi sự hiểu biết sâu sắc về HTML, CSS, các nguyên tắc typography, và cân nhắc kỹ lưỡng về hiệu suất và khả năng tiếp cận. 

### Checklist cho Typography tốt:

#### Cơ bản:
- ✅ Sử dụng semantic HTML elements
- ✅ Đảm bảo contrast ratio đạt WCAG AA (4.5:1)
- ✅ Responsive font sizes with clamp()
- ✅ Proper line height (1.4-1.6 for body text)
- ✅ Optimal line length (45-75 characters)

#### Nâng cao:
- ✅ Web font optimization (WOFF2, font-display: swap)
- ✅ Progressive enhancement
- ✅ Variable fonts for better performance
- ✅ Proper font loading strategies
- ✅ Dark mode support

#### Accessibility:
- ✅ Screen reader optimization
- ✅ Focus indicators
- ✅ Reduced motion support
- ✅ Proper heading hierarchy
- ✅ Alternative text for images

#### Performance:
- ✅ Font subsetting
- ✅ Preload critical fonts
- ✅ Minimize font variants
- ✅ Use system fonts when appropriate
- ✅ Monitor Core Web Vitals

Hy vọng tài liệu này với các ví dụ chi tiết giúp bạn có cái nhìn toàn diện và thực tế về việc làm việc với typography trên web!



## Tài liệu phải đọc khi ĐÓNG CỌC LẦN 2
1. https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-more-text-styles
1. https://thehackernews.com/2022/01/german-court-rules-websites-embedding.html
1. https://fileinfo.com/filetypes/font
1. https://www.w3schools.com/css/css3_fonts.asp
1. https://developer.mozilla.org/en-US/docs/Web/HTML/Element/em
1. https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform
1. https://developer.mozilla.org/en-US/docs/Web/CSS/text-shadow
1. https://css-tricks.com/snippets/css/truncate-string-with-ellipsis/
1. https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Web_fonts
1. https://web.dev/articles/font-best-practices
1. https://web.dev/learn/design/typography
1. https://www.smashingmagazine.com/2020/07/css-techniques-legibility/
1. https://modernfontstacks.com/

1. https://fontlibrary.org/
1. https://fonts.google.com/
1. https://fonts.bunny.net/
1. https://fonts.adobe.com/

> ⭐ **Theo dõi [kênh Threads](https://www.threads.com/@kaitaku.88) để đọc bài mới mỗi ngày!** ⭐  

**[<== Bài Trước  ](link)          |[  Trang Chủ  ](./README.md)|           [  Bài Sau ==>](link)**