# Hướng dẫn chi tiết về Form Validation

---

## Xác thực biểu mẫu (Form Validation) là gì?

**Xác thực biểu mẫu (Form Validation)** là quá trình kiểm tra xem dữ liệu người dùng nhập vào biểu mẫu (form) có đáp ứng các yêu cầu hoặc quy tắc định sẵn hay không trước khi gửi dữ liệu đó đến máy chủ. Khi người dùng mắc lỗi trong biểu mẫu, các thông báo lỗi rõ ràng và luồng sửa lỗi được thiết kế chu đáo có thể dễ dàng hướng dẫn họ cách khắc phục.

### Ví dụ thực tế:
```html
<!-- Form đăng ký người dùng -->
<form id="registerForm">
  <div>
    <label for="username">Tên đăng nhập:</label>
    <input type="text" id="username" name="username" required minlength="3">
    <span class="error-message" id="username-error"></span>
  </div>
  
  <div>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    <span class="error-message" id="email-error"></span>
  </div>
  
  <div>
    <label for="password">Mật khẩu:</label>
    <input type="password" id="password" name="password" required minlength="6">
    <span class="error-message" id="password-error"></span>
  </div>
  
  <button type="submit">Đăng ký</button>
</form>
```

**Mục tiêu chính của xác thực biểu mẫu bao gồm:**

- **Đảm bảo dữ liệu chính xác và đúng định dạng:** Các ứng dụng sẽ không hoạt động đúng nếu dữ liệu người dùng bị lưu trữ sai định dạng, không chính xác hoặc bị bỏ sót hoàn toàn. Ví dụ, trường email yêu cầu địa chỉ email hợp lệ, trường mật khẩu có thể yêu cầu các loại ký tự nhất định và độ dài tối thiểu.

- **Bảo vệ dữ liệu người dùng:** Buộc người dùng nhập mật khẩu bảo mật giúp bảo vệ thông tin tài khoản của họ dễ dàng hơn.

- **Bảo vệ hệ thống:** Có nhiều cách mà người dùng độc hại có thể lạm dụng các biểu mẫu không được bảo vệ để gây hại cho ứng dụng.

---

## Các loại xác thực phía máy khách (Client-side) và phía máy chủ (Server-side)

Có hai loại xác thực chính:

### Xác thực phía máy khách (Client-side validation)
Diễn ra ngay trong trình duyệt của người dùng trước khi dữ liệu được gửi đến máy chủ. Đây là một tính năng quan trọng để cải thiện trải nghiệm người dùng (UX) vì nó giúp người dùng khắc phục lỗi ngay lập tức mà không cần phải chờ đợi quá trình gửi và phản hồi từ máy chủ.

#### Ví dụ Client-side validation:
```html
<form>
  <input type="email" id="email" required>
  <span id="email-feedback"></span>
  <button type="submit">Gửi</button>
</form>

<script>
const emailInput = document.getElementById('email');
const feedback = document.getElementById('email-feedback');

emailInput.addEventListener('input', function() {
  if (this.validity.valid) {
    feedback.textContent = '✓ Email hợp lệ';
    feedback.style.color = 'green';
  } else if (this.validity.typeMismatch) {
    feedback.textContent = '✗ Vui lòng nhập email đúng định dạng';
    feedback.style.color = 'red';
  }
});
</script>
```

### Xác thực phía máy chủ (Server-side validation)
Diễn ra trên máy chủ sau khi dữ liệu đã được gửi đến. **Điều quan trọng cần nhớ là xác thực phía máy khách không nên được coi là biện pháp bảo mật toàn diện**. Người dùng độc hại có thể dễ dàng bỏ qua xác thực phía máy khách, do đó, ứng dụng của bạn **luôn phải thực hiện xác thực, bao gồm cả kiểm tra bảo mật, ở phía máy chủ**.

#### Ví dụ Server-side validation (Node.js/Express):
```javascript
// Server-side validation với Express.js
app.post('/register', (req, res) => {
  const { username, email, password } = req.body;
  const errors = [];

  // Kiểm tra username
  if (!username || username.length < 3) {
    errors.push('Tên đăng nhập phải có ít nhất 3 ký tự');
  }

  // Kiểm tra email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    errors.push('Email không hợp lệ');
  }

  // Kiểm tra password
  if (!password || password.length < 6) {
    errors.push('Mật khẩu phải có ít nhất 6 ký tự');
  }

  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }

  // Xử lý đăng ký thành công
  res.json({ message: 'Đăng ký thành công' });
});
```

---

## Xác thực tích hợp sẵn của HTML (Built-in HTML Validation)

HTML5 cung cấp các thuộc tính (attributes) cho phép bạn xác thực dữ liệu người dùng mà không cần phải dựa vào JavaScript. Trình duyệt sẽ tự động kiểm tra xem giá trị nhập vào có tuân thủ các ràng buộc được định nghĩa bởi các thuộc tính này hay không.

### 1. Thuộc tính `required` (Bắt buộc)

Thuộc tính này chỉ định liệu một trường biểu mẫu có cần được điền trước khi biểu mẫu có thể được gửi hay không. Nếu trường rỗng, trình duyệt sẽ ngăn việc gửi biểu mẫu và hiển thị thông báo lỗi.

#### Ví dụ:
```html
<!-- Form đăng nhập -->
<form>
  <div>
    <label for="username">Tên đăng nhập *</label>
    <input id="username" name="username" type="text" required>
  </div>
  
  <div>
    <label for="password">Mật khẩu *</label>
    <input id="password" name="password" type="password" required>
  </div>
  
  <div>
    <label for="remember">Ghi nhớ đăng nhập</label>
    <input id="remember" name="remember" type="checkbox">
    <!-- Checkbox không bắt buộc -->
  </div>
  
  <button type="submit">Đăng nhập</button>
</form>
```

