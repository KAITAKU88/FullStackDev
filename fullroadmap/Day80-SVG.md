# Tài liệu tổng hợp về SVG (Scalable Vector Graphics)

## **`A. Tổng quan về SVG (Scalable Vector Graphics)`**

### 1. SVG là gì?

SVG là viết tắt của "Scalable Vector Graphics" và là một định dạng hình ảnh **có thể mở rộng** (scalable image format). Điều này có nghĩa là hình ảnh SVG có thể dễ dàng thay đổi kích thước lên hoặc xuống mà vẫn **giữ nguyên chất lượng** và không làm tăng kích thước tệp tin (filesize). SVG được định nghĩa bằng toán học, thông qua các công thức cho các hình dạng (shapes) và đường thẳng (lines). Do đó, dù bạn muốn chúng hiển thị lớn hay nhỏ đến mức nào, chúng đều có thể mở rộng mà không ảnh hưởng đến chất lượng hay kích thước tệp.

Điều này khác biệt với "đồ họa raster" (raster graphics) truyền thống (như JPEG), nơi hình ảnh được xác định bởi một lưới điểm ảnh (grid of pixels). Với đồ họa raster, chi tiết bị giới hạn bởi kích thước của lưới điểm ảnh đó; khi bạn muốn tăng kích thước hình ảnh, bạn phải tăng kích thước lưới, và việc này thường làm giảm chất lượng hình ảnh và tăng kích thước tệp.

### 2. SVG được sử dụng để làm gì?

SVG rất hữu ích nếu bạn cần tạo hoặc sửa đổi hình ảnh theo chương trình (programmatically), vì bạn có thể thay đổi các thuộc tính của chúng thông qua CSS và JavaScript. SVG thường được sử dụng cho:

* Biểu tượng (Icons)
* Đồ thị/biểu đồ (Graphs/Charts)
* Hình ảnh lớn, đơn giản (Large, simple images)
* Hình nền có hoa văn (Patterned backgrounds)
* Áp dụng hiệu ứng cho các phần tử khác thông qua bộ lọc SVG (SVG filters)

### 3. Bản chất XML của SVG

Một khía cạnh thú vị khác của SVG là chúng được định nghĩa bằng XML (Extensible Markup Language). XML là một cú pháp giống HTML, được sử dụng cho nhiều mục đích khác nhau.

Việc mã nguồn (source-code) của SVG là XML mang lại một số lợi ích chính:

* **Có thể đọc được bởi con người** (Human-readable): Nếu bạn mở một tệp JPEG trong trình soạn thảo văn bản, nó sẽ trông như một mớ ký tự lộn xộn. Tuy nhiên, nếu bạn mở một tệp SVG, nó sẽ hiển thị dưới dạng các từ, thẻ (tags), và thuộc tính (attributes), giống như HTML, giúp việc đọc hiểu dễ dàng hơn nhiều.

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <rect x=0 y=0 width=100 height=50 />
  <circle class="svg-circle" cx="50" cy="50" r="10"/>
