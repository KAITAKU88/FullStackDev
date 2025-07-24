# Giới thiệu phần HTML và CSS Intermediate
> Chỉ cần xem qua cho quen mắt để biết xem là chúng ta sẽ cần học những gì. KHông yêu cầu phải ghi nhớ điều gì ở bài này, vì sẽ học trong các bài sau.

---

## I. HTML: Cấu trúc nội dung web

HTML là xương sống của mọi trang web, chịu trách nhiệm về cách nội dung được tổ chức. Các phần tử HTML được tạo ra bằng các thẻ (`tags`) và được nhóm theo chức năng để dễ dàng tìm kiếm và sử dụng.

### 1. Các thành phần cơ bản của tài liệu HTML

*   **Phần tử gốc chính (Main root)**
    *   `<html>`: Đại diện cho phần tử gốc (cấp cao nhất) của một tài liệu HTML. Tất cả các phần tử khác phải là con cháu của phần tử này.
*   **Siêu dữ liệu tài liệu (Document metadata)**
    Siêu dữ liệu chứa thông tin về trang, bao gồm thông tin về kiểu dáng (`styles`), tập lệnh (`scripts`) và dữ liệu giúp phần mềm (công cụ tìm kiếm, trình duyệt, v.v.) sử dụng và hiển thị trang.
    *   `<base>`: Chỉ định URL cơ sở (`base URL`) cho tất cả các URL tương đối (`relative URLs`) trong tài liệu. Chỉ có thể có một phần tử này trong tài liệu.
    *   `<head>`: Chứa thông tin máy đọc được (`machine-readable information` hay `metadata`) về tài liệu, như tiêu đề, tập lệnh và biểu định kiểu (`style sheets`).
    *   `<link>`: Chỉ định mối quan hệ giữa tài liệu hiện tại và một tài nguyên bên ngoài. Phần tử này thường được dùng để liên kết đến CSS nhưng cũng được dùng để thiết lập biểu tượng trang web (`site icons`).
    *   `<meta>`: Đại diện cho siêu dữ liệu không thể được đại diện bởi các phần tử liên quan đến siêu dữ liệu HTML khác, như `<base>`, `<link>`, `<script>`, `<style>` và `<title>`.
    *   `<style>`: Chứa thông tin kiểu dáng cho một tài liệu hoặc một phần của tài liệu. Nó chứa CSS, được áp dụng cho nội dung của tài liệu chứa phần tử này.
    *   `<title>`: Định nghĩa tiêu đề của tài liệu được hiển thị trong thanh tiêu đề của trình duyệt hoặc tab của trang.
*   **Phần tử gốc của phần nội dung (Sectioning root)**
    *   `<body>`: Đại diện cho nội dung của một tài liệu HTML. Chỉ có thể có một phần tử này trong tài liệu.

### 2. Cấu trúc và tổ chức nội dung

Các phần tử phân đoạn nội dung (`content sectioning elements`) cho phép bạn tổ chức nội dung tài liệu thành các phần logic, tạo ra một dàn ý rộng cho nội dung trang, bao gồm điều hướng tiêu đề và chân trang, và các phần tử tiêu đề để xác định các phần nội dung.

*   **Phân đoạn nội dung (Content sectioning)**
    *   `<address>`: Cho biết nội dung HTML được bao quanh cung cấp thông tin liên hệ cho một người, một nhóm người hoặc một tổ chức.
    *   `<article>`: Đại diện cho một thành phần độc lập trong một tài liệu, trang, ứng dụng hoặc trang web, được dự định để phân phối hoặc tái sử dụng độc lập (ví dụ: một bài đăng trên diễn đàn, một bài báo, một mục blog).
    *   `<aside>`: Đại diện cho một phần của tài liệu mà nội dung của nó chỉ liên quan gián tiếp đến nội dung chính của tài liệu. `<aside>` thường được trình bày dưới dạng thanh bên (`sidebars`) hoặc hộp chú thích (`call-out boxes`).
    *   `<footer>`: Đại diện cho một chân trang (`footer`) cho phần tử phân đoạn nội dung gần nhất hoặc phần tử gốc phân đoạn. Một `<footer>` thường chứa thông tin về tác giả, dữ liệu bản quyền hoặc các liên kết đến các tài liệu liên quan.
    *   `<header>`: Đại diện cho nội dung giới thiệu, thường là một nhóm các công cụ hỗ trợ giới thiệu hoặc điều hướng. Nó có thể chứa một số phần tử tiêu đề (`heading elements`) nhưng cũng có thể là logo, form tìm kiếm, tên tác giả, v.v..
    *   `<h1>` đến `<h6>`: Đại diện cho sáu cấp độ tiêu đề phần. `<h1>` là cấp độ phần cao nhất và `<h6>` là thấp nhất.
    *   `<hgroup>`: Đại diện cho một nhóm tiêu đề với bất kỳ nội dung phụ nào, chẳng hạn như tiêu đề phụ, tiêu đề thay thế hoặc khẩu hiệu.
    *   `<main>`: Đại diện cho nội dung chính của phần `<body>` của tài liệu.
    *   `<nav>`: Đại diện cho một phần của trang mà mục đích của nó là cung cấp các liên kết điều hướng (`navigation links`), trong tài liệu hiện tại hoặc đến các tài liệu khác.
    *   `<section>`: Đại diện cho một phần độc lập chung của tài liệu, không có phần tử ngữ nghĩa cụ thể hơn để đại diện cho nó. Các `section` nên luôn có một tiêu đề.
    *   `<search>`: Đại diện cho một phần chứa một tập hợp các điều khiển biểu mẫu hoặc nội dung khác liên quan đến việc thực hiện tìm kiếm hoặc thao tác lọc.

