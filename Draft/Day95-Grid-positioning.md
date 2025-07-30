# Day  95: Positioning Grid Elements

**CSS Grid Layout** là một hệ thống bố cục hai chiều mạnh mẽ (two-dimensional layout system). Nó cho phép bạn tổ chức nội dung theo cả hàng (rows) và cột (columns) cùng một lúc, khác với **Flexbox** vốn là bố cục một chiều (one-dimensional layout). CSS Grid Layout triển khai **CSS Box Alignment**, một tiêu chuẩn chung mà cả Flexbox cũng sử dụng để căn chỉnh các phần tử (element alignment).

## Các thành phần cơ bản của một lưới (Grid)

Để hiểu cách định vị và căn chỉnh trong Grid, điều quan trọng là phải nắm rõ các thành phần cấu tạo nên một lưới (grid components):

### 1. Đường lưới (Grid Lines)

- Khi bạn định nghĩa các rãnh lưới (grid tracks), các đường lưới được tạo ra một cách **ngầm định (implicitly)**. Bạn không thể tạo đường lưới một cách tường minh (explicitly).
- Các đường lưới được đánh số bắt đầu từ **1**, từ trái sang phải và từ trên xuống dưới (line numbering). Ví dụ, một lưới 3x3 sẽ có các đường cột từ 1 đến 4 và các đường hàng từ 1 đến 4.
- Trong ngôn ngữ từ trái sang phải như tiếng Anh, đường lưới số 1 là ở phía bên trái của lưới (left-to-right). Đối với ngôn ngữ từ phải sang trái (ví dụ tiếng Ả Rập), đường lưới số 1 sẽ ở phía bên phải (right-to-left).
- Các công cụ phát triển của trình duyệt (Browser Developer Tools) có thể hiển thị các đường lưới, bao gồm cả các số âm (ví dụ: `-1` cho đường cuối cùng, `-2` cho đường thứ hai cuối cùng), cung cấp thêm tùy chọn để định vị (positioning options).

**Ví dụ về Grid Lines:**
```css
.grid-container {
  display: grid;
  grid-template-columns: 100px 100px 100px; /* Tạo 4 đường cột (1,2,3,4) */
  grid-template-rows: 50px 50px;           /* Tạo 3 đường hàng (1,2,3) */
  gap: 10px;
}

/* Phần tử này sẽ nằm từ đường cột 1 đến 3, đường hàng 1 đến 2 */
.item {
  grid-column: 1 / 3;
  grid-row: 1 / 2;
  background: lightblue;
}
```

### 2. Rãnh lưới (Grid Tracks)

- Một rãnh lưới là một hàng hoặc một cột riêng lẻ trên lưới (individual row or column). Khi bạn định nghĩa một lưới bằng `grid-template`, bạn đang định nghĩa các rãnh mà lưới sẽ có (defining tracks).
- Mỗi rãnh đều có một đường bắt đầu và một đường kết thúc (start and end lines).

**Ví dụ về Grid Tracks:**
```css
.grid-container {
  display: grid;
  /* Tạo 3 rãnh cột, mỗi rãnh rộng 1fr */
  grid-template-columns: 1fr 1fr 1fr;
  /* Tạo 2 rãnh hàng, mỗi rãnh cao 100px */
  grid-template-rows: 100px 100px;
}

/* Track 1: Cột đầu tiên (giữa đường 1 và 2) */
/* Track 2: Cột thứ hai (giữa đường 2 và 3) */  
/* Track 3: Cột thứ ba (giữa đường 3 và 4) */
```

### 3. Ô lưới (Grid Cells)

- **Ô lưới** là không gian được chia sẻ bởi một rãnh hàng và một rãnh cột đơn lẻ (intersection of row and column track).
- Bạn có thể hình dung một ô lưới giống như một ô trong bảng tính (spreadsheet cell).
- Theo mặc định, mỗi phần tử con của một **grid container** sẽ chiếm một ô (one cell). Ô lưới là đơn vị nhỏ nhất trên một lưới (smallest unit).

**Ví dụ về Grid Cells:**
```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(2, 100px);
  gap: 5px;
}

/* Mỗi div con sẽ tự động chiếm một ô */
.cell-1 { background: red; }     /* Ô (1,1) */
.cell-2 { background: green; }   /* Ô (1,2) */
.cell-3 { background: blue; }    /* Ô (1,3) */
.cell-4 { background: yellow; }  /* Ô (2,1) */
.cell-5 { background: purple; }  /* Ô (2,2) */
.cell-6 { background: orange; }  /* Ô (2,3) */
```

## Các trục (Axes) trong bố cục lưới

Khi làm việc với Grid Layout, bạn có hai trục để căn chỉnh mọi thứ (alignment axes):

### Trục khối (Block Axis)
Là trục mà các khối (blocks) được bố trí trong bố cục khối (block layout). Ví dụ, nếu bạn có hai đoạn văn (paragraphs) trên trang, chúng sẽ hiển thị cái này bên dưới cái kia, do đó hướng này được mô tả là trục khối (thường là trục dọc - vertical axis).

### Trục nội tuyến (Inline Axis)
Chạy ngang qua trục khối (perpendicular to block axis). Đây là hướng mà văn bản trong luồng nội tuyến thông thường chạy (thường là trục ngang, từ trái sang phải đối với tiếng Anh - horizontal axis).

**Ví dụ minh họa các trục:**
```css
.grid-demo {
  display: grid;
  grid-template-columns: 200px 200px;
  grid-template-rows: 100px 100px;
  gap: 20px;
  
  /* Căn chỉnh trên Block Axis (dọc) */
  align-items: center;    /* Căn giữa theo chiều dọc */
  
  /* Căn chỉnh trên Inline Axis (ngang) */
  justify-items: center;  /* Căn giữa theo chiều ngang */
}

.demo-item {
  background: lightcoral;
  padding: 10px;
}
```

Bạn có thể căn chỉnh nội dung bên trong các vùng lưới (grid areas) và chính các rãnh lưới (grid tracks) trên hai trục này (content alignment on both axes).

## Căn chỉnh các phần tử bên trong vùng lưới (Aligning Items)

Các thuộc tính `align-self`, `align-items`, `justify-self`, và `justify-items` được sử dụng để căn chỉnh các phần tử con bên trong vùng lưới mà chúng được đặt vào (item alignment within grid areas).

### Căn chỉnh các phần tử trên trục khối (Block Axis)

#### `align-self` và `align-items`

- **`align-self`** được sử dụng trên một **grid item** để kiểm soát căn chỉnh của nó trên trục khối (individual item alignment).
- **`align-items`** được sử dụng trên **grid container** để thiết lập thuộc tính `align-self` cho tất cả các phần tử con của lưới (all items alignment).

#### Các giá trị (values):
- `normal`: Giá trị mặc định (default value), giải quyết thành `stretch` cho grid containers.
- `stretch`: Kéo dài phần tử để lấp đầy vùng lưới (fill the grid area).
- `start`: Căn chỉnh phần tử về phía bắt đầu của trục khối (align to start).
- `end`: Căn chỉnh phần tử về phía kết thúc của trục khối (align to end).
- `center`: Căn giữa phần tử trên trục khối (center alignment).
- `baseline`, `first baseline`, `last baseline`: Căn chỉnh theo đường cơ sở của văn bản (baseline alignment).
- `auto`: Chỉ dành cho `align-self` (only for align-self).

**Lưu ý**: Khi bạn đặt `align-items: start`, chiều cao của mỗi phần tử `div` con sẽ được xác định bởi nội dung của `div` đó, thay vì kéo dài để lấp đầy vùng lưới như mặc định (content-based sizing). Các phần tử có tỷ lệ khung hình tự nhiên (intrinsic aspect ratio) sẽ mặc định là `start` thay vì `stretch` để tránh bị bóp méo (avoid distortion).

