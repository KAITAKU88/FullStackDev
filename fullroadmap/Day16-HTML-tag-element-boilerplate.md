# **`Ngày 16/365: HTML Boilerplate (mẫu HTML chuẩn) - Element - Tag`**


# **`A. Elements (Phần tử/Thành phần) và Tags (Thẻ, Thẻ Tag)`**

HTML (Ngôn ngữ đánh dấu siêu văn bản) định nghĩa cấu trúc và nội dung của trang web. Chúng ta sử dụng các thành phần HTML để tạo tất cả các đoạn văn, tiêu đề, danh sách, hình ảnh và liên kết tạo nên một trang web thông thường. Trong bài học này, chúng ta sẽ khám phá cách các thành phần HTML hoạt động.

## **`1. Elements và tags`**
Hầu như tất cả các phần tử (elements ) trên trang HTML chỉ là các phần nội dung được gói trong các thẻ HTML mở và đóng (opening and closing HTML tags).

Các thẻ mở (Opening tags) gồm một từ khóa được đặt trong dấu ngoặc nhọn `<>`. Ví dụ: thẻ mở bắt đầu 1 đoạn văn (paragraph) trông như thế này:` <p>`. Chúng báo cho trình duyệt biết đây là phần bắt đầu của một phần tử HTML (HTML element).

Thẻ đóng (Closing tags) báo cho trình duyệt biết nơi phần tử kết thúc. Chúng gần giống như thẻ mở; điểm khác biệt duy nhất là chúng có dấu gạch chéo trước (forward slash) đứng trước từ khóa. Ví dụ, thẻ đóng của đoạn văn trông như thế này: `</p>`.

Như vậy Element bao gồm Tags và Nội dung được bọc trong Tags

Phần tử đoạn văn bản đầy đủ trông như thế này:
```html
<p>some text content</p>
```
Bạn có thể nghĩ về các elements như các thùng chứa (containers ) nội dung. Các thẻ mở và đóng cho trình duyệt biết elements chứa nội dung gì. Sau đó, trình duyệt có thể sử dụng thông tin đó để xác định cách diễn giải và định dạng nội dung đó.

HTML có [**`danh sách dài các thẻ được xác định trước`**](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements) mà bạn có thể sử dụng để tạo ra đủ loại elements khác nhau. Điều quan trọng là phải sử dụng đúng thẻ cho nội dung. Sử dụng đúng thẻ tags có thể tác động lớn đến hai khía cạnh của trang web của bạn: cách chúng được xếp hạng (rank) trong công cụ tìm kiếm; và mức độ dễ tiếp cận của chúng đối với người dùng dựa vào các công nghệ hỗ trợ, như trình đọc màn hình (screen readers), để sử dụng internet.
### Semantic HTML
Sử dụng đúng tags cho nội dung được gọi là semantic HTML. "Semantic HTML" (HTML ngữ nghĩa) là cách sử dụng các thẻ tag HTML phù hợp với ý nghĩa và mục đích của nội dung, giúp trình duyệt, công cụ tìm kiếm (SEO) và các công nghệ hỗ trợ (như trình đọc màn hình cho người khuyết tật) hiểu rõ cấu trúc và vai trò của từng phần trong trang web.

### Ví dụ về Semantic HTML:
- `<header>`: Phần đầu trang hoặc section.

- `<nav>`: Thanh điều hướng.

- `<main>`: Nội dung chính của trang.

- `<article>`: Bài viết độc lập (blog, tin tức).

- `<section>`: Phân chia các đoạn nội dung liên quan.

- `<footer>`: Chân trang.

### Non-semantic HTML:
Các thẻ như` <div>` hay` <span>` không mang ý nghĩa cụ thể, chỉ dùng để nhóm nội dung về mặt hiển thị.

Cụ thể sẽ được học sâu hơn trong các bài tiếp theo.
## **`2. Void Elements (Phần tử không có nội dung)`**
Void nghĩa là rỗng, trống vắng, thiếu.

Một số phần tử HTML không có closing tag. Những phần tử này chỉ có một tag duy nhất, như: `<br>` hoặc `<img>`. Chúng được gọi là phần tử void (void element) vì chúng không có bất kỳ nội dung nào bên trong VÀ Không có closing tag có nghĩa là chúng không thể bao bọc nội dung như các thẻ khác.

### Self-Closing Tags (Thẻ tự đóng)
Cách viết thêm dấu / trước dấu > ở cuối void elements, ví dụ:` <br />`, `<img />`. Nguồn gốc Bắt nguồn từ XHTML (một phiên bản HTML dựa trên XML, yêu cầu tất cả thẻ phải được đóng), nên void elements được viết thành `<br />` để tuân thủ.

