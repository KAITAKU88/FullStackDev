# **Cơ bản về Command Line**
## 1. Giao diện dòng lệnh là gì
Màn hình hoặc cửa sổ trống có dấu nhắc và con trỏ nhấp nháy chính là giao diện dòng lệnh `Command Line Interface (CLI)`, nơi bạn có thể nhập các lệnh mà máy tính sẽ chạy cho bạn. Làm việc với dòng lệnh (`Command Line`) là một kỹ năng quan trọng mà bạn cần học với tư cách là một nhà phát triển. Dòng lệnh giống như cơ sở hoạt động của chúng ta, từ đó chúng ta có thể khởi chạy các chương trình khác và tương tác với chúng. Nó có cú pháp riêng để học, nhưng vì bạn sẽ nhập cùng một lệnh hàng chục lần, nên bạn sẽ nhanh chóng nắm bắt được các lệnh mà bạn cần nhất.

Trong bài học giới thiệu về dòng lệnh này, bạn sẽ học cách điều hướng máy tính và thao tác với các tệp và thư mục (directories hoặc folders) trực tiếp từ sự thoải mái của dòng lệnh. Bạn sẽ sớm thấy rằng điều này không khó như bạn nghĩ. Các lệnh bạn sẽ học trong bài học này rất đơn giản, vì vậy đừng để viễn cảnh sử dụng dòng lệnh lần đầu tiên làm bạn sợ hãi.

Khi mở cửa sổ của Terminal bạn sẽ thấy giao diện dòng lệnh. Hầu hết là trống không, chỉ có vài text, chúng sẽ khác nhau tùy theo hệ điều hành, với Linux và Macs cũ sẽ kết thúc với dấu` $`. Còn với Macs mới sẽ là dấu` %`. Biểu tượng này được gọi là `dấu nhắc lệnh (prompt indicates)` - nó chỉ ra rằng Terminal đang đợi bạn nhập lệnh.

Đầu tiên hãy thử gõ: `whoami` và `Enter` => nó sẽ trả về `username`

## 2. Tại sao phải học kỹ năng sử dụng Command Line ngay từ đầu
Bạn sẽ phải sử dụng dòng lệnh nhiều lần trong suốt khóa học, và phải cài nhiều phần mềm cho dự án bằng cách dùng dòng lệnh. Ngoài ra, bạn sẽ chủ yếu sử dụng `Git` trong dòng lệnh. Là một phần của bức tranh toàn cảnh, bạn có thể sử dụng dòng lệnh hàng ngày trong sự nghiệp của mình với tư cách là một nhà phát triển phần mềm, khiến nó trở thành một kỹ năng không thể thiếu trong bộ công cụ của bạn.

### 2.1 Lưu ý về việc nhập mật khẩu trong terminal
Khi sử dụng lệnh trong terminal yêu cầu bạn nhập mật khẩu để xác thực (chẳng hạn như `sudo`), bạn sẽ thấy các ký tự không hiển thị khi bạn nhập chúng. Mặc dù có vẻ như terminal không phản hồi, nhưng đừng lo lắng!

Đây là tính năng bảo mật để bảo vệ thông tin bí mật, giống như cách các trường mật khẩu trên trang web sử dụng dấu sao hoặc dấu chấm. Bằng cách không hiển thị các ký tự bạn nhập, thiết bị đầu cuối sẽ giữ mật khẩu của bạn an toàn.

Bạn vẫn có thể nhập mật khẩu bình thường và nhấn Enter để gửi.

## 3. 3 Cách để Sử dụng dòng lệnh như 1 chuyên gia
Có một điều quan trọng mà bạn cần biết về lập trình viên. Lập trình viên lười biếng. Thực sự lười biếng. Khi bị buộc phải làm đi làm lại một việc gì đó, khả năng cao là họ sẽ tìm ra cách tự động hóa việc đó. Tin tốt là bạn có thể tận dụng nhiều phím tắt mà họ đã tạo ra trong quá trình thực hiện. Đã đến lúc học cách sử dụng dòng lệnh như một chuyên gia (tức là theo cách thực sự lười biếng).

