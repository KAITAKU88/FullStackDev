> # Tạo Alias Git
?
Khi làm việc với Git chúng ta thường phải sử dụng rất thường xuyên hàng ngày, ví dụ sau mỗi thay đổi quan trọng ta cần dùng :
```
git add .
git commit -m "Thông tin commit"
git push origin main
```
Việc thường xuyên phải git như vậy sẽ tốn rất nhiều công sức. Vì vậy có 1 giải pháp là sử dụng alias, là các lệnh tắt, ví dụ:
- Thay vì gõ **git add** thì chỉ cẩn **ga**
- Thay vì gõ **git push origin main** thì chỉ cần **gp**
## 1. Vậy cách thêm các alias này như thế nào?
- Trong terminal của VSCode (khi dùng WSL) gõ lệnh sau để quay về thư mục /home/:
```
cd 
```
- Tiếp theo gõ lệnh sau để mở file **.bashrc**:
```
code ~/.bashrc
```
- Trong file này ta thêm vào các alias sau:
```
alias gs='git status'
alias ga='git add .'
alias gc='git commit'
alias gp='git push origin main'
```
- Lưu ý là giữa **gs** và dấu **=** không có dấu cách khoảng trắng, nên không được viết **gs ='git status'**, sẽ gây lỗi.
- Sau khi đã thêm nội dung vào file, lưu lai. Trong terminal cần gõ lệnh sau để reload lại file:
```
source ~/.bashrc
```
- Bây giờ thử thay đổi nội dung file nào đó 1 chút, rồi trong terminal gõ thử lệnh **gs** rồi Enter, nếu thấy git hoạt động bình thường là đã thành công.
- Trong file trên ta có thể đặt alias là bất kỳ điều gì muốn, ví dụ thay vì gán **'git status'** cho alias **gs** thì có thể gán cho 1 cái gì đó khác, chẳng hạn **sta**. Miễn sao bạn dễ nhớ là được.
## 2. Alias function
- Ở trên là ta thêm alias cho từng lệnh riêng lẻ. TRong trường hợp ta muốn gọi tất cả các lệnh trên cùng nhau thì nên sử dụng alias function.
- Mở file **.bashrc** rồi thêm 1 hàm với nội dung sau:
```
function gitpush() {
    git add .
    git commit
    git push origin main
}
```
- Lưu lại file và reload lại file trong terminal.
- Lúc này chỉ cần gõ lệnh **gitpush** rồi **Enter** thì lệnh sẽ chạy theo thứ tự:
1. Đầu tiên là **git add .** được chạy
2. Tiếp theo là **git commit**, lúc này 1 cửa sổ mới mở ra để bạn viết *Thông tin commit*. Sau khi viết xong, bạn đóng cửa số editor đó lại và lệnh commit hoàn thành.
3. Tiếp theo đó lệnh **git push origin main** sẽ được thực hiện.
4. Kết thúc.
- Lưu ý là ở trên tên hàm có thể là bất cứ cái gì mà bạn thấy tiện, không nhất định phải là **gitpush**.
## 3. Nên thêm hàm như thế nào.
- Trong thực tế, khi thay đổi điều gì đó quan trọng thì thông thường chúng ta chỉ sử dụng **git add** và **git commit**. Tức là 2 lệnh này được dùng rất nhiều trong ngày, còn lệnh **git push origin main** lại chỉ dùng vào cuối buổi, hoặc vào cuối ngày, nhằm đẩy tất cả thay đổi lên khi lưu trữ (GitHub...).
- **Vì vậy cách làm phù hợp nhất là:**
  - Tạo alias function cho **git add và git commit**, ví dụ gọi tên hàm là **gac** tức là **git add rồi commit**:
  ```
  function gac() {
    git add .
    git commit
  }
  ```
  - Tạo alias function cho toàn bộ các lệnh (như trên), đặt tên hàm là **gpush** (Để phân biệt với **gp** là alias cho lệnh push thôi):
  ```
  function gpush() {
    git add .
    git commit
    git push origin main
  }
  ```
> ⭐ **Theo dõi [kênh Threads](https://www.threads.com/@kaitaku.88) để đọc mới mỗi ngày!** ⭐
<!--SR:!2025-07-19,3,250-->


