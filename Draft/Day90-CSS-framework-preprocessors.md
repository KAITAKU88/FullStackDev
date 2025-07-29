# Hướng Dẫn Toàn Diện về CSS Preprocessors

## **Bộ tiền xử lý CSS (CSS Preprocessors) là gì?**

CSS (Cascading Style Sheets) tự thân thiếu các logic và chức năng phức tạp cần thiết để viết mã có thể tái sử dụng và tổ chức tốt. Điều này gây khó khăn cho nhà phát triển trong việc bảo trì và mở rộng mã, đặc biệt khi làm việc trên các dự án lớn với nhiều tệp CSS. Đây chính là lúc **Bộ tiền xử lý CSS (CSS Preprocessor)** xuất hiện để giải quyết vấn đề.

Một bộ tiền xử lý CSS là một công cụ được sử dụng để mở rộng chức năng cơ bản của CSS thuần (vanilla CSS) thông qua ngôn ngữ kịch bản riêng của nó. Chúng giúp bạn viết CSS dễ dàng hơn và giảm sự lặp lại mã. Bộ tiền xử lý cung cấp các tính năng bổ sung như biến (variables), hàm (functions), mixins, lồng mã (code nesting), và kế thừa (inheritance), giúp tăng cường sức mạnh cho CSS thuần của bạn.

### **Ví dụ minh họa vấn đề CSS thuần:**

```css
/* CSS thuần - Lặp lại màu sắc */
.header { background-color: #3498db; }
.button { background-color: #3498db; }
.link { color: #3498db; }

/* Nếu muốn thay đổi màu, phải sửa ở nhiều nơi */
.sidebar { border-color: #3498db; }
.footer { background-color: #3498db; }
```

```scss
/* Với Sass - Sử dụng biến */
$primary-color: #3498db;

.header { background-color: $primary-color; }
.button { background-color: $primary-color; }
.link { color: $primary-color; }
.sidebar { border-color: $primary-color; }
.footer { background-color: $primary-color; }

/* Chỉ cần thay đổi 1 nơi khi muốn đổi màu */
```

Tuy nhiên, trình duyệt chỉ hiểu mã CSS thuần. Do đó, cú pháp phức tạp và nâng cao của bộ tiền xử lý cần được **biên dịch (compiled)** thành cú pháp CSS gốc trước khi trình duyệt có thể hiểu và hiển thị để tránh các vấn đề tương thích trình duyệt (cross-browser compatibility issues).

## **Các lợi ích chính của Bộ tiền xử lý CSS**

### **1. Tăng cường chức năng**
Mở rộng khả năng của CSS thuần với các tính năng như biến, mixins, hàm, lồng mã và kế thừa.

**Ví dụ về Nesting (Lồng mã):**
```scss
// SCSS
.navbar {
  background: #333;
  
  ul {
    margin: 0;
    padding: 0;
    
    li {
      list-style: none;
      
      a {
        text-decoration: none;
        color: white;
        
        &:hover {
          color: #ccc;
        }
      }
    }
  }
}
```

```css
/* CSS được biên dịch */
.navbar {
  background: #333;
}

.navbar ul {
  margin: 0;
  padding: 0;
}

.navbar ul li {
  list-style: none;
}

.navbar ul li a {
  text-decoration: none;
  color: white;
}

.navbar ul li a:hover {
  color: #ccc;
}
```

### **2. Tự động hóa tác vụ**
Giúp tự động hóa các công việc thủ công như tính toán, tạo vendor prefixes.

**Ví dụ về Mixins:**
```scss
// Định nghĩa mixin
@mixin border-radius($radius) {
  -webkit-border-radius: $radius;
     -moz-border-radius: $radius;
      -ms-border-radius: $radius;
          border-radius: $radius;
}

// Sử dụng mixin
.button {
  @include border-radius(5px);
}

.card {
  @include border-radius(10px);
}
```

### **3. Tái sử dụng mã**
Cho phép xây dựng các đoạn mã có thể tái sử dụng, giảm sự lặp lại.

**Ví dụ về Functions:**
```scss
// Định nghĩa function
@function calculate-rem($size) {
  $rem-size: $size / 16px;
  @return #{$rem-size}rem;
}

// Sử dụng function
.title {
  font-size: calculate-rem(24px); // 1.5rem
}

.subtitle {
  font-size: calculate-rem(18px); // 1.125rem
}
```

### **4. Tổ chức tốt hơn**
Giúp viết các khối mã lồng nhau được tổ chức tốt và dễ đọc, cải thiện khả năng bảo trì.

**Ví dụ về cấu trúc file:**
```scss
// _variables.scss
$primary-color: #3498db;
$secondary-color: #2ecc71;
$font-size-base: 16px;

// _mixins.scss
@mixin button-style($bg-color) {
  background: $bg-color;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
}

// main.scss
@import 'variables';
@import 'mixins';

.btn-primary {
  @include button-style($primary-color);
}

.btn-secondary {
  @include button-style($secondary-color);
}
```

