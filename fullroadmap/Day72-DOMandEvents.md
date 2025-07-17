# DOM Manipulation and Events (Thao tác DOM và các Sự kiện)
?
## **Tầm quan trọng**
🎯 DOM Manipulation and Events là một phần cực kỳ quan trọng trong lộ trình phát triển full-stack, nhất là với những ai đang xây dựng nền tảng front-end. Nó quan trọng bởi vì:
> - Hiểu cách trình duyệt hoạt động: DOM (Document Object Model) là cách trình duyệt tổ chức cấu trúc trang web. Việc thao tác với DOM giúp bạn điều khiển nội dung, giao diện, hành vi của trang theo cách tinh tế và linh hoạt.
> - Xây dựng UI tương tác: Sự kiện (Events) như click, submit, hover... là cầu nối giữa người dùng và ứng dụng. DOM event handling giúp tạo ra trải nghiệm mượt mà, phản hồi tốt.
>- Cơ sở để học framework hiện đại: Các thư viện như React, Vue, Angular đều tương tác với DOM—dù là gián tiếp thông qua Virtual DOM hay template bindings. Nắm được cách DOM vận hành giúp bạn hiểu rõ hơn cách hoạt động của các framework này.
>- Thực thi logic người dùng: Nhiều tính năng như form validation, dynamic rendering, animation... đều cần kiến thức DOM và sự kiện.
## **I. Giới Thiệu về DOM và Sự Kiện (Events)**
#### **1. 🎯 Mô hình Đối tượng Tài liệu (Document Object Model - DOM)**
**DOM** là một **biểu diễn cấu trúc dạng cây** của nội dung một trang web. Khi trình duyệt tải và phân tích cú pháp (parse) mã HTML của trang web, nó sẽ xây dựng mô hình này và sử dụng nó để vẽ trang lên màn hình. DOM là một **cấu trúc dữ liệu "sống" (live data structure)**, có nghĩa là khi nó được sửa đổi, trang web trên màn hình sẽ tự động cập nhật để phản ánh những thay đổi đó.  

**Các thành phần chính của trình duyệt có thể tương tác với JavaScript**:  
>- **`Window`** (đối tượng `Window`): Đại diện cho tab trình duyệt mà trang web được tải vào. Nó cho phép bạn thao tác kích thước cửa sổ (`Window.innerWidth`, `Window.innerHeight`), tài liệu (`Document`) được tải, lưu trữ dữ liệu phía client, và gắn các trình xử lý sự kiện (event handler) vào cửa sổ hiện tại.  
>- **`Navigator`** (đối tượng `Navigator`): Đại diện cho trạng thái và nhận dạng của trình duyệt trên web. Bạn có thể sử dụng nó để truy xuất ngôn ngữ ưu tiên của người dùng, luồng phương tiện từ webcam, v.v..  
  >- **`Document`** (đối tượng `Document`): Đại diện cho trang thực tế được tải vào cửa sổ, được biểu diễn bởi **DOM**. Bạn có thể sử dụng đối tượng này để truy xuất và thao tác thông tin về HTML và CSS tạo nên tài liệu, ví dụ như lấy tham chiếu đến một phần tử trong DOM, thay đổi nội dung văn bản của nó, áp dụng các kiểu mới, tạo các phần tử mới và thêm chúng làm con, hoặc thậm chí xóa chúng hoàn toàn.

**Cấu trúc cây của DOM**: Mỗi mục trong cây DOM được gọi là một **nút (node)**. Các nút này có các mối quan hệ với nhau tương tự như cây gia đình:
>- **Nút gốc (Root node)**: Nút cao nhất trong cây (ví dụ: thẻ `<html>` trong HTML).
>- **Nút con (Child node)**: Một nút nằm **trực tiếp** bên trong một nút khác (ví dụ: `<img>` là con của `<body>`).
>- **Nút hậu duệ (Descendant node)**: Một nút nằm **bất kỳ đâu** bên trong một nút khác, có thể là con trực tiếp hoặc sâu hơn (ví dụ: `<img>` là hậu duệ của `<body>` nhưng không phải con trực tiếp).
>-   **Nút cha (Parent node)**: Một nút chứa một nút khác bên trong nó (ví dụ: `<body>` là cha của `<section>`).
>-   **Nút anh chị em (Sibling nodes)**: Các nút nằm cùng cấp dưới cùng một nút cha.

**Các loại nút (Node Types)**: Mặc dù có nhiều loại nút, nhưng chúng ta thường tập trung vào `element` nodes.
>- **`Element` nodes**: Đại diện cho các thẻ HTML (ví dụ: `HTML`, `HEAD`, `META`). Các nút phần tử có thể có các nút con.
>-  **`Text` nodes**: Đại diện cho các đoạn văn bản (`#text`).
>-  Các loại nút khác như `Comment` nodes cũng tồn tại.

