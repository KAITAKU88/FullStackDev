# Hướng dẫn toàn diện về Bảng HTML (HTML Tables)

## Giới thiệu về Bảng HTML (Introduction to HTML Tables)

Bảng (table) là một tập hợp dữ liệu có cấu trúc được tạo thành từ các hàng (rows) và cột (columns), còn được gọi là **dữ liệu dạng bảng** (tabular data). Mục đích của bảng là cho phép bạn nhanh chóng và dễ dàng tra cứu các giá trị thể hiện mối liên hệ giữa các loại dữ liệu khác nhau, ví dụ như một người và tuổi của họ, hoặc lịch trình cho một hồ bơi địa phương. Bạn có thể hình dung bảng như một cách để mô tả và hiển thị dữ liệu có ý nghĩa trong một phần mềm bảng tính (spreadsheet software).

### Ví dụ dữ liệu dạng bảng trong thực tế:
- **Bảng điểm học sinh**: Tên học sinh (hàng) và các môn học (cột)
- **Danh sách sản phẩm**: Tên sản phẩm, giá, mô tả, số lượng
- **Lịch làm việc**: Ngày (cột) và ca làm việc (hàng)
- **Thông tin dinh dưỡng**: Thực phẩm và các chất dinh dưỡng

Một bảng được triển khai đúng cách sẽ được các công cụ hỗ trợ tiếp cận (accessibility tools) như trình đọc màn hình (screen readers) xử lý tốt, giúp cải thiện trải nghiệm cho cả người dùng có thị lực bình thường và người khiếm thị.

**Điều quan trọng cần nhớ**: Bảng HTML được thiết kế và chỉ nên được sử dụng cho **dữ liệu dạng bảng**.

## Cấu trúc cơ bản của Bảng HTML (Basic HTML Table Structure)

Mọi nội dung của bảng đều được đặt trong các thẻ `<table></table>`. Bên trong thẻ `<table>`, bạn sẽ định nghĩa các hàng và ô.

### Các thẻ cơ bản:

*   **Thẻ `<td>` (Table Data)**: Đây là thẻ tạo ra ô nhỏ nhất trong một bảng, chứa **dữ liệu** của bảng. Khi bạn thêm nhiều thẻ `<td>` vào cùng một cấp, chúng sẽ tự động được sắp xếp theo chiều ngang trên cùng một hàng.

*   **Thẻ `<tr>` (Table Row)**: Để nhóm các ô thành một hàng riêng biệt, bạn sử dụng thẻ `<tr>`. Thẻ này sẽ ngăn hàng hiện tại phát triển dài hơn và bắt đầu đặt các ô tiếp theo trên một hàng mới.

*   **Thẻ `<th>` (Table Header)**: Đây là các ô đặc biệt nằm ở đầu một hàng hoặc cột, định nghĩa loại dữ liệu mà hàng hoặc cột đó chứa. Thẻ `<th>` hoạt động tương tự như `<td>` nhưng có ý nghĩa ngữ nghĩa (semantically) là một tiêu đề.

### Lợi ích của `<th>`:
- Giúp dữ liệu dễ đọc hơn vì tiêu đề nổi bật.
- Trình đọc màn hình nhận diện `<th>` là tiêu đề và sử dụng chúng để tạo các liên kết chương trình (programmatic associations) giữa tiêu đề và các ô dữ liệu liên quan, giúp người dùng khiếm thị hiểu bảng dễ dàng hơn.
- Các tiêu đề bảng có kiểu dáng mặc định (in đậm và căn giữa) để giúp chúng nổi bật.

### Ví dụ về Bảng HTML cơ bản:

```html
<!-- Bảng đơn giản với 2 hàng và 4 cột -->
<table>
  <tr>
    <td>Hi, I'm your first cell.</td>
    <td>I'm your second cell.</td>
    <td>I'm your third cell.</td>
    <td>I'm your fourth cell.</td>
  </tr>
  <tr>
    <td>Second row, first cell.</td>
    <th>Knocky</th>
    <td>Cell 3.</td>
    <td>Cell 4.</td>
  </tr>
</table>
```

### Ví dụ thực tế - Bảng thông tin học sinh:

```html
<table>
  <tr>
    <th>Tên học sinh</th>
    <th>Tuổi</th>
    <th>Lớp</th>
    <th>Điểm trung bình</th>
  </tr>
  <tr>
    <td>Nguyễn Văn An</td>
    <td>16</td>
    <td>10A1</td>
    <td>8.5</td>
  </tr>
  <tr>
    <td>Trần Thị Bình</td>
    <td>15</td>
    <td>10A2</td>
    <td>9.2</td>
  </tr>
</table>
```

## Thẻ và thuộc tính nâng cao để Cấu trúc và Tăng cường Khả năng tiếp cận

### 1. Thẻ `<caption>`

Thẻ này được sử dụng để cung cấp một **chú thích hoặc mô tả** cho nội dung của toàn bộ bảng.