**Ví dụ về `align-items`:**
```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
  gap: 10px;
  height: 400px;
}

.box1 {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 4;
  background: linear-gradient(135deg, #ff6b6b, #ee5a52);
}

.box2 {
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
  background: linear-gradient(135deg, #4ecdc4, #44a08d);
}

.box3 {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
  background: linear-gradient(135deg, #45b7d1, #96c93d);
}

.box4 {
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 3;
  grid-row-end: 4;
  background: linear-gradient(135deg, #f9ca24, #f0932b);
}
```

Bạn có thể để trống các ô nếu muốn (empty cells allowed). Các phần tử không được đặt sẽ tuân theo quy tắc **tự động đặt (auto-placement rules)**.

**Ví dụ với các ô trống:**
```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 80px);
  gap: 10px;
}

.positioned-item {
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 4;
  background: linear-gradient(45deg, #667eea, #764ba2);
  border-radius: 8px;
}

/* Các items khác sẽ tự động fill vào các ô còn trống */
.auto-item {
  background: rgba(255, 107, 107, 0.7);
  border-radius: 4px;
}
```

### Thuộc tính viết tắt (Shorthands)

Để viết code ngắn gọn hơn, bạn có thể kết hợp các thuộc tính `start` và `end`:
- **`grid-column`**: Kết hợp `grid-column-start` và `grid-column-end` (column shorthand).
- **`grid-row`**: Kết hợp `grid-row-start` và `grid-row-end` (row shorthand).

Cú pháp: `grid-column: <start-line> / <end-line>;` (shorthand syntax).

**Ví dụ viết tắt:**
```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
  gap: 10px;
}

.box1 { 
  grid-column: 1 / 2; 
  grid-row: 1 / 4; 
  background: #ff6b6b;
}

.box2 { 
  grid-column: 3 / 4; 
  grid-row: 1 / 3; 
  background: #4ecdc4;
}

.box3 { 
  grid-column: 2 / 3; 
  grid-row: 1 / 2; 
  background: #45b7d1;
}

.box4 { 
  grid-column: 2 / 4; 
  grid-row: 3 / 4; 
  background: #f9ca24;
}
```

### Mặc định trải rộng một rãnh (Default Spans)

Nếu một phần tử chỉ trải rộng một rãnh, bạn có thể bỏ qua giá trị `grid-column-end` hoặc `grid-row-end`. Grid sẽ mặc định là trải rộng một rãnh (single track span).

**Ví dụ với mặc định trải rộng (viết tắt):**
```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
  gap: 10px;
}

.box1 { 
  grid-column: 1; 
  grid-row: 1 / 4; /* Chỉ cần chỉ định end khi span nhiều rãnh */
  background: #ff6b6b;
}

.box2 { 
  grid-column: 3; 
  grid-row: 1 / 3;
  background: #4ecdc4;
}

.box3 { 
  grid-column: 2; 
  grid-row: 1; /* Mặc định span 1 rãnh */
  background: #45b7d1;
}

.box4 { 
  grid-column: 2 / 4; 
  grid-row: 3; /* Mặc định span 1 rãnh hàng */
  background: #f9ca24;
}
```

### Đếm ngược (Counting Backwards)

Bạn có thể đếm ngược từ cuối lưới bằng cách sử dụng các giá trị âm (negative line numbers). Đường cuối cùng của lưới rõ ràng (explicit grid) có thể được địa chỉ hóa là `-1`, đường thứ hai cuối cùng là `-2`, v.v. (negative indexing). Lưu ý rằng giá trị âm chỉ liên quan đến lưới rõ ràng, không tính đến các hàng hoặc cột được thêm vào trong lưới ngầm định (implicit grid) (explicit grid only).

**Ví dụ đếm ngược:**
```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 100px);
  gap: 10px;
}

.box1 { 
  grid-column: -1 / -2; /* Từ đường cuối cùng đến đường thứ 2 cuối (KHÔNG hợp lệ) */
  /* Cách đúng: */
  grid-column: -2 / -1; /* Từ đường thứ 2 cuối đến đường cuối */
  grid-row: -4 / -1;    /* Từ đường đầu đến đường cuối */
  background: #ff6b6b;
}

.box2 { 
  grid-column: 1 / -1;  /* Từ đầu đến cuối (toàn bộ chiều rộng) */
  grid-row: -2 / -1;    /* Hàng cuối cùng */
  background: #4ecdc4;
}

.box3 { 
  grid-column: -3 / -2; /* Cột thứ 2 */
  grid-row: 1 / -2;     /* Từ hàng đầu đến hàng thứ 2 */
  background: #45b7d1;
}
```

**Ví dụ thực tế với đếm ngược:**
```css
.layout {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(4, 80px);
  gap: 10px;
  height: 400px;
}

.header {
  grid-column: 1 / -1;  /* Chiếm toàn bộ chiều rộng */
  grid-row: 1;
  background: linear-gradient(90deg, #667eea, #764ba2);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

.sidebar {
  grid-column: 1;
  grid-row: 2 / -1;     /* Từ hàng 2 đến cuối */
  background: linear-gradient(180deg, #f093fb, #f5576c);
}

.main-content {
  grid-column: 2 / -2;  /* Từ cột 2 đến cột thứ 2 cuối */
  grid-row: 2 / -2;     /* Từ hàng 2 đến hàng thứ 2 cuối */
  background: linear-gradient(45deg, #4facfe, #00f2fe);
}

.footer {
  grid-column: 2 / -1;  /* Từ cột 2 đến cuối */
  grid-row: -1;         /* Hàng cuối */
  background: linear-gradient(90deg, #43e97b, #38f9d7);
}
```

Bạn có thể kéo dài một phần tử trên toàn bộ lưới bằng `grid-column: 1 / -1;` (full width span).

### Từ khóa `span`

Ngoài việc chỉ định đường bắt đầu và kết thúc bằng số, bạn có thể chỉ định một đường bắt đầu và sau đó là số lượng rãnh bạn muốn vùng đó trải rộng bằng từ khóa `span` (span keyword).

**Ví dụ với từ khóa `span`:**
```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(4, 100px);
  gap: 10px;
}

.box1 { 
  grid-column: 1; 
  grid-row: 1 / span 3; /* Bắt đầu từ hàng 1, trải rộng 3 rãnh */
  background: linear-gradient(135deg, #ff6b6b, #ee5a52);
}

.box2 { 
  grid-column: 2 / span 2; /* Bắt đầu từ cột 2, trải rộng 2 cột */
  grid-row: 1 / span 2;    /* Bắt đầu từ hàng 1, trải rộng 2 hàng */
  background: linear-gradient(135deg, #4ecdc4, #44a08d);
}

.box3 { 
  grid-column: span 2;     /* Trải rộng 2 cột từ vị trí auto */
  grid-row: 3;
  background: linear-gradient(135deg, #45b7d1, #96c93d);
}

.box4 { 
  grid-column: 4 / span 2; /* Từ cột 4, trải rộng 2 cột */
  grid-row: span 2;        /* Trải rộng 2 hàng từ vị trí auto */
  background: linear-gradient(135deg, #f9ca24, #f0932b);
}
```