Để cung cấp trải nghiệm người dùng tốt và tuân thủ các hướng dẫn về khả năng tiếp cận (accessibility), bạn nên luôn chỉ ra các trường bắt buộc, ví dụ bằng cách thêm dấu hoa thị (*) vào nhãn trường.

### 2. Xác thực độ dài văn bản (`minlength` và `maxlength`)

Các thuộc tính này chỉ định độ dài tối thiểu và tối đa của dữ liệu văn bản (chuỗi ký tự).

#### Ví dụ:
```html
<!-- Form bình luận -->
<form>
  <div>
    <label for="title">Tiêu đề (5-50 ký tự)</label>
    <input type="text" id="title" name="title" 
           required minlength="5" maxlength="50">
    <small>Độ dài: <span id="title-length">0</span>/50</small>
  </div>
  
  <div>
    <label for="comment">Bình luận (10-500 ký tự)</label>
    <textarea id="comment" name="comment" 
              required minlength="10" maxlength="500" 
              rows="4"></textarea>
    <small>Độ dài: <span id="comment-length">0</span>/500</small>
  </div>
  
  <button type="submit">Gửi bình luận</button>
</form>

<script>
// Hiển thị số ký tự đã nhập
function updateCharCount(inputId, counterId) {
  const input = document.getElementById(inputId);
  const counter = document.getElementById(counterId);
  
  input.addEventListener('input', function() {
    counter.textContent = this.value.length;
    
    // Thay đổi màu khi gần đạt giới hạn
    if (this.value.length > this.maxLength * 0.8) {
      counter.style.color = 'orange';
    } else {
      counter.style.color = 'black';
    }
  });
}

updateCharCount('title', 'title-length');
updateCharCount('comment', 'comment-length');
</script>
```

**Gợi ý UX:** Cung cấp phản hồi về số lượng ký tự còn lại sẽ tốt hơn là chỉ sử dụng `maxlength`.

### 3. Xác thực phạm vi số (`min`, `max`, và `step`)

Đối với các trường số (numeric fields) như `<input type="number">`, `<input type="date">`, `min` và `max` có thể được sử dụng để cung cấp phạm vi giá trị hợp lệ.

#### Ví dụ:
```html
<!-- Form đặt sản phẩm -->
<form>
  <div>
    <label for="quantity">Số lượng (1-10 sản phẩm)</label>
    <input type="number" id="quantity" name="quantity" 
           value="1" min="1" max="10" step="1" required>
  </div>
  
  <div>
    <label for="price">Giá (100,000 - 10,000,000 VNĐ)</label>
    <input type="number" id="price" name="price" 
           min="100000" max="10000000" step="1000" required>
  </div>
  
  <div>
    <label for="rating">Đánh giá (0.5 - 5.0 sao)</label>
    <input type="number" id="rating" name="rating" 
           min="0.5" max="5.0" step="0.5" required>
  </div>
  
  <div>
    <label for="birthdate">Ngày sinh (phải từ 18 tuổi trở lên)</label>
    <input type="date" id="birthdate" name="birthdate" 
           max="2005-12-31" required>
  </div>
  
  <button type="submit">Đặt hàng</button>
</form>
```

### 4. Thuộc tính `type`

Thuộc tính `type` chỉ định kiểu dữ liệu mà trường mong đợi, cho phép trình duyệt tự động xác thực định dạng.

#### Ví dụ:
```html
<!-- Form liên hệ với nhiều loại input -->
<form>
  <div>
    <label for="name">Họ tên</label>
    <input type="text" id="name" name="name" required>
  </div>
  
  <div>
    <label for="email">Email</label>
    <input type="email" id="email" name="email" required>
    <!-- Tự động xác thực định dạng email -->
  </div>
  
  <div>
    <label for="phone">Số điện thoại</label>
    <input type="tel" id="phone" name="phone" required>
    <!-- Hiển thị bàn phím số trên mobile -->
  </div>
  
  <div>
    <label for="website">Website</label>
    <input type="url" id="website" name="website">
    <!-- Xác thực URL (phải có http:// hoặc https://) -->
  </div>
  
  <div>
    <label for="age">Tuổi</label>
    <input type="number" id="age" name="age" min="1" max="120">
    <!-- Chỉ cho phép nhập số -->
  </div>
  
  <div>
    <label for="appointment">Ngày hẹn</label>
    <input type="datetime-local" id="appointment" name="appointment">
    <!-- Picker cho ngày và giờ -->
  </div>
  
  <div>
    <label for="color">Màu yêu thích</label>
    <input type="color" id="color" name="color" value="#ff0000">
    <!-- Color picker -->
  </div>
  
  <button type="submit">Gửi</button>
</form>
```

### 5. Thuộc tính `pattern` và Biểu thức chính quy (Regular Expressions - Regex)

Thuộc tính `pattern` yêu cầu một **Biểu thức chính quy (Regular Expression - Regex)** làm giá trị của nó. Một Regex là một mẫu (pattern) có thể được sử dụng để khớp các tổ hợp ký tự trong chuỗi văn bản.

#### Cấu trúc và cách xây dựng Regex:
1. **Xác định kịch bản:** Sử dụng ngôn ngữ tự nhiên để định nghĩa vấn đề, làm rõ các ràng buộc bắt buộc và tùy chọn.
2. **Xây dựng kế hoạch:** Xác định loại ký tự cho phép, số lần xuất hiện của ký tự, và các ràng buộc khác.
3. **Thực hiện/Kiểm thử/Tái cấu trúc:** Sử dụng môi trường kiểm thử trực tuyến (ví dụ: regex101.com) để kiểm tra và cải thiện Regex.

#### Các thành phần cơ bản của Regex:

