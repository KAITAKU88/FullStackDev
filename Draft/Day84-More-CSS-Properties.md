# Tài liệu CSS Properties với Ví dụ Chi tiết

## **Các Thuộc Tính CSS Phổ Biến**

CSS có rất nhiều thuộc tính, nhưng chỉ một số lượng nhỏ trong số đó được sử dụng thường xuyên hàng ngày. Bài học này sẽ bao gồm hầu hết các mục mà bạn sẽ sử dụng thường xuyên để thêm điểm nhấn cho các dự án của mình. Bạn không cần phải ghi nhớ tất cả cú pháp chính xác của từng thuộc tính, chỉ cần biết chúng tồn tại và có ý tưởng chung về chức năng của chúng.

### 1. **Thuộc tính `background` (Nền)**

Thuộc tính `background` là một thuộc tính viết tắt (shorthand property) trong CSS, cho phép bạn kiểm soát nền của bất kỳ phần tử nào (những gì được vẽ bên dưới nội dung của phần tử đó). Nó cho phép bạn đặt tất cả các thuộc tính liên quan đến nền cùng một lúc, chẳng hạn như màu sắc, hình ảnh, vị trí, kích thước, cách lặp lại (repeat method), và đính kèm (attachment).

#### **Các thuộc tính thành phần (Constituent properties)**:
- `background-attachment`
- `background-clip`
- `background-color`
- `background-image`
- `background-origin`
- `background-position`
- `background-repeat`
- `background-size`

#### **Cách sử dụng và Lưu ý:**
- Bạn có thể sử dụng các thuộc tính riêng lẻ hoặc thuộc tính viết tắt `background`. Tuy nhiên, nếu bạn chỉ định một số thuộc tính con thông qua thuộc tính viết tắt, bất kỳ thuộc tính nào không được đặt sẽ tự động trở về giá trị mặc định của chúng. Ví dụ, nếu bạn đặt `background-color: red;` sau đó dùng `background: url(sweettexture.jpg);`, nền sẽ trở thành trong suốt (`transparent`) thay vì màu đỏ. Cách khắc phục là đặt `background-color` sau `background` hoặc sử dụng thuộc tính viết tắt kèm màu (ví dụ: `background: url(...) red;`).
- MDN lưu ý rằng phần cú pháp chính thức (`Formal Syntax`) cho `background` có thể rất phức tạp (`crazy`), nhưng đừng để nó làm bạn nản lòng. Điều này là do nhiều thuộc tính tạo nên shorthand là tùy chọn hoặc có thể xuất hiện ở các vị trí khác nhau trong định nghĩa.
- CSS3 đã bổ sung hỗ trợ cho **nhiều lớp nền (multiple background layers)**, chúng sẽ xếp chồng lên nhau. Bất kỳ thuộc tính nào liên quan đến nền có thể nhận một danh sách giá trị được phân tách bằng dấu phẩy. Giá trị đầu tiên trong danh sách tương ứng với lớp trên cùng, giá trị thứ hai là lớp thứ hai, và màu nền luôn là lớp cuối cùng.
- Trình duyệt không cung cấp thông tin đặc biệt về hình ảnh nền cho các công nghệ hỗ trợ (assistive technology) như trình đọc màn hình (screen reader). Điều này quan trọng vì trình đọc màn hình sẽ không thông báo sự hiện diện của hình ảnh nền. Nếu hình ảnh chứa thông tin quan trọng để hiểu mục đích tổng thể của trang, tốt hơn hết là mô tả nó một cách ngữ nghĩa trong tài liệu (semantically in the document).

#### **Ví dụ:**

**1. Đặt màu nền đơn giản:**
```css
/* Chỉ màu nền */
.simple-bg {
    background: #3498db;
}

/* Tương đương với */
.simple-bg-alt {
    background-color: #3498db;
}
```

**2. Hình ảnh nền với các tùy chọn:**
```css
/* Hình ảnh nền với lặp lại theo chiều dọc */
.hero-section {
    background: url("pattern.jpg") repeat-y;
    height: 500px;
}

/* Hình ảnh nền không lặp lại, căn giữa */
.card {
    background: url("icon.png") no-repeat center;
    background-size: 50px 50px;
    padding: 60px 20px 20px;
}
```

**3. Gradient backgrounds:**
```css
/* Gradient tuyến tính */
.gradient-bg {
    background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
}

/* Gradient xuyên tâm */
.radial-bg {
    background: radial-gradient(circle, #ffd89b, #19547b);
}
```

