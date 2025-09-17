# Day 47: String methods 
Tài liệu tham khảo đầy đủ ở đây: MDN documentation for strings

# 1. Các Ký tự đặc biệt
Bạn vẫn có thể tạo chuỗi nhiều dòng với dấu ngoặc đơn và dấu ngoặc kép bằng cách sử dụng cái gọi là "newline character", được viết là \n, biểu thị ngắt dòng. Khi JavaScript gặp ký tự này nó sẽ xuống dòng mới :

let guestList = "Guests:\n * John\n * Pete\n * Mary";

alert(guestList); // a multiline list of guests, same as above
Một ví dụ đơn giản hơn, hai dòng này giống nhau, chỉ khác nhau về cách viết:

let str1 = "Hello\nWorld"; // 2 dòng sử dụng "newline symbol"

// 2 dòng sử dụng backticks 
let str2 = `Hello
World`;

alert(str1 == str2); // true
Có những ký tự đặc biệt khác ít phổ biến hơn:

\n xuống dòng mới

\r là carriage return — nghĩa là quay đầu về đầu dòng, không xuống dòng. Khi bạn dùng \r trong chuỗi, con trỏ in (cursor) sẽ quay về vị trí đầu dòng, ghi đè lên nội dung cũ — chứ không tạo dòng mới như \n. Ví dụ:

console.log("Hello\rWorld"); //World 
"Hello\rWorld" nghĩa là:

In "Hello"

Sau đó \r → con trỏ quay về đầu dòng

In "World" → ghi đè lên "Hello" ⇒ "Worldo" (nhưng vì "World" có 5 ký tự, nên "Hell" bị đè hết)

\r\n Trong Windows, ký tự xuống dòng là hai ký tự liên tiếp: \r\n. Trong Unix, Linux, macOS, chỉ cần \n là đủ. Lý do là lịch sử phát triển hệ điều hành khác nhau, không phải do JavaScript. JavaScript (và trình duyệt hiện đại) hiểu được cả \n và \r\n, nhưng bạn nên chỉ dùng \n để viết mã cho đa nền tảng.

\', \", \` Khi cần đặt dấu nháy bên trong chuỗi, phải thêm dấu \ để thoát ký tự đặc biệt:

\\ Vì \ được dùng để báo hiệu "ký tự đặc biệt", nên nếu bạn muốn in dấu \ thật sự, bạn phải dùng \\: console.log("C:\\Users\\Name");

\t Chèn một khoảng trắng giống như khi bạn bấm phím Tab: console.log("Name:\tJohn");

\b, \f, \v Các ký tự cũ ít dùng, có thể bỏ qua

Như bạn có thể thấy, tất cả các ký tự đặc biệt đều bắt đầu bằng ký tự gạch chéo ngược (backslash character) \. Nó cũng được gọi là "ký tự thoát (escape character)".

Một câu hỏi đặt ra là: Làm thế nào để in ra dấu nháy đơn ‘, nháy kép “ hoặc nháy ngược `, hãy xem ví dụ:

console.log('''); //lỗi
console.log("""); //lỗi
console.log(```); //lỗi

// Giải pháp sử dụng ký tự thoát \
console.log('\''); //'
console.log("\""); //"
console.log(`\``); //`

//Giải pháp sử dụng cặp dấu khác so với dấu muốn in ra
console.log('"'); //"
console.log("'"); //'
console.log("`"); //`
Tức là 1 giải pháp đơn giản hơn so với dùng dấu thoát là dùng các cặp dấu khác so với dấu muốn in ra.

# 2. Chiều dài của chuỗi
Thuộc tính length trả về chiều dài của chuỗi:

alert( `My\n`.length ); // 3
Lưu ý rằng \n là một ký tự “đặc biệt” duy nhất, do đó độ dài thực tế của chuỗi trên là 3.

Những người có nền tảng về một số ngôn ngữ khác đôi khi gõ sai bằng cách gọi str.length() thay vì chỉ gọi str.length. Điều đó không hiệu quả.

Xin lưu ý rằng str.length là một thuộc tính số, không phải là một hàm. Không cần thêm dấu ngoặc đơn sau nó. Không phải .length(), mà là .length.