Tuy nhiên với phiên bản mới nhất của HTML là HTML5 không yêu cầu dấu / với void elements (chỉ cần viết `<br>`). Mặc dù Trình duyệt vẫn hiểu `<br />` (do tương thích ngược), nhưng khuyến nghị bỏ / để tuân thủ chuẩn hiện đại. Thẻ tự đống là Invalid trong HTML5: Mặc dù trình duyệt vẫn hoạt động, nhưng về mặt đặc tả kỹ thuật, nó không hợp lệ (ví dụ: `<img />` bị coi là lỗi cú pháp nếu kiểm tra bằng validator).

# **`B. HTML Boilerplate (mẫu HTML chuẩn)`**
Tất cả các tài liệu HTML đều có cùng cấu trúc cơ bản hoặc boilerplate (Mẫu HTML chuẩn) cần phải có trước khi có thể thực hiện bất kỳ điều gì hữu ích. Trong bài học này, chúng ta sẽ khám phá các phần khác nhau của boilerplate này và xem cách chúng kết hợp với nhau.
## 1. Vậy Boilerplate là gì?
Về mặt lịch sử từ này xuất hiện trong ngành in ấn từ thế kỷ 19, nó là tấm thép dùng để in các nội dung tiêu chuẩn (ví dụ: điều khoản pháp lý) mà không cần chỉnh sửa. Từ những năm 1950, khi áp dụng vào lập trình thì thuật ngữ “boilerplate code" được dùng để chỉ đoạn code lặp lại nhiều lần mà không thay đổi (ví dụ: khai báo ban đầu, cấu trúc cơ bản).

→ `HTML Boilerplate là phần code cố định, bắt buộc ở mọi trang web (như <!DOCTYPE html>, <meta charset>), giống như "khung xương" không thể thiếu`.

## 2. Tạo 1 file HTML
Để minh họa một HTML boilerplate, trước tiên chúng ta cần một tệp HTML để làm việc. Tạo một thư mục mới trên máy tính của bạn và đặt tên là html-boilerplate. Trong thư mục đó, hãy tạo một tệp mới và đặt tên là index.html.

*(Tôi đã tạo 1 repo tên là html-boilerplate trên GitHub rồi clone về máy tính cá nhân, sau đó dùng lệnh touch để tạo file index.html)*

Có lẽ bạn đã quen thuộc với nhiều loại tệp khác nhau, ví dụ như tệp .doc, .pdf và hình ảnh. Để máy tính biết chúng ta muốn tạo tệp HTML, chúng ta cần thêm phần mở rộng .html vào tên tệp, giống như chúng ta đã làm khi tạo tệp index.html vừa xong.

Cần lưu ý rằng chúng ta đã đặt tên tệp HTML của mình là index. Chúng ta nên luôn đặt tên tệp HTML sẽ chứa trang chủ của trang web index.html. Điều này là do theo mặc định, máy chủ web sẽ tìm kiếm trang index.html khi người dùng truy cập vào trang web của chúng ta – và nếu không có trang này sẽ gây ra sự cố lớn.

## 3. The DOCTYPE
Mỗi trang HTML đều bắt đầu bằng một khai báo doctype (doctype declaration). Mục đích của doctype là cho trình duyệt biết phiên bản HTML nào cần sử dụng để hiển thị tài liệu. Phiên bản HTML mới nhất là HTML5 và doctype cho phiên bản đó là `<!DOCTYPE html>.`

Các doctype cho các phiên bản HTML cũ hơn phức tạp hơn một chút. Ví dụ: đây là khai báo doctype cho HTML4:
```
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
```
Tuy nhiên, chúng ta có lẽ sẽ không bao giờ muốn sử dụng phiên bản HTML cũ hơn, vì vậy chúng ta sẽ luôn sử dụng `<!DOCTYPE html>.`

Mở tệp index.html được tạo trước đó trong trình soạn thảo văn bản của bạn và thêm `<!DOCTYPE html> `vào dòng đầu tiên.


## 4.  `<html> element`
Sau khi khai báo `doctype`, chúng ta cần cung cấp một phần tử <html>. Đây là được gọi là phần tử gốc của tài liệu (root element of the document), nghĩa là mọi phần tử khác trong tài liệu sẽ là phần tử con của phần tử đó.

Điều này trở nên quan trọng hơn sau này khi chúng ta tìm hiểu về cách thao tác HTML bằng JavaScript. Hiện tại, chỉ cần biết rằng phần tử `<html>` phải được đưa vào mọi tài liệu HTML.