**4. Nhiều lớp nền (Multiple layers):**
```css
.complex-bg {
    background: 
        url("overlay.png") no-repeat center,
        linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)),
        url("main-image.jpg") center/cover;
}
```

**5. Background với vị trí và kích thước cụ thể:**
```css
.logo-corner {
    background: no-repeat top right/80px url("logo.svg"), #f8f9fa;
    padding: 100px 100px 20px 20px;
}
```

---

### 2. **Thuộc tính `border` (Viền)**

Thuộc tính `border` cũng là một thuộc tính viết tắt, được sử dụng để định nghĩa một đường viền quanh một phần tử. Nó ít phức tạp hơn nhiều so với thuộc tính `background`. Về cơ bản, bạn chỉ cần xác định kích thước (size), kiểu (style) và màu sắc (color) cho viền.

#### **Các thuộc tính thành phần (Constituent properties)**:
- `border-width`
- `border-style`
- `border-color`

#### **Cách sử dụng và Lưu ý:**
- Thuộc tính `border` có thể được chỉ định bằng một, hai hoặc ba giá trị từ danh sách trên. Thứ tự của các giá trị không quan trọng.
- **Viền sẽ vô hình (`invisible`) nếu kiểu của nó không được định nghĩa**, vì kiểu mặc định là `none`.
- `border` không thể được sử dụng để chỉ định giá trị tùy chỉnh cho `border-image`, thay vào đó, nó sẽ đặt `border-image` về giá trị mặc định là `none`.
- Thuộc tính viết tắt `border` đặc biệt hữu ích khi bạn muốn tất cả bốn cạnh của viền giống nhau. Để tạo các viền khác nhau, bạn có thể sử dụng các thuộc tính riêng lẻ như `border-width`, `border-style`, `border-color` hoặc các thuộc tính viền vật lý (physical) như `border-top`, `border-bottom` hoặc logic (logical) như `border-block-start`.

#### **`Borders` (Viền) so với `Outlines` (Đường bao ngoài):**
- `Outlines` không chiếm không gian trên trang, chúng được vẽ bên ngoài hộp nội dung của phần tử.
- Theo đặc tả (spec), `outlines` không nhất thiết phải là hình chữ nhật, mặc dù chúng thường là vậy.

#### **Ví dụ:**

**1. Viền cơ bản:**
```css
/* Viền đơn giản */
.basic-border {
    border: 2px solid #333;
    padding: 15px;
}

/* Viền chỉ có kiểu, dày mặc định */
.style-only {
    border: dashed;
    border-color: #e74c3c;
}
```

**2. Viền từng cạnh khác nhau:**
```css
.different-borders {
    border-top: 3px solid #3498db;
    border-right: 1px dashed #e74c3c;
    border-bottom: 2px dotted #2ecc71;
    border-left: 4px double #f39c12;
    padding: 20px;
}
```

**3. Viền cho các trạng thái tương tác:**
```css
.interactive-border {
    border: 2px solid transparent;
    padding: 10px 20px;
    transition: border-color 0.3s ease;
}

.interactive-border:hover {
    border-color: #3498db;
}

.interactive-border:focus {
    border-color: #e74c3c;
    outline: none;
}
```

**4. Viền với gradient (sử dụng border-image):**
```css
.gradient-border {
    border: 3px solid;
    border-image: linear-gradient(45deg, #ff6b6b, #4ecdc4) 1;
    padding: 20px;
}
```

**5. So sánh Border vs Outline:**
```css
.border-example {
    border: 3px solid #3498db;
    padding: 10px;
    margin: 10px;
}

.outline-example {
    outline: 3px solid #e74c3c;
    outline-offset: 5px; /* Khoảng cách từ phần tử */
    padding: 10px;
    margin: 10px;
}
```

---

### 3. **Thuộc tính `border-radius` (Bo tròn góc)**

Thuộc tính `border-radius` được sử dụng để tạo các góc tròn trên các phần tử. Nó cho phép bạn đặt một bán kính (radius) duy nhất để tạo các góc tròn dạng hình tròn, hoặc hai bán kính để tạo các góc dạng hình elip (elliptical corners).

#### **Các thuộc tính thành phần (Constituent properties)**:
- `border-top-left-radius`
- `border-top-right-radius`
- `border-bottom-right-radius`
- `border-bottom-left-radius`

