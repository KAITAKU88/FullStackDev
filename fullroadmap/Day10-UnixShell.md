# Khóa học Unix Shell miễn phí  
`Software Carpentry Foundation` Là tổ chức phi lợi nhuận chuyên cung cấp các khóa học kỹ năng tính toán cơ bản cho nghiên cứu khoa học. Mục tiêu: Giúp nhà nghiên cứu, sinh viên làm chủ công cụ phần mềm (Shell, Git, Python/R) để tự động hóa công việc.  
>Khóa học được công khai tại:
🔗 https://swcarpentry.github.io/shell-novice/
>Bao gồm:
>- Bài giảng chi tiết.
>- Ví dụ minh họa.
>- Dữ liệu thực hành (file .zip như trong đoạn hướng dẫn bạn đọc).

**Lưu ý khi học với WSL2 (Windows)**
Nếu dùng `WSL2`, bạn có thể áp dụng trực tiếp lệnh Unix Shell trong Ubuntu terminal.

**Khác biệt nhỏ**:

>- Thư mục `Desktop` trong WSL2 độc lập với `Windows` (như đã giải thích ở phần trước).  
>- Dùng `cd ~ `thay vì `cd Desktop` nếu hướng dẫn yêu cầu.

# 1. Bối cảnh  

Shell là một chương trình mà người dùng có thể nhập lệnh. Với shell, có thể gọi các chương trình phức tạp như phần mềm mô hình hóa khí hậu hoặc các lệnh đơn giản tạo thư mục trống chỉ với một dòng mã. Shell Unix phổ biến nhất là Bash (Bourne Again SHell — được gọi như vậy vì nó bắt nguồn từ một shell do Stephen Bourne viết). Bash là shell mặc định trên hầu hết các triển khai Unix hiện đại và trong hầu hết các gói cung cấp các công cụ giống Unix cho Windows. Lưu ý rằng 'Git Bash' là một phần mềm cho phép người dùng Windows sử dụng giao diện giống Bash khi tương tác với Git.

Sử dụng shell sẽ mất một chút công sức và thời gian để học. Trong khi GUI cung cấp cho bạn các lựa chọn để chọn, các lựa chọn CLI không tự động được cung cấp cho bạn, vì vậy bạn phải học một số lệnh như từ vựng mới trong ngôn ngữ bạn đang học. Tuy nhiên, không giống như ngôn ngữ nói, một số lượng nhỏ "từ" (tức là lệnh) sẽ giúp bạn tiến xa và chúng ta sẽ đề cập đến một số ít thiết yếu đó ngày hôm nay.

Ngữ pháp của shell cho phép bạn kết hợp các công cụ hiện có thành các đường ống mạnh mẽ và xử lý khối lượng dữ liệu lớn một cách tự động. Các chuỗi lệnh có thể được viết thành một tập lệnh, cải thiện khả năng tái tạo quy trình làm việc.

Ngoài ra, dòng lệnh thường là cách dễ nhất để tương tác với các máy tính và siêu máy tính từ xa. Sự quen thuộc với shell gần như là điều cần thiết để chạy nhiều công cụ và tài nguyên chuyên dụng, bao gồm cả các hệ thống điện toán hiệu suất cao. Khi các cụm và hệ thống điện toán đám mây trở nên phổ biến hơn để xử lý dữ liệu khoa học, khả năng tương tác với shell đang trở thành một kỹ năng cần thiết. Chúng ta có thể xây dựng dựa trên các kỹ năng dòng lệnh được đề cập ở đây để giải quyết nhiều câu hỏi khoa học và thách thức tính toán.

Khi shell được mở lần đầu tiên, bạn sẽ thấy một dấu nhắc, cho biết shell đang chờ nhập dữ liệu. Quan trọng nhất là không nhập dấu nhắc khi nhập lệnh. Chỉ nhập lệnh theo sau dấu nhắc. Quy tắc này áp dụng cho cả các bài học này và các bài học từ các nguồn khác. Ngoài ra, lưu ý rằng sau khi bạn nhập lệnh, bạn phải nhấn phím Enter để thực thi lệnh đó.

Dấu nhắc được theo sau bởi một con trỏ văn bản (text cursor), một ký tự cho biết vị trí mà bạn nhập sẽ xuất hiện. Con trỏ thường là một khối nhấp nháy hoặc khối đặc, nhưng nó cũng có thể là một dấu gạch dưới hoặc một đường ống.

