# Hướng Dẫn Chi Tiết về CSS Custom Properties (Biến CSS)

**CSS Custom Properties**, thường được gọi là "CSS Variables" (Biến CSS), là các thực thể được định nghĩa bởi tác giả CSS để đại diện cho các giá trị cụ thể có thể được tái sử dụng trong toàn bộ tài liệu. Chúng là một tính năng mạnh mẽ và hữu ích khi viết các tệp CSS của bạn.

## I. Tại sao nên quan tâm đến CSS Custom Properties?

### 1. Nguyên tắc DRY (Don't Repeat Yourself)
Custom properties giúp bạn viết mã CSS gọn gàng hơn, tuân thủ nguyên tắc "Don't Repeat Yourself". Thay vì lặp lại cùng một giá trị ở nhiều nơi, bạn định nghĩa nó một lần và tái sử dụng.

**Ví dụ cơ bản:**
```css
/* Cách truyền thống - lặp lại giá trị */
.header { color: #3498db; }
.button { background-color: #3498db; }
.link { border-color: #3498db; }

/* Sử dụng Custom Properties */
:root {
  --primary-color: #3498db;
}
.header { color: var(--primary-color); }
.button { background-color: var(--primary-color); }
.link { border-color: var(--primary-color); }
```

**Ví dụ với spacing:**
```css
.card {
  --spacing: 1.2rem;
  padding: var(--spacing);
  margin-bottom: var(--spacing);
  gap: calc(var(--spacing) / 2);
}
/* Nếu thay đổi --spacing thành 2rem, tất cả sẽ cập nhật tự động */
```

### 2. Tạo chủ đề (Color Themes)
Đặc biệt hữu ích cho việc tạo các chủ đề màu sắc trên trang web, ví dụ như chế độ sáng/tối (light/dark mode).

**Ví dụ chế độ sáng/tối:**
```html
<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Color Theme Demo</title>
  <style>
    /* Biến màu gốc cho chế độ sáng */
    :root {
      --bg-color: #ffffff;
      --text-color: #333333;
      --accent-color: #007bff;
    }

    /* Khi phần tử có thuộc tính data-theme="dark", ghi đè biến màu */
    [data-theme="dark"] {
      --bg-color: #121212;
      --text-color: #ffffff;
      --accent-color: #66b3ff;
    }

    /* Áp dụng màu nền và chữ theo biến CSS */
    body {
      background-color: var(--bg-color);
      color: var(--text-color);
      font-family: sans-serif;
      padding: 2rem;
      transition: background-color 0.3s, color 0.3s;
    }

    /* Nút sử dụng màu nhấn (accent color) */
    .button {
      background-color: var(--accent-color);
      color: white;
      border: none;
      padding: 0.5rem 1rem;
      cursor: pointer;
      border-radius: 5px;
      transition: background-color 0.3s;
    }

    /* Hiệu ứng hover */
    .button:hover {
      opacity: 0.8;
    }
  </style>
</head>
<body>

  <h1>Chế độ sáng / tối (Light / Dark Mode)</h1>
  <p>Nhấn nút để chuyển đổi chế độ:</p>
  <button class="button" onclick="toggleTheme()">Đổi giao diện</button>

  <script>
    function toggleTheme() {
      const html = document.documentElement;
      const currentTheme = html.getAttribute("data-theme");
      html.setAttribute("data-theme", currentTheme === "dark" ? "light" : "dark");
    }
  </script>

</body>
</html>

```

### 3. Mở khóa các khả năng thú vị trong CSS
Custom properties tuân theo cơ chế thác nước (cascade), cho phép kiểm soát các phần của giá trị theo cách mà trước đây không thể.

**Ví dụ với cascade:**
```css
:root {
  --button-size: 1;
}

.section-large {
  --button-size: 1.5; /* Ghi đè cho section này */
}

.button {
  transform: scale(var(--button-size));
  padding: calc(var(--button-size) * 10px);
}
```

### 4. Tương tác với JavaScript
Khả năng cập nhật các custom properties trong JavaScript mở ra nhiều khả năng thú vị.

**Ví dụ JavaScript:**
```javascript
// Thay đổi màu chủ đề
document.documentElement.style.setProperty('--primary-color', '#e74c3c');

// Đọc giá trị hiện tại
const primaryColor = getComputedStyle(document.documentElement)
  .getPropertyValue('--primary-color');
```

### 5. Dễ đọc và ngữ nghĩa
`--main-text-color` dễ hiểu hơn giá trị hex `#00ff00`, đặc biệt khi màu đó được sử dụng trong các ngữ cảnh khác nhau.

**Ví dụ tên có ý nghĩa:**
```css
:root {
  /* Thay vì dùng #ff6b6b, #4ecdc4, #45b7d1 */
  --error-color: #ff6b6b;
  --success-color: #4ecdc4;
  --info-color: #45b7d1;
  
  /* Hoặc theo ngữ cảnh */
  --brand-primary: #2c3e50;
  --brand-secondary: #3498db;
  --text-body: #2c3e50;
  --text-muted: #7f8c8d;
}
```

## II. Khai báo Custom Properties

### 1. Sử dụng tiền tố hai dấu gạch ngang (`--`)

#### Cú pháp cơ bản
Custom properties phải nằm trong một selector và bắt đầu bằng hai dấu gạch ngang (`--`).

```css
selector {
  --tên-thuộc-tính: giá-trị;
}
```

#### Quy tắc đặt tên
- Phải bắt đầu bằng hai dấu gạch ngang (`--`)
- Nên dùng chữ cái, số và dấu gạch nối
- **Phân biệt chữ hoa chữ thường** (case-sensitive)