**Ví dụ thực tế với `span`:**
```css
.magazine-layout {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(5, 80px);
  gap: 15px;
  padding: 20px;
}

.feature-article {
  grid-column: 1 / span 4;  /* Chiếm 4 cột đầu */
  grid-row: 1 / span 3;     /* Chiếm 3 hàng đầu */
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2em;
  font-weight: bold;
  border-radius: 10px;
}

.sidebar-ad {
  grid-column: 5 / span 2;  /* 2 cột cuối */
  grid-row: 1 / span 2;     /* 2 hàng đầu */
  background: linear-gradient(45deg, #f093fb, #f5576c);
  border-radius: 8px;
}

.news-brief {
  grid-column: span 2;      /* Auto placement, span 2 cột */
  grid-row: span 1;         /* 1 hàng */
  background: linear-gradient(90deg, #4facfe, #00f2fe);
  border-radius: 6px;
}

.photo-gallery {
  grid-column: 3 / span 4;  /* Từ cột 3, span 4 cột */
  grid-row: 4 / span 2;     /* Từ hàng 4, span 2 hàng */
  background: linear-gradient(45deg, #43e97b, #38f9d7);
  border-radius: 8px;
}
```

Bạn cũng có thể sử dụng từ khóa `span` với `grid-row-start/end` và `grid-column-start/end` (individual properties with span).

**Ví dụ với các thuộc tính riêng lẻ:**
```css
.item-with-span {
  /* Thay vì: grid-column: 2 / span 3; */
  grid-column-start: 2;
  grid-column-end: span 3;
  
  /* Thay vì: grid-row: span 2; */
  grid-row-start: span 2;  /* Span ngược về phía trước */
  grid-row-end: 4;         /* Kết thúc tại đường 4 */
  
  background: #ff6b6b;
}
```

## Căn chỉnh các rãnh lưới (Grid Tracks) trên các trục

Nếu các rãnh lưới của bạn sử dụng một diện tích nhỏ hơn **grid container**, bạn có thể căn chỉnh chính các rãnh lưới đó bên trong container (track alignment within container).

- **`align-content`**: Căn chỉnh các rãnh trên trục khối (block axis track alignment).
- **`justify-content`**: Căn chỉnh các rãnh trên trục nội tuyến (inline axis track alignment).
- **`place-content`**: Là viết tắt của `align-content` và `justify-content` (shorthand for content alignment).

### Giá trị (values) cho căn chỉnh rãnh lưới

Các giá trị cho `align-content`, `justify-content`, và `place-content` bao gồm các giá trị `<content-distribution>` và `<content-position>`. Thuộc tính `align-content` cũng chấp nhận các giá trị `<baseline-position>`. `justify-content` cũng chấp nhận `left` và `right`.

Các từ khóa hợp lệ cho `place-content` bao gồm:
- `normal`
- `start`
- `end` 
- `center`
- `stretch`
- `space-around`
- `space-between`  
- `space-evenly`
- `baseline`, `first baseline`, `last baseline`
- `left`, `right`

**`align-content`** được áp dụng cho **grid container** vì nó hoạt động trên toàn bộ lưới (container-level property).

Mặc định, các rãnh lưới sẽ nằm ở góc trên bên trái của lưới, được căn chỉnh theo các đường lưới bắt đầu (`start`), vì hành vi mặc định trong bố cục lưới là `start` (default start alignment).

**Ví dụ về `align-content: end`:**
```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(3, 100px);
  height: 500px;
  width: 500px;
  gap: 10px;
  border: 2px solid #333;
  
  align-content: end; /* Di chuyển các rãnh về phía cuối trục block */
  
  grid-template-areas: 
    "a a b" 
    "a a b" 
    "c d d";
}

.item { background: rgba(255, 107, 107, 0.8); }
```

**Ví dụ về `align-content: space-between`:**
```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 80px);
  grid-template-rows: repeat(3, 80px);
  height: 400px;
  width: 400px;
  gap: 10px;
  border: 2px solid #333;
  
  align-content: space-between; /* Phân phối không gian giữa các rãnh trên trục block */
  
  grid-template-areas: 
    "a a b" 
    "a a b" 
    "c d d";
}

.item1 { grid-area: a; background: #ff6b6b; }
.item2 { grid-area: b; background: #4ecdc4; }  
.item3 { grid-area: c; background: #45b7d1; }
.item4 { grid-area: d; background: #f9ca24; }
```

**Ví dụ về `justify-content: space-around` (trên trục nội tuyến):**
```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(3, 100px);
  height: 500px;
  width: 600px; /* Rộng hơn để thấy rõ hiệu ứng */
  gap: 10px;
  border: 2px solid #333;
  
  align-content: space-between;   /* Giữ nguyên ví dụ trước */
  justify-content: space-around;  /* Phân phối không gian xung quanh các rãnh trên trục inline */
  
  grid-template-areas: 
    "a a b" 
    "a a b" 
    "c d d";
}

.item1 { grid-area: a; background: linear-gradient(45deg, #ff6b6b, #ff8e8e); }
.item2 { grid-area: b; background: linear-gradient(45deg, #4ecdc4, #7ed3d3); }  
.item3 { grid-area: c; background: linear-gradient(45deg, #45b7d1, #6cc5dc); }
.item4 { grid-area: d; background: linear-gradient(45deg, #f9ca24, #fad452); }
```

**Ví dụ về `place-content` (shorthand):**
```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(2, 120px);
  grid-template-rows: repeat(2, 100px);
  height: 400px;
  width: 500px;
  gap: 15px;
  border: 2px solid #333;
  
  /* Thay vì: */
  /* align-content: center; */
  /* justify-content: space-evenly; */
  
  place-content: center space-evenly;
}

.item {
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
}
```

**Lưu ý quan trọng**: Nếu một phần tử kéo dài qua nhiều rãnh lưới, việc sử dụng các giá trị phân phối không gian (`space-between`, `space-around`, `space-evenly`) có thể làm cho các phần tử trên lưới của bạn lớn hơn, vì không gian được thêm vào giữa các rãnh sẽ được thêm vào phần tử kéo dài (spanning elements grow). Hãy đảm bảo nội dung của các rãnh có thể xử lý không gian thêm hoặc bạn đã sử dụng các thuộc tính căn chỉnh trên các phần tử để chúng di chuyển về `start` hoặc `end` thay vì `stretch` (handle extra space properly).




## **Định vị các phần tử bằng cách sử dụng số dòng (Line-based Placement)**

Đây là cách cơ bản và phổ biến để đặt các phần tử vào lưới ``.

*   **Các thuộc tính (`properties`)**:
    *   **`grid-column-start`**: Đặt đường cột bắt đầu ``.
    *   **`grid-column-end`**: Đặt đường cột kết thúc ``.
    *   **`grid-row-start`**: Đặt đường hàng bắt đầu ``.
    *   **`grid-row-end`**: Đặt đường hàng kết thúc ``.

**Ví dụ cơ bản:** ``
Giả sử có một `.wrapper` với `display: grid; grid-template-columns: repeat(3, 1fr); grid-template-rows: repeat(3, 100px);`.
```css
.box1 {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 4;
}
.box2 {
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
}
.box3 {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
}
.box4 {
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 3;
  grid-row-end: 4;
}
```
Bạn có thể để trống các ô nếu muốn ``. Các phần tử không được đặt sẽ tuân theo quy tắc **tự động đặt (auto-placement rules)** ``.

### **Thuộc tính viết tắt (Shorthands)** ``

Để viết code ngắn gọn hơn, bạn có thể kết hợp các thuộc tính `start` và `end`:
*   **`grid-column`**: Kết hợp `grid-column-start` và `grid-column-end` ``.
*   **`grid-row`**: Kết hợp `grid-row-start` và `grid-row-end` ``.
Cú pháp: `grid-column: <start-line> / <end-line>;` ``.