#### **2. 🎯 Sự kiện (Events)**
>-Một **sự kiện (event)** là một hành động mà trình duyệt web có thể phát hiện và phản ứng lại, chẳng hạn như một cú nhấp chuột (mouse click) hoặc tải trang (page load). Khi một sự kiện xảy ra, hệ thống sẽ "kích hoạt" (fires) một tín hiệu, và có một cơ chế để thực hiện tự động một hành động (chạy một đoạn mã) khi sự kiện đó xảy ra.

>-**Ví dụ về các sự kiện**:  
  - Người dùng chọn, nhấp chuột hoặc di chuột qua một phần tử nhất định.  
  - Người dùng nhấn một phím trên bàn phím.  
  -  Người dùng thay đổi kích thước hoặc đóng cửa sổ trình duyệt.  
  -  Một trang web tải xong.  
  -  Một biểu mẫu được gửi (submitted).  
  -  Một video được phát, tạm dừng hoặc kết thúc.  
  -   Một lỗi xảy ra.  

>-Để phản ứng với một sự kiện, bạn gắn một **trình lắng nghe sự kiện (event listener)** vào nó. Khi sự kiện được kích hoạt, một **hàm xử lý sự kiện (event handler function)** (***được tham chiếu bởi, hoặc chứa bên trong trình lắng nghe sự kiện***) sẽ được gọi để phản ứng với sự kiện đó.

## **II. Thao Tác (Manipulation) DOM**

Thao tác DOM là quá trình thay đổi cấu trúc, nội dung hoặc kiểu dáng của một tài liệu HTML bằng JavaScript.

#### **1. Chọn các phần tử (Targeting Elements)**
>Để thao tác một phần tử trong DOM, trước tiên bạn cần chọn nó và lưu trữ một tham chiếu đến nó trong một biến. Bạn có thể sử dụng kết hợp các bộ chọn kiểu CSS (`CSS-style selectors`) và thuộc tính quan hệ (`relationship properties`).  

>**Phương thức hiện đại được khuyến nghị**:  
>-   `document.querySelector(selector)`: Trả về **tham chiếu đến phần tử đầu tiên** khớp với bộ chọn (`selector`) được cung cấp. Nó tiện lợi vì cho phép bạn chọn các phần tử bằng các bộ chọn CSS.  
>-   `document.querySelectorAll(selectors)`: Trả về một **`NodeList`** chứa tham chiếu đến **tất cả các phần tử** khớp với bộ chọn (`selectors`).  
>    - **Lưu ý quan trọng**: `NodeList` **không phải là một mảng (array)** thực sự. Nó trông giống và hoạt động phần nào giống một mảng, nhưng thiếu một số phương thức của mảng. Bạn có thể chuyển đổi `NodeList` thành một mảng thực sự bằng cách sử dụng `Array.from()` hoặc toán tử trải rộng (`spread operator` - `...`).

> **Các phương thức cũ hơn để chọn phần tử**:  
    >- `document.getElementById(id)`: Chọn một phần tử có giá trị thuộc tính `id` đã cho.
    >-  `document.getElementsByTagName(tagName)`: Trả về một đối tượng giống mảng (`array-like object`) chứa tất cả các phần tử trên trang có loại thẻ đã cho (ví dụ: `<p>`, `<a>`).
    >-  `document.getElementsByClassName(className)`: Trả về một đối tượng giống mảng chứa tất cả các phần tử có tên lớp (`class name`) đã cho.
    >-  **Lưu ý**: Các phương thức này hoạt động tốt hơn trong các trình duyệt cũ hơn so với các phương thức hiện đại như `querySelector()`, nhưng không tiện lợi bằng.

>**Bộ chọn quan hệ (Relational Selectors)**: Bạn cũng có thể sử dụng các bộ chọn quan hệ (ví dụ: `firstElementChild`, `lastElementChild`, `previousElementSibling`, `nextElementSibling`) với các thuộc tính đặc biệt của các nút để chọn các nút mong muốn.  
    >- `element.firstElementChild`: Chọn con đầu tiên của `element`.  
    >-  `element.previousElementSibling`: Chọn anh chị em liền trước của `element`.  
    >-  `element.children`: Trả về một `HTMLCollection` chỉ chứa các phần tử con (element children), không bao gồm các nút văn bản (text nodes).

#### **2. Tạo và Đặt các Nút Mới (Creating and Placing New Nodes)**
> **Tạo phần tử**
>*   `document.createElement(tagName, [options])`: Tạo một phần tử mới có loại thẻ (`tagName`) đã cho. Chức năng này **không đặt phần tử mới của bạn vào DOM ngay lập tức**; nó tạo ra phần tử đó trong bộ nhớ. Điều này cho phép bạn thao tác phần tử (thêm kiểu dáng, lớp, ID, văn bản, v.v.) trước khi đặt nó lên trang.
>*   `document.createTextNode(text)`: Tạo một nút văn bản (`text node`) với nội dung văn bản được cung cấp.

