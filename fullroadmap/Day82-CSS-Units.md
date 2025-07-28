# Các đơn vị trong CSS (CSS Units)

## Tổng quan về các Đơn vị trong CSS (CSS Units)

Trong đặc tả CSS, có hơn 40 đơn vị độ dài khác nhau. Tuy nhiên, trên thực tế, nhiều đơn vị trong số đó hiếm khi được sử dụng hoặc không nên dùng cho thiết kế web. Điều quan trọng là hiểu sự khác biệt giữa các đơn vị **tuyệt đối (absolute)** và **tương đối (relative)**.

Việc lựa chọn đơn vị CSS phù hợp phụ thuộc vào ngữ cảnh cụ thể. Không có một quy tắc cố định nào áp dụng cho mọi trường hợp, nhưng có những nguyên tắc chung và lời khuyên hữu ích để bạn có thể đưa ra quyết định sáng suốt. Mục tiêu chính là tạo ra các trang web **có khả năng truy cập (accessible)** và **phản hồi (responsive)** tốt.

**Ví dụ so sánh cơ bản:**

```html
<div class="absolute-box">Hộp dùng đơn vị tuyệt đối (px)</div>
<div class="relative-box">Hộp dùng đơn vị tương đối (rem)</div>
```

```css
.absolute-box {
  width: 300px;        /* Luôn cố định 300px */
  font-size: 16px;     /* Không thay đổi theo cài đặt người dùng */
  padding: 10px;
}

.relative-box {
  width: 20rem;        /* Thay đổi theo kích thước font gốc */
  font-size: 1rem;     /* Tôn trọng cài đặt người dùng */
  padding: 0.625rem;   /* Tự động điều chỉnh theo tỷ lệ */
}
```
- Trong phần Setting của trình duyệt, vào Tab Appearance, đến phần Font size và thay đổi kích thước font để thấy sự khác biệt. 
## 1. Đơn vị Tuyệt đối (Absolute Units)

Đơn vị tuyệt đối là những đơn vị có kích thước cố định, không thay đổi dựa trên bất kỳ yếu tố nào khác trên trang. Chúng cung cấp một kích thước chính xác và cố định cho các phần tử mà chúng được áp dụng.

Các đơn vị tuyệt đối bao gồm: `cm` (centimeters), `mm` (millimeters), `Q` (quarter-millimeters), `in` (inches), `pc` (picas), `pt` (points), và `px` (pixels). 
> **Trong số này, chỉ đơn vị `px` (pixel) nên được sử dụng trong thiết kế và phát triển web. Các đơn vị còn lại phù hợp hơn cho việc in ấn.**

**Ví dụ so sánh các đơn vị tuyệt đối:**

```css
.print-units {
  /* Các đơn vị này chỉ nên dùng cho in ấn */
  margin: 1cm;         /* 1 centimeter */
  padding: 10mm;       /* 10 millimeters */
  border-width: 1pt;   /* 1 point */
}

.web-units {
  /* Đơn vị này phù hợp cho web */
  margin: 16px;        /* 16 pixels */
  padding: 8px;
  border-width: 1px;
}
```

### 1.1. Đơn vị `px` (Pixel)

Mặc dù `px` có vẻ dễ hiểu nhất, nhưng thực tế nó lại là một trong những đơn vị phức tạp nhất. Có rất nhiều nhầm lẫn về đơn vị `px`.

**Sự thật khách quan về đơn vị pixel trong CSS:**
*   Một **pixel CSS** (`CSS pixel`) không nhất thiết phải bằng một **pixel vật lý** (`physical device pixel`) trên màn hình. Trên màn hình HD, một pixel CSS có thể trải rộng nhiều pixel vật lý.
*   Kích thước thực tế của một hộp được định nghĩa bằng pixel CSS có thể khác nhau đáng kể trên các thiết bị khác nhau (ví dụ: màn hình máy tính, điện thoại, TV).
    *   Ví dụ: Một hộp `96px` x `96px` được đo có kích thước khác nhau trên các thiết bị: gần 3cm trên màn hình 1080p 27 inch, 1.4cm trên điện thoại 1440p, 2.2cm trên màn hình 1440p 27 inch, và 5.5cm trên TV 50+ inch.

**Ví dụ minh họa về pixel CSS vs pixel vật lý:**

```css
.pixel-demo {
  width: 100px;           /* 100 CSS pixels */
  height: 100px;
  background: red;
}

/* Trên màn hình retina (2x), hộp này thực tế sẽ hiển thị bằng 200x200 pixel vật lý */
/* Trên màn hình thường (1x), hộp này sẽ hiển thị bằng 100x100 pixel vật lý */
```
- Mở công cụ Device Toolbar trong DevTools, chọn các thiết bị khác nhau thì sẽ thấy kích thước vật lý khác nhau.   