</svg>
```

* **Tương thích với HTML** (Interoperable with HTML): XML được thiết kế để tương thích với HTML. Điều này có nghĩa là bạn có thể đặt mã SVG trực tiếp vào tệp HTML mà không cần thay đổi gì và hình ảnh sẽ hiển thị. Vì các phần tử SVG có thể trở thành các phần tử trong DOM (Document Object Model) giống như các phần tử HTML, bạn có thể **nhắm mục tiêu chúng bằng CSS và tạo chúng bằng Element WebAPI**.

### 4. Nhược điểm của SVG

Mặc dù SVG rất tuyệt vời, nhưng chúng không phải là giải pháp cho mọi trường hợp. SVG **rất kém hiệu quả trong việc lưu trữ hình ảnh phức tạp** hoặc hình ảnh chi tiết, chân thực như ảnh chụp, vì mỗi chi tiết của hình ảnh đều cần được viết ra dưới dạng XML. Nếu hình ảnh của bạn là ảnh chân thực hoặc có chi tiết, kết cấu mịn, thì SVG không phải là công cụ phù hợp.

**Ví dụ minh họa:**
- ✅ **Phù hợp với SVG**: Logo, biểu tượng, biểu đồ đơn giản, hình học
- ❌ **Không phù hợp với SVG**: Ảnh chụp, hình ảnh có nhiều chi tiết phức tạp, texture

## **`B. Giải phẫu một SVG (Anatomy of an SVG)`**

Thông thường, **`bạn sẽ không tự tạo SVG`** từ đầu trong mã của mình. Thay vào đó, bạn sẽ tải xuống tệp hoặc sao chép mã từ một trang web hoặc từ một trình chỉnh sửa hình ảnh (như Adobe Illustrator và Figma). Tuy nhiên, việc hiểu các thành phần của SVG rất hữu ích khi bạn muốn chỉnh sửa chúng.

Một số thuộc tính và phần tử chính của SVG bao gồm:

* `xmlns`: Viết tắt của "XML Namespace", thuộc tính này chỉ định phương ngữ (dialect) XML mà bạn đang sử dụng, trong trường hợp này là đặc tả ngôn ngữ SVG. Nếu không có nó, một số trình duyệt có thể không hiển thị hình ảnh của bạn hoặc hiển thị không chính xác.

* `viewBox`: Định nghĩa ranh giới (bounds) của SVG. Nó cũng định nghĩa tỷ lệ khung hình (aspect ratio) và điểm gốc (origin) của SVG.

* `class`, `id`: Các thuộc tính này hoạt động giống như trong HTML. Sử dụng chúng trong SVG cho phép bạn dễ dàng nhắm mục tiêu một phần tử qua CSS hoặc JavaScript, hoặc để tái sử dụng một phần tử qua phần tử `<use>`.

* Các phần tử như `<circle>`, `<rect>`, `<path>`, và `<text>` được định nghĩa bởi không gian tên (namespace) SVG. Đây là những khối xây dựng cơ bản. Mặc dù bạn có thể tạo hình ảnh cực kỳ phức tạp với SVG, nhưng chúng chủ yếu được tạo ra từ hàng tá các phần tử cơ bản này.

* Nhiều thuộc tính SVG, như `fill` (màu tô) và `stroke` (màu viền), có thể được thay đổi trong CSS của bạn.

**Ví dụ cấu trúc SVG cơ bản:**

```xml
<svg xmlns="http://www.w3.org/2000/svg" 
     viewBox="0 0 200 100" 
     width="200" 
     height="100">
  
  <!-- Hình chữ nhật -->
  <rect x="10" y="10" width="80" height="60" 
        fill="blue" stroke="black" stroke-width="2"/>
  
  <!-- Hình tròn -->
  <circle cx="150" cy="40" r="25" 
          fill="red" opacity="0.7"/>
  
  <!-- Văn bản -->
  <text x="100" y="90" font-family="Arial" font-size="12">
    Hello SVG!
  </text>
</svg>
```

## **`C. Nhúng SVG (Embedding SVGs)`**

Có hai cách tiếp cận chính để đặt SVG vào tài liệu HTML của bạn: **liên kết** (linked) và **nội tuyến** (inline).

### 1. Liên kết (Linked) SVG

* Hoạt động tương tự như việc liên kết bất kỳ hình ảnh nào khác.
* Bạn có thể sử dụng phần tử hình ảnh HTML như `<img>` hoặc liên kết nó trong CSS bằng `background-image: url(./my-image.svg)`.

**Ưu điểm:**
- Vẫn mở rộng đúng cách
- Nói chung là sạch sẽ và đơn giản hơn
- Có thể cache được

**Nhược điểm:**
- Nội dung của SVG sẽ không thể truy cập được từ trang web
- Không thể thay đổi một cách linh hoạt bằng CSS hoặc JavaScript

**Ví dụ:**
```html
<!-- Sử dụng img tag -->
<img src="icon.svg" alt="My Icon" width="50" height="50">