>   **Thêm phần tử vào DOM**:  
    >*   `parentNode.appendChild(childNode)`: Thêm `childNode` làm con cuối cùng của `parentNode`. Một nút chỉ có thể tồn tại ở một vị trí trong tài liệu; việc chèn nó vào một vị trí mới sẽ tự động loại bỏ nó khỏi vị trí hiện tại.  
    >-   `parentNode.insertBefore(newNode, referenceNode)`: Chèn `newNode` vào `parentNode` trước `referenceNode`.

#### **3. Di chuyển và Xóa các phần tử (Moving and Removing Elements)**
>*   `parentNode.removeChild(child)`: Xóa `child` khỏi `parentNode` trên DOM và trả về một tham chiếu đến `child`.
>*   `element.remove()`: Xóa phần tử khỏi DOM, chỉ cần tham chiếu đến chính nó.   
**Lưu ý**: Phương thức này không được hỗ trợ trong các trình duyệt cũ hơn. Trong trường hợp đó, bạn phải sử dụng `element.parentNode.removeChild(element)`.
>*   `element.replaceChild(newChild, oldChild)`: Thay thế một nút con (`oldChild`) bằng một nút khác (`newChild`).

#### **4. Thay đổi thuộc tính và kiểu dáng (Altering Attributes and Styles)**

>   **Nội dung văn bản và HTML**:  
    *   `element.textContent`: Thiết lập hoặc lấy nội dung văn bản kết hợp của một phần tử, bao gồm các hậu duệ của nó. **Được ưu tiên hơn `innerHTML`** để thêm văn bản vì an toàn hơn.
    *   `element.innerText`: Tương tự như `textContent`, nhưng nó trả về nội dung văn bản "được hiển thị" của phần tử, có tính đến kiểu dáng (`styling`) (ví dụ: các phần tử có `display: none` sẽ không được bao gồm).
    *   `element.innerHTML`: Hiển thị nội dung HTML bên trong một phần tử. **Nên sử dụng tối thiểu** để tránh các rủi ro bảo mật tiềm ẩn như tấn công kịch bản chéo trang (`Cross-Site Scripting` - XSS).

>   **Thuộc tính HTML (HTML Attributes)**:
    >*   `element.setAttribute(name, value)`: Thiết lập giá trị của một thuộc tính trên phần tử.
    >*   `element.getAttribute(name)`: Trả về giá trị của thuộc tính đã chỉ định.
    >*   `element.removeAttribute(name)`: Xóa thuộc tính đã chỉ định.
    >*   **Thuộc tính `class`**: Vì `class` là một từ khóa trong JavaScript, thuộc tính được sử dụng để truy cập nó là `className`. Tuy nhiên, bạn cũng có thể truy cập nó bằng tên thật của nó, `"class"`, với các phương thức `getAttribute` và `setAttribute`.
    >*   **Thuộc tính tùy chỉnh (`Custom attributes`)**: Nên đặt tiền tố `data-` vào tên các thuộc tính tự tạo để đảm bảo chúng không xung đột với các thuộc tính khác (ví dụ: `data-key`).

>   **Kiểu dáng (Styling)**:
    >*   **`element.style.propertyName`**: Trực tiếp thao tác kiểu dáng CSS nội tuyến (`inline CSS styles`) của một phần tử. Đối với các tên thuộc tính CSS có dấu gạch ngang (ví dụ: `background-color`), bạn cần sử dụng quy ước chữ lạc đà (`camelCase`) trong JavaScript (ví dụ: `backgroundColor`).
    >*   **`element.classList.add/remove/toggle(className)`**: Thêm, xóa hoặc chuyển đổi một lớp CSS trên một phần tử. Phương pháp này thường được ưu tiên hơn việc thêm kiểu dáng nội tuyến trực tiếp bằng JavaScript, vì nó giúp tách biệt mã CSS và JavaScript, làm cho mã sạch hơn và dễ bảo trì hơn.