# 3. Trích xuất 1 ký tự trong chuỗi
Có 4 method để trích xuất các ký tự của 1 chuỗi:

at(pos) trả về ký tự tại vị trí pos, cho phép dùng pos âm. Đây là 1 method mới được bổ sung vào JS

charAt(pos) trả về ký tự tại vị trí pos, pos phải dương

charCodeAt(pos) trả về mã UTF-16 của ký tự tại vị trí pos (một số nguyên từ 0 đến 65535)

str[pos] trả về ký tự tại vị trí pos, pos phải dương

Ký tự đầu tiên của chuỗi bắt đầu từ vị trí số 0:

let str = `Hello`;

// the first character
alert( str[0] ); // H
alert( str.at(0) ); // H

// the last character
alert( str[str.length - 1] ); // o
alert( str.at(-1) );
Như bạn thấy, phương thức .at(pos) có lợi thế là cho phép vị trí âm. Nếu pos là số âm, thì nó được tính từ cuối chuỗi. Vì vậy, .at(-1) có nghĩa là ký tự cuối cùng và .at(-2) là ký tự trước nó, v.v.

Dấu ngoặc vuông […] luôn trả về undefined cho các chỉ mục âm, ví dụ:

let str = `Hello`;

alert( str[-2] ); // undefined
alert( str.at(-2) ); // l
Chúng ta cũng có thể lặp qua các ký tự bằng cách sử dụng for...of:

for (let char of "Hello") {
  alert(char); // H,e,l,l,o 
}
Lưu ý với [pos]
Nó làm cho string trông giống như 1 mảng (Array), nhưng không phải vậy.

Nếu một ký tự không được tìm thấy , [ ] trả về undefined, trong khi charAt() trả về một empty string.

Nó là chỉ đọc (read only). str[0] = "A" không gây ra lỗi nhưng sẽ không hoạt động.

# 4. Strings bất biến (immutable)
Tất cả các Chuỗi là nguyên thủy (primitive) và bất biến (immutable) trong JavaScript. Không thể thay đổi một ký tự của chuỗi.

Tất cả các phương thức xử lý chuỗi đều tạo ra một chuỗi mới mà không làm thay đổi chuỗi gốc.

Ví dụ:

let str = 'Hi';

str[0] = 'h'; // error
alert( str[0] ); // doesn't work
Giải pháp thông thường là tạo một chuỗi hoàn toàn mới và gán nó cho str thay vì chuỗi cũ:

let str = 'Hi';

str = 'h' + str[1]; // replace the string

alert( str ); // hi
# 5. Changing the case (đổi viết hoa/thường)
Các methods toLowerCase() và toUpperCase() thay đổi chuỗi thành viết hoa và viết thường:

alert( 'Interface'.toUpperCase() ); // INTERFACE
alert( 'Interface'.toLowerCase() ); // interface
Hoặc, nếu chúng ta muốn một ký tự đơn được viết thường:

alert( 'Interface'[0].toLowerCase() ); // 'i'
Phân biệt Method và Function
Về bản chất thì method cũng là các function. Chỉ khác là khi nói đến function là nói chung, là độc lập. Còn method tức là function đặt bên trong 1 đối tượng (object).

Cho nên khi nói đến 1 method tức là dùng method đó cho 1 đối tượng nào đó. Ví dụ 1 chuỗi là 1 đối tượng, và đối tượng này có method là .length. Tức là phải dùng .length cho 1 chuỗi nào đó, chứ không thể dùng .length độc lập được.

# 6. Searching for a substring (Tìm kiếm 1 chuỗi con)
Có nhiều cách để tìm kiếm một chuỗi con trong một chuỗi.

## 6.1 str.indexOf(…,…)
Method đầu tiên là str.indexOf(substr, pos).

Nó tìm kiếm chuỗi substr trong str, bắt đầu từ vị trí pos đã cho và trả về vị trí tìm thấy kết quả khớp hoặc -1 nếu không tìm thấy kết quả khớp. Ví dụ:

let str = 'Widget with id';

alert( str.indexOf('Widget') ); // 0, vì'Widget' được tìm thấy ngay bắt đầu
alert( str.indexOf('widget') ); // -1, tức là không tìm thấy 