**Ký tự đại diện và tập hợp:**
- **`.`** - Khớp với bất kỳ ký tự đơn nào trừ ký tự ngắt dòng
- **`[abc]`** - Khớp với a, b, hoặc c
- **`[a-z]`** - Khớp với bất kỳ chữ cái viết thường nào
- **`[A-Z]`** - Khớp với bất kỳ chữ cái viết hoa nào
- **`[0-9]`** - Khớp với bất kỳ chữ số nào

**Lớp ký tự thoát:**
- **`\d`** - Khớp với bất kỳ chữ số nào (tương đương `[0-9]`)
- **`\D`** - Khớp với bất kỳ ký tự nào không phải chữ số
- **`\w`** - Khớp với ký tự chữ-số hoặc dấu gạch dưới `[A-Za-z0-9_]`
- **`\W`** - Khớp với ký tự không phải chữ-số hoặc dấu gạch dưới
- **`\s`** - Khớp với ký tự khoảng trắng (space, tab, newline)
- **`\S`** - Khớp với ký tự không phải khoảng trắng

**Quantifiers (Bộ định lượng):**
- **`*`** - 0 hoặc nhiều lần
- **`+`** - 1 hoặc nhiều lần
- **`?`** - 0 hoặc 1 lần
- **`{n}`** - Chính xác n lần
- **`{n,}`** - Ít nhất n lần
- **`{n,m}`** - Từ n đến m lần

**Anchors (Điểm neo):**
- **`^`** - Bắt đầu chuỗi
- **`$`** - Kết thúc chuỗi
- **`\b`** - Ranh giới từ
- **`\B`** - Không phải ranh giới từ

#### Ví dụ thực tế với pattern:

```html
<!-- Form với các pattern phổ biến -->
<form>
  <!-- Số điện thoại Việt Nam -->
  <div>
    <label for="phone-vn">Số điện thoại VN</label>
    <input type="tel" id="phone-vn" name="phone" 
           pattern="^(0|\+84)[3|5|7|8|9][0-9]{8}$"
           title="Nhập số điện thoại VN hợp lệ (10-11 số)"
           placeholder="0987654321">
  </div>
  
  <!-- Mã bưu điện VN -->
  <div>
    <label for="zipcode-vn">Mã bưu điện</label>
    <input type="text" id="zipcode-vn" name="zipcode" 
           pattern="^[0-9]{6}$"
           title="Mã bưu điện gồm 6 chữ số"
           placeholder="100000">
  </div>
  
  <!-- Tên người dùng -->
  <div>
    <label for="username">Tên đăng nhập</label>
    <input type="text" id="username" name="username" 
           pattern="^[a-zA-Z0-9_]{3,20}$"
           title="3-20 ký tự, chỉ chữ cái, số và dấu gạch dưới"
           placeholder="user123">
  </div>
  
  <!-- Mật khẩu mạnh -->
  <div>
    <label for="strong-password">Mật khẩu mạnh</label>
    <input type="password" id="strong-password" name="password" 
           pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
           title="Ít nhất 8 ký tự, có chữ hoa, chữ thường, số và ký tự đặc biệt">
  </div>
  
  <!-- CMND/CCCD -->
  <div>
    <label for="citizen-id">CMND/CCCD</label>
    <input type="text" id="citizen-id" name="citizen_id" 
           pattern="^[0-9]{9}$|^[0-9]{12}$"
           title="9 hoặc 12 chữ số"
           placeholder="123456789">
  </div>
  
  <!-- Mã màu hex -->
  <div>
    <label for="hex-color">Mã màu Hex</label>
    <input type="text" id="hex-color" name="color" 
           pattern="^#[0-9A-Fa-f]{6}$"
           title="Mã màu hex (ví dụ: #FF0000)"
           placeholder="#FF0000">
  </div>
  
  <button type="submit">Xác thực</button>
</form>
```

#### Ví dụ với JavaScript validation:

```html
<form id="advanced-form">
  <div>
    <label for="email-advanced">Email nâng cao</label>
    <input type="email" id="email-advanced" name="email" required>
    <div class="validation-message" id="email-message"></div>
  </div>
  
  <div>
    <label for="password-strength">Mật khẩu với thanh độ mạnh</label>
    <input type="password" id="password-strength" name="password" required>
    <div class="strength-meter">
      <div class="strength-bar" id="strength-bar"></div>
    </div>
    <div class="validation-message" id="password-message"></div>
  </div>
  
  <button type="submit">Đăng ký</button>
</form>

<script>
// Xác thực email nâng cao
const emailInput = document.getElementById('email-advanced');
const emailMessage = document.getElementById('email-message');

emailInput.addEventListener('input', function() {
  const email = this.value;
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  
  if (email === '') {
    emailMessage.textContent = '';
    emailMessage.className = 'validation-message';
  } else if (emailRegex.test(email)) {
    emailMessage.textContent = '✓ Email hợp lệ';
    emailMessage.className = 'validation-message success';
  } else {
    emailMessage.textContent = '✗ Email không đúng định dạng';
    emailMessage.className = 'validation-message error';
  }
});

// Kiểm tra độ mạnh mật khẩu
const passwordInput = document.getElementById('password-strength');
const passwordMessage = document.getElementById('password-message');
const strengthBar = document.getElementById('strength-bar');

function checkPasswordStrength(password) {
  let strength = 0;
  const checks = [
    { regex: /.{8,}/, message: 'ít nhất 8 ký tự' },
    { regex: /[a-z]/, message: 'chữ thường' },
    { regex: /[A-Z]/, message: 'chữ hoa' },
    { regex: /[0-9]/, message: 'số' },
    { regex: /[^A-Za-z0-9]/, message: 'ký tự đặc biệt' }
  ];
  
  const missing = [];
  checks.forEach(check => {
    if (check.regex.test(password)) {
      strength++;
    } else {
      missing.push(check.message);
    }
  });
  
  // Cập nhật thanh độ mạnh
  const percentage = (strength / 5) * 100;
  strengthBar.style.width = percentage + '%';
  
  if (strength < 2) {
    strengthBar.className = 'strength-bar weak';
    passwordMessage.textContent = 'Yếu - Cần: ' + missing.join(', ');
    passwordMessage.className = 'validation-message error';
  } else if (strength < 4) {
    strengthBar.className = 'strength-bar medium';
    passwordMessage.textContent = 'Trung bình - Cần: ' + missing.join(', ');
    passwordMessage.className = 'validation-message warning';
  } else {
    strengthBar.className = 'strength-bar strong';
    passwordMessage.textContent = '✓ Mật khẩu mạnh';
    passwordMessage.className = 'validation-message success';
  }
}

passwordInput.addEventListener('input', function() {
  checkPasswordStrength(this.value);
});
</script>

<style>
.validation-message {
  font-size: 0.9em;
  margin-top: 5px;
}

.validation-message.success {
  color: #28a745;
}

.validation-message.error {
  color: #dc3545;
}

.validation-message.warning {
  color: #ffc107;
}

.strength-meter {
  width: 100%;
  height: 5px;
  background-color: #e9ecef;
  border-radius: 3px;
  margin-top: 5px;
  overflow: hidden;
}

.strength-bar {
  height: 100%;
  transition: all 0.3s ease;
  border-radius: 3px;
}

.strength-bar.weak {
  background-color: #dc3545;
}

.strength-bar.medium {
  background-color: #ffc107;
}

.strength-bar.strong {
  background-color: #28a745;
}
</style>
```