>   **Điểm khác biệt giữa thuộc tính nội dung (Content Attributes) và thuộc tính IDL (IDL Attributes)**:  
    >*   **Thuộc tính nội dung (Content attribute)**: Là thuộc tính như bạn đặt nó trong mã HTML. Luôn là một chuỗi (`string`), ngay cả khi giá trị mong đợi là một số nguyên. Bạn có thể thiết lập hoặc lấy nó qua `element.setAttribute()` hoặc `element.getAttribute()`.
    >*   **Thuộc tính IDL (IDL attribute)** (còn gọi là thuộc tính JavaScript)(Interface Definition Language attributes) là khái niệm mô tả các thuộc tính của phần tử HTML mà bạn có thể truy cập và thay đổi trực tiếp bằng JavaScript thông qua đối tượng DOM. Những thuộc tính này không phải là một phần của HTML trực tiếp, mà nằm trong định nghĩa của các API DOM. Bạn có thể đọc hoặc thiết lập bằng các thuộc tính JavaScript (ví dụ: `element.foo`). Các thuộc tính IDL sẽ trả về giá trị của chúng theo loại dữ liệu mong muốn (ví dụ: `input.maxlength` là một số), và khi bạn thiết lập chúng, chúng mong muốn một giá trị thuộc loại đó.

>   **Các thuộc tính boolean (Boolean Attributes)**:   
> Nếu một thuộc tính boolean (ví dụ: `required`, `readonly`, `disabled`) có mặt, giá trị của nó là `true`. Nếu nó không có mặt, giá trị của nó là `false`. Giá trị `"true"` và `"false"` không được phép trên các thuộc tính boolean; để biểu thị giá trị `false`, thuộc tính phải được bỏ qua hoàn toàn.

#### **5. Tải tập lệnh (Script Loading)**
*   Khi trình duyệt tải HTML và gặp một thẻ `<script>`, nó sẽ dừng việc xây dựng DOM và phải thực thi tập lệnh ngay lập tức. Điều này có thể dẫn đến việc tập lệnh không thể nhìn thấy các phần tử DOM bên dưới nó hoặc chặn hiển thị trang nếu tập lệnh lớn.
*   **Giải pháp**:
    *   Đặt thẻ `<script>` ở cuối tài liệu HTML, ngay trước thẻ `</body>` đóng, để đảm bảo các nút DOM được phân tích cú pháp và tạo trước khi tập lệnh chạy.
    *   Sử dụng thuộc tính **`defer`** trong thẻ `<script>` trong phần `<head>` của tài liệu HTML (`<script src="js-file.js" defer></script>`). Thuộc tính `defer` yêu cầu trình duyệt không đợi tập lệnh; thay vào đó, trình duyệt sẽ tiếp tục xử lý HTML và xây dựng DOM trong khi tập lệnh tải "trong nền". Tập lệnh sau đó sẽ chạy khi DOM được xây dựng hoàn chỉnh, **trước khi sự kiện `DOMContentLoaded` xảy ra**. Các tập lệnh `defer` duy trì thứ tự tương đối của chúng.
    *   Sử dụng thuộc tính **`async`**. Thuộc tính `async` cũng làm cho tập lệnh không chặn (`non-blocking`), nhưng nó hoàn toàn độc lập: các tập lệnh khác không đợi tập lệnh `async`, và tập lệnh `async` cũng không đợi chúng. Tập lệnh `async` chạy khi sẵn sàng, theo thứ tự "tải trước" (`load-first order`), không có sự đảm bảo về thứ tự thực thi tương đối giữa chúng hoặc với sự kiện `DOMContentLoaded`. `async` thường được dùng cho các tập lệnh bên thứ ba độc lập như phân tích hoặc quảng cáo.
    *   **Tập lệnh động (Dynamic scripts)**: Các tập lệnh được tạo và thêm vào tài liệu bằng JavaScript (`document.createElement('script')`) mặc định hoạt động như `async`. Hành vi này có thể được thay đổi bằng cách đặt `script.async = false`, khiến chúng thực thi theo thứ tự tài liệu, giống như `defer`.

### **III. Xử Lý Sự Kiện (Handling Events)**

Khi một sự kiện xảy ra, trình duyệt web sẽ chuyển một đối tượng `Event` cho trình xử lý sự kiện.

#### **1. Cơ chế Lắng nghe Sự kiện (Event Listener Mechanisms)**
Có ba cách chính để xử lý sự kiện trong JavaScript:

*   **1. `addEventListener()` (Được khuyến nghị)**:
    *   Đây là cơ chế được khuyến nghị để thêm trình lắng nghe sự kiện vì nó là phương thức mạnh mẽ nhất và mở rộng tốt nhất với các chương trình phức tạp.
    *   Cú pháp: `element.addEventListener(eventType, handlerFunction, [options])`.
    *   **`eventType`**: Một chuỗi biểu thị tên của sự kiện (ví dụ: `"click"`, `"mouseover"`, `"keydown"`).
    *   **`handlerFunction`**: Hàm sẽ được gọi khi sự kiện xảy ra. Có thể là hàm ẩn danh (`anonymous function`), hàm mũi tên (`arrow function`) hoặc hàm có tên (`named function`).
    *   **`options` (tùy chọn)**: Một đối tượng có thể chứa các thuộc tính như `capture` và `once`.
        *   `capture`: Một giá trị boolean xác định xem trình xử lý có được kích hoạt trong giai đoạn `capturing` hay không. Mặc định là `false` (giai đoạn `bubbling`).
        *   `once`: Một giá trị boolean. Nếu `true`, trình lắng nghe sự kiện sẽ tự động bị gỡ bỏ sau khi được gọi một lần. Điều này hữu ích cho các nút mà bạn chỉ muốn người dùng nhấp một lần (ví dụ: nút thanh toán).
    *   **Ưu điểm**: Cho phép bạn thêm **nhiều trình xử lý** cho cùng một sự kiện trên một phần tử.
    *   **Xóa trình lắng nghe**: Bạn có thể xóa một trình lắng nghe sự kiện đã thêm bằng `addEventListener()` bằng cách sử dụng phương thức `removeEventListener(eventType, handlerFunction)`. Hàm được truyền cho `removeEventListener` phải là cùng một giá trị hàm được truyền cho `addEventListener`.