*   Lý do cho sự khác biệt này là **các đơn vị tuyệt đối của CSS không nhất thiết giống với các đơn vị tương ứng trong thế giới thực**. Thay vào đó, chúng phụ thuộc vào **đơn vị neo (Anchor Unit)**.
    *   Nếu đầu ra dành cho in ấn hoặc độ phân giải tương tự như in ấn, **đơn vị vật lý** (`physical unit`) sẽ là đơn vị neo, nghĩa là CSS sẽ xuất ra các số đo bằng với thế giới thực (ví dụ: 1 CSS inch sẽ tương đương 1 inch khi đo bằng thước trên giấy in).
    *   Nếu đầu ra dành cho **màn hình (screen media)** (bao gồm các thiết bị độ phân giải cao, thấp, hoặc khoảng cách xem bất thường), **pixel** sẽ là đơn vị neo.

**Pixel tham chiếu (Reference Pixel):**
*   Khi `pixel` là đơn vị neo, số đo của nó sẽ phụ thuộc vào **pixel tham chiếu (reference pixel)**.
*   **Hiểu đơn giản hơn**, pixel tham chiếu là một pixel **trông giống hệt nhau trong mọi tình huống xem** tương đối so với **khoảng cách xem dự kiến của thiết bị** (`expected viewing distance of a device`).
    *   Ví dụ: một pixel tham chiếu ở khoảng cách đọc 71cm (28 inch) là 0.26mm, trong khi ở khoảng cách 3.5 mét (12 feet) là 1.3mm.
*   Chính vì các thiết bị có khoảng cách xem dự kiến khác nhau mà cùng một hộp lại có các kích thước vật lý khác nhau khi đo. Tiêu chuẩn này tạo ra **sự nhất quán trên tất cả các thiết bị** bất kể kích thước và số pixel trên mỗi inch (`pixels per inch`) của chúng.
*   Tóm lại, **đơn vị pixel là một phép đo độ dài tương đối so với khoảng cách xem dự kiến của thiết bị đang được sử dụng**. Điều quan trọng là **một pixel sẽ luôn là chiều rộng nhỏ nhất để tạo ra một đường kẻ hiển thị trên một thiết bị cụ thể**.

**Lời khuyên về việc sử dụng `px`:**
*   Mặc dù `px` là một đơn vị tuyệt đối, nó vẫn có thể thay đổi kích thước khi người dùng sử dụng tính năng **phóng to/thu nhỏ (zoom)** của trình duyệt.
*   Nói chung, nên tránh sử dụng `px` cho kích thước chữ (`font-size`), vì nó ghi đè lên tùy chọn của người dùng về kích thước phông chữ và ảnh hưởng đến khả năng truy cập (`accessibility`).
*   Tuy nhiên, `px` có thể được dùng cho các trường hợp cần giá trị cố định và nhỏ, ví dụ như độ lệch bóng (`shadow offset`) là `3px`.

**Ví dụ về việc sử dụng px hợp lý:**

```css
/* ✅ Sử dụng px tốt - các giá trị nhỏ, cố định */
.button {
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.icon {
  width: 16px;
  height: 16px;
}

/* ❌ Tránh sử dụng px - ảnh hưởng accessibility */
.bad-text {
  font-size: 14px;  /* Ghi đè cài đặt người dùng */
}

/* ✅ Tốt hơn - sử dụng rem */
.good-text {
  font-size: 0.875rem;  /* Tôn trọng cài đặt người dùng */
}
```

*   Đối với các thuộc tính như `margin` và `padding`, việc sử dụng `px` so với các đơn vị tương đối như `rem` phụ thuộc vào sở thích thiết kế. Sử dụng `px` cho `margin` và `padding` có thể giúp duy trì không gian trắng (`whitespace`) nhất quán ngay cả khi kích thước chữ thay đổi, mặc dù điều này có thể phá vỡ bố cục nếu không được thiết kế linh hoạt.

**Ví dụ so sánh px vs rem cho margin/padding:**

```css
.card-with-px {
  font-size: 1.2rem;
  padding: 16px;       /* Padding cố định */
  margin: 20px;        /* Margin cố định */
}

.card-with-rem {
  font-size: 1.2rem;
  padding: 1rem;       /* Padding tỷ lệ với font gốc */
  margin: 1.25rem;     /* Margin tỷ lệ với font gốc */
}

/* Khi người dùng tăng font size lên 120%, card-with-rem sẽ tự động tăng padding/margin */
```

## 2. Đơn vị Tương đối (Relative Units)

Đơn vị tương đối là những đơn vị có thể thay đổi kích thước dựa trên ngữ cảnh của chúng. Chúng mang lại sự linh hoạt và khả năng phản hồi tốt hơn cho thiết kế web.