**Ví dụ quy tắc đặt tên:**
```css
:root {
  /* Hợp lệ */
  --primary-color: blue;
  --font-size-large: 1.5rem;
  --spacing-2x: 2rem;
  --z-index-modal: 1000;
  
  /* Không hợp lệ */
  /* --@special: red; */
  /* --color&accent: green; */
}

/* Case-sensitive */
.example {
  --my-color: red;
  --My-Color: blue; /* Đây là biến khác */
  
  background: var(--my-color); /* Sẽ là màu đỏ */
}
```

#### Phạm vi (Scope)
Selector định nghĩa phạm vi mà custom property có thể được sử dụng.

**Ví dụ về scope:**
```css
.container {
  --main-bg-color: teal;
}

.container .child {
  background-color: var(--main-bg-color); /* Có thể sử dụng vì là con của .container */
}

.outside {
  background-color: var(--main-bg-color); /* Không hoạt động - nằm ngoài scope */
}
```

#### Khai báo toàn cục với `:root`
Cách phổ biến nhất là khai báo trên `:root` để tạo các thuộc tính **toàn cục**.

**Ví dụ toàn cục:**
```css
:root {
  --main-bg-color: teal;
  --text-color: #333;
  --border-width: 2px;
}

/* Có thể sử dụng ở bất cứ đâu */
.header { background-color: var(--main-bg-color); }
.footer { background-color: var(--main-bg-color); }
.sidebar { color: var(--text-color); }
.card { border: var(--border-width) solid var(--text-color); }
```

### 2. Sử dụng `@property` at-rule

> **`At-rule trong CSS là một loại quy tắc đặc biệt, bắt đầu bằng dấu @, dùng để điều khiển cách trình duyệt xử lý CSS, khác với các quy tắc thông thường kiểu selector { property: value; }.`**

> **Ví dụ phổ biến của CSS at-rules:**  
- @import	: Nhúng file CSS khác
- @media:	Áp dụng CSS theo điều kiện thiết bị (responsive)
- @keyfmedia:	Định nghĩa animation
- @fontmedia:	Tải font tùy chỉnh
- @supmedia:	Kiểm tra tính năng CSS có được trình duyệt hỗ trợ
- @media:	Quản lý độ ưu tiên lớp CSS
- @promedia:	Đăng ký biến CSS có kiểu rõ ràng (giúp animate biến được)



`@property` cho phép khai báo kiểu dữ liệu, giá trị khởi tạo và tính kế thừa.

**Cú pháp:**
```css
@property --tên-thuộc-tính {
  syntax: '<kiểu-dữ-liệu>';
  inherits: true | false;
  initial-value: giá-trị-khởi-tạo;
}
```

**Ví dụ cơ bản:**
```css
@property --rotation {
  syntax: '<angle>'; //kiểu dữ liệu là <angle>
  initial-value: 0deg; //giá trị ban đầu 
  inherits: false; //không được kế thừa 
}

.rotating-element {
  --rotation: 45deg;
  transform: rotate(var(--rotation));
}
```

**Ví dụ animation với @property:**
```css
@property --progress {
  syntax: '<percentage>';
  initial-value: 0%;
  inherits: false;
}

.progress-bar {
  --progress: 0%;
  width: var(--progress);
  background: linear-gradient(90deg, #4caf50 var(--progress), #ddd var(--progress));
  transition: --progress 0.3s ease;
}

.progress-bar.complete {
  --progress: 100%;
}
```

**Ví dụ với màu sắc:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>CSS @property Demo</title>
  <style>
    /* Đăng ký biến CSS tùy chỉnh --accent-color với kiểu dữ liệu <color> */
    /* Điều này cho phép biến được chuyển đổi (transition) mượt mà */
    @property --accent-color {
      syntax: '<color>';
      inherits: false;
      initial-value: blue;
    }

    /* Khai báo giá trị mặc định cho biến --accent-color */
    :root {
      --accent-color: blue;
    }

    /* Định dạng khối .box sử dụng biến --accent-color làm màu nền */
    /* Và cho phép transition mượt mà khi biến thay đổi */
    .box {
      width: 200px;
      height: 100px;
      background-color: var(--accent-color);
      transition: --accent-color 1s;
    }

    /* Khi hover vào .box, thay đổi giá trị của --accent-color */
    /* Nhờ @property, hiệu ứng chuyển màu diễn ra mượt mà */
    .box:hover {
      --accent-color: tomato;
    }
  </style>
</head>
<body>

  <div class="box"></div>

</body>
</html>

```

> **`CSS @property giống như cách ta định nghĩa 1 object, còn các thuộc tính CSS thông thường giống như dữ liệu nguyên thủy (string, number) trong JS  `**


## III. Sử dụng Custom Properties với `var()`

Bạn sử dụng custom properties bằng cách tham chiếu đến chúng trong hàm `var()`.

**Cú pháp:** `var(--tên-thuộc-tính)`

**Ví dụ cơ bản:**
```css
:root {
  --primary-color: #3498db;
  --font-family-main: 'Helvetica Neue', Arial, sans-serif;
  --border-radius: 8px;
}