## **Các bộ tiền xử lý CSS phổ biến nhất**

Hiện tại, ba bộ tiền xử lý CSS phổ biến nhất được các nhà phát triển sử dụng rộng rãi là **Sass**, **LESS**, và **Stylus**.

## **1. Sass – Syntactically Awesome Style Sheets**

**Sass (Syntactically Awesome Style Sheets)** là bộ tiền xử lý CSS phổ biến nhất và cũng là một trong những bộ lâu đời nhất, ra mắt vào năm 2006.

Ban đầu Sass được viết bằng ngôn ngữ **Ruby**, nhưng một bộ tiền biên dịch (Precompiler) tên là **LibSass** cho phép Sass được phân tích cú pháp (parsed) trong các ngôn ngữ khác và tách biệt nó khỏi Ruby.

### **Cú pháp (Syntax)**

Sass có thể được viết bằng hai cú pháp:

#### **Sass (original syntax) - File .sass:**
```sass
// Variables
$font-stack: Helvetica, sans-serif
$primary-color: #333
$margin-base: 20px

// Nesting
.navigation
  background: $primary-color
  padding: $margin-base
  
  ul
    margin: 0
    padding: 0
    
    li
      list-style: none
      
      a
        color: white
        text-decoration: none
        
        &:hover
          color: #ccc

// Mixins
=border-radius($radius)
  -webkit-border-radius: $radius
  -moz-border-radius: $radius
  border-radius: $radius

.button
  +border-radius(5px)
  background: $primary-color
  color: white
```

#### **SCSS (Sassy CSS) - File .scss:**
```scss
// Variables
$font-stack: Helvetica, sans-serif;
$primary-color: #333;
$margin-base: 20px;

// Nesting
.navigation {
  background: $primary-color;
  padding: $margin-base;
  
  ul {
    margin: 0;
    padding: 0;
    
    li {
      list-style: none;
      
      a {
        color: white;
        text-decoration: none;
        
        &:hover {
          color: #ccc;
        }
      }
    }
  }
}

// Mixins
@mixin border-radius($radius) {
  -webkit-border-radius: $radius;
  -moz-border-radius: $radius;
  border-radius: $radius;
}

.button {
  @include border-radius(5px);
  background: $primary-color;
  color: white;
}
```

### **Ví dụ nâng cao với Sass:**

```scss
// Maps và Lists
$breakpoints: (
  small: 576px,
  medium: 768px,
  large: 992px,
  xlarge: 1200px
);

$font-weights: (
  light: 300,
  regular: 400,
  medium: 500,
  bold: 700
);

// Function sử dụng Map
@function breakpoint($name) {
  @return map-get($breakpoints, $name);
}

@function font-weight($name) {
  @return map-get($font-weights, $name);
}

// Media query mixin
@mixin respond-to($breakpoint) {
  @media (min-width: breakpoint($breakpoint)) {
    @content;
  }
}

// Sử dụng
.container {
  width: 100%;
  
  @include respond-to(medium) {
    max-width: 750px;
  }
  
  @include respond-to(large) {
    max-width: 970px;
  }
}

.title {
  font-weight: font-weight(bold);
  
  @include respond-to(small) {
    font-size: 1.5rem;
  }
  
  @include respond-to(large) {
    font-size: 2rem;
  }
}
```

### **Ứng dụng của Sass**
Khung giao diện người dùng (front-end framework) phổ biến nhất **Bootstrap** đã chuyển từ LESS sang Sass từ phiên bản 4. Một số công ty lớn sử dụng Sass bao gồm Zapier, Uber, Airbnb và Kickstarter.

## **2. LESS – Leaner Style Sheets**

**LESS (Leaner Style Sheets)** ra mắt vào năm 2009. Trong khi Sass được viết bằng Ruby, LESS được viết bằng **JavaScript** và là một thư viện JavaScript mở rộng chức năng của CSS thuần với mixins, biến, lồng mã và các vòng lặp bộ quy tắc (rule set loop).

### **Cú pháp LESS:**

```less
// Variables (sử dụng @)
@primary-color: #3498db;
@secondary-color: #2ecc71;
@font-size-base: 16px;
@border-radius-base: 4px;

// Mixins
.border-radius(@radius: @border-radius-base) {
  -webkit-border-radius: @radius;
     -moz-border-radius: @radius;
          border-radius: @radius;
}

.button-style(@bg-color, @text-color: white) {
  background-color: @bg-color;
  color: @text-color;
  padding: 10px 20px;
  border: none;
  .border-radius(5px);
  cursor: pointer;
  
  &:hover {
    background-color: lighten(@bg-color, 10%);
  }
}

// Nesting và sử dụng mixins
.navigation {
  background: @primary-color;
  
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    
    li {
      display: inline-block;
      
      a {
        color: white;
        text-decoration: none;
        padding: 10px 15px;
        display: block;
        
        &:hover {
          background: darken(@primary-color, 10%);
        }
      }
    }
  }
}

.btn-primary {
  .button-style(@primary-color);
}

.btn-secondary {
  .button-style(@secondary-color);
}
```

