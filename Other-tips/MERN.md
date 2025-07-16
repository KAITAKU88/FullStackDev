Chào bạn,

Bạn đang tìm kiếm một hướng dẫn chi tiết từng bước để xây dựng một ứng dụng full-stack sử dụng MERN Stack (MongoDB, Express.js, React, Node.js) và triển khai nó. Video này cung cấp một khóa học toàn diện về cách thiết lập môi trường phát triển, xây dựng các API RESTful, quản lý cơ sở dữ liệu và phát triển giao diện người dùng tương tác. Dưới đây là phân tích chi tiết từng bước, kết hợp thông tin từ video để bạn có thể dễ dàng theo dõi và thực hiện:

### I. Xây Dựng Phần Backend (API)

**1. Thiết Lập Môi Trường Phát Triển Backend**

- **Tạo cấu trúc thư mục**: Bắt đầu bằng cách tạo một thư mục trống cho dự án của bạn (ví dụ: `MERN crash course`). Bên trong thư mục này, tạo hai thư mục con: **`frontend`** và **`backend`**.
- **Khởi tạo dự án Node.js**: Mở terminal, điều hướng đến thư mục gốc của dự án (`MERN crash course`) và chạy lệnh **`npm init -y`** để tạo tệp `package.json`. Điều này giúp việc triển khai ứng dụng dễ dàng hơn sau này.
- **Cài đặt các gói phụ thuộc Backend**: Trong thư mục gốc, cài đặt các gói cần thiết cho backend:
    - **`npm install express mongoose dotenv`**.
    - `express` sẽ được sử dụng làm framework web để xây dựng API và hệ thống định tuyến dễ dàng.
    - `mongoose` dùng để tương tác với cơ sở dữ liệu MongoDB.
    - `dotenv` giúp truy cập các biến môi trường từ tệp `.env`.
- **Tạo tệp Entry Point cho API**: Tạo một tệp **`server.js`** trong thư mục `backend` (bạn có thể đặt tên khác như `index.js`, `main.js`, `app.js` tùy theo quy ước).
- **Cấu hình ES Modules**: Để sử dụng cú pháp `import/export` hiện đại, hãy thêm trường `"type": "module"` vào tệp `package.json` ở thư mục gốc của bạn.
- **Khởi tạo Express App**: Trong `server.js`, import Express và tạo một ứng dụng Express: `const app = express()`.
- **Lắng nghe cổng (Port)**: Cấu hình ứng dụng để lắng nghe một cổng (ví dụ: `5000`) bằng `app.listen(5000, () => console.log('Server started at Localhost 5000'))`.
- **Tạo script `dev`**: Để chạy ứng dụng tiện lợi hơn, thêm một script `dev` vào tệp `package.json` (ở thư mục gốc) dưới phần `"scripts"`: `"dev": "node backend/server.js"`. Sau đó, bạn có thể chạy bằng `npm run dev`.
- **Cài đặt Nodemon**: Để tự động khởi động lại server khi có thay đổi mã, cài đặt Nodemon như một dependency phát triển: **`npm install nodemon -D`**.
- **Cập nhật script `dev`**: Thay đổi script `dev` trong `package.json` để sử dụng Nodemon: `"dev": "nodemon backend/server.js"`.
- **Tạo Route cơ bản**: Thêm một route GET cơ bản vào `server.js` để kiểm tra server đang chạy: `app.get('/', (req, res) => res.send('Server is ready'))`.

**2. Thiết Lập Cơ Sở Dữ Liệu (MongoDB Atlas)**

- **Đăng ký/Đăng nhập MongoDB Atlas**: Truy cập **`mongodb.com`** và tạo tài khoản miễn phí hoặc đăng nhập.
- **Tạo Dự Án & Cluster**:
    - Tạo một dự án mới (ví dụ: "MERN course").
    - Tạo một **Cluster miễn phí**.
    - Trong quá trình tạo, hãy **sao chép mật khẩu** được tạo ra và lưu lại để sử dụng sau này.
