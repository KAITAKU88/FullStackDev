# Hướng dẫn toàn diện về CSS Functions
Đây là chi tiết về các hàm CSS (`CSS Functions`), tập trung vào các hàm toán học (`Math Functions`) và cách chúng được sử dụng để tạo ra các thiết kế web linh hoạt và đáp ứng (`responsive design`).

---

## A. Tổng quan về các Hàm CSS (CSS Functions)

Các hàm CSS (`CSS functions`) là những đoạn mã có thể tái sử dụng, thực hiện các tác vụ cụ thể và trả về một giá trị CSS (`CSS value`) cho một thuộc tính CSS (`CSS property`). Bạn có thể nhận biết chúng qua cú pháp: một từ theo sau bởi một cặp dấu ngoặc đơn `()` chứa thông tin bên trong. Thông tin bên trong dấu ngoặc đơn được gọi là "đối số" (`arguments`), và mỗi đối số được hàm sử dụng theo một cách cụ thể.

### Ví dụ cơ bản về CSS Functions

Ví dụ phổ biến về các hàm CSS bao gồm:
*   `rgb(0, 0, 0)` để định nghĩa màu sắc.
*   `linear-gradient(90deg, blue, red)` để tạo hình ảnh gradient (`gradient image`).

```css
/* Ví dụ thực tế */
.button {
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  color: rgb(255, 255, 255);
  border-radius: 8px;
  padding: 12px 24px;
}

.card {
  background: radial-gradient(circle at center, #667eea, #764ba2);
  transform: translateY(-10px) rotate(2deg);
}
```

Không giống như các ngôn ngữ lập trình, CSS không cho phép chúng ta tự tạo các hàm riêng. Thay vào đó, ngôn ngữ này đi kèm với một danh sách các hàm dựng sẵn (`premade functions`) giúp giải quyết các vấn đề tạo kiểu phổ biến nhất.

Ngoài việc định nghĩa màu sắc, có một số hàm CSS rất hữu ích khi thiết kế bố cục (`layout`) và kích thước (`sizing`) của trang web, đặc biệt quan trọng trong thiết kế đáp ứng (`responsive design`).

---

## B. Các Hàm Toán học Chính trong CSS (Main CSS Math Functions)

Các hàm toán học (`Math functions`) cho phép các giá trị số (`numeric values`) trong CSS được viết dưới dạng biểu thức toán học (`mathematical expressions`). Bốn hàm toán học chính được đề cập và hỗ trợ rộng rãi trong các trình duyệt hiện đại là `calc()`, `min()`, `max()`, và `clamp()`. Các hàm này có thể được sử dụng ở bên phải của bất kỳ biểu thức CSS nào mà chúng có ý nghĩa, và chúng cho phép biểu thức toán học đầy đủ bên trong các đối số của mình mà không cần lồng `calc()`.

### 1. Hàm `calc()`

Hàm `calc()` thực hiện các phép tính số học cơ bản (`basic arithmetic calculations`) trên các giá trị số. Mục đích chính của nó là thực hiện các phép toán cơ bản, với khả năng trộn lẫn các loại đơn vị (`mixing units`) (ví dụ: `rem` và `vw`).

#### Các trường hợp sử dụng mạnh mẽ nhất của `calc()`:

**Trộn lẫn đơn vị (`Mixing units`)**: `calc()` có thể xử lý các phép toán ngay cả khi bạn đang trộn lẫn các đơn vị khác nhau như `vh`, `rem`, và `px`.

**Khả năng lồng `calc()` (`Nesting calc()`)**: Bạn có thể lồng các hàm `calc()` vào nhau (ví dụ: `calc(calc() - calc())`).

#### Ví dụ cơ bản:

Để đặt chiều cao của một phần tử `main` bằng `100vh` (100% chiều cao của khung nhìn - `viewport height`) trừ đi chiều cao của `header` (3rem) và `footer` (40px):

```css
:root {
  --header: 3rem;
  --footer: 40px;
  --main: calc(100vh - calc(var(--header) + var(--footer)));
}

/* Sử dụng trong layout */
.main-content {
  height: var(--main);
  overflow-y: auto;
}
```

#### Ví dụ thực tế với `calc()`:

```css
/* 1. Tạo layout flexible với sidebar */
.container {
  display: flex;
}

.sidebar {
  width: 250px;
  background: #2c3e50;
}

.main-content {
  width: calc(100% - 250px);
  padding: 20px;
}

/* 2. Responsive grid với gap động */
.grid-item {
  width: calc(50% - 10px); /* 50% trừ đi một nửa gap */
  margin: 5px;
}

@media (min-width: 768px) {
  .grid-item {
    width: calc(33.333% - 13.333px); /* 3 cột với gap 20px */
    margin: 10px;
  }
}

/* 3. Centering với absolute positioning */
.modal {
  position: absolute;
  top: calc(50% - 200px); /* 50% trừ đi một nửa chiều cao */
  left: calc(50% - 300px); /* 50% trừ đi một nửa chiều rộng */
  width: 600px;
  height: 400px;
}

/* 4. Dynamic font size */
.responsive-text {
  font-size: calc(16px + 0.5vw);
  line-height: calc(1.2em + 0.2vw);
}
```

Ở đây, `--header`, `--footer`, và `--main` là các biến CSS (`CSS variables`), `calc()` giúp chúng ta tính toán ngay cả khi các đơn vị (`vh`, `rem`, `px`) khác nhau.

> **`Bài sau chúng ta sẽ học về các biến CSS `**

#### Lợi ích của `calc()`:
*   Cho phép bạn tránh việc gán cứng các giá trị hoặc phải thêm giải pháp JavaScript để tính toán giá trị cần thiết.
*   Đặc biệt hữu ích khi kết hợp với các biến CSS (`CSS variables`), `calc()` có thể giúp bạn tránh lặp lại các quy tắc CSS.

#### Ví dụ thực tế: Tạo bảng màu sinh động bằng `calc()` và `hsl()` (Generative Color Palettes)

Bạn có thể mở rộng khả năng của `calc()` bằng cách truyền vào các thuộc tính tùy chỉnh CSS (`CSS custom properties`). Một ví dụ rất hữu ích là tạo bảng màu nhất quán bằng cách sử dụng `hsl()` (là viết tắt của `hue`, `saturation`, và `lightness`). Bằng cách cung cấp giá trị cho độ bão hòa (`saturation`), độ sáng (`lightness`), và một màu gốc (`base hue`), chúng ta có thể tính toán các giá trị bổ sung để xây dựng một bảng màu đầy đủ.

```css
/* Gốc cho toàn bộ khối màu */
.colors {
  --base-hue: 140;
  --saturation: 4580%;
  --base-lightness: 80%; /* Thay vì --lightness, ta dùng base-lightness */
  --rotation: 60;
  color: #222;
  text-align: center;
}

/* Kiểu chung cho tất cả ô màu */
.color {
  /* Mặc định mỗi ô sẽ dùng base-lightness */
  --lightness: var(--base-lightness);

  background-color: hsl(var(--hue), var(--saturation), var(--lightness));
  padding: 0.25rem;
  border-radius: 8px;
  margin: 4px;
  display: inline-block;
  width: 100px;
  height: 60px;
  line-height: 60px;
  font-weight: bold;
}

/* Các màu cơ bản theo hue */
.color1 {
  --hue: calc(var(--base-hue));
}

.color2 {
  --hue: calc(var(--base-hue) + var(--rotation));
}

.color3 {
  --hue: calc(var(--base-hue) + var(--rotation) * 2);
}

.color4 {
  --hue: calc(var(--base-hue) + var(--rotation) * 3);
}

.color5 {
  --hue: calc(var(--base-hue) + var(--rotation) * 4);
}

/* Biến thể sáng hơn */
.color-light {
  --lightness: calc(var(--base-lightness) + 10%);
}

/* Biến thể tối hơn */
.color-dark {
  --lightness: calc(var(--base-lightness) - 20%);
}

```