*   **2. Thuộc tính trình xử lý sự kiện (`Event Handler Properties`)**:
    *   Các đối tượng có thể kích hoạt sự kiện thường có các thuộc tính có tên là `on` theo sau là tên sự kiện (ví dụ: `onclick`, `onmousedown`).
    *   Để lắng nghe sự kiện, bạn có thể gán hàm xử lý cho thuộc tính này.
    *   **Nhược điểm**: Bạn chỉ có thể gán **một trình lắng nghe** cho mỗi thuộc tính. Bất kỳ lần gán nào sau đó sẽ ghi đè lên các gán trước đó.

*   **3. Thuộc tính trình xử lý sự kiện nội tuyến (`Inline Event Handler Attributes`) - KHÔNG NÊN DÙNG**:
    *   Là phương pháp sớm nhất để đăng ký trình xử lý sự kiện trên Web, trong đó mã JavaScript được đặt trực tiếp trong thuộc tính HTML (ví dụ: `<button onclick="alert('...')">`).
    *   **Nên tránh sử dụng** vì chúng được coi là thực hành không tốt (`bad practice`).
    *   **Lý do**:
        *   **Trộn lẫn HTML và JavaScript**: Gây khó đọc và khó bảo trì mã.
        *   **Không hiệu quả**: Nếu có nhiều phần tử cần cùng một trình xử lý, bạn phải thêm thuộc tính vào từng phần tử, gây khó khăn cho việc bảo trì. Với JavaScript riêng biệt, bạn có thể dễ dàng thêm trình xử lý cho nhiều phần tử bằng một đoạn mã.
        *   **Rủi ro bảo mật**: Nhiều cấu hình máy chủ phổ biến sẽ không cho phép JavaScript nội tuyến như một biện pháp bảo mật.

#### **2. Đối tượng Sự kiện (Event Object)**
Khi một sự kiện xảy ra, trình duyệt web sẽ tự động chuyển một **đối tượng `Event`** (thường được đặt tên là `event`, `e`, hoặc `evt`) cho hàm xử lý sự kiện. Đối tượng này chứa thông tin bổ sung về sự kiện.

*   **Các thuộc tính và phương thức quan trọng của đối tượng `Event`**:
    *   `event.target`: Là tham chiếu đến phần tử mà sự kiện thực sự xảy ra (`occurred upon`).
    *   `event.type`: Một chuỗi xác định loại sự kiện (ví dụ: `"click"`, `"keydown"`, `"mousedown"`).
    *   `event.isTrusted`: Một giá trị boolean. `true` nếu sự kiện được tạo bởi hành động của người dùng, `false` nếu được tạo bởi mã chương trình.
    *   `event.preventDefault()`: Phương thức này dừng hành vi mặc định của trình duyệt liên quan đến sự kiện (ví dụ: ngăn liên kết điều hướng, ngăn biểu mẫu gửi đi). Tuy nhiên, nó **không ngăn sự kiện nổi bọt (bubbling)** qua DOM.
    *   `event.stopPropagation()`: Phương thức này ngay lập tức dừng luồng (`flow`) của một sự kiện qua cây DOM (dừng cả `capturing` và `bubbling` ở điểm được gọi). Tuy nhiên, nó **không dừng hành vi mặc định** của trình duyệt.