### Thuộc tính `placeholder`

Thuộc tính `placeholder` hiển thị văn bản ví dụ hoặc mô tả trong trường nhập liệu khi nó rỗng. Văn bản này sẽ biến mất khi người dùng bắt đầu nhập.

#### Ví dụ:
```html
<!-- Form tìm kiếm với placeholder hữu ích -->
<form>
  <div>
    <label for="search">Tìm kiếm sản phẩm</label>
    <input type="search" id="search" name="search" 
           placeholder="Nhập tên sản phẩm, thương hiệu...">
  </div>
  
  <div>
    <label for="email-contact">Email liên hệ</label>
    <input type="email" id="email-contact" name="email" 
           required 
           pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
           placeholder="vidu@email.com">
  </div>
  
  <div>
    <label for="phone-format">Số điện thoại</label>
    <input type="tel" id="phone-format" name="phone" 
           pattern="^[0-9]{10}$"
           placeholder="0987654321"
           title="Nhập 10 chữ số">
  </div>
  
  <button type="submit">Gửi</button>
</form>
```

**Lưu ý UX:** `placeholder` không nên thay thế nhãn (`<label>`) vì nó biến mất khi nhập liệu, buộc người dùng phải nhớ nội dung mong muốn.

---

## Tạo kiểu cho xác thực bằng CSS (CSS Validation Styling)

Bạn có thể sử dụng các lớp giả (pseudo-classes) CSS để tạo kiểu cho các trường biểu mẫu dựa trên trạng thái xác thực của chúng, cung cấp phản hồi trực quan cho người dùng.

### Các pseudo-classes chính:
- **`:valid`** - Trường đã vượt qua xác thực
- **`:invalid`** - Trường chưa vượt qua xác thực
- **`:required`** - Trường có thuộc tính `required`
- **`:optional`** - Trường không có thuộc tính `required`
- **`:focus`** - Trường đang được tập trung
- **`:in-range` / `:out-of-range`** - Giá trị nằm trong/ngoài phạm vi
- **`::placeholder`** - Tạo kiểu cho văn bản `placeholder`

#### Ví dụ CSS styling:

```html
<form class="styled-form">
  <div class="form-group">
    <label for="name-styled">Họ tên *</label>
    <input type="text" id="name-styled" name="name" required minlength="2">
    <span class="error-icon">⚠️</span>
    <span class="success-icon">✅</span>
  </div>
  
  <div class="form-group">
    <label for="email-styled">Email *</label>
    <input type="email" id="email-styled" name="email" required>
    <span class="error-icon">⚠️</span>
    <span class="success-icon">✅</span>
  </div>
  
  <div class="form-group">
    <label for="age-styled">Tuổi (18-65)</label>
    <input type="number" id="age-styled" name="age" min="18" max="65" required>
    <span class="error-icon">⚠️</span>
    <span class="success-icon">✅</span>
  </div>
  
  <button type="submit">Gửi thông tin</button>
</form>

<style>
.styled-form {
  max-width: 400px;
  margin: 20px auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.form-group {
  position: relative;
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #333;
}

.form-group input {
  width: 100%;
  padding: 12px;
  border: 2px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  transition: all 0.3s ease;
  box-sizing: border-box;
}

/* Placeholder styling */
.form-group input::placeholder {
  color: #999;
  font-style: italic;
}

/* Focus state */
.form-group input:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.3);
}

/* Valid state */
.form-group input:valid {
  border-color: #28a745;
  background-color: rgba(40, 167, 69, 0.1);
}

.form-group input:valid + .error-icon {
  display: none;
}

.form-group input:valid + .error-icon + .success-icon {
  display: inline;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
}

/* Invalid state */
.form-group input:invalid {
  border-color: #dc3545;
  background-color: rgba(220, 53, 69, 0.1);
}

.form-group input:invalid + .error-icon {
  display: inline;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
}

.form-group input:invalid + .error-icon + .success-icon {
  display: none;
}

/* Hide icons initially */
.error-icon, .success-icon {
  display: none;
}

/* Required field indicator */
.form-group input:required + .error-icon::before {
  content: " (Bắt buộc)";
  font-size: 12px;
  color: #dc3545;
}

/* Out of range styling */
.form-group input:out-of-range {
  border-color: #ffc107;
  background-color: rgba(255, 193, 7, 0.1);
}

/* Disabled state */
.form-group input:disabled {
  background-color: #f8f9fa;
  border-color: #e9ecef;
  color: #6c757d;
  cursor: not-allowed;
}

button[type="submit"] {
  width: 100%;
  padding: 12px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button[type="submit"]:hover {
  background-color: #0056b3;
}

button[type="submit"]:disabled {
  background-color: #6c757d;
  cursor: not-allowed;
}
</style>
```

