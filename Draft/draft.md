
### Tổng Quan về `(CSS Grid)` và `(Flexbox)`: Công Cụ Bố Cục Hiện Đại

` (Flexbox)` và `(CSS Grid)` là hai mô-đun bố cục `(CSS layout modules)` đã trở nên phổ biến trong những năm gần đây. Chúng cho phép chúng ta tạo ra các bố cục phức tạp mà trước đây chỉ có thể thực hiện được bằng cách áp dụng các thủ thuật `(CSS hacks)` và/hoặc `(JavaScript)`. Cả `(Flexbox)` và `(CSS Grid)` đều có nhiều điểm tương đồng, và nhiều bố cục có thể được giải quyết bằng cả hai. Tuy nhiên, việc lựa chọn công cụ nào cho tình huống cụ thể vẫn là một câu hỏi quan trọng và là chủ đề nóng hổi trong cộng đồng `(CSS)`.

Điều quan trọng cần nhớ là **không có công cụ nào thay thế hoàn toàn công cụ nào**. `(Grid)` có thể làm những điều mà `(Flexbox)` không thể, và ngược lại. Hơn nữa, chúng có thể **hoạt động cùng nhau**: một `(grid item)` có thể là một `(flex container)`, và một `(flex item)` cũng có thể là một `(grid container)`.

### Sự Khác Biệt Cốt Lõi: Một Chiều `(One-dimensional)` so với Hai Chiều `(Two-dimensional)`

Điểm khác biệt quan trọng nhất giữa `(CSS Grid)` và `(Flexbox)` là `(Flexbox)` là **một chiều** `(one-dimensional)`, trong khi `(CSS Grid)` là **hai chiều** `(two-dimensional)`.

*   **`Flexbox`**:
    *   Sắp xếp các mục theo **HOẶC** trục ngang `(horizontal axis)` **HOẶC** trục dọc `(vertical axis)`. Bạn phải quyết định xem mình muốn bố cục dựa trên hàng `(row-based)` hay cột `(column-based)`.
    *   Trục chéo `(cross axis)` của `(Flexbox)` luôn vuông góc với trục chính `(main axis)`.
    *   Bố cục `(flex)` cũng có thể `(wrap)` trong nhiều hàng hoặc cột, và `(Flexbox)` xử lý mỗi hàng hoặc cột như một thực thể riêng biệt, dựa trên nội dung và không gian có sẵn của nó. Điều này có nghĩa là sự phân phối không gian xảy ra trên từng `(flex line)` độc lập.

*   **`CSS Grid`**:
    *   Cho phép bạn làm việc theo **cả hai trục**: ngang và dọc (`horizontally and vertically`).
    *   `Grid` cho phép bạn tạo các bố cục hai chiều, nơi bạn có thể đặt chính xác các mục `(grid items)` vào các ô `(cells)` được định nghĩa bởi hàng `(rows)` và cột `(columns)`.

**Lưu ý về Thực tế Sử dụng:**
Mặc dù `(W3C)` khuyến nghị sử dụng `(Flexbox)` và `(Grid)` theo cách này, nhưng thực tế thường vượt qua lý thuyết, và không phải ai cũng ủng hộ câu chuyện một chiều so với hai chiều. Ví dụ, Chris Coyier đã nhận định rằng phần lớn việc sử dụng `(Grid)` hàng ngày của ông là cho bố cục một chiều và nó rất tuyệt vời cho việc đó. Bạn có thể tạo các bố cục hai chiều với `(Flexbox)` (nhờ khả năng `wrapping` của nó) và các bố cục một chiều với `(CSS Grid)` (nhờ khả năng `auto-placement` của nó). Một ví dụ điển hình là hệ thống `(grid)` của `(Bootstrap 4)` dựa trên `(Flexbox)` để thực hiện các bố cục hai chiều gồm hàng và cột. Tuy nhiên, các chuyên gia như Rachel Andrew vẫn khẳng định rằng `(flex wrapping)` không làm cho bố cục trở thành hai chiều thực sự, vì mỗi hàng `(row)` là một `(flex container)` độc lập.

### Khi Nào Nên Sử Dụng `Flexbox` so với `CSS Grid`