.button {
  background-color: var(--primary-color);
  font-family: var(--font-family-main);
  border-radius: var(--border-radius);
}
```

> **`“Nếu một cái gì đó được đặt phía sau tên thuộc tính và dấu : thì trình duyệt sẽ coi nó là giá trị. Trừ khi bạn dùng hàm var() thì trình duyệt mới biết đó là một biến và cần lấy giá trị từ biến đó.”`**

Ví dụ này là hợp lệ:
```css
color: var(--text-color);
```
Ví dụ sau là không hợp lệ: Trình duyệt thấy --text-color không nằm trong var(), nên Coi đó là một giá trị trực tiếp. 
Nhưng --text-color không phải là giá trị hợp lệ cho color, nên Thuộc tính color bị bỏ qua:
```css
color: --text-color;
```


## IV. Giá trị dự phòng (Fallback Values)

Hàm `var()` cho phép định nghĩa các giá trị dự phòng khi custom property không được định nghĩa hoặc có giá trị không hợp lệ.

**Cú pháp:** `var(--tên-thuộc-tính, giá-trị-dự-phòng)`

**Ví dụ fallback đơn giản:**
```css
.element {
  /* Nếu --primary-color không tồn tại, dùng #007bff */
  color: var(--primary-color, #007bff);
  
  /* Nếu --font-size không tồn tại, dùng 16px */
  font-size: var(--font-size, 16px);
}
```

**Ví dụ fallback phức tạp:**
```css
.text {
  /* Fallback có nhiều giá trị */
  font-family: var(--custom-font, 'Helvetica Neue', Arial, sans-serif);
}
```

**Ví dụ chuỗi fallback lồng nhau:**
```css
.component {
  /* Thử --primary-color, nếu không có thử --brand-color, cuối cùng dùng blue */
  background: var(--primary-color, var(--brand-color, blue));
  
  /* Fallback với tính toán */
  padding: var(--spacing, var(--default-spacing, 1rem));
  margin: calc(var(--spacing, 1rem) * 2);
}
```

**Ví dụ với @property và initial-value:**
```css
@property --box-color {
  syntax: "<color>";
  initial-value: teal; /* Giá trị dự phòng */
  inherits: false;
}

.box {
  --box-color: invalidcolor; /* Giá trị không hợp lệ */
  background-color: var(--box-color); /* Sẽ dùng teal từ initial-value */
}
```
>  **`Để dễ nhớ cứ hiểu fallback values giống như giá trị mặc định khi khai báo tham số cho 1 hàm: var(--biến, fallback) trong CSS giống như function(x = fallback)`**


## V. Kế thừa (Inheritance) và Cascade

Custom properties tuân theo cơ chế thác nước và kế thừa giá trị từ phần tử cha.

**Ví dụ kế thừa tự nhiên:**
```css
body {
  --text-color: black;
  --background: white;
}

.dark-section {
  --text-color: white;
  --background: #2c3e50;
}

/* kế thừa từ body */
.content {
  color: var(--text-color);
  background: var(--background);
}
```

```html
<body>
  <div class="content">Text đen trên nền trắng</div>
  
  <section class="dark-section">
    <div class="content">Text trắng trên nền tối</div>
  </section>
</body>
```

**Ví dụ ghi đè trong phạm vi cục bộ:**
```css
:root {
  --accent-color: #007bff;
}

.warning-section {
  --accent-color: #ffc107; /* Ghi đè trong section này */
}

.error-section {
  --accent-color: #dc3545; /* Ghi đè khác */
}

.button {
  background-color: var(--accent-color); /* Sẽ khác nhau tùy context */
}
```

## VI. Các trường hợp sử dụng nâng cao

### 1. Phân tách giá trị (Breaking up values)

#### Màu sắc HSL
```css
:root {
  --hue: 200;
  --saturation: 50%;
  --lightness: 50%;
}

.primary {
  background: hsl(var(--hue) var(--saturation) var(--lightness));
}

.primary-light {
  --lightness: 70%; /* Chỉ thay đổi độ sáng */
  background: hsl(var(--hue) var(--saturation) var(--lightness));
}

.primary-dark {
  --lightness: 30%;
  background: hsl(var(--hue) var(--saturation) var(--lightness));
}
```

#### Màu sắc RGBA
```css
.alert {
  --r: 220;
  --g: 53;
  --b: 69;
  --alpha: 1;
  
  background: rgb(var(--r) var(--g) var(--b) / var(--alpha));
  border: 2px solid rgb(var(--r) var(--g) var(--b));
}

.alert-subtle {
  --alpha: 0.1; /* Chỉ thay đổi độ trong suốt */
}
```

#### Đổ bóng (Shadows)
```css
.card {
  --shadow-x: 0;
  --shadow-y: 4px;
  --shadow-blur: 12px;
  --shadow-spread: 0;
  --shadow-color: rgba(0, 0, 0, 0.15);
  
  box-shadow: var(--shadow-x) var(--shadow-y) var(--shadow-blur) 
              var(--shadow-spread) var(--shadow-color);
}

.card:hover {
  --shadow-y: 8px;
  --shadow-blur: 24px;
}
```

#### Chuyển màu (Gradients)
```css
.hero {
  --gradient-angle: 45deg;
  --color-start: #667eea;
  --color-end: #764ba2;
  
  background: linear-gradient(var(--gradient-angle), 
                             var(--color-start), 
                             var(--color-end));
}

.hero-vertical {
  --gradient-angle: 180deg;
}
```

#### Hệ thống lưới (Grid System)
```css
.grid {
  --columns: 3;
  --gap: 1rem;
  --min-column-width: 250px;
  
  display: grid;
  grid-template-columns: repeat(var(--columns), 1fr);
  gap: var(--gap);
}

@media (max-width: 768px) {
  .grid {
    --columns: 1;
  }
}

/* Grid tự động điều chỉnh */
.auto-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(var(--min-column-width), 1fr));
  gap: var(--gap);
}
```

#### Biến đổi (Transforms)
```css
.interactive-element {
  --scale: 1;
  --rotation: 0deg;
  --translate-x: 0;
  --translate-y: 0;
  
  transform: scale(var(--scale)) 
             rotate(var(--rotation)) 
             translate(var(--translate-x), var(--translate-y));
  transition: transform 0.3s ease;
}

.interactive-element:hover {
  --scale: 1.05;
  --rotation: 5deg;
}

.interactive-element:active {
  --scale: 0.95;
  --translate-y: 2px;
}
```

### 2. Kết hợp với `calc()`

**Ví dụ tính toán spacing:**
```css
:root {
  --base-spacing: 1rem;
}