**Lưu ý UX:** Tránh hiển thị lỗi xác thực ngay lập tức khi tải trang. Tốt hơn là hiển thị lỗi sau lần gửi đầu tiên hoặc khi giá trị thay đổi.

---

## Xác thực biểu mẫu bằng JavaScript (JavaScript Form Validation)

Trong nhiều trường hợp, xác thực HTML tích hợp sẵn là đủ. Tuy nhiên, JavaScript được sử dụng để nâng cao hoặc tùy chỉnh xác thực biểu mẫu HTML, đặc biệt khi bạn cần:

- Thay đổi nội dung hoặc giao diện của thông báo lỗi mặc định của trình duyệt
- Thực hiện xác thực phức tạp hơn không thể làm được chỉ với HTML
- So sánh hai trường, kiểm tra mật khẩu và xác nhận mật khẩu có khớp nhau không
- Kiểm tra không đồng bộ như tên người dùng đã tồn tại

### API xác thực ràng buộc (Constraint Validation API)

Đây là một tập hợp các phương thức và thuộc tính có sẵn trên các phần tử biểu mẫu DOM.

#### Các thuộc tính chính:

- **`validationMessage`** - Thông báo mô tả lỗi xác thực
- **`validity`** - Đối tượng `ValidityState` chứa trạng thái hợp lệ
- **`willValidate`** - `true` nếu phần tử sẽ được xác thực
- **`checkValidity()`** - Kiểm tra tính hợp lệ
- **`reportValidity()`** - Báo cáo các trường không hợp lệ
- **`setCustomValidity(message)`** - Đặt thông báo lỗi tùy chỉnh

#### Ví dụ JavaScript validation nâng cao:

```html
<form id="registration-form" novalidate>
  <div>
    <label for="username-js">Tên đăng nhập</label>
    <input type="text" id="username-js" name="username" required>
    <div class="error-message" id="username-error"></div>
  </div>
  
  <div>
    <label for="email-js">Email</label>
    <input type="email" id="email-js" name="email" required>
    <div class="error-message" id="email-error"></div>
  </div>
  
  <div>
    <label for="password-js">Mật khẩu</label>
    <input type="password" id="password-js" name="password" required>
    <div class="error-message" id="password-error"></div>
  </div>
  
  <div>
    <label for="confirm-password">Xác nhận mật khẩu</label>
    <input type="password" id="confirm-password" name="confirm_password" required>
    <div class="error-message" id="confirm-error"></div>
  </div>
  
  <div>
    <label for="terms">
      <input type="checkbox" id="terms" name="terms" required>
      Tôi đồng ý với điều khoản sử dụng
    </label>
    <div class="error-message" id="terms-error"></div>
  </div>
  
  <button type="submit">Đăng ký</button>
</form>

<script>
class FormValidator {
  constructor(formId) {
    this.form = document.getElementById(formId);
    this.setupEventListeners();
  }
  
  setupEventListeners() {
    // Xác thực khi gửi form
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.validateForm();
    });
    
    // Xác thực real-time cho từng trường
    const inputs = this.form.querySelectorAll('input');
    inputs.forEach(input => {
      input.addEventListener('blur', () => this.validateField(input));
      input.addEventListener('input', () => this.clearError(input));
    });
  }
  
  validateForm() {
    let isValid = true;
    const inputs = this.form.querySelectorAll('input');
    
    inputs.forEach(input => {
      if (!this.validateField(input)) {
        isValid = false;
      }
    });
    
    if (isValid) {
      this.submitForm();
    }
  }
  
  validateField(input) {
    const value = input.value.trim();
    const name = input.name;
    let errorMessage = '';
    
    // Kiểm tra trường bắt buộc
    if (input.hasAttribute('required') && !value) {
      errorMessage = this.getRequiredMessage(name);
    }
    // Kiểm tra email
    else if (input.type === 'email' && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        errorMessage = 'Email không đúng định dạng';
      }
    }
    // Kiểm tra tên đăng nhập
    else if (name === 'username' && value) {
      if (value.length < 3) {
        errorMessage = 'Tên đăng nhập phải có ít nhất 3 ký tự';
      } else if (!/^[a-zA-Z0-9_]+$/.test(value)) {
        errorMessage = 'Tên đăng nhập chỉ chứa chữ cái, số và dấu gạch dưới';
      }
    }
    // Kiểm tra mật khẩu
    else if (name === 'password' && value) {
      const passwordStrength = this.checkPasswordStrength(value);
      if (passwordStrength.score < 3) {
        errorMessage = `Mật khẩu yếu: ${passwordStrength.feedback}`;
      }
    }
    // Kiểm tra xác nhận mật khẩu
    else if (name === 'confirm_password' && value) {
      const password = this.form.querySelector('[name="password"]').value;
      if (value !== password) {
        errorMessage = 'Mật khẩu xác nhận không khớp';
      }
    }
    
    // Hiển thị lỗi
    this.showError(input, errorMessage);
    return !errorMessage;
  }
  
  checkPasswordStrength(password) {
    let score = 0;
    const feedback = [];
    
    if (password.length >= 8) score++;
    else feedback.push('ít nhất 8 ký tự');
    
    if (/[a-z]/.test(password)) score++;
    else feedback.push('chữ thường');
    
    if (/[A-Z]/.test(password)) score++;
    else feedback.push('chữ hoa');
    
    if (/[0-9]/.test(password)) score++;
    else feedback.push('số');
    
    if (/[^A-Za-z0-9]/.test(password)) score++;
    else feedback.push('ký tự đặc biệt');
    
    return {
      score,
      feedback: feedback.join(', ')
    };
  }
  
  getRequiredMessage(fieldName) {
    const messages = {
      username: 'Vui lòng nhập tên đăng nhập',
      email: 'Vui lòng nhập email',
      password: 'Vui lòng nhập mật khẩu',
      confirm_password: 'Vui lòng xác nhận mật khẩu',
      terms: 'Vui lòng đồng ý với điều khoản'
    };
    return messages[fieldName] || 'Trường này là bắt buộc';
  }
  
  showError(input, message) {
    const errorElement = document.getElementById(input.name + '-error');
    
    if (message) {
      errorElement.textContent = message;
      errorElement.style.display = 'block';
      input.classList.add('error');
      input.classList.remove('success');
    } else {
      errorElement.style.display = 'none';
      input.classList.remove('error');
      input.classList.add('success');
    }
  }
  
  clearError(input) {
    const errorElement = document.getElementById(input.name + '-error');
    errorElement.style.display = 'none';
    input.classList.remove('error');
  }
  
  async submitForm() {
    try {
      const formData = new FormData(this.form);
      const data = Object.fromEntries(formData);
      
      // Giả lập gửi dữ liệu lên server
      console.log('Đang gửi dữ liệu:', data);
      
      // Simulation of server response
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      alert('Đăng ký thành công!');
      this.form.reset();
    } catch (error) {
      alert('Có lỗi xảy ra. Vui lòng thử lại!');
    }
  }
}

// Khởi tạo validator
new FormValidator('registration-form');
</script>

<style>
.error-message {
  color: #dc3545;
  font-size: 14px;
  margin-top: 5px;
  display: none;
}

input.error {
  border-color: #dc3545;
  background-color: rgba(220, 53, 69, 0.1);
}

input.success {
  border-color: #28a745;
  background-color: rgba(40, 167, 69, 0.1);
}
</style>
```