**Lợi ích của `<caption>`:**
- Rất hữu ích cho tất cả người đọc muốn có cái nhìn tổng quan nhanh chóng về bảng
- Đặc biệt quan trọng đối với người dùng khiếm thị. Thay vì phải nghe trình đọc màn hình đọc từng ô dữ liệu để hiểu bảng nói về gì, họ có thể dựa vào `<caption>` để quyết định xem có nên đọc bảng chi tiết hơn hay không.
- Thẻ `<caption>` nên được đặt ngay dưới thẻ `<table>` mở.

**Ví dụ về `<caption>`:**
```html
<table>
  <caption>Thời khóa biểu hàng tuần của Florence</caption>
  <tr>
    <th>Thứ</th>
    <th>8:00-9:00</th>
    <th>9:00-10:00</th>
    <th>10:00-11:00</th>
  </tr>
  <tr>
    <td>Thứ 2</td>
    <td>Toán</td>
    <td>Văn</td>
    <td>Anh</td>
  </tr>
  <tr>
    <td>Thứ 3</td>
    <td>Lý</td>
    <td>Hóa</td>
    <td>Sinh</td>
  </tr>
</table>
```

### 2. Thẻ `<thead>`, `<tbody>`, và `<tfoot>`

Các thẻ này giúp bạn đánh dấu các phần header (đầu bảng), body (thân bảng) và footer (chân bảng) của bảng, cung cấp thêm **định nghĩa cấu trúc**.

**Lợi ích:**
- Không trực tiếp làm cho bảng dễ tiếp cận hơn đối với người đọc màn hình, nhưng rất hữu ích cho việc **áp dụng kiểu dáng (styling) và cải thiện bố cục** bằng CSS
- Bạn có thể làm cho tiêu đề và chân bảng lặp lại trên mỗi trang in
- Có thể làm cho phần thân bảng hiển thị trên một trang duy nhất và có thể cuộn

**Thứ tự sử dụng**: `<thead>` → `<tbody>` → `<tfoot>`

**Ví dụ về `<thead>`, `<tbody>`, `<tfoot>`:**
```html
<table>
  <caption>Báo cáo chi tiêu tháng 12</caption>
  <thead>
    <tr>
      <th>Mục chi</th>
      <th>Địa điểm</th>
      <th>Ngày</th>
      <th>Đánh giá</th>
      <th>Chi phí (VNĐ)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Cắt tóc</td>
      <td>Salon ABC</td>
      <td>12/12</td>
      <td>Rất tốt</td>
      <td>150,000</td>
    </tr>
    <tr>
      <td>Ăn trưa</td>
      <td>Nhà hàng XYZ</td>
      <td>15/12</td>
      <td>Ngon</td>
      <td>200,000</td>
    </tr>
    <tr>
      <td>Mua sách</td>
      <td>Nhà sách DEF</td>
      <td>20/12</td>
      <td>Hữu ích</td>
      <td>350,000</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="4"><strong>Tổng cộng</strong></td>
      <td><strong>700,000</strong></td>
    </tr>
  </tfoot>
</table>
```

### 3. Thuộc tính `colspan` và `rowspan`

Đôi khi, bạn muốn một ô bao phủ nhiều hàng hoặc cột.

- **`colspan`**: Làm cho một ô bao phủ số lượng cột được chỉ định theo chiều ngang
- **`rowspan`**: Làm cho một ô bao phủ số lượng hàng được chỉ định theo chiều dọc

**Ví dụ về `colspan` và `rowspan`:**
```html
<!-- Bảng phân loại động vật -->
<table>
  <tr>
    <th colspan="2">Động vật</th> <!-- Tiêu đề "Động vật" bao phủ 2 cột -->
  </tr>
  <tr>
    <th colspan="2">Hà mã</th>
  </tr>
  <tr>
    <th rowspan="2">Ngựa</th> <!-- Tiêu đề "Ngựa" bao phủ 2 hàng -->
    <td>Ngựa cái</td>
  </tr>
  <tr>
    <td>Ngựa đực</td>
  </tr>
  <tr>
    <th colspan="2">Cá sấu</th>
  </tr>
  <tr>
    <th rowspan="2">Gà</th>
    <td>Gà mái</td>
  </tr>
  <tr>
    <td>Gà trống</td>
  </tr>
</table>
```