#### **Cách sử dụng và Lưu ý:**
- Bán kính áp dụng cho toàn bộ nền, ngay cả khi phần tử không có viền. Vị trí chính xác của việc cắt (`clipping`) được định nghĩa bởi thuộc tính `background-clip`.
- Có thể định nghĩa các bán kính khác nhau cho mỗi góc của một phần tử, nhưng điều này hiếm khi hữu ích. Hãy lưu trữ thông tin đó vào danh mục "những thứ tôi sẽ tìm kiếm nếu cần".
- Giá trị âm (`negative values`) không hợp lệ cho bán kính.
- Giống như bất kỳ thuộc tính viết tắt nào khác, các thuộc tính con riêng lẻ không thể kế thừa (`inherit`) giá trị theo cách riêng lẻ.

#### **Ví dụ:**

**1. Bo tròn cơ bản:**
```css
/* Tất cả 4 góc giống nhau */
.rounded-basic {
    border-radius: 10px;
    background: #3498db;
    padding: 20px;
    color: white;
}

/* Bo tròn nhẹ cho card */
.card {
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    padding: 20px;
    background: white;
}
```

**2. Tạo hình tròn:**
```css
/* Hình tròn hoàn hảo */
.circle {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: #e74c3c;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
}

/* Avatar tròn */
.avatar {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    object-fit: cover;
}
```

**3. Bo tròn từng góc khác nhau:**
```css
/* Chỉ bo tròn góc trên */
.top-rounded {
    border-radius: 15px 15px 0 0;
    background: #2ecc71;
    padding: 20px;
}

/* Bo tròn bất đối xứng */
.asymmetric {
    border-radius: 20px 5px 15px 10px;
    background: #f39c12;
    padding: 15px;
}
```

**4. Bo tròn hình elip:**
```css
.elliptical {
    border-radius: 50px / 25px; /* Ngang / Dọc */
    background: #9b59b6;
    padding: 20px 40px;
    color: white;
}
```

**5. Bo tròn với transition:**
```css
.hover-rounded {
    border-radius: 5px;
    background: #34495e;
    padding: 15px;
    transition: border-radius 0.3s ease;
}

.hover-rounded:hover {
    border-radius: 25px;
}
```

---

### 4. **Thuộc tính `box-shadow` (Đổ bóng hộp)**

Thuộc tính `box-shadow` thêm hiệu ứng đổ bóng xung quanh khung của một phần tử. Điều này hữu ích để tạo cảm giác chiều sâu (sense of depth) trên trang của bạn và thêm sự tách biệt tinh tế giữa các phần tử.

#### **Cách sử dụng và Lưu ý:**
- Nên được sử dụng một cách tiết kiệm và tinh tế. Nên ưu tiên các bóng mờ, hầu như không nhìn thấy hơn là các màu tối hoặc sáng hơn.
- Nếu một thuộc tính `border-radius` được chỉ định trên phần tử có `box-shadow`, `box-shadow` sẽ có cùng các góc bo tròn.
- Bạn có thể đặt nhiều hiệu ứng bóng, được phân tách bằng dấu phẩy, với bóng được chỉ định đầu tiên nằm trên cùng (`on top`).
- Một bóng hộp được mô tả bởi các giá trị bù X và Y (X and Y offsets) tương đối với phần tử, bán kính mờ (blur radius) và bán kính lan rộng (spread radius), cùng với màu sắc.

#### **Các giá trị (`Values`)**:
- **`<color>`** (Tùy chọn): Chỉ định màu cho bóng.
- **Hai, ba, hoặc bốn giá trị `<length>`**:
  - **Hai giá trị**: `offset-x` (bù ngang) và `offset-y` (bù dọc)
  - **Giá trị thứ ba (`<blur-radius>`)**: Bán kính mờ
  - **Giá trị thứ tư (`<spread-radius>`)**: Bán kính lan rộng
- **`inset`** (Tùy chọn): Tạo bóng bên trong

#### **Ví dụ:**

**1. Bóng cơ bản:**
```css
/* Bóng nhẹ cho card */
.card-shadow {
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    background: white;
    padding: 20px;
    border-radius: 8px;
}

/* Bóng rõ hơn */
.prominent-shadow {
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    background: white;
    padding: 20px;
}
```

**2. Bóng với các hướng khác nhau:**
```css
/* Bóng bên phải */
.right-shadow {
    box-shadow: 5px 0 10px rgba(0,0,0,0.1);
}

/* Bóng bên trên */
.top-shadow {
    box-shadow: 0 -3px 8px rgba(0,0,0,0.1);
}

/* Bóng bao quanh */
.all-around-shadow {
    box-shadow: 0 0 15px rgba(0,0,0,0.2);
}
```