### **Ví dụ nâng cao với operations và functions:**

```less
// Math operations
@base-margin: 20px;
@double-margin: @base-margin * 2;
@half-margin: @base-margin / 2;

// Color functions
@brand-color: #3498db;
@light-brand: lighten(@brand-color, 20%);
@dark-brand: darken(@brand-color, 20%);

// Guards (điều kiện)
.button-size(@size) when (@size = small) {
  padding: 5px 10px;
  font-size: 12px;
}

.button-size(@size) when (@size = medium) {
  padding: 10px 20px;
  font-size: 14px;
}

.button-size(@size) when (@size = large) {
  padding: 15px 30px;
  font-size: 16px;
}

// Sử dụng
.btn-small {
  .button-size(small);
  background: @brand-color;
}

.btn-large {
  .button-size(large);
  background: @dark-brand;
}

// Loops
.generate-columns(@n, @i: 1) when (@i =< @n) {
  .col-@{i} {
    width: (@i * 100% / @n);
    float: left;
  }
  .generate-columns(@n, (@i + 1));
}

.generate-columns(12);
```

### **Ưu điểm và nhược điểm của LESS:**

**Ưu điểm:**
- Dễ dàng thêm vào dự án (có thể dùng trực tiếp qua CDN)
- Cú pháp gần giống CSS
- Tích hợp tốt với JavaScript

**Nhược điểm:**
- Không hỗ trợ các hàm phức tạp như Sass
- Sử dụng `@` có thể gây nhầm lẫn với `@media`, `@keyframes`

### **Ứng dụng của LESS**
Khung giao diện người dùng phổ biến **SEMANTIC UI** vẫn được viết bằng LESS. Một số công ty lớn sử dụng LESS bao gồm Indiegogo, Patreon và WeChat.

## **3. Stylus**

**Stylus** ra mắt vào năm 2010, được phát triển bởi TJ Holowaychuk. Stylus được viết bằng **Node.js** và hoàn toàn phù hợp với ngăn xếp JavaScript (JS stack).

### **Cú pháp Stylus:**

```stylus
// Variables (không cần ký hiệu đặc biệt)
primary-color = #3498db
secondary-color = #2ecc71
font-size-base = 16px
margin-base = 20px

// Functions
border-radius(radius = 4px)
  -webkit-border-radius radius
  -moz-border-radius radius
  border-radius radius

button-style(bg-color, text-color = white)
  background-color bg-color
  color text-color
  padding 10px 20px
  border none
  border-radius(5px)
  cursor pointer
  
  &:hover
    background-color lighten(bg-color, 10%)

// Nesting
.navigation
  background primary-color
  padding margin-base
  
  ul
    margin 0
    padding 0
    list-style none
    
    li
      display inline-block
      
      a
        color white
        text-decoration none
        padding 10px 15px
        display block
        
        &:hover
          background darken(primary-color, 10%)

// Sử dụng functions
.btn-primary
  button-style(primary-color)

.btn-secondary
  button-style(secondary-color)

// Flexible syntax - có thể viết theo nhiều cách
.flexible-example
  margin: 20px;  // CSS style
  margin 20px    // Stylus style
  margin: 20px   // Mixed style
```

### **Ví dụ nâng cao với Stylus:**

```stylus
// Built-in functions
colors = {
  primary: #3498db,
  secondary: #2ecc71,
  danger: #e74c3c,
  warning: #f39c12
}

// Iteration
for name, color in colors
  .btn-{name}
    background-color color
    
    &:hover
      background-color darken(color, 10%)

// Conditional logic
button-variant(color)
  background-color color
  
  if lightness(color) > 50%
    color #333
  else
    color white

// Hash/Object operations
get-color(name)
  return colors[name]

// Advanced mixins with default parameters
create-grid(columns = 12, gutter = 20px)
  for i in 1..columns
    .col-{i}
      width (i / columns * 100%)
      padding 0 (gutter / 2)

// Generate grid
create-grid(12, 30px)

// Vendor prefixes helper
vendor(prop, args)
  -webkit-{prop} args
  -moz-{prop} args
  {prop} args

.transform-example
  vendor('transform', 'rotate(45deg)')
  vendor('transition', 'all 0.3s ease')
```

### **Ưu điểm của Stylus:**
- Cú pháp linh hoạt nhất
- Hàm built-in mạnh mẽ
- Khả năng xử lý tính toán phức tạp
- Tích hợp tốt với Node.js

### **Ứng dụng của Stylus**
Một số khung giao diện đáng chú ý được viết bằng Stylus là Basis và Kouto Swiss. Các công ty lớn sử dụng Stylus bao gồm Accenture, HackerEarth, Coursera.

