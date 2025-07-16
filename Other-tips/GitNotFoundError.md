# Lỗi Git Not Found
```
Git not found. Install it or configure using the git.path setting.
```
## Điều này nghĩa là gì?
- Dù bạn đã cài Git và sử dụng Git bình thường trong terminal (WSL), VSCode vẫn báo lỗi vì:
- VSCode đang chạy trên Windows, nhưng Git bạn cài nằm trong WSL (Linux subsystem) ➜ VSCode không thấy được Git từ hệ Windows trừ khi dùng chế độ đặc biệt.
## Cách khắc phục
Mở folder bằng **Remote WSL**
Nếu bạn đang làm việc trong WSL, hãy mở VSCode theo cách này để đồng bộ:
```
code .
```
Hoặc:  

Trong VSCode, nhấn ***Ctrl+Shift+P***

Chọn: **Remote-WSL: Open folder in WSL**

Chọn thư mục Vault Obsidian của bạn ➜ VSCode sẽ chạy trong môi trường WSL ➜ không còn báo lỗi Git.