**HTML tương ứng:**
```html
<div class="colors">
  <div class="color color1">Color 1</div>
  <div class="color color2">Color 2</div>
  <div class="color color3">Color 3</div>
  <div class="color color4 color-light">Light</div>
  <div class="color color5 color-dark">Dark</div>
</div>
```

---

### 2. Hàm `min()`

Hàm `min()` chọn giá trị nhỏ nhất từ một danh sách các tùy chọn. Nó có vẻ nghịch lý, nhưng **`min()` hoạt động như một giới hạn cho giá trị *tối đa* được phép** (`behaves as a boundary for the maximum allowed value`).
> Có nghĩa là nếu bạn muốn một phần tử rộng tối đa là 150px thì sử dụng `min(150px,...)`, xem ví dụ dưới:

#### Ví dụ cơ bản:

Nếu bạn đặt `width: min(150px, 100%);`:
*   Nếu có đủ 150px không gian (ví dụ: khung hình lớn hơn 150px), `min()` sẽ chọn 150px vì nó nhỏ hơn 100% của phần tử cha (`parent's width`).
*   Nếu không có đủ 150px (ví dụ: khung hình nhỏ hơn 150px), hình ảnh sẽ chuyển sang 100% chiều rộng của phần tử cha, vì 100% sẽ là giá trị nhỏ hơn.

```css
/* Ví dụ thực tế với hình ảnh responsive */
.responsive-image {
  width: min(400px, 100%);
  height: auto;
  border-radius: 8px;
}

/* Container với chiều rộng tối đa */
.container {
  width: min(1200px, 95vw);
  margin: 0 auto;
  padding: 0 20px;
}
```

Bạn cũng có thể thực hiện các phép toán cơ bản bên trong `min()`:
```css
.element {
  width: min(80ch, 100vw - 2rem);
  padding: min(5%, 50px);
}
```

#### Lợi ích của `min()`:
*   **Tạo website đáp ứng (`responsive websites`)**: `min()` làm rất tốt việc giúp chúng ta tạo website đáp ứng.
*   **Kích thước đáp ứng mà không cần Media Queries (`Responsive sizing without media queries`)**: Đây là một lợi ích đáng kể, giúp đơn giản hóa mã CSS.

#### Ví dụ thực tế:

**Chiều rộng container (`Container Width`)**: Để đảm bảo khối văn bản không vượt quá 75 ký tự (`ch` unit) trong khi vẫn linh hoạt theo chiều rộng màn hình:
```css
.article {
  max-width: min(75ch, 90vw);
  margin: 0 auto;
  padding: 2rem;
  line-height: 1.6;
}

/* Ví dụ với card layout */
.card {
  width: min(350px, 100%);
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  margin-bottom: 1rem;
}
```

**Kích thước phần tử đáp ứng (`Responsive Element Sizing`)**: Bạn có thể sử dụng `min()` để kiểm soát kích thước hình đại diện (`avatar`) trong một luồng bình luận:
```css
.avatar {
  width: min(64px, 15%, 10vw);
  height: min(64px, 15%, 10vw);
  border-radius: 50%;
  object-fit: cover;
}

/* Ví dụ với navigation menu */
.nav-item {
  padding: min(1rem, 3vw) min(1.5rem, 4vw);
  font-size: min(1.1rem, 4vw);
}
```

**Điều khiển kích thước nền (`background-size`)**: Khi bạn muốn giới hạn sự phát triển của một hình ảnh nền (`background image`):
```css
.hero-section {
  background: #1F1B1C url('hero-image.jpg') no-repeat center;
  background-size: min(600px, 100%);
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Background pattern với kích thước giới hạn */
.pattern-bg {
  background: url('pattern.svg') repeat;
  background-size: min(200px, 20vw);
}
```

**Khoảng cách giữa các phần tử (`Dynamic Margin`)**: Để đặt giá trị tối đa cho `margin`:
```css
.section {
  margin: min(7vh, 2.75rem) 0 1.05rem;
}

/* Responsive spacing cho grid */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: min(2rem, 5vw);
  padding: min(2rem, 5vw);
}

/* Dynamic padding cho buttons */
.button {
  padding: min(0.75rem, 2vw) min(1.5rem, 4vw);
  font-size: min(1rem, 3.5vw);
  border-radius: min(8px, 1vw);
}
```

---

### 3. Hàm `max()`

Hàm `max()` hoạt động ngược lại với `min()`. Nó sẽ chọn giá trị lớn nhất có thể trong dấu ngoặc đơn. Bạn có thể coi **`max()` như một cách để đảm bảo giá trị *tối thiểu* được phép cho một thuộc tính** (`ensuring a minimum allowed value for a property`).

> Điều này nghĩa là: nếu bạn muốn một phần tử ít nhất phải rộng 300px, nhưng cũng phản hồi linh hoạt theo viewport, bạn có thể làm: `width: max(300px, 50%);`

#### Ví dụ cơ bản:

Xét thuộc tính `width: max(100px, 4em, 50%);`:
*   `max()` sẽ chọn giá trị lớn nhất từ danh sách này.
*   Miễn là `4em` hoặc `50%` có chiều dài lớn hơn `100px`, `max()` sẽ chọn giá trị lớn hơn trong số chúng.
*   Nếu chúng nhỏ hơn `100px` (ví dụ: do sở thích kích thước phông chữ của người dùng, hoặc kích thước cửa sổ trình duyệt/mức thu phóng của họ), thì `100px` sẽ được chọn vì nó là lớn nhất.
*   Trong ví dụ này, `100px` hoạt động như một giá trị bảo vệ (`guard value`): `width` sẽ không bao giờ được đặt nhỏ hơn `100px`.

```css
/* Ví dụ thực tế với minimum sizes */
.card {
  width: max(300px, 30vw);
  min-height: max(200px, 25vh);
  padding: max(1rem, 2vw);
}

.sidebar {
  width: max(200px, 20%);
  background: #f8f9fa;
}
```

#### Lợi ích của `max()`:
*   **Hữu ích khi cửa sổ xem đặc biệt nhỏ hoặc người dùng tăng kích thước nội dung bằng cách sử dụng tính năng thu phóng của trình duyệt** (`zoom feature`).
*   Là một công cụ tốt cần biết cho các dự án mà khả năng tiếp cận (`accessibility`) là quan trọng.

#### Ví dụ thực tế:

**`font-size` của tiêu đề trang trí (`Decorative Headings`)**: Để văn bản trang trí tỷ lệ theo kích thước khung nhìn (`viewport size`):
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Decorative Headings</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: sans-serif;
    }

    .hero-title {
      font-size: max(2rem, 8vw);
      font-weight: bold;
      line-height: 1.1;
      text-align: center;
      margin: 2rem 0;
      position: relative;
    }

    .section {
      position: relative;
      margin: 4rem 2rem;
    }

    .section-title {
      position: relative;
      font-weight: bold;
      margin-bottom: 1rem;
    }

    .section-title::before {
      content: attr(data-title);
      font-size: max(50px, 13vw);
      font-weight: 900;
      opacity: 0.1;
      position: absolute;
      top: -20px;
      left: 0;
      pointer-events: none;
      z-index: -1;
    }

    h1 { font-size: max(2rem, 5vw); }
    h2 { font-size: max(1.5rem, 4vw); }
    h3 { font-size: max(1.25rem, 3vw); }
    p  { font-size: max(1rem, 2.5vw); }
  </style>