## **So sánh chi tiết 3 preprocessors**

### **Bảng so sánh tính năng:**

| Tính năng | Sass/SCSS | LESS | Stylus |
|-----------|-----------|------|--------|
| Variables | `$variable` | `@variable` | `variable` |
| Nesting | ✅ | ✅ | ✅ |
| Mixins | `@mixin/@include` | `.mixin()` | `function()` |
| Functions | ✅ Mạnh | ❌ Hạn chế | ✅ Rất mạnh |
| Inheritance | `@extend` | ❌ | ✅ |
| Conditions | `@if/@else` | `when` | `if/else` |
| Loops | `@for/@each/@while` | `.loop()` | `for in` |
| Math | ✅ | ✅ | ✅ |
| Color Functions | ✅ Nhiều | ✅ Cơ bản | ✅ Rất nhiều |

### **Ví dụ cùng một tính năng trên 3 preprocessors:**

**Variables và Mixins:**

```scss
// SASS/SCSS
$primary: #3498db;
$padding: 15px;

@mixin button($bg) {
  background: $bg;
  padding: $padding;
  border: none;
  border-radius: 4px;
}

.btn { @include button($primary); }
```

```less
// LESS
@primary: #3498db;
@padding: 15px;

.button(@bg) {
  background: @bg;
  padding: @padding;
  border: none;
  border-radius: 4px;
}

.btn { .button(@primary); }
```

```stylus
// Stylus
primary = #3498db
padding = 15px

button(bg)
  background bg
  padding padding
  border none
  border-radius 4px

.btn
  button(primary)
```

## **Mức độ phổ biến của Bộ tiền xử lý CSS**

Mặc dù CSS gốc đang tiến bộ nhanh chóng và thêm hỗ trợ cho các tính năng mới như biến thuộc tính tùy chỉnh (custom property variables), nhưng các bộ tiền xử lý CSS vẫn giữ được sự phổ biến rộng rãi và lòng trung thành của các nhà phát triển.

### **Thống kê sử dụng:**

- Theo khảo sát "The Front End Tooling Survey" của Ashley Nolan, đa số (86.86%) các nhà phát triển đang sử dụng một loại bộ tiền xử lý CSS nào đó
- **Sass** chiếm 77.27% thị phần vào năm 2019
- **LESS** có 7.52% thị phần
- **Stylus** có mức độ tăng trưởng chậm với 1.08%

### **Khảo sát "State Of CSS 2019":**
- **Sass**: 80% thị phần, nhận thức 100%, hài lòng 90%
- **LESS**: 47% thị phần, hài lòng dưới 50%
- **Stylus**: 14% thị phần

## **Các công cụ biên dịch (Compiler Tools) tốt nhất**

### **1. Live Sass Compiler – VSCode Extension**

Tiện ích mở rộng phổ biến nhất cho Visual Studio Code:

```json
// settings.json cho Live Sass Compiler
{
  "liveSassCompile.settings.formats": [
    {
      "format": "expanded",
      "extensionName": ".css",
      "savePath": "/css"
    },
    {
      "format": "compressed",
      "extensionName": ".min.css",
      "savePath": "/css"
    }
  ],
  "liveSassCompile.settings.generateMap": true,
  "liveSassCompile.settings.autoprefix": [
    "> 1%",
    "last 2 versions"
  ]
}
```

### **2. Prepros**

Trình biên dịch đa nền tảng miễn phí với giao diện đồ họa:

**Tính năng:**
- Biên dịch Sass, LESS, Stylus
- CSS Autoprefixer
- File Minification
- Image Optimization
- Live Reload

### **3. CodeKit (macOS)**

Bộ công cụ phát triển cao cấp cho macOS:

**Tính năng nâng cao:**
- Advanced compilation options
- Built-in image optimizer
- Cache busting
- NPM integration
- Debugging tools

### **4. Command Line Tools**

**Sass CLI:**
```bash
# Cài đặt
npm install -g sass

# Biên dịch single file
sass input.scss output.css

# Watch mode
sass --watch input.scss:output.css

# Watch thư mục
sass --watch scss/:css/
```

**LESS CLI:**
```bash
# Cài đặt
npm install -g less

# Biên dịch
lessc input.less output.css

# Minify
lessc --clean-css input.less output.min.css
```

**Stylus CLI:**
```bash
# Cài đặt
npm install -g stylus

# Biên dịch
stylus input.styl -o output.css

# Watch mode
stylus --watch input.styl -o output.css
```

## **Khi nào không nên sử dụng CSS Preprocessors**

### **1. Chỉ để sử dụng biến (variables)**

CSS hiện tại đã hỗ trợ Custom Properties:

