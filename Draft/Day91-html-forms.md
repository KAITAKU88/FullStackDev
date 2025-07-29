# Hướng dẫn HTML Forms cơ bản - Tài liệu hoàn chỉnh

Chào bạn,

Dựa trên các nguồn tài liệu được cung cấp, dưới đây là tổng hợp chi tiết và dễ hiểu về cơ bản của biểu mẫu (forms) trong HTML, kèm theo các ví dụ và giải thích các thuật ngữ chuyên ngành.

---

## **I. Giới thiệu về Biểu mẫu (Forms)**

Biểu mẫu là một trong những phần quan trọng nhất của một trang web, đóng vai trò là **cánh cổng để người dùng tương tác với hệ thống phụ trợ (backend) của bạn**. Người dùng cung cấp dữ liệu qua biểu mẫu, và bạn sẽ xử lý dữ liệu đó.

Forms cho phép bạn thu thập thông tin từ khách truy cập trang web của mình. Các ví dụ phổ biến bao gồm danh sách gửi thư (mailing lists), biểu mẫu liên hệ (contact forms), và bình luận blog. Trong các tổ chức lớn hơn, đặc biệt là các trang thương mại điện tử (e-commerce) hoặc dịch vụ phần mềm (SaaS), biểu mẫu được coi là "trang kiếm tiền" và thường xuyên được tối ưu hóa thông qua các thử nghiệm A/B (A/B tests).

Một biểu mẫu HTML hoạt động bao gồm hai khía cạnh: **giao diện người dùng ở phía người dùng (frontend user interface)** và **máy chủ xử lý dữ liệu ở phía sau (backend server)**. Phần frontend là sự **xuất hiện** của biểu mẫu (được định nghĩa bằng HTML và CSS), trong khi phần backend là mã xử lý dữ liệu (như lưu trữ vào cơ sở dữ liệu hoặc gửi email). Phần này chủ yếu tập trung vào frontend.

### **Ví dụ thực tế về Forms:**

```html
<!-- Form đăng ký nhận tin -->
<form action="/subscribe" method="post">
  <h2>Đăng ký nhận tin</h2>
  <input type="email" name="email" placeholder="Nhập email của bạn" required>
  <button type="submit">Đăng ký</button>
</form>

<!-- Form đăng nhập -->
<form action="/login" method="post">
  <h2>Đăng nhập</h2>
  <input type="text" name="username" placeholder="Tên đăng nhập" required>
  <input type="password" name="password" placeholder="Mật khẩu" required>
  <button type="submit">Đăng nhập</button>
</form>
```

---

## **II. Phần tử `<form>`**

Tất cả các biểu mẫu HTML đều bắt đầu bằng phần tử `<form>`.

- **Mục đích**: Phần tử `<form>` là một **phần tử chứa (container element)**, giống như `<div>`, dùng để bao bọc tất cả các trường nhập liệu (inputs) mà người dùng sẽ tương tác trên biểu mẫu. Nó định nghĩa chính thức một biểu mẫu và các thuộc tính xác định hành vi của biểu mẫu. Nhiều công nghệ hỗ trợ (assistive technologies) có thể nhận diện phần tử `<form>` và cung cấp các tính năng đặc biệt để dễ sử dụng hơn.
- **Không được lồng biểu mẫu**: **Tuyệt đối cấm lồng một biểu mẫu bên trong một biểu mẫu khác** (`<form>` inside `<form>`), vì điều này có thể khiến biểu mẫu hoạt động không lường trước được.

Phần tử `<form>` chấp nhận hai thuộc tính thiết yếu nhất: `action` và `method`.

### **Thuộc tính `action`:**
- Xác định **URL mà dữ liệu thu thập được từ biểu mẫu sẽ được gửi đến để xử lý** khi biểu mẫu được gửi (submitted).
- Bạn có thể để `action` trống để gửi dữ liệu đến cùng một URL.

### **Thuộc tính `method`:**
- Cho trình duyệt biết **phương thức yêu cầu HTTP (HTTP request method) nào nên sử dụng để gửi biểu mẫu**.
- Hai phương thức yêu cầu bạn sẽ sử dụng nhiều nhất là `GET` và `POST`:
  - **`GET`**: Được sử dụng khi bạn muốn **truy xuất (retrieve) thứ gì đó từ một máy chủ**. Ví dụ, Google sử dụng yêu cầu `GET` khi bạn tìm kiếm để *lấy* kết quả tìm kiếm. Dữ liệu biểu mẫu sẽ được gửi trong URL sau dấu `?`, ví dụ: `speaker-submission.html?full-name=Rick&email=rick%40internetingishard.com`.
  - **`POST`**: Được sử dụng khi bạn muốn **thay đổi (change) thứ gì đó trên máy chủ**. Ví dụ, khi người dùng tạo tài khoản hoặc thực hiện thanh toán trên một trang web.

### **Ví dụ về cấu trúc cơ bản của phần tử `<form>`:**

```html
<!-- Form tìm kiếm sử dụng GET -->
<form action="/search" method="get">
  <input type="text" name="query" placeholder="Tìm kiếm...">
  <button type="submit">Tìm</button>
</form>

<!-- Form đăng ký sử dụng POST -->
<form action="/register" method="post">
  <input type="text" name="username" placeholder="Tên người dùng">
  <input type="email" name="email" placeholder="Email">
  <input type="password" name="password" placeholder="Mật khẩu">
  <button type="submit">Đăng ký</button>
</form>

<!-- Form không có action (gửi đến cùng trang) -->
<form method="post">
  <textarea name="comment" placeholder="Nhập bình luận..."></textarea>
  <button type="submit">Gửi bình luận</button>
</form>
```

### **Sử dụng điều khiển biểu mẫu bên ngoài phần tử `<form>`:**

Bạn có thể sử dụng bất kỳ điều khiển biểu mẫu nào mà HTML cung cấp bên ngoài phần tử `<form>`, ngay cả khi bạn không có máy chủ backend để gửi dữ liệu.

```html
<!-- Input bên ngoài form nhưng liên kết với form thông qua thuộc tính form -->
<form id="myForm" action="/submit" method="post">
  <input type="text" name="name" placeholder="Tên">
</form>

<!-- Input này nằm ngoài form nhưng vẫn thuộc về form có id="myForm" -->
<input type="email" name="email" form="myForm" placeholder="Email">
<button type="submit" form="myForm">Gửi</button>
```

---

## **III. Các điều khiển Biểu mẫu (Form Controls / Widgets)**

Để bắt đầu thu thập dữ liệu từ người dùng, chúng ta cần sử dụng các phần tử điều khiển biểu mẫu (form control elements). Đây là tất cả các phần tử mà người dùng sẽ tương tác trên biểu mẫu, như hộp văn bản (text boxes), danh sách thả xuống (dropdowns), hộp kiểm (checkboxes) và nút bấm (buttons).

### **1. Phần tử `<input>`**

Phần tử `<input>` là phần tử điều khiển biểu mẫu **linh hoạt nhất (most versatile)**. Nó chấp nhận thuộc tính `type` để cho trình duyệt biết **loại dữ liệu nó nên mong đợi và cách nó nên hiển thị phần tử nhập liệu**.

#### **`type="text"` (Nhập văn bản)**

Chấp nhận bất kỳ đầu vào văn bản nào. Bạn sẽ sử dụng nó để thu thập các thông tin như tên và họ của người dùng.

```html
<!-- Các ví dụ về input text -->
<div class='form-row'>
  <label for='full-name'>Họ và tên</label>
  <input id='full-name' name='full-name' type='text' />
</div>

<div class='form-row'>
  <label for='company'>Công ty</label>
  <input id='company' name='company' type='text' placeholder='ABC Company' />
</div>

<div class='form-row'>
  <label for='phone'>Số điện thoại</label>
  <input id='phone' name='phone' type='text' pattern='[0-9]{10}' />
</div>
```

#### **`type="email"` (Nhập email)**

Là một loại nhập văn bản chuyên biệt cho địa chỉ email.

- Khác với `text` ở chỗ nó sẽ hiển thị một bàn phím khác có ký hiệu `@` trên thiết bị di động để nhập địa chỉ email dễ dàng hơn.
- Nó cũng **xác thực (validate)** rằng người dùng đã nhập một địa chỉ email đúng định dạng.

```html
<!-- Các ví dụ về input email -->
<label for="user_email">Email Address:</label>
<input type="email" id="user_email" name="email" placeholder="you@example.com">

<label for="work_email">Email công việc:</label>
<input type="email" id="work_email" name="work_email" placeholder="name@company.com" required>

<label for="backup_email">Email dự phòng:</label>
<input type="email" id="backup_email" name="backup_email" multiple>
```

#### **`type="password"` (Nhập mật khẩu)**

Là một loại nhập văn bản chuyên biệt khác.

- Khác với `text` ở chỗ nó **che dữ liệu đã nhập bằng một ký tự khác** – thường là dấu hoa thị (`*`) hoặc dấu chấm tròn (`•`) – để ngăn người khác nhìn thấy những gì đã nhập.

```html
<!-- Các ví dụ về input password -->
<label for="user_password">Mật khẩu:</label>
<input type="password" id="user_password" name="password" minlength="8">

<label for="confirm_password">Xác nhận mật khẩu:</label>
<input type="password" id="confirm_password" name="confirm_password" minlength="8">

<!-- Form đổi mật khẩu -->
<fieldset>
  <legend>Đổi mật khẩu</legend>
  <label for="old_password">Mật khẩu cũ:</label>
  <input type="password" id="old_password" name="old_password" required>
  
  <label for="new_password">Mật khẩu mới:</label>
  <input type="password" id="new_password" name="new_password" minlength="8" required>
  
  <label for="confirm_new_password">Xác nhận mật khẩu mới:</label>
  <input type="password" id="confirm_new_password" name="confirm_new_password" minlength="8" required>
</fieldset>
```

#### **`type="number"` (Nhập số)**

Chỉ chấp nhận các giá trị số và bỏ qua bất kỳ ký tự nào khác mà người dùng cố gắng nhập.