.component {
  padding: var(--base-spacing);
  margin: calc(var(--base-spacing) * 2);
  gap: calc(var(--base-spacing) / 2);
}
```

**Ví dụ responsive typography:**
```css
:root {
  --base-font-size: 16px;
  --scale-factor: 1.25;
}

.h1 { font-size: calc(var(--base-font-size) * var(--scale-factor) * var(--scale-factor) * var(--scale-factor)); }
.h2 { font-size: calc(var(--base-font-size) * var(--scale-factor) * var(--scale-factor)); }
.h3 { font-size: calc(var(--base-font-size) * var(--scale-factor)); }
.body { font-size: var(--base-font-size); }
```

**Ví dụ tính toán màu bổ sung:**
```css
:root {
  --brand-hue: 200deg;
}

.primary {
  background: hsl(var(--brand-hue), 70%, 50%);
}

.complementary {
  background: hsl(calc(var(--brand-hue) + 180deg), 70%, 50%);
}

.analogous-1 {
  background: hsl(calc(var(--brand-hue) + 30deg), 70%, 50%);
}

.analogous-2 {
  background: hsl(calc(var(--brand-hue) - 30deg), 70%, 50%);
}
```

### 3. Inline styles và JavaScript

**Ví dụ inline styles:**
```html
<!-- Biến --card-color trong ví dụ được định nghĩa trực tiếp trong thuộc tính style của thẻ HTML, tức là nó là inline custom property. -->
<div class="card" style="--card-color: #e74c3c; --card-size: 1.2;">
  Dynamic styled card
</div>

<div class="progress-bar" style="--progress: 75%;">
  Progress: 75%