alert( str.indexOf("id") ); // 1, được tìm thấy bắt đầu từ index số 1 
Tham số thứ hai là tùy chọn cho phép chúng ta bắt đầu tìm kiếm từ một vị trí nhất định, thay vì tìm kiếm từ đầu chuỗi.

Ví dụ, lần xuất hiện đầu tiên của "id" nằm ở vị trí 1. Để tìm lần xuất hiện tiếp theo, hãy bắt đầu tìm kiếm từ vị trí 2:

let str = 'Widget with id';

alert( str.indexOf('id', 2) ) // 12
Nếu chúng ta quan tâm đến tất cả các lần xuất hiện, chúng ta có thể chạy indexOf trong một vòng lặp . Mỗi lần gọi mới được thực hiện với vị trí sau lần khớp trước đó:

let str = 'As sly as a fox, as strong as an ox';

let target = 'as'; // let's look for it

let pos = 0;
while (true) {
  let foundPos = str.indexOf(target, pos);
  if (foundPos == -1) break;

  alert( `Found at ${foundPos}` );
  pos = foundPos + 1; // tiếp tục tìm kiếm từ vị trí tiếp theo 
}
Thuật toán tương tự có thể được trình bày ngắn gọn hơn:

let str = "As sly as a fox, as strong as an ox";
let target = "as";

let pos = -1;
while ((pos = str.indexOf(target, pos + 1)) != -1) {
  alert( pos );
}
Có một chút bất tiện với indexOf trong phép thử if. Chúng ta không thể đưa nó vào if như thế này:

let str = "Widget with id";

if (str.indexOf("Widget")) {
    alert("We found it"); // doesn't work!
}
alert trong ví dụ trên không hiển thị vì str.indexOf("Widget") trả về 0 (có nghĩa là nó tìm thấy kết quả khớp ở vị trí bắt đầu). Đúng, nhưng if coi 0 là false .

Vì vậy, chúng ta thực sự nên kiểm tra -1 như thế này:

let str = "Widget with id";

if (str.indexOf("Widget") != -1) {
    alert("We found it"); // works now!
}
## 6.2 str.lastIndexOf(substr, position)
Ngoài ra còn có một phương pháp tương tự str.lastIndexOf(substr, position) tìm kiếm từ cuối chuỗi đến đầu chuỗi.

Nó sẽ liệt kê các lần xuất hiện theo thứ tự ngược lại. Ví dụ:

let x = "Ha Noi ngay tro ve";
let z = x.lastIndexOf('e'); // 17 
let z = x.lastIndexOf('ve'); // 16 
let z = x.lastIndexOf('ev'); // -1, không tìm thấy 
## 6.3 includes(), startsWith(), endsWith()
Phương pháp hiện đại hơn str.includes(substr, pos) trả về true/false tùy thuộc vào việc str có chứa substr bên trong hay không.

Đây là lựa chọn đúng đắn nếu chúng ta cần kiểm tra sự tồn tại của 1 chuỗi con nhưng không cần vị trí của nó:

alert( "Widget with id".includes("Widget") ); // true

alert( "Hello".includes("Bye") ); // false
Đối số thứ hai pos là tùy chọn của str.includes là vị trí bắt đầu tìm kiếm:

alert( "Widget".includes("id") ); // true
alert( "Widget".includes("id", 3) ); // false, từ index thứ 3 không có "id"
Các methods str.startsWith and str.endsWith thực hiện đúng như tên của method :

alert( "Widget".startsWith("Wid") ); // true, "Widget" bắt đầu "Wid"
alert( "Widget".endsWith("get") ); // true, "Widget" kết thúc với "get"
# 7. Trích xuất một phần của chuỗi (substring)
Có 3 phương thức trong JavaScript để lấy chuỗi con: substring, substr và slice.

## 7.1 str.slice(start [, end])
Trả về một phần của chuỗi từ start đến end (nhưng không bao gồm end).

Trong đó index của start phải nhỏ hơn end, bất kể là index âm hay dương

Ví dụ:

let str = "stringify";
alert( str.slice(0, 5) ); // 'strin', Chuỗi từ 0 đến 5 (không bao gồm 5)
alert( str.slice(0, 1) ); // 's', từ 0 đến 1, không bao gồm 1, nên chỉ có ký tự tại index 0 
Nếu không có đối số thứ hai thì slice sẽ đi đến cuối chuỗi:

let str = "stringify";
alert( str.slice(2) ); // 'ringify', bắt đầu từ index 2 đến hết chuỗi 
Giá trị âm cho start/end cũng có thể xảy ra. Chúng có nghĩa là vị trí được tính từ cuối chuỗi:

let str = "stringify";

// bắt đầu từ index 4 tính từ bên phải, và kết thúc tại index 1 tính từ bên phải
alert( str.slice(-4, -1) ); // 'gif'
## 7.2 str.substring(start [, end])
Trả về phần chuỗi giữa start và end (không bao gồm end).

Method này gần giống như slice, nhưng nó cho phép start lớn hơn end (trong trường hợp này, nó chỉ hoán đổi giá trị start và end). Ví dụ:

let str = "stringify";

// these are same for substring
alert( str.substring(2, 6) ); // "ring"
alert( str.substring(6, 2) ); // "ring"

// ...but not for slice:
alert( str.slice(2, 6) ); // "ring" 
alert( str.slice(6, 2) ); // "" (một chuỗi trống empty string)
Các đối số âm (không giống như slice) không được hỗ trợ. Đúng hơn là nếu sử dụng đối số âm nó sẽ coi là 0.

## 7.3 str.substr(start [, length])
Trả về chuỗi con bắt đầu từ start, với độ dài length ký tự.

Không giống 2 method trên, phương pháp này cho phép chúng ta chỉ định độ dài thay vì vị trí kết thúc. Đếm từ trái qua phải theo cách viết.

let str = "stringify";
alert( str.substr(2, 4) ); // 'ring', từ index thứ 2 và dài 4 ký tự
Đối số start có thể là số âm, tính từ cuối chuỗi:

let str = "stringify";
alert( str.substr(-4, 2) ); // 'gi', tính từ index thứ 4 từ phải sang, rồi đếm 2 ký tự 
JavaScript được định nghĩa theo chuẩn ECMAScript.

Trong đó, Phụ lục B (Annex B) là nơi chứa các tính năng không chính thức, không chuẩn, bao gồm các tính năng chỉ dành cho trình duyệt, chủ yếu tồn tại vì lý do lịch sử. Vì vậy, các môi trường không phải trình duyệt có thể không hỗ trợ nó.

Và method này nằm trong phục lục B. Nên không khuyến khích sử dụng.

Tuy nhiên có 1 nghịch lý là, mặc dù được khuyên không nên dùng nhưng dùng thì vẫn chạy được ở mọi nơi.

Vậy nên sử dụng method nào trong 3 methods trên ?
substr thì được khuyên không nên dùng, mặc dù dùng thì vẫn chạy được. Trong 2 method còn lại thì slice linh hoạt hơn 1 chút, nó hỗ trợ cả các đối số âm, và viết lại ngắn hơn.

Vì vậy trong thực tế chỉ cần nhớ và sử dụng .slice() là đủ.

# 8. Comparing strings (So sánh chuỗi)
Các chuỗi được so sánh từng ký tự theo thứ tự bảng chữ cái. Mặc dù có một số điểm kỳ lạ.

Một chữ cái thường luôn lớn hơn chữ cái hoa:

alert( 'a' > 'Z' ); // true
Các chữ cái có dấu phụ (Diacritical marks) là “không theo thứ tự”. Nghĩa là không được sắp xếp theo đúng thứ tự "ngôn ngữ" mong đợi.

alert( 'Österreich' > 'Zealand' ); // true
Lý do bởi vì JavaScript so sánh chuỗi mặc định theo mã Unicode từng ký tự (UTF-16) chứ không xét đến ngôn ngữ cụ thể. Ví dụ, Ký tự a có mã 97, còn á là mã 225, â là 226 ⇒ nên a < á là true, đơn giản vì mã số nhỏ hơn.

Điều này có thể dẫn đến những kết quả kỳ lạ nếu chúng ta sắp xếp các tên quốc gia này. Thông thường mọi người sẽ mong đợi Zealand đứng sau Österreich trong danh sách.

