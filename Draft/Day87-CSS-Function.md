# Hướng dẫn toàn diện về CSS Functions
Đây là chi tiết về các hàm CSS (`CSS Functions`), tập trung vào các hàm toán học (`Math Functions`) và cách chúng được sử dụng để tạo ra các thiết kế web linh hoạt và đáp ứng (`responsive design`).

---

## Tổng quan về các Hàm CSS (CSS Functions)

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

## Các Hàm Toán học Chính trong CSS (Main CSS Math Functions)

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

#### Lợi ích của `calc()`:
*   Cho phép bạn tránh việc gán cứng các giá trị hoặc phải thêm giải pháp JavaScript để tính toán giá trị cần thiết.
*   Đặc biệt hữu ích khi kết hợp với các biến CSS (`CSS variables`), `calc()` có thể giúp bạn tránh lặp lại các quy tắc CSS.

#### Ví dụ thực tế: Tạo bảng màu sinh động bằng `calc()` và `hsl()` (Generative Color Palettes)

Bạn có thể mở rộng khả năng của `calc()` bằng cách truyền vào các thuộc tính tùy chỉnh CSS (`CSS custom properties`). Một ví dụ rất hữu ích là tạo bảng màu nhất quán bằng cách sử dụng `hsl()` (là viết tắt của `hue`, `saturation`, và `lightness`). Bằng cách cung cấp giá trị cho độ bão hòa (`saturation`), độ sáng (`lightness`), và một màu gốc (`base hue`), chúng ta có thể tính toán các giá trị bổ sung để xây dựng một bảng màu đầy đủ.

```css
.colors {
  --base-hue: 140;
  --saturation: 95%;
  --lightness: 80%;
  --rotation: 60;
  color: #222;
  text-align: center;
}

.color {
  padding: 0.25rem;
  background-color: hsl(var(--hue), var(--saturation), var(--lightness));
  border-radius: 8px;
  margin: 4px;
  display: inline-block;
  width: 100px;
  height: 60px;
  line-height: 60px;
  font-weight: bold;
}

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

/* Tạo variations với lightness khác nhau */
.color-light {
  --lightness: calc(var(--lightness) + 10%);
}

.color-dark {
  --lightness: calc(var(--lightness) - 20%);
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
```css
.hero-title {
  font-size: max(2rem, 8vw);
  font-weight: bold;
  line-height: 1.1;
  text-align: center;
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
}