</head>
<body>

  <div class="hero-title">Welcome to My Website</div>

  <section class="section">
    <div class="section-title" data-title="About"> <!-- Decorative text -->
      <h2>About Us</h2>
    </div>
    <p>
      We are a creative studio focused on modern web design and responsive typography. Our work is about blending technology with design in meaningful ways.
    </p>
  </section>

  <section class="section">
    <div class="section-title" data-title="Services">
      <h2>Our Services</h2>
    </div>
    <p>
      From branding to frontend development, we offer complete design solutions. Our typography system ensures beautiful readability across devices.
    </p>
  </section>

</body>
</html>

```

**Khoảng cách lề theo ngữ cảnh (`Contextual Margins`)**: Để xử lý lề (`margins`) một cách duyên dáng hơn, đặc biệt quan trọng cho Khả năng tiếp cận WCAG (`WCAG Accessibility`):
```css
.content-section + .content-section {
  margin-top: max(8vh, 3rem);
}

/* Responsive spacing cho layout */
.container {
  padding: max(1rem, 3vw) max(1rem, 5vw);
}

.grid-item {
  margin-bottom: max(1.5rem, 4vh);
}

/* Dynamic gap cho flexbox */
.flex-container {
  display: flex;
  gap: max(1rem, 3vw);
  flex-wrap: wrap;
}
```

**Ngăn chặn trình duyệt tự động phóng to trên iOS (`Prevent Browser Zoom on Inputs in iOS`)**: Để khắc phục tình trạng trình duyệt tự động phóng to khi bạn chọn một trường nhập liệu (`form input`) trên iOS, xảy ra khi `font-size` của `input` nhỏ hơn `16px`:
```css
input, textarea, select {
  font-size: max(16px, 1rem);
  padding: max(0.75rem, 2vw);
  border-radius: max(4px, 0.5vw);
}

/* Form styling với accessibility */
.form-group {
  margin-bottom: max(1rem, 3vh);
}

.form-label {
  font-size: max(14px, 0.875rem);
  margin-bottom: max(0.5rem, 1vh);
}
```

**Đường viền tiêu điểm tương đối (`Relative Focus Outlines`)**: Để đảm bảo kích thước đường viền tiêu điểm (`focus outline`) tối thiểu là `2px` trong khi vẫn cho phép nó *phát triển* tương đối với phần tử:
- Hãy zoom in zoom out để thấy sự thay đổi kích thước của đường viền
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Relative Focus Outlines</title>
  <style>
    :root {
      --outline-size: max(2px, 0.125rem);
      --outline-style: solid;
      --outline-color: #007acc;
    }

    /* Apply to focusable elements */
    a, button, input, textarea {
      --outline-size: max(2px, 0.08em);
    }

    a:focus,
    button:focus,
    input:focus,
    textarea:focus {
      outline: var(--outline-size) var(--outline-style) var(--outline-color);
      outline-offset: var(--outline-size);
    }

    /* Special enhanced outline for .button class */
    .button:focus {
      outline: max(3px, 0.1em) solid #007acc;
      outline-offset: max(2px, 0.1em);
      box-shadow: 0 0 0 max(4px, 0.2em) rgba(0, 122, 204, 0.2);
    }

    /* Basic styling for layout */
    body {
      font-family: sans-serif;
      padding: 2rem;
    }

    .button {
      padding: 0.5rem 1rem;
      font-size: 1rem;
      border: none;
      background-color: #007acc;
      color: white;
      border-radius: 4px;
      cursor: pointer;
    }

    a {
      display: inline-block;
      margin-top: 1rem;
      color: #007acc;
      text-decoration: none;
      font-weight: bold;
    }

    input, textarea {
      display: block;
      width: 100%;
      max-width: 400px;
      margin-top: 1rem;
      padding: 0.5rem;
      font-size: 1rem;
      border: 1px solid #ccc;
      border-radius: 4px;
    }

    textarea {
      height: 100px;
    }
  </style>
</head>
<body>

  <h1>Relative Focus Outline Demo</h1>

  <button class="button">Primary Button</button>

  <a href="#">Focusable Link</a>

  <input type="text" placeholder="Focusable input field" />

  <textarea placeholder="Focusable textarea"></textarea>

</body>
</html>

```

**Kích thước mục tiêu dễ tiếp cận (`Accessible Target Sizes`)**: Để đảm bảo các khu vực tương tác (ví dụ: nút bấm, biểu tượng) có kích thước tối thiểu là `44px` theo tiêu chí WCAG SC 2.5.5:
```css
.icon-button {
  width: max(44px, 2.75rem);
  height: max(44px, 2.75rem);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: none;
  background: #007acc;
  color: white;
  cursor: pointer;
}

/* Touch-friendly navigation */
.nav-link {
  min-height: max(44px, 3rem);
  padding: max(0.5rem, 1vw) max(1rem, 2vw);
  display: flex;
  align-items: center;
}

/* Accessible form controls */
.checkbox, .radio {
  width: max(20px, 1.25rem);
  height: max(20px, 1.25rem);
}
```

**Sử dụng `max()` làm giá trị dự phòng cho `aspect-ratio`**: Khi sử dụng `aspect-ratio` nhưng cần cung cấp giá trị dự phòng (`fallback`) cho các trình duyệt chưa hỗ trợ:
```css
.media-container img {
  width: 100%;
  /* Fallback for `aspect-ratio` of defining a height */
  height: max(18vh, 12rem);
  object-fit: cover;
  border-radius: 8px;
}

/* When supported, use `aspect-ratio` */
@supports (aspect-ratio: 1) {
  .media-container img {
    aspect-ratio: 16 / 9;
    height: auto;
  }
}

/* Video responsive với minimum height */
.video-container {
  position: relative;
  width: 100%;
  height: max(250px, 30vh);
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 8px;
}
```

**Lề động (`Dynamic Margin`)**: Để có lề động giữa các phần tử thiết kế:
```css
.gradient-element {
  background: linear-gradient(
    to top, 
    #000 0%, 
    transparent max(20%, 20vw)
  );
  padding: max(2rem, 5vh);
  border-radius: max(8px, 1vw);
}

/* Dynamic shadows */
.card-elevated {
  box-shadow: 
    0 max(4px, 0.5vw) max(8px, 1vw) rgba(0, 0, 0, 0.1),
    0 max(2px, 0.25vw) max(4px, 0.5vw) rgba(0, 0, 0, 0.06);
}
```

---

### 4. Hàm `clamp()`

Hàm `clamp()` là một cách tuyệt vời để làm cho các phần tử linh hoạt (`fluid`) và đáp ứng (`responsive`). Nó nhận 3 giá trị: **giá trị nhỏ nhất (`smallest value`), giá trị lý tưởng (`ideal value`), và giá trị lớn nhất (`largest value`)**.

#### Ví dụ cơ bản:

```css
h1 {
  font-size: clamp(1.5rem, 5vw, 3rem);
}
```
Trong ví dụ trên:
1.  **Giá trị nhỏ nhất** (min value): `1.5rem`
2.  **Giá trị lý tưởng** (ideal value / preferred value): `5vw`
3.  **Giá trị lớn nhất** (max value): `3rem`.