### Ví dụ thông báo lỗi tùy chỉnh:

```html
<form id="custom-validation">
  <div>
    <label for="email-custom">Email</label>
    <input type="email" id="email-custom" name="email" required>
  </div>
  
  <div>
    <label for="phone-custom">Số điện thoại</label>
    <input type="tel" id="phone-custom" name="phone" required>
  </div>
  
  <button type="submit">Gửi</button>
</form>

<script>
const emailInput = document.getElementById('email-custom');
const phoneInput = document.getElementById('phone-custom');

// Tùy chỉnh thông báo lỗi cho email
emailInput.addEventListener('input', function() {
  if (this.validity.typeMismatch) {
    this.setCustomValidity('Vui lòng nhập địa chỉ email hợp lệ!');
  } else if (this.validity.valueMissing) {
    this.setCustomValidity('Email là trường bắt buộc!');
  } else {
    this.setCustomValidity(''); // Xóa lỗi
  }
});

// Tùy chỉnh xác thực số điện thoại
phoneInput.addEventListener('input', function() {
  const phoneRegex = /^[0-9]{10}$/;
  
  if (this.validity.valueMissing) {
    this.setCustomValidity('Số điện thoại là trường bắt buộc!');
  } else if (!phoneRegex.test(this.value)) {
    this.setCustomValidity('Số điện thoại phải có đúng 10 chữ số!');
  } else {
    this.setCustomValidity('');
  }
});
</script>
```

### Vô hiệu hóa xác thực mặc định của trình duyệt

```html
<!-- Tắt validation mặc định -->
<form novalidate id="no-default-validation">
  <input type="email" required>
  <button type="submit">Gửi</button>
</form>

<!-- Hoặc tắt cho button cụ thể -->
<form>
  <input type="email" required>
  <button type="submit" formnovalidate>Lưu nháp</button>
  <button type="submit">Gửi</button>
</form>
```

---

## Nhãn (Labels) và Trải nghiệm người dùng (UX)

### Sử dụng nhãn đúng cách:

```html
<!-- Cách 1: Bao quanh input -->
<label>
  Họ tên
  <input type="text" name="name" required>
</label>

<!-- Cách 2: Sử dụng thuộc tính for -->
<label for="email-label">Email</label>
<input type="email" id="email-label" name="email" required>

<!-- Ví dụ form với accessibility tốt -->
<form>
  <fieldset>
    <legend>Thông tin cá nhân</legend>
    
    <div class="form-group">
      <label for="first-name">
        Tên <span class="required">*</span>
      </label>
      <input type="text" id="first-name" name="first_name" 
             required aria-describedby="first-name-help">
      <small id="first-name-help">Nhập tên thật của bạn</small>
    </div>
    
    <div class="form-group">
      <label for="last-name">
        Họ <span class="required">*</span>
      </label>
      <input type="text" id="last-name" name="last_name" required>
    </div>
  </fieldset>
  
  <fieldset>
    <legend>Giới tính</legend>
    <div class="radio-group">
      <label>
        <input type="radio" name="gender" value="male" required>
        Nam
      </label>
      <label>
        <input type="radio" name="gender" value="female" required>
        Nữ
      </label>
      <label>
        <input type="radio" name="gender" value="other" required>
        Khác
      </label>
    </div>
  </fieldset>
  
  <button type="submit">Gửi thông tin</button>
</form>

<style>
.required {
  color: #dc3545;
}

.form-group {
  margin-bottom: 15px;
}

.radio-group {
  display: flex;
  gap: 15px;
}

fieldset {
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 15px;
  margin-bottom: 20px;
}

legend {
  font-weight: bold;
  padding: 0 10px;
}
</style>
```

---

## Nguyên tắc thiết kế để báo cáo lỗi trong biểu mẫu