**Ví dụ thực tế - Bảng thời khóa biểu:**
```html
<table>
  <caption>Thời khóa biểu lớp 10A1</caption>
  <tr>
    <th>Tiết</th>
    <th>Thứ 2</th>
    <th>Thứ 3</th>
    <th>Thứ 4</th>
    <th>Thứ 5</th>
    <th>Thứ 6</th>
  </tr>
  <tr>
    <td>1-2</td>
    <td rowspan="2">Toán</td> <!-- Toán kéo dài 2 tiết -->
    <td>Văn</td>
    <td>Anh</td>
    <td>Lý</td>
    <td>Hóa</td>
  </tr>
  <tr>
    <td>3-4</td>
    <!-- Ô Toán đã được rowspan ở trên -->
    <td>Sử</td>
    <td>Địa</td>
    <td>Sinh</td>
    <td>GDCD</td>
  </tr>
  <tr>
    <td>5</td>
    <td colspan="5">Nghỉ trưa</td> <!-- Nghỉ trưa cho tất cả các ngày -->
  </tr>
</table>
```

### 4. Thuộc tính `scope`

Thuộc tính `scope` có thể được thêm vào thẻ `<th>` để cho trình đọc màn hình biết chính xác ô tiêu đề này là tiêu đề cho những ô nào.

**Các giá trị của `scope`:**
- **`col`**: Tiêu đề cho toàn bộ cột mà nó thuộc về
- **`row`**: Tiêu đề cho toàn bộ hàng mà nó thuộc về
- **`colgroup`**: Tiêu đề cho một nhóm cột (thường được sử dụng với `colspan`)
- **`rowgroup`**: Tiêu đề cho một nhóm hàng (thường được sử dụng với `rowspan`)

**Ví dụ về `scope`:**
```html
<table>
  <caption>Doanh số bán hàng tháng 8/2024</caption>
  <thead>
    <tr>
      <td colspan="2" rowspan="2"></td>
      <th colspan="3" scope="colgroup">Quần áo</th> <!-- "Quần áo" là tiêu đề cho nhóm cột -->
      <th colspan="2" scope="colgroup">Phụ kiện</th>
    </tr>
    <tr>
      <th scope="col">Quần</th> <!-- "Quần" là tiêu đề cho cột -->
      <th scope="col">Váy</th>
      <th scope="col">Áo</th>
      <th scope="col">Vòng tay</th>
      <th scope="col">Nhẫn</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th rowspan="3" scope="rowgroup">Việt Nam</th> <!-- "Việt Nam" là tiêu đề cho nhóm hàng -->
      <th scope="row">Hà Nội</th> <!-- "Hà Nội" là tiêu đề cho hàng -->
      <td>56</td><td>22</td><td>43</td><td>72</td><td>23</td>
    </tr>
    <tr>
      <th scope="row">TP.HCM</th>
      <td>48</td><td>35</td><td>51</td><td>67</td><td>31</td>
    </tr>
    <tr>
      <th scope="row">Đà Nẵng</th>
      <td>32</td><td>18</td><td>29</td><td>45</td><td>19</td>
    </tr>
  </tbody>
</table>
```

### 5. Thuộc tính `id` và `headers`

Đây là một cách thay thế để tạo liên kết giữa các ô dữ liệu và ô tiêu đề, đặc biệt trong các bảng phức tạp hơn.

- **`id`**: Mỗi thẻ `<th>` cần có một `id` duy nhất
- **`headers`**: Thuộc tính `headers` được sử dụng trên thẻ `<td>` hoặc `<th>` để liên kết nó với một hoặc nhiều ô tiêu đề bằng cách liệt kê các `id` của các thẻ `<th>` liên quan, cách nhau bằng dấu cách

**Ví dụ về `id` và `headers`:**
```html
<table>
  <caption>Bảng điểm chi tiết học kỳ I</caption>
  <thead>
    <tr>
      <td rowspan="2"></td>
      <th colspan="3" id="toan-ly-hoa">Khối tự nhiên</th>
      <th colspan="2" id="van-su-dia">Khối xã hội</th>
    </tr>
    <tr>
      <th id="toan" headers="toan-ly-hoa">Toán</th>
      <th id="ly" headers="toan-ly-hoa">Lý</th>
      <th id="hoa" headers="toan-ly-hoa">Hóa</th>
      <th id="van" headers="van-su-dia">Văn</th>
      <th id="su" headers="van-su-dia">Sử</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th id="an">Nguyễn Văn An</th>
      <td headers="an toan-ly-hoa toan">9.0</td>
      <td headers="an toan-ly-hoa ly">8.5</td>
      <td headers="an toan-ly-hoa hoa">8.8</td>
      <td headers="an van-su-dia van">7.5</td>
      <td headers="an van-su-dia su">8.0</td>
    </tr>
    <tr>
      <th id="binh">Trần Thị Bình</th>
      <td headers="binh toan-ly-hoa toan">8.5</td>
      <td headers="binh toan-ly-hoa ly">9.0</td>
      <td headers="binh toan-ly-hoa hoa">8.2</td>
      <td headers="binh van-su-dia van">9.5</td>
      <td headers="binh van-su-dia su">9.0</td>
    </tr>
  </tbody>
</table>
```

### 6. Thẻ `<col>` và `<colgroup>`

- **`<col>` (Column)**: Một phần tử không có nội dung, đại diện cho một cột duy nhất trong bảng
- **`<colgroup>` (Column Group)**: Một nhóm các cột