Điều này có nghĩa là `font-size` nhỏ nhất được chấp nhận sẽ là `1.5rem` và lớn nhất là `3rem`. Kích thước phông chữ lý tưởng sẽ là `5vw`. Hàm `clamp()` **kẹp (`clamps`) một giá trị giữa hai giá trị được xác định** (tối thiểu và tối đa).

#### Cách `clamp()` được tính toán:
Theo Mozilla Developer Network (MDN), khi `clamp()` được sử dụng làm một giá trị, nó tương đương với việc sử dụng kết hợp các hàm `max()` và `min()`.
```css
.element {
  width: clamp(200px, 50%, 1000px);
  /* Tương đương với */
  width: max(200px, min(50%, 1000px));
}
```

Ví dụ, nếu `viewport width` là `1150px`:
```css
width: max(200px, min(575px, 1000px)); /* 50% của 1150px là 575px */
/* Giải quyết thành */
width: max(200px, 575px);
/* Giải quyết thành */
width: 575px;
```

#### Lợi ích của `clamp()`:
*   Tạo ra sự điều chỉnh kích thước linh hoạt dựa trên chiều rộng của khung nhìn (`viewport width`) cho đến khi đạt đến các giới hạn tối thiểu và tối đa, với rất ít mã.
*   Loại bỏ một số kịch bản mà trước đây bạn có thể cần đến `media queries`.

#### Ví dụ thực tế:

**Kiểu chữ linh hoạt (`Fluid Typography`)**: Một ví dụ phổ biến là sử dụng `clamp()` cho kích thước phông chữ (`font-size`) để nó điều chỉnh linh hoạt theo kích thước khung nhìn.
```css
/* Hệ thống typography responsive hoàn chỉnh */
:root {
  --font-size-sm: clamp(0.875rem, 2vw, 1rem);
  --font-size-base: clamp(1rem, 2.5vw, 1.125rem);
  --font-size-lg: clamp(1.125rem, 3vw, 1.25rem);
  --font-size-xl: clamp(1.25rem, 4vw, 1.5rem);
  --font-size-2xl: clamp(1.5rem, 5vw, 2rem);
  --font-size-3xl: clamp(2rem, 6vw, 3rem);
}

.hero-title {
  font-size: clamp(2.5rem, 8vw, 5rem);
  line-height: 1.1;
  font-weight: 900;
  margin-bottom: clamp(1rem, 3vw, 2rem);
}

.section-title {
  font-size: clamp(1.75rem, 5vw, 2.5rem);
  margin-bottom: clamp(0.75rem, 2vw, 1.5rem);
}

.body-text {
  font-size: clamp(1rem, 2.5vw, 1.125rem);
  line-height: clamp(1.4, 1.5vw + 1.2, 1.6);
}

.small-text {
  font-size: clamp(0.875rem, 2vw, 1rem);
}
```

**Cảnh báo**: Việc giới hạn kích thước phông chữ tối đa bằng `max()` hoặc `clamp()` có thể gây lỗi WCAG (`WCAG failure`) theo 1.4.4 Resize text (AA), vì nó có thể ngăn người dùng phóng to văn bản lên 200% kích thước gốc. Đảm bảo kiểm tra kết quả với tính năng phóng to (`zoom`).

Để cải thiện khả năng tiếp cận, một biểu thức như `(1rem + 5vw)` được khuyến nghị cho giá trị lý tưởng để khắc phục vấn đề khi người dùng phóng to trình duyệt:
```css
.accessible-title {
  font-size: clamp(16px, (1rem + 5vw), 50px);
}

/* Typography scale với better accessibility */
.heading-1 { font-size: clamp(1.875rem, 1rem + 4vw, 3rem); }
.heading-2 { font-size: clamp(1.5rem, 1rem + 3vw, 2.25rem); }
.heading-3 { font-size: clamp(1.25rem, 1rem + 2vw, 1.875rem); }
```

**Đệm đáp ứng tương đối (`Relative Responsive Padding`)**: Sử dụng `clamp()` cho `padding` để nó phát triển và thu nhỏ tương đối với chiều rộng của phần tử, không bao giờ nhỏ hơn `1rem` và không bao giờ lớn hơn `3rem`:
```css
.container {
  padding: clamp(1rem, 5vw, 3rem);
  max-width: 1200px;
  margin: 0 auto;
}

.card {
  padding: clamp(1rem, 4vw, 2rem);
  background: white;
  border-radius: clamp(8px, 1vw, 16px);
  box-shadow: 0 4px clamp(8px, 2vw, 24px) rgba(0, 0, 0, 0.1);
}

/* Responsive padding cho sections */
.section {
  padding: clamp(3rem, 8vh, 8rem) clamp(1rem, 5vw, 3rem);
}

/* Button padding responsive */
.button {
  padding: clamp(0.5rem, 2vw, 1rem) clamp(1rem, 4vw, 2rem);
  border-radius: clamp(4px, 0.5vw, 8px);
}
```

Lợi ích đáng kể nhất là vì định nghĩa `padding` này tương đối với phần tử (`element relative`), nó sẽ lớn hơn khi phần tử có nhiều không gian trên trang và nhỏ hơn nếu nó được đặt trong một cột hẹp.

**Chiều rộng đoạn văn bản (`Paragraph Width`)**: Để đảm bảo các khối văn bản nằm trong khoảng `45` đến `75` ký tự (`ch` unit):
```css
.article-content p {
  width: clamp(45ch, 80vw, 75ch);
  margin: 0 auto clamp(1rem, 3vh, 1.5rem);
  line-height: clamp(1.4, 1.5, 1.6);
}

/* Reading-friendly content layout */
.prose {
  max-width: clamp(60ch, 70ch, 80ch);
  margin: 0 auto;
  padding: 0 clamp(1rem, 3vw, 2rem);
}

.prose h1, .prose h2, .prose h3 {
  max-width: clamp(30ch, 50ch, 60ch);
}

/* Sidebar text với different optimal width */
.sidebar-content {
  width: clamp(25ch, 40ch, 50ch);
  font-size: clamp(0.875rem, 2vw, 1rem);
}
```

**Đệm dọc phần (`Section Vertical Padding`)**: `clamp()` rất phù hợp để đặt đệm tối thiểu và tối đa cho một phần:
```css
.hero-section {
  padding: clamp(4rem, 15vh, 12rem) clamp(1rem, 5vw, 3rem);
  text-align: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.content-section {
  padding: clamp(3rem, 10vh, 8rem) 0;
}

/* Navigation với dynamic spacing */
.navbar {
  padding: clamp(0.5rem, 2vh, 1.5rem) clamp(1rem, 3vw, 2rem);
}

/* Footer spacing */
.footer {
  padding: clamp(2rem, 8vh, 6rem) clamp(1rem, 5vw, 3rem);
  margin-top: clamp(3rem, 10vh, 8rem);
}
```

