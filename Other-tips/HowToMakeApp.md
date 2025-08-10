# Quy trình làm App trong kỷ nguyên AI

>AI không thể thay thế con người, con người càng phải học nền tảng cơ bản để làm chủ AI, cộng tác với AI để tăng hiệu quả làm việc, tạo ra năng suất x1000 

> Quy trình này không hoàn thiện, sữa được update từ từ 

```mermaid
graph TD
    %% Nodes
    subgraph FrontEnd 
        direction TB
        F1[Có ý tưởng về sản phẩm]
        %% Mockup thật chi tiết với các chức năng mong muốn 
        F2[Mockup ý tưởng]
        %% Trao đổi thật nhiều lần với AI để có được giao diện vừa ý
        F3[Đưa Mockup vào AI để sinh ra giao diện]
        F4[Test giao diện toàn diện]
        F5[Đọc hiểu toàn bộ mã nguồn]
        %% Tối ưu hiệu suất, phân chia mã nguồn thành các file nhỏ hơn dễ bảo trì...
        F6[Tối ưu mã nguồn]
    end


    %% Bắt đầu với Backend 
    subgraph Backend
        direction LR
        B1[B1]
        B2[B2]
        B3[B3]

    end
     
    %%Connections
    F1==>F2==>F3==>F4==>F5==>F6
    B1==>B2==>B3
    F6==>B1


```