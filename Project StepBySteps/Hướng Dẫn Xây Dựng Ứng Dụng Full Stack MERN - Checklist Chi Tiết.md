# Hướng Dẫn Xây Dựng Ứng Dụng Full Stack MERN - Checklist Chi Tiết

> Stack sử dụng: MongoDB, Express.js, React, Node.js, Vite, Chakra UI, Zustand

---

## ✅ I. Thiết Lập Môi Trường Phát Triển

### 1. Cấu trúc thư mục dự án

```
mern-app/
├── backend/
├── frontend/
├── .env
├── package.json
```

### 2. Khởi tạo Node.js cho backend

```
npm init -y
npm install express mongoose dotenv
npm install -D nodemon
```

- Thêm vào `package.json`:
    

```
"type": "module",
"scripts": {
  "dev": "nodemon backend/server.js"
}
```

### 3. Tạo file `server.js` trong `backend/`

```
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
app.use(express.json());

app.get('/', (req, res) => res.send('Server is ready'));

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server running on port ${process.env.PORT || 5000}`);
});
```

---

## ✅ II. Kết Nối MongoDB Atlas

### 1. Thiết lập MongoDB Atlas

- Tạo Cluster → User → Network Access → Lấy Connection String
    

### 2. Tạo file `.env` ở root

```
PORT=5000
MONGO_URI=mongodb+srv://user:password@cluster.mongodb.net/products
JWT_SECRET=your_jwt_secret
```

### 3. File `config/db.js`

```
import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB Connected');
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};
```

- Gọi `connectDB()` từ `server.js`
    

---

## ✅ III. Tạo Model, Routes, Controllers

### 1. Tạo `models/product.model.js`

```
import mongoose from 'mongoose';
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model('Product', productSchema);
```

### 2. Tạo `controllers/product.controller.js`

```
import Product from '../models/product.model.js';

export const getProducts = async (req, res, next) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    next(err);
  }
};

export const createProduct = async (req, res, next) => {
  try {
    const { name, price, image } = req.body;
    if (!name || !price || !image) return res.status(400).json({ message: 'Missing fields' });
    const newProduct = await Product.create({ name, price, image });
    res.status(201).json(newProduct);
  } catch (err) {
    next(err);
  }
};
```

### 3. Tạo `routes/product.route.js`

```
import express from 'express';
import { getProducts, createProduct } from '../controllers/product.controller.js';
const router = express.Router();

router.route('/').get(getProducts).post(createProduct);
export default router;
```

### 4. Import vào `server.js`

```
import productRoutes from './routes/product.route.js';
app.use('/api/products', productRoutes);
```

---

## ✅ IV. Thêm Xử Lý Lỗi Toàn Cục Middleware

### `middleware/error.js`

```
export const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode).json({ message: err.message });
};
```

- Thêm sau tất cả routes trong `server.js`:
    

```
import { errorHandler } from './middleware/error.js';
app.use(errorHandler);
```

---

## ✅ V. Thêm Xác Thực Người Dùng (JWT)

### 1. Tạo `models/user.model.js`

```
import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
}, { timestamps: true });
export default mongoose.model('User', userSchema);
```

### 2. Đăng ký & đăng nhập: `auth.controller.js`

```
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import User from '../models/user.model.js';

export const register = async (req, res) => {
  const { email, password } = req.body;
  const hashed = await bcrypt.hash(password, 10);
  const user = await User.create({ email, password: hashed });
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  res.json({ token });
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ message: 'User not found' });
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  res.json({ token });
};
```

### 3. Middleware xác thực `auth.middleware.js`

```
import jwt from 'jsonwebtoken';

export const protect = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'No token' });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch {
    res.status(401).json({ message: 'Invalid token' });
  }
};
```

- Áp dụng middleware này cho các route cần bảo vệ.
    

---

## ✅ VI. Frontend (React + Vite + Zustand + Chakra UI)

### 1. Tạo frontend và cài đặt thư viện

```
cd frontend
npm create vite@latest .
npm install
npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion zustand react-router-dom react-icons
```

### 2. Cấu hình Chakra UI và React Router

- Bọc `<App />` trong `main.jsx` với `ChakraProvider` và `BrowserRouter`
    

### 3. Tạo store Zustand: `store/product.js`

```
import { create } from 'zustand';

export const useProductStore = create((set) => ({
  products: [],
  fetchProducts: async () => {
    const res = await fetch('/api/products');
    const data = await res.json();
    set({ products: data });
  },
}));
```

### 4. Modular hóa store (gợi ý)

- Tách `actions/`, `selectors/`, và `store/` nếu app lớn.
    

---

## ✅ VII. Testing & Postman Suite

### 1. Viết test với Postman:

- Gửi request đến từng endpoint CRUD và lưu collection.
    
- Sử dụng `pm.test()` để kiểm tra status code, response structure.
    

### 2. Unit test (gợi ý nâng cao):

- Dùng `jest` và `supertest` cho các test unit/backend route.
    

---

## ✅ VIII. Deployment với Render.com

### 1. Build React

```
cd frontend
npm run build
```

### 2. Cập nhật `server.js` để serve frontend

```
import path from 'path';
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, '/frontend/dist')));
app.get('*', (req, res) =>
  res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html')));
```

### 3. Scripts trong `package.json`

```
"scripts": {
  "build": "npm install && npm install --prefix frontend && npm run build --prefix frontend",
  "start": "NODE_ENV=production node backend/server.js",
  "dev": "NODE_ENV=development nodemon backend/server.js"
}
```

### 4. Deploy trên Render

- Build command: `npm run build`
    
- Start command: `npm run start`
    
- Biến môi trường: `MONGO_URI`, `PORT`, `JWT_SECRET`
    

---

## ✅ Kết Luận

Hướng dẫn này mang đến toàn bộ quy trình học MERN stack, từ setup môi trường, xây dựng backend/frontend, xác thực người dùng, modular hóa logic, đến triển khai production.
Hướng dẫn trong file hiện tại bao gồm các kiến thức:

| Thành phần      | Mức độ cần thiết   | Đã học chưa? |
| --------------- | ------------------ | ------------ |
| Node.js         | Cốt lõi backend    | ❌ Chưa       |
| Express.js      | Framework backend  | ❌ Chưa       |
| MongoDB         | Database NoSQL     | ❌ Chưa       |
| React           | Frontend framework | ❌ Chưa       |
| Zustand         | State management   | ❌ Chưa       |
| JWT + Auth      | Bảo mật            | ❌ Chưa       |
| Vite, Chakra UI | Công cụ nâng cao   | ❌ Chưa       |