Quay lại tệp `index.html`, hãy thêm phần tử `<html>` bằng cách nhập thẻ mở và thẻ đóng của phần tử đó, như sau:
```html
<!DOCTYPE html>
<html lang="en">
</html>
```
Bạn có để ý từ `lang` ở đây không? Nó biểu thị một thuộc tính HTML (HTML attribute) được liên kết với thẻ HTML (HTML tag) đã cho, tức là trong trường hợp này thuộc tính lang liên kết với `<html>` tag. Các thuộc tính này cung cấp thông tin bổ sung về các HTML elements. (Thông tin về các thuộc tính HTML trong bài học sau.)

**Lưu ý:**
- HTML elements là nói chung các phân tử HTML, có rất nhiều phần tử.

- Còn `<html>` element là nói đến 1 phần tử cụ thể là `<html>`

- HTML elements: Phần tử HTML

- HTML tags: Thẻ HTML

- HTML attribute: Thuộc tính HTML

**Thuộc tính lang (lang attribute)**  
lang chỉ định ngôn ngữ của nội dung văn bản trong element đó. Thuộc tính này chủ yếu được sử dụng để cải thiện khả năng truy cập của trang web. Nó cho phép các công nghệ hỗ trợ, ví dụ như trình đọc màn hình, thích ứng theo ngôn ngữ và gọi cách phát âm chính xác.

## `5. <head> element`
Phần tử `<head>` là nơi chúng ta đặt thông tin meta (meta-information) quan trọng về các webpages và những thứ cần thiết để các webpages này hiển thị chính xác trong trình duyệt. Bên trong `<head>`, chúng ta không nên sử dụng bất kỳ element nào có tác dụng hiển thị nội dung trên webpage (các elements này nên được dùng trong phần tử`<body>`).

Quay lại tệp index.html của chúng ta, hãy thêm phần tử `<head>` nằm trong phần tử `<html>` và luôn phải là phần tử đầu tiên bên dưới thẻ mở `<html`>. Bên trong nội dung của phần tử `<head>` thêm phần tử `<meta>` và và phần từ `<title>` bên trong:
```html
<!DOCTYPE html>

<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>My First Webpage</title>
  </head>
</html>
```

**`<meta> element`**  
Chúng ta nên luôn có thẻ `<meta>` trong phần tử `<head>` với thuộc tính `charset="UTF-8"`.

Việc thiết lập mã hóa rất quan trọng vì nó đảm bảo rằng trang web sẽ hiển thị đúng các ký hiệu và ký tự đặc biệt từ các ngôn ngữ khác nhau trong trình duyệt. Ví dụ nếu không khai báo charset="UTF-8" thì trang web có thể hiện thị chữ tiếng Việt bị lỗi font.

UTF-8 (Unicode Transformation Format - 8-bit) là bảng mã Unicode phổ biến nhất trên web, hỗ trợ hầu hết ngôn ngữ trên thế giới.

**`<title> element`**  
Một element khác mà chúng ta luôn phải đưa vào phần đầu của một tài liệu HTML là thành phần `<title>`:
```html
<title>My First Webpage</title>
```
Thành phần `<title>` được sử dụng để cung cấp cho các trang web một tiêu đề dễ đọc, được hiển thị trong tab trình duyệt của trang web. Nếu chúng ta không đưa vào thành phần `<title>`, tiêu đề của trang web sẽ mặc định là tên tệp của nó. Trong trường hợp của chúng ta, đó sẽ là index.html, không có nhiều ý nghĩa đối với người dùng; điều này sẽ khiến việc tìm trang web của chúng ta trở nên rất khó khăn nếu người dùng mở nhiều tab trình duyệt.

Có nhiều elements khác có thể nằm trong phần đầu của một tài liệu HTML. Tuy nhiên, hiện tại, điều quan trọng là phải biết về hai thành phần mà chúng ta đã đề cập ở trên. Các elements khác sẽ được học trong các bài sau.


## **`6. <body> element`**
Phần tử cuối cùng cần thiết để hoàn thành mẫu HTML là phần tử `<body>`. Đây là nơi chứa tất cả nội dung sẽ được hiển thị cho người dùng - văn bản, hình ảnh, danh sách, liên kết, v.v.

Để hoàn thành mẫu, hãy thêm phần tử `<body>` vào tệp index.html. Phần tử `<body>` cũng nằm trong phần tử` <html>` và luôn nằm bên dưới phần tử `<head>`, như sau:
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>My First Webpage</title>
  </head>

  <body>
  </body>
</html>
```
## **`7. Xem các file HTML trong trình duyệt`**
Mẫu HTML trong tệp index.html đã hoàn tất tại thời điểm này, nó sẽ nhìn như thế này:
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>My First Webpage</title>
  </head>

  <body>

  </body>
</html>
```
Nhưng làm thế nào để bạn xem nó trong trình duyệt? Có một vài tùy chọn khác nhau:
> Lưu ý là trong suốt toàn bộ các bài học chúng ta sẽ sử dụng trình duyệt Google Chrome.