**Ví dụ viết tắt:** ``
```css
.box1 { grid-column: 1 / 2; grid-row: 1 / 4; }
.box2 { grid-column: 3 / 4; grid-row: 1 / 3; }
.box3 { grid-column: 2 / 3; grid-row: 1 / 2; }
.box4 { grid-column: 2 / 4; grid-row: 3 / 4; }
```

### **Mặc định trải rộng một rãnh (Default Spans)** ``

Nếu một phần tử chỉ trải rộng một rãnh, bạn có thể bỏ qua giá trị `grid-column-end` hoặc `grid-row-end`. Grid sẽ mặc định là trải rộng một rãnh ``.

**Ví dụ với mặc định trải rộng (viết tắt):** ``
```css
.box1 { grid-column: 1; grid-row: 1 / 4; }
.box2 { grid-column: 3; grid-row: 1 / 3; }
.box3 { grid-column: 2; grid-row: 1; }
.box4 { grid-column: 2 / 4; grid-row: 3; }
```

### **Đếm ngược (Counting Backwards)** ``

Bạn có thể đếm ngược từ cuối lưới bằng cách sử dụng các giá trị âm. Đường cuối cùng của lưới rõ ràng (explicit grid) có thể được địa chỉ hóa là `-1`, đường thứ hai cuối cùng là `-2`, v.v. ``. Lưu ý rằng giá trị âm chỉ liên quan đến lưới rõ ràng, không tính đến các hàng hoặc cột được thêm vào trong lưới ngầm định (implicit grid) ``.

**Ví dụ đếm ngược:** ``
```css
.box1 { grid-column-start: -1; grid-column-end: -2; grid-row-start: -1; grid-row-end: -4; }
.box2 { grid-column-start: -3; grid-column-end: -4; grid-row-start: -1; grid-row-end: -3; }
.box3 { grid-column-start: -2; grid-column-end: -3; grid-row-start: -1; grid-row-end: -2; }
.box4 { grid-column-start: -2; grid-column-end: -4; grid-row-start: -3; grid-row-end: -4; }
```

Bạn có thể kéo dài một phần tử trên toàn bộ lưới bằng `grid-column: 1 / -1;` ``.

### **Từ khóa `span`** ``

Ngoài việc chỉ định đường bắt đầu và kết thúc bằng số, bạn có thể chỉ định một đường bắt đầu và sau đó là số lượng rãnh bạn muốn vùng đó trải rộng bằng từ khóa `span` ``.

**Ví dụ với từ khóa `span`:** ``
```css
.box1 { grid-column: 1; grid-row: 1 / span 3; } /* Bắt đầu từ hàng 1, trải rộng 3 rãnh */
.box2 { grid-column: 3; grid-row: 1 / span 2; }
.box3 { grid-column: 2; grid-row: 1; }
.box4 { grid-column: 2 / span 2; grid-row: 3; }
```
Bạn cũng có thể sử dụng từ khóa `span` với `grid-row-start/end` và `grid-column-start/end` ``.

## Định vị các phần tử bằng vùng lưới được đặt tên (`grid-area` và `grid-template-areas`)

Grid cung cấp một cách trực quan khác để mô tả bố cục của bạn bằng cách đặt tên cho các vùng (named grid areas).

### Thuộc tính `grid-area`

Thuộc tính **`grid-area`** có thể được sử dụng theo hai cách chính:

#### 1. Là viết tắt (shorthand) cho vị trí dựa trên dòng số
Kết hợp `grid-row-start`, `grid-column-start`, `grid-row-end`, `grid-column-end` (line-based shorthand).

- Thứ tự các giá trị: `grid-row-start / grid-column-start / grid-row-end / grid-column-end` (value order).
- Đây là **ngược lại** với thứ tự mà chúng ta thường chỉ định lề và phần đệm (margins and padding) (different from margin/padding order). Điều này là do CSS Grid Layout sử dụng các hướng tương đối theo luồng (flow-relative directions) được định nghĩa trong CSS writing modes.
- Các hướng tương đối theo luồng: `block-start`, `block-end`, `inline-start`, `inline-end` (flow-relative directions). Ví dụ, trong tiếng Anh (từ trái sang phải), `block-start` là đường hàng trên cùng, `inline-start` là đường cột bên trái.
- Nếu bạn bỏ qua bất kỳ giá trị nào khi sử dụng `grid-area` với các số dòng (cung cấp 1, 2, hoặc 3 số), các giá trị bị thiếu sẽ được đặt thành `auto`, có nghĩa là vùng sẽ trải rộng 1 rãnh (auto values for missing parameters).

**Ví dụ về `grid-area` (với số dòng):**
```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 100px);
  gap: 10px;
}

.box1 { 
  grid-area: 1 / 1 / 4 / 2; /* row-start / col-start / row-end / col-end */
  background: linear-gradient(135deg, #ff6b6b, #ee5a52);
}

.box2 { 
  grid-area: 1 / 3 / 3 / 4; 
  background: linear-gradient(135deg, #4ecdc4, #44a08d);
}

.box3 { 
  grid-area: 1 / 2 / 2 / 3; 
  background: linear-gradient(135deg, #45b7d1, #96c93d);
}

.box4 { 
  grid-area: 3 / 2 / 4 / 4; 
  background: linear-gradient(135deg, #f9ca24, #f0932b);
}
```

**Ví dụ với giá trị thiếu:**
```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
  gap: 10px;
}

.item1 { 
  grid-area: 1 / 1 / 3;     /* row-start / col-start / row-end, col-end = auto */
  background: #ff6b6b;
}

.item2 { 
  grid-area: 1 / 2;         /* row-start / col-start, row-end và col-end = auto */
  background: #4ecdc4;
}

.item3 { 
  grid-area: 2;             /* row-start, tất cả khác = auto */
  background: #45b7d1;
}
```

#### 2. Để đặt tên cho một vùng lưới (naming a grid area)
Bạn có thể đặt tên cho mỗi phần tử trên lưới bằng `grid-area` (area naming).

**Ví dụ**: `.test { grid-area: one; }` (simple area naming).

### Thuộc tính `grid-template-areas`

Thuộc tính `grid-template-areas` chấp nhận một hoặc nhiều chuỗi (string) làm giá trị (string values). Mỗi chuỗi (đặt trong dấu ngoặc kép) đại diện cho một hàng trong lưới của bạn (each string represents a row). Đây là một cách trực quan để định nghĩa bố cục (visual layout definition).

- **Cách hoạt động**: Một vùng được trải rộng qua nhiều rãnh bằng cách lặp lại tên của nó trong tất cả các ô mà bạn muốn nó bao phủ (area spanning through repetition).

**Ví dụ cơ bản:**
```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 100px);
  gap: 10px;
  grid-template-areas: 
    "one one two two"
    "one one two two"
    "three three four four"
    "three three four four";
}

.item1 { 
  grid-area: one; 
  background: linear-gradient(135deg, #ff6b6b, #ee5a52);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
}

.item2 { 
  grid-area: two; 
  background: linear-gradient(135deg, #4ecdc4, #44a08d);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
}

.item3 { 
  grid-area: three; 
  background: linear-gradient(135deg, #45b7d1, #96c93d);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
}

.item4 { 
  grid-area: four; 
  background: linear-gradient(135deg, #f9ca24, #f0932b);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
}
```