```html
<!-- Các ví dụ về input number -->
<label for="age">Tuổi:</label>
<input type="number" id="age" name="age" min="1" max="120">

<label for="quantity">Số lượng:</label>
<input type="number" id="quantity" name="quantity" min="1" max="100" step="1" value="1">

<label for="price">Giá (VNĐ):</label>
<input type="number" id="price" name="price" min="0" step="1000" placeholder="0">

<label for="rating">Đánh giá (1-5):</label>
<input type="number" id="rating" name="rating" min="1" max="5" step="0.1">
```

#### **`type="date"` (Nhập ngày)**

Để thu thập ngày từ người dùng.

- Điểm đặc biệt là nó cung cấp trải nghiệm người dùng tốt hơn để chọn ngày bằng cách hiển thị một **lịch chọn ngày (date picker calendar)**.

```html
<!-- Các ví dụ về input date -->
<label for="dob">Ngày sinh:</label>
<input type="date" id="dob" name="dob">

<label for="start_date">Ngày bắt đầu:</label>
<input type="date" id="start_date" name="start_date" min="2024-01-01">

<label for="end_date">Ngày kết thúc:</label>
<input type="date" id="end_date" name="end_date" max="2025-12-31">

<!-- Form đặt phòng khách sạn -->
<fieldset>
  <legend>Thông tin đặt phòng</legend>
  <label for="checkin">Ngày nhận phòng:</label>
  <input type="date" id="checkin" name="checkin" required>
  
  <label for="checkout">Ngày trả phòng:</label>
  <input type="date" id="checkout" name="checkout" required>
</fieldset>
```

#### **`type="radio"` (Nút chọn Radio)**

Cho phép người dùng **chọn một trong nhiều tùy chọn (one out of many predefined options)**.

- **Nhóm các nút radio**: Các nút radio biết cách hủy chọn cái đã chọn trước đó vì chúng **có cùng thuộc tính `name`**.
- **Đặt mặc định**: Có thể đặt nút radio được chọn mặc định bằng cách thêm thuộc tính `checked` vào nó.

```html
<!-- Ví dụ cơ bản về radio buttons -->
<fieldset>
  <legend>Loại vé</legend>
  <div>
    <input type="radio" id="child" name="ticket_type" value="child">
    <label for="child">Trẻ em</label>
  </div>
  <div>
    <input type="radio" id="adult" name="ticket_type" value="adult" checked>
    <label for="adult">Người lớn</label>
  </div>
  <div>
    <input type="radio" id="senior" name="ticket_type" value="senior">
    <label for="senior">Người cao tuổi</label>
  </div>
</fieldset>

<!-- Ví dụ khảo sát -->
<fieldset>
  <legend>Bạn thích món ăn nào nhất?</legend>
  <div>
    <input type="radio" id="pho" name="favorite_food" value="pho">
    <label for="pho">Phở</label>
  </div>
  <div>
    <input type="radio" id="banh_mi" name="favorite_food" value="banh_mi">
    <label for="banh_mi">Bánh mì</label>
  </div>
  <div>
    <input type="radio" id="bun_bo" name="favorite_food" value="bun_bo">
    <label for="bun_bo">Bún bò</label>
  </div>
  <div>
    <input type="radio" id="com_tam" name="favorite_food" value="com_tam">
    <label for="com_tam">Cơm tấm</label>
  </div>
</fieldset>

<!-- Ví dụ về phương thức thanh toán -->
<fieldset>
  <legend>Phương thức thanh toán</legend>
  <div>
    <input type="radio" id="cash" name="payment_method" value="cash" checked>
    <label for="cash">Tiền mặt</label>
  </div>
  <div>
    <input type="radio" id="credit_card" name="payment_method" value="credit_card">
    <label for="credit_card">Thẻ tín dụng</label>
  </div>
  <div>
    <input type="radio" id="bank_transfer" name="payment_method" value="bank_transfer">
    <label for="bank_transfer">Chuyển khoản</label>
  </div>
</fieldset>
```

#### **`type="checkbox"` (Hộp kiểm Checkbox)**

Tương tự như nút radio, nhưng chúng cho phép người dùng **chọn nhiều tùy chọn cùng một lúc (multiple options to be selected at once)**.

```html
<!-- Ví dụ cơ bản về checkboxes -->
<fieldset>
  <legend>Topping Pizza</legend>
  <div>
    <input type="checkbox" id="sausage" name="topping" value="sausage">
    <label for="sausage">Xúc xích</label>
  </div>
  <div>
    <input type="checkbox" id="onions" name="topping" value="onions">
    <label for="onions">Hành tây</label>
  </div>
  <div>
    <input type="checkbox" id="mushrooms" name="topping" value="mushrooms">
    <label for="mushrooms">Nấm</label>
  </div>
  <div>
    <input type="checkbox" id="cheese" name="topping" value="cheese" checked>
    <label for="cheese">Phô mai</label>
  </div>
</fieldset>

<!-- Ví dụ về sở thích -->
<fieldset>
  <legend>Sở thích của bạn</legend>
  <div>
    <input type="checkbox" id="reading" name="hobbies" value="reading">
    <label for="reading">Đọc sách</label>
  </div>
  <div>
    <input type="checkbox" id="music" name="hobbies" value="music">
    <label for="music">Nghe nhạc</label>
  </div>
  <div>
    <input type="checkbox" id="sports" name="hobbies" value="sports">
    <label for="sports">Thể thao</label>
  </div>
  <div>
    <input type="checkbox" id="traveling" name="hobbies" value="traveling">
    <label for="traveling">Du lịch</label>
  </div>
</fieldset>

<!-- Checkbox đơn lẻ -->
<div>
  <input type="checkbox" id="newsletter" name="newsletter" value="yes">
  <label for="newsletter">Đăng ký nhận bản tin email</label>
</div>

<div>
  <input type="checkbox" id="terms" name="terms" value="accepted" required>
  <label for="terms">Tôi đồng ý với <a href="/terms">Điều khoản sử dụng</a></label>
</div>
```

### **2. Phần tử `<textarea>` (Vùng văn bản nhiều dòng)**

Mặc dù không phải là phần tử `<input>`, phần tử `<textarea>` cung cấp một hộp nhập liệu có thể **chấp nhận văn bản trải dài nhiều dòng** như bình luận của người dùng và đánh giá.

- Nó có thể được thay đổi kích thước bằng cách nhấp và kéo góc dưới bên phải để làm cho nó lớn hơn hoặc nhỏ hơn. Tuy nhiên, bạn có thể tắt tính năng này bằng thuộc tính CSS `resize: none;`.
- Không giống như phần tử `<input>`, phần tử `<textarea>` **có thẻ đóng** (`</textarea>`). Điều này cho phép bạn bao bọc một số nội dung ban đầu mà bạn muốn vùng văn bản hiển thị.
- **Thuộc tính độc đáo**: `rows` (chiều cao ban đầu) và `cols` (chiều rộng ban đầu).

```html
<!-- Các ví dụ về textarea -->
<label for="message">Tin nhắn:</label>
<textarea id="message" name="message"></textarea>

<label for="bio">Tiểu sử:</label>
<textarea id="bio" name="bio" rows="5" cols="50" placeholder="Kể về bản thân bạn..."></textarea>

<label for="feedback">Phản hồi:</label>
<textarea id="feedback" name="feedback" rows="4" placeholder="Chia sẻ ý kiến của bạn...">Nội dung mặc định ở đây</textarea>

<!-- Form liên hệ -->
<fieldset>
  <legend>Liên hệ với chúng tôi</legend>
  <label for="contact_name">Tên:</label>
  <input type="text" id="contact_name" name="name" required>
  
  <label for="contact_email">Email:</label>
  <input type="email" id="contact_email" name="email" required>
  
  <label for="subject">Chủ đề:</label>
  <input type="text" id="subject" name="subject" required>
  
  <label for="contact_message">Nội dung:</label>
  <textarea id="contact_message" name="message" rows="6" cols="50" placeholder="Nhập nội dung tin nhắn..." required></textarea>
</fieldset>
```

### **3. Phần tử chọn (Selection Elements) - `<select>` (Danh sách thả xuống)**

Đôi khi bạn muốn người dùng chọn một giá trị từ một danh sách được xác định trước. Đây là lúc các phần tử chọn (select elements) hữu ích. Phần tử `<select>` hiển thị một danh sách thả xuống nơi người dùng có thể chọn một tùy chọn.

- **Cấu trúc**: Phần tử `<select>` bao bọc các phần tử `<option>`, đây là các tùy chọn có thể được chọn.
- **Thuộc tính `value`**: Tất cả các phần tử `option` nên có thuộc tính `value` (nếu không thì nội dung văn bản bên trong được sử dụng). Giá trị này sẽ được gửi đến máy chủ khi biểu mẫu được gửi.
- **Chọn mặc định**: Có thể đặt một trong các tùy chọn làm phần tử được chọn mặc định khi trình duyệt lần đầu tiên hiển thị biểu mẫu bằng cách thêm thuộc tính `selected` vào một `option`.
- **Nhóm tùy chọn**: Bạn cũng có thể chia danh sách các tùy chọn thành các nhóm bằng cách sử dụng phần tử `<optgroup>`. Phần tử `optgroup` có một thuộc tính `label` mà trình duyệt sử dụng làm nhãn cho mỗi nhóm.