Để hiểu điều gì xảy ra, chúng ta cần biết rằng các chuỗi trong Javascript được mã hóa bằng UTF-16. Nghĩa là: mỗi ký tự có một mã số tương ứng.

Có những phương pháp đặc biệt cho phép lấy ký tự cho mã và ngược lại:

## 8.1 str.codePointAt(pos)
Trả về số thập phân là mã cho ký tự ở vị trí pos:

// các chữ cái viết hoa/thường khác nhau có mã khác nhau 
alert( "Z".codePointAt(0) ); // 90
alert( "z".codePointAt(0) ); // 122
alert( "z".codePointAt(0).toString(16) ); // 7a (nếu chúng ta cần 1 giá trị thập lục phân thay vì thập phân)
## 8.2 String.fromCodePoint(code)
Tạo một ký tự bằng mã số của nó, có thể dùng mã thập phân hoặc thập lục phân:

alert( String.fromCodePoint(90) ); // Z (dùng mã thập phân)
alert( String.fromCodePoint(0x5a) ); // Z (dùng mã thập lục phân 
Bây giờ chúng ta hãy xem các ký tự có mã 65..220 (bảng chữ cái Latinh và một chút mã khác) bằng cách tạo một chuỗi ký tự:

let str = '';

for (let i = 65; i <= 220; i++) {
  str += String.fromCodePoint(i);
}
alert( str );
// Output:
// ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~ 
// ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜ
Bạn thấy không? Các ký tự viết hoa đi trước, sau đó là một vài ký tự đặc biệt, rồi đến các ký tự viết thường và Ö gần cuối đầu ra.

Bây giờ thì rõ ràng tại sao a > Z.

Các ký tự được so sánh theo mã số của chúng. Mã lớn hơn nghĩa là ký tự lớn hơn. Mã cho a (97) lớn hơn Z (90).

Tất cả các chữ cái thường đều đứng sau các CHỮ CÁI VIẾT HOA vì mã của chúng lớn hơn.

Một số chữ cái như Ö đứng tách biệt với bảng chữ cái chính. Ở đây, mã của nó lớn hơn bất kỳ thứ gì từ a đến z.

## 8.3 So sánh “đúng” với localeCompare()
Thuật toán để so sánh “đúng” 2 chuỗi phức tạp hơn các phương phương vừa nói đến ở trên. Khi so sánh bằng các method ở trên là so sánh chuỗi bằng mã Unicode thô (<, >), sẽ không phản ánh đúng thứ tự ngôn ngữ học. Bởi vì mỗi ngôn ngữ có bảng chữ cái và quy tắc sắp xếp riêng.

So sánh “đúng” tức là có xét đến quy tắc ngôn ngữ.

Để làm được điều này thì Trình duyệt (hoặc môi trường thực thi) phải biết bạn đang dùng ngôn ngữ nào để áp dụng đúng quy tắc so sánh.

Và rất may mmắnlaf các trình duyệt hiện đại đều hỗ trợ tiêu chuẩn quốc tế ECMA-402 (là một phần mở rộng của ECMAScript). Nó cung cấp những tính năng như:

So sánh chuỗi theo ngôn ngữ

Định dạng số, ngày tháng theo văn hóa

Dịch thuật nhiều ngôn ngữ

Cụ thể chúng ta sẽ sử dụng Phương thức str.localeCompare(str2, locales, options), nó là một phần của ECMA-402.

Phương thức localeCompare(str2, locales, options) trả về một số nguyên thể hiện mối quan hệ giữa str và str2 theo quy tắc ngôn ngữ:

-1 (âm)str < str2

0str == str2

1 (dương)str > str2

Ví dụ:

'Österreich'.localeCompare('Zealand'); // -1
Ở đây:

"Österreich" là tên nước Áo (chữ Ö – tiếng Đức)

"Zealand" là tên khác

localeCompare() so sánh đúng theo quy tắc ngôn ngữ, nên kết quả là -1, tức "Österreich" đứng trước "Zealand" theo thứ tự từ điển chuẩn. (Còn nếu sử dụng > hoặc < để so sánh như ở ví dụ trên thì Österreich lại đứng sau Zealand, và như vậy là sai theo thứ tự từ điển chuẩn).

