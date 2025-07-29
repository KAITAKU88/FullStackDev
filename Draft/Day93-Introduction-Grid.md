# Introduction to CSS Grid

## Giới thiệu chung: Flexbox và CSS Grid

**Flexbox** và **CSS Grid** là hai mô-đun bố cục mạnh mẽ trong CSS, được thiết kế để làm cho việc sắp xếp các phần tử trên trang web dễ dàng hơn nhiều so với các kỹ thuật trước đây. Tuy nhiên, điều quan trọng cần hiểu là **chúng không phải là công cụ thay thế cho nhau**. Thay vào đó, chúng được phát minh để giải quyết các vấn đề bố cục khác nhau và thường được sử dụng cùng nhau như một phần của bức tranh lớn hơn trong CSS. Bạn sẽ sử dụng Grid ở một số phần của trang và không sử dụng ở những phần khác, kết hợp nó với Flexbox, luồng cơ bản (basic flow), floats và các công cụ khác.

### Ví dụ kết hợp Flexbox và Grid:

```css
/* Grid cho bố cục tổng thể */
.main-layout {
  display: grid;
  grid-template-areas: 
    "header header"
    "sidebar content"
    "footer footer";
  grid-template-columns: 250px 1fr;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}

/* Flexbox cho thanh điều hướng */
.header {
  grid-area: header;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}

.nav-menu {
  display: flex;
  gap: 2rem;
  list-style: none;
}

/* Grid cho nội dung chính */
.content {
  grid-area: content;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem;
}
```

## Flexbox (Flexible Box Layout Module)

### Tổng quan về Flexbox:

- Flexbox rất phù hợp khi bạn muốn căn chỉnh các mục theo **một hướng** (one direction). Hãy tưởng tượng nó như một tập hợp các hộp được xếp thành một hàng dài vô tận, nhưng trong không gian giới hạn, nên chúng có thể **ngắt dòng** (wrap) hoặc không.
- Khi sử dụng Flexbox, các phép tính được thực hiện từng dòng một. Trình duyệt chỉ xử lý mọi thứ theo **một chiều** (one dimension) tại một thời điểm. Điều này có nghĩa là nếu bạn có nhiều hàng, Flexbox sẽ không tính toán thông tin giữa các hàng đó.
- "Vẻ đẹp thực sự của Flexbox" nằm ở khả năng các mục có thể "flex" – **co giãn** (stretch out) hoặc **thu nhỏ** (shrink down) để phù hợp với không gian.
- Flexbox cung cấp một công cụ tiện lợi cho các **bố cục một chiều** (one-dimensional layouts) mà không cần phải dựa vào floats hoặc các thủ thuật CSS phức tạp để căn chỉnh các mục đúng cách.
- Trong Flexbox, hầu hết các công việc bố cục (ngoài những điều rất cơ bản) xảy ra **trên các phần tử con** (on the children).

### Ví dụ cơ bản về Flexbox:

```css
/* Container flex cơ bản */
.flex-container {
  display: flex;
  justify-content: space-between; /* Căn chỉnh theo trục chính */
  align-items: center; /* Căn chỉnh theo trục phụ */
  gap: 1rem; /* Khoảng cách giữa các item */
}

/* Flex item có thể co giãn */
.flex-item {
  flex: 1; /* flex-grow: 1, flex-shrink: 1, flex-basis: 0% */
  padding: 1rem;
  background: #f0f0f0;
}

/* Item đặc biệt không co giãn */
.flex-item-fixed {
  flex: 0 0 200px; /* Cố định 200px, không co giãn */
}
```

### Khi nào sử dụng Flexbox:

#### 1. Căn chỉnh mục theo một hàng hoặc một cột:

```css
/* Hàng ngang */
.horizontal-flex {
  display: flex;
  flex-direction: row;
  gap: 1rem;
}

/* Cột dọc */
.vertical-flex {
  display: flex;
  flex-direction: column;
  height: 100vh;
  gap: 1rem;
}
```

#### 2. Căn chỉnh các phần tử bên trong một khối:

```css
/* Thanh điều hướng */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  height: 60px;
  background: #333;
}

.nav-brand {
  color: white;
  font-weight: bold;
}

.nav-links {
  display: flex;
  gap: 2rem;
  list-style: none;
}

/* Căn giữa hoàn hảo */
.center-content {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
```

#### 3. Đẩy các phần tử ra xa:

```css
.push-apart {
  display: flex;
  gap: 1rem;
}

.push-right {
  margin-left: auto; /* Đẩy element này và tất cả sau nó sang phải */
}

/* Ví dụ thực tế */
.header-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.user-menu {
  margin-left: auto; /* Đẩy menu user về phía bên phải */
}
```

### Hạn chế của Flexbox:

#### 1. Khó khăn với bố cục hai chiều:

```css
/* Bố cục card với Flexbox - có thể gây khó chịu */
.card-layout-flex {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.card {
  flex: 1 1 300px; /* Các card có thể có chiều rộng khác nhau */
  min-height: 200px;
  /* Không thể đảm bảo tất cả card cùng chiều cao */
}
```

#### 2. Chồng chéo phức tạp:

```css
/* Cần dùng absolute positioning hoặc transform */
.overlap-with-flex {
  position: relative;
}

.overlap-item {
  position: absolute; /* Phải thoát khỏi flex flow */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

## CSS Grid (CSS Grid Layout Module)

### Tổng quan về CSS Grid:

- Grid có khả năng căn chỉnh mọi thứ theo **hai hướng** (two directions) – cả hàng và cột cùng một lúc.
- Grid luôn muốn căn chỉnh mọi thứ theo **hai chiều** (two directions). Nó nghĩ về hàng và cột cùng một lúc, và sẽ điều chỉnh lưới của bạn dựa trên những gì đang diễn ra ở cả hai hướng.
- Grid được ca ngợi vì khả năng **dễ dàng đặt các mục trong bố cục hai chiều** (two-dimensional layout).
- Mặc dù Grid thường được biết đến với bố cục 2D, nó cũng có thể được sử dụng cho **bố cục một chiều** (one-dimensional layouts). Một lợi thế là nếu bạn bắt đầu chỉ với một hàng, bạn có thể dễ dàng thêm các hàng bổ sung sau này.
- Grid chủ yếu được định nghĩa **trên phần tử cha** (on the parent element). Bạn có thể khai báo kích thước của các hàng và cột, sau đó đặt các mục một cách rõ ràng vào cả hàng và cột mà bạn chọn.

### Ví dụ cơ bản về CSS Grid:

```css
.parent {
  display: grid;
  grid-template-columns: 1fr 3fr 1fr; /* Ba cột, cột giữa rộng gấp 3 lần */
  grid-template-rows: 200px auto 100px; /* Ba hàng với chiều cao cụ thể */
  grid-template-areas: 
    "header header header"
    ". main sidebar"
    "footer . .";
  gap: 1rem;
}

/* Đặt các phần tử vào vùng đã định nghĩa */
.child-1 { grid-area: header; }
.child-2 { grid-area: main; }
.child-3 { grid-area: sidebar; }
.child-4 { grid-area: footer; }
```

### Khi nào sử dụng CSS Grid:

#### 1. Bố cục trang tổng thể:

```css
/* Bố cục trang web cơ bản */
.page-layout {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar main ads"
    "footer footer footer";
  grid-template-columns: 200px 1fr 150px;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  gap: 1rem;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.ads { grid-area: ads; }
.footer { grid-area: footer; }

/* Responsive */
@media (max-width: 768px) {
  .page-layout {
    grid-template-areas:
      "header"
      "main"
      "sidebar"
      "footer";
    grid-template-columns: 1fr;
  }
}
```

#### 2. Bố cục phức tạp với các vùng được xác định rõ ràng:

```css
/* Bố cục card với Grid - dễ dàng hơn nhiều */
.card-layout-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  align-items: start; /* Tất cả card cùng bắt đầu từ trên */
}

.card {
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  /* Tự động có cùng chiều rộng trong grid */
}

/* Dashboard layout phức tạp */
.dashboard {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(8, 100px);
  gap: 1rem;
}

.widget-large {
  grid-column: span 6;
  grid-row: span 4;
}