*   **Các thuộc tính bổ sung tùy thuộc vào loại sự kiện**:

    *   **Sự kiện chuột (Mouse Events)** (`MouseEvent`):
        *   `event.button`: Chỉ ra nút chuột nào đã được nhấn để kích hoạt sự kiện: `0` (nút chính, thường là trái), `1` (phụ trợ, thường là giữa/bánh xe), `2` (thứ cấp, thường là phải), v.v..
        *   `event.clientX`, `event.clientY`: Tọa độ ngang và dọc của con trỏ chuột trong khu vực hiển thị (`viewport`) của ứng dụng.
        *   `event.pageX`, `event.pageY`: Tọa độ ngang và dọc tương đối với góc trên bên trái của toàn bộ tài liệu.
        *   `event.screenX`, `event.screenY`: Tọa độ ngang và dọc của con trỏ chuột tương đối với toàn bộ màn hình.

    *   **Sự kiện bàn phím (Keyboard Events)** (`KeyboardEvent`):
        *   `event.key`: Trả về một chuỗi biểu thị ký tự hoặc tên của phím đã được nhấn (ví dụ: `"z"`, `"Enter"`, `"ArrowUp"`, `"Shift"`, `"v"`, `"V"`, `"!"`). Đây là cách được khuyến nghị để xác định ký tự mà một lần nhấn phím tương ứng.
        *   `event.code`: Trả về mã vật lý (`physical key code`) của phím trên bàn phím. Giá trị này không bị thay đổi bởi bố cục bàn phím hoặc trạng thái của các phím bổ trợ (`modifier keys`). Hữu ích khi bạn muốn xử lý các phím dựa trên vị trí vật lý của chúng trên thiết bị nhập liệu (ví dụ: trong các trò chơi).
        *   `event.keyCode` (Đã lỗi thời/`Deprecated`): Là một thuộc tính cũ hơn để xác định phím nhấn, nhưng đã bị lỗi thời. Nên sử dụng `event.key` hoặc `event.code` thay thế.
        *   **Các phím bổ trợ (`Modifier keys`)**: `event.shiftKey`, `event.ctrlKey`, `event.altKey`, `event.metaKey` (phím Windows trên bàn phím Windows, phím Command trên bàn phím Apple) là các thuộc tính boolean, `true` nếu phím đang được giữ xuống.

#### **3. Luồng Sự kiện (Event Flow)**
Luồng sự kiện giải thích thứ tự mà các sự kiện được nhận trên trang từ phần tử nơi sự kiện xảy ra và được lan truyền qua cây DOM.

*   **Mô hình nổi bọt sự kiện (Event Bubbling)**: Một sự kiện bắt đầu ở phần tử cụ thể nhất và sau đó nổi bọt (`flows upward`) lên các phần tử ít cụ thể hơn (nút cha, `document`, hoặc thậm chí `window`). Khi bạn nhấp vào một nút, sự kiện nhấp chuột xảy ra trên nút đó trước, sau đó nổi bọt lên `div` chứa nó, rồi `body`, `html`, và cuối cùng là `document` (hoặc `window`).
*   **Mô hình bắt giữ sự kiện (Event Capturing)**: Một sự kiện bắt đầu ở phần tử ít cụ thể nhất và sau đó chảy xuống (`flows downward`) các phần tử cụ thể hơn. Khi nhấp vào nút, sự kiện bắt đầu từ `document`, sau đó `html`, `body`, `div`, và cuối cùng là `button`.

*   **Luồng sự kiện DOM Level 2**: Quy định rằng luồng sự kiện có ba giai đoạn:
    1.  **Giai đoạn bắt giữ sự kiện (Event Capturing Phase)**: Cung cấp cơ hội để chặn sự kiện.
    2.  **Giai đoạn đích thực (Target Phase)**: Phần tử đích thực nhận sự kiện.
    3.  **Giai đoạn nổi bọt sự kiện (Event Bubbling Phase)**: Cho phép phản hồi cuối cùng với sự kiện.

#### **4. Các loại Sự kiện Phổ biến Khác**

*   **Sự kiện tải trang (Page Load Events)**:
    *   `DOMContentLoaded`: Kích hoạt khi trình duyệt đã tải đầy đủ HTML và hoàn thành việc xây dựng cây DOM, nhưng chưa tải các tài nguyên bên ngoài như bảng kiểu (stylesheets) và hình ảnh. Tại sự kiện này, bạn có thể bắt đầu chọn các nút DOM hoặc khởi tạo giao diện.
    *   `load`: Kích hoạt khi trình duyệt đã tải đầy đủ cả HTML và tất cả các tài nguyên bên ngoài (hình ảnh, bảng kiểu, v.v.).
    *   `beforeunload`: Kích hoạt trước khi trang và tài nguyên bị dỡ bỏ (`unloaded`). Có thể được sử dụng để hiển thị hộp thoại xác nhận nếu người dùng muốn rời khỏi trang, giúp ngăn mất dữ liệu.
    *   `unload`: Kích hoạt khi trang đã được dỡ tải hoàn toàn. Có thể sử dụng để gửi dữ liệu phân tích hoặc dọn dẹp tài nguyên.