**Mục đích chính**: Áp dụng kiểu dáng (styling) cho các cột mà không cần áp dụng kiểu dáng cho từng ô.

**Ví dụ về `<col>` và `<colgroup>`:**
```html
<table>
  <caption>Bảng báo cáo tài chính</caption>
  <colgroup>
    <col> <!-- Cột đầu tiên: tên mục -->
    <col span="2" style="background-color: #f0f0f0;"> <!-- 2 cột tiếp theo: có màu nền -->
    <col style="background-color: #e0e0e0;"> <!-- Cột cuối: màu nền khác -->
  </colgroup>
  <thead>
    <tr>
      <th>Mục</th>
      <th>Quý 1</th>
      <th>Quý 2</th>
      <th>Tổng</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Doanh thu</td>
      <td>1,000,000</td>
      <td>1,200,000</td>
      <td>2,200,000</td>
    </tr>
    <tr>
      <td>Chi phí</td>
      <td>800,000</td>
      <td>900,000</td>
      <td>1,700,000</td>
    </tr>
  </tbody>
</table>
```

## Tạo kiểu cho Bảng (Styling Tables)

Để các bảng HTML trở nên hiệu quả trên web, bạn cần cung cấp thông tin kiểu dáng bằng CSS, bên cạnh cấu trúc HTML vững chắc.

### Các thuộc tính CSS quan trọng cho bảng:

**`border-collapse`**: Quyết định xem đường viền của các ô có được gộp lại thành một đường duy nhất hay không.
```css
/* Gộp đường viền (phổ biến hơn) */
table {
  border-collapse: collapse;
}

/* Tách biệt đường viền */
table {
  border-collapse: separate;
}
```

**`border-spacing`**: Khoảng cách giữa các ô (chỉ áp dụng khi `border-collapse: separate`).
```css
table {
  border-collapse: separate;
  border-spacing: 5px 3px; /* 5px ngang, 3px dọc */
}
```

**`padding`**: Khoảng đệm bên trong các ô.
```css
td, th {
  padding: 10px 15px;
}
```

### Ví dụ styling hoàn chỉnh:
```html
<style>
.styled-table {
  border-collapse: collapse;
  width: 100%;
  font-family: Arial, sans-serif;
}

.styled-table th,
.styled-table td {
  border: 1px solid #ddd;
  padding: 12px;
  text-align: left;
}

.styled-table th {
  background-color: #4CAF50;
  color: white;
  font-weight: bold;
}

.styled-table tr:nth-child(even) {
  background-color: #f2f2f2;
}

.styled-table tr:hover {
  background-color: #ddd;
}

.styled-table caption {
  font-size: 1.2em;
  margin-bottom: 10px;
  font-weight: bold;
}
</style>

<table class="styled-table">
  <caption>Danh sách nhân viên xuất sắc</caption>
  <thead>
    <tr>
      <th>Tên</th>
      <th>Phòng ban</th>
      <th>Năm kinh nghiệm</th>
      <th>Lương (triệu VNĐ)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Nguyễn Văn A</td>
      <td>IT</td>
      <td>5</td>
      <td>15</td>
    </tr>
    <tr>
      <td>Trần Thị B</td>
      <td>Kế toán</td>
      <td>3</td>
      <td>12</td>
    </tr>
    <tr>
      <td>Lê Văn C</td>
      <td>Marketing</td>
      <td>7</td>
      <td>18</td>
    </tr>
  </tbody>
</table>
```

## Khi nào nên và không nên sử dụng Bảng HTML

### ✅ Nên sử dụng bảng khi:
Dữ liệu có tính chất **dạng bảng (tabular data)**, tức là thông tin được tổ chức một cách hợp lý theo hàng và cột.

**Ví dụ phù hợp:**
- **Bảng so sánh sản phẩm:**
```html
<table>
  <caption>So sánh gói dịch vụ hosting</caption>
  <thead>
    <tr>
      <th>Tính năng</th>
      <th>Gói cơ bản</th>
      <th>Gói nâng cao</th>
      <th>Gói doanh nghiệp</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Dung lượng</td>
      <td>1GB</td>
      <td>10GB</td>
      <td>100GB</td>
    </tr>
    <tr>
      <td>Băng thông</td>
      <td>10GB/tháng</td>
      <td>100GB/tháng</td>
      <td>Không giới hạn</td>
    </tr>
    <tr>
      <td>Giá</td>
      <td>50,000 VNĐ/tháng</td>
      <td>150,000 VNĐ/tháng</td>
      <td>500,000 VNĐ/tháng</td>
    </tr>
  </tbody>
</table>
```

