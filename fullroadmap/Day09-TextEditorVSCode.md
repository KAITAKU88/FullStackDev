# Text Editors, Cài đặt VSCode
Trình soạn thảo văn bản là công cụ phát triển được sử dụng nhiều nhất bất kể bạn là nhà phát triển nào. Một trình soạn thảo văn bản tốt có thể giúp bạn viết mã tốt hơn với chức năng kiểm tra mã theo thời gian thực, tô sáng cú pháp và định dạng tự động.  
## 1. **Tại sao tôi không thể sử dụng Microsoft Word?**
Các trình soạn thảo văn bản giàu tính năng (Rich text editors), chẳng hạn như Microsoft Word và LibreOffice Writer, rất tuyệt vời để viết một bài báo, nhưng các tính năng giúp chúng tạo ra các tài liệu được định dạng đẹp mắt khiến chúng không phù hợp để viết mã. Một tài liệu được tạo bằng các trình soạn thảo văn bản giàu tính năng này không chỉ có văn bản được nhúng trong tệp. Các tệp này cũng chứa thông tin về cách hiển thị văn bản trên màn hình và dữ liệu về cách hiển thị đồ họa được nhúng vào tài liệu. Ngược lại, các trình soạn thảo văn bản thuần túy (plain text editors), chẳng hạn như VSCode và Sublime, không lưu bất kỳ thông tin bổ sung nào. Chỉ lưu văn bản cho phép các chương trình khác, như trình thông dịch của Ruby, đọc và thực thi tệp dưới dạng mã.

## 2. **Code editors**
Bạn có thể coi trình soạn thảo mã như các công cụ phát triển web chuyên dụng. Chúng có khả năng tùy chỉnh cao và cung cấp nhiều tính năng giúp cuộc sống của bạn dễ dàng hơn. Không có gì tệ hơn việc dành hai giờ để cố gắng tìm ra lý do tại sao chương trình của bạn không hoạt động, chỉ để nhận ra rằng bạn đã bỏ lỡ một dấu ngoặc đóng. Các plugin, tô sáng cú pháp, tự động đóng dấu ngoặc và dấu ngoặc nhọn, và kiểm tra lỗi chỉ là một số lợi ích khi sử dụng trình soạn thảo mã. Có nhiều trình soạn thảo văn bản để lựa chọn, nhưng chúng tôi khuyên bạn nên bắt đầu với Visual Studio Code.

**Visual Studio Code**, hay còn gọi là `VSCode`, là một trình soạn thảo mã miễn phí tuyệt vời. Nó có hỗ trợ bổ trợ nổi bật và tích hợp Git tuyệt vời.

Trình soạn thảo nào bạn sử dụng thường là vấn đề sở thích, nhưng đối với mục đích của khóa học này, chúng tôi sẽ giả định rằng bạn đang sử dụng `VSCode` vì nó miễn phí, dễ sử dụng và hoạt động khá giống nhau trên mọi hệ điều hành. Hãy nhớ rằng điều này có nghĩa là bạn sẽ không thể nhận được trợ giúp nếu bạn đang sử dụng trình soạn thảo văn bản khác ngoài VSCode cho chương trình giảng dạy.
## 3. **Cài đặt VSCode cho WSL2**
### 3.1 Step 1: Cài đặt VSCode
>Theo hướng dẫn sau [Visual Studio Code on Windows]  (https://code.visualstudio.com/docs/setup/windows)  
>- *Vẫn tải và cài VSCode trực tiếp lên Window, sau đó sẽ tìm cách để VSCode được mở trong WSL2 (Ubuntu)*
### 3.2 Step 2: Delete the installer file
>[Xóa file cài](https://www.theodinproject.com/lessons/foundations-text-editors#step-2-delete-the-installer-file)
### 3.3 Step 3: Cài đặt WSL Extension
>- Mở Visual Studio Code.
>- Điều hướng đến extensions tab.
>- Tìm và cài đặt WSL extension.

>*Tiện ích mở rộng WSL cho phép bạn sử dụng VS Code trong WSL giống như bạn sử dụng từ Windows.*
### 3.4 Step 4: Đảm bảo rằng WSL2 có thể mở đúng VSCode
> Mở một WSL2 terminal mới   
> Chạy lệnh sau để mở cửa sổ VSCode mới. 
```
code
```
>Sau vài phút, một cửa sổ VSCode mới sẽ mở ra và VSCode sẽ thông báo rằng nó đang mở trong WSL2.  
>*Những lần tới chỉ cần mở WSL2 (Ubuntu) và gõ code rồi Enter thì cửa sổ VSCode được mở ra.*
## 4. **Sau khi cài đặt VSCode cho WSL2 hãy**:
>- Làm quen với VSCode bằng cách xem video sau **[ VSCode Tutorial for Beginners](https://youtu.be/ORrELERGIHs?t=103)**
>- `Disable the Copilot AI code completion feature` cái mà được bật mặc định bởi VSCode. Để làm điều này hãy click vào mặt con robot nhỏ ở góc dưới bên phải của cửa sổ VSCode và Unchecking vào `“code completions”` box.
>- Có thể xem các phím tắt để sử dụng VSCode nhanh chóng **[tại đây](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-linux.pdf)**
>- Nếu có bất kỳ điều gì cần hỏi về VSCode thì đọc tài liệu chính thức **[tại đây](https://code.visualstudio.com/docs)**

---
> ⭐ **Theo dõi [kênh Threads](https://www.threads.com/@kaitaku.88) để đọc bài mới mỗi ngày!** ⭐  

**[<== Bài Trước  ](link)          |[  Trang Chủ  ](./README.md)|           [  Bài Sau ==>](link)**