*   **Sự kiện tập trung (Focus Events)**:
    *   `focus`: Kích hoạt khi một phần tử nhận được sự tập trung (`focus`).
    *   `blur`: Kích hoạt khi một phần tử mất sự tập trung.
    *   **Lưu ý**: Hai sự kiện này không nổi bọt (`do not propagate`). Đối tượng `window` sẽ nhận các sự kiện `focus` và `blur` khi người dùng chuyển từ hoặc đến tab hoặc cửa sổ trình duyệt mà tài liệu được hiển thị.

*   **Sự kiện cuộn (Scroll Events)**:
    *   `scroll`: Kích hoạt bất cứ khi nào một phần tử được cuộn. Trình xử lý sự kiện chỉ được gọi **sau khi** việc cuộn diễn ra, và gọi `preventDefault()` trên sự kiện cuộn không ngăn việc cuộn xảy ra.

#### **5. Ủy quyền Sự kiện (Event Delegation)**
**Ủy quyền sự kiện** là một kỹ thuật sử dụng sự nổi bọt sự kiện (`event bubbling`) để xử lý các sự kiện ở mức cao hơn trong DOM (trên phần tử cha) thay vì phải đăng ký nhiều trình xử lý sự kiện cho từng phần tử con.

*   **Ví dụ**: Thay vì gán một trình xử lý `click` riêng cho mỗi mục trong danh sách `<ul>`, bạn có thể gán một trình xử lý duy nhất cho phần tử `<ul>` cha. Khi một mục `<li>` hoặc `<a>` bên trong được nhấp, sự kiện sẽ nổi bọt lên `<ul>`, nơi trình xử lý chung có thể nhận và xác định phần tử con nào đã được nhấp thông qua `event.target`.

*   **Lợi ích**:
    *   **Sử dụng ít bộ nhớ hơn, hiệu suất tốt hơn**: Mỗi trình xử lý sự kiện là một hàm và chiếm bộ nhớ. Giảm số lượng trình xử lý cải thiện hiệu suất.
    *   **Thời gian thiết lập nhanh hơn**: Ít thời gian hơn để gán tất cả các trình xử lý sự kiện, dẫn đến tương tác nhanh hơn trên trang.
    *   **Hoạt động với các phần tử được thêm động**: Cho phép các phần tử được thêm vào DOM sau khi tải trang vẫn được xử lý mà không cần thêm trình xử lý riêng biệt cho chúng.

#### **6. Hiệu suất và Debouncing**
Một số loại sự kiện có thể kích hoạt rất nhanh và nhiều lần liên tiếp (ví dụ: `mousemove`, `scroll`). Điều này có thể dẫn đến các vấn đề về hiệu suất nếu hàm xử lý sự kiện phức tạp.

*   Để tránh vấn đề này, bạn có thể thêm trình xử lý sự kiện `mousemove` chỉ khi cần và loại bỏ nó ngay khi không cần nữa.
*   **`Debouncing`**: Là kỹ thuật sử dụng `setTimeout` và `clearTimeout` để đảm bảo rằng một hàm xử lý sự kiện chỉ được thực thi sau một khoảng thời gian nhất định không có sự kiện nào khác cùng loại được kích hoạt, hoặc để giới hạn tần suất thực thi của nó. Điều này ngăn không cho hàm chạy quá thường xuyên và làm chậm trang.

#### **7. Web Workers**
Đối với các tác vụ tốn thời gian mà bạn không muốn làm đóng băng trang web, trình duyệt cung cấp **`web workers`**. Một `worker` là một tiến trình JavaScript chạy song song với tập lệnh chính, trên dòng thời gian riêng của nó. `Workers` không chia sẻ phạm vi toàn cục hoặc bất kỳ dữ liệu nào với môi trường của tập lệnh chính; thay vào đó, bạn phải giao tiếp với chúng bằng cách gửi và nhận tin nhắn (`postMessage`, `onmessage`).

### **IV. Sự Kiện Tùy Chỉnh (Custom Events)**

**Sự kiện tùy chỉnh (Custom events)** trong JavaScript cho phép bạn tạo và kích hoạt các sự kiện của riêng mình. Điều này hữu ích để **tách rời việc thực thi mã (decouple code execution)**, cho phép một đoạn mã chạy sau khi một đoạn mã khác hoàn thành.

*   **1. Tạo một sự kiện tùy chỉnh**:
    Bạn sử dụng hàm tạo `CustomEvent()` để tạo một sự kiện tùy chỉnh mới:
    ```javascript
    let event = new CustomEvent(eventType, options);
    ```
    *   `eventType`: Là một chuỗi đại diện cho tên của sự kiện (ví dụ: `'highlight'`).
    *   `options`: Là một đối tượng có thuộc tính `detail` chứa bất kỳ thông tin tùy chỉnh nào về sự kiện.
    *   **Ví dụ**:
        ```javascript
        let event = new CustomEvent('highlight', {
            detail: { backgroundColor: 'yellow' }
        });
        ```
       