```html
<!-- Ví dụ cơ bản về select -->
<label for="car">Chọn xe:</label>
<select name="car" id="car">
  <option value="mercedes">Mercedes</option>
  <option value="tesla">Tesla</option>
  <option value="volvo" selected>Volvo</option>
  <option value="bmw">BMW</option>
  <option value="mini">Mini</option>
  <option value="ford">Ford</option>
</select>

<!-- Select với nhóm tùy chọn -->
<label for="fashion">Chọn sản phẩm:</label>
<select name="fashion" id="fashion">
  <optgroup label="Quần áo">
    <option value="t_shirt">Áo thun</option>
    <option value="sweater">Áo len</option>
    <option value="coats">Áo khoác</option>
    <option value="jeans">Quần jeans</option>
  </optgroup>
  <optgroup label="Giày dép">
    <option value="sneakers">Giày thể thao</option>
    <option value="boots">Bốt</option>
    <option value="sandals">Dép</option>
    <option value="dress_shoes">Giày tây</option>
  </optgroup>
</select>

<!-- Select với tùy chọn mặc định -->
<label for="country">Quốc gia:</label>
<select name="country" id="country" required>
  <option value="">-- Chọn quốc gia --</option>
  <option value="vn" selected>Việt Nam</option>
  <option value="us">Hoa Kỳ</option>
  <option value="jp">Nhật Bản</option>
  <option value="kr">Hàn Quốc</option>
  <option value="cn">Trung Quốc</option>
</select>

<!-- Select cho thành phố dựa trên quốc gia -->
<label for="city">Thành phố:</label>
<select name="city" id="city">
  <optgroup label="Việt Nam">
    <option value="hanoi">Hà Nội</option>
    <option value="hcm">TP. Hồ Chí Minh</option>
    <option value="danang">Đà Nẵng</option>
    <option value="haiphong">Hải Phòng</option>
  </optgroup>
  <optgroup label="Hoa Kỳ">
    <option value="newyork">New York</option>
    <option value="losangeles">Los Angeles</option>
    <option value="chicago">Chicago</option>
    <option value="houston">Houston</option>
  </optgroup>
</select>

<!-- Select cho kích thước -->
<label for="size">Kích thước:</label>
<select name="size" id="size">
  <option value="xs">XS (Extra Small)</option>
  <option value="s">S (Small)</option>
  <option value="m" selected>M (Medium)</option>
  <option value="l">L (Large)</option>
  <option value="xl">XL (Extra Large)</option>
  <option value="xxl">XXL (Extra Extra Large)</option>
</select>
```

### **4. Phần tử `<label>` (Nhãn)**

Một trường nhập liệu đứng một mình không hữu ích lắm vì người dùng sẽ không biết họ phải cung cấp loại dữ liệu nào. Thay vào đó, chúng ta có thể đặt một nhãn cho các trường nhập liệu để thông báo cho người dùng loại dữ liệu họ dự kiến phải nhập.

- **Mục đích**: **Cách chính thức để định nghĩa một nhãn cho một tiện ích biểu mẫu HTML**. Đây là phần tử quan trọng nhất nếu bạn muốn xây dựng các biểu mẫu dễ tiếp cận (accessible forms).
- **Liên kết với trường nhập liệu**: Để tạo một nhãn, chúng ta sử dụng phần tử `<label>`. Văn bản chúng ta muốn hiển thị trong nhãn sẽ nằm giữa thẻ mở và thẻ đóng của nó. Nhãn chấp nhận thuộc tính `for`, liên kết nó với một trường nhập liệu cụ thể. Trường nhập liệu mà chúng ta muốn liên kết với nhãn cần có thuộc tính `id` với cùng giá trị với thuộc tính `for` của nhãn.
- **Tăng cường khả năng truy cập (Accessibility)**: Khi một nhãn được liên kết với một trường nhập liệu và được nhấp vào, nó sẽ tập trung con trỏ vào trường nhập liệu đó, sẵn sàng cho người dùng nhập dữ liệu. Điều này giúp các biểu mẫu của chúng ta dễ tiếp cận hơn cho người dùng dựa vào công nghệ hỗ trợ (assistive technologies).
- **Liên kết ngầm (Implicit Association)**: Có một cách khác để liên kết một điều khiển biểu mẫu với một nhãn — đó là lồng điều khiển biểu mẫu bên trong `<label>`, liên kết ngầm nó. Mặc dù vậy, vẫn nên đặt thuộc tính `for` để đảm bảo tất cả các công nghệ hỗ trợ đều hiểu mối quan hệ này.

```html
<!-- Liên kết tường minh (explicit) -->
<label for="first_name">Tên:</label>
<input type="text" id="first_name" name="first_name">

<!-- Liên kết ngầm (implicit) -->
<label>
  Họ:
  <input type="text" name="last_name">
</label>

<!-- Ví dụ form đăng ký với các label rõ ràng -->
<form action="/register" method="post">
  <fieldset>
    <legend>Thông tin cá nhân</legend>
    
    <label for="reg_firstname">Tên:</label>
    <input type="text" id="reg_firstname" name="firstname" required>
    
    <label for="reg_lastname">Họ:</label>
    <input type="text" id="reg_lastname" name="lastname" required>
    
    <label for="reg_email">Email:</label>
    <input type="email" id="reg_email" name="email" required>
    
    <label for="reg_phone">Số điện thoại:</label>
    <input type="tel" id="reg_phone" name="phone">
  </fieldset>
  
  <fieldset>
    <legend>Thông tin tài khoản</legend>
    
    <label for="reg_username">Tên đăng nhập:</label>
    <input type="text" id="reg_username" name="username" minlength="3" required>
    
    <label for="reg_password">Mật khẩu:</label>
    <input type="password" id="reg_password" name="password" minlength="8" required>
    
    <label for="reg_confirm_password">Xác nhận mật khẩu:</label>
    <input type="password" id="reg_confirm_password" name="confirm_password" minlength="8" required>
  </fieldset>
  
  <fieldset>
    <legend>Tùy chọn</legend>
    
    <label>
      <input type="checkbox" name="newsletter" value="yes">
      Nhận thông tin khuyến mãi qua email
    </label>
    
    <label>
      <input type="checkbox" name="terms" value="accepted" required>
      Tôi đồng ý với điều khoản sử dụng
    </label>
  </fieldset>
  
  <button type="submit">Đăng ký</button>
</form>

<!-- Ví dụ với radio buttons có label -->
<fieldset>
  <legend>Giới tính</legend>
  <label for="male">
    <input type="radio" id="male" name="gender" value="male">
    Nam
  </label>
  <label for="female">
    <input type="radio" id="female" name="gender" value="female">
    Nữ
  </label>
  <label for="other">
    <input type="radio" id="other" name="gender" value="other">
    Khác
  </label>
</fieldset>
```

### **5. Phần tử `<button>` (Nút bấm)**

Phần tử `<button>` tạo ra các nút có thể nhấp (clickable buttons) mà người dùng có thể tương tác để gửi biểu mẫu và kích hoạt các hành động khác.

- **Nội dung nút**: Nội dung hoặc văn bản chúng ta muốn hiển thị bên trong nút sẽ nằm giữa thẻ mở và thẻ đóng của nó.
- **Thuộc tính `type`**: Phần tử `<button>` cũng chấp nhận thuộc tính `type` cho trình duyệt biết loại nút mà nó đang xử lý.

#### **`type="submit"` (Nút gửi)**

Khi một nút gửi được nhấp, nó sẽ **gửi biểu mẫu mà nó chứa**. Đây là giá trị mặc định cho thuộc tính `type` nếu không được chỉ định.

```html
<!-- Các ví dụ về submit button -->
<button type="submit">Gửi</button>
<button type="submit">Đăng ký</button>
<button type="submit">Đăng nhập</button>

<!-- Form đăng nhập với submit button -->
<form action="/login" method="post">
  <label for="login_email">Email:</label>
  <input type="email" id="login_email" name="email" required>
  
  <label for="login_password">Mật khẩu:</label>
  <input type="password" id="login_password" name="password" required>
  
  <button type="submit">Đăng nhập</button>
</form>

<!-- Submit button với icon -->
<button type="submit">
  <span>📤</span> Gửi tin nhắn
</button>
```

#### **`type="reset"` (Nút đặt lại)**

Một nút đặt lại sẽ **xóa tất cả dữ liệu người dùng đã nhập vào biểu mẫu** và đặt lại tất cả các trường nhập liệu trong biểu mẫu về trạng thái ban đầu.

```html
<!-- Ví dụ về reset button (không khuyến khích sử dụng) -->
<form action="#" method="post">
  <label for="name">Tên:</label>
  <input type="text" id="name" name="name" value="Nguyễn Văn A">
  
  <label for="email">Email:</label>
  <input type="email" id="email" name="email">
  
  <button type="submit">Gửi</button>
  <button type="reset">Đặt lại</button> <!-- Sẽ xóa hết dữ liệu -->
</form>

<!-- Thay vì reset button, có thể dùng button thông thường với JavaScript -->
<button type="button" onclick="clearForm()">Xóa form</button>
```

#### **`type="button"` (Nút chung)**

Loại nút cuối cùng là một nút chung (generic button) có thể được sử dụng cho bất kỳ mục đích nào. Nó thường được sử dụng với JavaScript (JS) để tạo các giao diện người dùng tương tác (interactive UIs).

```html
<!-- Các ví dụ về button type="button" -->
<button type="button" onclick="showMore()">Xem thêm</button>
<button type="button" onclick="toggleDarkMode()">Chế độ tối</button>
<button type="button" onclick="addToCart()">Thêm vào giỏ hàng</button>

<!-- Ví dụ calculator đơn giản -->
<div class="calculator">
  <input type="text" id="display" readonly>
  <div class="buttons">
    <button type="button" onclick="clearDisplay()">C</button>
    <button type="button" onclick="appendToDisplay('1')">1</button>
    <button type="button" onclick="appendToDisplay('2')">2</button>
    <button type="button" onclick="appendToDisplay('3')">3</button>
    <button type="button" onclick="appendToDisplay('+')">+</button>
    <button type="button" onclick="calculate()">=</button>
  </div>
</div>

<!-- Form với nhiều button actions -->
<form action="/products" method="post">
  <label for="product_name">Tên sản phẩm:</label>
  <input type="text" id="product_name" name="product_name" required>
  
  <label for="product_price">Giá:</label>
  <input type="number" id="product_price" name="product_price" required>
  
  <!-- Các button khác nhau -->
  <button type="submit" name="action" value="save">Lưu</button>
  <button type="submit" name="action" value="save_and_new">Lưu và tạo mới</button>
  <button type="button" onclick="previewProduct()">Xem trước</button>
  <button type="button" onclick="goBack()">Hủy</button>
</form>
```