### 1. Xác thực nội tuyến (Inline Validation)

```html
<form class="inline-validation-form">
  <div class="form-field">
    <label for="username-inline">Tên đăng nhập</label>
    <input type="text" id="username-inline" name="username" required>
    <div class="validation-feedback">
      <span class="loading">Đang kiểm tra...</span>
      <span class="success">✓ Tên đăng nhập khả dụng</span>
      <span class="error">✗ Tên đăng nhập đã tồn tại</span>
    </div>
  </div>
</form>

<script>
const usernameInput = document.getElementById('username-inline');
const feedback = usernameInput.nextElementSibling;

let checkTimeout;

usernameInput.addEventListener('input', function() {
  const username = this.value.trim();
  
  // Reset trạng thái
  feedback.className = 'validation-feedback';
  
  if (username.length < 3) return;
  
  // Hiển thị loading
  feedback.classList.add('loading');
  
  // Debounce check
  clearTimeout(checkTimeout);
  checkTimeout = setTimeout(() => {
    checkUsernameAvailability(username);
  }, 500);
});

async function checkUsernameAvailability(username) {
  const feedback = document.querySelector('.validation-feedback');
  
  try {
    // Giả lập API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Giả lập kết quả (50% khả năng available)
    const available = Math.random() > 0.5;
    
    feedback.className = 'validation-feedback';
    if (available) {
      feedback.classList.add('success');
    } else {
      feedback.classList.add('error');
    }
  } catch (error) {
    feedback.className = 'validation-feedback error';
  }
}
</script>

<style>
.validation-feedback {
  margin-top: 5px;
  font-size: 14px;
}

.validation-feedback span {
  display: none;
}

.validation-feedback.loading .loading,
.validation-feedback.success .success,
.validation-feedback.error .error {
  display: inline;
}

.validation-feedback.loading .loading {
  color: #007bff;
}

.validation-feedback.success .success {
  color: #28a745;
}

.validation-feedback.error .error {
  color: #dc3545;
}
</style>
```


# Nguyên tắc thiết kế để báo cáo lỗi trong biểu mẫu (Design Guidelines for Reporting Errors in Forms)

Thiết kế lỗi hiệu quả đảm bảo rằng:

## 1. **Xác thực nội tuyến (Inline Validation) nếu có thể**
Hiển thị chỉ báo lỗi ngay lập tức sau khi người dùng hoàn thành một trường. Điều này giảm chi phí tương tác cho người dùng.

**Ví dụ:**
- Khi người dùng nhập email không đúng định dạng và rời khỏi trường, hiển thị ngay: "Email không đúng định dạng. Vui lòng nhập đúng format: example@domain.com"
- Trường mật khẩu hiển thị lỗi ngay khi người dùng tab sang trường khác: "Mật khẩu phải có ít nhất 8 ký tự"
- Trường số điện thoại báo lỗi khi người dùng nhập chữ: "Chỉ được nhập số"

## 2. **Chỉ báo thành công cho các trường phức tạp**
Sử dụng xác thực nội tuyến để chỉ ra việc hoàn thành thành công, ví dụ dấu tích xanh cho tên người dùng có sẵn hoặc thanh đo độ mạnh mật khẩu.

**Ví dụ:**
- Trường username hiển thị ✓ màu xanh với text "Tên người dùng khả dụng" khi kiểm tra không trùng
- Thanh progress màu xanh hiển thị "Mật khẩu mạnh" khi người dùng nhập đủ yêu cầu
- Trường CAPTCHA hiển thị "✓ Xác thực thành công" sau khi nhập đúng
- Upload file hiển thị "✓ Tải lên thành công" với tên file

## 3. **Giữ thông báo lỗi gần trường**
Thông báo lỗi nên hiển thị ngay bên dưới hoặc bên cạnh trường gây ra lỗi để người dùng dễ dàng nhìn thấy thông báo trong khi sửa lỗi.

**Ví dụ:**
```
[Email input field]
❌ Email không đúng định dạng

[Password input field]  
❌ Mật khẩu phải có ít nhất 8 ký tự

[Phone input field]
❌ Số điện thoại không hợp lệ
```

## 4. **Sử dụng màu sắc để phân biệt lỗi**
Màu đỏ thường liên quan đến lỗi, màu cam/vàng cho cảnh báo, màu xanh lá/xanh lam cho thành công. Đảm bảo văn bản xác thức nổi bật.