*   **Nội dung văn bản (Text content)**
    Các phần tử nội dung văn bản HTML được sử dụng để tổ chức các khối hoặc phần nội dung đặt giữa thẻ mở `<body>` và thẻ đóng `</body>`. Quan trọng cho khả năng truy cập (`accessibility`) và SEO (`Search Engine Optimization`), các phần tử này xác định mục đích hoặc cấu trúc của nội dung đó.
    *   `<blockquote>`: Cho biết văn bản được bao quanh là một trích dẫn mở rộng. Thường được hiển thị bằng cách thụt lề (`indentation`).
    *   `<div>`: **Container chung** cho nội dung dòng chảy (`flow content`). Nó không có ảnh hưởng đến nội dung hoặc bố cục cho đến khi được tạo kiểu bằng CSS.
    *   `<p>`: Đại diện cho một đoạn văn (`paragraph`).
    *   `<pre>`: Đại diện cho văn bản được định dạng trước (`preformatted text`), được trình bày chính xác như được viết trong file HTML. Thường được hiển thị bằng font không tỷ lệ (`non-proportional font`) hoặc font monospace. Khoảng trắng bên trong phần tử này được hiển thị nguyên văn.
    *   `<ul>`: Đại diện cho một danh sách không có thứ tự (`unordered list`) các mục, thường được hiển thị dưới dạng danh sách dấu đầu dòng (`bulleted list`).
    *   `<ol>`: Đại diện cho một danh sách có thứ tự (`ordered list`) các mục, thường được hiển thị dưới dạng danh sách được đánh số.
    *   `<li>`: Đại diện cho một mục trong danh sách. Nó phải nằm trong một phần tử cha: `<ol>`, `<ul>` hoặc `<menu>`.
    *   `<dl>`, `<dt>`, `<dd>`: Đại diện cho một danh sách mô tả (`description list`). `<dt>` chỉ định một thuật ngữ, và `<dd>` cung cấp mô tả hoặc định nghĩa cho thuật ngữ đó.
    *   `<figure>`, `<figcaption>`: `<figure>` đại diện cho nội dung độc lập, có thể có chú thích tùy chọn được chỉ định bằng `<figcaption>`.
    *   `<hr>`: Đại diện cho một ngắt chủ đề (`thematic break`) giữa các phần tử cấp đoạn văn (`paragraph-level elements`).
    *   `<menu>`: Một lựa chọn thay thế ngữ nghĩa cho `<ul>`, nhưng được các trình duyệt xử lý giống như `<ul>`. Nó đại diện cho một danh sách các mục không có thứ tự.