**Ví dụ bố cục website thực tế:**
```css
.website-layout {
  display: grid;
  grid-template-columns: 200px 1fr 150px;
  grid-template-rows: 80px 1fr 60px;
  min-height: 100vh;
  gap: 10px;
  grid-template-areas:
    "header header header"
    "sidebar main ads"
    "footer footer footer";
}

.header {
  grid-area: header;
  background: linear-gradient(90deg, #667eea, #764ba2);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5em;
  font-weight: bold;
}

.sidebar {
  grid-area: sidebar;
  background: linear-gradient(180deg, #f093fb, #f5576c);
  padding: 20px;
  color: white;
}

.main {
  grid-area: main;
  background: linear-gradient(45deg, #4facfe, #00f2fe);
  padding: 20px;
  color: white;
}

.ads {
  grid-area: ads;
  background: linear-gradient(135deg, #fa709a, #fee140);
  padding: 10px;
}

.footer {
  grid-area: footer;
  background: linear-gradient(90deg, #43e97b, #38f9d7);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}
```

### Các quy tắc khi sử dụng `grid-template-areas`

#### 1. Phải mô tả một lưới hoàn chỉnh
Mỗi ô trên lưới của bạn phải được điền (complete grid coverage).

```css
/* ĐÚNG */
.grid {
  grid-template-areas:
    "a a b"
    "c c b"
    "c c d";
}

/* SAI - thiếu ô */
.grid-wrong {
  grid-template-areas:
    "a a b"
    "c c"     /* Thiếu một ô ở hàng này */;
}
```

#### 2. Ô trống
Để tạo ô trống, bạn sử dụng `.` hoặc một chuỗi `...` (không có khoảng trắng giữa chúng) (empty cell notation).

**Ví dụ với ô trống:**
```css
.layout {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 100px);
  gap: 10px;
  grid-template-areas:
    "header header header header"
    ". main main sidebar"
    ". main main sidebar"
    "footer footer footer footer";
}

.header {
  grid-area: header;
  background: linear-gradient(90deg, #667eea, #764ba2);
}

.main {
  grid-area: main;
  background: linear-gradient(45deg, #4facfe, #00f2fe);
}

.sidebar {
  grid-area: sidebar;
  background: linear-gradient(135deg, #fa709a, #fee140);
}

.footer {
  grid-area: footer;
  background: linear-gradient(90deg, #43e97b, #38f9d7);
}

/* Cột đầu tiên ở giữa sẽ để trống */
```

**Ví dụ với nhiều cách viết ô trống:**
```css
.grid-with-gaps {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(3, 80px);
  gap: 10px;
  grid-template-areas:
    ". header header header ."
    "nav main main main aside"
    ". footer footer footer .";
    /* Hoặc có thể viết: */
    /* "... header header header ..." */
}
```

#### 3. Mỗi vùng chỉ được định nghĩa một lần
Bạn không thể sử dụng thuộc tính này để sao chép nội dung vào hai vị trí trên lưới (no content duplication).

```css
/* SAI - không thể tạo vùng "main" tách rời */
.invalid-areas {
  grid-template-areas:
    "main header sidebar"
    "content content content"  
    "main footer sidebar";  /* main không thể xuất hiện lại ở đây */
}

/* ĐÚNG - mỗi vùng liên tục */
.valid-areas {
  grid-template-areas:
    "header header header"
    "main main sidebar"
    "footer footer footer";
}
```

#### 4. Không thể tạo vùng không phải hình chữ nhật
Thuộc tính này không thể được sử dụng để tạo vùng hình chữ L hoặc T (rectangular areas only).

```css
/* SAI - vùng "complex" không phải hình chữ nhật */
.invalid-shape {
  grid-template-areas:
    "complex header header"
    "complex main main"
    "sidebar main main"
    "complex footer footer";  /* Tạo hình chữ L - không hợp lệ */
}

/* ĐÚNG - tất cả vùng đều hình chữ nhật */
.valid-shape {
  grid-template-areas:
    "header header header"
    "sidebar main main"
    "sidebar main main"
    "footer footer footer";
}
```

### Layering Items khi sử dụng `grid-template-areas`

Dù chỉ một tên có thể chiếm mỗi ô khi sử dụng `grid-template-areas`, bạn vẫn có thể thêm các phần tử bổ sung vào lưới sau khi thực hiện bố cục chính bằng cách này (additional element layering). Bạn có thể sử dụng các số dòng hoặc các tên dòng được tạo ra một cách ngầm định từ các vùng được đặt tên (ví dụ: `one-start`, `one-end` cho vùng tên `one`) để đặt các phần tử chồng lên nhau (implicit line names for layering).

**Ví dụ về layering:**
```css
.layered-layout {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 100px);
  gap: 10px;
  grid-template-areas:
    "main main main sidebar"
    "main main main sidebar"
    "footer footer footer footer";
}

.main-content {
  grid-area: main;
  background: linear-gradient(45deg, #4facfe, #00f2fe);
  z-index: 1;
}

.overlay {
  /* Sử dụng implicit line names từ area "main" */
  grid-column: main-start / main-end;
  grid-row: main-start / main-end;
  background: rgba(255, 255, 255, 0.9);
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: #333;
}

.sidebar {
  grid-area: sidebar;
  background: linear-gradient(135deg, #fa709a, #fee140);
}

.footer {
  grid-area: footer;
  background: linear-gradient(90deg, #43e97b, #38f9d7);
}
```

**Ví dụ với line numbers và named areas:**
```css
.complex-layout {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(4, 80px);
  gap: 10px;
  grid-template-areas:
    "header header header header header header"
    "nav main main main main aside"
    "nav main main main main aside"  
    "footer footer footer footer footer footer";
}

.header { grid-area: header; background: #667eea; }
.nav { grid-area: nav; background: #f093fb; }
.main { grid-area: main; background: #4facfe; }
.aside { grid-area: aside; background: #fa709a; }
.footer { grid-area: footer; background: #43e97b; }

/* Thêm một banner chồng lên main */
.banner {
  grid-column: main-start / main-end;
  grid-row: 2;  /* Chỉ hàng đầu tiên của main */
  background: rgba(255, 107, 107, 0.9);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
}
```

### Sử dụng `grid-template-areas` trong thiết kế đáp ứng (Responsive Design)

`grid-template-areas` rất hữu ích để xác định lại bố cục tại các điểm ngắt (breakpoints) khác nhau (responsive layout changes). Bạn có thể thay đổi số lượng cột và giá trị của `grid-template-areas` để tạo các bố cục khác nhau cho các kích thước màn hình khác nhau (different layouts for different screen sizes).

**Ví dụ về thiết kế đáp ứng:**
```css
.responsive-wrapper {
  display: grid;
  gap: 20px;
  padding: 20px;
  
  /* Bố cục mặc định cho màn hình nhỏ (mobile-first) */
  grid-template-columns: 1fr;
  grid-template-areas: 
    "header"
    "nav"
    "main"
    "sidebar"
    "ads"
    "footer";
}

/* Tablet layout */
@media (min-width: 768px) {
  .responsive-wrapper {
    grid-template-columns: 200px 1fr;
    grid-template-areas: 
      "header header"
      "nav main"
      "nav sidebar"
      "nav ads"
      "footer footer";
  }
}

/* Desktop layout */
@media (min-width: 1024px) {
  .responsive-wrapper {
    grid-template-columns: 200px 1fr 250px;
    grid-template-areas: 
      "header header header"
      "nav main sidebar"
      "nav main ads"
      "footer footer footer";
  }
}

/* Large desktop layout */
@media (min-width: 1200px) {
  .responsive-wrapper {
    grid-template-columns: 250px 1fr 200px 150px;
    grid-template-areas: 
      "header header header header"
      "nav main sidebar ads"
      "nav main sidebar ads"
      "footer footer footer footer";
  }
}

/* Styling cho các areas */
.header {
  grid-area: header;
  background: linear-gradient(90deg, #667eea, #764ba2);
  color: white;
  padding: 20px;
  text-align: center;
  font-size: 1.5em;
  font-weight: bold;
}

.nav {
  grid-area: nav;
  background: linear-gradient(180deg, #f093fb, #f5576c);
  color: white;
  padding: 15px;
}

.main {
  grid-area: main;
  background: linear-gradient(45deg, #4facfe, #00f2fe);
  color: white;
  padding: 20px;
  min-height: 300px;
}

.sidebar {
  grid-area: sidebar;
  background: linear-gradient(135deg, #43e97b, #38f9d7);
  padding: 15px;
}

.ads {
  grid-area: ads;
  background: linear-gradient(45deg, #fa709a, #fee140);
  padding: 10px;
  text-align: center;
}

.footer {
  grid-area: footer;
  background: linear-gradient(90deg, #ff9a9e, #fecfef);
  color: white;
  padding: 15px;
  text-align: center;
}
```