**Lưu ý quan trọng**: Điều quan trọng cần nhớ là một nút trong một biểu mẫu với giá trị `type` là `submit` (là giá trị mặc định) sẽ luôn cố gắng tạo một yêu cầu mới và gửi dữ liệu trở lại máy chủ. Do đó, đối với các nút được sử dụng trong một biểu mẫu cho các mục đích khác ngoài việc gửi dữ liệu, thuộc tính `type` luôn phải được chỉ định để tránh các hiệu ứng không mong muốn của việc gửi biểu mẫu.

---

## **IV. Tổ chức các phần tử biểu mẫu**

Sử dụng đúng loại trường nhập liệu cho dữ liệu bạn muốn người dùng nhập sẽ giúp các biểu mẫu của chúng ta thân thiện với người dùng hơn. Tuy nhiên, trong các biểu mẫu lớn hơn, người dùng có thể dễ dàng bị choáng ngợp và nản lòng nếu có nhiều trường nhập liệu cần điền. HTML cung cấp một số phần tử giúp tổ chức biểu mẫu thành các phần rõ ràng và dễ quản lý.

### **1. Phần tử `<fieldset>`**

Phần tử `<fieldset>` là một **phần tử chứa cho phép chúng ta nhóm các trường nhập liệu liên quan lại thành một đơn vị logic**.

- **Mục đích**: Để tạo các nhóm tiện ích (widgets) có cùng mục đích, phục vụ cho mục đích tạo kiểu (styling) và ngữ nghĩa (semantic purposes).
- **Cách sử dụng**: Bất kỳ trường nhập liệu nào chúng ta muốn nhóm lại đều nằm trong thẻ mở và thẻ đóng của `fieldset`.
- **Với nút radio**: Một trường hợp sử dụng phổ biến cho các phần tử này là sử dụng `fieldset` để nhóm các nút radio và sử dụng `legend` để truyền đạt cho người dùng mục đích cuối cùng của mỗi tùy chọn.

```html
<!-- Ví dụ cơ bản về fieldset -->
<fieldset>
  <legend>Thông tin cá nhân</legend>
  <label for="first_name">Tên đầu tiên</label>
  <input type="text" id="first_name" name="first_name">
  <label for="last_name">Tên cuối cùng</label>
  <input type="text" id="last_name" name="last_name">
</fieldset>

<!-- Form đăng ký hoàn chỉnh với nhiều fieldset -->
<form action="/register" method="post">
  <fieldset>
    <legend>Thông tin tài khoản</legend>
    <label for="username">Tên đăng nhập:</label>
    <input type="text" id="username" name="username" required>
    
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    
    <label for="password">Mật khẩu:</label>
    <input type="password" id="password" name="password" required>
  </fieldset>
  
  <fieldset>
    <legend>Thông tin cá nhân</legend>
    <label for="fullname">Họ và tên:</label>
    <input type="text" id="fullname" name="fullname" required>
    
    <label for="birthdate">Ngày sinh:</label>
    <input type="date" id="birthdate" name="birthdate">
    
    <label for="phone">Số điện thoại:</label>
    <input type="tel" id="phone" name="phone">
  </fieldset>
  
  <fieldset>
    <legend>Địa chỉ</legend>
    <label for="street">Địa chỉ:</label>
    <input type="text" id="street" name="street">
    
    <label for="city">Thành phố:</label>
    <input type="text" id="city" name="city">
    
    <label for="zipcode">Mã bưu điện:</label>
    <input type="text" id="zipcode" name="zipcode">
  </fieldset>
  
  <button type="submit">Đăng ký</button>
</form>

<!-- Fieldset cho radio buttons -->
<fieldset>
  <legend>Chọn gói dịch vụ</legend>
  <label>
    <input type="radio" name="package" value="basic">
    Gói cơ bản - 100,000đ/tháng
  </label>
  <label>
    <input type="radio" name="package" value="premium">
    Gói cao cấp - 200,000đ/tháng
  </label>
  <label>
    <input type="radio" name="package" value="enterprise">
    Gói doanh nghiệp - 500,000đ/tháng
  </label>
</fieldset>

<!-- Fieldset cho checkboxes -->
<fieldset>
  <legend>Dịch vụ bổ sung</legend>
  <label>
    <input type="checkbox" name="extras" value="backup">
    Sao lưu dữ liệu (+50,000đ/tháng)
  </label>
  <label>
    <input type="checkbox" name="extras" value="support">
    Hỗ trợ 24/7 (+100,000đ/tháng)
  </label>
  <label>
    <input type="checkbox" name="extras" value="ssl">
    Chứng chỉ SSL (+30,000đ/tháng)
  </label>
</fieldset>
```

### **2. Phần tử `<legend>`**

Phần tử `<legend>` được sử dụng để **đặt tiêu đề (heading) hoặc chú thích (caption) cho các nhóm trường (field sets)** để người dùng có thể thấy nhóm các trường nhập liệu đó dùng để làm gì.

- **Vị trí**: Một `legend` luôn phải nằm ngay sau thẻ mở `fieldset`.
- **Tăng cường khả năng truy cập (Accessibility)**: Nhiều công nghệ hỗ trợ sẽ sử dụng phần tử `<legend>` như một phần của nhãn của mỗi điều khiển bên trong phần tử `<fieldset>` tương ứng.

```html
<!-- Ví dụ về legend với các fieldset khác nhau -->
<form action="/order" method="post">
  <fieldset>
    <legend>Chi tiết đơn hàng</legend>
    <label for="product">Sản phẩm:</label>
    <select id="product" name="product">
      <option value="laptop">Laptop</option>
      <option value="mouse">Chuột</option>
      <option value="keyboard">Bàn phím</option>
    </select>
    
    <label for="quantity">Số lượng:</label>
    <input type="number" id="quantity" name="quantity" min="1" value="1">
  </fieldset>
  
  <fieldset>
    <legend>Chi tiết thanh toán</legend>
    <label for="card_number">Số thẻ:</label>
    <input type="text" id="card_number" name="card_number" placeholder="1234 5678 9012 3456">
    
    <label for="expiry">Ngày hết hạn:</label>
    <input type="text" id="expiry" name="expiry" placeholder="MM/YY">
    
    <label for="cvv">CVV:</label>
    <input type="text" id="cvv" name="cvv" placeholder="123" maxlength="3">
  </fieldset>
  
  <fieldset>
    <legend>Chi tiết giao hàng</legend>
    <label for="delivery_name">Tên người nhận:</label>
    <input type="text" id="delivery_name" name="delivery_name">
    
    <label for="delivery_address">Địa chỉ giao hàng:</label>
    <textarea id="delivery_address" name="delivery_address" rows="3"></textarea>
    
    <label for="delivery_phone">Số điện thoại:</label>
    <input type="tel" id="delivery_phone" name="delivery_phone">
  </fieldset>
  
  <button type="submit">Đặt hàng</button>
</form>

<!-- Form khảo sát với nhiều fieldset -->
<form action="/survey" method="post">
  <fieldset>
    <legend>Thông tin của bạn</legend>
    <label for="survey_name">Tên:</label>
    <input type="text" id="survey_name" name="name" required>
    
    <label for="survey_age">Tuổi:</label>
    <input type="number" id="survey_age" name="age" min="1" max="120">
  </fieldset>
  
  <fieldset>
    <legend>Đánh giá sản phẩm</legend>
    <label for="rating">Mức độ hài lòng (1-5):</label>
    <input type="range" id="rating" name="rating" min="1" max="5" value="3">
    
    <label for="comments">Nhận xét:</label>
    <textarea id="comments" name="comments" rows="4"></textarea>
  </fieldset>
  
  <fieldset>
    <legend>Khuyến nghị</legend>
    <p>Bạn có giới thiệu sản phẩm này cho bạn bè không?</p>
    <label>
      <input type="radio" name="recommend" value="yes">
      Có
    </label>
    <label>
      <input type="radio" name="recommend" value="no">
      Không
    </label>
    <label>
      <input type="radio" name="recommend" value="maybe">
      Có thể
    </label>
  </fieldset>
  
  <button type="submit">Gửi khảo sát</button>
</form>
```

### **3. Các cấu trúc HTML phổ biến khác**

Ngoài các cấu trúc cụ thể cho biểu mẫu web, điều quan trọng là phải nhớ rằng **đánh dấu biểu mẫu chỉ là HTML thông thường**. Điều này có nghĩa là bạn có thể sử dụng tất cả sức mạnh của HTML để cấu trúc một biểu mẫu web.