2 tham số bổ sung là :
locales: chuỗi mã ngôn ngữ, ví dụ 'vi', 'en-US', 'de'... Giúp so sánh theo đúng ngôn ngữ mong muốn.

options: đối tượng cấu hình. Một số tùy chọn phổ biến như:

sensitivityPhân biệt chữ hoa/thường, dấu, ký tự gốc

ignorePunctuationBỏ qua dấu câu

numericSo sánh số theo giá trị số

'a'.localeCompare('á', 'vi', { sensitivity: 'base' }) // 0 → coi như bằng nhau
'a'.localeCompare('á', 'vi', { sensitivity: 'accent' }) // -1 → phân biệt dấu
# 9. Nối chuỗi
Nối chuỗi đơn giản:
Sử dụng toán tử + :

let firstname = "Tony";
let lastname = "Jazz";
let fullname = firstname + " " + lastname; //Tony Jazz 
Nối nhiều chuỗi cùng lúc
Dùng phương thức concat():

let firstname = "Tony";
let lastname = "Jazz";
let fullname = firstname.concat(" ", lastname); //Tony Jazz 

//hoặc 
let fullname = "".concat(firstname, " ", lastname); //Tony Jazz 
Nối nhiều chuỗi, code rõ ràng, hiện đại, không bị lẫn với số học:
Dùng template literals là tối ưu nhất: (Sẽ có 1 bài ngắn riêng về template literals)

let firstname = "Tony";
let lastname = "Jazz";
let fullname = `${firstname} ${lastname}`; \\Tony Jazz 
# 10. Xóa khoảng trắng trong chuỗi
trim()
Xóa khoảng trắng ở phía trước và phía sau của chuỗi, không xóa khoảng trắng ở giữa.

let text1 = "     Hello   World!    ";
let text2 = text1.trim();      //"Hello   World!"
trimStart()
Chỉ xóa khoảng trắng phía trước chuỗi:

let text1 = "     Hello   World!    ";
let text2 = text1.trim();      //"Hello   World!    "
trimEnd()
Chỉ xóa khoảng trắng phía sau chuỗi:

let text1 = "     Hello   World!    ";
let text2 = text1.trim();      //"     Hello   World!"
# 11. Thêm ký tự đệm vào chuỗi
padStart(): Sẽ dùng 1 chuỗi khác làm padding (đệm) ở trước của chuỗi, đến khi đạt độ dài nhất định

let text = "5";
let padded = text.padStart(4,"x"); //xxx5 
padEnd(): Sẽ dùng 1 chuỗi khác làm padding (đệm) ở cuối của chuỗi, đến khi đạt độ dài nhất định

let numb = 5;
let text = numb.toString(); //chuyển số thành chuỗi 
let padded = text.padEnd(4,"0"); //5000
# 12. Lặp lại chuỗi
Method repeat() phương thức trả về một chuỗi có số bản sao của chuỗi đó.

let text = "Hello world!";
let result = text.repeat(2); //Hello world!Hello world!

result = text.repeat(4);  //Hello world!Hello world!Hello world!Hello world!
Cú pháp: string.repeat(count)

# 13. Thay thế nội dung của 1 chuỗi
## 13.1 replace()
Method này dùng để thay thế nội dung nào đó của chuỗi bằng 1 nội dung khác.

Mặc định chỉ thay thế 1 lần với nội dung đầu tiên được tìm thấy.

let text = "Please visit Microsoft and Microsoft!";
let newText = text.replace("Microsoft", "Apple");
//output
//Please visit Apple and Microsoft!
replace() là case-sensitive tức là phân biệt chữ hoa chữ thường.

Để thay thế không phân biệt chữ hoa chữ thường, hãy sử dụng biểu thức chính quy (regular expression) có /i flag (không phân biệt chữ hoa chữ thường case-insensitive, i trong ignoreCase):

let text = "Please visit Microsoft!";
let newText = text.replace(/MICROSOFT/i, "Apple");
//ouput 
//"Please visit Apple!"
Regular expressions (biểu thức chính quy): Học trong các bài sau. Hiện tại chỉ cần biết biểu thức chính quy không sử dụng cặp dấu nháy “” (quotes)