*   **Ngữ nghĩa văn bản nội tuyến (Inline text semantics)**
    Được sử dụng để định nghĩa ý nghĩa, cấu trúc hoặc kiểu của một từ, dòng hoặc bất kỳ đoạn văn bản nào.
    *   `<a>`: Cùng với thuộc tính `href`, tạo ra một siêu liên kết (`hyperlink`).
    *   `<span>`: **Container nội tuyến chung** cho nội dung cụm từ (`phrasing content`), không tự thân đại diện cho bất cứ điều gì. Nó có thể được sử dụng để nhóm các phần tử cho mục đích tạo kiểu (`styling purposes`) hoặc vì chúng chia sẻ các giá trị thuộc tính. Nó rất giống `<div>` nhưng `<span>` là phần tử cấp nội tuyến (`inline-level element`) trong khi `<div>` là phần tử cấp khối (`block-level element`).
    *   `<strong>`: Cho biết nội dung của nó có **tầm quan trọng cao**, nghiêm trọng hoặc cấp bách. Các trình duyệt thường hiển thị nội dung bằng chữ in đậm (`bold type`).
    *   `<em>`: Đánh dấu văn bản có **nhấn mạnh** (`stress emphasis`). Phần tử `<em>` có thể được lồng vào nhau, với mỗi cấp độ lồng cho thấy mức độ nhấn mạnh lớn hơn.
    *   `<b>`: Dùng để thu hút sự chú ý của người đọc vào nội dung của phần tử, không mang ý nghĩa quan trọng đặc biệt. Nó không nên dùng để tạo kiểu chữ in đậm; thay vào đó, hãy dùng thuộc tính `font-weight` của CSS. Nếu muốn chỉ ra tầm quan trọng, hãy dùng `<strong>`.
    *   `<i>`: Đại diện cho một đoạn văn bản được tách biệt khỏi văn bản bình thường vì một lý do nào đó, chẳng hạn như văn bản thành ngữ, thuật ngữ kỹ thuật. Theo lịch sử, chúng được trình bày bằng chữ nghiêng (`italicized type`).
    *   `<small>`: Đại diện cho các bình luận phụ (`side-comments`) và chữ in nhỏ (`small print`), như bản quyền và văn bản pháp lý. Mặc định, nó hiển thị văn bản bên trong với kích thước font nhỏ hơn một cấp.
    *   `<code>`: Hiển thị nội dung của nó được tạo kiểu để chỉ ra rằng văn bản là một đoạn mã máy tính ngắn. Mặc định, văn bản nội dung được hiển thị bằng font monospace mặc định của trình duyệt.
    *   `<kbd>`: Đại diện cho một đoạn văn bản nội tuyến biểu thị nhập liệu từ bàn phím, giọng nói hoặc bất kỳ thiết bị nhập văn bản nào khác.
    *   `<samp>`: Dùng để bao quanh văn bản nội tuyến đại diện cho kết quả mẫu (`sample output`) hoặc trích dẫn từ một chương trình máy tính.
    *   `<var>`: Đại diện cho tên của một biến (`variable`) trong biểu thức toán học hoặc ngữ cảnh lập trình.
    *   `<abbr>`: Đại diện cho một từ viết tắt (`abbreviation`) hoặc từ viết tắt (`acronym`).
    *   `<cite>`: Dùng để đánh dấu tiêu đề của một tác phẩm sáng tạo.
    *   `<dfn>`: Dùng để chỉ ra thuật ngữ đang được định nghĩa trong ngữ cảnh của một cụm từ hoặc câu định nghĩa.
    *   `<mark>`: Đại diện cho văn bản được đánh dấu (`marked`) hoặc tô sáng (`highlighted`) cho mục đích tham khảo hoặc ghi chú.
    *   `<q>`: Cho biết văn bản được bao quanh là một trích dẫn nội tuyến ngắn. Hầu hết các trình duyệt hiện đại thực hiện điều này bằng cách bao quanh văn bản bằng dấu ngoặc kép.
    *   `<s>`: Hiển thị văn bản với một gạch ngang (`strikethrough`), hoặc một dòng xuyên qua nó. Dùng `<s>` để đại diện cho những thứ không còn liên quan hoặc không còn chính xác. Không thích hợp để chỉ ra các chỉnh sửa tài liệu (dùng `<del>` và `<ins>`).
    *   `<sub>`: Chỉ định văn bản nội tuyến sẽ được hiển thị dưới dạng chỉ số dưới (`subscript`) vì lý do kiểu chữ đơn thuần.
    *   `<sup>`: Chỉ định văn bản nội tuyến sẽ được hiển thị dưới dạng chỉ số trên (`superscript`) vì lý do kiểu chữ đơn thuần.
    *   `<time>`: Đại diện cho một khoảng thời gian cụ thể. Có thể bao gồm thuộc tính `datetime` để dịch ngày thành định dạng máy đọc được.
    *   `<u>`: Đại diện cho một đoạn văn bản nội tuyến sẽ được hiển thị theo cách chỉ ra rằng nó có chú thích không phải văn bản. Mặc định được hiển thị là một gạch chân rắn đơn.
    *   `<br>`: Tạo ra một ngắt dòng (`line break`) trong văn bản.
    *   `<wbr>`: Đại diện cho một cơ hội ngắt từ (`word break opportunity`)—một vị trí trong văn bản mà trình duyệt có thể tùy ý ngắt dòng.
    *   `<bdi>`: Hướng dẫn thuật toán hai chiều (`bidirectional algorithm`) của trình duyệt xử lý văn bản nó chứa một cách độc lập với văn bản xung quanh.
    *   `<bdo>`: Ghi đè hướng hiện tại của văn bản, để văn bản bên trong được hiển thị theo một hướng khác.
    *   `<data>`: Liên kết một phần nội dung nhất định với bản dịch máy đọc được. Nếu nội dung liên quan đến thời gian hoặc ngày, phải sử dụng phần tử `<time>`.
    *   `<ruby>`, `<rt>`, `<rp>`: Các phần tử này được sử dụng để hiển thị chú thích nhỏ trên, dưới hoặc bên cạnh văn bản cơ sở, thường dùng để hiển thị cách phát âm của các ký tự Đông Á.

*   **Hình ảnh và đa phương tiện (Image and multimedia)**
    HTML hỗ trợ các tài nguyên đa phương tiện khác nhau như hình ảnh, âm thanh và video.
    *   `<img>`: Nhúng một hình ảnh vào tài liệu.
    *   `<audio>`: Dùng để nhúng nội dung âm thanh vào tài liệu.
    *   `<video>`: Nhúng một trình phát đa phương tiện hỗ trợ phát lại video vào tài liệu.
    *   `<map>`, `<area>`: `<map>` dùng với `<area>` để định nghĩa một bản đồ hình ảnh (`image map`) (một khu vực liên kết có thể nhấp được).
    *   `<track>`: Dùng làm con của các phần tử đa phương tiện (`<audio>` và `<video>`), cho phép bạn chỉ định các bản nhạc văn bản có thời gian (`timed text tracks`).

*   **Nội dung nhúng (Embedded content)**
    Ngoài nội dung đa phương tiện thông thường, HTML có thể bao gồm nhiều nội dung khác, ngay cả khi không phải lúc nào cũng dễ tương tác.
    *   `<embed>`: Nhúng nội dung bên ngoài vào một điểm cụ thể trong tài liệu. Nội dung này được cung cấp bởi một ứng dụng bên ngoài hoặc nguồn nội dung tương tác khác.
    *   `<iframe>`: Đại diện cho một ngữ cảnh duyệt web lồng nhau (`nested browsing context`), nhúng một trang HTML khác vào trang hiện tại.
    *   `<object>`: Đại diện cho một tài nguyên bên ngoài, có thể được coi là hình ảnh, ngữ cảnh duyệt web lồng nhau hoặc tài nguyên được xử lý bởi một plugin.
    *   `<picture>`, `<source>`: `<picture>` chứa không hoặc nhiều phần tử `<source>` và một phần tử `<img>` để cung cấp các phiên bản hình ảnh thay thế cho các tình huống hiển thị/thiết bị khác nhau.
    *   `<fencedframe>`: Đại diện cho một ngữ cảnh duyệt web lồng nhau, giống như `<iframe>` nhưng có nhiều tính năng bảo mật riêng tư hơn (Experimental).

