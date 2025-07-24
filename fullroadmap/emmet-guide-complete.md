# Hướng dẫn Emmet hoàn chỉnh - Bổ sung và cải tiến

## Các điểm bổ sung quan trọng:

### 6. Các viết tắt HTML đặc biệt còn thiếu

#### 6.1. Các loại input cụ thể
```
input:text → <input type="text" name="" id="">
input:password → <input type="password" name="" id="">
input:email → <input type="email" name="" id="">
input:tel → <input type="tel" name="" id="">
input:url → <input type="url" name="" id="">
input:number → <input type="number" name="" id="">
input:range → <input type="range" name="" id="">
input:date → <input type="date" name="" id="">
input:checkbox → <input type="checkbox" name="" id="">
input:radio → <input type="radio" name="" id="">
input:file → <input type="file" name="" id="">
input:submit → <input type="submit" value="">
input:reset → <input type="reset" value="">
input:button → <input type="button" value="">
input:hidden → <input type="hidden" name="">
```

#### 6.2. Các thẻ media và meta
```
img → <img src="" alt="">
img:s → <img src="" alt="" srcset="">
img:z → <img src="" alt="" sizes="">
link → <link rel="stylesheet" href="">
link:css → <link rel="stylesheet" href="">
link:print → <link rel="stylesheet" href="" media="print">
link:favicon → <link rel="shortcut icon" type="image/x-icon" href="">
link:rss → <link rel="alternate" type="application/rss+xml" title="RSS" href="">
meta → <meta name="" content="">
meta:utf → <meta charset="UTF-8">
meta:win → <meta charset="windows-1251">
meta:vp → <meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### 7. CSS Emmet nâng cao

#### 7.1. Flexbox shortcuts
```
d:f → display: flex;
fd:c → flex-direction: column;
fd:r → flex-direction: row;
jc:c → justify-content: center;
jc:sb → justify-content: space-between;
jc:sa → justify-content: space-around;
ai:c → align-items: center;
ai:fs → align-items: flex-start;
ai:fe → align-items: flex-end;
```

#### 7.2. Grid shortcuts
```
d:g → display: grid;
gtc → grid-template-columns: ;
gtr → grid-template-rows: ;
gc → grid-column: ;
gr → grid-row: ;
gap → gap: ;
```

#### 7.3. Position và transform
```
pos:r → position: relative;
pos:a → position: absolute;
pos:f → position: fixed;
pos:s → position: sticky;
t:0 → top: 0;
r:0 → right: 0;
b:0 → bottom: 0;
l:0 → left: 0;
trf:r → transform: rotate();
trf:s → transform: scale();
trf:t → transform: translate();
```

#### 7.4. Typography và màu sắc
```
ff:s → font-family: serif;
ff:ss → font-family: sans-serif;
ff:m → font-family: monospace;
fw:b → font-weight: bold;
fw:n → font-weight: normal;
fz:12 → font-size: 12px;
lh:1.5 → line-height: 1.5;
ta:c → text-align: center;
ta:l → text-align: left;
ta:r → text-align: right;
td:n → text-decoration: none;
td:u → text-decoration: underline;
c:red → color: red;
c:#fff → color: #fff;
bgc:transparent → background-color: transparent;
```

### 8. Tính năng nâng cao chưa được đề cập

#### 8.1. Lorem Ipsum Generator
```
lorem → Tạo ra đoạn văn Lorem Ipsum mặc định
lorem10 → Tạo ra 10 từ Lorem Ipsum
lorem*3 → Tạo ra 3 đoạn Lorem Ipsum
lorem10*3 → Tạo ra 3 đoạn, mỗi đoạn 10 từ
```

#### 8.2. Implicit Tag Names (Tên thẻ ngầm định)
Emmet có thể tự động đoán tên thẻ dựa trên ngữ cảnh:
```
ul>.item → <ul><li class="item"></li></ul>
table>.row → <table><tr class="row"></tr></table>
select>.option → <select><option class="option"></option></select>
ol>.item → <ol><li class="item"></li></ol>
dl>.item → <dl><dt class="item"></dt></dl>
```

#### 8.3. Filters (Bộ lọc)
```
div|e → &lt;div&gt;&lt;/div&gt; (HTML entities)
div|c → <!-- <div></div> --> (comment)
div|t → Loại bỏ các thẻ, chỉ giữ nội dung text
```

### 9. Ví dụ thực tế phức tạp

#### 9.1. Tạo một navigation menu hoàn chỉnh
```
nav.navbar>div.container>div.navbar-brand{Logo}+ul.navbar-nav>li.nav-item*5>a.nav-link{Menu Item $}
```
**Kết quả:**
```html
<nav class="navbar">
    <div class="container">
        <div class="navbar-brand">Logo</div>
        <ul class="navbar-nav">
            <li class="nav-item"><a href="" class="nav-link">Menu Item 1</a></li>
            <li class="nav-item"><a href="" class="nav-link">Menu Item 2</a></li>
            <li class="nav-item"><a href="" class="nav-link">Menu Item 3</a></li>
            <li class="nav-item"><a href="" class="nav-link">Menu Item 4</a></li>
            <li class="nav-item"><a href="" class="nav-link">Menu Item 5</a></li>
        </ul>
    </div>