```css
/* CSS Custom Properties */
:root {
  --primary-color: #3498db;
  --secondary-color: #2ecc71;
  --font-size-base: 16px;
  --spacing-unit: 8px;
}

.button {
  background: var(--primary-color);
  font-size: var(--font-size-base);
  padding: calc(var(--spacing-unit) * 2);
}

/* Dynamic updates với JavaScript */
document.documentElement.style.setProperty('--primary-color', '#e74c3c');
```

### **2. CSS gốc cung cấp chức năng calc()**

```css
/* Tính toán trong CSS */
.container {
  width: calc(100% - 40px);
  height: calc(100vh - 60px);
  margin: calc(var(--spacing-unit) * 2);
}

.grid-item {
  width: calc(100% / 3 - 20px);
  margin: calc(var(--spacing-unit) / 2);
}
```

### **3. Các trường hợp không phù hợp:**

#### **Dự án nhỏ:**
```css
/* Đối với dự án nhỏ, CSS thuần có thể đủ */
.simple-button {
  background: #3498db;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
}

.simple-card {
  background: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  padding: 20px;
  border-radius: 8px;
}
```

#### **Team không có kinh nghiệm:**
- Cần thời gian học cú pháp mới
- Debugging phức tạp hơn
- Setup và configuration

#### **Performance-critical projects:**
- Thời gian biên dịch
- File size có thể lớn hơn
- Mất control trực tiếp với CSS output

## **Best Practices khi sử dụng CSS Preprocessors**

### **1. Tổ chức file structure:**

```
scss/
├── abstracts/
│   ├── _variables.scss
│   ├── _functions.scss
│   ├── _mixins.scss
│   └── _placeholders.scss
├── base/
│   ├── _reset.scss
│   ├── _typography.scss
│   └── _utilities.scss
├── components/
│   ├── _buttons.scss
│   ├── _carousel.scss
│   ├── _dropdown.scss
│   └── _navigation.scss
├── layout/
│   ├── _grid.scss
│   ├── _header.scss
│   ├── _footer.scss
│   └── _sidebar.scss
├── pages/
│   ├── _home.scss
│   ├── _contact.scss
│   └── _about.scss
├── vendors/
│   ├── _bootstrap.scss
│   └── _jquery-ui.scss
└── main.scss
```

### **2. Variables organization:**

```scss
// _variables.scss

// Colors
$color-primary: #3498db;
$color-secondary: #2ecc71;
$color-accent: #e74c3c;

$color-gray-100: #f8f9fa;
$color-gray-200: #e9ecef;
$color-gray-300: #dee2e6;

// Typography
$font-family-primary: 'Helvetica Neue', Arial, sans-serif;
$font-family-secondary: 'Georgia', serif;

$font-size-xs: 0.75rem;
$font-size-sm: 0.875rem;
$font-size-base: 1rem;
$font-size-lg: 1.125rem;
$font-size-xl: 1.25rem;

// Spacing
$spacing-xs: 0.25rem;
$spacing-sm: 0.5rem;
$spacing-md: 1rem;
$spacing-lg: 1.5rem;
$spacing-xl: 3rem;

// Breakpoints
$breakpoint-sm: 576px;
$breakpoint-md: 768px;
$breakpoint-lg: 992px;
$breakpoint-xl: 1200px;
```

### **3. Mixins hữu ích:**

```scss
// _mixins.scss

// Media queries
@mixin respond-to($breakpoint) {
  @if $breakpoint == xs {
    @media (max-width: $breakpoint-sm - 1) { @content; }
  }
  @if $breakpoint == sm {
    @media (min-width: $breakpoint-sm) { @content; }
  }
  @if $breakpoint == md {
    @media (min-width: $breakpoint-md) { @content; }
  }
  @if $breakpoint == lg {
    @media (min-width: $breakpoint-lg) { @content; }
  }
}

// Flexbox
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

@mixin flex-between {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

// Typography
@mixin text-truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

@mixin font-size($size) {
  font-size: $size;
  font-size: calc(#{$size} + 0.5vw);
}

// Animations
@mixin transition($property: all, $duration: 0.3s, $timing: ease) {
  transition: $property $duration $timing;
}

@mixin hover-lift {
  transition: transform 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
  }
}

// Layout
@mixin container($max-width: 1200px) {
  width: 100%;
  max-width: $max-width;
  margin: 0 auto;
  padding: 0 $spacing-md;
}

@mixin aspect-ratio($width, $height) {
  position: relative;
  
  &:before {
    content: "";
    display: block;
    padding-top: ($height / $width) * 100%;
  }
  
  > * {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
```

### **4. Functions hữu ích:**