.widget-medium {
  grid-column: span 4;
  grid-row: span 2;
}

.widget-small {
  grid-column: span 2;
  grid-row: span 2;
}
```

#### 3. Chồng chéo các phần tử:

```css
/* Chồng chéo dễ dàng với Grid */
.image-overlay {
  display: grid;
  grid-template: 1fr / 1fr; /* 1 hàng, 1 cột */
  place-items: center;
}

.image-overlay > * {
  grid-area: 1 / 1; /* Tất cả con đều ở cùng vị trí */
}

.background-image {
  width: 100%;
  height: 400px;
  object-fit: cover;
}

.overlay-text {
  background: rgba(0,0,0,0.7);
  color: white;
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  z-index: 1;
}

/* Hero section với nhiều layer */
.hero {
  display: grid;
  grid-template: 500px / 1fr;
  place-items: center;
}

.hero-bg,
.hero-overlay,
.hero-content {
  grid-area: 1 / 1;
}

.hero-bg {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-overlay {
  background: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5));
}

.hero-content {
  z-index: 2;
  text-align: center;
  color: white;
  max-width: 600px;
  padding: 2rem;
}
```

#### 4. Tạo các mục có kích thước đều nhau:

```css
/* Grid tự động tạo kích thước đều */
.equal-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 cột bằng nhau */
  gap: 1rem;
}

/* Auto-fit với kích thước tối thiểu */
.responsive-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

/* Masonry-like layout */
.masonry-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: min-content;
  gap: 1rem;
}
```

## Lịch sử và Quá trình phát triển của CSS Grid

### Ý tưởng ban đầu:
Mặc dù Grid là một mô-đun mới hơn đối với CSS, công cụ bố cục này đã được phát triển từ lâu. Dr. Bert Bos (người đồng sáng tạo CSS) đã bắt đầu nghiên cứu mô hình bố cục này từ năm 1996, lấy cảm hứng từ việc sử dụng các bố cục dạng lưới trong các phương tiện truyền thông khác như báo và tạp chí.

### Những nỗ lực ban đầu không thành công:
Các ý tưởng ban đầu như mô hình bố cục "frame-based" (1996) hay Advanced Layout Module (2005) không bao giờ được triển khai trong trình duyệt. Các nhà sản xuất trình duyệt ban đầu cho rằng ý tưởng này "quá phức tạp".

### Sự thúc đẩy từ Microsoft:
Năm 2011, nhóm UI của Microsoft, dưới sự lãnh đạo của Phil Cupp, đã tìm kiếm một công cụ bố cục mạnh mẽ hơn cho sản phẩm Microsoft Intune của họ. Họ đã đưa một đề xuất cho grid layout và triển khai nó trong Internet Explorer 10 dưới tiền tố `-ms-`.

### Phát triển tiêu chuẩn:
Bản nháp (draft spec) của Microsoft được trình lên W3C vào năm 2012. Điều khác biệt lần này là họ có một bản triển khai thực tế để đánh giá. Các chuyên gia như Rachel Andrew và Elika Etemad đã bắt đầu thử nghiệm và đóng góp vào sự phát triển của tiêu chuẩn.

### Sự hoàn thiện của tiêu chuẩn:
Nhóm làm việc CSS (CSS Working Group) đã kết hợp các ý tưởng từ đề xuất của Microsoft, ý tưởng của Bert Bos về giao diện trực quan (như định dạng nghệ thuật ASCII để tạo mẫu), và khái niệm "grid lines" của Peter Linss.

### Ba mục tiêu chính:
Trong quá trình thiết kế, nhóm làm việc CSS có ba mục tiêu chính: Grid cần phải **Mạnh mẽ** (Powerful), **Vững chắc** (Robust), và có **Hiệu suất cao** (Performant).

### Thách thức triển khai:
Việc triển khai grid layout đòi hỏi nhiều nỗ lực kỹ thuật. Microsoft ban đầu do dự sau sự thất bại của CSS Regions.

### Sự thúc đẩy từ cộng đồng:
Igalia, một công ty tư vấn mã nguồn mở được Bloomberg thuê, đã triển khai CSS Grid cho cả Blink và WebKit. Cùng với sự nhiệt tình và các bản demo từ các nhà thiết kế như Rachel Andrew và Jen Simmons, cộng đồng đã tạo áp lực lớn lên các nhà cung cấp trình duyệt để triển khai Grid.

### Ra mắt rộng rãi:
Nhờ nỗ lực chung, CSS Grid đã được triển khai trong tất cả các trình duyệt lớn trong năm 2017. Google triển khai vào tháng 1/2017, Mozilla (Firefox) vào đầu tháng 3, Opera và Safari cũng sớm theo sau. Microsoft (Edge) là công ty cuối cùng ra mắt triển khai của mình. Sự ra mắt gần như đồng thời này đã giúp Grid nhanh chóng trở thành một công cụ bố cục quan trọng.

## So sánh và Phối hợp giữa Flexbox và CSS Grid

Có rất nhiều điểm tương đồng giữa Flexbox và Grid, chẳng hạn như cả hai đều dùng để bố cục, mạnh mẽ hơn các kỹ thuật trước đây, có thể co giãn, căn giữa, sắp xếp lại và căn chỉnh mọi thứ.

### Số chiều (Dimensionality):

**Flexbox là "một chiều" (one dimensional):** Nó căn chỉnh các mục theo một trục duy nhất (ngang hoặc dọc). Mặc dù nó có thể ngắt dòng (wrap) để tạo ra nhiều hàng/cột, nhưng sự căn chỉnh trên các dòng/cột tiếp theo lại độc lập với dòng/cột đầu tiên, cho phép tạo ra giao diện giống như masonry.

```css
/* Flexbox - các hàng độc lập */
.flex-masonry {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 600px;
}