- **Tạo Người dùng Cơ sở dữ liệu**: Tạo một người dùng database với mật khẩu đã sao chép.
- **Cấu hình Truy cập Mạng**: Trong phần "Network Access", thêm địa chỉ IP hiện tại của bạn hoặc cho phép truy cập từ mọi nơi (`Allow Access from Anywhere`) cho mục đích phát triển.
- **Lấy Chuỗi Kết Nối**: Chọn "Connect" cho cluster của bạn, sau đó chọn "Connect your application" và **sao chép chuỗi kết nối** (`connection string`).
- **Tạo tệp `.env`**: Tạo một tệp **`.env`** trong thư mục gốc của dự án. Dán chuỗi kết nối vào đây với tên biến là **`MONGO_URI`**.
- **Cập nhật `MONGO_URI`**: Thay thế `<password>` trong chuỗi kết nối bằng mật khẩu đã sao chép, và thay thế `<database name>` bằng tên database bạn muốn sử dụng (ví dụ: **`products`**).
- **Cấu hình `.env` trong Server**: Trong `server.js`, import `dotenv` và gọi `dotenv.config()` để tải các biến môi trường.
- **Tạo hàm kết nối DB**: Tạo một thư mục `config` trong `backend`, và bên trong đó tạo tệp **`db.js`**. Trong `db.js`, tạo một hàm async **`connectDB`** để kết nối với MongoDB sử dụng Mongoose và `MONGO_URI`.
    - Hàm này sẽ sử dụng `mongoose.connect(process.env.MONGO_URI)`.
    - Thêm `try-catch` để xử lý lỗi kết nối và thoát ứng dụng nếu thất bại.
- **Gọi hàm `connectDB`**: Trong `server.js`, gọi hàm `connectDB()` ngay sau khi ứng dụng Express lắng nghe cổng.

**3. Tạo Mô Hình Sản Phẩm (Product Model)**

- **Hiểu về MongoDB**: MongoDB là cơ sở dữ liệu NoSQL, lưu trữ dữ liệu dưới dạng **collections** (tương tự bảng trong SQL) và mỗi collection chứa nhiều **documents** (tương tự hàng/bản ghi). Ví dụ: collection `products` chứa các document sản phẩm (smartwatch, earbuds).
- **Tạo thư mục Models**: Trong thư mục `backend`, tạo một thư mục **`models`**.
- **Tạo tệp Product Model**: Trong `models`, tạo tệp **`product.model.js`**.
- **Định nghĩa Schema**: Trong `product.model.js`, import `mongoose` và định nghĩa `productSchema` bằng `new mongoose.Schema({})`.
    - Mỗi sản phẩm sẽ có `name` (String, required), `price` (Number, required), `image` (String, required).
    - Thêm **`timestamps: true`** vào schema để tự động thêm trường `createdAt` và `updatedAt` vào mỗi document.
- **Tạo và Export Model**: Tạo model `Product` từ schema và export nó bằng `export default mongoose.model('Product', productSchema)`. Mongoose sẽ tự động chuyển tên model số ít, viết hoa (`Product`) thành tên collection số nhiều, viết thường (`products`).

**4. Xây Dựng Các Endpoint API (CRUD)**

- **Khái niệm API**: API (Application Programming Interface) là "người trung gian" cho phép hai ứng dụng khác nhau giao tiếp với nhau (ví dụ: ứng dụng React của bạn và cơ sở dữ liệu/server).
    
- **Tạo Sản Phẩm (POST `/api/products`)**:
    
    - Trong `server.js`, thêm middleware **`app.use(express.json())`** _trước_ các route của bạn. Middleware này cho phép Express phân tích dữ liệu JSON trong `request.body`.
    - Trong `product.controller.js` (hoặc trực tiếp trong `server.js` nếu chưa refactor), tạo hàm `createProduct` (hàm async):
        - Lấy dữ liệu sản phẩm từ `req.body`.
        - **Kiểm tra dữ liệu**: Nếu `name`, `price`, hoặc `image` bị thiếu, trả về lỗi `400` ("Please provide all fields").
        - **Tạo và lưu**: Tạo một `new Product(productData)` và gọi `await newProduct.save()` để lưu vào database.
        - **Phản hồi**: Trả về `res.status(201).json({ success: true, data: newProduct })` nếu thành công, hoặc `res.status(500).json({ success: false, message: 'Server error' })` nếu lỗi.
    - **Thử nghiệm với Postman**: Gửi yêu cầu **POST** đến `http://localhost:5000/api/products` với dữ liệu JSON trong phần "Body" (chọn "raw" và "JSON").