**Ví dụ:**
- **Lỗi (Đỏ #FF0000):** Border đỏ + text đỏ cho trường bị lỗi
- **Cảnh báo (Cam #FFA500):** "Mật khẩu yếu" với màu cam
- **Thành công (Xanh #00AA00):** "✓ Thông tin hợp lệ" màu xanh
- **Thông tin (Xanh dương #0066CC):** Gợi ý format nhập liệu

## 5. **Thêm biểu tượng (Iconography) hoặc hoạt ảnh tinh tế**
Biểu tượng bên trái thông báo lỗi hoặc tóm tắt xác thực sẽ thu hút sự chú ý, giúp người dùng dễ dàng quét tìm lỗi, đặc biệt hữu ích cho người mù màu.

**Ví dụ:**
- ❌ "Email không đúng định dạng"
- ⚠️ "Mật khẩu yếu, nên thêm ký tự đặc biệt"
- ✅ "Số điện thoại hợp lệ"
- ℹ️ "Mật khẩu phải có 8-20 ký tự"
- Hiệu ứng shake nhẹ khi trường bị lỗi
- Hiệu ứng fade-in cho thông báo lỗi

## 6. **Sử dụng hộp thoại phương thức (Modals) hoặc hộp thoại xác nhận (Confirmation Dialogs) một cách tiết kiệm**
Chúng có thể gây gián đoạn và tăng tải nhận thức (cognitive load). Chỉ sử dụng khi cần thu hút sự chú ý đặc biệt hoặc thông báo lỗi đơn giản.

**Ví dụ khi NÊN dùng:**
- "Bạn có chắc muốn xóa tài khoản? Hành động này không thể hoàn tác"
- "Phiên đăng nhập hết hạn. Vui lòng đăng nhập lại"
- "Mất kết nối mạng. Vui lòng kiểm tra và thử lại"

**Ví dụ khi KHÔNG NÊN dùng:**
- Lỗi validation đơn giản như email sai format
- Thông báo lỗi có thể hiển thị inline
- Cảnh báo không nghiêm trọng

## 7. **Không xác thực trường trước khi nhập xong**
Tránh hiển thị thông báo lỗi trước khi người dùng có cơ hội nhập liệu đầy đủ.

**Ví dụ SAI:**
- Hiển thị "Email không hợp lệ" ngay khi người dùng gõ ký tự đầu tiên
- Báo "Mật khẩu quá ngắn" khi mới gõ 2-3 ký tự

**Ví dụ ĐÚNG:**
- Chờ người dùng rời khỏi trường (onBlur) mới validate
- Hoặc validate khi người dùng dừng gõ 500ms (debounce)
- Validate khi submit form

## 8. **Không sử dụng tóm tắt xác thực (Validation Summaries) làm chỉ báo duy nhất**
Tóm tắt ở đầu biểu mẫu có thể cung cấp cái nhìn tổng quan, nhưng không nên là cách duy nhất vì nó buộc người dùng phải tìm trường bị lỗi.

**Ví dụ cách dùng ĐÚNG:**
```
📋 Có 3 lỗi cần sửa:
- Email không đúng định dạng
- Mật khẩu quá ngắn  
- Số điện thoại bắt buộc

[Form với inline validation cho từng trường]
```

**Ví dụ cách dùng SAI:**
- Chỉ có summary ở đầu mà không có inline validation
- Summary không liên kết tới trường bị lỗi

## 9. **Không sử dụng gợi ý công cụ (Tooltips) để báo cáo lỗi**
Các biểu tượng cảnh báo trong gợi ý công cụ khó nhận thấy và yêu cầu thêm bước để truy cập thông tin quan trọng.

**Ví dụ SAI:**
- Chỉ có icon ⚠️ nhỏ, phải hover mới thấy lỗi
- Tooltip ẩn thông tin lỗi quan trọng

**Ví dụ ĐÚNG:**
- Hiển thị lỗi trực tiếp dưới trường input
- Sử dụng tooltip cho thông tin bổ sung, không phải lỗi chính

## 10. **Cung cấp trợ giúp bổ sung cho các lỗi lặp lại**
Nếu người dùng gặp cùng một lỗi nhiều lần, điều đó cho thấy vấn đề sâu hơn trong thiết kế UI. Cung cấp liên kết đến hỗ trợ hoặc xem xét cải thiện thiết kế/thông báo lỗi.

**Ví dụ:**
- Sau 3 lần nhập email sai: "Cần hỗ trợ? [Xem hướng dẫn] hoặc [Liên hệ support]"
- Lỗi upload file nhiều lần: "File quá lớn. [Xem cách nén file] hoặc [Upload bằng cách khác]"
- Lỗi thanh toán: "Thẻ bị từ chối. [Kiểm tra thông tin thẻ] hoặc [Dùng phương thức khác]"

---

## **Các nguyên tắc UX khác:**

### **• Không vô hiệu hóa nút gửi (submit button)**
Cho phép người dùng nhấp vào nút gửi và thấy các lỗi xác thực. Nếu nút bị chặn, họ sẽ không biết phải làm gì tiếp theo.

**Ví dụ ĐÚNG:**
```
[Nút "Đăng ký" luôn có thể click]
→ Click → Hiển thị tất cả lỗi validation
```

**Ví dụ SAI:**
```
[Nút "Đăng ký" màu xám, disabled]
→ User không biết tại sao không click được
```

### **• Sử dụng ngôn ngữ dễ hiểu**
Thông báo lỗi nên sử dụng ngôn ngữ con người, không phải ngôn ngữ kỹ thuật.

**Ví dụ SAI:**
- "Invalid input format for field 'email_address'"
- "Error 400: Bad Request"
- "Validation failed: required field missing"

**Ví dụ ĐÚNG:**
- "Vui lòng nhập email đúng định dạng"
- "Trường này không được để trống"
- "Mật khẩu phải có ít nhất 8 ký tự"

### **• Giúp người dùng tránh lỗi**
Mục tiêu cuối cùng là thiết kế biểu mẫu sao cho người dùng ít mắc lỗi nhất có thể.

**Ví dụ các cách phòng ngừa lỗi:**
- **Input masks:** Tự động format số điện thoại (09xx-xxx-xxx)
- **Placeholder text:** "example@domain.com" cho trường email
- **Helper text:** "Mật khẩu cần 8+ ký tự, có chữ hoa và số"
- **Smart defaults:** Chọn sẵn quốc gia phổ biến
- **Progressive disclosure:** Hiển thị từng bước, không quá nhiều trường cùng lúc
- **Real-time validation:** Kiểm tra username availability khi người dùng gõ
- **Format suggestion:** "Có phải bạn muốn nhập @gmail.com?" khi gõ @gmai

---

*Tài liệu này tổng hợp các nguyên tắc thiết kế form validation hiệu quả, giúp cải thiện trải nghiệm người dùng và giảm thiểu lỗi trong quá trình nhập liệu.*


## Tài liệu phải đọc khi ĐÓNG CỌC LẦN ...

> ⭐ **Theo dõi [kênh Threads](https://www.threads.com/@kaitaku.88) để đọc bài mới mỗi ngày!** ⭐  

**[<== Bài Trước  ](link)          |[  Trang Chủ  ](./README.md)|           [  Bài Sau ==>](link)**