.flex-item {
  width: 200px;
  margin-bottom: 1rem;
  /* Chiều cao có thể khác nhau, tạo hiệu ứng masonry */
}
```

**CSS Grid là "hai chiều" (two dimensional):** Nó cho phép bạn xác định rõ ràng kích thước của cả hàng và cột, sau đó đặt các mục vào cả hai chiều này. Khi các mục ngắt dòng (auto filling), chúng sẽ tự động căn chỉnh theo các đường lưới tương tự như các phần tử khác.

```css
/* Grid - tất cả items căn chỉnh theo lưới */
.grid-layout {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 200px;
  gap: 1rem;
}

.grid-item {
  /* Tất cả items đều tuân theo cùng một lưới */
}
```

**Lưu ý:** Mặc dù Grid là 2D, nó vẫn rất tuyệt vời cho các bố cục 1D. Đừng nghĩ rằng bạn chỉ phải dùng Flexbox khi cần 1D.

### Kiểm soát bố cục:

**Flexbox:** Hầu hết công việc bố cục xảy ra **trên các phần tử con** (on the children).

```css
.flex-parent {
  display: flex;
  gap: 1rem;
}

.flex-child-1 {
  flex: 2; /* Chiếm 2 phần */
}

.flex-child-2 {
  flex: 1; /* Chiếm 1 phần */
}

.flex-child-3 {
  flex: 0 0 200px; /* Cố định 200px */
}
```

**CSS Grid:** Chủ yếu được định nghĩa **trên phần tử cha** (on the parent element).

```css
.grid-parent {
  display: grid;
  grid-template-columns: 2fr 1fr 200px; /* Định nghĩa tất cả trên parent */
  gap: 1rem;
}

.grid-child {
  /* Không cần định nghĩa gì thêm */
}
```

### Chồng chéo (Overlapping):

**Grid mạnh mẽ hơn trong việc chồng chéo** (better at overlapping):

```css
.grid-overlap {
  display: grid;
  grid-template: repeat(3, 100px) / repeat(3, 100px);
}

.item-1 {
  grid-area: 1 / 1 / 3 / 3; /* Hàng 1-3, cột 1-3 */
  background: red;
}

.item-2 {
  grid-area: 2 / 2 / 4 / 4; /* Hàng 2-4, cột 2-4 - chồng lên item-1 */
  background: blue;
}
```

**Flexbox:** Để chồng chéo, bạn cần sử dụng các kỹ thuật cũ hơn:

```css
.flex-overlap {
  display: flex;
  position: relative;
}