<!-- Sử dụng CSS background -->
<div class="icon-bg"></div>
<style>
.icon-bg {
  width: 50px;
  height: 50px;
  background-image: url('icon.svg');
  background-size: contain;
}
</style>
```

### 2. Nội tuyến (Inline) SVG

* Bằng cách dán nội dung của SVG trực tiếp vào mã HTML của trang web thay vì liên kết đến nó như một hình ảnh.

**Ưu điểm:**
- SVG sẽ hiển thị chính xác
- **Các thuộc tính của SVG sẽ hiển thị với mã của bạn**
- Cho phép **thay đổi hình ảnh động bằng CSS hoặc JavaScript**
- Mở khóa toàn bộ tiềm năng của SVG

**Nhược điểm:**
- Làm cho mã của bạn khó đọc hơn
- Trang của bạn kém khả năng lưu vào bộ nhớ cache (less cacheable)
- Nếu đó là một SVG lớn, có thể làm chậm quá trình tải HTML

**Ví dụ:**
```html
<!DOCTYPE html>
<html>
<head>
  <style>
    .interactive-circle {
      fill: blue;
      transition: fill 0.3s ease;
    }
    .interactive-circle:hover {
      fill: red;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <svg width="100" height="100">
    <circle class="interactive-circle" cx="50" cy="50" r="30"/>
  </svg>
</body>
</html>
```

*Lưu ý: Một số nhược điểm của việc nội tuyến mã SVG có thể được khắc phục khi bạn học các thư viện JavaScript phía máy khách (front-end JavaScript library) như React hoặc các công cụ xây dựng (build-tool) như webpack.*

## **`D. Thuộc tính SVG trong CSS (SVG Properties in CSS)`**

SVG có bộ phần tử, thuộc tính và thuộc tính riêng, đến mức mã SVG nội tuyến có thể trở nên dài và phức tạp. Bằng cách tận dụng CSS và một số tính năng sắp tới của đặc tả SVG 2, chúng ta có thể giảm bớt mã đó để có đánh dấu (markup) sạch hơn.

### 1. Thuộc tính trình bày (Presentation Attributes)

Nhiều đồ họa vector có thể mở rộng (Scalable Vector Graphics - SVG) tồn tại, nhưng chỉ một số thuộc tính nhất định có thể được áp dụng dưới dạng CSS cho SVG. **Thuộc tính trình bày (Presentation attributes) được sử dụng để tạo kiểu cho các phần tử SVG và có thể được sử dụng làm thuộc tính CSS**. Một số thuộc tính này chỉ dành riêng cho SVG trong khi những thuộc tính khác đã được chia sẻ trong CSS, chẳng hạn như `font-size` hoặc `opacity`.

**Ví dụ:** Để thay đổi màu của một phần tử `<circle>` thành màu đỏ, bạn có thể sử dụng thuộc tính `fill` trong CSS:

```css
circle { 
  fill: red; 
}
```

**So sánh cách viết:**
```html
<!-- Cách 1: Sử dụng attribute trực tiếp -->
<circle cx="50" cy="50" r="20" fill="red" stroke="blue" stroke-width="2"/>

<!-- Cách 2: Sử dụng CSS -->
<circle cx="50" cy="50" r="20" class="styled-circle"/>
<style>
.styled-circle {
  fill: red;
  stroke: blue;
  stroke-width: 2;
}
</style>
```

### 2. SVG 2 và Thuộc tính hình học (Geometry Properties)

Trong khi các thuộc tính trình bày có thể được sử dụng làm thuộc tính CSS để tạo kiểu cho SVG, SVG 2 (hiện đang trong giai đoạn Đề xuất Ứng cử viên - Candidate Recommendation) cho phép bạn **kiểm soát tọa độ (coordinates) và kích thước (dimensions) của các phần tử SVG bằng CSS**, cũng như tạo hoạt ảnh (animate) các thuộc tính này.

Các thuộc tính hình học (geometry properties) như `rx` và `ry` được định nghĩa trong SVG 2. Các thuộc tính này có thể được sử dụng làm thuộc tính CSS, giống như các thuộc tính trình bày như `fill` hoặc `stroke`.

**Các thuộc tính hình học có thể được sử dụng làm thuộc tính CSS và các phần tử SVG tương ứng:**

* `<circle>`: `cx`, `cy`, `r`
* `<ellipse>`: `cx`, `cy`, `rx`, `ry`
* `<rect>`: `rx`, `ry`, `height`, `width`, `x`, `y`
* `<path>`: `path`
* `<image>`: `height`, `width`, `x`, `y`
* `<foreignObject>`: `height`, `width`, `x`, `y`
* `<svg>`: `height`, `width`, `x`, `y`

**Ví dụ về Định vị các phần tử SVG (Positioning SVG elements):**

Với SVG 2, bạn có thể định vị các phần tử SVG bằng CSS. Mã SVG ban đầu có thể trông như sau:

```html
<svg width="170" height="170">
  <rect x="10" y="10" width="150" height="150" />
</svg>
```

Với CSS ban đầu:
```css
rect { fill: #6e40aa; }
```

Với SVG 2, các thuộc tính `x`, `y`, `width`, `height` có thể được áp dụng làm thuộc tính CSS, giảm đáng kể mã SVG:

```css
/* This will work with SVG 2 */
rect {
  x: 10;
  y: 10;
  width: 150px;
  height: 150px;
  fill: #6e40aa; /* Giữ thuộc tính fill */
}
```

Mã SVG sẽ được rút gọn thành:
```html
<svg width="170" height="170">
  <rect />
</svg>
```

**Lưu ý về khả năng tương thích trình duyệt (Browser Compatibility):**

Tại thời điểm viết tài liệu này, các tính năng SVG 2 được hỗ trợ trong các trình duyệt Blink (ví dụ: Chrome và Opera) và WebKit (ví dụ: Safari). Tuy nhiên, vì SVG 1.1 là tiêu chuẩn hiện tại và việc triển khai SVG 2 đang ở giai đoạn Đề xuất Ứng cử viên (Candidate Recommendation), việc áp dụng các kỹ thuật này vào sản xuất (production) vẫn chưa được khuyến nghị. Hỗ trợ cho việc tạo kiểu các thuộc tính hình học SVG bằng CSS sẽ được cải thiện trong tương lai.

### 3. Các thuộc tính CSS được chia sẻ giữa CSS và SVG

Đây là các thuộc tính trình bày có thể được sử dụng làm thuộc tính CSS và được chia sẻ giữa cả CSS và SVG:

#### Thuộc tính phông chữ (Font properties)
* `font`, `font-family`, `font-size`, `font-size-adjust`, `font-stretch`, `font-style`, `font-variant`, `font-weight`
* **Các phần tử được hỗ trợ**: Phần tử nội dung văn bản (Text content elements)

#### Thuộc tính văn bản (Text properties)
* `direction`, `letter-spacing`, `text-decoration`, `unicode-bidi`, `word-spacing`, `writing-mode`
* **Các phần tử được hỗ trợ**: `<text>`, `<tspan>` cho `direction`, `writing-mode`. Các phần tử nội dung văn bản cho các thuộc tính còn lại

#### Thuộc tính mặt nạ (Masking properties)
* `overflow`
* **Các phần tử được hỗ trợ**: `<foreignObject>`, `<image>`, `<marker>`, `<pattern>`, `<svg>`, `<symbol>`

#### Thuộc tính tương tác (Interactivity properties)
* `cursor`
* **Các phần tử được hỗ trợ**: Phần tử chứa (Container elements), Phần tử đồ họa (Graphics elements)

#### Thuộc tính màu sắc (Color properties)
* `color`: Áp dụng cho các phần tử sử dụng `fill`, `stroke`, `stop-color`, `flood-color`, `lighting-color`

#### Thuộc tính hiển thị (Visibility properties)
* `display`, `visibility`
* **Các phần tử được hỗ trợ**: Phần tử đồ họa (Graphics elements), Phần tử nội dung văn bản (Text content elements), `<a>`, `<foreignObject>`, `<g>`, `<svg>`, `<switch>`, `<symbol>`

**Ví dụ sử dụng:**
```css
/* Styling text elements */
text {
  font-family: Arial, sans-serif;
  font-size: 16px;
  letter-spacing: 1px;
  cursor: pointer;
}

/* Visibility control */
.hidden-graphic {
  visibility: hidden;
}

.fade-graphic {
  opacity: 0.5;
}
```

### 4. Các thuộc tính CSS dành riêng cho SVG

Các thuộc tính này là các thuộc tính trình bày cụ thể của SVG có thể được sử dụng làm thuộc tính CSS:

#### Thuộc tính văn bản (Text properties)
* `alignment-baseline`, `baseline-shift`, `dominant-baseline`, `glyph-orientation-horizontal`, `glyph-orientation-vertical`, `kerning`, `text-anchor`
* **Các phần tử được hỗ trợ**: Phần tử nội dung văn bản (Text content elements) hoặc `<textPath>`, `<tspan>`

#### Thuộc tính cắt (Clip properties)
* `clip`, `clip-path`, `clip-rule`
* **Các phần tử được hỗ trợ**: `<foreignObject>`, `<image>`, `<marker>`, `<pattern>`, `<svg>`, `<symbol>` cho `clip`. Phần tử chứa (Container elements), Phần tử đồ họa (Graphics elements) cho `clip-path`. `<clipPath>` cho `clip-rule`

#### Thuộc tính mặt nạ (Masking properties)
* `mask`, `opacity`
* **Các phần tử được hỗ trợ**: Phần tử chứa (Container elements), Phần tử đồ họa (Graphics elements) cho `mask`. Phần tử đồ họa (Graphics elements), `<a>`, `<defs>`, `<g>`, `<marker>`, `<pattern>`, `<svg>`, `<switch>`, `<symbol>` cho `opacity`

#### Hiệu ứng bộ lọc (Filter effects)
* `enable-background`, `filter`, `flood-color`, `flood-opacity`, `lighting-color`
* **Các phần tử được hỗ trợ**: Phần tử chứa (Container elements), Phần tử đồ họa (Graphics elements), hoặc các phần tử bộ lọc nguyên thủy (Filter primitive elements) như `<feFlood>`, `<feDiffuseLighting>`, `<feSpecularLighting>`

#### Thuộc tính gradient (Gradient properties)
* `stop-color`, `stop-opacity`
* **Các phần tử được hỗ trợ**: `<stop>`

#### Thuộc tính tương tác (Interactivity properties)
* `pointer-events`
* **Các phần tử được hỗ trợ**: Phần tử đồ họa (Graphics elements)

#### Thuộc tính màu sắc (Color properties)
* `color-profile`: Áp dụng cho `<image>` tham chiếu đến hình ảnh raster

#### Thuộc tính vẽ (Painting properties)
* `color-interpolation`, `color-interpolation-filters`, `color-rendering`, `fill`, `fill-rule`, `fill-opacity`, `image-rendering`, `marker`, `marker-start`, `marker-mid`, `marker-end`, `shape-rendering`, `stroke`, `stroke-dasharray`, `stroke-dashoffset`, `stroke-linecap`, `stroke-linejoin`, `stroke-miterlimit`, `stroke-opacity`, `stroke-width`, `text-rendering`
* **Các phần tử được hỗ trợ**: Phần tử chứa (Container elements), Phần tử đồ họa (Graphics elements), Phần tử bộ lọc nguyên thủy (Filter primitive elements), Phần tử hình dạng (Shape elements), Phần tử nội dung văn bản (Text content elements), `<image>`, `<line>`, `<path>`, `<polygon>`, `<polyline>`, `<text>`

**Ví dụ sử dụng các thuộc tính SVG chuyên biệt:**

```css
/* Text alignment trong SVG */
text {
  text-anchor: middle; /* start, middle, end */
  dominant-baseline: central;
}

/* Stroke styling */
path {
  stroke: #333;
  stroke-width: 2px;
  stroke-dasharray: 5,5; /* Tạo đường đứt nét */
  stroke-linecap: round; /* round, square, butt */
  stroke-linejoin: round; /* round, bevel, miter */
}

/* Fill patterns */
rect {
  fill: none;
  stroke: blue;
  stroke-width: 3;
  fill-opacity: 0.7;
}

/* Pointer events */
.clickable-shape {
  pointer-events: all;
  cursor: pointer;
}

.non-interactive {
  pointer-events: none;
}
```

**Lưu ý quan trọng**: Không phải mọi phần tử SVG đều hỗ trợ cùng một thuộc tính CSS. Tương tự như cách có các thuộc tính CSS có thể được áp dụng cho các phần tử SVG nhất định, có những thuộc tính cụ thể được hỗ trợ bởi các phần tử SVG nhất định.

### 5. Danh mục các phần tử SVG (SVG Elements by Category)

Các thuộc tính trình bày có thể được sử dụng làm thuộc tính CSS có thể được tìm thấy trong các phần tử sau. Để tham khảo, các phần tử được hỗ trợ sẽ được phân loại theo danh mục. Lưu ý rằng danh sách này **không bao gồm các phần tử đã bị lỗi thời (deprecated elements)**.

#### Phần tử chứa (Container elements)
`<a>`, `<defs>`, `<g>`, `<marker>`, `<mask>`, `<pattern>`, `<svg>`, `<switch>`, `<symbol>`

#### Phần tử bộ lọc nguyên thủy (Filter primitive elements)
`<feBlend>`, `<feColorMatrix>`, `<feComponentTransfer>`, `<feComposite>`, `<feConvolveMatrix>`, `<feDiffuseLighting>`, `<feDisplacementMap>`, `<feFlood>`, `<feGaussianBlur>`, `<feImage>`, `<feMerge>`, `<feMorphology>`, `<feOffset>`, `<feSpecularLighting>`, `<feTile>`, `<feTurbulence>`

*(MDN cung cấp thêm: `<feDropShadow>`, `<feFuncA>`, `<feFuncB>`, `<feFuncG>`, `<feFuncR>`, `<feMergeNode>`)*

#### Phần tử gradient (Gradient elements)
`<linearGradient>`, `<radialGradient>`, `<stop>`

#### Phần tử đồ họa (Graphics elements)
`<circle>`, `<ellipse>`, `<image>`, `<line>`, `<path>`, `<polygon>`, `<polyline>`, `<rect>`, `<text>`, `<use>`

#### Phần tử hình dạng (Shape elements)
`<circle>`, `<ellipse>`, `<line>`, `<path>`, `<polygon>`, `<polyline>`, `<rect>`

#### Phần tử nội dung văn bản (Text content elements)
`<text>`, `<textPath>`, `<tspan>`

**MDN Web Docs cung cấp thêm các danh mục phần tử SVG chi tiết hơn:**

#### Phần tử hoạt ảnh (Animation elements)
`<animate>`, `<animateMotion>`, `<animateTransform>`, `<mpath>`, `<set>`

#### Hình dạng cơ bản (Basic shapes)
`<circle>`, `<ellipse>`, `<line>`, `<polygon>`, `<polyline>`, `<rect>`

#### Phần tử mô tả (Descriptive elements)
`<desc>`, `<metadata>`, `<title>`

#### Phần tử nguồn sáng (Light source elements)
`<feDistantLight>`, `<fePointLight>`, `<feSpotLight>`

#### Phần tử không bao giờ được hiển thị (Never-rendered elements)
`<clipPath>`, `<defs>`, `<linearGradient>`, `<marker>`, `<mask>`, `<metadata>`, `<pattern>`, `<radialGradient>`, `<script>`, `<style>`, `<symbol>`, `<title>`

#### Phần tử máy chủ vẽ (Paint server elements)
`<linearGradient>`, `<pattern>`, `<radialGradient>`

#### Phần tử có thể hiển thị (Renderable elements)
`<a>`, `<circle>`, `<ellipse>`, `<foreignObject>`, `<g>`, `<image>`, `<line>`, `<path>`, `<polygon>`, `<polyline>`, `<rect>`, `<svg>`, `<switch>`, `<symbol>`, `<text>`, `<textPath>`, `<tspan>`, `<use>`

#### Phần tử cấu trúc (Structural elements)
`<defs>`, `<g>`, `<svg>`, `<symbol>`, `<use>`

#### Phần tử con của nội dung văn bản (Text content child elements)
`<textPath>`, `<tspan>`

#### Phần tử không phân loại (Uncategorized elements)
`<clipPath>`, `<filter>`, `<foreignObject>`, `<script>`, `<style>`, `<view>`

## **`E. Hoạt ảnh và Biến đổi hình dạng SVG (Animating SVG Properties & Shape Morphing)`**

SVG cho phép tạo hoạt ảnh (animations) và biến đổi hình dạng (shape morphing) bằng CSS, sử dụng các thuộc tính và pseudo-class.

### 1. Biến đổi hình dạng SVG (SVG shape morphing)

Phần tử `<path>` có thể được ghi đè bằng CSS để tạo biến đổi hình dạng. Để quá trình biến đổi hoạt động, các đường dẫn SVG (SVG paths) phải có cùng các lệnh (commands) và cùng số điểm (number of points).

**Ví dụ**: Tạo một hình tam giác với thuộc tính `d` và biến đổi nó thành hình vuông:

SVG ban đầu:
```html
<svg height="220" width="300">
  <path d="M150 10 L40 200 L260 200Z" />
</svg>
```

Ghi đè thuộc tính `d` bằng CSS để biến đổi hình dạng và thay đổi màu:
```css
path {
  d: path("M150, 10 L40, 200 L260, 200Z"); /* Hình tam giác */
  fill: #4c6edb;
}
```

Thêm pseudo-class `:active` và thuộc tính `transition` để làm mượt quá trình biến đổi khi nhấp chuột:
```css
path:active {
  d: path("M150, 10 L40, 200 L260, 200 L260, 200Z"); /* Hình vuông */
  fill: #4c6edb;
  transition: all 0.35s ease;
}
```

Mã SVG được rút gọn sẽ là:
```html
<svg height="220" width="300">
  <path />
</svg>
```

**Ví dụ nâng cao hơn - Morphing từ heart sang star:**
```css
.morph-path {
  d: path("M12,21.35l-1.45-1.32C5.4,15.36,2,12.28,2,8.5 C2,5.42,4.42,3,7.5,3c1.74,0,3.41,0.81,4.5,2.09C13.09,3.81,14.76,3,16.5,3 C19.58,3,22,5.42,22,8.5c0,3.78-3.4,6.86-8.55,11.54L12,21.35z");
  fill: #e74c3c;
  transition: d 0.5s ease-in-out, fill 0.5s ease-in-out;
}

.morph-path:hover {
  d: path("M12,2l3.09,6.26L22,9.27l-5,4.87 L18.18,21L12,17.77L5.82,21L7,14.14L2,9.27l6.91-1.01L12,2z");
  fill: #f39c12;
}
```

### 2. Tạo hoạt ảnh cho các thuộc tính SVG (Animating SVG properties)

Các thuộc tính SVG có thể được tạo hoạt ảnh bằng CSS thông qua CSS animations (hoạt ảnh CSS) và transitions (chuyển đổi).

**Ví dụ**: Tạo hoạt ảnh sóng cho các phần tử `<circle>`:

Đầu tiên, tạo năm phần tử `<circle>`:
```html
<svg width="350" height="250">
  <circle class="shape" />
  <circle class="shape" />
  <circle class="shape" />
  <circle class="shape" />
  <circle class="shape" />
</svg>
```

Sử dụng biến CSS (CSS variables) và pseudo-class `:nth-child()` để định nghĩa các thuộc tính cơ bản và màu sắc cho mỗi hình tròn:
```css
:root {
  --color-1: #6e40aa;
  --color-2: #4c6edb;
  --color-3: #24aad8;
  --color-4: #1ac7c2;
  --color-5: #1ddea3;
}

.shape {
  cy: 50; /* Tọa độ y của tâm */
  r: 20;  /* Bán kính */
}

.shape:nth-child(1) { cx: 60; fill: var(--color-1); }
.shape:nth-child(2) { cx: 120; fill: var(--color-2); }
.shape:nth-child(3) { cx: 180; fill: var(--color-3); }
.shape:nth-child(4) { cx: 240; fill: var(--color-4); }
.shape:nth-child(5) { cx: 300; fill: var(--color-5); }
```

Định nghĩa hoạt ảnh `moveCircle` bằng `@keyframes` để thay đổi `cy` và `r`:
```css
@keyframes moveCircle {
  50% { 
    cy: 150; 
    r: 13; 
  }
}
```

Áp dụng hoạt ảnh và làm cho nó chạy vô hạn:
```css
.shape {
  /* ...các thuộc tính khác */
  animation: moveCircle 1250ms ease-in-out both infinite;
}
```

Thêm `animation-delay` cho mỗi hình tròn (trừ hình đầu tiên) để tạo hiệu ứng sóng:
```css
.shape:nth-child(2) { animation-delay: 100ms; }
.shape:nth-child(3) { animation-delay: 200ms; }
.shape:nth-child(4) { animation-delay: 300ms; }
.shape:nth-child(5) { animation-delay: 400ms; }
```

### 3. Các ví dụ hoạt ảnh SVG khác

#### Hoạt ảnh xoay (Rotation Animation)
```css
.rotating-element {
  transform-origin: center;
  animation: rotate 2s linear infinite;
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
```

#### Hoạt ảnh stroke-dasharray (Vẽ đường)
```css
.draw-line {
  stroke-dasharray: 100;
  stroke-dashoffset: 100;
  animation: draw 2s ease-in-out forwards;
}

@keyframes draw {
  to {
    stroke-dashoffset: 0;
  }
}
```

#### Hoạt ảnh scale (Thu phóng)
```css
.pulse-animation {
  animation: pulse 1.5s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { 
    transform: scale(1); 
    opacity: 1; 
  }
  50% { 
    transform: scale(1.2); 
    opacity: 0.7; 
  }
}
```

#### Hoạt ảnh màu sắc gradient
```css
.color-changing {
  animation: colorShift 3s ease-in-out infinite;
}

@keyframes colorShift {
  0% { fill: #ff6b6b; }
  25% { fill: #4ecdc4; }
  50% { fill: #45b7d1; }
  75% { fill: #f9ca24; }
  100% { fill: #ff6b6b; }
}
```

## **`F. Các kỹ thuật nâng cao với SVG`**

### 1. Sử dụng Gradients
```html
<svg>
  <defs>
    <linearGradient id="rainbow" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#ff0000;stop-opacity:1" />
      <stop offset="50%" style="stop-color:#00ff00;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#0000ff;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="200" height="100" fill="url(#rainbow)" />
</svg>
```

### 2. Sử dụng Filters
```html
<svg>
  <defs>
    <filter id="glow">
      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
      <feMerge> 
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>
  <circle cx="50" cy="50" r="20" fill="yellow" filter="url(#glow)" />
</svg>
```

### 3. Clipping và Masking
```html
<svg>
  <defs>
    <clipPath id="clip-circle">
      <circle cx="50" cy="50" r="40"/>
    </clipPath>
  </defs>
  <rect width="100" height="100" fill="blue" clip-path="url(#clip-circle)" />
</svg>
```

### 4. Responsive SVG
```css
.responsive-svg {
  width: 100%;
  height: auto;
  max-width: 500px;
}

/* Maintain aspect ratio */
.svg-container {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
}

.svg-container svg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
```

## **`G. Best Practices và Tips`**

### 1. Tối ưu hóa SVG
- Sử dụng các công cụ như SVGO để giảm kích thước file
- Loại bỏ các metadata không cần thiết
- Sử dụng `<use>` element để tái sử dụng các phần tử

### 2. Accessibility
```html
<svg role="img" aria-labelledby="title" aria-describedby="desc">
  <title id="title">Biểu đồ doanh số</title>
  <desc id="desc">Biểu đồ cho thấy doanh số tăng 20% trong quý này</desc>
  <!-- Nội dung SVG -->
</svg>
```

### 3. Performance
- Sử dụng CSS transforms thay vì thay đổi thuộc tính SVG trực tiếp khi có thể
- Tránh sử dụng quá nhiều filters phức tạp
- Cân nhắc sử dụng `will-change` cho các element được animate

### 4. Browser Support
- Luôn kiểm tra tính tương thích với các trình duyệt cũ
- Cung cấp fallback cho các tính năng SVG 2
- Sử dụng feature detection khi cần thiết

---

**Kết luận**

SVG là một công nghệ mạnh mẽ cho việc tạo đồ họa vector có thể mở rộng và tương tác. Với khả năng kết hợp với CSS và JavaScript, SVG mở ra nhiều khả năng sáng tạo cho web developers. Hiểu rõ các khái niệm cơ bản và kỹ thuật nâng cao sẽ giúp bạn tận dụng tối đa tiềm năng của SVG trong các dự án web của mình.