Đặc biệt, hầu hết các môi trường shell phổ biến theo mặc định sẽ đặt tên người dùng và tên máy chủ của bạn trước dấu $.

Con người và máy tính thường tương tác theo nhiều cách khác nhau, chẳng hạn như thông qua bàn phím và chuột, giao diện màn hình cảm ứng hoặc sử dụng hệ thống nhận dạng giọng nói. Cách được sử dụng rộng rãi nhất để tương tác với máy tính cá nhân được gọi là giao diện người dùng đồ họa (GUI). Với GUI, chúng ta đưa ra hướng dẫn bằng cách nhấp chuột và sử dụng các tương tác điều khiển bằng menu.

Mặc dù công cụ hỗ trợ trực quan của GUI giúp học trực quan, nhưng cách cung cấp hướng dẫn cho máy tính này lại không mở rộng được nhiều. Hãy tưởng tượng nhiệm vụ sau: để tìm kiếm tài liệu, bạn phải sao chép dòng thứ ba trong một nghìn tệp văn bản trong một nghìn thư mục khác nhau và dán vào một tệp duy nhất. Khi sử dụng GUI, bạn không chỉ phải nhấp chuột tại bàn làm việc trong nhiều giờ mà còn có khả năng mắc lỗi trong quá trình hoàn thành nhiệm vụ lặp đi lặp lại này. Đây là lúc chúng ta tận dụng lợi thế của Unix shell. Unix shell vừa là giao diện dòng lệnh (CLI) vừa là ngôn ngữ lập trình, cho phép thực hiện các tác vụ lặp đi lặp lại như vậy một cách tự động và nhanh chóng. Với các lệnh thích hợp, shell có thể lặp lại các tác vụ có hoặc không có một số sửa đổi nhiều lần tùy ý. Khi sử dụng shell, nhiệm vụ trong ví dụ tài liệu có thể được hoàn thành trong vài giây.

Unix shell đã tồn tại lâu hơn hầu hết người dùng của nó. Nó tồn tại vì nó là một công cụ mạnh mẽ cho phép người dùng thực hiện các tác vụ phức tạp và mạnh mẽ, thường chỉ với một vài lần nhấn phím hoặc dòng mã. Nó giúp người dùng tự động hóa các tác vụ lặp đi lặp lại và dễ dàng kết hợp các tác vụ nhỏ hơn thành các quy trình làm việc lớn hơn, mạnh mẽ hơn.

Việc sử dụng shell là nền tảng cho nhiều tác vụ điện toán nâng cao, bao gồm cả điện toán hiệu suất cao. Các bài học này sẽ giới thiệu cho bạn công cụ mạnh mẽ này.

>**`Command not found`**  
>>Đây là lỗi khi shell không tìm thấy chương trình có tên giống với lệnh bạn đã nhập, nó sẽ in ra thông báo lỗi. Điều này có thể xảy ra nếu lệnh được nhập sai hoặc nếu chương trình tương ứng với lệnh đó không được cài đặt.

# 2. Thiết lập Các cài đặt ban đầu để học khóa học Unix Shell
## 2.1 Tạo thư mục Desktop (nếu hệ thống chưa có)
Mở Ubuntu terminal và đảm bảo đang ở thư mục `home` bằng lệnh (`cd` hoặc `cd ~`)

```
cd ~
```  
Tạo thư mục `Desktop` bằng lệnh:
```
mkdir Desktop
```
Kiểm tra xem thư mục đã được tạo chưa bằng lệnh:
```
ls
```
(Nếu thành công, `Desktop` sẽ xuất hiện trong danh sách thư mục.)
## 2.2. Hướng dẫn riêng cho người dùng WSL2

Tải file `zip` từ liên kết được cung cấp bằng lệnh:

```
wget https://swcarpentry.github.io/shell-novice/data/shell-lesson-data.zip 
```  

Cài đặt công cụ giải nén (nếu chưa có):
```
sudo apt install unzip
```
Giải nén file:
```
unzip shell-lesson-data.zip
```

***Lưu ý quan trọng:***  
Trong các bài học sau này, khi hướng dẫn chuyển vào thư mục `Desktop`, người dùng `WSL2` cần thay bằng lệnh chuyển đến thư mục `home` (`cd ~`) vì cấu trúc hệ thống có thể khác biệt.

Thư mục `Desktop` được tạo ở đây là của hệ thống WSL2 (Ubuntun), nó hoàn toàn độc lập so với `Desktop` của Window.