- **Bảng thông tin dinh dưỡng:**
```html
<table>
  <caption>Thông tin dinh dưỡng (trên 100g)</caption>
  <thead>
    <tr>
      <th>Thực phẩm</th>
      <th>Calories</th>
      <th>Protein (g)</th>
      <th>Carbs (g)</th>
      <th>Fat (g)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Gạo trắng</td>
      <td>130</td>
      <td>2.7</td>
      <td>28</td>
      <td>0.3</td>
    </tr>
    <tr>
      <td>Thịt bò</td>
      <td>250</td>
      <td>26</td>
      <td>0</td>
      <td>17</td>
    </tr>
  </tbody>
</table>
```

### ❌ Không nên sử dụng bảng khi:
**Để bố cục trang web (page layout)**. Trong quá khứ, bảng HTML thường được sử dụng cho mục đích bố cục do CSS còn hạn chế, nhưng điều này không còn cần thiết nữa.

**Các lý do chính không nên sử dụng bảng cho bố cục:**

1. **Giảm khả năng tiếp cận (Accessibility)**: Trình đọc màn hình sẽ thông báo đây là dữ liệu dạng bảng, gây nhầm lẫn cho người dùng khiếm thị.

2. **Tạo "súp thẻ" (Tag Soup)**: Mã phức tạp hơn, khó maintain.

3. **Ảnh hưởng đến SEO**: Thứ tự mã nguồn ảnh hưởng đến SEO.

4. **Không tự động thích ứng (Not Automatically Responsive)**: Khó responsive trên mobile.

**Thay vì dùng bảng cho layout, hãy sử dụng:**
```html
<!-- ❌ Sai: Dùng bảng cho layout -->
<table>
  <tr>
    <td>Header</td>
  </tr>
  <tr>
    <td>
      <table>
        <tr>
          <td>Sidebar</td>
          <td>Main content</td>
        </tr>
      </table>
    </td>
  </tr>
  <tr>
    <td>Footer</td>
  </tr>
</table>

<!-- ✅ Đúng: Dùng semantic HTML + CSS -->
<header>Header</header>
<main>
  <aside>Sidebar</aside>
  <section>Main content</section>
</main>
<footer>Footer</footer>
```

## Các khái niệm khác về Bảng

### 1. Bảng responsive (Responsive Tables)

Bảng có thể khó xử lý trên màn hình nhỏ. Một số giải pháp:

**Cách 1: Horizontal scroll**
```css
.table-container {
  overflow-x: auto;
}

.responsive-table {
  min-width: 600px;
}
```

**Cách 2: Stack trên mobile**
```css
@media screen and (max-width: 600px) {
  .responsive-table,
  .responsive-table thead,
  .responsive-table tbody,
  .responsive-table th,
  .responsive-table td,
  .responsive-table tr {
    display: block;
  }
  
  .responsive-table thead tr {
    position: absolute;
    top: -9999px;
    left: -9999px;
  }
  
  .responsive-table tr {
    border: 1px solid #ccc;
    margin-bottom: 10px;
  }
  
  .responsive-table td {
    border: none;
    position: relative;
    padding-left: 50%;
  }
  
  .responsive-table td:before {
    content: attr(data-label) ": ";
    position: absolute;
    left: 6px;
    width: 45%;
    text-align: left;
    font-weight: bold;
  }
}
```

**Ví dụ HTML với data-label:**
```html
<table class="responsive-table">
  <thead>
    <tr>
      <th>Tên</th>
      <th>Email</th>
      <th>Điện thoại</th>
      <th>Địa chỉ</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Tên">Nguyễn Văn A</td>
      <td data-label="Email">a@example.com</td>
      <td data-label="Điện thoại">0123456789</td>
      <td data-label="Địa chỉ">123 Đường ABC, Hà Nội</td>
    </tr>
  </tbody>
</table>
```

### 2. Tạo mã bảng bằng Emmet

Emmet là một công cụ tuyệt vời giúp viết mã HTML nhanh hơn, đặc biệt hữu ích cho các cấu trúc lặp đi lặp lại như bảng.

**Các ví dụ Emmet:**

```
// Bảng cơ bản 3x4 (3 hàng, 4 cột)
table>tr*3>td*4

// Bảng với header
table>thead>tr>th*4^^tbody>tr*3>td*4

// Bảng hoàn chỉnh với caption, thead, tbody, tfoot
table>caption+thead>tr>th*3^^tbody>tr*5>td*3^^tfoot>tr>td*3

// Bảng với số thứ tự
table>tr*3>td.item-${Item $}*4
```

**Kết quả của `table>thead>tr>th*4^^tbody>tr*3>td*4`:**
```html
<table>
  <thead>
    <tr>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>
```

### 3. Tạo bảng bằng JavaScript

JavaScript cung cấp API `HTMLTableElement` để xử lý bảng một cách chuyên biệt.