*   **SVG và MathML**
    Bạn có thể nhúng nội dung SVG (`Scalable Vector Graphics`) và MathML (`Mathematical Markup Language`) trực tiếp vào tài liệu HTML.
    *   `<svg>`: Container định nghĩa một hệ tọa độ và khung nhìn mới. Được sử dụng làm phần tử ngoài cùng của tài liệu SVG, nhưng cũng có thể nhúng một đoạn SVG vào tài liệu SVG hoặc HTML.
    *   `<math>`: Phần tử cấp cao nhất trong MathML. Mọi thể hiện MathML hợp lệ phải được bao bọc trong nó.

*   **Tập lệnh (Scripting)**
    Để tạo nội dung động và ứng dụng web, HTML hỗ trợ sử dụng các ngôn ngữ lập trình, nổi bật nhất là JavaScript.
    *   `<canvas>`: Phần tử container để sử dụng với API tập lệnh canvas (`canvas scripting API`) hoặc API WebGL để vẽ đồ họa và hoạt ảnh.
    *   `<noscript>`: Định nghĩa một phần HTML sẽ được chèn nếu loại tập lệnh trên trang không được hỗ trợ hoặc nếu tập lệnh hiện đang bị tắt trong trình duyệt.
    *   `<script>`: Được sử dụng để nhúng mã thực thi (`executable code`) hoặc dữ liệu; điều này thường được sử dụng để nhúng hoặc tham chiếu mã JavaScript.

*   **Đánh dấu chỉnh sửa (Demarcating edits)**
    Các phần tử này cho phép bạn cung cấp các dấu hiệu cho thấy các phần cụ thể của văn bản đã bị thay đổi.
    *   `<del>`: Đại diện cho một đoạn văn bản đã bị xóa khỏi tài liệu.
    *   `<ins>`: Đại diện cho một đoạn văn bản đã được thêm vào tài liệu.

*   **Nội dung bảng (Table content)**
    Các phần tử này được sử dụng để tạo và xử lý dữ liệu dạng bảng (`tabular data`).
    *   `<table>`: Đại diện cho dữ liệu dạng bảng—nghĩa là thông tin được trình bày trong một bảng hai chiều gồm các hàng và cột chứa dữ liệu.
    *   `<caption>`: Chỉ định chú thích (`caption`) (hoặc tiêu đề) của một bảng.
    *   `<thead>`: Bao bọc một tập hợp các hàng bảng (`<tr> elements`), cho biết chúng tạo thành phần đầu của bảng với thông tin về các cột của bảng.
    *   `<tbody>`: Bao bọc một tập hợp các hàng bảng (`<tr> elements`), cho biết chúng tạo thành phần thân của dữ liệu (chính) của bảng.
    *   `<tfoot>`: Bao bọc một tập hợp các hàng bảng (`<tr> elements`), cho biết chúng tạo thành phần chân của bảng với thông tin về các cột của bảng.
    *   `<tr>`: Định nghĩa một hàng các ô trong bảng.
    *   `<th>`: Con của phần tử `<tr>`, định nghĩa một ô làm tiêu đề của một nhóm ô bảng.
    *   `<td>`: Con của phần tử `<tr>`, định nghĩa một ô bảng chứa dữ liệu.
    *   `<colgroup>`, `<col>`: `<colgroup>` định nghĩa một nhóm cột trong một bảng. `<col>` định nghĩa một hoặc nhiều cột trong một nhóm cột.

*   **Biểu mẫu (Forms)**
    HTML cung cấp một số phần tử có thể được sử dụng cùng nhau để tạo các biểu mẫu mà người dùng có thể điền và gửi đến trang web hoặc ứng dụng.
    *   `<form>`: Đại diện cho một phần tài liệu chứa các điều khiển tương tác để gửi thông tin.
    *   `<input>`: Được sử dụng để tạo các điều khiển tương tác cho biểu mẫu dựa trên web để chấp nhận dữ liệu từ người dùng.
    *   `<button>`: Một phần tử tương tác được kích hoạt bởi người dùng. Khi được kích hoạt, nó thực hiện một hành động, chẳng hạn như gửi biểu mẫu hoặc mở hộp thoại (`dialog`).
    *   `<label>`: Đại diện cho chú thích (`caption`) cho một mục trong giao diện người dùng.
    *   `<textarea>`: Đại diện cho một điều khiển chỉnh sửa văn bản thuần túy nhiều dòng (`multi-line plain-text editing control`).
    *   `<select>`, `<option>`, `<optgroup>`: `<select>` đại diện cho một điều khiển cung cấp một menu tùy chọn. `<option>` được sử dụng để định nghĩa một mục chứa trong `<select>`. `<optgroup>` tạo một nhóm tùy chọn trong phần tử `<select>`.
    *   `<datalist>`: Chứa một tập hợp các phần tử `<option>` đại diện cho các tùy chọn cho phép hoặc được khuyến nghị có sẵn để chọn trong các điều khiển khác.
    *   `<fieldset>`, `<legend>`: `<fieldset>` được sử dụng để nhóm một số điều khiển cũng như nhãn (`<label>`) trong một biểu mẫu web. `<legend>` đại diện cho chú thích cho nội dung của phần tử `<fieldset>` cha của nó.
    *   `<output>`: Phần tử container mà một trang web hoặc ứng dụng có thể chèn kết quả tính toán hoặc kết quả của một hành động của người dùng.
    *   `<progress>`: Hiển thị một chỉ báo cho thấy tiến trình hoàn thành của một tác vụ, thường được hiển thị dưới dạng thanh tiến trình (`progress bar`).
    *   `<meter>`: Đại diện cho một giá trị vô hướng (`scalar value`) trong một phạm vi đã biết hoặc một giá trị phân số (`fractional value`).