**Bóng và đường viền (`Border and Shadow`)**: Để làm cho chúng động hơn theo chiều rộng khung nhìn:
```css
.modern-card {
  border: clamp(1px, 0.2vw, 3px) solid #e2e8f0;
  border-radius: clamp(8px, 2vw, 20px);
  box-shadow: 
    0 clamp(2px, 1vw, 8px) clamp(8px, 4vw, 32px) rgba(0, 0, 0, 0.1),
    0 clamp(1px, 0.5vw, 4px) clamp(4px, 2vw, 16px) rgba(0, 0, 0, 0.06);
  padding: clamp(1rem, 4vw, 2rem);
  margin-bottom: clamp(1rem, 3vw, 2rem);
}

/* Responsive buttons với dynamic effects */
.primary-button {
  border: none;
  border-radius: clamp(6px, 1vw, 12px);
  padding: clamp(0.75rem, 2vw, 1rem) clamp(1.5rem, 4vw, 2rem);
  font-size: clamp(0.875rem, 2.5vw, 1rem);
  box-shadow: 0 clamp(2px, 0.5vw, 4px) clamp(8px, 2vw, 16px) rgba(59, 130, 246, 0.3);
  transition: all 0.2s ease;
}

.primary-button:hover {
  transform: translateY(clamp(-1px, -0.2vw, -2px));
  box-shadow: 0 clamp(4px, 1vw, 8px) clamp(16px, 4vw, 32px) rgba(59, 130, 246, 0.4);
}

/* Dynamic focus rings */
.interactive-element:focus {
  outline: clamp(2px, 0.3vw, 4px) solid #007acc;
  outline-offset: clamp(2px, 0.3vw, 4px);
}
```

**Khoảng cách lưới (`Grid Gap`)**: Để tạo khoảng cách lưới nhỏ hơn cho khung nhìn di động:
```css
.responsive-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(clamp(250px, 30vw, 350px), 1fr));
  gap: clamp(1rem, 3vw, 2rem);
  padding: clamp(1rem, 5vw, 3rem);
}

/* Masonry-style grid */
.masonry-grid {
  column-count: clamp(1, calc(100vw / 300px), 4);
  column-gap: clamp(1rem, 2vw, 1.5rem);
  padding: clamp(1rem, 3vw, 2rem);
}

.masonry-item {
  break-inside: avoid;
  margin-bottom: clamp(1rem, 2vw, 1.5rem);
  padding: clamp(1rem, 3vw, 1.5rem);
  background: white;
  border-radius: clamp(8px, 1vw, 12px);
}

/* Flexible sidebar layout */
.layout-container {
  display: grid;
  grid-template-columns: clamp(200px, 25vw, 300px) 1fr;
  gap: clamp(1rem, 3vw, 2rem);
  padding: clamp(1rem, 3vw, 2rem);
}
```

**Ví dụ thực tế với layout phức tạp:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Responsive Product Card</title>
  <style>
    body {
      font-family: sans-serif;
      background: #f9fafb;
      padding: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
    }

    /* Product Card Styles */
    .product-card {
      width: clamp(280px, 30vw, 350px);
      padding: clamp(1rem, 3vw, 1.5rem);
      margin-bottom: clamp(1rem, 2vw, 1.5rem);
      background: white;
      border-radius: clamp(8px, 1.5vw, 16px);
      border: clamp(1px, 0.1vw, 2px) solid #e5e7eb;
      box-shadow: 
        0 clamp(1px, 0.2vw, 2px) clamp(4px, 1vw, 8px) rgba(0, 0, 0, 0.1),
        0 clamp(2px, 0.5vw, 4px) clamp(8px, 2vw, 16px) rgba(0, 0, 0, 0.06);
      transition: all 0.3s ease;
    }

    .product-card:hover {
      transform: translateY(clamp(-2px, -0.3vw, -4px));
      box-shadow: 
        0 clamp(4px, 1vw, 8px) clamp(16px, 4vw, 32px) rgba(0, 0, 0, 0.15),
        0 clamp(8px, 2vw, 16px) clamp(32px, 8vw, 64px) rgba(0, 0, 0, 0.1);
    }

    .product-card img {
      width: 100%;
      height: clamp(150px, 20vw, 200px);
      object-fit: cover;
      border-radius: clamp(4px, 1vw, 8px);
      margin-bottom: clamp(0.75rem, 2vw, 1rem);
    }

    .product-card h3 {
      font-size: clamp(1.1rem, 3vw, 1.25rem);
      margin-bottom: clamp(0.5rem, 1vw, 0.75rem);
      line-height: 1.3;
    }

    .product-card p {
      font-size: clamp(0.875rem, 2vw, 1rem);
      color: #6b7280;
      margin-bottom: clamp(1rem, 2vw, 1.25rem);
      line-height: 1.5;
    }

    .product-card .price {
      font-size: clamp(1.25rem, 3vw, 1.5rem);
      font-weight: bold;
      color: #059669;
    }
  </style>
</head>
<body>

  <div class="product-card">
    <img src="https://via.placeholder.com/400x250.png?text=Product+Image" alt="Product Image">
    <h3>Wireless Headphones</h3>
    <p>Experience high-quality sound with noise cancellation and a sleek, modern design.</p>
    <div class="price">$129.99</div>
  </div>

</body>
</html>

```

**Lưu ý về các giá trị không đơn vị (`Unitless Values`)**:
*   Không nên sử dụng số không đơn vị (`unitless numbers`) cho giá trị tối thiểu trong `clamp()`. Ví dụ: `width: clamp(0, 10vmax, 10rem);` là không hợp lệ.

---

## C. Các loại hàm CSS khác

Ngoài các hàm toán học, CSS còn có nhiều loại hàm khác được sử dụng cho các mục đích đa dạng. Dưới đây là một số loại chính: 

### 1. Hàm Biến đổi (Transform functions)
Thay đổi sự xuất hiện của phần tử:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Transform Functions Demo</title>
  <style>
    body {
      font-family: sans-serif;
      background: #f9fafb;
      padding: 2rem;
      display: grid;
      gap: 3rem;
      justify-content: center;
    }

    /* 👉 Hover: Di chuyển lên trên, xoay nhẹ, và phóng to khi rê chuột */
    .card-hover-effect {
      width: 250px;
      height: 150px;
      background: white;
      border-radius: 12px;
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
      transition: transform 0.3s ease;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: bold;
    }

    .card-hover-effect:hover {
      transform: translateY(-10px) rotate(2deg) scale(1.02);
    }

    /* 👉 3D Flip Card: Tạo hiệu ứng lật khi hover */
    .flip-card {
      perspective: 1000px;
      width: 250px;
      height: 150px;
    }

    .flip-card-inner {
      position: relative;
      width: 100%;
      height: 100%;
      transform-style: preserve-3d;
      transition: transform 0.6s;
    }

    .flip-card:hover .flip-card-inner {
      transform: rotateY(180deg);
    }

    .flip-card-front, .flip-card-back {
      position: absolute;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
      border-radius: 12px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: bold;
      color: white;
    }

    .flip-card-front {
      background: #3b82f6;
    }

    .flip-card-back {
      background: #10b981;
      transform: rotateY(180deg);
    }

    /* 👉 Complex animation: Di chuyển lên xuống và xoay nhẹ lặp vô hạn */
    .floating-element {
      width: 150px;
      height: 150px;
      background: #facc15;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      animation: float 3s ease-in-out infinite;
      font-weight: bold;
    }

    @keyframes float {
      0%, 100% {
        transform: translateY(0px) rotate(0deg);
      }
      50% {
        transform: translateY(-20px) rotate(5deg);
      }
    }

    /* 👉 Matrix transform: Kết hợp skew và translate bằng hàm matrix() */
    .skew-element {
      width: 250px;
      height: 100px;
      background: #ec4899;
      color: white;
      font-weight: bold;
      display: flex;
      justify-content: center;
      align-items: center;
      transform: matrix(1, 0.2, 0.3, 1, 50, 100);
    }
  </style>
</head>
<body>

  <!-- Hover Transform Card -->
  <div class="card-hover-effect">Hover Me</div>

  <!-- Flip Card -->
  <div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">Front</div>
      <div class="flip-card-back">Back</div>
    </div>
  </div>

  <!-- Floating Element -->
  <div class="floating-element">Float</div>

  <!-- Matrix Transform Element -->
  <div class="skew-element">Skew + Move</div>

</body>
</html>

```