- **Xóa Sản Phẩm (DELETE `/api/products/:id`)**:
    
    - Trong `product.controller.js`, tạo hàm `deleteProduct` (hàm async):
        - Lấy `id` của sản phẩm từ `req.params` (ví dụ: `/api/products/:id`).
        - **Xóa sản phẩm**: Sử dụng `await Product.findByIdAndDelete(id)`.
        - **Phản hồi**: Trả về `res.status(200).json({ success: true, message: 'Product deleted' })` nếu thành công.
        - **Xử lý lỗi**: Nếu không tìm thấy sản phẩm hoặc ID không hợp lệ, trả về `res.status(404).json({ success: false, message: 'Product not found' })`.
    - **Thử nghiệm với Postman**: Gửi yêu cầu **DELETE** đến `http://localhost:5000/api/products/ID_SAN_PHAM`.
- **Lấy Tất Cả Sản Phẩm (GET `/api/products`)**:
    
    - Trong `product.controller.js`, tạo hàm `getProducts` (hàm async):
        - **Tìm tất cả**: Sử dụng `await Product.find({})` để lấy tất cả sản phẩm.
        - **Phản hồi**: Trả về `res.status(200).json({ success: true, data: products })`.
        - **Xử lý lỗi**: Trả về `res.status(500).json({ success: false, message: 'Server error' })` nếu có lỗi.
    - **Thử nghiệm với Postman**: Gửi yêu cầu **GET** đến `http://localhost:5000/api/products`.
- **Cập Nhật Sản Phẩm (PUT `/api/products/:id`)**:
    
    - Trong `product.controller.js`, tạo hàm `updateProduct` (hàm async):
        - Lấy `id` từ `req.params` và dữ liệu cập nhật từ `req.body`.
        - **Cập nhật**: Sử dụng `await Product.findByIdAndUpdate(id, updatedFields, { new: true })`. Tùy chọn `{ new: true }` đảm bảo trả về document đã được cập nhật.
        - **Xử lý ID không hợp lệ**: Kiểm tra `mongoose.Types.ObjectId.isValid(id)` trước khi tìm kiếm để trả về `404` nếu ID không hợp lệ.
        - **Phản hồi**: Trả về `res.status(200).json({ success: true, data: updatedProduct })` nếu thành công.
        - **Xử lý lỗi**: Trả về `res.status(500).json({ success: false, message: 'Server error' })` nếu lỗi server.
    - **Thử nghiệm với Postman**: Gửi yêu cầu **PUT** đến `http://localhost:5000/api/products/ID_SAN_PHAM` với dữ liệu JSON cập nhật trong phần "Body".

**5. Tái Cấu Trúc Mã (Refactoring)**

- **Tách Routes**:
    - Tạo một thư mục **`routes`** trong `backend` và một tệp **`product.route.js`**.
    - Trong `product.route.js`, import `express`, tạo `router = express.Router()`, và export `router`.
    - **Chuyển tất cả các route API liên quan đến sản phẩm** (GET, POST, PUT, DELETE) từ `server.js` sang `product.route.js`.
    - **Thay thế `app` bằng `router`** và **xóa tiền tố `/api/products`** khỏi các path trong `product.route.js`.
    - Trong `server.js`, import `productRoutes` và sử dụng middleware **`app.use('/api/products', productRoutes)`** để liên kết chúng. Điều này giúp `server.js` gọn gàng hơn và các route được tổ chức.
- **Tách Controllers**:
    - Tạo một thư mục **`controllers`** trong `backend` và một tệp **`product.controller.js`**.
    - **Chuyển logic của các hàm `getProducts`, `createProduct`, `updateProduct`, `deleteProduct`** từ `product.route.js` (hoặc `server.js` trước đó) sang `product.controller.js`.
    - Export từng hàm controller (ví dụ: `export const getProducts = async (...) => {...}`).
    - Trong `product.route.js`, import các hàm controller này và sử dụng chúng trong các route.

**6. Cấu hình Cổng và Xử lý Lỗi Cuối cùng**

- **Sử dụng biến môi trường cho cổng**: Chuyển cổng server từ giá trị cố định (e.g., 5000) sang biến môi trường trong tệp `.env` (`PORT=5000`). Sau đó, trong `server.js`, đọc giá trị này bằng `process.env.PORT` và cung cấp giá trị mặc định (`5000`) nếu biến không tồn tại.
- **Tinh chỉnh xử lý lỗi**: Điều chỉnh hàm `deleteProduct` trong `product.controller.js` để trả về status code `404` (`Product not found`) nếu ID không hợp lệ, thay vì `500` (`Server error`).