Để thay thế tất cả các kết quả khớp, hãy sử dụng biểu thức chính quy có /g flag (khớp toàn cục):

let text = "Please visit Microsoft and Microsoft!";
let newText = text.replace(/Microsoft/g, "Apple");

//output:
//"Please visit Apple and Apple!"
Có thể dùng đồng thời /i và /g flags để khớp tất cả các kết quả, không phân biệt chữ Hoa/Thường.

let text = "Please visit Microsoft and Microsoft!";
let newText = text.replace(/MICROSOFT/gi, "Apple");

//output:
//"Please visit Apple and Apple!"
## 13.2 replaceAll()
Dùng để thay thế tất cả các nội dung tìm được.

Nó không hỗ trợ các trình duyệt cũ, ví dụ Internet Explorer.

//thay thế tất cả, sử dụng chuỗi 

let text = "Please visit Microsoft and Microsoft!";
let newText = text.replaceAll("Microsoft", "Apple");

//cách dùng tương đương là dùng replace() với /g flag 
let newText = text.replace(/Microsoft/g, "Apple");
//thay thế tất cả, bất kể chữ HOA/chữ thường, vẫn phải dùng /i flag 

let text = "Please visit Microsoft and Microsoft!";
let newText = text.replaceAll(/microsoft/i, "Apple");

//cách dùng tương đương là dùng replace() với /ig flag 
let newText = text.replace(/microsoft/gi, "Apple");
Có thể thấy rằng replace() sẽ linh hoạt hơn:

Có thể thay thế 1 nội dung hoặc tất cả các nội dung được tìm thấy

Hỗ trợ cả trình duyệt cũ

Viết còn ngắn gọn hơn

Vì vậy chỉ cần dùng replace() là đủ.

# 14. Chuyển 1 chuỗi thành 1 mảng
Nếu bạn muốn làm việc với một chuỗi như một mảng, bạn có thể chuyển đổi nó thành một mảng.

split(separator)
Trong đó separator là ký tự nhận biết để tách chuỗi.

let text = 'Please visit Apple and Microsoft';
let textArray = text.split(" "); //separator là khoảng trắng
//output:
//[ 'Please', 'visit', 'Apple', 'and', 'Microsoft' ]
Nếu dấu phân cách bị bỏ qua hoặc dấu phân cách không tồn tại trong chuỗi , mảng trả về sẽ chứa toàn bộ chuỗi trong chỉ mục [0].

let text = 'Please visit Apple and Microsoft';
let textArray = text.split(); //separator bị bỏ qua 
//output:
//[ 'Please visit Apple and Microsoft' ]

let textArray2 = text.split("|"); //separator là ký tự | không tồn tại trong chuỗi
//output:
// [ 'Please visit Apple and Microsoft' ]
Nếu dấu phân cách là "", mảng trả về sẽ là một mảng các ký tự đơn, bao gồm của khoảng trắng.

let text = 'Please visit Apple and Microsoft';
let textArray = text.split(""); //separator là "" 
//output:
//
[
  'P', 'l', 'e', 'a', 's', 'e',
  ' ', 'v', 'i', 's', 'i', 't',
  ' ', 'A', 'p', 'p', 'l', 'e',
  ' ', 'a', 'n', 'd', ' ', 'M',
  'i', 'c', 'r', 'o', 's', 'o',
  'f', 't'
]
# 15. Hàm String(arg)
Chuyển đối arg thành một chuỗi.

const myNum2 = 123;
const myString2 = String(myNum2);
console.log(myString2);
//'123'
Cũng có thể sử dụng toán tử + “” để tự động ép kiểu (cộng với 1 chuỗi rỗng):

String(arg) tương đương với arg + “”;

const str = 123;
const str2 = String(str);
const str3 = str + "";
console.log(str2 === str3) //true
String() là một hàm (function), không phải là một phương thức (method).

Subscribe for free to receive new posts.

# 16. Thực hành
## Bài 1: Uppercase the first character
Viết 1 hàm ucFirst(str) trả về chuỗi str với ký tự đầu tiên được viết hoa:

ucFirst("john") == "John";
Giải pháp (không nên xem trước, hãy tự mình giải quyết trước khi xem đáp án)