**Ví dụ responsive với reordering:**
```css
.magazine-layout {
  display: grid;
  gap: 15px;
  padding: 15px;
}

/* Mobile: Stack vertically */
@media (max-width: 767px) {
  .magazine-layout {
    grid-template-columns: 1fr;
    grid-template-areas:
      "hero"
      "breaking"
      "featured"
      "sports"
      "tech"
      "lifestyle";
  }
}

/* Tablet: 2-column layout */
@media (min-width: 768px) and (max-width: 1023px) {
  .magazine-layout {
    grid-template-columns: 2fr 1fr;
    grid-template-areas:
      "hero hero"
      "featured breaking"
      "sports tech"
      "lifestyle lifestyle";
  }
}

/* Desktop: Complex grid */
@media (min-width: 1024px) {
  .magazine-layout {
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-rows: auto auto auto;
    grid-template-areas:
      "hero hero breaking"
      "featured sports tech"
      "lifestyle lifestyle lifestyle";
  }
}

.hero { 
  grid-area: hero; 
  background: linear-gradient(135deg, #667eea, #764ba2);
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.8em;
  font-weight: bold;
}

.breaking { 
  grid-area: breaking; 
  background: linear-gradient(45deg, #ff6b6b, #ee5a52);
  color: white;
  padding: 15px;
}

.featured { 
  grid-area: featured; 
  background: linear-gradient(135deg, #4facfe, #00f2fe);
  color: white;
  padding: 15px;
}

.sports { 
  grid-area: sports; 
  background: linear-gradient(45deg, #43e97b, #38f9d7);
  padding: 15px;
}

.tech { 
  grid-area: tech; 
  background: linear-gradient(135deg, #fa709a, #fee140);
  padding: 15px;
}

.lifestyle { 
  grid-area: lifestyle; 
  background: linear-gradient(90deg, #ff9a9e, #fecfef);
  padding: 15px;
}
```

### Khía cạnh tiếp cận (Accessibility) với `grid-template-areas`

Một lưu ý quan trọng là `grid-template-areas` có thể dễ dàng làm ngắt kết nối hiển thị trực quan với thứ tự nguồn (source order) cơ bản của các phần tử HTML (visual vs source order disconnect). Những người dùng sử dụng bàn phím để điều hướng hoặc các công nghệ hỗ trợ (assistive technologies) sẽ tuân theo thứ tự trong mã nguồn (keyboard navigation follows source order). Việc di chuyển hiển thị mà không đảm bảo thứ tự nguồn hợp lý có thể tạo ra trải nghiệm người dùng khó hiểu và ngắt kết nối (confusing user experience). **Luôn đảm bảo rằng thứ tự nguồn phù hợp với trải nghiệm trực quan** (maintain logical source order).

**Ví dụ về vấn đề accessibility:**
```html
<!-- HTML source order -->
<div class="layout">
  <header class="header">Header</header>
  <nav class="nav">Navigation</nav>  
  <main class="main">Main Content</main>
  <aside class="sidebar">Sidebar</aside>
  <footer class="footer">Footer</footer>
</div>
```

```css
/* CSS có thể thay đổi visual order */
.layout {
  display: grid;
  grid-template-areas:
    "header sidebar nav"      /* Nav bị đẩy sang phải */
    "main main main"
    "footer footer footer";
}

/* Điều này có thể gây khó khăn cho keyboard navigation 
   vì người dùng sẽ tab theo thứ tự: header -> nav -> main -> sidebar -> footer
   nhưng visually họ thấy: header -> sidebar -> nav -> main -> footer */
```

**Cách khắc phục - sắp xếp HTML theo logical order:**
```html
<!-- Sắp xếp HTML theo thứ tự logical/visual -->
<div class="layout">
  <header class="header">Header</header>
  <aside class="sidebar">Sidebar</aside>  <!-- Di chuyển lên trước nav -->
  <nav class="nav">Navigation</nav>
  <main class="main">Main Content</main>
  <footer class="footer">Footer</footer>
</div>
```

## Khoảng cách giữa các rãnh (Gutters hoặc Gaps)

CSS Grid bao gồm khả năng thêm khoảng cách (gutters) giữa các rãnh cột và hàng bằng các thuộc tính **`column-gap`**, **`row-gap`**, hoặc viết tắt **`gap`** (gap properties).

- Các khoảng cách chỉ xuất hiện giữa các rãnh của lưới, chúng không thêm không gian vào phía trên, dưới, trái hoặc phải của container (gutters between tracks only).
- **`gap` viết tắt**: Nếu bạn chỉ cung cấp một giá trị cho `gap`, nó sẽ áp dụng cho cả khoảng cách cột và hàng. Nếu bạn chỉ định hai giá trị, giá trị đầu tiên được sử dụng cho `row-gap` và giá trị thứ hai cho `column-gap` (shorthand syntax rules).

**Ví dụ về `gap`:**
```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
  
  /* Cách 1: Thiết lập riêng lẻ */
  column-gap: 20px; /* Khoảng cách giữa các cột */
  row-gap: 1em;     /* Khoảng cách giữa các hàng */
  
  /* Cách 2: Sử dụng shorthand */
  /* gap: 1em 20px; */ /* row-gap 1em, column-gap 20px */
  
  /* Cách 3: Cùng giá trị cho cả hai */
  /* gap: 15px; */ /* Cả row-gap và column-gap đều 15px */
}

.item {
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  border-radius: 8px;
}
```

**Ví dụ thực tế với các gap khác nhau:**
```css
.photo-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px; /* Khoảng cách đều giữa tất cả items */
  padding: 20px;
}

.card-layout {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 30px;    /* Khoảng cách lớn giữa các hàng */
  column-gap: 15px; /* Khoảng cách nhỏ giữa các cột */
  padding: 20px;
}

.tight-layout {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 5px; /* Khoảng cách rất nhỏ */
}

.spaced-layout {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 40px 60px; /* row-gap: 40px, column-gap: 60px */
  padding: 30px;
}
```

**Ví dụ responsive gaps:**
```css
.responsive-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  
  /* Mobile: gap nhỏ */
  gap: 10px;
  padding: 10px;
}

@media (min-width: 768px) {
  .responsive-grid {
    /* Tablet: gap trung bình */
    gap: 20px;
    padding: 20px;
  }
}

@media (min-width: 1024px) {
  .responsive-grid {
    /* Desktop: gap lớn */
    gap: 30px;
    padding: 30px;
  }
}

@media (min-width: 1200px) {
  .responsive-grid {
    /* Large desktop: gap rất lớn với row/column khác nhau */
    row-gap: 40px;
    column-gap: 60px;
    padding: 40px;
  }
}
```

## Bố cục lưới và chế độ ghi (Writing Modes)