</nav>
```

#### 9.2. Tạo form đăng ký phức tạp
```
form.registration-form[method=post action="/register"]>fieldset>legend{Personal Information}+div.form-group*3>(label[for=field$]{Field $}+input:text[id=field$ name=field$ required])^button:submit{Register}
```

#### 9.3. Tạo card layout với Bootstrap
```
div.container>div.row>div.col-md-4*3>div.card>img.card-img-top[src="https://via.placeholder.com/300x200"]+div.card-body>h5.card-title{Card Title $}+p.card-text{lorem20}+a.btn.btn-primary[href="#"]{Read More}
```

### 10. Lỗi thường gặp và cách khắc phục

#### 10.1. Emmet không hoạt động
- Kiểm tra file extension có đúng (.html, .css, .jsx, v.v.)
- Đảm bảo Emmet được bật trong settings của VS Code
- Kiểm tra ngôn ngữ file có được VS Code nhận diện đúng

#### 10.2. Shortcuts không hoạt động
- Kiểm tra keybindings có xung đột không
- Đảm bảo đã cài đặt Emmet Keybindings extension
- Thử sử dụng Command Palette (Ctrl+Shift+P) để gọi lệnh Emmet

#### 10.3. CSS Emmet không hoạt động
- Đảm bảo con trỏ đang ở trong CSS rule
- Kiểm tra cú pháp có đúng không
- Một số IDE cần enable CSS Emmet riêng

### 11. Tích hợp với các framework

#### 11.1. React/JSX
```
rfc → React Functional Component template
div.container>div.row>div.col-{$}*12
className thay vì class
```

#### 11.2. Vue.js
```
template>div.container>div.row>div.col*3
v-for="item in items" :key="item.id"
```

### 12. Performance Tips

- Sử dụng Emmet cho cấu trúc lớn, không lạm dụng cho thẻ đơn
- Kết hợp với snippets của editor để tối ưu workflow
- Học thuộc các shortcuts thường dùng để tăng tốc độ
- Sử dụng abbreviation history để tái sử dụng pattern phức tạp

### 13. Tài nguyên học tập

- **Emmet Cheat Sheet:** https://docs.emmet.io/cheat-sheet/
- **Interactive Emmet:** Các tool online để practice
- **VS Code Emmet Documentation:** Tài liệu chính thức
- **Community snippets:** Các snippet do cộng đồng chia sẻ

## Kết luận

Tài liệu gốc đã rất tốt và toàn diện. Những bổ sung này sẽ giúp người dùng có cái nhìn hoàn chỉnh hơn về Emmet và tận dụng tối đa sức mạnh của công cụ này trong việc phát triển web.