**Ví dụ tạo bảng động:**
```html
<div id="table-container"></div>

<script>
// Dữ liệu mẫu
const employees = [
  { name: "Nguyễn Văn A", department: "IT", salary: 15000000 },
  { name: "Trần Thị B", department: "HR", salary: 12000000 },
  { name: "Lê Văn C", department: "Marketing", salary: 13000000 }
];

// Tạo bảng
function createEmployeeTable(data) {
  // Tạo phần tử table
  const table = document.createElement('table');
  table.className = 'employee-table';
  
  // Tạo caption
  const caption = table.createCaption();
  caption.textContent = 'Danh sách nhân viên';
  
  // Tạo header
  const thead = table.createTHead();
  const headerRow = thead.insertRow();
  
  const headers = ['Tên', 'Phòng ban', 'Lương (VNĐ)'];
  headers.forEach(headerText => {
    const th = document.createElement('th');
    th.textContent = headerText;
    headerRow.appendChild(th);
  });
  
  // Tạo body
  const tbody = table.createTBody();
  
  data.forEach(employee => {
    const row = tbody.insertRow();
    
    // Thêm dữ liệu vào từng ô
    const nameCell = row.insertCell();
    nameCell.textContent = employee.name;
    
    const deptCell = row.insertCell();
    deptCell.textContent = employee.department;
    
    const salaryCell = row.insertCell();
    salaryCell.textContent = employee.salary.toLocaleString('vi-VN');
  });
  
  return table;
}

// Chèn bảng vào DOM
const container = document.getElementById('table-container');
const table = createEmployeeTable(employees);
container.appendChild(table);
</script>
```

### 4. Sắp xếp và Tìm kiếm Bảng

Mặc dù HTML có thuộc tính `sortable` nhưng đã bị loại bỏ. Chức năng sắp xếp thường được thực hiện bằng JavaScript.

**Ví dụ tìm kiếm bảng đơn giản:**
```html
<input type="text" id="searchInput" placeholder="Tìm kiếm..." onkeyup="searchTable()">

<table id="searchableTable">
  <thead>
    <tr>
      <th>Tên sản phẩm</th>
      <th>Giá</th>
      <th>Danh mục</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>iPhone 15</td>
      <td>25,000,000</td>
      <td>Điện thoại</td>
    </tr>
    <tr>
      <td>MacBook Pro</td>
      <td>45,000,000</td>
      <td>Laptop</td>
    </tr>
    <tr>
      <td>iPad Air</td>
      <td>15,000,000</td>
      <td>Tablet</td>
    </tr>
  </tbody>
</table>

<script>
function searchTable() {
  const input = document.getElementById("searchInput");
  const filter = input.value.toUpperCase();
  const table = document.getElementById("searchableTable");
  const tr = table.getElementsByTagName("tr");
  
  // Lặp qua tất cả các hàng (trừ header)
  for (let i = 1; i < tr.length; i++) {
    let txtValue = tr[i].textContent || tr[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      tr[i].style.display = "";
    } else {
      tr[i].style.display = "none";
    }
  }
}
</script>
```

**Ví dụ sắp xếp bảng:**
```html
<table id="sortableTable">
  <thead>
    <tr>
      <th onclick="sortTable(0)">Tên ↕</th>
      <th onclick="sortTable(1)">Tuổi ↕</th>
      <th onclick="sortTable(2)">Điểm ↕</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>An</td><td>25</td><td>8.5</td></tr>
    <tr><td>Bình</td><td>22</td><td>9.2</td></tr>
    <tr><td>Cường</td><td>28</td><td>7.8</td></tr>
  </tbody>
</table>

<script>
function sortTable(columnIndex) {
  const table = document.getElementById("sortableTable");
  const tbody = table.querySelector('tbody');
  const rows = Array.from(tbody.querySelectorAll('tr'));
  
  // Sắp xếp các hàng
  rows.sort((a, b) => {
    const aVal = a.cells[columnIndex].textContent.trim();
    const bVal = b.cells[columnIndex].textContent.trim();
    
    // Kiểm tra nếu là số
    if (!isNaN(aVal) && !isNaN(bVal)) {
      return parseFloat(aVal) - parseFloat(bVal);
    }
    
    // Sắp xếp theo chuỗi
    return aVal.localeCompare(bVal);
  });
  
  // Thêm lại các hàng đã sắp xếp
  rows.forEach(row => tbody.appendChild(row));
}
</script>
```

### 5. Khiến các phần tử ngữ nghĩa hoạt động như bảng

CSS cho phép bất kỳ phần tử nào cũng có thể hoạt động như một phần tử bảng thông qua thuộc tính `display`.

**Các giá trị display cho bảng:**
- `display: table` → `<table>`
- `display: table-row` → `<tr>`
- `display: table-cell` → `<td>` hoặc `<th>`
- `display: table-row-group` → `<tbody>`
- `display: table-header-group` → `<thead>`
- `display: table-footer-group` → `<tfoot>`