```html
<!-- Sử dụng list items để tổ chức form -->
<form action="/contact" method="post">
  <ul class="form-list">
    <li>
      <label for="contact_name">Tên:</label>
      <input type="text" id="contact_name" name="name" required>
    </li>
    <li>
      <label for="contact_email">Email:</label>
      <input type="email" id="contact_email" name="email" required>
    </li>
    <li>
      <label for="contact_message">Tin nhắn:</label>
      <textarea id="contact_message" name="message" rows="5" required></textarea>
    </li>
    <li>
      <button type="submit">Gửi tin nhắn</button>
    </li>
  </ul>
</form>

<!-- Sử dụng div để tổ chức form -->
<form action="/application" method="post">
  <div class="form-section">
    <h2>Thông tin ứng viên</h2>
    <div class="form-row">
      <label for="app_name">Họ và tên:</label>
      <input type="text" id="app_name" name="name" required>
    </div>
    <div class="form-row">
      <label for="app_position">Vị trí ứng tuyển:</label>
      <select id="app_position" name="position" required>
        <option value="">-- Chọn vị trí --</option>
        <option value="developer">Lập trình viên</option>
        <option value="designer">Thiết kế</option>
        <option value="manager">Quản lý</option>
      </select>
    </div>
  </div>
  
  <div class="form-section">
    <h2>Kinh nghiệm</h2>
    <div class="form-row">
      <label for="app_experience">Số năm kinh nghiệm:</label>
      <input type="number" id="app_experience" name="experience" min="0" max="50">
    </div>
    <div class="form-row">
      <label for="app_skills">Kỹ năng:</label>
      <textarea id="app_skills" name="skills" rows="4" 
                placeholder="Liệt kê các kỹ năng của bạn..."></textarea>
    </div>
  </div>
  
  <div class="form-actions">
    <button type="submit">Nộp đơn</button>
    <button type="button" onclick="saveDraft()">Lưu nháp</button>
  </div>
</form>

<!-- Sử dụng section và heading để tổ chức form phức tạp -->
<form action="/profile" method="post">
  <section>
    <h1>Cập nhật hồ sơ</h1>
    
    <section>
      <h2>Thông tin cơ bản</h2>
      <p>Cập nhật thông tin cá nhân của bạn</p>
      
      <label for="profile_name">Tên hiển thị:</label>
      <input type="text" id="profile_name" name="display_name">
      
      <label for="profile_bio">Tiểu sử:</label>
      <textarea id="profile_bio" name="bio" rows="3"></textarea>
    </section>
    
    <section>
      <h2>Cài đặt riêng tư</h2>
      <p>Kiểm soát ai có thể xem hồ sơ của bạn</p>
      
      <fieldset>
        <legend>Hiển thị hồ sơ</legend>
        <label>
          <input type="radio" name="privacy" value="public" checked>
          Công khai
        </label>
        <label>
          <input type="radio" name="privacy" value="friends">
          Chỉ bạn bè
        </label>
        <label>
          <input type="radio" name="privacy" value="private">
          Riêng tư
        </label>
      </fieldset>
    </section>
    
    <section>
      <h2>Thông báo</h2>
      <p>Chọn loại thông báo bạn muốn nhận</p>
      
      <label>
        <input type="checkbox" name="notifications" value="email" checked>
        Thông báo qua email
      </label>
      <label>
        <input type="checkbox" name="notifications" value="sms">
        Thông báo qua SMS
      </label>
      <label>
        <input type="checkbox" name="notifications" value="push">
        Thông báo đẩy
      </label>
    </section>
  </section>
  
  <button type="submit">Cập nhật hồ sơ</button>
</form>
```

---

## **V. Thuộc tính quan trọng cho các điều khiển biểu mẫu**

Ngoài thuộc tính `type` của `<input>`, có một số thuộc tính khác rất quan trọng cho các điều khiển biểu mẫu:

### **Thuộc tính `id`**

Cung cấp một định danh duy nhất (unique identifier) cho một phần tử. Cực kỳ quan trọng để liên kết phần tử `<input>` với nhãn (`<label>`) tương ứng thông qua thuộc tính `for` của nhãn.

```html
<!-- Ví dụ về thuộc tính id -->
<label for="user_name">Tên người dùng:</label>
<input type="text" id="user_name" name="username">

<label for="user_email">Email:</label>
<input type="email" id="user_email" name="email">

<!-- Form với nhiều field có id rõ ràng -->
<form action="/profile" method="post">
  <fieldset>
    <legend>Thông tin liên hệ</legend>
    
    <label for="contact_first_name">Tên:</label>
    <input type="text" id="contact_first_name" name="first_name" required>
    
    <label for="contact_last_name">Họ:</label>
    <input type="text" id="contact_last_name" name="last_name" required>
    
    <label for="contact_email_address">Địa chỉ email:</label>
    <input type="email" id="contact_email_address" name="email" required>
    
    <label for="contact_phone_number">Số điện thoại:</label>
    <input type="tel" id="contact_phone_number" name="phone">
  </fieldset>
  
  <button type="submit">Lưu thông tin</button>
</form>
```

### • Thuộc tính name:
- Dùng để tham chiếu dữ liệu được nhập vào một điều khiển biểu mẫu sau khi gửi.
- Bạn có thể coi nó như tên biến cho trường nhập liệu.
- Dữ liệu biểu mẫu luôn phải có thuộc tính name, nếu không nó sẽ bị bỏ qua khi biểu mẫu được gửi.
- Khi biểu mẫu được gửi, dữ liệu sẽ được gửi dưới dạng cặp name/value (tên/giá trị).

**Ví dụ:**
```html
<form action="/submit" method="POST">
  <input type="text" name="first_name" placeholder="Tên">
  <input type="text" name="last_name" placeholder="Họ">
  <input type="email" name="user_email" placeholder="Email">
  <input type="submit" value="Gửi">
</form>
```
*Khi gửi, dữ liệu có thể trông như:*
```json
{
  "first_name": "Nguyễn",
  "last_name": "Văn A",
  "user_email": "nguyenvana@email.com"
}
```

### • Thuộc tính placeholder:
- Để hướng dẫn người dùng về những gì cần nhập vào các phần tử biểu mẫu, chúng ta có thể bao gồm văn bản giữ chỗ (placeholder text) trong các trường nhập liệu.
- Giá trị của nó sẽ là văn bản giữ chỗ mà chúng ta muốn hiển thị trong trường nhập liệu.
- Nên sử dụng văn bản giữ chỗ để minh họa cách nhập và định dạng văn bản.

**Ví dụ:**
```html
<form>
  <input type="text" name="phone" placeholder="0123-456-789">
  <input type="email" name="email" placeholder="example@email.com">
  <input type="date" name="birthdate" placeholder="dd/mm/yyyy">
  <input type="url" name="website" placeholder="https://example.com">
  <textarea name="message" placeholder="Nhập tin nhắn của bạn tại đây..."></textarea>
</form>
```

### • Thuộc tính value:
- Để xác định giá trị mặc định của một phần tử `<input>`.
- Đối với các phần tử như radio, checkbox và option trong select, thuộc tính value xác định giá trị sẽ được gửi đến máy chủ khi tùy chọn đó được chọn.

**Ví dụ:**
```html
<!-- Giá trị mặc định cho text input -->
<input type="text" name="country" value="Việt Nam">

<!-- Radio buttons với các giá trị khác nhau -->
<input type="radio" name="gender" value="male" id="male">
<label for="male">Nam</label>

<input type="radio" name="gender" value="female" id="female">
<label for="female">Nữ</label>

<!-- Select với option có value -->
<select name="city">
  <option value="hn">Hà Nội</option>
  <option value="hcm" selected>TP. Hồ Chí Minh</option>
  <option value="dn">Đà Nẵng</option>
</select>
```

### • Thuộc tính checked:
- Đây là một "thuộc tính boolean" (boolean attribute), nghĩa là nó không lấy giá trị — nó chỉ tồn tại hoặc không tồn tại trên một phần tử `<input>`.
- Nếu nó tồn tại trên một nút radio hoặc hộp kiểm, phần tử đó sẽ được chọn/kiểm tra mặc định.

**Ví dụ:**
```html
<!-- Checkbox được chọn mặc định -->
<input type="checkbox" name="newsletter" id="newsletter" checked>
<label for="newsletter">Đăng ký nhận bản tin</label>

<!-- Radio button được chọn mặc định -->
<input type="radio" name="plan" value="basic" id="basic">
<label for="basic">Gói cơ bản</label>

<input type="radio" name="plan" value="premium" id="premium" checked>
<label for="premium">Gói cao cấp</label>

<!-- Nhiều checkbox với một số được chọn -->
<input type="checkbox" name="hobbies" value="reading" id="reading" checked>
<label for="reading">Đọc sách</label>

<input type="checkbox" name="hobbies" value="music" id="music">
<label for="music">Nghe nhạc</label>

<input type="checkbox" name="hobbies" value="sports" id="sports" checked>
<label for="sports">Thể thao</label>
```

## VI. Tạo kiểu cho biểu mẫu (Styling Forms)

Tạo kiểu cho biểu mẫu là một trong những phần khó khăn nhất khi phát triển web.

### • Thách thức chính:

#### ◦ Kiểu mặc định của trình duyệt (Default browser styles):
Mỗi trình duyệt có các kiểu mặc định riêng cho các điều khiển biểu mẫu, làm cho biểu mẫu của bạn trông khác nhau đối với người dùng tùy thuộc vào trình duyệt họ đang sử dụng. Để có một thiết kế nhất quán trên tất cả các trình duyệt, chúng ta phải ghi đè các kiểu mặc định này và tự tạo kiểu cho chúng.

**Ví dụ CSS reset cho form:**
```css
/* Reset kiểu mặc định */
input, textarea, select, button {
  font-family: inherit;
  font-size: inherit;
  border: none;
  outline: none;
  box-sizing: border-box;
}

/* Tạo kiểu thống nhất */
input[type="text"], 
input[type="email"], 
input[type="password"], 
textarea {
  border: 2px solid #ddd;
  padding: 10px;
  border-radius: 4px;
  width: 100%;
}

input[type="text"]:focus, 
input[type="email"]:focus, 
input[type="password"]:focus, 
textarea:focus {
  border-color: #007bff;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.3);
}
```

#### ◦ Điều khiển biểu mẫu khó hoặc không thể tạo kiểu:

- **Các điều khiển dựa trên văn bản** như text, email, password và textarea tương đối dễ tạo kiểu. Chúng hoạt động giống như bất kỳ phần tử HTML nào khác và hầu hết các thuộc tính CSS có thể được sử dụng trên chúng.

**Ví dụ tạo kiểu cho text inputs:**
```css
.form-group {
  margin-bottom: 20px;
}

.form-input {
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #e1e5e9;
  border-radius: 8px;
  font-size: 16px;
  transition: all 0.3s ease;
}

.form-input:focus {
  border-color: #007bff;
  background-color: #f8f9fa;
}

.form-input:invalid {
  border-color: #dc3545;
}

.form-input:valid {
  border-color: #28a745;
}
```

- **Mọi thứ trở nên phức tạp hơn** khi tạo kiểu tùy chỉnh cho nút radio và hộp kiểm.