*   **Các phần tử tương tác (Interactive elements)**
    HTML cung cấp một số phần tử giúp tạo các đối tượng giao diện người dùng tương tác.
    *   `<details>`, `<summary>`: `<details>` tạo một widget tiết lộ (`disclosure widget`) trong đó thông tin chỉ hiển thị khi widget được chuyển sang trạng thái "mở". Một tóm tắt hoặc nhãn phải được cung cấp bằng cách sử dụng phần tử `<summary>`.
    *   `<dialog>`: Đại diện cho một hộp thoại (`dialog box`) hoặc thành phần tương tác khác.

*   **Web Components**
    Web Components là một công nghệ liên quan đến HTML giúp tạo và sử dụng các phần tử tùy chỉnh như thể chúng là HTML thông thường.
    *   `<slot>`: Là một phần của bộ công nghệ Web Components, phần tử này là một trình giữ chỗ (`placeholder`) bên trong một thành phần web mà bạn có thể điền bằng mã đánh dấu riêng của mình.
    *   `<template>`: Một cơ chế để giữ HTML không được hiển thị ngay lập tức khi một trang được tải, nhưng có thể được khởi tạo sau đó trong thời gian chạy bằng JavaScript.

*   **Các phần tử lỗi thời và không dùng nữa (Obsolete and deprecated elements)**
    **Cảnh báo:** Đây là các phần tử HTML cũ đã bị bỏ và không nên được sử dụng. **Bạn không bao giờ nên sử dụng chúng trong các dự án mới và bạn nên thay thế chúng trong các dự án cũ càng sớm càng tốt**.
    *   Một số ví dụ: `<acronym>`, `<big>`, `<center>`, `<font>`, `<frame>`, `<frameset>`, `<marquee>`, `<strike>`, `<tt>`.

### 3. Cách sử dụng HTML

Bạn có thể tham khảo về các phần tử HTML ở trên để có cái nhìn tổng quan về những phần tử có sẵn. Bạn không cần phải ghi nhớ tất cả, nhưng việc lướt qua sẽ giúp bạn làm quen và hiểu rõ hơn về chúng khi học sâu hơn.

---

## II. CSS: Tạo kiểu cho tài liệu web

CSS là ngôn ngữ để tạo kiểu và bố cục cho các phần tử HTML. Nó giúp trang web của bạn trông đẹp mắt và phản hồi tốt trên các thiết bị khác nhau.

### 1. Cú pháp cơ bản (Basic Syntax)

Mã CSS cơ bản tuân theo cú pháp sau:
`selector { property: value; property2: value2; }`
*   **Bộ chọn (selector)**: Chỉ định phần tử HTML mà bạn muốn tạo kiểu.
*   **Thuộc tính (property)**: Thuộc tính kiểu mà bạn muốn thay đổi (ví dụ: `color`, `font-size`).
*   **Giá trị (value)**: Giá trị của thuộc tính (ví dụ: `red`, `16px`).

### 2. Cách nhúng CSS vào HTML (Including CSS)

Có ba cách chính để nhúng CSS vào tài liệu HTML:

*   **Nhúng file CSS ngoài (External CSS file)**: Phương pháp phổ biến nhất, cho phép bạn quản lý kiểu dáng riêng biệt với cấu trúc HTML.
    ` <link rel="stylesheet" type="text/css" href="/style.css"/> `
*   **Kiểu nội bộ (Internal styles)**: Đặt mã CSS trong thẻ `<style>` bên trong phần `<head>` của tài liệu HTML. Hữu ích cho các kiểu dáng cụ thể của một trang.
    ` <style type="text/css"> div { color: #444; } </style> `
*   **Kiểu nội tuyến (Inline styles)**: Áp dụng kiểu dáng trực tiếp vào một phần tử HTML bằng thuộc tính `style`. Cách này thường không được khuyến khích cho các dự án lớn vì nó làm cho mã khó quản lý hơn.
    ` <tag style="property: value"> </tag> `

### 3. Mô hình hộp (Box Model)

Mô hình hộp CSS là một khái niệm cơ bản để hiểu cách các phần tử HTML được hiển thị trên trang. Mỗi phần tử HTML được coi là một "hộp" với các thành phần sau, từ trong ra ngoài:
*   **Content**: Nội dung thực tế của phần tử (văn bản, hình ảnh, v.v.).
*   **Padding**: Khoảng đệm giữa nội dung và viền (`border`) của phần tử.
*   **Border**: Viền bao quanh phần đệm và nội dung.
*   **Margin**: Khoảng trống bên ngoài viền, ngăn cách phần tử này với các phần tử khác.

### 4. Bộ chọn (Selectors)

Bộ chọn xác định những phần tử nào được áp dụng một kiểu dáng.