Không có một câu trả lời duy nhất cho câu hỏi `(Flexbox)` so với `(CSS Grid)`. Bạn cần đánh giá từng bố cục riêng lẻ dựa trên từng trường hợp cụ thể để chọn tùy chọn tốt hơn. Quan niệm sai lầm phổ biến nhất là `(Grid)` dùng cho bố cục toàn trang và `(Flexbox)` dùng cho các thành phần nhỏ hơn, điều này hoàn toàn không đúng và có thể hạn chế nghiêm trọng các khả năng.

#### `CSS Grid`: Tập trung vào vị trí nội dung (`Focus on content placement`)

`(CSS Grid)` tập trung vào **định vị nội dung chính xác**.

*   Mỗi mục là một `(grid cell)`, được căn chỉnh theo cả trục ngang và dọc.
*   Nếu bạn muốn kiểm soát chính xác vị trí của các mục trong một bố cục, `(CSS Grid)` là lựa chọn tốt nhất.
*   Nó cung cấp một cơ chế để các tác giả chia không gian có sẵn cho bố cục thành các cột và hàng bằng cách sử dụng một tập hợp các hành vi định kích thước có thể dự đoán được. Sau đó, các tác giả có thể định vị và định kích thước chính xác các `(building block elements)` của ứng dụng vào các `(grid areas)` được định nghĩa bởi các giao điểm của các cột và hàng này.
*   `Grid` có các thuộc tính như `grid-template-rows` và `grid-template-columns` cùng các tiện ích như đơn vị `(fraction unit - fr)` cho phép bạn tính toán mọi thứ một cách chính xác.
*   Do đó, `(Grid)` đặc biệt phù hợp để tạo các bố cục **độc đáo** như bố cục bị hỏng (`broken`), không đối xứng (`asymmetrical`), và chồng chéo (`overlapping layouts`).
*   `CSS Grid` cũng giúp bạn **tạo bố cục phản hồi (`responsive layouts`) mà không cần sử dụng `(media queries)`**. Một kỹ thuật là sử dụng `repeat(auto-fill, minmax(15rem, 1fr))` để các ô `(grid cells)` tự động `(wrap)` và điều chỉnh theo mọi kích thước `(viewport)`. Tuy nhiên, bố cục này không `(content-aware)` như `(Flexbox)`.
    *   **Ví dụ mã nguồn `(Algorithmic Layout)` với `CSS Grid`**:
        ```css
        .container {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
          grid-gap: 1rem;
        }
        ```
       
*   **Thiết kế từ bố cục vào (`Layout First Design`)**: Khi bạn sử dụng `(CSS Grid)`, bạn tạo một bố cục trước, sau đó đặt các mục vào đó, hoặc cho phép các quy tắc `(auto-placement)` đặt các mục vào các `(grid cells)` theo lưới nghiêm ngặt đó.
*   `(Grid)` rất tốt cho việc tạo ra các `(literal grids)` với khoảng cách giữa các cột `(gutters)` nhờ thuộc tính `grid-gap` (hiện nay là `gap`).
*   Với `(Grid)`, bạn có thể thiết lập các mối quan hệ theo chiều ngang (`grid-template-columns`) và chiều dọc (`grid-template-rows`) cùng một lúc.
*   Khi bạn muốn một hệ thống cố định hơn từ `(parent)`, `(Grid)` thực sự vượt trội. Nó tạo ra một bố cục cứng nhắc (`rigid layout`) mà bạn có thể "cắm" nội dung vào mà không cần lo lắng về hành vi của các phần tử con.
    *   **Ví dụ tạo các cột bằng nhau với `Grid`**:
        ```css
        .wrapper {
          display: grid;
          grid-template-columns: repeat(3, 1fr); /* Tạo 3 cột bằng nhau */
          gap: 1em; /* Khoảng cách giữa các cột */
        }
        ```
       
        Trong trường hợp này, `(parent)` kiểm soát bố cục một cách hiệu quả.

#### `Flexbox`: Tập trung vào luồng nội dung (`Focus on content flow`)