//Giải pháp 1: lặp qua tất cả các ký tự chuỗi, nối lại thành chuỗi mới 
 function ucFirst(str) {
      let s1 = str.at(0).toUpperCase();
      let s2 ="";
      for (let i=1; i< str.length -1; i++) {
         s2 += str.at(i);
      }  
     return (s1 + s2);
}


//Giải pháp 2: Tạo 2 chuỗi mới, chuỗi 1 là ký tự đầu, chuỗi 2 là tất cả các ký tự còn lại, rồi nối 2 cái lại 

function ucFirst(str) {
    let firstStr = str.at(0); // trả về ký tự đầu tiên
    firstStr     = firstStr.toUpperCase();// viết hoa nó
    let secondStr = str.slice(1); //trả về chuỗi bắt đầu từ ký tự thứ 2 đến hết
    return firstStr + secondStr;
}


//viêt ngắn gọn
function ucFirst(str) {
    return str.at(0).toUpperCase() + str.slice(1);
}

let myStr = "john alibaba";
console.log(ucFirst(myStr));
## Bài 2: Check for spam
Viết hàm checkSpam(str) trả về true nếu str chứa ‘viagra’ hoặc ‘XXX’, nếu không thì trả về false.

Hàm phải không phân biệt chữ hoa chữ thường (case-insensitive):

checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false
Giải pháp:

function checkSpam(str) {
    if(str.toLowerCase().includes("xxx")) 
        console.log(true);
    else if(str.toLowerCase().includes("viagra"))
        console.log(true);
    else
        console.log(false);
}

checkSpam('buy ViAgRA now'); //== true
checkSpam('free xxXxx'); //== true
checkSpam("innocent rabbit") ;//== false
//Giải pháp dưới đây kiểm tra xem 1 chuỗi có những spam nào, xuất tất cả ra màn hình 
function checkSpam(str) {
    const spamString = "xxx viagra";// chuỗi này gồm mọi chuỗi được coi là spam 
    const spamArr = spamString.split(" ") //Chuyển chuỗi thành mảng các spam

    //lặp qua tất cả các chuỗi spam (từng phần từ của mảng) 
    //sau đó lần lượt kiểm tra xem chuỗi có chứa phần tử spam hay không
    for (let i = 0; i < spamArr.length; i++) {
        if (str.toLowerCase().includes(spamArr[i])) {
            console.log(`true: spam ${spamArr[i]}`);
        }

    }

}

let str1 = "xin moi truy cap vao viagRa xxx va viagRa";
checkSpam(str1);


//output:
//true: spam xxx
//true: spam viagra
## Bài 3: Truncate the text
Tạo hàm truncate(str, maxlength) kiểm tra chiều dài của chuỗi str và nếu nó vượt quá maxlength – thì thay thế phần cuối của str với ký tự lược gọn (ellipsis character) "…", để làm cho tổng chiều dài của chuỗi là maxlength. Ví dụ:

truncate("What I'd like to tell on this topic is:", 20) == "What I'd like to te…"

truncate("Hi everyone!", 20) == "Hi everyone!"
Giải pháp:

function truncate(str, maxlength) {
    let newStr = "";
    if(str.length > maxlength) {
        newStr = str.slice(0, maxlength-1) + "...";
    }
    else
        newStr = str;

    console.log(newStr);
}


truncate("What I'd like to tell on this topic is:", 20) // "What I'd like to te…"

truncate("Hi everyone!", 20) // "Hi everyone!"
## Bài 4: Extract the money
Chúng ta có giá ở dạng “$120”. Đó là ký hiệu tiền tệ ở phía trước, và số ở phía sau. Hãy hay hàm để trích xuất giá trị số từ chuỗi đó và trả về nó là một số.

Ví dụ:

alert( extractCurrencyValue('$120') === 120 ); // true
Giải pháp:

function extractCurrencyValue(str) {
    //str.slice(1) sẽ trả về chuỗi từ index 1 đến hết, loại ký tự đầu tiên
    // toán tử unary + tương đương với Number() sẽ ép kiểu chuỗi thành number 
    //kết quả cuối cùng hàm trả về 1 số chứ không phải 1 chuỗi 
    return +str.slice(1);
}

console.log(extractCurrencyValue('$120') === 120);