*   **Bộ chọn cơ bản (Basic Selectors)**:
    *   `*`: Chọn **tất cả các phần tử** (`all elements`).
    *   `div`: Chọn **tất cả các thẻ div** (`all div tags`).
    *   `div,p`: Chọn **tất cả các thẻ div và đoạn văn** (`all divs and paragraphs`).
    *   `div p`: Chọn **các đoạn văn bên trong các thẻ div** (`paragraphs inside divs`).
    *   `div > p`: Chọn **tất cả các thẻ p, một cấp sâu trong div** (`all p tags, one level deep in div`).
    *   `div + p`: Chọn **các thẻ p ngay sau div** (`p tags immediately after div`).
    *   `div ~ p`: Chọn **các thẻ p được đặt trước bởi div** (`p tags preceded by div`).

*   **Bộ chọn lớp/ID (Class/ID Selectors)**:
    *   `.classname`: Chọn **tất cả các phần tử có lớp** (`all elements with class`).
    *   `#idname`: Chọn **phần tử có ID** (`element with ID`).
    *   `div.classname`: Chọn **các thẻ div có tên lớp nhất định** (`divs with certain classname`).
    *   `div#idname`: Chọn **thẻ div có ID nhất định** (`div with certain ID`).
    *   `#idname *`: Chọn **tất cả các phần tử bên trong #idname** (`all elements inside #idname`).

*   **Giả lớp (Pseudo-classes)** và **Giả phần tử (Pseudo-elements)**:
    *   `a:link`: Liên kết ở trạng thái bình thường (`link in normal state`).
    *   `a:active`: Liên kết ở trạng thái nhấp (`link in clicked state`).
    *   `a:hover`: Liên kết khi chuột rê qua (`link with mouse over it`).
    *   `a:visited`: Liên kết đã truy cập (`visited link`).
    *   `p::after{content:"yo";}`: Thêm nội dung sau `p` (`add content after p`).
    *   `p::before`: Thêm nội dung trước `p` (`add content before p`).
    *   `input:checked`: Các `input` đã chọn (`checked inputs`).
    *   `input:focus`: `input` đang được tập trung (`input has focus`).
    *   `p:first-child`: Con đầu tiên của cha nó (`first child of its parent`).
    *   `p:nth-child(2)`: Con thứ hai của cha nó (`second child of its parent`).
    *   `:not(span)`: Phần tử không phải `span` (`element that's not a span`).
    *   `::selection`: Phần được người dùng chọn (`portion selected by user`).

*   **Bộ chọn thuộc tính (Attribute selectors)**:
    *   `a[target]`: Các liên kết có thuộc tính `target` (`links with a target attribute`).
    *   `a[target="_blank"]`: Các liên kết mở trong tab mới (`links which open in new tab`).
    *   `[class^="chair"]`: Lớp bắt đầu bằng `chair` (`class starts with chair`).
    *   `[class*="chair"]`: Lớp chứa `chair` (`class contains chair`).
    *   `input[type="button"]`: Kiểu `input` được chỉ định (`specified input type`).

### 5. Các thuộc tính CSS (CSS Properties)

CSS cung cấp một danh sách phong phú các thuộc tính để kiểm soát mọi khía cạnh của việc hiển thị phần tử. Dưới đây là một số nhóm thuộc tính quan trọng:

*   **Thuộc tính hiển thị và bố cục (Display and Layout Properties)**:
    *   `display`: Kiểu hiển thị hộp (`box display type`) (ví dụ: `block`, `inline`, `inline-block`, `flex`, `grid`).
    *   `position`: Kiểu định vị (`positioning type`) (ví dụ: `absolute`, `fixed`, `relative`, `static`).
    *   `top`, `bottom`, `left`, `right`: Khoảng bù (`offset`) cho các phần tử định vị tương đối và tuyệt đối (`relative and absolute elements`).
    *   `float`: Làm nổi các phần tử sang trái hoặc phải (`float elements left or right`).
    *   `clear`: Từ chối làm nổi của một phần tử (`deny floating of an element`).
    *   `z-index`: Thứ tự xếp chồng của phần tử (`stack order of the element`).
    *   `overflow`, `overflow-x`, `overflow-y`: Ẩn, hiển thị hoặc cuộn nếu nội dung tràn ra ngoài container của nó (`hide, display or scroll if the content overflows its container`).
    *   `width`, `height`, `min-width`, `max-width`, `min-height`, `max-height`: Kích thước của phần tử.

*   **Thuộc tính mô hình hộp (Box Model Properties)**:
    *   `margin`, `margin-top`, `margin-right`, `margin-bottom`, `margin-left`: Đặt lề (`margins`) cho phần tử.
    *   `padding`, `padding-top`, `padding-right`, `padding-bottom`, `padding-left`: Đặt khoảng đệm (`padding`) giữa viền phần tử và nội dung.
    *   `border`, `border-style`, `border-width`, `border-color`, `border-radius`: Đặt viền và bán kính bo góc (`border radius`).
    *   `box-sizing`: Thuộc tính điều chỉnh cách tính kích thước tổng thể của phần tử, bao gồm `padding` và `border` trong `width` và `height`.

*   **Thuộc tính văn bản và font chữ (Text and Font Properties)**:
    *   `color`: Màu văn bản (`text color`).
    *   `font`, `font-family`, `font-size`, `font-weight`, `font-style`, `font-variant`, `font-size-adjust`, `font-stretch`: Các thuộc tính liên quan đến font chữ.
    *   `text-align`: Căn chỉnh văn bản theo chiều ngang (`horizontal alignment of text`).
    *   `text-decoration`: Gạch trên (`overline`), gạch chân (`underline`) hoặc gạch ngang (`line-through`) văn bản.
    *   `text-indent`: Thụt lề dòng đầu tiên của văn bản (`indentation of the first line of the text`).
    *   `text-transform`: Viết hoa văn bản (`capitalization of text`).
    *   `text-shadow`: Bóng văn bản (`text shadow`).
    *   `line-height`: Chiều cao dòng của văn bản hoặc các phần tử `inline-block`.
    *   `letter-spacing`: Khoảng cách giữa các ký tự (`space between characters`).
    *   `word-spacing`: Kích thước của khoảng trắng giữa các từ (`size of white space between words`).
    *   `white-space`: Cách xử lý khoảng trắng (`how are white-spaces handled`).
    *   `word-break`: Quy tắc ngắt văn bản khi văn bản đạt đến cuối container (`text breaking rules when text reaches the end of the container`).
    *   `word-wrap`: Ngắt các từ dài và xuống dòng tiếp theo (`break long words and wrap onto the next line`).