**3. Bóng inset (bên trong):**
```css
.inset-shadow {
    box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);
    background: #f8f9fa;
    padding: 20px;
    border-radius: 8px;
}

/* Hiệu ứng ấn xuống */
.pressed-effect {
    box-shadow: inset 0 3px 8px rgba(0,0,0,0.2);
    background: #ecf0f1;
    padding: 15px;
}
```

**4. Nhiều bóng:**
```css
.multiple-shadows {
    box-shadow: 
        0 1px 3px rgba(0,0,0,0.12),
        0 1px 2px rgba(0,0,0,0.24),
        inset 0 0 0 1px rgba(255,255,255,0.1);
    background: #34495e;
    color: white;
    padding: 20px;
}
```

**5. Bóng tương tác:**
```css
.interactive-shadow {
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    transition: box-shadow 0.3s ease;
    background: white;
    padding: 20px;
    cursor: pointer;
}

.interactive-shadow:hover {
    box-shadow: 0 8px 25px rgba(0,0,0,0.15);
    transform: translateY(-2px);
}
```

**6. Bóng màu sắc:**
```css
.colored-shadow {
    box-shadow: 0 4px 15px rgba(52, 152, 219, 0.3);
    background: #3498db;
    color: white;
    padding: 15px;
    border-radius: 8px;
}

.neon-shadow {
    box-shadow: 
        0 0 10px #00ff88,
        0 0 20px #00ff88,
        0 0 40px #00ff88;
    background: #1a1a1a;
    color: #00ff88;
    padding: 20px;
}
```

---

### 5. **Thuộc tính `overflow` (Tràn nội dung)**

Thuộc tính `overflow` định nghĩa điều gì xảy ra với một phần tử khi nội dung của nó quá lớn để vừa với hộp đệm (padding box) của phần tử đó, theo hướng ngang và/hoặc dọc. Cách sử dụng phổ biến nhất có thể là thêm thanh cuộn (scrollbars) vào một phần tử bên trong một trang web.

#### **Các thuộc tính thành phần (Constituent properties)**:
- `overflow-x` (hướng ngang)
- `overflow-y` (hướng dọc)

#### **Các giá trị (`Values`)**:
- **`visible`**: Giá trị mặc định. Nội dung tràn không bị cắt
- **`hidden`**: Nội dung tràn được cắt và ẩn
- **`clip`**: Nội dung tràn được cắt ở cạnh cắt tràn
- **`scroll`**: Luôn hiển thị thanh cuộn
- **`auto`**: Chỉ hiển thị thanh cuộn khi cần thiết

#### **Ví dụ:**

**1. Overflow cơ bản:**
```css
/* Container có thể cuộn */
.scrollable-content {
    height: 200px;
    overflow-y: auto;
    border: 1px solid #ddd;
    padding: 15px;
}

/* Ẩn nội dung tràn */
.hidden-overflow {
    height: 100px;
    overflow: hidden;
    border: 1px solid #ccc;
    padding: 10px;
}
```

**2. Overflow theo từng hướng:**
```css
/* Chỉ cuộn theo chiều dọc */
.vertical-scroll {
    height: 150px;
    overflow-y: scroll;
    overflow-x: hidden;
    padding: 10px;
    border: 1px solid #eee;
}

/* Chỉ cuộn theo chiều ngang */
.horizontal-scroll {
    width: 300px;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
    padding: 10px;
    border: 1px solid #eee;
}
```

**3. Chat box với auto-scroll:**
```css
.chat-container {
    height: 300px;
    overflow-y: auto;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 15px;
    background: #f9f9f9;
}

.chat-message {
    margin-bottom: 10px;
    padding: 8px 12px;
    background: white;
    border-radius: 15px;
    max-width: 80%;
}

.chat-message.sent {
    margin-left: auto;
    background: #007bff;
    color: white;
}
```

**4. Image gallery với horizontal scroll:**
```css
.image-gallery {
    display: flex;
    overflow-x: auto;
    gap: 15px;
    padding: 20px;
    border-radius: 8px;
    background: #f8f9fa;
}

.gallery-item {
    flex: 0 0 auto;
    width: 200px;
    height: 150px;
    border-radius: 8px;
    overflow: hidden;
}

.gallery-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
```