**Ví dụ tạo kiểu custom cho checkbox và radio:**
```css
/* Ẩn checkbox/radio mặc định */
.custom-checkbox input[type="checkbox"],
.custom-radio input[type="radio"] {
  opacity: 0;
  position: absolute;
}

/* Tạo checkbox tùy chỉnh */
.custom-checkbox label {
  position: relative;
  padding-left: 35px;
  cursor: pointer;
  display: inline-block;
}

.custom-checkbox label:before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 20px;
  height: 20px;
  border: 2px solid #ddd;
  border-radius: 3px;
  background: white;
}

.custom-checkbox input[type="checkbox"]:checked + label:before {
  background-color: #007bff;
  border-color: #007bff;
}

.custom-checkbox input[type="checkbox"]:checked + label:after {
  content: '✓';
  position: absolute;
  left: 4px;
  top: 0;
  color: white;
  font-size: 14px;
}
```

- **Một số khía cạnh của các phần tử khác hoàn toàn không thể tạo kiểu**, ví dụ như lịch hoặc bộ chọn ngày (date pickers). Nếu muốn kiểu tùy chỉnh cho những thứ này, bạn sẽ phải xây dựng các điều khiển biểu mẫu tùy chỉnh bằng JavaScript hoặc sử dụng một trong nhiều thư viện JavaScript cung cấp các giải pháp sẵn có.

**Ví dụ thay thế date picker:**
```html
<!-- Date picker mặc định (khó tạo kiểu) -->
<input type="date" name="birthday">

<!-- Alternative: Sử dụng thư viện như Flatpickr -->
<input type="text" id="datepicker" placeholder="Chọn ngày">
<script>
// Sử dụng thư viện Flatpickr
flatpickr("#datepicker", {
  dateFormat: "d/m/Y",
  locale: "vn"
});
</script>
```

- **Phần tử `<select>` cũng rất khó tạo kiểu** do hành vi phức tạp của nó trên các thiết bị khác nhau.

**Ví dụ custom select:**
```css
.custom-select {
  position: relative;
  display: inline-block;
  width: 100%;
}

.custom-select select {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 100%;
  padding: 12px 40px 12px 16px;
  border: 2px solid #e1e5e9;
  border-radius: 8px;
  background-color: white;
  cursor: pointer;
}

.custom-select:after {
  content: '▼';
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
```

### • Kỹ thuật tạo kiểu:

#### ◦ Sử dụng bộ chọn thuộc tính (attribute selectors):
```css
/* Nhắm mục tiêu chính xác các loại input */
input[type='text'] {
  border: 1px solid #ccc;
}

input[type='email'] {
  border: 1px solid #007bff;
}

input[type='password'] {
  border: 1px solid #ffc107;
}

input[type='submit'] {
  background-color: #28a745;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
```

#### ◦ Sử dụng lớp giả (pseudo-classes):
```css
/* Trạng thái focus */
input:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.3);
}

/* Trạng thái valid/invalid */
input:invalid {
  border-color: #dc3545;
  background-color: #fff5f5;
}

input:valid {
  border-color: #28a745;
  background-color: #f0fff4;
}

/* Trạng thái disabled */
input:disabled {
  background-color: #f8f9fa;
  color: #6c757d;
  cursor: not-allowed;
}

/* Hover effects */
button:hover {
  background-color: #0056b3;
  transform: translateY(-1px);
}
```

#### ◦ Thiết kế ưu tiên di động (Mobile-first design):
```css
/* Mobile first - từ 320px trở lên */
.form-container {
  padding: 16px;
}

.form-input {
  font-size: 16px; /* Tránh zoom trên iOS */
  padding: 12px;
}

/* Tablet - từ 768px trở lên */
@media (min-width: 768px) {
  .form-container {
    padding: 24px;
    max-width: 600px;
    margin: 0 auto;
  }
  
  .form-row {
    display: flex;
    gap: 16px;
  }
  
  .form-row .form-group {
    flex: 1;
  }
}

/* Desktop - từ 1024px trở lên */
@media (min-width: 1024px) {
  .form-container {
    max-width: 800px;
    padding: 32px;
  }
  
  .form-input {
    font-size: 14px;
  }
}
```

## VII. Xử lý dữ liệu biểu mẫu và Gửi (Submitting)

### • Tên dữ liệu:
Để đặt tên cho dữ liệu trong biểu mẫu, bạn cần sử dụng thuộc tính name trên mỗi tiện ích biểu mẫu sẽ thu thập một phần dữ liệu cụ thể.

**Ví dụ form đăng ký:**
```html
<form action="/register" method="POST">
  <input type="text" name="username" placeholder="Tên đăng nhập" required>
  <input type="email" name="email" placeholder="Email" required>
  <input type="password" name="password" placeholder="Mật khẩu" required>
  <input type="password" name="confirm_password" placeholder="Xác nhận mật khẩu" required>
  
  <select name="country">
    <option value="vn">Việt Nam</option>
    <option value="us">Hoa Kỳ</option>
    <option value="jp">Nhật Bản</option>
  </select>
  
  <input type="submit" value="Đăng ký">
</form>
```

### • Gửi dữ liệu:

#### ◦ Khi người dùng nhấp vào nút gửi:
Dữ liệu từ các trường nhập liệu có thuộc tính name sẽ được thu thập thành các cặp name/value.

#### ◦ Các cặp name/value này sau đó được gửi:
- Đến URL được xác định bởi thuộc tính action của phần tử `<form>`
- Sử dụng phương thức HTTP được chỉ định bởi thuộc tính method (GET hoặc POST)

**Ví dụ với method GET:**
```html
<form action="/search" method="GET">
  <input type="text" name="query" placeholder="Tìm kiếm...">
  <input type="submit" value="Tìm">
</form>
```
*URL sau khi gửi: `/search?query=html+forms`*

**Ví dụ với method POST:**
```html
<form action="/contact" method="POST">
  <input type="text" name="name" placeholder="Tên của bạn">
  <input type="email" name="email" placeholder="Email">
  <textarea name="message" placeholder="Tin nhắn"></textarea>
  <input type="submit" value="Gửi tin nhắn">
</form>
```

#### ◦ Phương thức gửi:
- **Nếu method là GET**: dữ liệu sẽ xuất hiện trong URL sau dấu ?
- **Nếu method là POST**: dữ liệu sẽ được gửi trong phần thân của yêu cầu HTTP (HTTP request body)

### • Xử lý phía máy chủ (Server-side handling):
Kịch bản tại URL action sẽ nhận dữ liệu dưới dạng danh sách các mục key/value trong yêu cầu HTTP. Cách kịch bản này xử lý dữ liệu tùy thuộc vào bạn và ngôn ngữ lập trình phía máy chủ.

**Ví dụ xử lý với PHP:**
```php
<?php
if ($_POST) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    
    // Xử lý dữ liệu (lưu database, gửi email, etc.)
    echo "Cảm ơn $name, tin nhắn của bạn đã được gửi!";
}
?>
```

**Ví dụ xử lý với Python (Flask):**
```python
from flask import Flask, request, render_template

@app.route('/contact', methods=['POST'])
def handle_contact():
    name = request.form['name']
    email = request.form['email']
    message = request.form['message']
    
    # Xử lý dữ liệu
    return f"Cảm ơn {name}, tin nhắn của bạn đã được gửi!"
```

### • Cách xử lý biểu mẫu:

#### ◦ Sử dụng thuộc tính action (Traditional form submission):
```html
<form action="/process-form.php" method="POST">
  <input type="text" name="username" required>
  <input type="password" name="password" required>
  <input type="submit" value="Đăng nhập">
</form>
```

#### ◦ Sử dụng AJAX (Modern approach):
```html
<form id="contact-form">
  <input type="text" name="name" required>
  <input type="email" name="email" required>
  <textarea name="message" required></textarea>
  <button type="submit">Gửi</button>
</form>

<div id="message"></div>

<script>
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const formData = new FormData(this);
  
  fetch('/api/contact', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    document.getElementById('message').innerHTML = 
      '<p style="color: green;">Tin nhắn đã được gửi thành công!</p>';
  })
  .catch(error => {
    document.getElementById('message').innerHTML = 
      '<p style="color: red;">Có lỗi xảy ra. Vui lòng thử lại!</p>';
  });
});
</script>
```

## VIII. Khả năng truy cập (Accessibility) trong biểu mẫu

Xây dựng các biểu mẫu dễ truy cập là một khía cạnh quan trọng của phát triển web.

### • for và id trên `<label>` và `<input>`:
Việc liên kết label với input một cách chính xác (sử dụng thuộc tính for trên label khớp với id của input) giúp trình đọc màn hình đọc nhãn cùng với hướng dẫn liên quan cho trường nhập liệu, và cũng cho phép người dùng nhấp vào nhãn để kích hoạt trường nhập liệu tương ứng.

**Ví dụ đúng cách:**
```html
<div class="form-group">
  <label for="fullname">Họ và tên *</label>
  <input type="text" id="fullname" name="fullname" required>
</div>

<div class="form-group">
  <label for="phone">Số điện thoại *</label>
  <input type="tel" id="phone" name="phone" required>
</div>

<div class="form-group">
  <label for="comments">Ghi chú</label>
  <textarea id="comments" name="comments" rows="4"></textarea>
</div>
```

**Ví dụ với radio buttons:**
```html
<fieldset>
  <legend>Giới tính</legend>
  
  <input type="radio" id="male" name="gender" value="male">
  <label for="male">Nam</label>
  
  <input type="radio" id="female" name="gender" value="female">
  <label for="female">Nữ</label>
  
  <input type="radio" id="other" name="gender" value="other">
  <label for="other">Khác</label>
</fieldset>
```

### • `<fieldset>` và `<legend>`:
Các phần tử này giúp nhóm các điều khiển biểu mẫu liên quan về mặt ngữ nghĩa. Khi đọc biểu mẫu, trình đọc màn hình sẽ đọc nội dung của legend trước khi đọc nhãn của mỗi điều khiển bên trong fieldset, giúp người dùng hiểu bối cảnh của nhóm điều khiển.