*   **Thuộc tính nền (Background Properties)**:
    *   `background`: Tất cả các thuộc tính nền trong một khai báo (`all background properties in one declaration`).
    *   `background-color`: Màu nền (`background color`).
    *   `background-image`: Hình ảnh nền (`background image`).
    *   `background-position`: Vị trí bắt đầu của hình ảnh nền (`starting position of the background image`).
    *   `background-repeat`: Cách hình ảnh nền được lặp lại (`the way the background image is repeated`).
    *   `background-size`: Kích thước hình ảnh nền (`background image size`).
    *   `background-attachment`: Hình ảnh nền cố định hay cuộn (`is the background image fixed or scrolls`).
    *   `background-blend-mode`: Chế độ pha trộn của mỗi lớp nền (`blending mode of each background layer`).

*   **Hoạt ảnh và Chuyển đổi (Animation and Transition Properties)**:
    *   `animation`, `@keyframes`: Gắn một hoạt ảnh vào một phần tử, chỉ định mã hoạt ảnh.
    *   `animation-delay`, `animation-direction`, `animation-duration`, `animation-fill-mode`, `animation-iteration-count`, `animation-name`, `animation-play-state`, `animation-timing-function`: Các thuộc tính kiểm soát hoạt ảnh.
    *   `transition`: Các thuộc tính chuyển đổi trong một dòng (`transition properties in one line`).
    *   `transition-delay`, `transition-duration`, `transition-property`, `transition-timing-function`: Các thuộc tính kiểm soát hiệu ứng chuyển đổi.

*   **Biến đổi (Transform Properties)**:
    *   `transform`: Biến đổi 2D 3D (`2D 3D transformation`).
    *   `transform-origin`: Thay đổi vị trí của các phần tử đã biến đổi (`changes the position of transformed elements`).
    *   `transform-style`: Hiển thị các phần tử lồng nhau trong 3D (`render nested elements in 3D`).

*   **Các thuộc tính khác**:
    *   `opacity`: Mức độ trong suốt của một phần tử (`transparency level of an element`).
    *   `box-shadow`: Bóng đổ cho phần tử (`shadow to element`).
    *   `cursor`: Loại con trỏ khi phần tử được rê chuột qua (`cursor type when element is hovered`).
    *   `filter`: Hiệu ứng hình ảnh (ví dụ: `grayscale`, `blur`, `invert`).

### 6. Media Queries (Truy vấn phương tiện)

**Media queries** được sử dụng để định nghĩa các kiểu dáng khác nhau cho các loại phương tiện và tính năng khác nhau, cho phép thiết kế đáp ứng (`responsive design`).

*   **Cú pháp (Syntax)**:
    `@media not|only mediatype and (media feature) { CSS Code }`
*   **Liên kết file CSS ngoài (Link external file)**:
    ` <link rel="stylesheet" media="mediatype and|not|only (media feature)" href="mystylesheet.css"> `
*   **Ví dụ**:
    *   **Khung nhìn rộng 480 pixel hoặc nhỏ hơn (Viewport is 480 pixels or smaller)**:
        ` @media screen and (max-width: 480px) { /* CSS Code */ } `
    *   **Chiều rộng khung nhìn nhỏ hơn HOẶC chiều cao nhỏ hơn (Viewport width smaller OR height smaller)**:
        ` @media screen and (max-width: 600px), (max-height: 500px) { /* CSS Code */ } `
    *   **Kiểu in (Print style)**:
        ` @media print { /* CSS Code */ } `
    *   **Chế độ ban đêm / tối (Night / dark mode)**:
        ` @media (prefers-color-scheme: dark) { /* CSS Code */ } `
*   **Các loại phương tiện (Media types)**:
    *   `all`: Dành cho tất cả các thiết bị.
    *   `print`: Dành cho máy in.
    *   `screen`: Dành cho màn hình máy tính, máy tính bảng, điện thoại.
    *   `speech`: Dành cho bộ đọc màn hình.
*   **Các tính năng phương tiện (Media features)**:
    *   `width`: Chiều rộng khung nhìn (`viewport width`).
    *   `height`: Chiều cao khung nhìn (`viewport height`).
    *   `orientation`: Hướng của khung nhìn (`orientation of the viewport`).
    *   `aspect-ratio`: Tỷ lệ giữa chiều rộng và chiều cao (`ratio between width & height`).
    *   `color`, `color-index`, `monochrome`, `resolution`, `scan`, `grid`: Các tính năng khác liên quan đến khả năng hiển thị của thiết bị.

### 7. Reset CSS