Ngược lại, `(Flexbox)` tập trung vào **luồng nội dung** `(content flow)` chứ không phải vị trí nội dung.

*   Chiều rộng (hoặc chiều cao) của các `(flex items)` được xác định bởi nội dung của mục. Các `(flex items)` phát triển và thu nhỏ theo nội dung bên trong và không gian có sẵn.
*   `(Flexbox)` cho phép bạn phân bổ không gian và căn chỉnh các mục một cách linh hoạt (`flexibly`).
*   Với `(Flexbox)`, khó dự đoán hành vi ở một số `(viewport)` nhất định và bạn có thể nhận được kết quả bất ngờ. Nếu bạn đặt chiều rộng và chiều cao cố định cho `(flex items)`, bạn sẽ mất đi sự hấp dẫn chính của `(Flexbox)`: sự linh hoạt (`flexibility`).
*   `(Flexbox)` xử lý mỗi hàng độc lập (`each row independently`). Các hàng khác nhau căn chỉnh các `(flex items)` khác nhau, dựa trên lượng văn bản bên trong chúng.
*   Nó cũng cho phép bạn quyết định cách nội dung của mình sẽ hoạt động khi có quá nhiều không gian hoặc không đủ không gian trên màn hình, sử dụng các thuộc tính `flex-grow` và `flex-shrink` để đạt được bố cục hoàn toàn linh hoạt (`fluid layout`).
*   **Các trường hợp sử dụng điển hình của `Flexbox`**:
    *   Căn giữa các mục (`centering items`).
    *   Điều chỉnh các mục cuối cùng của danh sách.
    *   Gắn `(footer)` vào cuối trang.
    *   Tạo `(responsive menus)`.
*   **Thiết kế từ nội dung ra (`Content First Design`)**: Bạn bắt đầu với sự rõ ràng về cách nội dung nên được và bố cục sẽ theo sau. `(Flexbox)` cung cấp cho bạn quyền kiểm soát hành vi `(behavior)` của các mục thông qua các quy tắc logic (cách chúng phát triển, thu nhỏ, kích thước lý tưởng và vị trí tương đối với nhau), làm cho bố cục trở nên động. Bố cục cuối cùng chỉ là hệ quả và có thể thay đổi nhiều tùy thuộc vào kích thước của `(flex container)`.
*   `(Flexbox)` rất tuyệt vời khi chúng ta muốn dựa vào **kích thước nội tại (`intrinsic sizing`)** của một thứ gì đó. Các mục sẽ co lại theo kích thước của nội dung bên trong chúng.
*   Một `(horizontal navigation component)` (thanh điều hướng ngang) là trường hợp sử dụng hoàn hảo cho `(Flexbox)` vì nó đặt nội dung chỉ theo một hướng.
*   Thông thường, với `(Flexbox)`, bạn sẽ phải làm việc nhiều hơn trên các phần tử con (`children`) để đạt được hành vi mong muốn, điều này không cần thiết với `(Grid)` trừ khi bạn muốn căn chỉnh bên trong ô.
    *   **Ví dụ mã nguồn `(Flexbox)` với `flex-wrap`**:
        ```css
        .container {
          display: flex;
          flex-wrap: wrap;
          margin: -0.5rem; /* Sử dụng margin âm để tạo khoảng cách giữa các flex item */
        }
        .item {
          margin: 0.5rem;
        }
        ```
       
        Trong ví dụ này, `(Flexbox)` xử lý mỗi hàng độc lập, và các `(flex items)` ở các hàng khác nhau có thể căn chỉnh khác nhau dựa trên lượng văn bản bên trong chúng.

### Hỗ Trợ Trình Duyệt `(Browser Support)`

*   **`Flexbox`** có hỗ trợ trình duyệt tốt.
*   **`CSS Grid`** không được `(IE11-)` và `(Edge 15-)` hỗ trợ. Mặc dù `(Grid)` mới hơn `(Flexbox)` và có ít hỗ trợ trình duyệt hơn, nó đã được phát hành hoàn toàn không tiền tố `(unprefixed)` và sẵn sàng sử dụng trong `Chrome`, `Opera`, `Firefox`, và `Safari` vào tháng 3 năm 2017. `Edge` cũng hỗ trợ nó, dù là phiên bản cũ hơn của `(spec)`.
*   Nhiều nhà phát triển thấy việc sử dụng `(Flexbox)` làm `(fallback)` cho `(CSS Grid)` là quá phiền phức.
*   `Flexbox` cũng không hoàn hảo; nó có một vài vấn đề được thu thập trong `(Flexbugs repo)` trên `(GitHub)` cùng với các giải pháp khắc phục trên các trình duyệt.