```scss
// _functions.scss

// Color functions
@function tint($color, $percentage) {
  @return mix(white, $color, $percentage);
}

@function shade($color, $percentage) {
  @return mix(black, $color, $percentage);
}

// Unit conversion
@function strip-unit($number) {
  @if type-of($number) == 'number' and not unitless($number) {
    @return $number / ($number * 0 + 1);
  }
  @return $number;
}

@function rem($pixels) {
  @return #{$pixels / 16}rem;
}

@function em($pixels, $context: 16) {
  @return #{$pixels / $context}em;
}

// Z-index management
$z-indexes: (
  modal: 1000,
  dropdown: 500,
  header: 100,
  footer: 10
);

@function z($name) {
  @if map-has-key($z-indexes, $name) {
    @return map-get($z-indexes, $name);
  }
  @warn "Unknown `#{$name}` in $z-indexes.";
  @return null;
}
```

### **5. Component patterns:**

```scss
// _buttons.scss

%btn-base {
  display: inline-block;
  padding: $spacing-sm $spacing-md;
  border: none;
  border-radius: 4px;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  font-family: inherit;
  font-size: $font-size-base;
  line-height: 1.5;
  @include transition();
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
}

@mixin btn-variant($bg-color, $text-color: white) {
  @extend %btn-base;
  background-color: $bg-color;
  color: $text-color;
  
  &:hover:not(:disabled) {
    background-color: shade($bg-color, 10%);
  }
  
  &:active {
    background-color: shade($bg-color, 20%);
  }
}

@mixin btn-size($padding-v, $padding-h, $font-size) {
  padding: $padding-v $padding-h;
  font-size: $font-size;
}

// Button variants
.btn {
  &--primary { @include btn-variant($color-primary); }
  &--secondary { @include btn-variant($color-secondary); }
  &--danger { @include btn-variant($color-accent); }
  
  &--sm { @include btn-size($spacing-xs, $spacing-sm, $font-size-sm); }
  &--lg { @include btn-size($spacing-md, $spacing-lg, $font-size-lg); }
  
  &--outline {
    background: transparent;
    border: 2px solid $color-primary;
    color: $color-primary;
    
    &:hover {
      background: $color-primary;
      color: white;
    }
  }
}
```

## **Advanced Techniques và Real-world Examples**

### **1. Theme System với Sass:**

```scss
// _themes.scss

$themes: (
  light: (
    background: #ffffff,
    text: #333333,
    primary: #3498db,
    secondary: #2ecc71,
    surface: #f8f9fa,
    border: #dee2e6
  ),
  dark: (
    background: #1a1a1a,
    text: #ffffff,
    primary: #5dade2,
    secondary: #58d68d,
    surface: #2c2c2c,
    border: #444444
  )
);

@function theme-get($theme, $key) {
  @return map-get(map-get($themes, $theme), $key);
}

@mixin themed() {
  @each $theme, $map in $themes {
    .theme-#{$theme} & {
      $theme-map: () !global;
      @each $key, $submap in $map {
        $value: map-get(map-get($themes, $theme), '#{$key}');
        $theme-map: map-merge($theme-map, ($key: $value)) !global;
      }
      @content;
      $theme-map: null !global;
    }
  }
}

@function t($key) {
  @return map-get($theme-map, $key);
}

// Usage
.card {
  @include themed() {
    background: t(surface);
    color: t(text);
    border: 1px solid t(border);
  }
}

.button {
  @include themed() {
    background: t(primary);
    color: t(background);
    
    &:hover {
      background: darken(t(primary), 10%);
    }
  }
}
```

### **2. Grid System với Sass:**

```scss
// _grid.scss

$grid-columns: 12;
$grid-gutter: 30px;
$grid-breakpoints: (
  xs: 0,
  sm: 576px,
  md: 768px,
  lg: 992px,
  xl: 1200px
);

$container-max-widths: (
  sm: 540px,
  md: 720px,
  lg: 960px,
  xl: 1140px
);

// Container
.container {
  width: 100%;
  padding-right: $grid-gutter / 2;
  padding-left: $grid-gutter / 2;
  margin-right: auto;
  margin-left: auto;
  
  @each $breakpoint, $container-max-width in $container-max-widths {
    @include respond-to($breakpoint) {
      max-width: $container-max-width;
    }
  }
}

.container-fluid {
  width: 100%;
  padding-right: $grid-gutter / 2;
  padding-left: $grid-gutter / 2;
  margin-right: auto;
  margin-left: auto;
}

// Row
.row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -#{$grid-gutter / 2};
  margin-left: -#{$grid-gutter / 2};
}

// Columns
@mixin make-col($size, $columns: $grid-columns) {
  flex: 0 0 percentage($size / $columns);
  max-width: percentage($size / $columns);
}

@mixin make-col-offset($size, $columns: $grid-columns) {
  $num: $size / $columns;
  margin-left: if($num == 0, 0, percentage($num));
}