1. Bạn có thể kéo và thả tệp HTML từ trình soạn thảo văn bản vào thanh địa chỉ của trình duyệt.

1. Bạn có thể tìm tệp HTML trong hệ thống tệp của mình rồi nhấp đúp vào tệp đó. Thao tác này sẽ mở tệp trong trình duyệt mặc định mà hệ thống của bạn sử dụng.

1. Bạn có thể sử dụng terminal để mở tệp trong trình duyệt của mình:

    - Ubuntu: Điều hướng đến thư mục chứa tệp và nhập google-chrome index.html

    - macOS: Điều hướng đến thư mục chứa tệp và nhập open ./index.html

    - WSL (Window Subsystem Linux): Điều hướng đến thư mục chứa tệp và nhập explorer.exe index.html. Lưu ý, thao tác này sẽ mở tệp trong trình duyệt mặc định mà hệ thống của bạn sử dụng.

1. Một tùy chọn khác để mở các trang HTML của bạn trong trình duyệt là sử dụng [**`tiện ích mở rộng Live Preview cho VSCode`**](https://marketplace.visualstudio.com/items?itemName=ms-vscode.live-server). Tiện ích này sẽ mở tài liệu HTML của bạn và tự động làm mới mỗi khi bạn lưu tài liệu. Tuy nhiên, chúng tôi khuyên bạn không nên sử dụng tiện ích mở rộng này mà thay vào đó hãy thực hiện theo cách cũ, bằng cách mở trang và làm mới trang theo cách thủ công trong trình duyệt cho một vài dự án HTML đầu tiên của bạn. Theo cách này, bạn có thể quen với quy trình đó và sẽ không phụ thuộc vào tiện ích mở rộng ngay lập tức.

Xem những bài đầu tiên để biết cách cài đặt WSL cho Window.

Sử dụng một trong các phương pháp trên, mở tệp index.html mà chúng ta đã làm việc. Bạn sẽ thấy màn hình trống. Điều này là do chúng ta không có bất kỳ thứ gì trong phần `<body>` để hiển thị.

Quay lại tệp index.html, hãy thêm một tiêu đề bằng cách nhập `<h1>Hello World!</h1>` (sẽ nói thêm về những tiêu đề này sau) vào phần `<body>` và lưu tệp:
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>My First Webpage</title>
  </head>

  <body>
    <h1>Hello World!</h1>
  </body>
</html>
```
Bây giờ, nếu bạn làm mới trang trên trình duyệt, bạn sẽ thấy những thay đổi có hiệu lực và tiêu đề “Hello World!” sẽ được hiển thị.


## **`8. VSCode shortcut (Phím tắt của VSCode)`**
VSCode có một phím tắt tích hợp mà bạn có thể sử dụng để tạo toàn bộ boilerplate cùng một lúc. Xin lưu ý rằng phím tắt này chỉ hoạt động khi chỉnh sửa tệp có phần mở rộng .html hoặc tệp văn bản đã chọn ngôn ngữ HTML. Để kích hoạt phím tắt, hãy xóa mọi thứ trong tệp index.html và chỉ cần nhập` !` vào dòng đầu tiên. Thao tác này sẽ đưa ra một vài tùy chọn. Nhấn phím Enter để chọn tùy chọn đầu tiên và bạn sẽ có toàn bộ boilerplate được điền sẵn cho mình.

Bạn có thể nhận thấy boilerplate được tạo ra bởi phím tắt này bao gồm một dòng mà chúng tôi chưa đề cập đến:
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
Đây không phải là điều chúng ta cần biết cho đến khi chúng ta thảo luận về Responsive Design (Thiết kế đáp ứng), một chủ đề nâng cao liên quan đến các kích thước màn hình khác nhau mà chúng ta sẽ đề cập sau trong chương trình giảng dạy. Hiện tại, bạn có thể để nguyên dòng đó.

Biết cách tự viết boilerplate vẫn tốt trong trường hợp bạn thấy mình đang sử dụng trình soạn thảo văn bản như notepad, vì trình soạn thảo này không có phím tắt này. Cố gắng không sử dụng phím tắt trong một vài dự án HTML đầu tiên của bạn, để bạn có thể xây dựng một số trí nhớ cơ bắp để viết mã boilerplate.

## **`9. W3 HTML validator`**
Chạy boilerplate của bạn thông qua trình xác thực HTML W3. Trình xác thực (Validators ) đảm bảo đánh dấu (markup) của bạn là chính xác và là một công cụ học tập tuyệt vời, vì chúng cung cấp phản hồi (feedback) về các lỗi cú pháp (syntax errors) mà bạn có thể mắc phải thường xuyên và không biết, chẳng hạn như thiếu thẻ đóng và khoảng trắng thừa trong HTML của bạn. 