### 2.1. `em` và `rem`

`em` và `rem` đều là các đơn vị tương đối liên quan đến kích thước phông chữ (`font-size`).

**Vấn đề với `px` cho kích thước phông chữ:**

```css
/* ❌ Vấn đề: Ghi đè cài đặt người dùng */
body {
  font-size: 16px;  /* Bỏ qua nếu người dùng đặt font lớn hơn cho accessibility */
}

/* ✅ Tốt hơn: Tôn trọng cài đặt người dùng */
body {
  font-size: 1rem;  /* Sẽ là 16px mặc định, nhưng có thể là 20px nếu người dùng đặt lớn hơn */
}
```

*   Kích thước phông chữ mặc định của hầu hết các trình duyệt phổ biến là `16px`.
*   Khoảng 2-3% người dùng thay đổi giá trị này vì lý do truy cập (`accessibility reasons`).
*   Nếu bạn đặt `font-size` bằng `px` (ví dụ: `16px`) trên các phần tử HTML, nó sẽ ghi đè lên cài đặt mặc định của trình duyệt và bỏ qua tùy chọn truy cập của người dùng. Điều này được coi là "thiếu tôn trọng" người dùng.

#### Đơn vị `em`

*   **Khi sử dụng cho thuộc tính `font-size`**, `1em` tương đối với **kích thước phông chữ của phần tử cha (parent element's font size)**.

**Ví dụ về em cho font-size:**

```html
<div class="parent">
  Parent text (16px)
  <div class="child">
    Child text (24px = 1.5em của 16px)
    <div class="grandchild">
      Grandchild text (36px = 1.5em của 24px)
    </div>
  </div>
</div>
```

```css
.parent {
  font-size: 16px;
}

.child {
  font-size: 1.5em;  /* 1.5 × 16px = 24px */
}

.grandchild {
  font-size: 1.5em;  /* 1.5 × 24px = 36px (hiệu ứng cascade!) */
}
```

*   **Khi sử dụng cho bất kỳ thuộc tính nào khác (ví dụ: `padding`, `margin`, `width`)**, `1em` tương đối với **kích thước phông chữ của chính phần tử đó (its own element's font size)**.

**Ví dụ về em cho padding/margin:**

```css
.button {
  font-size: 1.2rem;
  padding: 0.5em 1em;  /* Padding sẽ dựa trên 1.2rem */
  /* padding: 0.6rem 1.2rem tương đương */
}

.large-button {
  font-size: 1.5rem;
  padding: 0.5em 1em;  /* Padding sẽ tự động lớn hơn vì font lớn hơn */
  /* padding: 0.75rem 1.5rem tương đương */
}
```

*   **Vấn đề của `em` khi dùng cho `font-size`:** Nó có thể dẫn đến **hiệu ứng "cascade"** hoặc "phụ thuộc chuỗi" (`cascading problem`), nơi kích thước phông chữ của các phần tử lồng nhau trở nên khó theo dõi vì mỗi phần tử phụ thuộc vào cha của nó, và cha của cha nó, v.v.. Điều này khiến việc duy trì và debug code trở nên khó khăn.

#### Đơn vị `rem` (root em)

*   `rem` rất giống `em`, nhưng thay vì tham chiếu đến phần tử cha, nó **luôn tham chiếu đến kích thước phông chữ của phần tử gốc HTML** (`root HTML element`). Phần tử gốc HTML mặc định có `font-size` là `16px`.

**Ví dụ so sánh em vs rem:**

```html
<div class="container">
  <h1>Heading 1</h1>
  <div class="nested">
    <h2>Heading 2</h2>
    <div class="deep-nested">
      <h3>Heading 3</h3>
    </div>
  </div>
</div>
```

```css
/* Sử dụng em - có hiệu ứng cascade */
.container { font-size: 18px; }
.nested h2 { font-size: 1.2em; }    /* 1.2 × 18px = 21.6px */
.deep-nested h3 { font-size: 1.2em; } /* 1.2 × 21.6px = 25.92px */

/* Sử dụng rem - luôn dựa trên root */
.container { font-size: 18px; }
.nested h2 { font-size: 1.2rem; }   /* 1.2 × 16px = 19.2px */
.deep-nested h3 { font-size: 1.2rem; } /* 1.2 × 16px = 19.2px */
```

*   Ví dụ: `1rem` luôn là `16px` (mặc định) bất kể kích thước phông chữ của phần tử cha là gì.
*   `rem` giải quyết vấn đề "cascade" của `em` vì tất cả các kích thước đều dựa trên một điểm gốc duy nhất.
*   **Khuyến nghị:** Đối với kích thước phông chữ (`font-size`), **luôn sử dụng `rem`**. Điều này cho phép trang web của bạn thích ứng với cài đặt phông chữ mặc định của người dùng và trình duyệt, đảm bảo khả năng truy cập tốt hơn.

**Mẹo để dễ tính toán với `rem`:**

```css
/* Mẹo: Đặt font-size của html thành 62.5% để dễ tính toán */
html {
  font-size: 62.5%; /* 62.5% của 16px = 10px */
}

body {
  font-size: 1.6rem; /* 16px */
}

h1 {
  font-size: 2.4rem; /* 24px */
}

h2 {
  font-size: 2.1rem; /* 21px */
}

.small-text {
  font-size: 1.2rem; /* 12px */
}
```

#### So sánh và Lời khuyên

*   **Sử dụng `rem` cho `font-size`** là lựa chọn tốt nhất để tôn trọng cài đặt của người dùng và đảm bảo khả năng truy cập.
*   **Sử dụng `em` cho `padding`, `margin`, và `width`** trên các phần tử mà bạn muốn các giá trị này tự động điều chỉnh theo kích thước phông chữ của chính phần tử đó. Ví dụ điển hình là `padding` của các nút.

**Ví dụ thực tế về nút button:**

```css
.btn {
  font-size: 1rem;           /* Dựa trên root font size */
  padding: 0.75em 1.5em;     /* Padding tự động điều chỉnh theo font size */
  border-radius: 0.25em;     /* Border radius cũng tỷ lệ theo */
}

.btn-large {
  font-size: 1.25rem;        /* Font lớn hơn */
  /* Padding và border-radius sẽ tự động lớn hơn nhờ em */
}

.btn-small {
  font-size: 0.875rem;       /* Font nhỏ hơn */
  /* Padding và border-radius sẽ tự động nhỏ hơn nhờ em */
}
```

*   Đối với `margin` và `padding` nói chung, cả `em` và `rem` đều là những lựa chọn tốt. `rem` sẽ giữ cho khoảng cách nhất quán trên toàn bộ tài liệu, trong khi `em` sẽ làm cho khoảng cách lớn hơn trên các tiêu đề (`heading`) có kích thước phông chữ lớn hơn, điều này có thể giúp làm rõ cấu trúc phân cấp.

**Ví dụ về `em` và `rem` trong danh sách lồng nhau:**

```html
<ul class="ems">
  <li>One</li>
  <li>Two</li>
  <li> Three
    <ul>
      <li>Three A</li>
      <li> Three B
        <ul>
          <li>Three B 2</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul class="rems">
  <li>One</li>
  <li>Two</li>
  <li> Three
    <ul>
      <li>Three A</li>
      <li> Three B
        <ul>
          <li>Three B 2</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>
```

```css
html {
  font-size: 16px;
}

.ems li {
  font-size: 1.3em; /* Kích thước sẽ lớn dần theo từng cấp lồng nhau */
}
/* Level 1: 1.3 × 16px = 20.8px */
/* Level 2: 1.3 × 20.8px = 27.04px */
/* Level 3: 1.3 × 27.04px = 35.15px */

.rems li {
  font-size: 1.3rem; /* Kích thước sẽ nhất quán, tất cả đều tương đối so với <html> */
}
/* Tất cả levels: 1.3 × 16px = 20.8px */
```

### 2.2. Đơn vị Viewport (`vw`, `vh`, `vmin`, `vmax`)

Các đơn vị `vh` và `vw` liên quan đến kích thước của **khung nhìn (viewport)**. `vmin` và `vmax` cũng tương tự, nhưng ít phổ biến hơn.

*   **`vw` (Viewport Width):** `1vw` bằng **1% chiều rộng của khung nhìn**.
    *   Khác với `%` (phần trăm), `vw` tương đối so với toàn bộ chiều rộng của cửa sổ trình duyệt, trong khi `%` tương đối so với chiều rộng của phần tử cha chứa nó.

**Ví dụ so sánh vw vs %:**

```html
<div class="container">
  <div class="percent-width">50% width</div>
  <div class="viewport-width">50vw width</div>
</div>
```

```css
.container {
  width: 400px;
  border: 2px solid blue;
}

.percent-width {
  width: 50%;    /* 50% của container = 200px */
  background: lightblue;
}

.viewport-width {
  width: 50vw;   /* 50% của viewport width (có thể là 640px nếu viewport = 1280px) */
  background: lightcoral;
}
```

*   **`vh` (Viewport Height):** `1vh` bằng **1% chiều cao của khung nhìn**.
 - Tương tự như trên nếu height = 50% thì tức là chiều cao bằng 1 nửa so với phần tử cha. Còn height = 50vh thì có nghĩa là chiều cao bằng 1 nửa so với chiều cao viewport.

**Ví dụ về vh:**

```css
.hero-section {
  height: 100vh;        /* Toàn bộ chiều cao viewport */
  background: linear-gradient(to bottom, #ff7e5f, #feb47b);
}

.half-screen {
  height: 50vh;         /* Nửa chiều cao viewport */
}
```

*   **`vmin` (Viewport Minimum):** Một phần trăm của chiều rộng hoặc chiều cao khung nhìn, **tùy theo giá trị nào nhỏ hơn**.
*   **`vmax` (Viewport Maximum):** Một phần trăm của chiều rộng hoặc chiều cao khung nhìn, **tùy theo giá trị nào lớn hơn**. (Lưu ý: `vmax` chưa được hỗ trợ trên Internet Explorer hoặc Edge).

**Ví dụ về vmin và vmax:**

```css
.square-responsive {
  width: 50vmin;    /* Luôn là 50% của dimension nhỏ hơn */
  height: 50vmin;   /* Tạo ra hình vuông responsive */
}

/* Trên màn hình 1200×800: vmin = 8px (800×1% = 8px) */
/* Trên màn hình 800×1200: vmin = 8px (800×1% = 8px) */

.full-cover {
  width: 100vmax;   /* Phủ toàn bộ dimension lớn hơn */
  height: 100vmax;
}
```

**Khi nào nên sử dụng các đơn vị viewport:**

#### Thiết kế đáp ứng (Responsive typography)

```css
/* ❌ Font size thay đổi quá đột ngột */
.bad-responsive-text {
  font-size: 4vw;
}

/* ✅ Kết hợp với calc() để kiểm soát tốt hơn */
.good-responsive-text {
  font-size: calc(16px + 0.5vw);  /* Min 16px, tăng dần theo viewport */
}

/* ✅ Sử dụng clamp() để giới hạn min/max */
.better-responsive-text {
  font-size: clamp(1rem, 2.5vw, 2rem);  /* Min 1rem, max 2rem */
}
```

#### Bố cục toàn chiều cao (Full-height layouts)

```css
.app-layout {
  min-height: 100vh;    /* Ít nhất bằng viewport height */
}

.hero-banner {
  height: 100vh;        /* Toàn bộ viewport height */
  display: flex;
  align-items: center;
  justify-content: center;
}

.sticky-footer-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;              /* Chiếm không gian còn lại */
}
```

#### Tỷ lệ khung hình linh hoạt (Fluid Aspect Ratios)

```css
.video-container {
  width: 100%;
  height: calc(100vw * 9 / 16);  /* Tỷ lệ 16:9 */
  max-height: calc(100vh - 100px); /* Không vượt quá viewport height */
}

.square-grid-item {
  width: calc(100vw / 3);   /* 1/3 viewport width */
  height: calc(100vw / 3);  /* Tạo hình vuông */
}
```

#### Phá vỡ vùng chứa (Breaking the Container)

```css
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.full-width-element {
  /* Mở rộng ra ngoài container */
  width: 100vw;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
}

/* Ví dụ khác: Full-width background */
.full-bleed {
  box-shadow: 0 0 0 100vmax #f0f0f0;
  clip-path: inset(0 -100vmax);
}
```

### 2.3. Đơn vị `ch` (Character Unit)

Đơn vị `ch` đo **chiều rộng của ký tự '0' (`character '0'`)** trong phông chữ hiện tại.

**Khi nào nên sử dụng `ch`:**

#### Giới hạn độ dài dòng cho khả năng đọc tốt

```css
.article-content {
  max-width: 65ch;      /* Khoảng 65 ký tự '0' trên mỗi dòng */
  line-height: 1.6;
  margin: 0 auto;
}

.narrow-column {
  max-width: 45ch;      /* Cột hẹp hơn cho sidebar */
}

.wide-reading {
  max-width: 75ch;      /* Rộng hơn cho content dài */
}
```

**Ví dụ so sánh ch với các đơn vị khác:**

```html
<div class="comparison">
  <p class="px-width">Đoạn này giới hạn bằng px (400px). Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam deleniti dolorum est iste saepe ipsam rem at magni cum itaque. Enim nam delectus eaque quisquam doloribus dignissimos consequatur, ipsa deleniti.</p>
  <p class="rem-width">Đoạn này giới hạn bằng rem (25rem). Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam deleniti dolorum est iste saepe ipsam rem at magni cum itaque. Enim nam delectus eaque quisquam doloribus dignissimos consequatur, ipsa deleniti.</p>
  <p class="ch-width">Đoạn này giới hạn bằng ch (60ch). Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam deleniti dolorum est iste saepe ipsam rem at magni cum itaque. Enim nam delectus eaque quisquam doloribus dignissimos consequatur, ipsa deleniti.</p>
</div>
```

```css
.comparison p {
  background: #f0f0f0;
  padding: 1rem;
  margin-bottom: 1rem;
}

.px-width {
  max-width: 400px;     /* Cố định, không thay đổi theo font */
}

.rem-width {
  max-width: 25rem;     /* Thay đổi theo root font size */
}

.ch-width {
  max-width: 60ch;      /* Thay đổi theo font family và size */
}
```

#### Sử dụng trong form và input

```css
.input-short {
  width: 10ch;          /* Cho mã zip code */
}

.input-medium {
  width: 20ch;          /* Cho tên */
}

.input-long {
  width: 40ch;          /* Cho email */
}

.code-display {
  width: 80ch;          /* Cho hiển thị code */
  font-family: monospace;
}
```

## 3. Phần trăm (Percentages - `%`)

*   Giá trị phần trăm luôn **tương đối so với phần tử cha (`parent`)**.
*   Nếu `font-size` được đặt bằng phần trăm, nó sẽ là một phần trăm của `font-size` của phần tử cha.
*   **Khi nào nên sử dụng phần trăm:** Khi bạn muốn kích thước một phần tử **tương đối so với phần tử cha**.

**Ví dụ về Phần trăm so với Pixel:**

```html
<div class="box px">I am 200px wide</div>
<div class="box percent">I am 40% wide</div>

<div class="wrapper">
  <div class="box px">I am 200px wide</div>
  <div class="box percent">I am 40% wide</div>
</div>
```

```css
.box {
  background-color: lightblue;
  border: 5px solid darkblue;
  padding: 10px;
  margin: 1em 0;
}

.wrapper {
  width: 400px; /* Vùng chứa có chiều rộng cố định */
  border: 5px solid rebeccapurple;
}

.px {
  width: 200px; /* Không thay đổi */
}

.percent {
  width: 40%; /* Thay đổi theo chiều rộng của cha */
}
```

**Ví dụ thực tế về responsive grid:**

```css
.grid-container {
  display: flex;
  gap: 20px;
}

.grid-item {
  background: #e0e0e0;
  padding: 1rem;
}

.col-1 { width: 8.333%; }    /* 1/12 */
.col-2 { width: 16.666%; }   /* 2/12 */
.col-3 { width: 25%; }       /* 3/12 */
.col-4 { width: 33.333%; }   /* 4/12 */
.col-6 { width: 50%; }       /* 6/12 */
.col-12 { width: 100%; }     /* 12/12 */
```

**Ví dụ về phần trăm với các thuộc tính khác nhau:**

```css
.percentage-demo {
  /* Width/Height: Dựa trên parent */
  width: 80%;               /* 80% width của parent */
  
  /* Margin/Padding: Dựa trên parent width (cả top/bottom cũng vậy!) */
  margin: 5%;               /* 5% của parent width cho tất cả sides */
  padding: 2.5% 5%;         /* Top/bottom: 2.5% parent width, Left/right: 5% parent width */
  
  /* Font-size: Dựa trên parent font-size */
  font-size: 120%;          /* 120% của parent font-size */
  
  /* Background-position: Dựa trên element size */
  background-position: 50% 25%;  /* 50% width, 25% height của chính element */
}
```

## 4. Các Loại Giá trị và Hàm khác trong CSS

Ngoài các đơn vị độ dài, CSS còn có nhiều loại giá trị khác để định nghĩa các thuộc tính.

### 4.1. Số (Numbers)

```css
.number-examples {
  opacity: 0.8;           /* 0 đến 1 */
  z-index: 100;           /* Số nguyên */
  line-height: 1.5;       /* Số thập phân không đơn vị */
  font-weight: 600;       /* 100-900 */
  flex-grow: 2;           /* Tỷ lệ flex */
}
```

### 4.2. Màu sắc (Color)

```css
.color-examples {
  /* Từ khóa màu */
  color: red;
  background: transparent;
  border-color: currentColor;
  
  /* Hex values */
  color: #ff0000;         /* Đỏ */
  color: #f00;            /* Đỏ viết tắt */
  color: #ff000080;       /* Đỏ với alpha */
  
  /* RGB values */
  color: rgb(255, 0, 0);
  color: rgb(100% 0% 0%);
  color: rgb(255 0 0 / 0.5);  /* Với alpha */
  
  /* HSL values */
  color: hsl(0, 100%, 50%);   /* Đỏ */
  color: hsl(120deg 100% 50%); /* Xanh lá */
  color: hsl(0 100% 50% / 0.8); /* Đỏ với alpha */
  
  /* HWB values */
  color: hwb(0 0% 0%);        /* Đỏ */
}
```

### 4.3. Hình ảnh (Images)

```css
.image-examples {
  /* URL images */
  background-image: url('image.jpg');
  
  /* Gradients */
  background: linear-gradient(45deg, #ff0000, #0000ff);
  background: radial-gradient(circle, #ff0000, #0000ff);
  background: conic-gradient(from 45deg, #ff0000, #0000ff);
  
  /* Multiple backgrounds */
  background: 
    url('overlay.png'),
    linear-gradient(to bottom, rgba(0,0,0,0.5), transparent),
    url('background.jpg');
}
```

### 4.4. Vị trí (Position)
> Xem trong bài position sau này.  

```css
.position-examples {
  /* Keywords */
  background-position: top left;
  background-position: center;
  background-position: bottom right;
  
  /* Length values */
  background-position: 10px 20px;
  background-position: 1rem 2rem;
  
  /* Percentage values */
  background-position: 50% 75%;
  
  /* Mixed values */
  background-position: left 10px top 20px;
}
```

### 4.5. Chuỗi và định danh (Strings and Identifiers)

```css
.string-examples {
  /* Identifiers */
  display: flex;
  position: relative;
  font-style: italic;
  
  /* Strings */
  content: "Hello World";
  font-family: "Times New Roman", serif;
  
  /* Generated content */
  counter-reset: section;
}

.string-examples::before {
  content: "★ ";
  color: gold;
}

.string-examples::after {
  content: counter(section) ": ";
  counter-increment: section;
}
```

### 4.6. Hàm (Functions)

> Xem cụ thể bài hàm sau này   

#### Hàm biến đổi (Transform functions)

```css
.transform-examples {
  /* 2D transforms */
  transform: translate(50px, 100px);
  transform: rotate(45deg);
  transform: scale(1.5);
  transform: skew(15deg, 0deg);
  
  /* 3D transforms */
  transform: translateZ(50px);
  transform: rotateX(45deg);
  transform: perspective(1000px) rotateY(45deg);
  
  /* Combined transforms */
  transform: 
    translate(50px, 100px) 
    rotate(45deg) 
    scale(1.2);
}
```

#### Hàm toán học (Math functions)

**`calc()` - Phép tính cơ bản:**

```css
.calc-examples {
  /* Kết hợp các đơn vị khác nhau */
  width: calc(100% - 40px);
  height: calc(100vh - 80px);
  
  /* Phép tính phức tạp */
  margin: calc(1rem + 2px);
  font-size: calc(1rem + 0.5vw);
  
  /* Responsive spacing */
  padding: calc(1rem + 2vw);
  
  /* Grid calculations */
  width: calc((100% - 60px) / 4);  /* 4 columns với 20px gap */
}
```

**`min()` - Chọn giá trị nhỏ nhất:**

```css
.min-examples {
  /* Width không vượt quá 800px hoặc 80% parent */
  width: min(800px, 80%);
  
  /* Font size responsive nhưng không quá nhỏ */
  font-size: min(4vw, 2rem);
  
  /* Padding responsive */
  padding: min(5vw, 3rem);
}
```

- Ví dụ trên: Câu lệnh `width: min(800px, 80%)` có nghĩa là: chiều rộng của phần tử sẽ là giá trị nhỏ hơn trong hai lựa chọn: `800px` hoặc `80%` của phần tử cha. Giả sử phần tử cha có chiều rộng:
    - `900px → 80% là 720px`, nhỏ hơn `800px` → chiều rộng sẽ là `720px` 
    - `1200px → 80% là 960px`, lớn hơn `800px` → chiều rộng sẽ là `800px`

**`max()` - Chọn giá trị lớn nhất:**

```css
.max-examples {
  /* Width ít nhất 300px hoặc 50% parent */
  width: max(300px, 50%);
  
  /* Font size không được nhỏ hơn 1rem */
  font-size: max(1rem, 2vw);
  
  /* Height minimum */
  height: max(200px, 30vh);
}
```

**`clamp()` - Giới hạn giá trị trong khoảng:**

```css
.clamp-examples {
  /* Syntax: clamp(min, preferred, max) */
  
  /* Responsive font size */
  font-size: clamp(1rem, 2.5vw, 2rem);
  /* Tối thiểu 1rem, ưa thích 2.5vw, tối đa 2rem */
  
  /* Responsive width */
  width: clamp(300px, 80%, 1200px);
  /* Tối thiểu 300px, ưa thích 80%, tối đa 1200px */
  
  /* Responsive padding */
  padding: clamp(1rem, 5vw, 3rem);
  
  /* Responsive gap */
  gap: clamp(0.5rem, 2vw, 2rem);
}
```

**Ví dụ thực tế với math functions:**

```css
.responsive-card {
  /* Container responsive */
  width: clamp(300px, 90%, 600px);
  margin: 0 auto;
  
  /* Padding responsive */
  padding: clamp(1rem, 4vw, 2rem);
  
  /* Font size hierarchy */
  font-size: clamp(1rem, 2vw, 1.125rem);
}

.responsive-card h2 {
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  margin-bottom: clamp(0.5rem, 2vw, 1rem);
}

.responsive-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
  gap: clamp(1rem, 3vw, 2rem);
}
```

## 5. Lời khuyên chung và Tóm tắt

### 5.1. Nguyên tắc chọn đơn vị

```css
/* ✅ Khuyến nghị */
.good-practices {
  /* Font sizes: Luôn dùng rem */
  font-size: 1.125rem;
  
  /* Spacing có thể dùng rem hoặc em */
  margin: 1rem 0;           /* rem: nhất quán */
  padding: 0.75em 1em;      /* em: tỷ lệ với font */
  
  /* Borders: dùng px cho thin borders */
  border: 1px solid #ccc;
  
  /* Responsive breakpoints: dùng em */
  /* Media queries tôn trọng user zoom */
}

@media (min-width: 48em) {    /* 768px với font 16px */
  .good-practices {
    font-size: 1.25rem;
  }
}

/* ❌ Tránh */
.bad-practices {
  font-size: 14px;           /* Không tôn trọng user settings */
  margin: 5vw;               /* Quá extreme cho spacing */
  border: 0.1rem solid #ccc; /* Quá thick cho border */
}
```

### 5.2. Checklist để chọn đơn vị CSS

1. **Font sizes:** Luôn dùng `rem`
2. **Spacing (margin/padding):**
   - Dùng `rem` nếu muốn nhất quán
   - Dùng `em` nếu muốn tỷ lệ với font size
3. **Widths:**
   - Dùng `%` cho responsive layouts
   - Dùng `vw` cho full-width elements
   - Dùng `ch` cho text content width
4. **Heights:**
   - Dùng `vh` cho full-height sections
   - Tránh set fixed height khi có thể
5. **Borders:** Dùng `px` cho thin borders (1-2px)
6. **Shadows/Radius:** Dùng `px` cho giá trị nhỏ
7. **Media queries:** Dùng `em` thay vì `px`

### 5.3. Responsive Design Pattern

```css
/* Mobile First với các đơn vị responsive */
.responsive-component {
  /* Base: Mobile styles */
  font-size: clamp(1rem, 3vw, 1.125rem);
  padding: clamp(1rem, 4vw, 1.5rem);
  width: min(90%, 1200px);
  margin: 0 auto;
}

/* Tablet */
@media (min-width: 48em) {
  .responsive-component {
    padding: clamp(1.5rem, 5vw, 2rem);
  }
}

/* Desktop */
@media (min-width: 64em) {
  .responsive-component {
    padding: 2rem;
  }
}
```

**Kết luận:**
*   **Ưu tiên các đơn vị tương đối (nhất là `rem` cho `font-size`)** để đảm bảo khả năng truy cập và tính linh hoạt trên các thiết bị và cài đặt người dùng khác nhau.
*   **Sử dụng `px` một cách có chọn lọc** cho các trường hợp cụ thể khi bạn cần kích thước cố định nhỏ hoặc khi việc sử dụng đơn vị tương đối có thể làm phá vỡ bố cục phức tạp.
*   **Hiểu rõ sự khác biệt giữa `%` và `vw` (hoặc `vh`)**: `%` tương đối với **cha**, trong khi `vw`/`vh` tương đối với **khung nhìn**.
*   **Sử dụng `ch`** cho `max-width` trên các đoạn văn để đảm bảo độ dài dòng dễ đọc.
*   **Luôn đưa ra quyết định có ý thức** về việc sử dụng đơn vị, tránh áp dụng một cách bừa bãi có thể khiến trang web của bạn kém phản hồi và khó sử dụng cho những người dựa vào công nghệ hỗ trợ.

Không có một "đơn vị yêu thích" duy nhất, mà là việc lựa chọn đơn vị phù hợp nhất với mục đích cụ thể.

## Tài liệu phải đọc khi ĐÓNG CỌC LẦN 2
1. https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-css-units
1. https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units
1. https://codyloyd.com/2021/css-units/
1. https://css-tricks.com/fun-viewport-units/
1. https://www.youtube.com/watch?v=N5wpD9Ov_To
1. https://www.youtube.com/watch?v=fzZTvLmmTzM- 
---
> ⭐ **Theo dõi [kênh Threads](https://www.threads.com/@kaitaku.88) để đọc bài mới mỗi ngày!** ⭐  

**[<== Bài Trước  ](link)          |[  Trang Chủ  ](./README.md)|           [  Bài Sau ==>](link)**