*   **2. Kích hoạt (Dispatching) một sự kiện tùy chỉnh**:
    Sau khi tạo một sự kiện tùy chỉnh, bạn cần gắn sự kiện đó vào một phần tử DOM và kích hoạt nó bằng cách sử dụng phương thức `dispatchEvent()`:
    ```javascript
    domElement.dispatchEvent(event);
    ```
   

*   **Ví dụ tổng hợp cách tạo và kích hoạt sự kiện tùy chỉnh**:
    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>JavaScript Custom Event</title>
    </head>
    <body>
        <div class="note">JS Custom Event</div>
        <script>
            function highlight(elem) {
                const bgColor = 'yellow';
                elem.style.backgroundColor = bgColor;

                // create the event
                let event = new CustomEvent('highlight', {
                    detail: { backgroundColor: bgColor }
                });

                // dispatch the event
                elem.dispatchEvent(event);
            }

            // Select the div element
            let div = document.querySelector('.note');

            // Add border style
            function addBorder(elem) {
                elem.style.border = "solid 1px red";
            }

            // Listen to the highlight event
            div.addEventListener('highlight', function (e) {
                addBorder(this);
                // examine the background
                console.log(e.detail);
            });

            // highlight div element
            highlight(div);
        </script>
    </body>
    </html>
    ```
   

*   **Giải thích ví dụ**:
    1.  Hàm `highlight()` được khai báo để tô sáng một phần tử và kích hoạt sự kiện `highlight`.
    2.  Phần tử `<div>` được chọn bằng `querySelector()`.
    3.  Một trình lắng nghe được thiết lập trên `<div>` để lắng nghe sự kiện `highlight`. Bên trong trình lắng nghe, hàm `addBorder()` được gọi và thuộc tính `detail` của sự kiện được hiển thị trong `Console`.
    4.  Cuối cùng, hàm `highlight(div)` được gọi, kích hoạt sự kiện `highlight` và làm cho `addBorder` được thực thi.

*   **Tổng kết**: Sử dụng `CustomEvent()` để tạo và `dispatchEvent()` để kích hoạt sự kiện. Custom events cho phép tách rời mã và có thể có nhiều trình lắng nghe cho cùng một sự kiện tùy chỉnh, đặt trong các tệp script riêng biệt.

----
















## Tài liệu đọc khi HỌC LẦN 2 :
> 1. https://www.theodinproject.com/lessons/foundations-dom-manipulation-and-events
> 2. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator
> 3. https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes
> 4. https://youtube.com/watch?v=ns1LX6mEvyM
> 5. https://javascript.info/script-async-defer#defer
> 6. [Bài tập ](https://www.theodinproject.com/lessons/foundations-dom-manipulation-and-events#exercise)
> 7. https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Events#event_objects
> 8. **https://www.w3schools.com/jsref/dom_obj_event.asp**
> 9. [DOM manipulation](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents#active_learning_basic_dom_manipulation)
> 10. [JavaScript events](https://www.javascripttutorial.net/javascript-dom/javascript-events/)
> 11. [Page load events](https://www.javascripttutorial.net/javascript-dom/javascript-page-load-events/)
> 12. [Mouse events](https://www.javascripttutorial.net/javascript-dom/javascript-mouse-events/)
> 13. [Keyboard events](https://www.javascripttutorial.net/javascript-dom/javascript-keyboard-events/)
> 14. [Event delegation](https://www.javascripttutorial.net/javascript-dom/javascript-event-delegation/)
> 15. [The dispatchEvent method](https://www.javascripttutorial.net/javascript-dom/javascript-dispatchevent/)
> 16. [Custom events](https://www.javascripttutorial.net/javascript-dom/javascript-custom-events/)
> 17. http://eloquentjavascript.net/13_dom.html
> 18. http://eloquentjavascript.net/14_event.html
> 19. https://plainjs.com/javascript/
> 20. **https://www.w3schools.com/js/js_htmldom.asp**
> 21. https://www.youtube.com/watch?v=0ik6X4DJKCc&list=PLillGF-RfqbYE6Ik_EuXA2iZFcE082B3s
> 22. https://www.digitalocean.com/community/tutorial_series/understanding-the-dom-document-object-model
> 23. https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events
> 24. https://www.youtube.com/watch?v=VuN8qwZoego
> 25. https://www.youtube.com/watch?v=F1anRyL37lE
> 26. https://dev.to/i3uckwheat/understanding-callbacks-2o9e
> 27. https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode
> 28. https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code 
> ⭐ **Theo dõi [kênh Threads](https://www.threads.com/@kaitaku.88) để đọc bài mới mỗi ngày!** ⭐
**[<== Bài Trước](link)          |[Trang Chủ](./README.md)|           [Bài Sau ==>](link)**
<!--SR:!2025-07-21,4,270-->