// Generate column classes
@each $breakpoint in map-keys($grid-breakpoints) {
  $infix: if($breakpoint == xs, "", "-#{$breakpoint}");
  
  @include respond-to($breakpoint) {
    // Base column class
    .col#{$infix} {
      flex-basis: 0;
      flex-grow: 1;
      max-width: 100%;
      padding-right: $grid-gutter / 2;
      padding-left: $grid-gutter / 2;
    }
    
    // Sized columns
    @for $i from 1 through $grid-columns {
      .col#{$infix}-#{$i} {
        @include make-col($i, $grid-columns);
        padding-right: $grid-gutter / 2;
        padding-left: $grid-gutter / 2;
      }
    }
    
    // Offset columns
    @for $i from 0 through ($grid-columns - 1) {
      @if not ($infix == "" and $i == 0) {
        .offset#{$infix}-#{$i} {
          @include make-col-offset($i, $grid-columns);
        }
      }
    }
  }
}
```

### **3. Utility Classes Generator:**

```scss
// _utilities.scss

$utilities: (
  "margin": (
    property: margin,
    class: m,
    values: map-merge($spacing-sizes, (auto: auto))
  ),
  "margin-x": (
    property: margin-left margin-right,
    class: mx,
    values: map-merge($spacing-sizes, (auto: auto))
  ),
  "margin-y": (
    property: margin-top margin-bottom,
    class: my,
    values: map-merge($spacing-sizes, (auto: auto))
  ),
  "padding": (
    property: padding,
    class: p,
    values: $spacing-sizes
  ),
  "text-align": (
    property: text-align,
    class: text,
    values: (
      left: left,
      right: right,
      center: center
    )
  ),
  "display": (
    property: display,
    class: d,
    values: (
      none: none,
      inline: inline,
      block: block,
      flex: flex,
      grid: grid
    )
  )
);

$spacing-sizes: (
  0: 0,
  1: $spacing-xs,
  2: $spacing-sm,
  3: $spacing-md,
  4: $spacing-lg,
  5: $spacing-xl
);

// Generate utility classes
@each $utility-name, $utility in $utilities {
  $property: map-get($utility, property);
  $class: map-get($utility, class);
  $values: map-get($utility, values);
  
  @each $key, $value in $values {
    .#{$class}-#{$key} {
      @each $prop in $property {
        #{$prop}: #{$value} !important;
      }
    }
  }
}
```

## **Performance Optimization**

### **1. Partial imports và code splitting:**

```scss
// main.scss - chỉ import những gì cần thiết

// Critical CSS (above the fold)
@import 'abstracts/variables';
@import 'abstracts/mixins';
@import 'base/reset';
@import 'base/typography';
@import 'layout/header';
@import 'components/hero';

// Non-critical CSS có thể lazy load
// @import 'components/modal';
// @import 'components/carousel';
// @import 'pages/contact';
```

### **2. Conditional compilation:**

```scss
// Feature flags
$enable-rounded: true;
$enable-shadows: true;
$enable-gradients: false;
$enable-transitions: true;

.card {
  background: white;
  padding: $spacing-md;
  
  @if $enable-rounded {
    border-radius: 4px;
  }
  
  @if $enable-shadows {
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }
  
  @if $enable-transitions {
    transition: all 0.2s ease;
  }
}
```

### **3. Output optimization:**

```scss
// Sử dung placeholders để tránh duplicate CSS
%clearfix {
  &::after {
    content: "";
    display: table;
    clear: both;
  }
}

.container {
  @extend %clearfix;
}

.row {
  @extend %clearfix;
}

// CSS output sẽ nhóm các selector lại:
// .container::after,
// .row::after {
//   content: "";
//   display: table;
//   clear: both;
// }
```

## **Debugging và Testing**

### **1. Source Maps:**

```json
// package.json scripts
{
  "scripts": {
    "sass": "sass --watch scss/:css/ --source-map",
    "sass-prod": "sass scss/:css/ --style=compressed --no-source-map"
  }
}
```

### **2. Linting với Stylelint:**

```json
// .stylelintrc.json
{
  "extends": ["stylelint-config-sass-guidelines"],
  "rules": {
    "max-nesting-depth": 3,
    "selector-max-compound-selectors": 4,
    "selector-no-qualifying-type": [true, {
      "ignore": ["attribute", "class"]
    }],
    "order/properties-alphabetical-order": null
  }
}
```

### **3. Testing CSS với Jest:**

```javascript
// css.test.js
const sass = require('sass');
const path = require('path');

describe('SCSS Compilation', () => {
  test('should compile without errors', () => {
    const result = sass.renderSync({
      file: path.join(__dirname, 'scss/main.scss')
    });
    
    expect(result.css).toBeDefined();
    expect(result.css.length).toBeGreaterThan(0);
  });
  
  test('should contain expected CSS rules', () => {
    const result = sass.renderSync({
      file: path.join(__dirname, 'scss/components/_button.scss')
    });
    
    const css = result.css.toString();
    expect(css).toContain('.btn');
    expect(css).toContain('padding:');
    expect(css).toContain('background-color:');
  });
});
```

## **Migration Strategies**

### **1. Từ CSS sang SCSS:**

```css
/* Bước 1: Rename .css thành .scss */
/* Bước 2: Dần dần refactor */