### II. Xây Dựng Phần Frontend (React App)

**1. Thiết Lập Dự Án Frontend**

- **Tạo ứng dụng React**: Mở một terminal mới, điều hướng vào thư mục **`frontend`** và chạy lệnh **`npm create vite@latest .`**. Chọn `react` và `javascript` khi được hỏi.
- **Cài đặt Dependencies**: Chạy **`npm install`** trong thư mục `frontend` để cài đặt các gói cần thiết cho React app.

**2. Tích Hợp Chakra UI**

- **Cài đặt Chakra UI**: Trong thư mục `frontend`, cài đặt Chakra UI và các dependencies của nó: **`npm install @chakra-ui/react @emotion/react@^11 @emotion/styled@^11 framer-motion@^6`**.
- **Cấu hình Chakra Provider**: Trong tệp **`main.jsx`** (hoặc `index.js`), bọc component **`App`** của bạn bằng **`ChakraProvider`** để sử dụng các component của Chakra UI.
- **Dọn dẹp CSS**: Xóa các tệp CSS mặc định (`index.css` và `App.css`) vì Chakra UI sẽ quản lý styling.
- **Kiểm tra**: Thêm một button đơn giản từ Chakra UI vào `App.jsx` để kiểm tra cài đặt.

**3. React Router DOM cho Điều Hướng**

- **Cài đặt React Router DOM**: Trong thư mục `frontend`, cài đặt thư viện này: **`npm install react-router-dom`**.
- **Cấu hình Browser Router**: Trong **`main.jsx`**, bọc toàn bộ ứng dụng bằng component **`BrowserRouter`** để kích hoạt chức năng định tuyến.
- **Định nghĩa Routes**: Trong `App.jsx`, sử dụng **`Routes`** và **`Route`** để định nghĩa các đường dẫn:
    - `path="/"`, element là `HomePage`.
    - `path="/create"`, element là `CreatePage`.
- **Tạo cấu trúc Pages và Components**:
    - Trong thư mục `src`, tạo các thư mục **`pages`** và **`components`**.
    - Trong `pages`, tạo **`HomePage.jsx`** và **`CreatePage.jsx`**.
    - Trong `components`, tạo **`Navbar.jsx`**.
- **Import và sử dụng**: Import `HomePage`, `CreatePage`, `Navbar` vào `App.jsx` và sắp xếp chúng theo cấu trúc layout. `Navbar` nên nằm ngoài `Routes` để hiển thị trên tất cả các trang.

**4. Xây Dựng Navbar Component (`Navbar.jsx`)**

- **Layout cơ bản**: Sử dụng `Container` của Chakra UI để căn giữa nội dung và `Flex` để tạo layout (ví dụ: một phần bên trái và một phần bên phải).
- **Tên ứng dụng**: Thêm một phần tử `Text` cho tiêu đề "Product Store", áp dụng responsive font sizes và gradient styling.
- **Nút điều hướng**:
    - Sử dụng component `Link` từ `react-router-dom` (quan trọng là từ `react-router-dom` chứ không phải Chakra UI) để tạo nút "Create" đưa người dùng đến trang tạo sản phẩm.
    - **Cài đặt React Icons**: Chạy **`npm install react-icons`** trong thư mục `frontend` để có thư viện icon phong phú.
    - **Chức năng chuyển đổi chủ đề (Light/Dark Mode)**: Sử dụng hook **`useColorMode`** và **`useColorModeValue`** từ Chakra UI.
        - `useColorMode` cung cấp `colorMode` hiện tại và hàm `toggleColorMode`.
        - `useColorModeValue(lightValue, darkValue)` cho phép bạn áp dụng các giá trị khác nhau (ví dụ: màu nền) tùy thuộc vào chủ đề hiện tại.
        - Tạo một nút chuyển đổi chủ đề sử dụng các icon tương ứng (mặt trăng cho dark mode, mặt trời cho light mode).
- **Dynamic Background Color**: Áp dụng `useColorModeValue` cho màu nền của `Box` bao quanh toàn bộ ứng dụng (trong `App.jsx`) để thay đổi màu nền tổng thể khi chuyển đổi chủ đề.

**5. Xây Dựng Create Page Component (`CreatePage.jsx`)**