**CSS Grid Layout** và **CSS Box Alignment** hoạt động với các chế độ ghi (writing modes) trong CSS (writing mode compatibility). Điều này có nghĩa là hướng của trục khối và trục nội tuyến sẽ thay đổi tùy thuộc vào chế độ ghi của tài liệu (axis direction changes with writing mode). Ví dụ, trong ngôn ngữ từ phải sang trái như tiếng Ả Rập, "start" của lưới sẽ là phía trên bên phải, do đó `justify-content: start` sẽ làm cho các rãnh lưới bắt đầu ở phía bên phải (RTL language behavior).

Việc sử dụng các thuộc tính vật lý (physical properties) như `margin-right` hoặc `margin-left`, hoặc định vị tuyệt đối (absolutely positioning) các phần tử bằng `top`, `right`, `bottom`, `left` **không tôn trọng các chế độ ghi** (physical properties ignore writing modes). Điều này quan trọng cần hiểu nếu bạn phát triển các trang web hiển thị bằng nhiều ngôn ngữ hoặc muốn kết hợp các ngôn ngữ/chế độ ghi trong một thiết kế (multilingual website considerations).

**Ví dụ về writing modes:**
```css
/* Default: Left-to-Right (LTR) */
.ltr-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  writing-mode: horizontal-tb; /* Mặc định */
  direction: ltr;
}

.ltr-item {
  background: linear-gradient(45deg, #4facfe, #00f2fe);
  padding: 20px;
  text-align: start; /* Sẽ là left trong LTR */
}

/* Right-to-Left (RTL) */
.rtl-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  writing-mode: horizontal-tb;
  direction: rtl; /* Đổi hướng sang RTL */
}

.rtl-item {
  background: linear-gradient(45deg, #fa709a, #fee140);
  padding: 20px;
  text-align: start; /* Sẽ là right trong RTL */
}

/* Vertical writing mode */
.vertical-grid {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  gap: 15px;
  writing-mode: vertical-rl; /* Vertical, right-to-left */
  height: 400px;
}

.vertical-item {
  background: linear-gradient(45deg, #43e97b, #38f9d7);
  padding: 10px;
  text-align: start;
}
```

**Ví dụ so sánh logical vs physical properties:**
```css
.comparison-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  padding: 20px;
}

/* Grid con sử dụng logical properties */
.logical-properties {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  
  /* Logical properties - tôn trọng writing mode */
  padding-block-start: 20px;    /* Thay vì padding-top */
  padding-inline-start: 15px;   /* Thay vì padding-left */
  margin-block-end: 10px;       /* Thay vì margin-bottom */
  border-inline-end: 3px solid #333; /* Thay vì border-right */
}

/* Grid con sử dụng physical properties */
.physical-properties {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  
  /* Physical properties - KHÔNG tôn trọng writing mode */
  padding-top: 20px;
  padding-left: 15px;
  margin-bottom: 10px;
  border-right: 3px solid #333;
}

/* Khi thay đổi writing mode */
.rtl-test {
  direction: rtl;
}

.vertical-test {
  writing-mode: vertical-rl;
  height: 300px;
}
```

**Ví dụ grid alignment với writing modes:**
```css
.writing-mode-demo {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  min-height: 300px;
}

/* LTR Grid */
.ltr-example {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  writing-mode: horizontal-tb;
  direction: ltr;
  
  justify-content: start;  /* Bắt đầu từ trái */
  align-content: start;    /* Bắt đầu từ trên */
}

/* RTL Grid */
.rtl-example {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  writing-mode: horizontal-tb;
  direction: rtl;
  
  justify-content: start;  /* Bắt đầu từ PHẢI trong RTL */
  align-content: start;    /* Vẫn từ trên */
}

/* Vertical Grid */
.vertical-example {
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  gap: 10px;
  writing-mode: vertical-rl;
  height: 200px;
  
  justify-content: start;  /* Bắt đầu từ phải (trong vertical-rl) */
  align-content: start;    /* Bắt đầu từ trên */
}

.demo-item {
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  color: white;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}
```

## Công cụ học tập và luyện tập

Để nắm vững CSS Grid, việc thực hành là rất quan trọng (practice is essential). Các tài liệu khuyên dùng:

### 1. Grid Garden
**Grid Garden** là một trò chơi giúp bạn học CSS Grid Layout thông qua các cấp độ thử thách (interactive learning game). Đây là cách tuyệt vời để thực hành các khái niệm cơ bản.

```css
/* Ví dụ từ Grid Garden - Level 1 */
#garden {
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 20% 20% 20% 20% 20%;
}

#water {
  grid-column-start: 3;
}
```

### 2. CSS Grid Generator Tools
Các công cụ trực tuyến giúp tạo grid layouts:

```css
/* Ví dụ từ CSS Grid Generator */
.generated-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
}

.item-1 { grid-area: 1 / 1 / 2 / 2; }
.item-2 { grid-area: 1 / 2 / 2 / 3; }
.item-3 { grid-area: 1 / 3 / 2 / 4; }
/* ... */
```

### 3. Browser DevTools
Sử dụng Developer Tools để debug và visualize grid:

```css
.debug-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 100px);
  gap: 15px;
  
  /* Chrome DevTools sẽ hiển thị:
     - Grid line numbers
     - Grid line names  
     - Grid areas
     - Gap sizes */
}
```

### 4. Thực hành với các layout patterns phổ biến

**Holy Grail Layout:**
```css
.holy-grail {
  display: grid;
  grid-template-columns: 200px 1fr 150px;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  grid-template-areas:
    "header header header"
    "nav main aside"
    "footer footer footer";
}
```

**Card Grid Layout:**
```css
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
}
```

**Magazine Layout:**
```css
.magazine {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(4, 100px);
  gap: 15px;
  grid-template-areas:
    "hero hero hero hero sidebar sidebar"
    "hero hero hero hero sidebar sidebar"  
    "article1 article1 article2 article2 ads ads"
    "footer footer footer footer footer footer";
}
```

### 5. Tài liệu tham khảo bổ sung

- **MDN Web Docs**: Đọc thêm về **Line-based Placement** và **Box Alignment in CSS Grid Layout** trên MDN Web Docs (comprehensive documentation).
- **CSS Grid Complete Guide**: Các hướng dẫn chi tiết về tất cả thuộc tính Grid.
- **Can I Use**: Kiểm tra browser support cho các tính năng Grid.

---

## Tổng kết

CSS Grid Layout là một công cụ mạnh mẽ cho việc tạo bố cục web hai chiều. Với các khái niệm cơ bản về:

- **Grid Lines, Tracks, và Cells**: Cấu trúc cơ bản của grid
- **Alignment Properties**: `align-items`, `justify-items`, `align-content`, `justify-content`
- **Line-based Placement**: Sử dụng số dòng để định vị
- **Named Grid Areas**: Sử dụng `grid-template-areas` cho bố cục trực quan
- **Gaps**: Tạo khoảng cách giữa các tracks
- **Responsive Design**: Thay đổi layout theo breakpoints
- **Writing Modes**: Hỗ trợ đa ngôn ngữ

Bạn có thể tạo ra những layout phức tạp và linh hoạt. Hãy thực hành thường xuyên với các công cụ và tài liệu được đề xuất để nắm vững CSS Grid Layout!
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 10px;
  grid-auto-rows: 100px;
  grid-template-areas: 
    "a a a a b b b b" 
    "a a a a b b b b" 
    "c c c c d d d d" 
    "c c c c d d d d";
  align-items: start; /* Căn chỉnh tất cả các item về phía start của trục block */
}

.item1 { 
  grid-area: a; 
  background: lightblue;
  height: 50px; /* Chỉ cao 50px thay vì fill toàn bộ 200px */
}

.item2 { 
  grid-area: b; 
  background: lightgreen;
  height: 30px;
}