### 2. Hàm Lọc (Filter functions)
Áp dụng hiệu ứng đồ họa để thay đổi giao diện của hình ảnh đầu vào:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Filter Functions Demo</title>
  <style>
    body {
      font-family: sans-serif;
      background: #f3f4f6;
      padding: 2rem;
      display: flex;
      flex-direction: column;
      gap: 3rem;
      align-items: center;
    }

    img {
      width: 200px;
      height: 150px;
      object-fit: cover;
      border-radius: 8px;
    }

    /* 🎨 Hiệu ứng ảnh trong gallery: tăng độ sáng, độ tương phản, độ bão hòa */
    .photo-gallery img {
      filter: brightness(1.1) contrast(1.1) saturate(1.2);
      transition: filter 0.3s ease;
    }

    /* 🎯 Hover để tăng thêm hiệu ứng filter mạnh hơn */
    .photo-gallery img:hover {
      filter: brightness(1.2) contrast(1.2) saturate(1.5) blur(0px);
    }

    /* 🌙 Hiệu ứng ảnh trong chế độ tối: giảm sáng, tăng tương phản */
    .dark-mode img {
      filter: brightness(0.8) contrast(1.2);
    }

    /* 🧓 Hiệu ứng kiểu ảnh cổ điển (vintage) */
    .vintage-photo {
      filter: sepia(0.8) brightness(1.1) contrast(1.2) grayscale(0.3);
    }

    /* 💡 Hiệu ứng phát sáng neon đầy màu sắc */
    .neon-glow {
      color: #0ff;
      filter: brightness(1.5) saturate(2) hue-rotate(90deg) drop-shadow(0 0 10px currentColor);
    }

    /* 🌫️ Hiệu ứng làm mờ nền theo kích thước viewport (responsive blur) */
    .backdrop {
      filter: blur(clamp(5px, 2vw, 15px));
      backdrop-filter: blur(clamp(5px, 2vw, 10px)) saturate(1.5);
      background: rgba(255, 255, 255, 0.4);
      padding: 1rem;
      border-radius: 12px;
      width: 300px;
      text-align: center;
    }

    /* 🪄 Skeleton loading effect với animation thay đổi độ sáng & tương phản */
    .skeleton {
      filter: brightness(0.95) contrast(0.9);
      animation: skeleton-loading 1.5s ease-in-out infinite alternate;
      width: 200px;
      height: 20px;
      background: #ccc;
      border-radius: 4px;
    }

    @keyframes skeleton-loading {
      from {
        filter: brightness(0.95) contrast(0.9);
      }
      to {
        filter: brightness(1.05) contrast(1.1);
      }
    }
  </style>
</head>
<body>

  <!-- 📸 1. Bộ ảnh có hiệu ứng filter cơ bản -->
  <div class="photo-gallery">
    <img src="https://picsum.photos/id/1011/200/150" alt="Nature" />
  </div>

  <!-- 🌑 2. Ảnh trong chế độ dark mode -->
  <div class="dark-mode">
    <img src="https://picsum.photos/id/1015/200/150" alt="Dark mode example" />
  </div>

  <!-- 🧓 3. Ảnh cổ điển vintage -->
  <img class="vintage-photo" src="https://picsum.photos/id/1025/200/150" alt="Vintage style" />

  <!-- 🔮 4. Neon glow effect -->
  <img class="neon-glow" src="https://picsum.photos/id/1020/200/150" alt="Neon glow" />

  <!-- 🌫️ 5. Blur nền với responsive clamp -->
  <div class="backdrop">
    <p>Nội dung bị mờ nền (backdrop blur)</p>
  </div>

  <!-- ⏳ 6. Loading skeleton bar -->
  <div class="skeleton"></div>

</body>
</html>

```

### 3. Hàm Màu sắc (Color functions)
Định nghĩa các biểu diễn màu sắc khác nhau:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Modern Color Functions Demo</title>
  <style>
    /* 🎨 Khai báo biến màu ở cấp độ root (global) với hệ HSL và RGB alpha */
    :root {
      /* Hệ màu HSL: Hue, Saturation, Lightness */
      --primary-hue: 220;
      --primary-sat: 70%;
      --primary-light: 50%;
      
      --primary: hsl(var(--primary-hue), var(--primary-sat), var(--primary-light));
      --primary-light: hsl(var(--primary-hue), var(--primary-sat), 70%);
      --primary-dark: hsl(var(--primary-hue), var(--primary-sat), 30%);
      
      /* Màu có độ trong suốt (alpha) sử dụng RGB mới */
      --overlay: rgb(0 0 0 / 0.5);
      --card-bg: rgb(255 255 255 / 0.9);
    }

    body {
      font-family: sans-serif;
      background-color: var(--card-bg);
      margin: 0;
      padding: 2rem;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      align-items: center;
    }

    section {
      padding: 1.5rem;
      border-radius: 10px;
      width: 300px;
      text-align: center;
      font-weight: bold;
    }

    /* 🟦 Giao diện với theme xanh (blue) dùng HSL động */
    .theme-blue {
      --hue: 220;
      background: hsl(var(--hue), 70%, 95%);
      border: 1px solid hsl(var(--hue), 70%, 80%);
      color: hsl(var(--hue), 70%, 20%);
    }

    /* 🟩 Giao diện với theme xanh lá (green) dùng HSL động */
    .theme-green {
      --hue: 120;
      background: hsl(var(--hue), 70%, 95%);
      border: 1px solid hsl(var(--hue), 70%, 80%);
      color: hsl(var(--hue), 70%, 20%);
    }

    /* 🎨 Pha trộn màu (color mix) – sẽ có hỗ trợ trong tương lai */
    .mixed-color {
      /* background: color-mix(in srgb, #ff0000 50%, #0000ff 50%); */ /* Tương lai */

      /* Hiện tại dùng linear-gradient để mô phỏng */
      background: linear-gradient(45deg, #ff0000 50%, #0000ff 50%);
      color: white;
    }

    /* 🌈 Màu dùng không gian màu LAB – độ chính xác cao hơn (future syntax) */
    .lab-colors {
      /* background: lab(50% 20 -30); */ /* Chưa được hỗ trợ rộng rãi */
      background: #8B4B9C; /* Fallback màu tương tự */
      color: white;
    }

  </style>
</head>
<body>

  <section class="theme-blue">
    Theme màu xanh dương (HSL)
  </section>

  <section class="theme-green">
    Theme màu xanh lá (HSL)
  </section>

  <section class="mixed-color">
    Màu pha trộn đỏ + xanh (color-mix)
  </section>

  <section class="lab-colors">
    Màu theo không gian LAB (fallback)
  </section>

</body>
</html>

```

