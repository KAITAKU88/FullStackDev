WSL trên window và VSCode trên window đều bình thường, nhưng phần extension bị lỗi khiến cho vscode không kết nối được với hệ thống wsl: 
Tôi đã sửa được. Tóm lại các bước là:
1. Vào VSCode, File/chọn Close Remote Connection
2. Vào extension để Uninstall WSL extension . ĐÓng vscode lại.
3. Trên window mở File Explorer, gõ trên thanh địa chỉ: %USERPROFILE%\.vscode\extensions, xóa tất cả thư mục có ms-vscode-remote.remote-wsl-
4. Vào lại vscode, cài lại mới Remote- WSL.
5. Sau đó trong bash của Ubuntu truy cập vào 1 thư mục trên wsl, rồi chạy code để mở lại trong vscode.