- **Quản lý State cho Form**: Sử dụng `useState` để quản lý trạng thái của sản phẩm mới (ví dụ: `newProduct` với các trường `name`, `price`, `image` ban đầu là chuỗi rỗng).
- **Thiết kế UI Form**:
    - Sử dụng `Container` để căn giữa, `VStack` để xếp chồng các phần tử theo chiều dọc.
    - Thêm `Heading` cho tiêu đề "Create New Product".
    - Bọc form bằng một `Box` để áp dụng các style như `background`, `padding`, `borderRadius`, `shadow`.
    - Sử dụng component `Input` cho các trường `Product Name`, `Price`, `Image URL`.
    - **Gắn kết dữ liệu**: Liên kết giá trị của `Input` với trạng thái `newProduct` và cập nhật trạng thái bằng hàm `setNewProduct` trong sự kiện `onChange` của mỗi input.
    - Thêm một `Button` "Add Product".

**6. Quản lý Trạng Thái Toàn Cầu (Zustand)**

- **Vấn đề và Giải pháp**: Trình bày vấn đề "prop drilling" (truyền prop qua nhiều cấp component) và lợi ích của việc sử dụng trạng thái toàn cầu để các component có thể truy cập trực tiếp trạng thái mà không cần truyền qua lại.
- **Cài đặt Zustand**: Trong thư mục `frontend`, cài đặt **`npm install zustand`**.
- **Tạo Store**:
    - Trong thư mục `src`, tạo một thư mục **`store`** và bên trong đó là tệp **`product.js`**.
    - Trong `product.js`, import hàm `create` từ `zustand`.
    - **Định nghĩa Store**: Tạo hook `useProductStore` bằng cách gọi `create()` và truyền vào một callback function nhận `set` làm đối số.
    - Store sẽ chứa một mảng **`products`** (ban đầu rỗng) và một hàm **`setProducts`** để cập nhật trạng thái này.
    - **Hàm `createProduct` trong Store**: Thêm hàm async `createProduct` vào store, hàm này sẽ nhận `newProduct` làm đối số.
        - **Kiểm tra đầu vào**: Tương tự backend, kiểm tra các trường `name`, `image`, `price`.
        - **Fetch API**: Thực hiện yêu cầu **`fetch` POST** đến `/api/products` của backend.
            - **Cấu hình Proxy trong Vite**: Để tránh lỗi CORS và tiền tố URL, trong tệp **`vite.config.js`** ở thư mục gốc của `frontend`, thêm cấu hình `server.proxy` để chuyển hướng các yêu cầu đến `/api` sang backend của bạn (ví dụ: `target: 'http://localhost:5000'`). Sau đó, bạn chỉ cần gọi `fetch('/api/products')` trong frontend.
        - **Cập nhật trạng thái Global**: Sau khi sản phẩm được tạo thành công trên backend, cập nhật mảng `products` trong store bằng cách thêm sản phẩm mới vào.
- **Sử dụng Store trong Create Page**:
    - Trong `CreatePage.jsx`, import `useProductStore` và destructure hàm `createProduct` từ đó.
    - Gọi hàm `createProduct` với dữ liệu form khi nút "Add Product" được click.
    - **Hiển thị thông báo (Toast)**: Sử dụng hook **`useToast`** từ Chakra UI để hiển thị các thông báo thành công hoặc lỗi sau khi tạo sản phẩm.
    - **Reset Form**: Sau khi tạo sản phẩm thành công, gọi `setNewProduct` để reset các trường form về giá trị ban đầu.

**7. Xây Dựng Homepage Component (`HomePage.jsx`)**

- **Layout**: Sử dụng `Container`, `VStack`, `Text` cho tiêu đề "Current Products".
- **Trường hợp "No Products"**: Hiển thị thông báo "No products found" và một `Link` tới trang tạo sản phẩm nếu mảng `products` trong store rỗng (`products.length === 0`).
- **Hiển thị Product Cards**:
    - Sử dụng component **`SimpleGrid`** của Chakra UI để tạo lưới hiển thị sản phẩm một cách responsive (ví dụ: 1 cột trên màn hình nhỏ, 2 cột trên màn hình vừa, 3 cột trên màn hình lớn).
    - **Hàm `fetchProducts` trong Store**: Thêm hàm async `fetchProducts` vào `useProductStore`.
        - Thực hiện yêu cầu **`fetch` GET** đến `/api/products`.
        - Cập nhật trạng thái `products` trong store với dữ liệu nhận được từ backend.
    - **Gọi `fetchProducts` trong Homepage**: Trong `HomePage.jsx`, sử dụng hook `useEffect` để gọi hàm `fetchProducts` khi component được mount (tải lần đầu).
    - **Map Products**: Lặp qua mảng `products` từ store và render component `ProductCard` cho mỗi sản phẩm. Truyền `product` làm prop và `product._id` làm `key`.