### 4. Hàm Hình ảnh (Image functions)
Cung cấp biểu diễn đồ họa của hình ảnh hoặc gradient:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Gradient and Image CSS Demo</title>
  <style>
    /* Gradient tuyến tính từ màu xanh đến đỏ, theo nhiều bước màu */
    .hero-gradient {
      background: linear-gradient(
        135deg,
        hsl(240, 100%, 70%) 0%,
        hsl(260, 100%, 70%) 25%,
        hsl(290, 100%, 70%) 50%,
        hsl(320, 100%, 70%) 75%,
        hsl(350, 100%, 70%) 100%
      );
      color: white;
      padding: 2rem;
      text-align: center;
    }

    /* Gradient hình tròn từ trung tâm ra ngoài, tạo hiệu ứng spotlight */
    .spotlight-effect {
      background: 
        radial-gradient(
          circle at center,
          transparent 0%,
          transparent 40%,
          rgba(0, 0, 0, 0.8) 100%
        ),
        url('background-image.jpg');
      background-size: cover;
      color: white;
      padding: 3rem;
      text-align: center;
    }

    /* Gradient hình nón (conic) dùng làm spinner loading */
    .loading-spinner {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: conic-gradient(
        from 0deg,
        transparent 0deg,
        #007acc 360deg
      );
      mask: radial-gradient(circle, transparent 60%, black 60%);
      animation: spin 1s linear infinite;
      margin: 2rem auto;
    }

    @keyframes spin {
      to { transform: rotate(360deg); }
    }

    /* Pattern phức tạp bằng nhiều lớp gradient chồng lên nhau */
    .geometric-pattern {
      background: 
        linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 30%, rgba(255,255,255,0.1) 70%, transparent 70%),
        linear-gradient(-45deg, transparent 30%, rgba(0,0,0,0.1) 30%, rgba(0,0,0,0.1) 70%, transparent 70%),
        linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      background-size: 20px 20px, 20px 20px, 100% 100%;
      height: 200px;
    }

    /* Hình nền sử dụng image-set để hiển thị ảnh theo độ phân giải */
    .responsive-image {
      background-image: image-set(
        url('image-1x.jpg') 1x,
        url('image-2x.jpg') 2x,
        url('image-3x.jpg') 3x
      );
      /* Fallback cho trình duyệt chưa hỗ trợ */
      background-image: url('image-1x.jpg');
      background-size: cover;
      background-position: center;
      height: 300px;
    }
  </style>
</head>
<body>

  <section class="hero-gradient">
    <h1>Hero Section với Linear Gradient</h1>
    <p>Gradient từ xanh dương đến đỏ hồng</p>
  </section>

  <section class="spotlight-effect">
    <h2>Spotlight Effect</h2>
    <p>Hiệu ứng spotlight nền mờ tối dần ra ngoài</p>
  </section>

  <div class="loading-spinner" aria-label="Loading"></div>

  <section class="geometric-pattern">
    <h2 style="color: white; padding: 1rem;">Geometric Pattern</h2>
  </section>

  <section class="responsive-image">
    <h2 style="color: white; text-align: center; padding: 1rem;">Responsive Image Background</h2>
  </section>

</body>
</html>

```

### 5. Hàm Hình dạng (Shape functions)
Đại diện cho một hình dạng đồ họa, được sử dụng trong `clip-path`, `offset-path`, và `shape-outside` properties:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Creative clip-path shapes</title>
  <style>
    /* Tạo hình lục giác bằng clip-path */
    .hexagon {
      width: 200px;
      height: 200px;
      background: #6C5CE7;
      clip-path: polygon(
        30% 0%, 
        70% 0%, 
        100% 50%, 
        70% 100%, 
        30% 100%, 
        0% 50%
      );
      margin: 20px;
    }

    /* Tạo hình mũi tên phải bằng clip-path */
    .arrow-right {
      width: 200px;
      height: 100px;
      background: #00B894;
      clip-path: polygon(
        0% 20%, 
        60% 20%, 
        60% 0%, 
        100% 50%, 
        60% 100%, 
        60% 80%, 
        0% 80%
      );
      margin: 20px;
    }

    /* Hình tròn linh hoạt theo kích thước màn hình với biến CSS */
    .dynamic-circle {
      --size: clamp(50px, 10vw, 100px);
      width: var(--size);
      height: var(--size);
      clip-path: circle(50%);
      background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
      margin: 20px;
    }

    /* Ảnh nổi hình tròn, bọc văn bản xung quanh nhờ shape-outside */
    .floating-image {
      width: clamp(150px, 30vw, 250px);
      height: clamp(150px, 30vw, 250px);
      float: left;
      margin: 0 20px 20px 0;
      shape-outside: circle(50%);
      clip-path: circle(50%);
      background: url('https://via.placeholder.com/250') no-repeat center/cover;
    }

    /* Hiệu ứng di chuyển theo một đường cong tùy chỉnh với offset-path */
    .path-animation {
      width: 50px;
      height: 50px;
      background: #FAB1A0;
      offset-path: path('M 0 100 Q 50 10 100 100 T 200 100');
      offset-distance: 0%;
      animation: move-along-path 3s ease-in-out infinite;
      position: relative;
    }

    @keyframes move-along-path {
      to { offset-distance: 100%; }
    }

    /* Tạo hình chữ nhật có lề co giãn, bo góc với inset clip-path */
    .content-shape {
      width: 300px;
      height: 200px;
      background: #55EFC4;
      clip-path: inset(
        clamp(10px, 2vw, 20px) 
        clamp(20px, 4vw, 40px) 
        clamp(10px, 2vw, 20px) 
        clamp(20px, 4vw, 40px) 
        round clamp(5px, 1vw, 10px)
      );
      margin: 20px;
    }
  </style>
</head>
<body>

  <h2>Creative Shapes Demo</h2>

  <div class="hexagon"></div>

  <div class="arrow-right"></div>

  <div class="dynamic-circle"></div>

  <div class="floating-image"></div>
  <p>
    Đây là đoạn văn bản bọc quanh hình tròn nhờ <code>shape-outside</code>. 
    Thuộc tính này cho phép văn bản bao quanh các hình phức tạp như hình tròn hoặc polygon,
    mang lại bố cục độc đáo và hiện đại cho giao diện web.
  </p>

  <div class="path-animation"></div>

  <div class="content-shape"></div>

</body>
</html>

```

### 6. Hàm Lưới (Grid functions)
Được sử dụng để định nghĩa một lưới CSS (`CSS grid`):

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Advanced CSS Grid Layouts</title>
  <style>
    /* Lưới phản hồi kích thước màn hình bằng auto-fit + clamp */
    .responsive-grid {
      display: grid;
      grid-template-columns: repeat(
        auto-fit,
        minmax(clamp(250px, 30vw, 350px), 1fr)
      );
      gap: clamp(1rem, 3vw, 2rem);
    }

    /* Lưới co giãn theo nội dung với fit-content và minmax */
    .auto-sizing-grid {
      display: grid;
      grid-template-columns:
        fit-content(200px)
        minmax(300px, 1fr)
        fit-content(150px);
      grid-template-rows: repeat(3, minmax(100px, auto));
      gap: 1rem;
    }

    /* Sử dụng tên vùng (grid-area) để bố trí lưới kiểu dashboard */
    .dashboard-layout {
      display: grid;
      grid-template-areas:
        "header header header"
        "sidebar main aside"
        "footer footer footer";
      grid-template-columns:
        minmax(200px, 250px)
        minmax(400px, 1fr)
        minmax(200px, 300px);
      grid-template-rows:
        fit-content(80px)
        minmax(500px, 1fr)
        fit-content(100px);
      gap: clamp(1rem, 2vw, 2rem);
      min-height: 100vh;
    }

    .header {
      grid-area: header;
      background: #74b9ff;
      padding: 1rem;
    }

    .sidebar {
      grid-area: sidebar;
      background: #ffeaa7;
      padding: 1rem;
    }

    .main {
      grid-area: main;
      background: #dfe6e9;
      padding: 1rem;
    }

    .aside {
      grid-area: aside;
      background: #fab1a0;
      padding: 1rem;
    }

    .footer {
      grid-area: footer;
      background: #55efc4;
      padding: 1rem;
    }

    /* Layout dạng tạp chí với auto-fill và clamp cho kích thước */
    .magazine-layout {
      display: grid;
      grid-template-columns: repeat(
        auto-fill,
        minmax(clamp(200px, 25vw, 300px), 1fr)
      );
      grid-auto-rows: minmax(clamp(150px, 20vh, 250px), auto);
      gap: clamp(0.5rem, 2vw, 1.5rem);
    }

    /* Hỗ trợ lưới lồng nhau; subgrid nếu có, fallback nếu không */
    .nested-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
    }

    .nested-grid-item {
      display: grid;
      /* grid-template-columns: subgrid; */ /* Hỗ trợ tương lai */
      grid-template-columns: repeat(3, 1fr); /* Hiện tại fallback */
      gap: 0.5rem;
      background: #fdcb6e;
      padding: 1rem;
    }

    .box {
      background: #a29bfe;
      padding: 1rem;
      text-align: center;
    }
  </style>