/* Responsive typography system */
h1 { font-size: max(2rem, 5vw); }
h2 { font-size: max(1.5rem, 4vw); }
h3 { font-size: max(1.25rem, 3vw); }
p  { font-size: max(1rem, 2.5vw); }
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
```css
:root {
  --outline-size: max(2px, 0.125rem);
  --outline-style: solid;
  --outline-color: #007acc;
}

a, button, input, textarea {
  --outline-size: max(2px, 0.08em);
}

a:focus, button:focus, input:focus, textarea:focus {
  outline: var(--outline-size) var(--outline-style) var(--outline-color);
  outline-offset: var(--outline-size);
}

/* Enhanced focus indicators */
.button:focus {
  outline: max(3px, 0.1em) solid #007acc;
  outline-offset: max(2px, 0.1em);
  box-shadow: 0 0 0 max(4px, 0.2em) rgba(0, 122, 204, 0.2);
}
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
  width: clamp(45ch, 65ch, 75ch);
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
```css
/* Complete responsive card component */
.product-card {
  /* Container sizing */
  width: clamp(280px, 30vw, 350px);
  
  /* Spacing */
  padding: clamp(1rem, 3vw, 1.5rem);
  margin-bottom: clamp(1rem, 2vw, 1.5rem);
  
  /* Visual design */
  background: white;
  border-radius: clamp(8px, 1.5vw, 16px);
  border: clamp(1px, 0.1vw, 2px) solid #e5e7eb;
  box-shadow: 
    0 clamp(1px, 0.2vw, 2px) clamp(4px, 1vw, 8px) rgba(0, 0, 0, 0.1),
    0 clamp(2px, 0.5vw, 4px) clamp(8px, 2vw, 16px) rgba(0, 0, 0, 0.06);
  
  /* Hover effects */
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
```

**Lưu ý về các giá trị không đơn vị (`Unitless Values`)**:
*   Không nên sử dụng số không đơn vị (`unitless numbers`) cho giá trị tối thiểu trong `clamp()`. Ví dụ: `width: clamp(0, 10vmax, 10rem);` là không hợp lệ.

---

## Các loại hàm CSS khác

Ngoài các hàm toán học, CSS còn có nhiều loại hàm khác được sử dụng cho các mục đích đa dạng. Dưới đây là một số loại chính:

### Hàm Biến đổi (Transform functions)
Thay đổi sự xuất hiện của phần tử:

```css
/* Ví dụ thực tế với transform functions */
.card-hover-effect {
  transition: transform 0.3s ease;
}

.card-hover-effect:hover {
  transform: translateY(-10px) rotate(2deg) scale(1.02);
}

/* 3D transforms */
.flip-card {
  perspective: 1000px;
}

.flip-card-inner {
  transform-style: preserve-3d;
  transition: transform 0.6s;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

/* Complex animations */
.floating-element {
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { 
    transform: translateY(0px) rotate(0deg); 
  }
  50% { 
    transform: translateY(-20px) rotate(5deg); 
  }
}

/* Matrix transforms for advanced effects */
.skew-element {
  transform: matrix(1, 0.2, 0.3, 1, 50, 100);
}
```

### Hàm Lọc (Filter functions)
Áp dụng hiệu ứng đồ họa để thay đổi giao diện của hình ảnh đầu vào:

```css
/* Image effects với filter functions */
.photo-gallery img {
  filter: brightness(1.1) contrast(1.1) saturate(1.2);
  transition: filter 0.3s ease;
}

.photo-gallery img:hover {
  filter: brightness(1.2) contrast(1.2) saturate(1.5) blur(0px);
}

/* Dark mode effects */
.dark-mode img {
  filter: brightness(0.8) contrast(1.2);
}

/* Creative effects */
.vintage-photo {
  filter: sepia(0.8) brightness(1.1) contrast(1.2) grayscale(0.3);
}

.neon-glow {
  filter: brightness(1.5) saturate(2) hue-rotate(90deg) drop-shadow(0 0 10px currentColor);
}

/* Responsive blur effect */
.backdrop {
  filter: blur(clamp(5px, 2vw, 15px));
  backdrop-filter: blur(clamp(5px, 2vw, 10px)) saturate(1.5);
}

/* Loading skeleton effect */
.skeleton {
  filter: brightness(0.95) contrast(0.9);
  animation: skeleton-loading 1.5s ease-in-out infinite alternate;
}

@keyframes skeleton-loading {
  from { filter: brightness(0.95) contrast(0.9); }
  to { filter: brightness(1.05) contrast(1.1); }
}
```

### Hàm Màu sắc (Color functions)
Định nghĩa các biểu diễn màu sắc khác nhau:

```css
/* Modern color functions */
:root {
  /* HSL color system */
  --primary-hue: 220;
  --primary-sat: 70%;
  --primary-light: 50%;
  
  --primary: hsl(var(--primary-hue), var(--primary-sat), var(--primary-light));
  --primary-light: hsl(var(--primary-hue), var(--primary-sat), 70%);
  --primary-dark: hsl(var(--primary-hue), var(--primary-sat), 30%);
  
  /* RGB with transparency */
  --overlay: rgb(0 0 0 / 0.5);
  --card-bg: rgb(255 255 255 / 0.9);
}

/* Dynamic color variations */
.theme-blue {
  --hue: 220;
  background: hsl(var(--hue), 70%, 95%);
  border: 1px solid hsl(var(--hue), 70%, 80%);
  color: hsl(var(--hue), 70%, 20%);
}

.theme-green {
  --hue: 120;
  background: hsl(var(--hue), 70%, 95%);
  border: 1px solid hsl(var(--hue), 70%, 80%);
  color: hsl(var(--hue), 70%, 20%);
}

/* Advanced color mixing (future) */
.mixed-color {
  /* Sẽ được hỗ trợ trong tương lai */
  /* background: color-mix(in srgb, #ff0000 50%, #0000ff 50%); */
  
  /* Fallback hiện tại */
  background: linear-gradient(45deg, #ff0000 50%, #0000ff 50%);
}

/* LAB color space for better color accuracy */
.lab-colors {
  /* background: lab(50% 20 -30); */ /* Future syntax */
  background: #8B4B9C; /* Fallback */
}
```

### Hàm Hình ảnh (Image functions)
Cung cấp biểu diễn đồ họa của hình ảnh hoặc gradient:

```css
/* Gradient masterclass */
.hero-gradient {
  background: linear-gradient(
    135deg,
    hsl(240, 100%, 70%) 0%,
    hsl(260, 100%, 70%) 25%,
    hsl(290, 100%, 70%) 50%,
    hsl(320, 100%, 70%) 75%,
    hsl(350, 100%, 70%) 100%
  );
}

/* Radial gradients cho effects */
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
}

/* Conic gradients cho loading spinners */
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
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* Complex pattern với multiple gradients */
.geometric-pattern {
  background: 
    linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 30%, rgba(255,255,255,0.1) 70%, transparent 70%),
    linear-gradient(-45deg, transparent 30%, rgba(0,0,0,0.1) 30%, rgba(0,0,0,0.1) 70%, transparent 70%),
    linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  background-size: 20px 20px, 20px 20px, 100% 100%;
}

/* Responsive image sets */
.responsive-image {
  background-image: image-set(
    url('image-1x.jpg') 1x,
    url('image-2x.jpg') 2x,
    url('image-3x.jpg') 3x
  );
  /* Fallback */
  background-image: url('image-1x.jpg');
  background-size: cover;
  background-position: center;
}
```

### Hàm Hình dạng (Shape functions)
Đại diện cho một hình dạng đồ họa, được sử dụng trong `clip-path`, `offset-path`, và `shape-outside` properties:

```css
/* Creative clip-path shapes */
.hexagon {
  clip-path: polygon(
    30% 0%, 
    70% 0%, 
    100% 50%, 
    70% 100%, 
    30% 100%, 
    0% 50%
  );
}

.arrow-right {
  clip-path: polygon(
    0% 20%, 
    60% 20%, 
    60% 0%, 
    100% 50%, 
    60% 100%, 
    60% 80%, 
    0% 80%
  );
}

/* Dynamic shapes với CSS variables */
.dynamic-circle {
  --size: clamp(50px, 10vw, 100px);
  width: var(--size);
  height: var(--size);
  clip-path: circle(50%);
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
}

/* Text wrapping với shape-outside */
.floating-image {
  width: clamp(150px, 30vw, 250px);
  height: clamp(150px, 30vw, 250px);
  float: left;
  margin: 0 20px 20px 0;
  shape-outside: circle(50%);
  clip-path: circle(50%);
}

/* Complex path animations */
.path-animation {
  offset-path: path('M 0 100 Q 50 10 100 100 T 200 100');
  offset-distance: 0%;
  animation: move-along-path 3s ease-in-out infinite;
}

@keyframes move-along-path {
  to { offset-distance: 100%; }
}

/* Responsive inset shapes */
.content-shape {
  clip-path: inset(
    clamp(10px, 2vw, 20px) 
    clamp(20px, 4vw, 40px) 
    clamp(10px, 2vw, 20px) 
    clamp(20px, 4vw, 40px) 
    round clamp(5px, 1vw, 10px)
  );
}
```

### Hàm Lưới (Grid functions)
Được sử dụng để định nghĩa một lưới CSS (`CSS grid`):

```css
/* Advanced grid layouts */
.responsive-grid {
  display: grid;
  grid-template-columns: repeat(
    auto-fit, 
    minmax(clamp(250px, 30vw, 350px), 1fr)
  );
  gap: clamp(1rem, 3vw, 2rem);
}

/* Dynamic grid với fit-content */
.auto-sizing-grid {
  display: grid;
  grid-template-columns: 
    fit-content(200px) 
    minmax(300px, 1fr) 
    fit-content(150px);
  grid-template-rows: repeat(3, minmax(100px, auto));
  gap: 1rem;
}

/* Complex grid areas */
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

/* Responsive grid với clamp() */
.magazine-layout {
  display: grid;
  grid-template-columns: repeat(
    auto-fill, 
    minmax(clamp(200px, 25vw, 300px), 1fr)
  );
  grid-auto-rows: minmax(clamp(150px, 20vh, 250px), auto);
  gap: clamp(0.5rem, 2vw, 1.5rem);
}

/* Subgrid support (modern browsers) */
.nested-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.nested-grid-item {
  display: grid;
  /* grid-template-columns: subgrid; */ /* Future */
  grid-template-columns: repeat(3, 1fr); /* Fallback */
  gap: 0.5rem;
}
```

---

## Các vấn đề cần quan tâm

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

@supports (display: grid) and (width: clamp(200

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


# **`Nội dung gốc`**

Dưới đây là tổng hợp chi tiết về các hàm CSS (`CSS Functions`), tập trung vào các hàm toán học (`Math Functions`) và cách chúng được sử dụng để tạo ra các thiết kế web linh hoạt và đáp ứng (`responsive design`).

---

### Tổng quan về các Hàm CSS (CSS Functions)

Các hàm CSS (`CSS functions`) là những đoạn mã có thể tái sử dụng, thực hiện các tác vụ cụ thể và trả về một giá trị CSS (`CSS value`) cho một thuộc tính CSS (`CSS property`). Bạn có thể nhận biết chúng qua cú pháp: một từ theo sau bởi một cặp dấu ngoặc đơn `()` chứa thông tin bên trong. Thông tin bên trong dấu ngoặc đơn được gọi là "đối số" (`arguments`), và mỗi đối số được hàm sử dụng theo một cách cụ thể.

Ví dụ phổ biến về các hàm CSS bao gồm:
*   `rgb(0, 0, 0)` để định nghĩa màu sắc.
*   `linear-gradient(90deg, blue, red)` để tạo hình ảnh gradient (`gradient image`).

Không giống như các ngôn ngữ lập trình, CSS không cho phép chúng ta tự tạo các hàm riêng. Thay vào đó, ngôn ngữ này đi kèm với một danh sách các hàm dựng sẵn (`premade functions`) giúp giải quyết các vấn đề tạo kiểu phổ biến nhất.

Ngoài việc định nghĩa màu sắc, có một số hàm CSS rất hữu ích khi thiết kế bố cục (`layout`) và kích thước (`sizing`) của trang web, đặc biệt quan trọng trong thiết kế đáp ứng (`responsive design`).

### Các Hàm Toán học Chính trong CSS (Main CSS Math Functions)

Các hàm toán học (`Math functions`) cho phép các giá trị số (`numeric values`) trong CSS được viết dưới dạng biểu thức toán học (`mathematical expressions`). Bốn hàm toán học chính được đề cập và hỗ trợ rộng rãi trong các trình duyệt hiện đại là `calc()`, `min()`, `max()`, và `clamp()`. Các hàm này có thể được sử dụng ở bên phải của bất kỳ biểu thức CSS nào mà chúng có ý nghĩa, và chúng cho phép biểu thức toán học đầy đủ bên trong các đối số của mình mà không cần lồng `calc()`.

#### 1. Hàm `calc()`

Hàm `calc()` thực hiện các phép tính số học cơ bản (`basic arithmetic calculations`) trên các giá trị số. Mục đích chính của nó là thực hiện các phép toán cơ bản, với khả năng trộn lẫn các loại đơn vị (`mixing units`) (ví dụ: `rem` và `vw`).

**Các trường hợp sử dụng mạnh mẽ nhất của `calc()` bao gồm:**
*   **Trộn lẫn đơn vị (`Mixing units`)**: `calc()` có thể xử lý các phép toán ngay cả khi bạn đang trộn lẫn các đơn vị khác nhau như `vh`, `rem`, và `px`.
*   **Khả năng lồng `calc()` (`Nesting calc()`)**: Bạn có thể lồng các hàm `calc()` vào nhau (ví dụ: `calc(calc() - calc())`).

**Ví dụ:**

Để đặt chiều cao của một phần tử `main` bằng `100vh` (100% chiều cao của khung nhìn - `viewport height`) trừ đi chiều cao của `header` (3rem) và `footer` (40px):

```css
:root {
  --header: 3rem;
  --footer: 40px;
  --main: calc(100vh - calc(var(--header) + var(--footer)));
}
```
Ở đây, `--header`, `--footer`, và `--main` là các biến CSS (`CSS variables`), bạn sẽ học về chúng trong các bài học tiếp theo. `calc()` giúp chúng ta tính toán ngay cả khi các đơn vị (`vh`, `rem`, `px`) khác nhau.

**Lợi ích của `calc()`**:
*   Cho phép bạn tránh việc gán cứng các giá trị hoặc phải thêm giải pháp JavaScript để tính toán giá trị cần thiết.
*   Đặc biệt hữu ích khi kết hợp với các biến CSS (`CSS variables`), `calc()` có thể giúp bạn tránh lặp lại các quy tắc CSS.

**Ví dụ thực tế: Tạo bảng màu sinh động bằng `calc()` và `hsl()` (Generative Color Palettes)**

Bạn có thể mở rộng khả năng của `calc()` bằng cách truyền vào các thuộc tính tùy chỉnh CSS (`CSS custom properties`). Một ví dụ rất hữu ích là tạo bảng màu nhất quán bằng cách sử dụng `hsl()` (là viết tắt của `hue`, `saturation`, và `lightness`). Bằng cách cung cấp giá trị cho độ bão hòa (`saturation`), độ sáng (`lightness`), và một màu gốc (`base hue`), chúng ta có thể tính toán các giá trị bổ sung để xây dựng một bảng màu đầy đủ.

```css
.colors {
  --base-hue: 140;
  --saturation: 95%;
  --lightness: 80%;
  --rotation: 60;
  color: #222;
  text-align: center;
}

.color {
  padding: 0.25rem;
  background-color: hsl(var(--hue), var(--saturation), var(--lightness));
}

.color1 {
  --hue: calc(var(--base-hue));
}

.color2 {
  --hue: calc(var(--base-hue) + var(--rotation));
}

.color3 {
  --hue: calc(var(--base-hue) + var(--rotation) * 2);
}
```
**Kết quả:**
*   Color 1
*   Color 2
*   Color 3

#### 2. Hàm `min()`

Hàm `min()` chọn giá trị nhỏ nhất từ một danh sách các tùy chọn. Nó có vẻ nghịch lý, nhưng **`min()` hoạt động như một giới hạn cho giá trị *tối đa* được phép** (`behaves as a boundary for the maximum allowed value`).

**Ví dụ:**

Nếu bạn đặt `width: min(150px, 100%);`:
*   Nếu có đủ 150px không gian (ví dụ: khung hình lớn hơn 150px), `min()` sẽ chọn 150px vì nó nhỏ hơn 100% của phần tử cha (`parent’s width`).
*   Nếu không có đủ 150px (ví dụ: khung hình nhỏ hơn 150px), hình ảnh sẽ chuyển sang 100% chiều rộng của phần tử cha, vì 100% sẽ là giá trị nhỏ hơn.

Bạn cũng có thể thực hiện các phép toán cơ bản bên trong `min()`:
`width: min(80ch, 100vw - 2rem);`

**Lợi ích của `min()`**:
*   **Tạo website đáp ứng (`responsive websites`)**: `min()` làm rất tốt việc giúp chúng ta tạo website đáp ứng.
*   **Kích thước đáp ứng mà không cần Media Queries (`Responsive sizing without media queries`)**: Đây là một lợi ích đáng kể, giúp đơn giản hóa mã CSS.

**Ví dụ thực tế:**
*   **Chiều rộng container (`Container Width`)**: Để đảm bảo khối văn bản không vượt quá 75 ký tự (`ch` unit) trong khi vẫn linh hoạt theo chiều rộng màn hình:
    ```css
    p {
      width: min(75ch, 50%);
    }
    ```
    Đây là cách bạn muốn phần tử luôn ở chiều rộng 50% nhưng không vượt quá 75ch trên màn hình lớn hơn.
*   **Kích thước phần tử đáp ứng (`Responsive Element Sizing`)**: Bạn có thể sử dụng `min()` để kiểm soát kích thước hình đại diện (`avatar`) trong một luồng bình luận:
    `min(64px, 15%, 10vw)`
    Định nghĩa này đảm bảo hình đại diện không bao giờ lớn hơn 64px. `10vw` giúp kích thước cảm thấy tương đối hơn trong các tình huống zoom, và `15%` giúp giữ kích thước tương đối với phần tử, mang lại kết quả trực quan hơn trước khi `10vw` áp dụng.
*   **Điều khiển kích thước nền (`background-size`)**: Khi bạn muốn giới hạn sự phát triển của một hình ảnh nền (`background image`):
    ```css
    .background-image {
      background: #1F1B1C url(https://source.unsplash.com/RapCPd_mJTU/800x800) no-repeat center;
      background-size: min(600px, 100%);
    }
    ```
    Ví dụ này đảm bảo hình ảnh không vượt quá 600px trong khi vẫn có thể thu nhỏ theo phần tử khi chiều rộng của nó dưới 600px.
*   **Khoảng cách giữa các phần tử (`Dynamic Margin`)**: Để đặt giá trị tối đa cho `margin`:
    ```css
    h1, h2, h3, h4, h5 {
      margin: min(7vh, 2.75rem) 0 1.05rem;
    }
    ```
    Bằng cách sử dụng `min()`, chúng ta đặt giá trị tối đa cho `margin` là `2.75rem` mà không nên vượt quá.

#### 3. Hàm `max()`

Hàm `max()` hoạt động ngược lại với `min()`. Nó sẽ chọn giá trị lớn nhất có thể trong dấu ngoặc đơn. Bạn có thể coi **`max()` như một cách để đảm bảo giá trị *tối thiểu* được phép cho một thuộc tính** (`ensuring a minimum allowed value for a property`).

**Ví dụ:**

Xét thuộc tính `width: max(100px, 4em, 50%);`:
*   `max()` sẽ chọn giá trị lớn nhất từ danh sách này.
*   Miễn là `4em` hoặc `50%` có chiều dài lớn hơn `100px`, `max()` sẽ chọn giá trị lớn hơn trong số chúng.
*   Nếu chúng nhỏ hơn `100px` (ví dụ: do sở thích kích thước phông chữ của người dùng, hoặc kích thước cửa sổ trình duyệt/mức thu phóng của họ), thì `100px` sẽ được chọn vì nó là lớn nhất.
*   Trong ví dụ này, `100px` hoạt động như một giá trị bảo vệ (`guard value`): `width` sẽ không bao giờ được đặt nhỏ hơn `100px`.

**Lợi ích của `max()`**:
*   **Hữu ích khi cửa sổ xem đặc biệt nhỏ hoặc người dùng tăng kích thước nội dung bằng cách sử dụng tính năng thu phóng của trình duyệt** (`zoom feature`).
*   Là một công cụ tốt cần biết cho các dự án mà khả năng tiếp cận (`accessibility`) là quan trọng.

**Ví dụ thực tế:**
*   **`font-size` của tiêu đề trang trí (`Decorative Headings`)**: Để văn bản trang trí tỷ lệ theo kích thước khung nhìn (`viewport size`):
    ```css
    .section-title:before {
      content: attr(data-test);
      font-size: max(13vw, 50px);
    }
    ```
    Điều này đảm bảo kích thước phông chữ không bao giờ nhỏ hơn 50px.
*   **Khoảng cách lề theo ngữ cảnh (`Contextual Margins`)**: Để xử lý lề (`margins`) một cách duyên dáng hơn, đặc biệt quan trọng cho Khả năng tiếp cận WCAG (`WCAG Accessibility`):
    ```css
    .element + .element {
      margin-top: max(8vh, 2rem);
    }
    ```
    Trên các khung hình cao hơn, `8vh` sẽ được sử dụng, và trên các khung hình nhỏ hơn hoặc đã được thu phóng, `2rem` sẽ được sử dụng. Kỹ thuật này có thể tạo ra sự khác biệt đáng kể cho người dùng cuối.
*   **Ngăn chặn trình duyệt tự động phóng to trên iOS (`Prevent Browser Zoom on Inputs in iOS`)**: Để khắc phục tình trạng trình duyệt tự động phóng to khi bạn chọn một trường nhập liệu (`form input`) trên iOS, xảy ra khi `font-size` của `input` nhỏ hơn `16px`:
    ```css
    input {
      font-size: max(16px, 1rem);
    }
    ```
    Việc sử dụng `max()` này đảm bảo rằng bất kể giá trị khác được cung cấp, `font-size` sẽ *ít nhất* là `16px` và do đó ngăn chặn việc trình duyệt tự động phóng to.
*   **Đường viền tiêu điểm tương đối (`Relative Focus Outlines`)**: Để đảm bảo kích thước đường viền tiêu điểm (`focus outline`) tối thiểu là `2px` trong khi vẫn cho phép nó *phát triển* tương đối với phần tử:
    ```css
    a {
      --outline-size: max(2px, 0.08em);
      --outline-style: solid;
      --outline-color: currentColor;
    }
    a:focus {
      outline: var(--outline-size) var(--outline-style) var(--outline-color);
      outline-offset: var(--outline-size);
    }
    ```
*   **Kích thước mục tiêu dễ tiếp cận (`Accessible Target Sizes`)**: Để đảm bảo các khu vực tương tác (ví dụ: nút bấm, biểu tượng) có kích thước tối thiểu là `44px` theo tiêu chí WCAG SC 2.5.5:
    ```css
    .icon-button {
      width: max(44px, 2em);
      height: max(44px, 2em);
    }
    ```
    Điều này đảm bảo kích thước phần tử *ít nhất* là 44px.
*   **Sử dụng `max()` làm giá trị dự phòng cho `aspect-ratio`**: Khi sử dụng `aspect-ratio` nhưng cần cung cấp giá trị dự phòng (`fallback`) cho các trình duyệt chưa hỗ trợ:
    ```css
    img {
      /* Fallback for `aspect-ratio` of defining a height */
      height: max(18vh, 12rem);
      object-fit: cover;
      width: 100%;
    }

    /* When supported, use `aspect-ratio` */
    @supports (aspect-ratio: 1) {
      img {
        aspect-ratio: var(--img-ratio);
        height: auto;
      }
    }
    ```
*   **Lề động (`Dynamic Margin`)**: Để có lề động giữa các phần tử thiết kế:
    ```css
    .element {
      background: linear-gradient(to top, #000 0, transparent max(20%, 20vw));
    }
    ```
    Sự cải tiến nhỏ này có thể làm cho gradient trông hợp lý hơn trên thiết bị di động.

#### 4. Hàm `clamp()`

Hàm `clamp()` là một cách tuyệt vời để làm cho các phần tử linh hoạt (`fluid`) và đáp ứng (`responsive`). Nó nhận 3 giá trị: **giá trị nhỏ nhất (`smallest value`), giá trị lý tưởng (`ideal value`), và giá trị lớn nhất (`largest value`)**.

**Ví dụ:**

```css
h1 {
  font-size: clamp(320px, 80vw, 60rem);
}
```
Trong ví dụ trên:
1.  **Giá trị nhỏ nhất** (min value): `320px`
2.  **Giá trị lý tưởng** (ideal value / preferred value): `80vw`
3.  **Giá trị lớn nhất** (max value): `60rem`.

Điều này có nghĩa là `font-size` nhỏ nhất được chấp nhận sẽ là `320px` và lớn nhất là `60rem`. Kích thước phông chữ lý tưởng sẽ là `80vw`. Hàm `clamp()` **kẹp (`clamps`) một giá trị giữa hai giá trị được xác định** (tối thiểu và tối đa).

**Cách `clamp()` được tính toán**:
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

**Lợi ích của `clamp()`**:
*   Tạo ra sự điều chỉnh kích thước linh hoạt dựa trên chiều rộng của khung nhìn (`viewport width`) cho đến khi đạt đến các giới hạn tối thiểu và tối đa, với rất ít mã.
*   Loại bỏ một số kịch bản mà trước đây bạn có thể cần đến `media queries`.

**Ví dụ thực tế:**
*   **Kiểu chữ linh hoạt (`Fluid Typography`)**: Một ví dụ phổ biến là sử dụng `clamp()` cho kích thước phông chữ (`font-size`) để nó điều chỉnh linh hoạt theo kích thước khung nhìn.
    ```css
    p {
      font-size: clamp(1.5rem, 5vw, 3rem);
    }
    ```
    **Cảnh báo**: Việc giới hạn kích thước phông chữ tối đa bằng `max()` hoặc `clamp()` có thể gây lỗi WCAG (`WCAG failure`) theo 1.4.4 Resize text (AA), vì nó có thể ngăn người dùng phóng to văn bản lên 200% kích thước gốc. Đảm bảo kiểm tra kết quả với tính năng phóng to (`zoom`).
    Sau này, để cải thiện khả năng tiếp cận, một biểu thức như `(1rem + 5vw)` được khuyến nghị cho giá trị lý tưởng để khắc phục vấn đề khi người dùng phóng to trình duyệt:
    ```css
    .title {
      font-size: clamp(16px, (1rem + 5vw), 50px);
    }
    ```
*   **Đệm đáp ứng tương đối (`Relative Responsive Padding`)**: Sử dụng `clamp()` cho `padding` để nó phát triển và thu nhỏ tương đối với chiều rộng của phần tử, không bao giờ nhỏ hơn `1rem` và không bao giờ lớn hơn `3rem`:
    ```css
    .element {
      padding: 1.5rem clamp(1rem, 5%, 3rem);
    }
    ```
    Lợi ích đáng kể nhất là vì định nghĩa `padding` này tương đối với phần tử (`element relative`), nó sẽ lớn hơn khi phần tử có nhiều không gian trên trang và nhỏ hơn nếu nó được đặt trong một cột hẹp.
*   **Chiều rộng đoạn văn bản (`Paragraph Width`)**: Để đảm bảo các khối văn bản nằm trong khoảng `45` đến `75` ký tự (`ch` unit):
    ```css
    p {
      width: clamp(45ch, 50%, 75ch);
    }
    ```
    Điều này cho phép trình duyệt xác định chiều rộng của đoạn văn. Nó đặt chiều rộng là 50% theo mặc định. Nếu 50% nhỏ hơn `45ch`, nó sẽ sử dụng `45ch` làm chiều rộng, và nếu 50% rộng hơn `75ch`, nó sẽ sử dụng `75ch`.
*   **Đệm dọc phần (`Section Vertical Padding`)**: `clamp()` rất phù hợp để đặt đệm tối thiểu và tối đa cho một phần:
    ```css
    .hero {
      padding: clamp(2rem, 10vmax, 10rem) 1rem;
    }
    ```
*   **Bóng và đường viền (`Border and Shadow`)**: Để làm cho chúng động hơn theo chiều rộng khung nhìn:
    ```css
    .element {
      box-shadow: 0 3px 10px 0 red;
      border: min(1vw, 10px) solid #468eef;
      border-radius: clamp(7px, 2vw, 20px);
      box-shadow: 0 3px clamp(5px, 4vw, 50px) 0 rgba(0, 0, 0, 0.2);
    }
    ```
*   **Khoảng cách lưới (`Grid Gap`)**: Để tạo khoảng cách lưới nhỏ hơn cho khung nhìn di động:
    ```css
    .wrapper {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      grid-gap: clamp(1rem, 2vw, 24px);
    }
    ```

**Lưu ý về các giá trị không đơn vị (`Unitless Values`)**:
*   Không nên sử dụng số không đơn vị (`unitless numbers`) cho giá trị tối thiểu trong `clamp()`. Ví dụ: `width: clamp(0, 10vmax, 10rem);` là không hợp lệ.

### Các loại hàm CSS khác

Ngoài các hàm toán học, CSS còn có nhiều loại hàm khác được sử dụng cho các mục đích đa dạng. Dưới đây là một số loại chính:

*   **Hàm Biến đổi (Transform functions)**: Thay đổi sự xuất hiện của phần tử, ví dụ: `translateX()`, `rotate()`, `scale()`, `skew()`, `matrix()`, `perspective()`.
*   **Hàm Lọc (Filter functions)**: Áp dụng hiệu ứng đồ họa để thay đổi giao diện của hình ảnh đầu vào, ví dụ: `blur()`, `brightness()`, `contrast()`, `grayscale()`, `saturate()`, `sepia()`, `invert()`.
*   **Hàm Màu sắc (Color functions)**: Định nghĩa các biểu diễn màu sắc khác nhau, ví dụ: `rgb()`, `hsl()`, `hwb()`, `lab()`, `lch()`, `color()`, `color-mix()`, `contrast-color()`, `light-dark()`.
*   **Hàm Hình ảnh (Image functions)**: Cung cấp biểu diễn đồ họa của hình ảnh hoặc gradient, ví dụ: `linear-gradient()`, `radial-gradient()`, `conic-gradient()`, `image()`, `image-set()`.
*   **Hàm Đếm (Counter functions)**: Thường được sử dụng với thuộc tính `content` để trả về chuỗi đại diện cho giá trị của bộ đếm, ví dụ: `counter()`, `counters()`, `symbols()`.
*   **Hàm Hình dạng (Shape functions)**: Đại diện cho một hình dạng đồ họa, được sử dụng trong `clip-path`, `offset-path`, và `shape-outside` properties, ví dụ: `circle()`, `ellipse()`, `inset()`, `polygon()`, `path()`, `ray()`.
*   **Hàm Tham chiếu (Reference functions)**: Được sử dụng làm giá trị của các thuộc tính để tham chiếu một giá trị được định nghĩa ở nơi khác, ví dụ: `attr()`, `env()`, `if()`, `url()`, `var()`.
*   **Hàm Lưới (Grid functions)**: Được sử dụng để định nghĩa một lưới CSS (`CSS grid`), ví dụ: `fit-content()`, `minmax()`, `repeat()`.
*   **Hàm Phông chữ (Font functions)**: Được sử dụng với thuộc tính `font-variant-alternates` để kiểm soát việc sử dụng các glyph thay thế, ví dụ: `stylistic()`, `styleset()`, `character-variant()`.
*   **Hàm Easing (Easing functions)**: Đại diện cho một hàm toán học được sử dụng trong các thuộc tính `transition` và `animation`, ví dụ: `linear()`, `cubic-bezier()`, `steps()`.
*   **Hàm Vị trí Neo (Anchor positioning functions)**: Được sử dụng khi định vị và định cỡ các phần tử neo (`anchor-positioned elements`) tương đối với vị trí và kích thước của các phần tử neo liên quan của chúng, ví dụ: `anchor()`, `anchor-size()`.
*   **Hàm Đếm Cây (Tree counting functions)**: Trả về một giá trị số nguyên dựa trên cây DOM (`DOM tree`), ví dụ: `sibling-index()`, `sibling-count()`.

### Các vấn đề cần quan tâm

1.  **Khả năng tiếp cận (Accessibility Concerns)**: Mặc dù các hàm so sánh CSS mang lại cách mới để tạo các trang web động, chúng ta cần cẩn thận về cách sử dụng chúng. Ví dụ, việc chỉ sử dụng `min()` để đặt `font-size` là chưa đủ vì nó sẽ quá nhỏ trên thiết bị di động. Bạn nên đặt giá trị tối thiểu và tối đa cho những yếu tố quan trọng đối với trải nghiệm người dùng.
2.  **Hỗ trợ trình duyệt (Browser Support)**: Các hàm `min()`, `max()`, và `clamp()` hiện đã được hỗ trợ rộng rãi trong tất cả các trình duyệt lớn hiện đại.
3.  **Cách thêm dự phòng cho các trình duyệt không hỗ trợ (How to Add Fallback For Non-Supporting Browsers)**:
    *   **Thêm dự phòng thủ công (Add fallback manually)**: Đơn giản là bạn thêm thuộc tính dự phòng trước thuộc tính sử dụng hàm CSS. Các trình duyệt hỗ trợ sẽ bỏ qua cái đầu tiên.
        ```css
        .hero {
          padding: 4rem 1rem; /* Giá trị mặc định cho trình duyệt không hỗ trợ */
          padding: clamp(2rem, 10vmax, 10rem) 1rem; /* Cải tiến cho trình duyệt hỗ trợ */
        }
        ```
    *   **Sử dụng `@supports`**: Bạn có thể sử dụng câu lệnh truy vấn tính năng `@supports` để phát hiện xem các hàm so sánh CSS có được hỗ trợ hay không. Phương pháp này được ưa thích hơn vì bất kỳ trình duyệt nào hỗ trợ các hàm so sánh cũng nên hỗ trợ `@supports`.
        ```css
        .hero {
          padding: 4rem 1rem; /* Mặc định, cho trình duyệt không hỗ trợ */
        }

        @supports (width: min(10px, 5vw)) {
          /* Một cải tiến cho trình duyệt hỗ trợ */
          .hero {
            padding: clamp(2rem, 10vmax, 10rem) 1rem;
          }
        }
        ```
Các hàm toán học trong CSS là những công cụ mạnh mẽ giúp các nhà phát triển và thiết kế tạo ra các bố cục và thành phần linh hoạt, thích ứng tốt hơn với nhiều kích thước màn hình và điều kiện sử dụng khác nhau mà không cần phụ thuộc quá nhiều vào `media queries` hoặc JavaScript.