**5. Custom scrollbar:**
```css
.custom-scroll {
    height: 200px;
    overflow-y: auto;
    padding: 15px;
    border: 1px solid #ddd;
}

/* Webkit browsers */
.custom-scroll::-webkit-scrollbar {
    width: 8px;
}

.custom-scroll::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
}

.custom-scroll::-webkit-scrollbar-thumb {
    background: #c1c1c1;
    border-radius: 4px;
}

.custom-scroll::-webkit-scrollbar-thumb:hover {
    background: #a8a8a8;
}
```

---

### 6. **Thuộc tính `opacity` (Độ mờ đục)**

`opacity` là một thuộc tính đơn giản và hữu ích, được sử dụng để đặt độ mờ đục của một phần tử. Độ mờ đục là mức độ mà nội dung phía sau một phần tử bị ẩn, và là ngược lại của độ trong suốt (`transparency`).

#### **Cách sử dụng và Lưu ý:**
- `opacity` áp dụng cho toàn bộ phần tử, bao gồm cả nội dung của nó
- **Giá trị (`Values`)**: Một số từ `0.0` đến `1.0`, hoặc phần trăm từ `0%` đến `100%`
  - **`0`**: Hoàn toàn trong suốt (vô hình)
  - **`1`**: Hoàn toàn mờ đục (mặc định)
- Đặt `opacity` với giá trị khác `1` sẽ tạo ngữ cảnh xếp chồng mới

#### **Ví dụ:**

**1. Opacity cơ bản:**
```css
/* Các mức độ mờ đục khác nhau */
.transparent {
    opacity: 0.1;
    background: #3498db;
    padding: 20px;
    color: white;
}

.semi-transparent {
    opacity: 0.5;
    background: #e74c3c;
    padding: 20px;
    color: white;
}

.almost-opaque {
    opacity: 0.9;
    background: #2ecc71;
    padding: 20px;
    color: white;
}
```

**2. Hover effects với opacity:**
```css
.fade-hover {
    opacity: 1;
    transition: opacity 0.3s ease;
    cursor: pointer;
}

.fade-hover:hover {
    opacity: 0.7;
}

/* Image overlay effect */
.image-overlay {
    position: relative;
    display: inline-block;
}

.image-overlay::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.5);
    opacity: 0;
    transition: opacity 0.3s ease;
}

.image-overlay:hover::after {
    opacity: 1;
}
```

**3. Loading states:**
```css
.loading {
    opacity: 0.6;
    pointer-events: none;
    transition: opacity 0.3s ease;
}

.loaded {
    opacity: 1;
    pointer-events: auto;
}

/* Skeleton loading */
.skeleton {
    opacity: 0.7;
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    animation: loading 1.5s infinite;
}

@keyframes loading {
    0% {
        background-position: 200% 0;
    }
    100% {
        background-position: -200% 0;
    }
}
```

**4. Modal backdrop:**
```css
.modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000;
    opacity: 0.5;
    z-index: 1000;
}

.modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    padding: 30px;
    border-radius: 8px;
    z-index: 1001;
    opacity: 0;
    animation: fadeIn 0.3s ease forwards;
}

@keyframes fadeIn {
    to {
        opacity: 1;
    }
}
```

**5. Notification fade:**
```css
.notification {
    position: fixed;
    top: 20px;
    right: 20px;
    background: #2ecc71;
    color: white;
    padding: 15px 20px;
    border-radius: 5px;
    opacity: 0;
    transform: translateX(100%);
    transition: all 0.5s ease;
}

.notification.show {
    opacity: 1;
    transform: translateX(0);
}

.notification.hide {
    opacity: 0;
    transform: translateX(100%);
}
```

**6. Disabled states:**
```css
.button {
    background: #3498db;
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 5px;
    cursor: pointer;
    opacity: 1;
    transition: opacity 0.2s ease;
}

.button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

/* Form inputs */
.input-disabled {
    opacity: 0.6;
    pointer-events: none;
    background: #f5f5f5;
}

.form-field:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}
```

#### **Khả năng tiếp cận (`Accessibility`)**:
- Nếu độ mờ đục của văn bản được điều chỉnh, điều quan trọng là phải đảm bảo rằng tỷ lệ tương phản (`contrast ratio`) giữa màu văn bản và nền đủ cao để những người có thị lực kém có thể đọc được nội dung của trang.
- Không nên sử dụng `opacity` riêng để cung cấp thông tin cho trình đọc màn hình. Thay vào đó, hãy sử dụng thuộc tính HTML `hidden`, thuộc tính CSS `visibility`, hoặc thuộc tính CSS `display`.
- Để đặt `opacity` dựa trên tùy chọn giảm độ trong suốt của hệ điều hành của người dùng, hãy sử dụng truy vấn phương tiện (media query) `prefers-reduced-transparency`.