</head>
<body>

  <h2>1. Responsive Grid</h2>
  <div class="responsive-grid">
    <div class="box">Item 1</div>
    <div class="box">Item 2</div>
    <div class="box">Item 3</div>
    <div class="box">Item 4</div>
  </div>

  <h2>2. Auto-Sizing Grid</h2>
  <div class="auto-sizing-grid">
    <div class="box">Col 1</div>
    <div class="box">Col 2</div>
    <div class="box">Col 3</div>
    <div class="box">Row 2</div>
    <div class="box">Row 2</div>
    <div class="box">Row 2</div>
    <div class="box">Row 3</div>
    <div class="box">Row 3</div>
    <div class="box">Row 3</div>
  </div>

  <h2>3. Dashboard Layout (Grid Areas)</h2>
  <div class="dashboard-layout">
    <div class="header">Header</div>
    <div class="sidebar">Sidebar</div>
    <div class="main">Main</div>
    <div class="aside">Aside</div>
    <div class="footer">Footer</div>
  </div>

  <h2>4. Magazine Layout</h2>
  <div class="magazine-layout">
    <div class="box">Article 1</div>
    <div class="box">Article 2</div>
    <div class="box">Article 3</div>
    <div class="box">Article 4</div>
    <div class="box">Article 5</div>
  </div>

  <h2>5. Nested Grid</h2>
  <div class="nested-grid">
    <div class="nested-grid-item">
      <div class="box">A</div>
      <div class="box">B</div>
      <div class="box">C</div>
    </div>
    <div class="nested-grid-item">
      <div class="box">D</div>
      <div class="box">E</div>
      <div class="box">F</div>
    </div>
    <div class="nested-grid-item">
      <div class="box">G</div>
      <div class="box">H</div>
      <div class="box">I</div>
    </div>
  </div>

</body>
</html>

```

---

## D. Các vấn đề cần quan tâm

### 1. Khả năng tiếp cận (Accessibility Concerns)

Mặc dù các hàm so sánh CSS mang lại cách mới để tạo các trang web động, chúng ta cần cẩn thận về cách sử dụng chúng:

```css
/* ❌ Problematic - có thể quá nhỏ trên mobile */
.bad-font-size {
  font-size: min(2vw, 1rem);
}

/* ✅ Better - đảm bảo minimum readable size */
.good-font-size {
  font-size: clamp(1rem, 2vw, 1.5rem);
}

/* ✅ Accessibility-first approach */
.accessible-text {
  font-size: clamp(1rem, 1rem + 1vw, 1.25rem);
  line-height: clamp(1.4, 1.5, 1.6);
  /* Đảm bảo contrast ratio tốt */
  color: hsl(220, 10%, 20%);
  background: hsl(220, 10%, 98%);
}

/* Focus indicators với proper sizing */
.interactive-element:focus {
  outline: max(2px, 0.1em) solid #007acc;
  outline-offset: max(2px, 0.1em);
}

/* Touch targets đáp ứng WCAG */
.touch-target {
  min-width: max(44px, 2.75rem);
  min-height: max(44px, 2.75rem);
  display: flex;
  align-items: center;
  justify-content: center;
}
```

### 2. Hỗ trợ trình duyệt (Browser Support)

Các hàm `min()`, `max()`, và `clamp()` hiện đã được hỗ trợ rộng rãi trong tất cả các trình duyệt lớn hiện đại.

### 3. Cách thêm dự phòng cho các trình duyệt không hỗ trợ

#### Thêm dự phòng thủ công (Add fallback manually):
Đơn giản là bạn thêm thuộc tính dự phòng trước thuộc tính sử dụng hàm CSS. Các trình duyệt hỗ trợ sẽ bỏ qua cái đầu tiên.

```css
.hero {
  /* Giá trị mặc định cho trình duyệt không hỗ trợ */
  padding: 4rem 1rem; 
  /* Cải tiến cho trình duyệt hỗ trợ */
  padding: clamp(2rem, 10vmax, 10rem) 1rem; 
}

/* Complex fallbacks */
.responsive-layout {
  /* Fallback layout */
  width: 90%;
  max-width: 1200px;
  padding: 2rem 1rem;
  
  /* Enhanced layout */
  width: clamp(300px, 90vw, 1200px);
  padding: clamp(1rem, 5vw, 3rem);
}

/* Typography fallbacks */
.heading {
  /* Conservative fallback */
  font-size: 2rem;
  line-height: 1.2;
  margin-bottom: 1rem;
  
  /* Fluid enhancements */
  font-size: clamp(1.5rem, 5vw, 3rem);
  line-height: clamp(1.1, 1.2, 1.3);
  margin-bottom: clamp(0.5rem, 3vh, 1.5rem);
}
```

#### Sử dụng `@supports`:
Bạn có thể sử dụng câu lệnh truy vấn tính năng `@supports` để phát hiện xem các hàm so sánh CSS có được hỗ trợ hay không. Phương pháp này được ưa thích hơn vì bất kỳ trình duyệt nào hỗ trợ các hàm so sánh cũng nên hỗ trợ `@supports`.

```css
.hero {
  /* Mặc định, cho trình duyệt không hỗ trợ */
  padding: 4rem 1rem; 
}

@supports (width: min(10px, 5vw)) {
  /* Một cải tiến cho trình duyệt hỗ trợ */
  .hero {
    padding: clamp(2rem, 10vmax, 10rem) 1rem;
  }
}

/* Progressive enhancement với @supports */
.card {
  /* Base styles */
  width: 300px;
  padding: 1rem;
  border-radius: 8px;
}

@supports (width: clamp(200px, 50vw, 400px)) {
  .card {
    width: clamp(250px, 30vw, 350px);
    padding: clamp(1rem, 3vw, 2rem);
    border-radius: clamp(8px, 1vw, 16px);
  }
}

/* Feature detection for complex layouts */
.grid-container {
  /* Flexbox fallback */
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.grid-item {
  flex: 1 1 300px;
  margin-bottom: 1rem;
}

@supports (display: grid) and (width: clamp(200)
```

---
---
## Tài liệu phải đọc khi ĐÓNG CỌC LẦN 2

1. https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-css-functions
1. https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Functions
1. https://web.dev/min-max-clamp/
1. https://www.youtube.com/watch?v=6QwMvf1Jq0M
1. https://moderncss.dev/practical-uses-of-css-math-functions-calc-clamp-min-max/
1. https://ishadeed.com/article/css-min-max-clamp1. 

> ⭐ **Theo dõi [kênh Threads](https://www.threads.com/@kaitaku.88) để đọc bài mới mỗi ngày!** ⭐  

**[<== Bài Trước  ](link)          |[  Trang Chủ  ](./README.md)|           [  Bài Sau ==>](link)**
---