**Ví dụ:**
```html
<div class="table">
  <div class="table-header">
    <div class="table-cell">Tên</div>
    <div class="table-cell">Email</div>
    <div class="table-cell">Chức vụ</div>
  </div>
  <div class="table-row">
    <div class="table-cell">Nguyễn Văn A</div>
    <div class="table-cell">a@company.com</div>
    <div class="table-cell">Developer</div>
  </div>
  <div class="table-row">
    <div class="table-cell">Trần Thị B</div>
    <div class="table-cell">b@company.com</div>
    <div class="table-cell">Designer</div>
  </div>
</div>

<style>
.table {
  display: table;
  width: 100%;
  border-collapse: collapse;
}

.table-header {
  display: table-header-group;
  background-color: #f0f0f0;
  font-weight: bold;
}

.table-row {
  display: table-row;
}

.table-row:nth-child(even) {
  background-color: #f9f9f9;
}

.table-cell {
  display: table-cell;
  padding: 10px;
  border: 1px solid #ddd;
}
</style>
```

### 6. Các thuộc tính đã lỗi thời (Deprecated Attributes)

Nhiều thuộc tính cũ liên quan đến kiểu dáng trên các phần tử bảng đã bị lỗi thời. **Không nên sử dụng:**

```html
<!-- ❌ Các thuộc tính đã lỗi thời -->
<table border="1" cellpadding="10" cellspacing="5" bgcolor="#f0f0f0" width="100%">
  <tr>
    <td align="center" valign="top" bgcolor="#ffffff">Nội dung</td>
  </tr>
</table>

<!-- ✅ Sử dụng CSS thay thế -->
<table class="modern-table">
  <tr>
    <td class="center-cell">Nội dung</td>
  </tr>
</table>

<style>
.modern-table {
  border: 1px solid #000;
  border-collapse: collapse;
  background-color: #f0f0f0;
  width: 100%;
}

.modern-table td {
  padding: 10px;
  border: 1px solid #ddd;
}

.center-cell {
  text-align: center;
  vertical-align: top;
  background-color: #ffffff;
}
</style>
```

### 7. Bảng phức tạp với nhiều tính năng