### Kết Hợp `Flexbox` và `CSS Grid`

Bạn không cần phải cứng nhắc chọn một trong hai `(Flexbox)` hoặc `(CSS Grid)`. **Bạn có thể kết hợp cả hai để giải quyết các bố cục phức tạp**.

*   Một `(grid item)` có thể là một `(flex container)`.
*   Một `(flex item)` có thể là một `(grid container)`.

**Ví dụ kết hợp `Grid` và `Flexbox` cho bố cục phức tạp**:
Giả sử bạn muốn bố cục tổng thể của mình là một `(grid)`, nhưng các `(grid items)` lại hoạt động như các `(flex parents)`. Bằng cách này, các `(grid items)` có thể được di chuyển bằng cách đặt vị trí chính xác hai chiều mà `(Grid)` cho phép, đồng thời cho phép nội dung bên trong các `(grid items)` di chuyển tự do bằng `(Flexbox)`.

*   **Ví dụ mã nguồn kết hợp**:
    ```html
    <div class="wrapper">
      <div class="grid">
        <!-- Các mục grid ở đây -->
        <div class="ad">Quảng cáo</div>
        <!-- Các mục grid khác -->
      </div>
    </div>
    ```
    ```css
    .wrapper {
      display: flex; /* Wrapper là flex container */
      justify-content: center; /* Căn giữa grid */
    }
    .grid {
      display: grid; /* Grid là grid container */
      max-width: 800px;
      grid-template-columns: 1fr 2fr; /* 2 cột với tỷ lệ kích thước */
      grid-template-rows: 1fr 2fr 1fr; /* 3 hàng với tỷ lệ kích thước */
    }
    .ad {
      grid-column-start: 1; /* Bắt đầu từ cột 1 */
      grid-column-end: 3; /* Kết thúc ở cột 3 (trải dài qua 2 cột) */
      /* Đây là một grid item, nhưng bản thân nó có thể là một flex container để điều khiển nội dung bên trong */
    }
    ```
   

Một tương tác hữu ích khác là với thuộc tính `display: contents`. Khi `display` được đặt thành `contents`, bản thân phần tử đó không tạo ra bất kỳ hộp nào, nhưng các phần tử con và giả phần tử `(pseudo-elements)` của nó vẫn tạo ra các hộp như bình thường. Điều này có nghĩa là, với mục đích tạo hộp và bố cục, phần tử được xử lý như thể nó đã được thay thế bằng các phần tử con và giả phần tử của nó trong cây tài liệu `(document tree)`.
*   **Ví dụ sử dụng `display: contents` với `Grid`**:
    ```html
    <div class="wrapper">
      <div class="box box1">
        <div class="nested">a</div>
        <div class="nested">b</div>
        <div class="nested">c</div>
      </div>
      <div class="box box2">Two</div>
      <!-- ...các box khác -->
    </div>
    ```
    ```css
    .wrapper {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-auto-rows: minmax(100px, auto);
    }
    .box1 {
      grid-column-start: 1;
      grid-column-end: 4;
      display: contents; /* Box1 biến mất, các nested items trở thành grid items */
    }
    ```
   
    Điều này có thể là một cách để làm cho các mục được lồng vào `(grid)` hoạt động như thể chúng là một phần của `(grid)`. Bạn cũng có thể sử dụng `display: contents` tương tự với `(Flexbox)` để cho phép các mục được lồng vào trở thành `(flex items)`.

### Các Khái Niệm Quan Trọng Khác

