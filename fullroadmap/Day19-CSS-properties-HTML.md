# CSS PROPERTIES and HTML

# A. Các thuộc tính phổ biến nhất
Có một số thuộc tính CSS mà bạn sẽ sử dụng mọi lúc, hoặc ít nhất là thường xuyên hơn. Chúng tôi sẽ giới thiệu cho bạn một số thuộc tính này, mặc dù đây không phải là danh sách đầy đủ. Việc tìm hiểu các thuộc tính sau đây sẽ đủ để giúp bạn bắt đầu.

Mặc dù không rõ sự khác biệt là gì nhưng:

- Với HTML thì sử dụng attribute để chỉ thuộc tính

- Với CSS thì sử dụng property để chỉ thuộc tính.

## 1. Color và background-color
Thuộc tính `color` thiết lập màu văn bản của phần tử, trong khi `background-color` thiết lập màu nền của phần tử. Cả hai thuộc tính này đều có thể chấp nhận một trong nhiều loại giá trị. Một giá trị phổ biến là keyword, chẳng hạn như tên màu thực tế như `red` hoặc từ khóa `transparent` (trong suốt). Chúng cũng chấp nhận các giá trị HEX, RGB và HSL, mà bạn có thể quen thuộc nếu bạn đã từng sử dụng chương trình photoshop hoặc trang web nơi bạn có thể tùy chỉnh màu hồ sơ của mình.
```css
p {
  /* hex example: */
  color: #1100ff;
}

p {
  /* rgb example: */
  color: rgb(100, 0, 127);
}

p {
  /* hsl example: */
  color: hsl(15, 82%, 56%);
}
```
Hãy xem nhanh [CSS Legal Color Values](https://www.w3schools.com/cssref/css_colors_legal.asp) để biết cách bạn có thể điều chỉnh độ mờ của các màu này bằng cách thêm giá trị alpha.

## 2. Typography basics và text-align (Kiểu chữ cơ bản và căn chỉnh)
**`font-family:`**  

Có thể là một giá trị đơn lẻ hoặc danh sách các giá trị được phân tách bằng dấu phẩy xác định phông chữ mà một phần tử sử dụng. Mỗi phông chữ sẽ thuộc một trong hai loại, hoặc là "tên họ phông chữ" (“font family name”) như "Times New Roman" (chúng ta sử dụng dấu ngoặc kép do khoảng trắng giữa các từ) hoặc là "tên họ chung" (“generic family name” ) như serif (tên họ chung không bao giờ sử dụng dấu ngoặc kép).

Nếu trình duyệt không tìm thấy hoặc không hỗ trợ font chữ đầu tiên trong danh sách, trình duyệt sẽ sử dụng phông chữ tiếp theo, sau đó là phông chữ tiếp theo, v.v. cho đến khi tìm thấy phông chữ được hỗ trợ và hợp lệ. Đây là lý do tại sao cách thực hành tốt nhất là đưa vào danh sách các giá trị cho thuộc tính font-family, bắt đầu bằng font chữ bạn muốn sử dụng nhiều nhất và kết thúc bằng một họ phông chữ chung làm phương án dự phòng, ví dụ: font-family: "Times New Roman", serif;

**`font-size:`**

Là thuộc tính sẽ thiết lập kích thước của phông chữ. Khi đưa ra giá trị cho thuộc tính này, giá trị không được chứa bất kỳ khoảng trắng nào, ví dụ: font-size: 22px không có khoảng cách giữa “22” và “px”.

**`font-weight:`**

Ảnh hưởng đến độ đậm của văn bản, giả sử phông chữ hỗ trợ độ đậm đã chỉ định. Giá trị này có thể là một từ khóa, ví dụ: font-weight: bold hoặc một số từ 1 đến 1000, ví dụ: font-weight: 700 (tương đương với bold). Thông thường, các giá trị số sẽ tăng dần từ 100 đến 900, mặc dù điều này sẽ phụ thuộc vào phông chữ.

**`text-align:`**

text-align sẽ căn chỉnh văn bản theo chiều ngang trong một phần tử và bạn có thể sử dụng các từ khóa phổ biến mà bạn có thể gặp trong trình xử lý văn bản làm giá trị cho thuộc tính này, ví dụ: text-align: center.

## 3. Image height and width (kích thước ảnh)

Hình ảnh không phải là thành phần duy nhất mà chúng ta có thể điều chỉnh chiều cao và chiều rộng, nhưng trong trường hợp này, chúng ta muốn tập trung cụ thể vào chúng.

Theo mặc định, giá trị chiều cao và chiều rộng của phần tử <img> sẽ giống với chiều cao và chiều rộng của tệp hình ảnh thực tế. Nếu bạn muốn điều chỉnh kích thước của hình ảnh mà không làm mất tỷ lệ, bạn sẽ sử dụng giá trị "auto" cho thuộc tính chiều cao và điều chỉnh giá trị chiều rộng:
```css
img {
  height: auto;
  width: 500px;
}
```
Ví dụ, nếu kích thước gốc của hình ảnh là cao 500px và rộng 1000px, sử dụng CSS ở trên sẽ cho kết quả chiều cao là 250px.

Các thuộc tính này hoạt động kết hợp với các thuộc tính chiều cao và chiều rộng trong HTML. Tốt nhất là bao gồm cả hai thuộc tính này và các thuộc tính HTML cho các thành phần hình ảnh, ngay cả khi bạn không có kế hoạch điều chỉnh các giá trị từ các giá trị gốc của tệp hình ảnh. Nếu các giá trị này không được bao gồm, khi một hình ảnh mất nhiều thời gian hơn để tải so với phần còn lại của nội dung trang, thì lúc đầu nó sẽ không chiếm bất kỳ không gian nào trên trang nhưng sẽ đột nhiên gây ra sự thay đổi lớn đối với các nội dung trang khác khi nó được tải vào. Việc nêu rõ chiều cao và chiều rộng sẽ ngăn chặn điều này xảy ra, vì không gian sẽ được "dành riêng" (reserved) trên trang và xuất hiện trống cho đến khi hình ảnh tải xong.

# B. Adding CSS to HTML (thêm CSS đến HTML)

Bây giờ chúng ta đã học được một số cú pháp cơ bản, bạn có thể tự hỏi làm thế nào để thêm CSS này vào nội dung HTML. 

Có 3 phương pháp để thực hiện việc đó.

## 1. External CSS (Từ file CSS bên ngoài)
CSS bên ngoài là phương pháp phổ biến nhất mà bạn sẽ gặp phải. Bằng cách tạo một tệp riêng cho CSS và liên kết nó bên trong thẻ mở và đóng `<head>` của HTML bằng phần tử void `<link>`:
```html
<!-- index.html -->
<head>
  <link rel="stylesheet" href="styles.css">
</head>
```
```css
/* styles.css */

div {
  color: white;
  background-color: black;
}

p {
  color: red;
}
```

Đầu tiên, chúng ta thêm một phần tử void `<link>` bên trong thẻ mở và thẻ đóng `<head>` của tệp HTML. Thuộc tính `href` là vị trí của tệp CSS, có thể là URL tuyệt đối hoặc, tùy bạn sử dụng, là URL liên quan đến vị trí của tệp HTML. Trong ví dụ trên, chúng ta giả định cả hai tệp đều nằm trong cùng một thư mục. Thuộc tính rel là bắt buộc và nó chỉ định mối quan hệ giữa file HTML và file được liên kết.

Sau đó, bên trong tệp `styles.css` mới tạo, chúng ta có 2 selector (div và p), theo sau là một cặp dấu ngoặc nhọn mở và đóng, tạo thành một "khối khai báo (declaration block)". Cuối cùng, chúng ta đặt bất kỳ khai báo nào bên trong khối khai báo. color: white; là một khai báo, với color là thuộc tính (property) và white là giá trị (value), và background-color: black; là một khai báo khác.

Lưu ý về tên tệp: styles.css chính là tên tệp mà tôi đã chọn ở đây. Bạn có thể đặt tên tệp theo ý muốn miễn là loại tệp là .css, mặc dù "style" hoặc "styles" là tên thường dùng nhất.

**Một số ưu điểm của phương pháp này (sử dụng file .css bên ngoài) là:**

- Nó giữ cho HTML và CSS của chúng ta tách biệt, giúp tệp HTML nhỏ hơn và trông sạch hơn.

- Chúng ta chỉ cần chỉnh sửa CSS ở một nơi, điều này đặc biệt tiện dụng đối với các website có nhiều pages có cùng kiểu.

## 2. Internal CSS  
Internal CSS = CSS nội bộ (hoặc embedded CSS = CSS được nhúng) liên quan đến việc thêm CSS vào chính tệp HTML thay vì tạo một tệp hoàn toàn riêng biệt. Với phương pháp này, bạn đặt tất cả các quy tắc định kiểu CSS vào bên trong một cặp thẻ mở và đóng `<style>`, sau đó được đặt bên trong thẻ mở và đóng `<head>` của tệp HTML của bạn. Vì các style được đặt trực tiếp bên trong thẻ `<head>`, nên chúng ta không còn cần phần tử `<link>` mà phương pháp External CSS yêu cầu nữa.

Bên cạnh những khác biệt này, cú pháp hoàn toàn giống với phương pháp External CSS :
```html
<head>
  <style>
    div {
      color: white;
      background-color: black;
    }

    p {
      color: red;
    }
  </style>
</head>
<body>
  ...
</body>
```
Phương pháp này có thể hữu ích để thêm các styles duy nhất vào một trang duy nhất (single page) của một website, nhưng nó không giữ mọi thứ tách biệt như phương pháp external CSS và tùy thuộc vào số lượng quy tắc và khai báo, nó có thể khiến tệp HTML trở nên khá lớn.

## 3. Inline CSS
Inline CSS cho phép thêm styles trực tiếp vào thẻ mở của các phần tử HTML, tuy nhiên phương pháp này không được khuyến khích:
```html
<body>
  <div style="color: white; background-color: black;">...</div>
</body>
```
Điều đầu tiên cần lưu ý là chúng ta thực sự không sử dụng bất kỳ selector nào ở đây, vì các kiểu được thêm trực tiếp vào thẻ mở `<div>`. Tiếp theo, chúng ta có thuộc tính style=, với giá trị của nó trong cặp dấu ngoặc kép là các khai báo.

Nếu bạn cần thêm một kiểu duy nhất (unique style) cho một phần tử duy nhất (single element), phương pháp này có thể hoạt động tốt. Tuy nhiên, nhìn chung, đây không phải là cách được khuyến nghị để thêm CSS vào HTML vì một số lý do:

- Nó có thể nhanh chóng trở nên khá lộn xộn khi bạn bắt đầu thêm nhiều khai báo vào một phần tử duy nhất, khiến tệp HTML của bạn trở nên phình to không cần thiết.

- Nếu bạn muốn nhiều phần tử có cùng kiểu, bạn sẽ phải sao chép và dán cùng kiểu vào từng phần tử riêng lẻ, gây ra nhiều sự lặp lại không cần thiết và làm phình to hơn.

- Bất kỳ Inline CSS nào cũng sẽ ghi đè lên hai phương pháp kia (CSS Bên ngoài và CSS Nhúng), điều này có thể gây ra kết quả không mong muốn. (Trong thực tế điều này cũng có những lợi thế nhất định, nhưng chúng ta không đi sâu vào vấn đề này ở đây )

Bài tiếp theo sẽ là thực hành làm bài tập CSS với Git, GitHub