**Ví dụ nhóm thông tin cá nhân:**
```html
<form>
  <fieldset>
    <legend>Thông tin cá nhân</legend>
    
    <label for="first-name">Tên *</label>
    <input type="text" id="first-name" name="first_name" required>
    
    <label for="last-name">Họ *</label>
    <input type="text" id="last-name" name="last_name" required>
    
    <label for="birth-date">Ngày sinh</label>
    <input type="date" id="birth-date" name="birth_date">
  </fieldset>
  
  <fieldset>
    <legend>Thông tin liên hệ</legend>
    
    <label for="email">Email *</label>
    <input type="email" id="email" name="email" required>
    
    <label for="phone">Điện thoại</label>
    <input type="tel" id="phone" name="phone">
    
    <label for="address">Địa chỉ</label>
    <textarea id="address" name="address" rows="3"></textarea>
  </fieldset>
  
  <fieldset>
    <legend>Sở thích</legend>
    
    <input type="checkbox" id="reading" name="hobbies" value="reading">
    <label for="reading">Đọc sách</label>
    
    <input type="checkbox" id="music" name="hobbies" value="music">
    <label for="music">Nghe nhạc</label>
    
    <input type="checkbox" id="travel" name="hobbies" value="travel">
    <label for="travel">Du lịch</label>
  </fieldset>
</form>
```

### • Nhãn có thể nhấp (Clickable labels):
Một lợi thế của các nhãn được thiết lập đúng cách là bạn có thể nhấp hoặc chạm vào nhãn để kích hoạt tiện ích tương ứng. Điều này đặc biệt hữu ích cho nút radio và hộp kiểm, nơi khu vực nhấp (hit area) của điều khiển có thể rất nhỏ.

**Ví dụ với khu vực nhấp lớn:**
```html
<style>
.large-clickable-area {
  display: block;
  padding: 15px;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  margin-bottom: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.large-clickable-area:hover {
  background-color: #f8f9fa;
  border-color: #007bff;
}

.large-clickable-area input[type="radio"] {
  margin-right: 10px;
}
</style>

<fieldset>
  <legend>Chọn gói dịch vụ</legend>
  
  <label for="basic" class="large-clickable-area">
    <input type="radio" id="basic" name="plan" value="basic">
    <strong>Gói cơ bản</strong> - 100,000đ/tháng
    <br><small>Bao gồm: 10GB lưu trữ, hỗ trợ email</small>
  </label>
  
  <label for="premium" class="large-clickable-area">
    <input type="radio" id="premium" name="plan" value="premium">
    <strong>Gói cao cấp</strong> - 200,000đ/tháng
    <br><small>Bao gồm: 50GB lưu trữ, hỗ trợ 24/7, backup tự động</small>
  </label>
</fieldset>
```

### • Tránh nhiều nhãn cho một tiện ích:
Mặc dù về mặt kỹ thuật có thể đặt nhiều nhãn cho một tiện ích, nhưng điều này không được khuyến khích vì một số công nghệ hỗ trợ có thể gặp khó khăn khi xử lý chúng. Nếu cần, hãy lồng tiện ích và các nhãn của nó vào một phần tử `<label>` duy nhất.

**❌ Tránh làm như thế này:**
```html
<!-- Không nên có nhiều label cho một input -->
<label for="user-email">Email</label>
<label for="user-email">Địa chỉ email của bạn</label>
<input type="email" id="user-email" name="email">
```

**✅ Nên làm như thế này:**
```html
<!-- Sử dụng một label với thông tin đầy đủ -->
<label for="user-email">
  Email <span class="help-text">(Địa chỉ email của bạn)</span>
</label>
<input type="email" id="user-email" name="email">

<!-- Hoặc sử dụng aria-describedby -->
<label for="user-email">Email</label>
<input type="email" id="user-email" name="email" aria-describedby="email-help">
<div id="email-help" class="help-text">Nhập địa chỉ email hợp lệ của bạn</div>
```

### • Trường bắt buộc (Required fields):
Khi chỉ định các trường bắt buộc, hãy cung cấp thông tin rõ ràng cho cả người dùng có thị lực và người dùng công nghệ hỗ trợ. Sử dụng thuộc tính aria-label và title để đảm bảo trình đọc màn hình thông báo "bắt buộc" chứ không chỉ là "dấu sao".

**Ví dụ đánh dấu trường bắt buộc:**
```html
<style>
.required {
  color: #dc3545;
  font-weight: bold;
}

.form-group {
  margin-bottom: 20px;
}

.help-text {
  font-size: 0.875em;
  color: #6c757d;
  margin-top: 5px;
}

.error-message {
  color: #dc3545;
  font-size: 0.875em;
  margin-top: 5px;
  display: none;
}

.form-input:invalid + .error-message {
  display: block;
}
</style>

<form>
  <div class="form-group">
    <label for="username">
      Tên đăng nhập <span class="required" aria-label="bắt buộc">*</span>
    </label>
    <input 
      type="text" 
      id="username" 
      name="username" 
      required 
      aria-required="true"
      aria-describedby="username-error username-help"
      class="form-input"
    >
    <div id="username-help" class="help-text">
      Tên đăng nhập phải có ít nhất 3 ký tự
    </div>
    <div id="username-error" class="error-message">
      Vui lòng nhập tên đăng nhập
    </div>
  </div>

  <div class="form-group">
    <label for="email">
      Email <span class="required" aria-label="bắt buộc">*</span>
    </label>
    <input 
      type="email" 
      id="email" 
      name="email" 
      required 
      aria-required="true"
      aria-describedby="email-error email-help"
      class="form-input"
    >
    <div id="email-help" class="help-text">
      Chúng tôi sẽ không chia sẻ email của bạn
    </div>
    <div id="email-error" class="error-message">
      Vui lòng nhập địa chỉ email hợp lệ
    </div>
  </div>

  <div class="form-group">
    <label for="phone">Số điện thoại</label>
    <input 
      type="tel" 
      id="phone" 
      name="phone" 
      aria-describedby="phone-help"
      class="form-input"
    >
    <div id="phone-help" class="help-text">
      Trường này không bắt buộc
    </div>
  </div>
</form>
```

**Ví dụ với ARIA labels để hỗ trợ tốt hơn:**
```html
<form>
  <fieldset>
    <legend>Đăng ký tài khoản <span class="required">(* là trường bắt buộc)</span></legend>
    
    <div class="form-group">
      <label for="full-name">Họ và tên</label>
      <input 
        type="text" 
        id="full-name" 
        name="full_name" 
        required 
        aria-required="true"
        aria-invalid="false"
        aria-describedby="name-requirements"
      >
      <div id="name-requirements" class="help-text">
        * Trường bắt buộc - Nhập họ và tên đầy đủ
      </div>
    </div>
    
    <div class="form-group">
      <label for="password">Mật khẩu</label>
      <input 
        type="password" 
        id="password" 
        name="password" 
        required 
        aria-required="true"
        aria-describedby="password-requirements"
        minlength="8"
      >
      <div id="password-requirements" class="help-text">
        * Trường bắt buộc - Ít nhất 8 ký tự, bao gồm chữ hoa, chữ thường và số
      </div>
    </div>
    
    <div class="form-group">
      <label for="confirm-password">Xác nhận mật khẩu</label>
      <input 
        type="password" 
        id="confirm-password" 
        name="confirm_password" 
        required 
        aria-required="true"
        aria-describedby="confirm-password-help"
      >
      <div id="confirm-password-help" class="help-text">
        * Trường bắt buộc - Nhập lại mật khẩu để xác nhận
      </div>
    </div>
  </fieldset>
</form>
```

**Ví dụ JavaScript validation với accessibility:**
```html
<script>
function validateForm() {
  const form = document.getElementById('registration-form');
  const inputs = form.querySelectorAll('input[required]');
  let isValid = true;
  
  inputs.forEach(input => {
    const errorDiv = input.nextElementSibling.nextElementSibling;
    
    if (!input.value.trim()) {
      input.setAttribute('aria-invalid', 'true');
      errorDiv.style.display = 'block';
      errorDiv.setAttribute('role', 'alert');
      isValid = false;
    } else {
      input.setAttribute('aria-invalid', 'false');
      errorDiv.style.display = 'none';
      errorDiv.removeAttribute('role');
    }
  });
  
  return isValid;
}

// Thêm event listeners
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('registration-form');
  
  form.addEventListener('submit', function(e) {
    if (!validateForm()) {
      e.preventDefault();
      // Focus vào trường đầu tiên có lỗi
      const firstError = form.querySelector('input[aria-invalid="true"]');
      if (firstError) {
        firstError.focus();
      }
    }
  });
  
  // Real-time validation
  const requiredInputs = form.querySelectorAll('input[required]');
  requiredInputs.forEach(input => {
    input.addEventListener('blur', function() {
      const errorDiv = this.nextElementSibling.nextElementSibling;
      
      if (!this.value.trim()) {
        this.setAttribute('aria-invalid', 'true');
        errorDiv.style.display = 'block';
      } else {
        this.setAttribute('aria-invalid', 'false');
        errorDiv.style.display = 'none';
      }
    });
  });
});
</script>
```

---

## Tóm tắt lại

Biểu mẫu là một công cụ mạnh mẽ để tương tác với người dùng và thu thập dữ liệu. Việc thành thạo các biểu mẫu đòi hỏi không chỉ kiến thức HTML mà còn cả các kỹ thuật tạo kiểu CSS cụ thể và một số kiến thức về kịch bản (scripting) bằng JavaScript để xử lý các vấn đề như xác thực (validation) và tạo điều khiển biểu mẫu tùy chỉnh. 

### Các điểm quan trọng cần nhớ:

1. **Thuộc tính cơ bản**: `id`, `name`, `value`, `placeholder`, `checked` là nền tảng để xây dựng form hiệu quả

2. **Accessibility**: Luôn sử dụng `<label>` với `for` và `id`, nhóm các controls liên quan bằng `<fieldset>` và `<legend>`

3. **Styling**: Form styling phức tạp do sự khác biệt giữa các trình duyệt, cần reset CSS và sử dụng custom styling

4. **Data handling**: Hiểu rõ cách dữ liệu được gửi thông qua `name/value` pairs với GET/POST methods

5. **Modern approaches**: Sử dụng AJAX để tạo trải nghiệm người dùng mượt mà hơn