/* Before: CSS thuần */
.navigation {
  background: #333;
}

.navigation ul {
  margin: 0;
  padding: 0;
}

.navigation ul li {
  list-style: none;
}

.navigation ul li a {
  color: white;
  text-decoration: none;
}

.navigation ul li a:hover {
  color: #ccc;
}
```

```scss
/* After: SCSS với nesting */
$nav-bg: #333;
$nav-text: white;
$nav-hover: #ccc;

.navigation {
  background: $nav-bg;
  
  ul {
    margin: 0;
    padding: 0;
    
    li {
      list-style: none;
      
      a {
        color: $nav-text;
        text-decoration: none;
        
        &:hover {
          color: $nav-hover;
        }
      }
    }
  }
}
```

### **2. Từ LESS sang SCSS:**

```less
/* LESS */
@primary: #3498db;
@secondary: #2ecc71;

.button(@bg-color) {
  background: @bg-color;
  border: none;
  padding: 10px 20px;
}

.btn-primary {
  .button(@primary);
}
```

```scss
/* SCSS equivalent */
$primary: #3498db;
$secondary: #2ecc71;

@mixin button($bg-color) {
  background: $bg-color;
  border: none;
  padding: 10px 20px;
}

.btn-primary {
  @include button($primary);
}
```

## **Build Tools Integration**

### **1. Webpack configuration:**

```javascript
// webpack.config.js
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/js/main.js',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  require('autoprefixer'),
                  require('cssnano')
                ]
              }
            }
          },
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
              sassOptions: {
                includePaths: [path.resolve(__dirname, 'src/scss')]
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css'
    })
  ]
};
```

### **2. Gulp workflow:**

```javascript
// gulpfile.js
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const sourcemaps = require('gulp-sourcemaps');

function styles() {
  return gulp.src('src/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([
      autoprefixer(),
      cssnano()
    ]))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/css'));
}

function watchStyles() {
  gulp.watch('src/scss/**/*.scss', styles);
}

exports.styles = styles;
exports.watch = watchStyles;
exports.default = gulp.series(styles, watchStyles);
```

## **Kết luận**

### **Sass vs LESS vs Stylus - Lựa chọn của bạn là gì?**

Ba bộ tiền xử lý lớn – Sass, LESS và Stylus, tiếp tục thống trị cuộc đua bộ tiền xử lý CSS với Sass/SCSS giữ vị trí dẫn đầu không thể tranh cãi về mức độ phổ biến.

**Chọn Sass/SCSS khi:**
- Cần ecosystem mạnh mẽ và cộng đồng lớn
- Làm việc với Bootstrap 4+
- Cần các tính năng advanced như functions, loops, conditions
- Team có kinh nghiệm với Ruby/Rails

**Chọn LESS khi:**
- Cần setup đơn giản và nhanh chóng
- Team quen thuộc với JavaScript
- Dự án sử dụng Semantic UI
- Chỉ cần các tính năng cơ bản

**Chọn Stylus khi:**
- Làm việc với Node.js ecosystem
- Cần cú pháp linh hoạt nhất
- Cần các built-in functions mạnh mẽ
- Thích sự tự do trong cách viết code

### **Khuyến nghị cuối cùng:**

1. **Beginners**: Bắt đầu với SCSS vì cú pháp gần với CSS nhất
2. **JavaScript developers**: LESS hoặc Stylus tùy theo sở thích cú pháp
3. **Enterprise projects**: Sass/SCSS vì ecosystem và support tốt nhất
4. **Performance-critical**: Cân nhắc CSS thuần với modern features

Cuối cùng, lựa chọn bộ tiền xử lý CSS sẽ phụ thuộc phần lớn vào sở thích của nhà phát triển, yêu cầu dự án, và khả năng của team. Điều quan trọng là hiểu rõ ưu nhược điểm của từng công cụ để đưa ra quyết định phù hợp nhất cho dự án của bạn.

---
---



## Tài liệu phải đọc khi ĐÓNG CỌC LẦN 2

1. https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-frameworks-and-preprocessors
1. https://medium.com/html-all-the-things/what-is-a-css-framework-f758ef0b1a11
1. https://www.lambdatest.com/blog/css-preprocessors-sass-vs-less-vs-stylus-with-examples/
1. https://adamsilver.io/blog/the-disadvantages-of-css-preprocessors/
1. https://getbootstrap.com/docs/5.3/getting-started/introduction/
1. https://tailwindcss.com/docs
1. https://sass-lang.com/documentation

> ⭐ **Theo dõi [kênh Threads](https://www.threads.com/@kaitaku.88) để đọc bài mới mỗi ngày!** ⭐  

**[<== Bài Trước  ](link)          |[  Trang Chủ  ](./README.md)|           [  Bài Sau ==>](link)**