#### **Các sắc thái quan trọng (`Important Nuances`)**:
- Chỉ định một giá trị khác `visible` hoặc `clip` cho `overflow` sẽ tạo ra một **ngữ cảnh định dạng khối mới (new block formatting context)**. Điều này cần thiết về mặt kỹ thuật; ví dụ, nếu một phần tử nổi (`float`) giao cắt với một phần tử có thể cuộn, nó sẽ buộc nội dung phải cuộn lại sau mỗi bước cuộn, dẫn đến trải nghiệm cuộn chậm.
- Để thiết lập `overflow` tạo hiệu ứng mong muốn, phần tử cấp khối (block-level element) phải có chiều cao (`height` hoặc `max-height`) nếu tràn theo chiều dọc, hoặc chiều rộng (`width` hoặc `max-width`) nếu tràn theo chiều ngang, hoặc `white-space` được đặt thành `nowrap` nếu tràn theo hướng nội tuyến (inline direction).
- `overflow` cũng có thể được sử dụng để "tự xóa nổi" (`self-clearing floats`), nghĩa là phần tử có `overflow` (bất kỳ giá trị nào trừ `visible`) sẽ mở rộng đủ lớn để bao bọc các phần tử con bên trong bị nổi (floated elements) (thay vì bị sập lại - `collapsing`), giả sử chiều cao không được khai báo. Tuy nhiên, kỹ thuật `clearfix` thường được coi là tốt hơn.

#### **Khả năng tiếp cận (`Accessibility`) cho Overflow**:
- Vùng nội dung có thể cuộn thường không thể được lấy tiêu điểm bằng bàn phím (`keyboard-focusable`) theo mặc định (trừ Firefox và Chrome 132 trở lên). Để cho phép người dùng chỉ dùng bàn phím cuộn vùng chứa, bạn cần gán `tabindex="0"` cho vùng chứa. Để cung cấp ngữ cảnh cho trình đọc màn hình, hãy cung cấp vai trò WAI-ARIA thích hợp (`role="region"`) và tên có thể truy cập (`accessible name`) (qua `aria-label` hoặc `aria-labelledby`).

---

## **Tổng kết**

Những thuộc tính CSS này là nền tảng để tạo ra các giao diện web hiện đại và hấp dẫn:

1. **`background`**: Kiểm soát nền của phần tử với màu sắc, hình ảnh, gradient
2. **`border`**: Tạo viền với các kiểu, màu sắc và độ dày khác nhau  
3. **`border-radius`**: Bo tròn góc để tạo hình dạng mềm mại hơn
4. **`box-shadow`**: Thêm chiều sâu và tách biệt các phần tử
5. **`overflow`**: Quản lý nội dung tràn và tạo vùng cuộn
6. **`opacity`**: Điều chỉnh độ trong suốt cho hiệu ứng và trạng thái

Hãy thực hành kết hợp các thuộc tính này để tạo ra những thiết kế độc đáo và chuyên nghiệp. Nhớ rằng, sự tinh tế thường tạo ra kết quả tốt hơn so với việc sử dụng quá nhiều hiệu ứng cùng lúc!


## Tài liệu phải đọc khi ĐÓNG CỌC LẦN 2

1. https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-more-css-properties
1. https://developer.mozilla.org/en-US/docs/Web/CSS/background
1. https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow
1. https://developer.mozilla.org/en-US/docs/Web/CSS/overflow
1. https://developer.mozilla.org/en-US/docs/Web/CSS/opacity
1. https://developer.mozilla.org/en-US/docs/Web/CSS/border
1. https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
1. https://css-tricks.com/almanac/properties
1. https://css-tricks.com/almanac/properties/b/background/
1. https://css-tricks.com/almanac/properties/o/overflow
1. https://www.w3schools.com/cssref/

> ⭐ **Theo dõi [kênh Threads](https://www.threads.com/@kaitaku.88) để đọc bài mới mỗi ngày!** ⭐  

**[<== Bài Trước  ](link)          |[  Trang Chủ  ](./README.md)|           [  Bài Sau ==>](link)**