.flex-item-overlap {
  position: absolute;
  top: 50px;
  left: 50px;
  /* Phải thoát khỏi flex flow */
}
```

### Độ vững chắc và tính toán kích thước:

**Grid vững chắc hơn** (sturdier):

```css
.grid-sturdy {
  display: grid;
  grid-template-columns: 200px 1fr 150px; /* Rõ ràng và dự đoán được */
}
```

**Flexbox:** Kích thước phức tạp hơn:

```css
.flex-complex {
  display: flex;
}

.flex-item-complex {
  width: 200px;           /* Base width */
  min-width: 150px;       /* Minimum width */
  max-width: 300px;       /* Maximum width */
  flex-basis: 200px;      /* Initial size */
  flex-grow: 1;           /* Grow factor */
  flex-shrink: 0.5;       /* Shrink factor */
  /* Kích thước cuối cùng phụ thuộc vào nhiều yếu tố */
}
```

### Thuộc tính `gap`:

```css
/* Cả hai đều hỗ trợ gap */
.flex-with-gap {
  display: flex;
  gap: 1rem 2rem; /* row-gap column-gap */
}

.grid-with-gap {
  display: grid;
  gap: 1rem 2rem; /* row-gap column-gap */
  grid-template-columns: repeat(3, 1fr);
}
```

### Phối hợp (Mixing and Pairing):

Bạn sẽ thấy rất hữu ích khi **kết hợp Flexbox và Grid cùng nhau**:

```css
/* Grid cho bố cục tổng thể */
.page-layout {
  display: grid;
  grid-template-areas:
    "header"
    "main"
    "footer";
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}

/* Flexbox cho header */
.header {
  grid-area: header;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}

/* Grid cho main content */
.main {
  grid-area: main;
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 2rem;
  padding: 2rem;
}

/* Flexbox cho sidebar */
.sidebar {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

/* Flexbox cho footer */
.footer {
  grid-area: footer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}
```

## Mục đích và Cách Chọn:

**Một cách tổng quát hóa phổ biến là:**
- **Flexbox là để căn chỉnh** (alignment)
- **CSS Grid là để bố cục** (layout)

**Nguyên tắc chọn lựa:**
- Sử dụng **Grid** khi bạn đã có cấu trúc bố cục trong đầu (layout first)
- Sử dụng **Flexbox** khi bạn chỉ muốn mọi thứ phù hợp (content first)

### Ví dụ so sánh cụ thể:

```css
/* Layout first - dùng Grid */
.article-layout {
  display: grid;
  grid-template-areas:
    "title title"
    "content sidebar"
    "tags tags";
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
}

/* Content first - dùng Flexbox */
.button-group {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap; /* Cho phép wrap khi cần */
}

.button {
  padding: 0.5rem 1rem;
  /* Kích thước phụ thuộc vào nội dung */
}
```

## Tương lai của bố cục CSS

Với sự hỗ trợ rộng rãi của Grid, chúng ta có thể và nên bắt đầu sử dụng công cụ tuyệt vời này. Grid đại diện cho một cách tư duy bố cục hoàn toàn mới, nơi bạn có thể bắt đầu với bố cục trước, sau đó đưa các phần tử khác nhau vào bố cục đó.

### Ví dụ về tư duy mới với Grid:

```css
/* Tư duy cũ: Định nghĩa từng element */
.old-layout .header { width: 100%; }
.old-layout .sidebar { width: 200px; float: left; }
.old-layout .main { margin-left: 200px; }

/* Tư duy mới: Định nghĩa bố cục trước */
.new-layout {
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar main";
  grid-template-columns: 200px 1fr;
}

/* Sau đó gán các element vào bố cục */
.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
```

CSS Grid không phải là dấu chấm hết; nó chỉ là sự khởi đầu. Các ý tưởng khác như **CSS Exclusions** (cho phép bọc văn bản quanh các hình dạng không phải hình chữ nhật) và **CSS Regions** (cho phép nội dung chảy qua các vùng được xác định trước trên trang) vẫn đang được nghiên cứu và có thể được cải thiện cùng với Grid trong tương lai.

### CSS Exclusions - Ví dụ tương lai:

```css
/* Tương lai có thể sẽ có syntax như thế này */
.exclusion-shape {
  float: left;
  shape-outside: circle(50%);
  exclusion: outside;
  width: 200px;
  height: 200px;
}

.flowing-text {
  /* Văn bản sẽ tự động bọc quanh hình tròn */
}
```

### CSS Regions - Ví dụ tương lai:

```css
/* Tương lai có thể sẽ có syntax như thế này */
.content-source {
  flow-into: article-flow;
}

.region-1, .region-2, .region-3 {
  flow-from: article-flow;
  /* Nội dung sẽ tự động chảy từ region này sang region khác */
}
```

Grid đưa CSS trở lại đúng với mục đích ban đầu của nó: một ngôn ngữ định kiểu và bố cục giúp tách biệt logic khỏi đánh dấu (markup), cho phép phân tách nội dung và kiểu dáng một cách rõ ràng.

## Các Kỹ Thuật Grid Nâng Cao

### 1. Implicit Grid (Lưới Ẩn)

```css
.implicit-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 150px; /* Định nghĩa chiều cao cho các hàng tự động tạo */
  gap: 1rem;
}