*   **`minmax()`**: Một hàm CSS cho phép bạn định nghĩa một phạm vi kích thước cho các cột hoặc hàng trong `(Grid)`, ví dụ `minmax(200px, 1fr)` sẽ đảm bảo kích thước tối thiểu là 200px và tối đa là 1 phần của không gian còn lại.
*   **`repeat()`**: Một hàm CSS được sử dụng trong `(Grid)` để lặp lại một mẫu cột hoặc hàng, ví dụ `repeat(3, 1fr)` tạo ra 3 cột bằng nhau.
*   **`auto-fill` và `auto-fit`**: Các từ khóa được sử dụng với `repeat()` trong `(Grid)` để tạo ra số lượng cột động dựa trên không gian có sẵn. `auto-fill` sẽ điền càng nhiều cột càng tốt, còn `auto-fit` sẽ điều chỉnh các cột hiện có để lấp đầy không gian.
*   **`fr` unit (`fraction unit`)**: Đơn vị kích thước trong `(Grid)` đại diện cho một phần của không gian có sẵn, cho phép tạo các cột hoặc hàng linh hoạt theo tỷ lệ.
*   **`gap` (trước đây là `grid-gap`)**: Thuộc tính CSS để tạo khoảng cách giữa các hàng và cột trong `(Grid)` (và giờ đây cũng được hỗ trợ trong `(Flexbox)` ở một số trường hợp).
*   **`flex-grow` và `flex-shrink`**: Các thuộc tính `(Flexbox)` kiểm soát cách các `(flex items)` phát triển (`grow`) để lấp đầy không gian trống hoặc thu nhỏ (`shrink`) khi không gian bị giới hạn.
*   **`flex-basis`**: Xác định kích thước ban đầu của một `(flex item)` trước khi không gian còn lại được phân phối.
*   **`Box alignment` (`align-items`, `justify-content`, `align-self`)**: Các tính năng căn chỉnh này ban đầu được định nghĩa trong mô-đun `(CSS Flexible Box Layout)` và hiện được định nghĩa trong mô-đun `(CSS Box Alignment)`. Chúng cung cấp quyền kiểm soát căn chỉnh thích hợp cho các mục trong cả `(Flexbox)` và `(Grid)`.
    *   **Ví dụ `Box Alignment` với `Flexbox`**:
        ```css
        .wrapper {
          display: flex;
          align-items: flex-end; /* Căn chỉnh các items xuống cuối container */
          min-height: 200px;
        }
        .box1 {
          align-self: stretch; /* Box1 kéo dài ra toàn bộ chiều cao */
        }
        .box2 {
          align-self: flex-start; /* Box2 căn chỉnh lên đầu */
        }
        ```
       
    *   **Ví dụ `Box Alignment` với `Grid`**:
        ```css
        .wrapper {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          align-items: end; /* Căn chỉnh các items xuống cuối grid area */
          grid-auto-rows: 200px;
        }
        .box1 {
          align-self: stretch;
        }
        .box2 {
          align-self: start;
        }
        ```
       
*   **Grid và các phần tử được định vị tuyệt đối (`absolutely positioned elements`)**: `(Grid)` tương tác với các phần tử được định vị tuyệt đối, cho phép bạn định vị một mục bên trong `(grid)` hoặc `(grid area)`. Để làm cho `(grid container)` trở thành `(containing block)` cho phần tử định vị tuyệt đối, bạn cần thêm `position: relative` vào `(container)`.

### Lời Khuyên Chung

Không có "cách đúng" hay "cách sai" khi sử dụng `(Flexbox)` hoặc `(Grid)`. Cuối cùng, việc lựa chọn phụ thuộc vào sở thích cá nhân và điều mà một nhà phát triển cảm thấy dễ dàng hơn cho nhiệm vụ cụ thể. Cách tốt nhất để học `(Flexbox)` và `(Grid)` là xây dựng nhiều dự án với cả hai và phát triển quan điểm của riêng bạn về việc sử dụng công cụ nào trong các trường hợp khác nhau.

Bạn có thể tìm thêm các tài liệu hướng dẫn chuyên sâu về `(Flexbox alignment)`, `(ordering)`, và `(sizing)`, cùng với các loạt bài về `(CSS Grid Layout Module)` để hiểu rõ hơn về các lựa chọn của mình.