</div>
```

```css
/* Trình duyệt sẽ:
Tìm biến --card-color trong phạm vi gần nhất (ở đây là inline style của chính phần tử).
Nếu có → dùng giá trị đó (#e74c3c).
Nếu không có → dùng fallback #3498db */
.card {
  background: var(--card-color, #3498db);
  transform: scale(var(--card-size, 1));
}

.progress-bar::before {
  content: '';
  width: var(--progress, 0%);
  background: #4caf50;
}
```

**Ví dụ với JavaScript:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Custom Properties with JavaScript</title>
  <style>
    /* Biến màu sắc chính và phụ được định nghĩa ở :root */
    :root {
      --primary-color: #3498db;
      --secondary-color: #2ecc71;
      --progress: 0%;
    }

    /* Nút có màu nền lấy từ biến --primary-color */
    .button {
      padding: 10px 20px;
      color: white;
      background-color: var(--primary-color);
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }

    /* Thanh tiến trình có chiều rộng lấy từ biến --progress */
    .progress-bar {
      width: 100%;
      background: #eee;
      height: 20px;
      margin-top: 20px;
      border-radius: 10px;
      overflow: hidden;
    }

    /* Phần bên trong thanh tiến trình */
    .progress-bar::before {
      content: '';
      display: block;
      height: 100%;
      width: var(--progress);
      background-color: var(--secondary-color);
      transition: width 0.3s ease;
    }
  </style>
</head>
<body>

  <button class="button" onclick="updateTheme('#e74c3c', '#f1c40f')">
    Thay đổi theme
  </button>

  <div class="progress-bar" id="myProgress"></div>

  <script>
    // Cập nhật theme động: thay đổi biến toàn cục
    function updateTheme(primaryColor, secondaryColor) {
      document.documentElement.style.setProperty('--primary-color', primaryColor);
      document.documentElement.style.setProperty('--secondary-color', secondaryColor);
    }

    // Animation tiến trình: tăng dần biến --progress cho phần tử
    function animateProgress(element, targetProgress) {
      let currentProgress = 0;
      const animation = setInterval(() => {
        currentProgress += 2;
        element.style.setProperty('--progress', `${currentProgress}%`);
        
        if (currentProgress >= targetProgress) {
          clearInterval(animation);
        }
      }, 50);
    }

    // Gọi animation khi tải trang
    const progressBar = document.getElementById('myProgress');
    animateProgress(progressBar, 80);

    // Đọc giá trị biến custom từ :root
    const currentTheme = getComputedStyle(document.documentElement)
      .getPropertyValue('--primary-color').trim();
    console.log('Current primary color:', currentTheme);
  </script>
</body>
</html>

```

### 4. Hovers và Pseudo-classes

**Ví dụ hover effects:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Hover with Custom Properties</title>
  <style>
    /* Thiết lập mặc định cho button: dùng biến --base-color và --base-scale */
    button {
      background: var(--base-color, #3498db); /* Nếu --base-color không được định nghĩa, dùng màu xanh dương */
      color: white;
      border: none;
      padding: 10px 20px;
      font-size: 16px;
      border-radius: 6px;
      cursor: pointer;
      transform: scale(var(--base-scale, 1)); /* Nếu không có --base-scale, dùng scale mặc định là 1 */
      transition: all 0.3s ease; /* Tạo hiệu ứng mượt khi hover hoặc active */
    }

    /* Hiệu ứng khi hover: dùng biến --hover-color và --hover-scale nếu có */
    button:hover {
      background: var(--hover-color, #2980b9); /* Nếu không có --hover-color, dùng màu xanh đậm */
      transform: scale(var(--hover-scale, 1.05)); /* Nếu không có --hover-scale, dùng 1.05 */
    }

    /* Hiệu ứng khi nhấn chuột (active): nhỏ lại bằng --active-scale nếu có */
    button:active {
      transform: scale(var(--active-scale, 0.95)); /* Nếu không có --active-scale, mặc định là 0.95 */
    }
  </style>
</head>
<body>

  <!-- 
    Button có custom properties được khai báo inline:
    - Khi hover: đổi sang màu đỏ (#e74c3c) và phóng to lên 1.1 lần.
    - Không khai báo --active-scale nên mặc định là 0.95 khi nhấn.
  -->
  <button style="--hover-color: #e74c3c; --hover-scale: 1.1;">
    Hover me
  </button>

</body>
</html>

```

**Ví dụ với focus states:**
```css
.input {
  --focus-color: #007bff;
  --focus-width: 2px;
  
  border: 1px solid #ddd;
  transition: all 0.2s ease;
}

.input:focus {
  outline: none;
  border-color: var(--focus-color);
  box-shadow: 0 0 0 var(--focus-width) rgba(0, 123, 255, 0.25);
}
```

### 5. Tính năng `@supports`

**`@supports rule trong CSS – một công cụ mạnh để kiểm tra tính năng trình duyệt có hỗ trợ hay không, từ đó viết mã có khả năng "progressive enhancement", tức là: 
Tăng cường trải nghiệm cho trình duyệt hiện đại, trong khi vẫn giữ tính tương thích với trình duyệt cũ.`**


**Ví dụ progressive enhancement:**
```css
.component {
  /* Fallback cho trình duyệt cũ */
  /* Dòng này đảm bảo rằng ngay cả khi trình duyệt không hiểu biến CSS (custom properties) thì phần .component vẫn có nền xanh và chữ trắng. */
  background: #3498db;
  color: white;
}


/* Phần này chỉ chạy nếu trình duyệt hỗ trợ custom properties (CSS Variables). */
/* Nó giống như if trong lập trình: “Nếu trình duyệt hỗ trợ --custom: property thì...” */
@supports (--custom: property) {
  .component {
    --bg-color: #3498db;
    --text-color: white;
    
    background: var(--bg-color);
    color: var(--text-color);
  }
  
  .component.dark {
    --bg-color: #2c3e50;
    --text-color: #ecf0f1;
  }
}
```

## VII. Custom Properties vs Biến Preprocessor 
> **(Các bài tiếp theo sẽ học đến các Preprocessor)**

### So sánh tính năng

| Tính năng | CSS Custom Properties | Sass/Less Variables |
|-----------|----------------------|-------------------|
| Cascade | ✅ Tích hợp cascade | ❌ Không |
| Động | ✅ Thay đổi runtime | ❌ Chỉ compile-time |
| JavaScript | ✅ Có thể đọc/ghi | ❌ Không |
| Media Queries | ❌ Không thể dùng trực tiếp | ✅ Có thể |
| Inline Styles | ✅ Có thể | ❌ Không |

**Ví dụ so sánh:**

Sass Variables:
```scss
$primary-color: #3498db;
$mobile-breakpoint: 768px;

.button {
  background: $primary-color;
}

@media (max-width: $mobile-breakpoint) {
  .button { padding: 0.5rem; }
}
```

CSS Custom Properties:
```css
:root {
  --primary-color: #3498db;
  /* Không thể dùng trực tiếp trong media query */
}

.button {
  background: var(--primary-color);
}

/* Cần hardcode breakpoint */
@media (max-width: 768px) {
  .button { 
    --button-padding: 0.5rem;
    padding: var(--button-padding); 
  }
}
```

**Kết hợp cả hai:**
```scss
// Sass cho cấu hình tĩnh
$breakpoints: (
  mobile: 768px,
  tablet: 1024px,
  desktop: 1200px
);

:root {
  // CSS Variables cho giá trị động
  --primary-color: #3498db;
  --text-color: #2c3e50;
}

@media (max-width: map-get($breakpoints, mobile)) {
  :root {
    --primary-color: #e74c3c; // Thay đổi màu trên mobile
  }
}
```

## VIII. Web Components và Shadow DOM

Custom properties là cách tốt nhất để style Web Components vì chúng có thể "xuyên qua" Shadow DOM boundary.
Việc sử dụng CSS Custom Properties để style Web Components – đặc biệt là khi Web Component dùng Shadow DOM. Đây là khái niệm nâng cao nhưng rất quan trọng nếu bạn làm việc với các thành phần UI tái sử dụng (giống như component trong React, Vue, v.v.).

Shadow DOM tạo ra một rào chắn (boundary) giữa bên ngoài và bên trong của component.

```html
<custom-button>
  <!-- Giao diện nội dung này sẽ bị tách biệt với phần bên trong -->
</custom-button>
```

Thông thường: Bạn không thể style trực tiếp các phần tử bên trong shadow DOM từ bên ngoài. Tức là: button bên trong `<custom-button>` không thể bị style bằng CSS thông thường từ file ngoài.

**Giải pháp**: Dùng Custom Properties (CSS variables). Custom Properties xuyên được Shadow DOM nếu component tham chiếu đến chúng bằng `var()`.


**Ví dụ Web Component:**
```javascript
class CustomButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    
    this.shadowRoot.innerHTML = `
      <style>
        button {
          background: var(--button-bg, #007bff);
          color: var(--button-color, white);
          border: var(--button-border, none);
          padding: var(--button-padding, 0.5rem 1rem);
          border-radius: var(--button-radius, 4px);
        }
      </style>
      <button><slot></slot></button>
    `;
  }
}

customElements.define('custom-button', CustomButton);
```

```html
<!-- Sử dụng với custom properties -->
<custom-button style="--button-bg: #28a745; --button-radius: 20px;">
  Success Button
</custom-button>
```

## IX. Thực tiễn tốt và Lời khuyên

### 1. Quy ước đặt tên

**Biến toàn cục:**
```css
:root {
  /* Colors */
  --color-primary: #007bff;
  --color-secondary: #6c757d;
  --color-success: #28a745;
  --color-danger: #dc3545;
  
  /* Typography */
  --font-family-primary: 'Helvetica Neue', Arial, sans-serif;
  --font-size-base: 1rem;
  --font-weight-normal: 400;
  --font-weight-bold: 700;
  
  /* Spacing */
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 3rem;
  
  /* Breakpoints (chỉ để tham khảo) */
  --breakpoint-sm: 576px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 992px;
  --breakpoint-xl: 1200px;
}
```

### 2. Biến cục bộ với tiền tố gạch dưới

**Ví dụ "pseudo private" properties:**
```css
.card {
  /* Public API - có thể override từ bên ngoài */
  --card-padding: var(--spacing-md);
  --card-background: var(--color-white);
  --card-border-color: var(--color-border);
  
  /* Private properties - chỉ dùng nội bộ */
  --_shadow-color: rgba(0, 0, 0, 0.1);
  --_border-width: 1px;
  --_border-radius: 8px;
  
  padding: var(--card-padding);
  background: var(--card-background);
  border: var(--_border-width) solid var(--card-border-color);
  border-radius: var(--_border-radius);
  box-shadow: 0 2px 4px var(--_shadow-color);
}

/* Override public properties */
.card.large {
  --card-padding: var(--spacing-lg);
}
```

### 3. Hệ thống Design Tokens

**Ví dụ design system:**
```css
:root {
  /* Base tokens */
  --color-blue-100: #e3f2fd;
  --color-blue-500: #2196f3;
  --color-blue-900: #0d47a1;
  
  --spacing-1: 0.25rem;
  --spacing-2: 0.5rem;
  --spacing-4: 1rem;
  --spacing-8: 2rem;
  
  /* Semantic tokens */
  --color-primary: var(--color-blue-500);
  --color-primary-light: var(--color-blue-100);
  --color-primary-dark: var(--color-blue-900);
  
  --spacing-component-padding: var(--spacing-4);
  --spacing-component-margin: var(--spacing-8);
}

/* Component specific tokens */
.button {
  --button-color: var(--color-primary);
  --button-padding: var(--spacing-2) var(--spacing-4);
}
```

### 4. Responsive Design với Custom Properties

**Ví dụ responsive:**
```css
:root {
  --container-width: 1200px;
  --font-size-h1: 2.5rem;
  --spacing-section: 4rem;
}

@media (max-width: 768px) {
  :root {
    --container-width: 100%;
    --font-size-h1: 2rem;
    --spacing-section: 2rem;
  }
}

.container {
  max-width: var(--container-width);
  padding: 0 var(--spacing-md);
}

.hero h1 {
  font-size: var(--font-size-h1);
}

.section {
  padding: var(--spacing-section) 0;
}
```

### 5. Animation và Transitions

**Ví dụ animated properties:**
```css
@property --progress {
  syntax: '<percentage>';
  initial-value: 0%;
  inherits: false;
}

.progress-bar {
  --progress: 0%;
  --duration: 1s;
  
  background: linear-gradient(
    90deg,
    #4caf50 var(--progress),
    #e0e0e0 var(--progress)
  );
  transition: --progress var(--duration) ease-out;
}

.progress-bar.complete {
  --progress: 100%;
}
```

**Ví dụ complex animations:**
```css
@property --rotation {
  syntax: '<angle>';
  initial-value: 0deg;
  inherits: false;
}

@property --scale {
  syntax: '<number>';
  initial-value: 1;
  inherits: false;
}

.animated-icon {
  --rotation: 0deg;
  --scale: 1;
  --duration: 0.3s;
  
  transform: rotate(var(--rotation)) scale(var(--scale));
  transition: --rotation var(--duration) ease, --scale var(--duration) ease;
}

.animated-icon:hover {
  --rotation: 15deg;
  --scale: 1.1;
}

.animated-icon:active {
  --scale: 0.9;
}
```

### 6. Error Handling và Debugging

**Ví dụ defensive coding:**
```css
.component {
  /* Luôn có fallback cho các giá trị quan trọng */
  background: var(--component-bg, #ffffff);
  color: var(--component-text, #333333);
  
  /* Validate numeric values */
  padding: max(var(--component-padding, 1rem), 0);
  font-size: clamp(0.8rem, var(--component-font-size, 1rem), 3rem);
}

/* Debug mode */
[data-debug="true"] {
  --debug-border: 2px solid red;
}

[data-debug="true"] * {
  border: var(--debug-border, none) !important;
}
```

**Ví dụ validation với @property:**
```css
@property --valid-percentage {
  syntax: '<percentage>';
  initial-value: 0%;
  inherits: false;
}

.element {
  /* Nếu gán giá trị không hợp lệ, sẽ fallback về 0% */
  width: var(--valid-percentage);
}

/* Invalid assignment - sẽ dùng initial-value */
.element.invalid {
  --valid-percentage: not-a-percentage; /* Sẽ bị ignore */
}
```

## X. Công cụ và DevTools

### Browser DevTools
Các trình duyệt hiện đại hỗ trợ tốt cho custom properties:

- **Chrome/Edge**: Click vào `var()` để jump đến definition
- **Firefox**: Hover để xem computed value
- **Safari**: Hỗ trợ editing custom properties trực tiếp

**Ví dụ debug setup:**
```css
/* Thêm data attributes để dễ debug */
:root {
  --debug-mode: false;
}

[data-debug] {
  --debug-mode: true;
}

.component {
  outline: var(--debug-mode, transparent) solid 1px red;
}
```

### CSS Validation
```css
/* Sử dụng CSS.supports trong JavaScript */
if (CSS.supports('--custom', 'property')) {
  // Browser hỗ trợ custom properties
  document.documentElement.style.setProperty('--theme', 'modern');
} else {
  // Fallback cho browser cũ
  document.body.className += ' legacy-theme';
}
```

## XI. Ví dụ thực tế: Hệ thống Theme hoàn chỉnh

> **`Hãy nghiên cứu để hiểu toàn bộ nội dung của ví dụ này, sau đó thực hành tự code lại từ đầu `**

### HTML Structure
```html
<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Theme System Demo</title>
  <link rel="stylesheet" href="theme-system.css">
</head>
<body data-theme="light">
  <header class="header">
    <h1>Theme System Demo</h1>
    <div class="theme-switcher">
      <button data-theme-btn="light">Light</button>
      <button data-theme-btn="dark">Dark</button>
      <button data-theme-btn="blue">Blue</button>
    </div>
  </header>
  
  <main class="main">
    <section class="card">
      <h2>Card Component</h2>
      <p>This card adapts to the current theme.</p>
      <button class="btn btn-primary">Primary Button</button>
      <button class="btn btn-secondary">Secondary Button</button>
    </section>
    
    <section class="card">
      <h2>Form Example</h2>
      <form>
        <input type="text" placeholder="Enter text..." class="input">
        <textarea placeholder="Enter message..." class="textarea"></textarea>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </section>
  </main>
</body>
</html>
```

### CSS Theme System
```css
/* Base Design Tokens */
:root {
  /* Color Palette */
  --gray-50: #f9fafb;
  --gray-100: #f3f4f6;
  --gray-200: #e5e7eb;
  --gray-300: #d1d5db;
  --gray-400: #9ca3af;
  --gray-500: #6b7280;
  --gray-600: #4b5563;
  --gray-700: #374151;
  --gray-800: #1f2937;
  --gray-900: #111827;
  
  --blue-50: #eff6ff;
  --blue-100: #dbeafe;
  --blue-500: #3b82f6;
  --blue-600: #2563eb;
  --blue-700: #1d4ed8;
  
  /* Spacing Scale */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  
  /* Typography */
  --font-family-base: system-ui, -apple-system, sans-serif;
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.25rem;
  --font-size-2xl: 1.5rem;
  
  /* Border Radius */
  --radius-sm: 0.25rem;
  --radius-md: 0.375rem;
  --radius-lg: 0.5rem;
  
  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
}

/* Light Theme (Default) */
:root,
[data-theme="light"] {
  --bg-primary: var(--gray-50);
  --bg-secondary: #ffffff;
  --bg-tertiary: var(--gray-100);
  
  --text-primary: var(--gray-900);
  --text-secondary: var(--gray-600);
  --text-tertiary: var(--gray-400);
  
  --border-primary: var(--gray-200);
  --border-secondary: var(--gray-300);
  
  --accent-primary: var(--blue-600);
  --accent-primary-hover: var(--blue-700);
  --accent-secondary: var(--gray-500);
  --accent-secondary-hover: var(--gray-600);
  
  --shadow-color: rgb(0 0 0 / 0.1);
}

/* Dark Theme */
[data-theme="dark"] {
  --bg-primary: var(--gray-900);
  --bg-secondary: var(--gray-800);
  --bg-tertiary: var(--gray-700);
  
  --text-primary: var(--gray-50);
  --text-secondary: var(--gray-300);
  --text-tertiary: var(--gray-500);
  
  --border-primary: var(--gray-700);
  --border-secondary: var(--gray-600);
  
  --accent-primary: var(--blue-500);
  --accent-primary-hover: var(--blue-600);
  --accent-secondary: var(--gray-400);
  --accent-secondary-hover: var(--gray-300);
  
  --shadow-color: rgb(0 0 0 / 0.3);
}

/* Blue Theme */
[data-theme="blue"] {
  --bg-primary: var(--blue-50);
  --bg-secondary: #ffffff;
  --bg-tertiary: var(--blue-100);
  
  --text-primary: var(--blue-700);
  --text-secondary: var(--blue-600);
  --text-tertiary: var(--blue-500);
  
  --border-primary: var(--blue-200);
  --border-secondary: var(--blue-300);
  
  --accent-primary: var(--blue-600);
  --accent-primary-hover: var(--blue-700);
  --accent-secondary: var(--blue-500);
  --accent-secondary-hover: var(--blue-600);
  
  --shadow-color: rgb(59 130 246 / 0.15);
}

/* Base Styles */
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: var(--font-family-base);
  background-color: var(--bg-primary);
  color: var(--text-primary);
  transition: background-color 0.3s ease, color 0.3s ease;
}

/* Layout Components */
.header {
  background: var(--bg-secondary);
  border-bottom: 1px solid var(--border-primary);
  padding: var(--space-4) var(--space-6);
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: var(--shadow-sm);
}

.header h1 {
  margin: 0;
  font-size: var(--font-size-2xl);
  color: var(--text-primary);
}

.theme-switcher {
  display: flex;
  gap: var(--space-2);
}

.theme-switcher button {
  padding: var(--space-2) var(--space-3);
  border: 1px solid var(--border-secondary);
  background: var(--bg-tertiary);
  color: var(--text-secondary);
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all 0.2s ease;
}

.theme-switcher button:hover {
  background: var(--accent-secondary);
  color: var(--bg-secondary);
}

.main {
  padding: var(--space-8) var(--space-6);
  max-width: 800px;
  margin: 0 auto;
}

/* Card Component */
.card {
  background: var(--bg-secondary);
  border: 1px solid var(--border-primary);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  margin-bottom: var(--space-6);
  box-shadow: 0 4px 6px -1px var(--shadow-color);
  transition: all 0.3s ease;
}

.card:hover {
  box-shadow: 0 10px 15px -3px var(--shadow-color);
  transform: translateY(-2px);
}

.card h2 {
  margin: 0 0 var(--space-4) 0;
  font-size: var(--font-size-xl);
  color: var(--text-primary);
}

.card p {
  margin: 0 0 var(--space-6) 0;
  color: var(--text-secondary);
  line-height: 1.6;
}

/* Button Components */
.btn {
  display: inline-flex;
  align-items: center;
  padding: var(--space-3) var(--space-4);
  border: none;
  border-radius: var(--radius-md);
  font-size: var(--font-size-base);
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;
  margin-right: var(--space-2);
  margin-bottom: var(--space-2);
}

.btn-primary {
  background: var(--accent-primary);
  color: white;
}

.btn-primary:hover {
  background: var(--accent-primary-hover);
  transform: translateY(-1px);
  box-shadow: 0 4px 8px var(--shadow-color);
}

.btn-secondary {
  background: var(--bg-tertiary);
  color: var(--text-primary);
  border: 1px solid var(--border-secondary);
}

.btn-secondary:hover {
  background: var(--accent-secondary);
  color: var(--bg-secondary);
}

/* Form Components */
.input,
.textarea {
  width: 100%;
  padding: var(--space-3);
  border: 1px solid var(--border-secondary);
  border-radius: var(--radius-md);
  background: var(--bg-primary);
  color: var(--text-primary);
  font-size: var(--font-size-base);
  margin-bottom: var(--space-4);
  transition: all 0.2s ease;
}

.input:focus,
.textarea:focus {
  outline: none;
  border-color: var(--accent-primary);
  box-shadow: 0 0 0 3px rgb(59 130 246 / 0.1);
}

.textarea {
  min-height: 100px;
  resize: vertical;
}

/* Responsive Design */
@media (max-width: 768px) {
  .header {
    flex-direction: column;
    gap: var(--space-4);
    text-align: center;
  }
  
  .theme-switcher {
    justify-content: center;
  }
  
  .main {
    padding: var(--space-4);
  }
  
  .card {
    padding: var(--space-4);
  }
}
```

### JavaScript Theme Switcher
```javascript
// Theme switcher functionality
class ThemeManager {
  constructor() {
    this.currentTheme = localStorage.getItem('theme') || 'light';
    this.init();
  }
  
  init() {
    // Set initial theme
    this.setTheme(this.currentTheme);
    
    // Add event listeners
    document.querySelectorAll('[data-theme-btn]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const theme = e.target.dataset.themeBtn;
        this.setTheme(theme);
      });
    });
    
    // System theme detection
    if (window.matchMedia) {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (this.currentTheme === 'auto') {
          this.applyTheme(e.matches ? 'dark' : 'light');
        }
      });
    }
  }
  
  setTheme(theme) {
    this.currentTheme = theme;
    localStorage.setItem('theme', theme);
    this.applyTheme(theme);
    this.updateActiveButton(theme);
  }
  
  applyTheme(theme) {
    document.body.setAttribute('data-theme', theme);
    
    // Animate theme transition
    document.body.style.setProperty('--transition-duration', '0.3s');
    setTimeout(() => {
      document.body.style.removeProperty('--transition-duration');
    }, 300);
  }
  
  updateActiveButton(theme) {
    document.querySelectorAll('[data-theme-btn]').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.themeBtn === theme);
    });
  }
}