/* Nếu có nhiều hơn 3 items, Grid sẽ tự động tạo hàng mới */
```

### 2. Grid Functions

```css
.advanced-grid {
  display: grid;
  
  /* minmax() - kích thước tối thiểu và tối đa */
  grid-template-columns: minmax(200px, 1fr) minmax(300px, 2fr);
  
  /* repeat() với auto-fit và auto-fill */
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  
  /* fit-content() - vừa đủ với nội dung */
  grid-template-columns: fit-content(200px) 1fr fit-content(150px);
}
```

### 3. Subgrid (CSS Grid Level 2)

```css
.main-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}

.subgrid-item {
  grid-column: span 2;
  display: grid;
  grid-template-columns: subgrid; /* Kế thừa cột từ parent grid */
  gap: inherit;
}
```

### 4. Container Queries với Grid

```css
.responsive-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}

/* Container queries sẽ cho phép responsive dựa trên kích thước container */
@container (min-width: 600px) {
  .responsive-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
}
```

## Thực Hành Tốt Nhất (Best Practices)

### 1. Đặt Tên Grid Areas Có Ý Nghĩa

```css
/* Tốt */
.layout {
  grid-template-areas:
    "header header header"
    "sidebar content ads"
    "footer footer footer";
}

/* Không tốt */
.layout {
  grid-template-areas:
    "a a a"
    "b c d"
    "e e e";
}
```

### 2. Sử Dụng CSS Custom Properties

```css
:root {
  --sidebar-width: 250px;
  --content-gap: 2rem;
  --header-height: 80px;
}

.layout {
  display: grid;
  grid-template-columns: var(--sidebar-width) 1fr;
  grid-template-rows: var(--header-height) 1fr auto;
  gap: var(--content-gap);
}
```

### 3. Fallbacks cho Trình Duyệt Cũ

```css
/* Fallback cho trình duyệt không hỗ trợ Grid */
.grid-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.grid-item {
  flex: 1 1 300px;
}

/* Modern Grid */
@supports (display: grid) {
  .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
  
  .grid-item {
    flex: none; /* Reset flex properties */
  }
}
```

### 4. Accessibility với Grid

```css
.accessible-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}

/* Giữ thứ tự DOM logic cho screen readers */
.grid-item-1 { order: 1; }
.grid-item-2 { order: 2; }
.grid-item-3 { order: 3; }

/* Chỉ thay đổi visual order khi cần thiết */
@media (min-width: 1024px) {
  .grid-item-featured {
    grid-column: 1 / -1; /* Span toàn bộ chiều rộng */
    order: -1; /* Đưa lên đầu */
  }
}
```

## Các Pattern Phổ Biến

### 1. Holy Grail Layout

```css
.holy-grail {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar content ads"
    "footer footer footer";
  grid-template-columns: 200px 1fr 150px;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}