.item3 { 
  grid-area: c; 
  background: lightcoral;
  height: 80px;
}

.item4 { 
  grid-area: d; 
  background: lightyellow;
  height: 60px;
}
```

**Ví dụ về `align-self`:**
```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 10px;
  grid-auto-rows: 100px;
  grid-template-areas: 
    "a a a a b b b b" 
    "a a a a b b b b" 
    "c c c c d d d d" 
    "c c c c d d d d";
}

.item1 { 
  grid-area: a; 
  background: lightblue;
  /* Mặc định: stretch - chiếm hết chiều cao */
}

.item2 { 
  grid-area: b; 
  align-self: start;
  background: lightgreen;
  height: 50px; /* Căn về đầu vùng */
}

.item3 { 
  grid-area: c; 
  align-self: end;
  background: lightcoral;
  height: 70px; /* Căn về cuối vùng */
}

.item4 { 
  grid-area: d; 
  align-self: center;
  background: lightyellow;
  height: 60px; /* Căn giữa vùng */
}
```

### Căn chỉnh các phần tử trên trục nội tuyến (Inline Axis)

#### `justify-self` và `justify-items`

- **`justify-self`** và **`justify-items`** căn chỉnh các phần tử trên trục nội tuyến (inline axis alignment).
- **`justify-items`** được áp dụng cho **grid container** để đặt giá trị `justify-self` cho tất cả các phần tử con của lưới (container-level setting).

#### Các giá trị (values): 
Tương tự như `align-self`, `align-items` nhưng thêm `left` và `right`:
- `normal`, `start`, `end`, `left`, `right`, `center`, `stretch`, `baseline`, `first baseline`, `last baseline`, `auto` (chỉ dành cho `justify-self`)

**Lưu ý**: Mặc định là `stretch`, trừ các phần tử có tỷ lệ khung hình tự nhiên (default stretch behavior).

**Sự khác biệt với Flexbox**: Các thuộc tính `justify-self` và `justify-items` không được triển khai trong Flexbox vì tính chất một chiều của nó; Flexbox sử dụng `justify-content` để căn chỉnh các phần tử dọc theo trục chính (flexbox vs grid difference).

**Ví dụ về `justify-self`:**
```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(4, 150px);
  gap: 10px;
  grid-auto-rows: 100px;
}

.item1 { 
  background: lightblue;
  width: 80px;
  /* Mặc định: stretch - chiếm hết chiều rộng nếu không có width */
}

.item2 { 
  justify-self: start;
  background: lightgreen;
  width: 100px; /* Căn về đầu ô (trái) */
}

.item3 { 
  justify-self: end;
  background: lightcoral;
  width: 120px; /* Căn về cuối ô (phải) */
}

.item4 { 
  justify-self: center;
  background: lightyellow;
  width: 90px; /* Căn giữa ô */
}
```

**Ví dụ về `justify-items`:**
```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  grid-auto-rows: 80px;
  justify-items: center; /* Tất cả items căn giữa theo trục ngang */
}

.item {
  width: 60px;
  height: 60px;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
}
```

### Thuộc tính viết tắt (Shorthand Properties)

- **`place-items`**: Là viết tắt của `align-items` và `justify-items` (shorthand for alignment).
- **`place-self`**: Là viết tắt của `align-self` và `justify-self` (shorthand for self-alignment).

**Ví dụ về `place-items`:**
```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 150px);
  grid-template-rows: repeat(2, 100px);
  gap: 10px;
  
  /* Thay vì viết: */
  /* align-items: center; */
  /* justify-items: center; */
  
  /* Viết tắt: */
  place-items: center; /* Cả hai trục đều center */
  /* Hoặc: place-items: start end; */ /* align-items: start, justify-items: end */
}

.item {
  width: 80px;
  height: 60px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 6px;
}
```

**Ví dụ về `place-self`:**
```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(2, 200px);
  grid-template-rows: repeat(2, 120px);
  gap: 15px;
}

.item1 {
  background: #ff9a56;
  width: 100px;
  height: 60px;
  place-self: start; /* align-self: start, justify-self: start */
}

.item2 {
  background: #ff6b9d;
  width: 120px;
  height: 80px;
  place-self: end center; /* align-self: end, justify-self: center */
}

.item3 {
  background: #a8e6cf;
  width: 80px;
  height: 50px;
  place-self: center end; /* align-self: center, justify-self: end */
}

.item4 {
  background: #ffd93d;
  width: 90px;
  height: 70px;
  place-self: center; /* Cả hai đều center */
}
```

### Căn giữa một phần tử trong vùng lưới (Center an item in the area)

Bằng cách kết hợp các thuộc tính `align` và `justify`, bạn có thể dễ dàng căn giữa một phần tử bên trong vùng lưới của nó (perfect centering).

**Ví dụ căn giữa:**
```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  grid-auto-rows: 200px;
  grid-template-areas: 
    ". a a ." 
    ". a a .";
}

.item1 {
  grid-area: a;
  align-self: center;     /* Căn giữa theo trục dọc */
  justify-self: center;   /* Căn giữa theo trục ngang */
  
  /* Hoặc viết tắt: */
  /* place-self: center; */
  
  background: linear-gradient(45deg, #6a11cb, #2575fc);
  color: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  width: 150px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

### Căn chỉnh bằng lề tự động (Auto Margins)

Một cách khác để căn chỉnh các phần tử bên trong vùng của chúng là sử dụng **lề tự động (auto margins)**. Lề `auto` hấp thụ tất cả không gian có sẵn (absorb available space). Việc đặt `margin: auto` ở cả hai phía sẽ đẩy phần tử cấp khối (block-level element) vào giữa, vì cả hai lề đều cố gắng chiếm hết không gian (equal distribution).

**Ví dụ về `margin-left: auto`:**
```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(3, 100px);
  height: 500px;
  width: 500px;
  gap: 10px;
  grid-template-areas: 
    "a a b" 
    "a a b" 
    "c d d";
}

.item1 { 
  grid-area: a; 
  margin-left: auto; /* Đẩy item1 sang phải */
  background: lightblue;
  width: 80px;
}

.item2 { 
  grid-area: b; 
  margin-top: auto; /* Đẩy item2 xuống dưới */
  background: lightgreen;
  height: 60px;
}

.item3 { 
  grid-area: c; 
  margin: auto; /* Căn giữa hoàn toàn */
  background: lightcoral;
  width: 60px;
  height: 60px;
}

.item4 { 
  grid-area: d; 
  margin-right: auto;
  margin-bottom: auto; /* Căn về góc trái trên */
  background: lightyellow;
  width: 70px;
  height: 50px;
}
```

**Ví dụ căn giữa hoàn toàn bằng auto margin:**
```css
.perfect-center {
  display: grid;
  grid-template-columns: 300px;
  grid-template-rows: 200px;
  border: 2px solid #333;
}

.centered-item {
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  width: 100px;
  height: 80px;
  border-radius: 10px;
  margin: auto; /* Căn giữa hoàn hảo */
  
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
}
```


## Tài liệu phải đọc khi ĐÓNG CỌC LẦN 2

1. https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-positioning-grid-elements
1. https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Line-based_Placement_with_CSS_Grid
1. https://github.com/TheOdinProject/css-exercises/tree/main/intermediate-html-css/positioning-grid
1. https://www.smashingmagazine.com/understanding-css-grid-template-areas
1. https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout
1. https://cssgridgarden.com/


> ⭐ **Theo dõi [kênh Threads](https://www.threads.com/@kaitaku.88) để đọc bài mới mỗi ngày!** ⭐  

**[<== Bài Trước  ](link)          |[  Trang Chủ  ](./README.md)|           [  Bài Sau ==>](link)**