// Initialize theme manager when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new ThemeManager();
});

// Custom property utilities
const CSSCustomProperties = {
  // Get custom property value
  get(property, element = document.documentElement) {
    return getComputedStyle(element).getPropertyValue(property).trim();
  },
  
  // Set custom property value
  set(property, value, element = document.documentElement) {
    element.style.setProperty(property, value);
  },
  
  // Remove custom property
  remove(property, element = document.documentElement) {
    element.style.removeProperty(property);
  },
  
  // Animate custom property
  animate(property, fromValue, toValue, duration = 1000, element = document.documentElement) {
    const startTime = performance.now();
    
    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Simple easing function
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      
      // Interpolate between values (assuming numeric values)
      const from = parseFloat(fromValue);
      const to = parseFloat(toValue);
      const current = from + (to - from) * easeOutCubic;
      
      this.set(property, current + (toValue.match(/[a-z%]+$/i)?.[0] || ''), element);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }
};

// Example usage
// CSSCustomProperties.set('--primary-color', '#ff6b6b');
// CSSCustomProperties.animate('--progress', '0%', '100%', 2000);
```

## XII. Kết luận

CSS Custom Properties là một công cụ mạnh mẽ và linh hoạt cho phép tạo ra các hệ thống design có thể bảo trì và mở rộng dễ dàng. Chúng cung cấp:

### Lợi ích chính:
1. **Khả năng tái sử dụng**: Định nghĩa một lần, sử dụng nhiều nơi
2. **Theming động**: Dễ dày tạo và chuyển đổi theme
3. **Tích hợp cascade**: Hoạt động tự nhiên với CSS cascade
4. **JavaScript integration**: Có thể đọc và ghi từ JavaScript
5. **Performance**: Tối ưu hóa việc update UI
6. **Maintainability**: Code dễ bảo trì và debug

### Khi nào nên sử dụng:
- ✅ Tạo design system và theme
- ✅ Component-based architecture  
- ✅ Responsive design
- ✅ Animation và transitions
- ✅ Dynamic styling với JavaScript
- ✅ Web Components

### Hạn chế cần lưu ý:
- ❌ Không dùng được trong media queries
- ❌ Không dùng được làm property names hoặc selectors
- ❌ Browser support (IE không hỗ trợ)
- ❌ Performance impact nếu lạm dụng

CSS Custom Properties đại diện cho tương lai của CSS, mang lại sức mạnh của dynamic styling mà vẫn giữ được tính đơn giản và declarative của CSS truyền thống. Chúng là nền tảng cho các modern design system và component libraries hiện đại.
    
## Tài liệu phải đọc khi ĐÓNG CỌC LẦN 2   
1. https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-custom-properties
2. https://www.youtube.com/watch?v=PHO6TBq_auI
3. https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties#inheritance_of_custom_properties
4. https://css-tricks.com/a-complete-guide-to-custom-properties/
5. https://www.youtube.com/watch?v=_2LwjfYc1x8

> ⭐ **Theo dõi [kênh Threads](https://www.threads.com/@kaitaku.88) để đọc bài mới mỗi ngày!** ⭐  

**[<== Bài Trước  ](link)          |[  Trang Chủ  ](./README.md)|           [  Bài Sau ==>](link)**