@media (max-width: 768px) {
  .holy-grail {
    grid-template-areas:
      "header"
      "content"
      "sidebar"
      "ads"
      "footer";
    grid-template-columns: 1fr;
  }
}
```

### 2. Card Grid với Auto-Placement

```css
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  align-items: start;
}

.card {
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Featured card spans 2 columns */
.card--featured {
  grid-column: span 2;
}

/* Tall card spans 2 rows */
.card--tall {
  grid-row: span 2;
}
```

### 3. Sidebar Layout với Breakpoint

```css
.sidebar-layout {
  display: grid;
  gap: 2rem;
  /* Mobile first - single column */
  grid-template-columns: 1fr;
}

@media (min-width: 768px) {
  .sidebar-layout {
    grid-template-columns: 250px 1fr;
  }
  
  .sidebar {
    position: sticky;
    top: 2rem;
    height: fit-content;
  }
}
```

### 4. Magazine Layout

```css
.magazine-layout {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-auto-rows: 200px;
  gap: 1rem;
}

.article--hero {
  grid-column: 1 / 4;
  grid-row: 1 / 3;
}

.article--secondary {
  grid-column: 4 / 7;
  grid-row: 1 / 2;
}

.article--small {
  grid-column: span 2;
  grid-row: span 1;
}
```

## Debug và Development Tools

### 1. Firefox Grid Inspector

```css
/* Thêm class này để dễ debug */
.debug-grid {
  display: grid;
  /* Firefox sẽ hiển thị grid lines khi inspect */
}
```

### 2. Chrome DevTools Grid

```css
.grid-container {
  display: grid;
  /* Chrome DevTools sẽ có badge "grid" để toggle overlay */
}
```

### 3. CSS cho Development

```css
/* Development helper */
.grid-debug {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1rem;
  min-height: 100vh;
}

.grid-debug > * {
  background: rgba(255, 0, 0, 0.1);
  border: 1px solid red;
  padding: 1rem;
}

/* Hiển thị grid line numbers */
.grid-debug::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    repeating-linear-gradient(
      to right,
      transparent,
      transparent calc(100% / 12 - 1px),
      red calc(100% / 12 - 1px),
      red calc(100% / 12)
    );
  pointer-events: none;
  z-index: 1000;
}
```

## Kết Luận

CSS Grid đã thay đổi hoàn toàn cách chúng ta nghĩ về bố cục web. Từ việc phải hack với floats và clearfix, đến việc có một công cụ mạnh mẽ cho phép chúng ta tạo ra các bố cục phức tạp một cách trực quan và dễ hiểu.

### Điểm Quan Trọng Cần Nhớ:

1. **Grid và Flexbox bổ sung cho nhau** - không phải thay thế
2. **Grid cho bố cục 2D** - Flexbox cho căn chỉnh 1D  
3. **Grid định nghĩa trên parent** - Flexbox định nghĩa trên children
4. **Grid mạnh trong chồng chéo** - Flexbox cần tricks bổ sung
5. **Cả hai đều có thể responsive** và hiện đại

### Lời Khuyên Cuối:

- Bắt đầu với Grid cho bố cục tổng thể
- Sử dụng Flexbox cho các component nhỏ
- Thực hành với các pattern phổ biến
- Luôn nghĩ về accessibility và performance
- Sử dụng development tools để debug

Hy vọng tài liệu này giúp bạn hiểu rõ hơn về Flexbox và CSS Grid, và tự tin áp dụng chúng vào các dự án thực tế!

## Tài liệu phải đọc khi ĐÓNG CỌC LẦN 2
1. https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-introduction-to-grid
1. https://www.youtube.com/watch?v=hs3piaN4b5I
1. https://css-tricks.com/quick-whats-the-difference-between-flexbox-and-grid/
1. https://alistapart.com/article/the-story-of-css-grid-from-its-creators/1. 

> ⭐ **Theo dõi [kênh Threads](https://www.threads.com/@kaitaku.88) để đọc bài mới mỗi ngày!** ⭐  

**[<== Bài Trước  ](link)          |[  Trang Chủ  ](./README.md)|           [  Bài Sau ==>](link)** 