**8. Xây Dựng Product Card Component (`ProductCard.jsx`)**

- **Nhận Props**: Component này sẽ nhận prop `product`.
    
- **Thiết kế UI Card**:
    
    - Sử dụng `Box` làm container chính cho mỗi card, áp dụng `shadow`, `rounded`, `overflow` và hiệu ứng `transition` khi hover.
    - Hiển thị **`Image`** (từ Chakra UI) với `product.image` và `product.name` cho `alt`.
    - Hiển thị **`Heading`** cho tên sản phẩm và **`Text`** cho giá sản phẩm.
    - Sử dụng **`HStack`** để đặt các nút "Edit" và "Delete" cạnh nhau.
    - **Dynamic Styling**: Sử dụng `useColorModeValue` để áp dụng màu chữ và màu nền khác nhau cho card tùy thuộc vào chế độ sáng/tối.
- **Chức năng Xóa Sản Phẩm (Delete)**:
    
    - **Hàm `deleteProduct` trong Store**: Thêm hàm async `deleteProduct` vào `useProductStore`, nhận `productID` làm đối số.
        - Thực hiện yêu cầu **`fetch` DELETE** đến `/api/products/productID`.
        - **Cập nhật UI ngay lập tức**: Sau khi xóa thành công, lọc bỏ sản phẩm đã xóa khỏi mảng `products` trong store bằng hàm `filter()`. Điều này đảm bảo giao diện người dùng được cập nhật mà không cần tải lại trang.
        - Trả về `success` và `message`.
    - **Gắn sự kiện vào nút Delete**: Trong `ProductCard.jsx`, gắn hàm `handleDeleteProduct` (sẽ gọi `deleteProduct` từ store) vào sự kiện `onClick` của nút Delete.
    - **Hiển thị Toast**: Sử dụng `useToast` để hiển thị thông báo thành công hoặc lỗi sau khi xóa.
- **Chức năng Cập Nhật Sản Phẩm (Update) - Sử dụng Modal**:
    
    - **Khái niệm Modal**: Giải thích Modal của Chakra UI là một hộp thoại nổi lên trên nội dung chính, thường dùng để hiển thị chi tiết hoặc form.
    - **Điều khiển Modal**: Sử dụng hook **`useDisclosure`** từ Chakra UI để lấy các biến `isOpen`, `onOpen`, `onClose` để điều khiển trạng thái mở/đóng của modal.
    - **Cấu trúc Modal**: Bọc nội dung form cập nhật trong các component của Chakra UI: `Modal`, `ModalOverlay`, `ModalContent`, `ModalHeader`, `ModalCloseButton`, `ModalBody`, `ModalFooter`.
    - **State cho Form Modal**: Tạo một state mới trong `ProductCard.jsx` (ví dụ: `updatedProduct`) để lưu trữ dữ liệu sản phẩm khi chỉnh sửa trong modal, khởi tạo bằng dữ liệu của `product` hiện tại.
    - **Gắn kết dữ liệu Input**: Các input trong modal sẽ được gắn kết với state `updatedProduct` và cập nhật `onChange`.
    - **Hàm `updateProduct` trong Store**: Thêm hàm async `updateProduct` vào `useProductStore`, nhận `productID` và `updatedFields` làm đối số.
        - Thực hiện yêu cầu **`fetch` PUT** đến `/api/products/productID`.
        - **Cập nhật UI ngay lập tức**: Sau khi cập nhật thành công, duyệt qua mảng `products` trong store và thay thế sản phẩm cũ bằng sản phẩm đã được cập nhật. Điều này giúp UI hiển thị giá trị mới ngay lập tức.
        - Trả về `success` và `message`.
    - **Gắn sự kiện vào nút Update**: Trong `ProductCard.jsx`, gắn hàm `handleUpdateProduct` (sẽ gọi `updateProduct` từ store và đóng modal) vào sự kiện `onClick` của nút "Update" trong modal.
    - **Hiển thị Toast**: Sử dụng `useToast` để hiển thị thông báo thành công hoặc lỗi sau khi cập nhật.

### III. Triển Khai Ứng Dụng (Deployment)