**Reset CSS** là một đoạn mã ngắn được thêm vào đầu biểu định kiểu của bạn. Mục đích của nó là **đảm bảo rằng trang của bạn sẽ trông giống nhau trên tất cả các trình duyệt** bằng cách loại bỏ các kiểu mặc định khác nhau mà các trình duyệt có thể áp dụng.
Ví dụ về mã Reset CSS cơ bản:
` html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video { margin: 0; padding: 0; border: 0; font-size: 100%; font: inherit; vertical-align: baseline; } `

### 8. Các công cụ tạo kiểu hữu ích (Useful Style Generators)

Các công cụ tương tác sau có thể giúp bạn tạo mã CSS nhanh chóng và dễ dàng, đồng thời cung cấp bản xem trước trực tiếp (`live preview`):

*   **Công cụ chọn màu (Color picker)**: Cho phép bạn chọn màu bằng mã hex (`hex code`) và điều chỉnh độ trong suốt (`transparency`).
*   **Trình tạo nền CSS (CSS background generator)**: Tùy chỉnh URL hình ảnh nền, vị trí, lặp lại, đính kèm và màu sắc.
*   **Trình tạo gradient (Gradient generator)**: Đặt hai và tùy chọn một màu chuyển tiếp thứ ba để tạo mã CSS gradient.
*   **Trình tạo đổ bóng hộp (Box shadow generator)**: Tạo mã CSS cho đổ bóng hộp `inset` hoặc `outset`, tùy chỉnh `right` và `down offset`, `spread`, `blur`, `color` và `opacity`.
*   **Trình tạo nút CSS (CSS button generator)**: Tạo kiểu cho các nút HTML, điều chỉnh kích thước, khoảng đệm (`padding`), bán kính (`radius`), màu sắc và độ trong suốt.
*   **Trình tạo đổ bóng văn bản (Text shadow generator)**: Tạo mã CSS cho đổ bóng văn bản bằng cách đặt màu, độ trong suốt, độ mờ (`blur`), dịch chuyển (`shift`) sang phải và xuống, hoặc chọn một kiểu được xác định trước.
*   **Trình tạo kiểu font (Font style generator)**: Chọn `font-family`, `size`, khoảng cách chữ cái (`letter spacing`) và từ (`word spacing`), `color`, `font-weight`, `decoration`, `style`, `variant` và `case` cho font của bạn.
*   **Trình tạo biến đổi CSS (CSS transform generator)**: Thay đổi kích thước (`scale`), xoay (`rotate`), dịch chuyển (`shift`) và làm xiên (`skew`) các phần tử HTML.
*   **Trình tạo viền và đường viền ngoài (CSS border and outline generator)**: Đặt các thuộc tính cho viền hoặc đường viền ngoài của hộp.
*   **Trình tạo bán kính viền (Border radius generator)**: Áp dụng bán kính viền cho các góc của phần tử, đặt chung hoặc cho từng góc riêng lẻ.
*   **Máy tính PX - EM (Pixel - EM calculator)**: Tính toán giá trị `em` hoặc `px` dựa trên kích thước pixel của phần tử cha.

### 9. Cách sử dụng cheat sheet CSS

Cheat sheet CSS là một tài nguyên tương tác tiện lợi. Bạn có thể thử nghiệm các kiểu đã tạo bằng cách nhấp vào các mũi tên màu xanh chỉ xuống, điều này sẽ điền mã CSS của bạn và một mã HTML demo vào trình chỉnh sửa HTML-CSS tương tác ở cuối trang, cung cấp cho bạn bản xem trước trực tiếp để kiểm tra và điều chỉnh mã thêm. Việc lướt qua cheat sheet này sẽ giúp bạn cảm nhận được những gì bạn còn phải học trong CSS.

---

## III. Mối liên hệ và Lộ trình học tập

**HTML và CSS hoạt động cùng nhau**: HTML tạo ra cấu trúc và nội dung của trang web, trong khi CSS làm cho nó trở nên đẹp mắt và có tổ chức. Để xây dựng một trang web hoàn chỉnh, bạn cần cả hai ngôn ngữ này.

**Học tập chuyên sâu**: Khóa học này (The Odin Project) được thiết kế để đưa bạn đi sâu hơn vào HTML và CSS sau khi bạn đã nắm vững các kiến thức nền tảng. Bạn sẽ học về các phần tử HTML quan trọng hơn như **biểu mẫu (`forms`) và bảng (`tables`)**. Về CSS, bạn sẽ khám phá **biến (`variables`), hàm (`functions`), bóng đổ (`shadows`) và đặc biệt là bố cục lưới (`grid layouts`)**. Các chủ đề nâng cao hơn như **hoạt ảnh (`animations`), khả năng truy cập (`accessibility`) và thiết kế đáp ứng (`responsive design`)** sẽ được học ở phần thứ hai của khóa học.

**Mục tiêu cuối cùng**: Khi hoàn thành khóa học này, bạn sẽ có khả năng tái tạo hầu hết mọi thiết kế web mà bạn tìm thấy trên internet. Đây là một kỹ năng quan trọng, giúp bạn tạo ra các sản phẩm portfolio đẹp mắt và nổi bật, ngay cả khi bạn không theo đuổi một công việc chuyên về `front-end`.

---




## Tài liệu phải đọc khi ĐÓNG CỌC LẦN 2
>2. https://developer.mozilla.org/en-US/docs/Web/HTML/Element  
>3. https://htmlcheatsheet.com/css/  

> ⭐ **Theo dõi [kênh Threads](https://www.threads.com/@kaitaku.88) để đọc bài mới mỗi ngày!** ⭐  

**[<== Bài Trước  ](link)          |[  Trang Chủ  ](./README.md)|           [  Bài Sau ==>](link)**