6. **Validation**: Kết hợp HTML validation với JavaScript để đảm bảo dữ liệu chính xác

Bằng cách hiểu rõ các phần tử và thuộc tính này, bạn có thể xây dựng các biểu mẫu hiệu quả, dễ sử dụng và dễ truy cập cho tất cả người dùng.

### Ví dụ tổng hợp - Form đăng ký hoàn chỉnh:

```html
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Đăng Ký</title>
    <style>
        * {
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 20px;
            background-color: #f5f5f5;
        }
        
        .form-container {
            max-width: 600px;
            margin: 0 auto;
            background: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 0 20px rgba(0,0,0,0.1);
        }
        
        .form-title {
            text-align: center;
            color: #333;
            margin-bottom: 30px;
        }
        
        .form-group {
            margin-bottom: 20px;
        }
        
        .form-row {
            display: flex;
            gap: 15px;
        }
        
        .form-row .form-group {
            flex: 1;
        }
        
        label {
            display: block;
            margin-bottom: 5px;
            font-weight: 600;
            color: #555;
        }
        
        .required {
            color: #e74c3c;
        }
        
        input, textarea, select {
            width: 100%;
            padding: 12px;
            border: 2px solid #ddd;
            border-radius: 6px;
            font-size: 16px;
            transition: all 0.3s ease;
        }
        
        input:focus, textarea:focus, select:focus {
            outline: none;
            border-color: #3498db;
            box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);
        }
        
        input:invalid {
            border-color: #e74c3c;
        }
        
        input:valid {
            border-color: #27ae60;
        }
        
        .help-text {
            font-size: 14px;
            color: #666;
            margin-top: 5px;
        }
        
        .error-message {
            color: #e74c3c;
            font-size: 14px;
            margin-top: 5px;
            display: none;
        }
        
        fieldset {
            border: 2px solid #ddd;
            border-radius: 6px;
            padding: 20px;
            margin-bottom: 20px;
        }
        
        legend {
            padding: 0 10px;
            font-weight: 600;
            color: #333;
        }
        
        .btn {
            background: #3498db;
            color: white;
            padding: 15px 30px;
            border: none;
            border-radius: 6px;
            font-size: 16px;
            cursor: pointer;
            width: 100%;
            transition: background 0.3s ease;
        }
        
        .btn:hover {
            background: #2980b9;
        }
        
        .checkbox-group, .radio-group {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
        
        .checkbox-item, .radio-item {
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .checkbox-item input, .radio-item input {
            width: auto;
        }
        
        @media (max-width: 768px) {
            .form-row {
                flex-direction: column;
                gap: 0;
            }
            
            .form-container {
                padding: 20px;
            }
        }
    </style>
</head>
<body>
    <div class="form-container">
        <h1 class="form-title">Đăng Ký Tài Khoản</h1>
        
        <form id="registration-form" action="/register" method="POST" novalidate>
            <fieldset>
                <legend>Thông tin cá nhân</legend>
                
                <div class="form-row">
                    <div class="form-group">
                        <label for="first-name">
                            Tên <span class="required">*</span>
                        </label>
                        <input 
                            type="text" 
                            id="first-name" 
                            name="first_name" 
                            required 
                            aria-required="true"
                            placeholder="Nhập tên của bạn"
                        >
                    </div>
                    
                    <div class="form-group">
                        <label for="last-name">
                            Họ <span class="required">*</span>
                        </label>
                        <input 
                            type="text" 
                            id="last-name" 
                            name="last_name" 
                            required 
                            aria-required="true"
                            placeholder="Nhập họ của bạn"
                        >
                    </div>
                </div>
                
                <div class="form-group">
                    <label for="email">
                        Email <span class="required">*</span>
                    </label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        required 
                        aria-required="true"
                        placeholder="example@email.com"
                    >
                    <div class="help-text">Chúng tôi sẽ không chia sẻ email của bạn</div>
                </div>
                
                <div class="form-group">
                    <label for="phone">Số điện thoại</label>
                    <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        placeholder="0123-456-789"
                    >
                </div>
                
                <div class="form-group">
                    <label for="birthdate">Ngày sinh</label>
                    <input type="date" id="birthdate" name="birthdate">
                </div>
            </fieldset>
            
            <fieldset>
                <legend>Thông tin tài khoản</legend>
                
                <div class="form-group">
                    <label for="username">
                        Tên đăng nhập <span class="required">*</span>
                    </label>
                    <input 
                        type="text" 
                        id="username" 
                        name="username" 
                        required 
                        aria-required="true"
                        minlength="3"
                        placeholder="Ít nhất 3 ký tự"
                    >
                    <div class="help-text">Tên đăng nhập phải có ít nhất 3 ký tự</div>
                </div>
                
                <div class="form-row">
                    <div class="form-group">
                        <label for="password">
                            Mật khẩu <span class="required">*</span>
                        </label>
                        <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            required 
                            aria-required="true"
                            minlength="8"
                        >
                        <div class="help-text">Ít nhất 8 ký tự</div>
                    </div>
                    
                    <div class="form-group">
                        <label for="confirm-password">
                            Xác nhận mật khẩu <span class="required">*</span>
                        </label>
                        <input 
                            type="password" 
                            id="confirm-password" 
                            name="confirm_password" 
                            required 
                            aria-required="true"
                        >
                    </div>
                </div>
            </fieldset>
            
            <fieldset>
                <legend>Thông tin khác</legend>
                
                <div class="form-group">
                    <label for="country">Quốc gia</label>
                    <select id="country" name="country">
                        <option value="">Chọn quốc gia</option>
                        <option value="vn" selected>Việt Nam</option>
                        <option value="us">Hoa Kỳ</option>
                        <option value="jp">Nhật Bản</option>
                        <option value="kr">Hàn Quốc</option>
                    </select>
                </div>
                
                <div class="form-group">
                    <label>Giới tính</label>
                    <div class="radio-group">
                        <div class="radio-item">
                            <input type="radio" id="male" name="gender" value="male">
                            <label for="male">Nam</label>
                        </div>
                        <div class="radio-item">
                            <input type="radio" id="female" name="gender" value="female">
                            <label for="female">Nữ</label>
                        </div>
                        <div class="radio-item">
                            <input type="radio" id="other" name="gender" value="other">
                            <label for="other">Khác</label>
                        </div>
                    </div>
                </div>
                
                <div class="form-group">
                    <label>Sở thích</label>
                    <div class="checkbox-group">
                        <div class="checkbox-item">
                            <input type="checkbox" id="reading" name="hobbies" value="reading">
                            <label for="reading">Đọc sách</label>
                        </div>
                        <div class="checkbox-item">
                            <input type="checkbox" id="music" name="hobbies" value="music">
                            <label for="music">Nghe nhạc</label>
                        </div>
                        <div class="checkbox-item">
                            <input type="checkbox" id="travel" name="hobbies" value="travel">
                            <label for="travel">Du lịch</label>
                        </div>
                        <div class="checkbox-item">
                            <input type="checkbox" id="sports" name="hobbies" value="sports">
                            <label for="sports">Thể thao</label>
                        </div>
                    </div>
                </div>
                
                <div class="form-group">
                    <label for="bio">Giới thiệu bản thân</label>
                    <textarea 
                        id="bio" 
                        name="bio" 
                        rows="4" 
                        placeholder="Viết vài dòng về bản thân bạn..."
                    ></textarea>
                </div>
            </fieldset>
            
            <div class="form-group">
                <div class="checkbox-item">
                    <input type="checkbox" id="terms" name="terms" required>
                    <label for="terms">
                        Tôi đồng ý với <a href="/terms" target="_blank">điều khoản sử dụng</a> <span class="required">*</span>
                    </label>
                </div>
            </div>
            
            <div class="form-group">
                <div class="checkbox-item">
                    <input type="checkbox" id="newsletter" name="newsletter">
                    <label for="newsletter">Đăng ký nhận bản tin</label>
                </div>
            </div>
            
            <button type="submit" class="btn">Đăng Ký</button>
        </form>
    </div>
    
    <script>
        // Form validation
        document.getElementById('registration-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validate password confirmation
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm-password').value;
            
            if (password !== confirmPassword) {
                alert('Mật khẩu xác nhận không khớp!');
                return;
            }
            
            // Validate terms checkbox
            const terms = document.getElementById('terms').checked;
            if (!terms) {
                alert('Bạn phải đồng ý với điều khoản sử dụng!');
                return;
            }
            
            alert('Đăng ký thành công!');
            // Trong thực tế, form sẽ được gửi đến server
            // this.submit();
        });
        
        // Real-time password confirmation validation
        document.getElementById('confirm-password').addEventListener('input', function() {
            const password = document.getElementById('password').value;
            const confirmPassword = this.value;
            
            if (confirmPassword && password !== confirmPassword) {
                this.setCustomValidity('Mật khẩu không khớp');
            } else {
                this.setCustomValidity('');
            }
        });
    </script>
</body>
</html>
```

Đây là một ví dụ hoàn chỉnh kết hợp tất cả các khái niệm đã học về HTML forms, từ các thuộc tính cơ bản đến accessibility, styling và JavaScript validation.

## Tài liệu phải đọc khi ĐÓNG CỌC LẦN 2


1. https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-form-basics
1. https://developer.mozilla.org/en-US/docs/Learn/Forms#introductory_guides
1. https://developer.mozilla.org/en-US/docs/Learn/Forms/Your_first_form
1. https://developer.mozilla.org/en-US/docs/Learn/Forms/How_to_structure_a_web_form
1. https://developer.mozilla.org/en-US/docs/Learn/Forms#the_different_form_controls
1. https://developer.mozilla.org/en-US/docs/Learn/Forms#form_styling_tutorials
1. https://internetingishard.netlify.app/html-and-css/forms/index.html
1. https://web.dev/learn/forms/

> ⭐ **Theo dõi [kênh Threads](https://www.threads.com/@kaitaku.88) để đọc bài mới mỗi ngày!** ⭐  

**[<== Bài Trước  ](link)          |[  Trang Chủ  ](./README.md)|           [  Bài Sau ==>](link)**