Lưu ý rằng đây là khóa học Command Line cho hệ thống Unix vì vậy đòi hỏi một `Unix Shell program` được cài đặt sẵn trên máy tính.

Máy tính chạy hệ điều hành Windows không tự động cài đặt chương trình Unix Shell. Tuy nhiên sau khi đã cài đặt WSL2 trên Window thì đã có Unix Shell.

Unix Shell mặc định cho hệ điều hành Linux thường là `Bash`. Trên hầu hết các phiên bản Linux, bạn có thể truy cập bằng cách chạy Gnome Terminal hoặc KDE Konsole hoặc xterm, có thể tìm thấy thông qua menu ứng dụng hoặc thanh tìm kiếm. Nếu máy của bạn được thiết lập để sử dụng thứ gì đó khác ngoài Bash, bạn có thể chạy nó bằng cách mở terminal và nhập bash.

[Máy Mac](https://swcarpentry.github.io/shell-novice/index.html)
# 3. Nelle’s Pipeline: A Typical Problem
`Pipeline` của Nelle: Một vấn đề điển hình

Nelle Nemo, một nhà sinh vật học biển, vừa trở về sau chuyến khảo sát kéo dài sáu tháng ở North Pacific Gyre, nơi cô đã lấy mẫu sinh vật biển dạng thạch ở Great Pacific Garbage Patch. Cô có 1520 mẫu mà cô đã chạy qua một máy phân tích để đo độ phong phú tương đối của 300 protein. Cô cần chạy 1520 tệp này thông qua một chương trình tưởng tượng có tên là `goostats.sh`. Ngoài nhiệm vụ khổng lồ này, cô phải viết kết quả vào cuối tháng để bài báo của cô có thể xuất hiện trong một ấn bản đặc biệt của Aquatic Goo Letters.

Nếu Nelle chọn chạy `goostats.sh` bằng tay bằng GUI, cô sẽ phải chọn và mở một tệp 1520 lần. Nếu `goostats.sh` mất 30 giây để chạy mỗi tệp, toàn bộ quá trình sẽ chiếm hơn 12 giờ chú ý của Nelle. Với `shell`, Nelle có thể giao cho máy tính của mình nhiệm vụ tầm thường này trong khi cô tập trung sự chú ý vào việc viết bài báo của mình.

Một vài bài học tiếp theo sẽ khám phá những cách Nelle có thể đạt được điều này. Cụ thể hơn, các bài học giải thích cách cô ấy có thể sử dụng `shell` lệnh để chạy chương trình goostats.sh, sử dụng vòng lặp để tự động hóa các bước lặp lại của việc nhập tên tệp, để máy tính của cô ấy có thể hoạt động trong khi cô ấy viết bài báo của mình.

Như một phần thưởng, sau khi cô ấy đã tạo một `pipeline` , cô ấy sẽ có thể sử dụng lại bất cứ khi nào cô ấy thu thập thêm dữ liệu.

Để hoàn thành nhiệm vụ của mình, Nelle cần biết cách:

>- điều hướng đến một tệp/thư mục

>- tạo một tệp/thư mục

>- kiểm tra độ dài của một tệp

>- Liên kết các lệnh lại với nhau

>- Truy xuất một tập hợp các tệp

>- lặp lại các tệp

>- chạy một tập lệnh shell (shell script) chứa đường ống của cô ấy

`Pipeline` trong ngữ cảnh này là `một quy trình xử lý dữ liệu tự động`, kết hợp nhiều lệnh/tác vụ thành một dòng chảy/chạy liền mạch để giải quyết vấn đề lặp đi lặp lại, đặc biệt trong phân tích dữ liệu khoa học.
>1. `Tự động hóa`: Thay vì thực hiện thủ công từng bước, Nelle có thể thiết lập một pipeline để máy tính tự động xử lý hàng loạt.
>2. `Khả năng tái sử dụng`: Pipeline có thể được lưu lại và dùng lại cho các lần thu thập dữ liệu sau.
>3. `Hiệu quả`: Pipeline giúp Nelle tập trung vào việc phân tích kết quả hoặc viết báo cáo thay vì dành 12 giờ để thao tác thủ công.
---
> ⭐ **Theo dõi [kênh Threads](https://www.threads.com/@kaitaku.88) để đọc bài mới mỗi ngày!** ⭐  

**[<== Bài Trước  ](link)          |[  Trang Chủ  ](./README.md)| 