***Đầu tiên***, bạn có thể đã nhận thấy rằng việc sao chép và dán bên trong dòng lệnh không hoạt động theo cách bạn mong đợi. Khi bạn ở bên trong dòng lệnh, hãy sử dụng `Ctrl + Shift + C `(Mac: Cmd + C) để sao chép và `Ctrl + Shift + V` (Mac: Cmd + V) để dán. Ví dụ, để sao chép và dán lệnh từ trình duyệt của bạn vào dòng lệnh, hãy tô sáng văn bản lệnh và sử dụng `Ctrl + C` như bình thường, sau đó dán vào thiết bị đầu cuối của bạn bằng `Ctrl + Shift + V`. Hãy thử xem!

***Thứ hai***, bạn cần tìm hiểu về `hoàn thành tab (tab completion)`. Nghiêm túc mà nói, mẹo này sẽ giúp bạn tiết kiệm rất nhiều thời gian và sự bực bội. Giả sử bạn đang ở trong dòng lệnh và cần di chuyển đến một thư mục xa, chẳng hạn như `~/Documents/Odin-Project/foundations/javascript/calculator/`. Đó là một lệnh dài để nhập và mọi thứ cần phải chính xác để nó hoạt động. Không, chúng tôi quá lười để làm điều đó! Về cơ bản, bằng cách nhấn Tab, dòng lệnh sẽ tự động hoàn thành các lệnh mà bạn đã bắt đầu nhập khi chỉ có một tùy chọn. Ví dụ, việc có một thư mục Documents và một thư mục Downloads trong thư mục gốc là khá phổ biến. Nếu bạn đã nhập `cd D` rồi nhấn `Tab`, dòng lệnh sẽ cho bạn biết rằng nó không chắc chắn bạn muốn lệnh nào bằng cách hiển thị các tùy chọn khác nhau khớp với những gì bạn đã nhập cho đến nay:
```
$ cd D
Documents/ Downloads/
$ cd D
```

Nhưng sau khi bạn nhập thêm một chút, nó sẽ hoàn thành tên cho bạn, giúp bạn có thể viết ra đường dẫn tệp đầy đủ ở trên bằng cách nhập ít nhất là:
```
cd Doc[tab]
O[tab]
f[tab]
j[tab]
cal[tab] 
```
(tùy thuộc vào các thư mục khác tồn tại trên máy tính của bạn). Hãy thử và làm quen với cách thức hoạt động của nó. Bạn sẽ thích nó.

***Thứ ba***, có một phím tắt thực sự tiện dụng để `**mở mọi thứ**` trong thư mục dự án, đó là:
```
.   
```

Ví dụ: Để thêm tất cả các tệp trong thư mục vào vùng dàn dựng của Git:
```
git add .
```

Ví dụ nếu bạn đã cài đặt VSCode, bạn có thể `cd` vào thư mục dự án rồi nhập :
```
code .
```
Nó sẽ khởi chạy VS Code và mở thư mục dự án trong thanh bên trong 1 cửa sổ VSCode mới.   
Để mở thư mục trong cùng 1 cửa sổ VSCode, thay cho thư mục hiện tại thì sử dụng thêm tùy chọn:
```
code . --reuse-window
```
Nếu bạn muốn mở trực tiếp 1 file nào đó bằng VSCode thì trong cửa sổ dòng lệnh WSL (Linux) chỉ cần gõ:
```
code file_name 
```
***`Xem phần tiếp theo của bài học này để biết ví dụ chi tiết hơn.`***

> ⭐ **Theo dõi [kênh Threads](https://www.threads.com/@kaitaku.88) để đọc bài mới mỗi ngày!** ⭐  

**[<== Bài Trước  ](link)          |[  Trang Chủ  ](./README.md)|           [  Bài Sau ==>](link)**