**1. Kết Hợp Frontend và Backend trên cùng một Domain**

- **Mục tiêu**: Đảm bảo cả API và ứng dụng React có thể được phục vụ từ cùng một domain, giúp đơn giản hóa việc triển khai.
- **Cấu hình Server.js cho Production**:
    - Import module **`path`** của Node.js: `import path from 'path'`.
    - Xác định thư mục gốc của ứng dụng: `const __dirname = path.resolve()`.
    - Thêm đoạn code sau vào `server.js` _sau_ khi định nghĩa tất cả các route API của bạn:
        - **`if (process.env.NODE_ENV === 'production')`**: Chỉ thực hiện các bước này khi ứng dụng đang chạy trong môi trường production.
        - **Phục vụ tài sản tĩnh**: `app.use(express.static(path.join(__dirname, '../frontend/dist')))`. Điều này biến thư mục `frontend/dist` (nơi chứa các tệp build của React app) thành các tài sản tĩnh mà server có thể phục vụ.
        - **Chuyển hướng tất cả các route khác**: `app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html')))`. Điều này đảm bảo rằng bất kỳ yêu cầu nào không khớp với các route API sẽ được chuyển hướng để trả về tệp `index.html` của ứng dụng React.
- **Build Frontend**: Trong thư mục `frontend`, chạy lệnh **`npm run build`** để tạo thư mục **`dist`** chứa phiên bản production của ứng dụng React.

**2. Tạo Scripts Triển Khai**

- **Dọn dẹp môi trường local**: Xóa các thư mục `node_modules` (ở cả frontend và root) và thư mục `dist` trong `frontend` để mô phỏng môi trường triển khai sạch.
- **Cập nhật `package.json` (root)**:
    - Thêm script `build`: **`"build": "npm install && npm install --prefix frontend && npm run build --prefix frontend"`**. Script này sẽ cài đặt dependencies cho cả backend và frontend, sau đó build ứng dụng frontend.
    - Thêm script `start`: **`"start": "NODE_ENV=production node backend/server.js"`**. Script này sẽ khởi động server backend trong môi trường production, đồng thời phục vụ ứng dụng React.
    - Cập nhật script `dev`: **`"dev": "NODE_ENV=development nodemon backend/server.js"`**.
- **Kiểm tra local**: Chạy **`npm run build`** sau đó **`npm start`** từ thư mục gốc để kiểm tra xem ứng dụng React có được phục vụ từ cổng 5000 hay không.

**3. Thiết Lập GitHub Repository**

- **Khởi tạo Git**: Trong thư mục gốc, chạy **`git init`**.
- **Tạo `.gitignore`**: Tạo một tệp **`.gitignore`** trong thư mục gốc và thêm các mục cần bỏ qua như **`node_modules/`**, **`dist/`**, và **`.env`** để đảm bảo biến môi trường nhạy cảm không bị push lên GitHub.
- **Commit và Push**: Thực hiện các lệnh Git để commit code và push lên một repository mới trên GitHub.

**4. Triển Khai Lên Render.com**

- **Tạo Web Service**: Truy cập **`render.com`**, đăng nhập và tạo một **Web Service** mới. Kết nối nó với repository GitHub của bạn.
- **Cấu hình Triển khai**:
    - **Build Command**: Thiết lập là **`npm run build`**.
    - **Start Command**: Thiết lập là **`npm run start`**.
    - **Chọn Free Plan**: Lưu ý rằng gói miễn phí có thể khiến ứng dụng rơi vào trạng thái không hoạt động sau 15 phút không có lượt truy cập.
- **Thêm Biến Môi Trường**: Trong phần cấu hình của Render, thêm các biến môi trường sau:
    - **`MONGO_URI`** với giá trị từ tệp `.env` của bạn.
    - **`PORT=5000`**.
- **Triển khai**: Nhấn "Deploy Web Service" và chờ quá trình hoàn tất. Render sẽ tự động cài đặt dependencies, build frontend và khởi động server của bạn.
- **Kiểm tra ứng dụng đã triển khai**: Truy cập URL của ứng dụng đã được Render cung cấp. Kiểm tra tất cả các chức năng CRUD (tạo, đọc, cập nhật, xóa) và đảm bảo ứng dụng hoạt động responsive.

Hy vọng hướng dẫn chi tiết từng bước này sẽ giúp bạn dễ dàng hiểu và thực hiện theo video!