**Ví dụ bảng hoàn chỉnh với nhiều tính năng:**
```html
<!DOCTYPE html>
<html>
<head>
  <style>
    .advanced-table {
      width: 100%;
      border-collapse: collapse;
      font-family: Arial, sans-serif;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }
    
    .advanced-table caption {
      font-size: 1.5em;
      margin-bottom: 15px;
      color: #333;
      font-weight: bold;
    }
    
    .advanced-table th,
    .advanced-table td {
      padding: 12px;
      text-align: left;
      border-bottom: 1px solid #ddd;
    }
    
    .advanced-table th {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      cursor: pointer;
      position: sticky;
      top: 0;
      z-index: 10;
    }
    
    .advanced-table th:hover {
      background: linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%);
    }
    
    .advanced-table tbody tr:nth-child(even) {
      background-color: #f8f9fa;
    }
    
    .advanced-table tbody tr:hover {
      background-color: #e3f2fd;
      transform: scale(1.01);
      transition: all 0.2s ease;
    }
    
    .advanced-table .number {
      text-align: right;
      font-family: 'Courier New', monospace;
    }
    
    .advanced-table .status {
      padding: 4px 8px;
      border-radius: 12px;
      font-size: 0.8em;
      font-weight: bold;
    }
    
    .status.active {
      background-color: #d4edda;
      color: #155724;
    }
    
    .status.inactive {
      background-color: #f8d7da;
      color: #721c24;
    }
    
    .search-box {
      margin-bottom: 15px;
      padding: 10px;
      border: 2px solid #ddd;
      border-radius: 5px;
      font-size: 16px;
      width: 300px;
    }
    
    @media (max-width: 768px) {
      .advanced-table {
        font-size: 14px;
      }
      
      .advanced-table th,
      .advanced-table td {
        padding: 8px 4px;
      }
    }
  </style>
</head>
<body>

<input type="text" class="search-box" placeholder="Tìm kiếm nhân viên..." onkeyup="searchAdvancedTable()">

<table class="advanced-table" id="advancedTable">
  <caption>Hệ thống quản lý nhân viên - Q4/2024</caption>
  <colgroup>
    <col style="width: 15%;">
    <col style="width: 20%;">
    <col style="width: 15%;">
    <col style="width: 20%;">
    <col style="width: 15%;">
    <col style="width: 15%;">
  </colgroup>
  <thead>
    <tr>
      <th onclick="sortAdvancedTable(0)">ID 📊</th>
      <th onclick="sortAdvancedTable(1)">Họ tên 📊</th>
      <th onclick="sortAdvancedTable(2)">Phòng ban 📊</th>
      <th onclick="sortAdvancedTable(3)">Email 📊</th>
      <th onclick="sortAdvancedTable(4)">Lương (VNĐ) 📊</th>
      <th onclick="sortAdvancedTable(5)">Trạng thái 📊</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="number">001</td>
      <td>Nguyễn Văn An</td>
      <td>Công nghệ thông tin</td>
      <td>an.nv@company.vn</td>
      <td class="number">25,000,000</td>
      <td><span class="status active">Đang làm</span></td>
    </tr>
    <tr>
      <td class="number">002</td>
      <td>Trần Thị Bình</td>
      <td>Nhân sự</td>
      <td>binh.tt@company.vn</td>
      <td class="number">18,000,000</td>
      <td><span class="status active">Đang làm</span></td>
    </tr>
    <tr>
      <td class="number">003</td>
      <td>Lê Văn Cường</td>
      <td>Marketing</td>
      <td>cuong.lv@company.vn</td>
      <td class="number">22,000,000</td>
      <td><span class="status inactive">Nghỉ phép</span></td>
    </tr>
    <tr>
      <td class="number">004</td>
      <td>Phạm Thị Dung</td>
      <td>Kế toán</td>
      <td>dung.pt@company.vn</td>
      <td class="number">20,000,000</td>
      <td><span class="status active">Đang làm</span></td>
    </tr>
    <tr>
      <td class="number">005</td>
      <td>Hoàng Văn Em</td>
      <td>Công nghệ thông tin</td>
      <td>em.hv@company.vn</td>
      <td class="number">28,000,000</td>
      <td><span class="status active">Đang làm</span></td>
    </tr>
  </tbody>
  <tfoot>
    <tr style="background-color: #f0f0f0; font-weight: bold;">
      <td colspan="4">Tổng số nhân viên</td>
      <td class="number">5 người</td>
      <td>Tổng lương: 113M</td>
    </tr>
  </tfoot>
</table>

<script>
function searchAdvancedTable() {
  const input = event.target;
  const filter = input.value.toUpperCase();
  const table = document.getElementById("advancedTable");
  const tr = table.getElementsByTagName("tr");
  
  for (let i = 1; i < tr.length - 1; i++) { // Bỏ qua header và footer
    let txtValue = tr[i].textContent || tr[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      tr[i].style.display = "";
    } else {
      tr[i].style.display = "none";
    }
  }
}

function sortAdvancedTable(columnIndex) {
  const table = document.getElementById("advancedTable");
  const tbody = table.querySelector('tbody');
  const rows = Array.from(tbody.querySelectorAll('tr'));
  
  rows.sort((a, b) => {
    let aVal = a.cells[columnIndex].textContent.trim();
    let bVal = b.cells[columnIndex].textContent.trim();
    
    // Xử lý số có dấu phẩy
    if (aVal.includes(',') && bVal.includes(',')) {
      aVal = parseFloat(aVal.replace(/,/g, ''));
      bVal = parseFloat(bVal.replace(/,/g, ''));
      return aVal - bVal;
    }
    
    // Xử lý số
    if (!isNaN(aVal) && !isNaN(bVal)) {
      return parseFloat(aVal) - parseFloat(bVal);
    }
    
    // Xử lý chuỗi
    return aVal.localeCompare(bVal, 'vi');
  });
  
  rows.forEach(row => tbody.appendChild(row));
}
</script>

</body>
</html>
```

## Kết luận

Việc hiểu rõ các phần tử HTML liên quan đến bảng và các thuộc tính của chúng, cùng với việc nắm vững cách sử dụng CSS để tạo kiểu và kiến thức về khả năng tiếp cận, sẽ giúp bạn xây dựng các bảng hiệu quả và thân thiện với người dùng trên web.

**Những điểm quan trọng cần nhớ:**

1. **Chỉ sử dụng bảng cho dữ liệu dạng bảng** - không dùng cho layout
2. **Luôn sử dụng các thẻ ngữ nghĩa** như `<th>`, `<caption>`, `<thead>`, `<tbody>`, `<tfoot>`
3. **Cung cấp thông tin accessibility** qua `scope`, `headers`, `caption`
4. **Sử dụng CSS để styling** thay vì các thuộc tính HTML đã lỗi thời
5. **Tối ưu cho responsive** trên các thiết bị khác nhau
6. **Cân nhắc UX** với các tính năng như search, sort khi cần thiết

Bảng HTML khi được sử dụng đúng cách sẽ mang lại trải nghiệm tuyệt vời cho người dùng và hỗ trợ tốt cho accessibility.

## Tài liệu phải đọc khi ĐÓNG CỌC LẦN 2
1. https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-tables
1. https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Basics
1. https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Advanced
1. https://css-tricks.com/complete-guide-table-element/
1. https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Structuring_pl1. 
1. https://pencilandpaper.io/articles/ux-pattern-analysis-enterprise-data-tables

> ⭐ **Theo dõi [kênh Threads](https://www.threads.com/@kaitaku.88) để đọc bài mới mỗi ngày!** ⭐  

**[<== Bài Trước  ](link)          |[  Trang Chủ  ](./README.md)|           [  Bài Sau ==>](link)**