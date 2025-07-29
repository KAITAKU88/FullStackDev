import React, { useState, useEffect } from 'react';
import { AlertCircle, CheckCircle, Eye, EyeOff, Info, X } from 'lucide-react';

const FormValidationExamples = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    username: '',
    phone: '',
    fullName: ''
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [success, setSuccess] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [usernameChecking, setUsernameChecking] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [submitAttempted, setSubmitAttempted] = useState(false);

  // Email validation
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) return 'Email không được để trống';
    if (!emailRegex.test(email)) return 'Email không đúng định dạng. VD: example@domain.com';
    return '';
  };

  // Password validation and strength
  const validatePassword = (password) => {
    if (!password) return 'Mật khẩu không được để trống';
    if (password.length < 8) return 'Mật khẩu phải có ít nhất 8 ký tự';
    if (!/(?=.*[a-z])/.test(password)) return 'Mật khẩu phải có ít nhất 1 chữ thường';
    if (!/(?=.*[A-Z])/.test(password)) return 'Mật khẩu phải có ít nhất 1 chữ hoa';
    if (!/(?=.*\d)/.test(password)) return 'Mật khẩu phải có ít nhất 1 số';
    return '';
  };

  const calculatePasswordStrength = (password) => {
    let strength = 0;
    if (password.length >= 8) strength += 25;
    if (/(?=.*[a-z])/.test(password)) strength += 25;
    if (/(?=.*[A-Z])/.test(password)) strength += 25;
    if (/(?=.*\d)/.test(password)) strength += 25;
    if (/(?=.*[!@#$%^&*])/.test(password)) strength += 25;
    return Math.min(strength, 100);
  };

  // Phone validation
  const validatePhone = (phone) => {
    const phoneRegex = /^[0-9]{10,11}$/;
    if (!phone) return 'Số điện thoại không được để trống';
    if (!/^[0-9]+$/.test(phone)) return 'Số điện thoại chỉ được chứa số';
    if (!phoneRegex.test(phone)) return 'Số điện thoại phải có 10-11 chữ số';
    if (!phone.startsWith('0')) return 'Số điện thoại phải bắt đầu bằng số 0';
    return '';
  };

  // Username validation with async check
  const validateUsername = async (username) => {
    if (!username) return 'Tên người dùng không được để trống';
    if (username.length < 3) return 'Tên người dùng phải có ít nhất 3 ký tự';
    if (!/^[a-zA-Z0-9_]+$/.test(username)) return 'Tên người dùng chỉ được chứa chữ, số và dấu gạch dưới';
    
    // Simulate API call
    setUsernameChecking(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setUsernameChecking(false);
    
    // Simulate some usernames are taken
    const takenUsernames = ['admin', 'user', 'test', 'demo'];
    if (takenUsernames.includes(username.toLowerCase())) {
      return 'Tên người dùng đã được sử dụng';
    }
    return '';
  };

  // Handle input change
  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Real-time validation for password strength
    if (field === 'password') {
      setPasswordStrength(calculatePasswordStrength(value));
    }

    // Clear errors when user starts typing
    if (errors[field] && touched[field]) {
      const newErrors = { ...errors };
      delete newErrors[field];
      setErrors(newErrors);
    }
  };

  // Handle field blur (when user leaves field)
  const handleBlur = async (field) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    
    let error = '';
    let successMsg = '';

    switch (field) {
      case 'email':
        error = validateEmail(formData.email);
        if (!error) successMsg = 'Email hợp lệ';
        break;
      case 'password':
        error = validatePassword(formData.password);
        if (!error) successMsg = 'Mật khẩu mạnh';
        break;
      case 'confirmPassword':
        if (formData.confirmPassword !== formData.password) {
          error = 'Mật khẩu xác nhận không khớp';
        } else if (formData.confirmPassword) {
          successMsg = 'Mật khẩu khớp';
        }
        break;
      case 'phone':
        error = validatePhone(formData.phone);
        if (!error) successMsg = 'Số điện thoại hợp lệ';
        break;
      case 'username':
        error = await validateUsername(formData.username);
        if (!error) successMsg = 'Tên người dùng khả dụng';
        break;
      case 'fullName':
        if (!formData.fullName) error = 'Họ tên không được để trống';
        else if (formData.fullName.length < 2) error = 'Họ tên phải có ít nhất 2 ký tự';
        else successMsg = 'Họ tên hợp lệ';
        break;
    }

    if (error) {
      setErrors(prev => ({ ...prev, [field]: error }));
      setSuccess(prev => ({ ...prev, [field]: '' }));
    } else {
      setSuccess(prev => ({ ...prev, [field]: successMsg }));
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  // Format phone number as user types
  const formatPhoneNumber = (value) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 4) return numbers;
    if (numbers.length <= 7) return `${numbers.slice(0, 4)}-${numbers.slice(4)}`;
    return `${numbers.slice(0, 4)}-${numbers.slice(4, 7)}-${numbers.slice(7, 10)}`;
  };

  // Handle form submission
  const handleSubmit = async () => {
    setSubmitAttempted(true);

    // Validate all fields
    const allErrors = {};
    if (validateEmail(formData.email)) allErrors.email = validateEmail(formData.email);
    if (validatePassword(formData.password)) allErrors.password = validatePassword(formData.password);
    if (formData.confirmPassword !== formData.password) allErrors.confirmPassword = 'Mật khẩu xác nhận không khớp';
    if (validatePhone(formData.phone)) allErrors.phone = validatePhone(formData.phone);
    if (await validateUsername(formData.username)) allErrors.username = await validateUsername(formData.username);
    if (!formData.fullName) allErrors.fullName = 'Họ tên không được để trống';

    setErrors(allErrors);

    if (Object.keys(allErrors).length === 0) {
      setShowModal(true);
    }
  };

  // Get password strength color and text
  const getPasswordStrengthInfo = () => {
    if (passwordStrength < 25) return { color: 'bg-red-500', text: 'Rất yếu', textColor: 'text-red-600' };
    if (passwordStrength < 50) return { color: 'bg-orange-500', text: 'Yếu', textColor: 'text-orange-600' };
    if (passwordStrength < 75) return { color: 'bg-yellow-500', text: 'Trung bình', textColor: 'text-yellow-600' };
    return { color: 'bg-green-500', text: 'Mạnh', textColor: 'text-green-600' };
  };

  const strengthInfo = getPasswordStrengthInfo();

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Form Validation Examples</h1>
      
      {/* Validation Summary - Only show after submit attempt */}
      {submitAttempted && Object.keys(errors).length > 0 && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <div className="flex items-center mb-2">
            <AlertCircle className="w-5 h-5 text-red-600 mr-2" />
            <h3 className="text-red-800 font-semibold">Có {Object.keys(errors).length} lỗi cần sửa:</h3>
          </div>
          <ul className="list-disc list-inside text-red-700 text-sm space-y-1">
            {Object.entries(errors).map(([field, error]) => (
              <li key={field}>{error}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="space-y-6">
        {/* Full Name Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Họ và Tên <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={formData.fullName}
            onChange={(e) => handleInputChange('fullName', e.target.value)}
            onBlur={() => handleBlur('fullName')}
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.fullName ? 'border-red-500' : success.fullName ? 'border-green-500' : 'border-gray-300'
            }`}
            placeholder="Nhập họ và tên của bạn"
          />
          {errors.fullName && (
            <div className="flex items-center mt-1 text-red-600 text-sm">
              <X className="w-4 h-4 mr-1" />
              {errors.fullName}
            </div>
          )}
          {success.fullName && (
            <div className="flex items-center mt-1 text-green-600 text-sm">
              <CheckCircle className="w-4 h-4 mr-1" />
              {success.fullName}
            </div>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            onBlur={() => handleBlur('email')}
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.email ? 'border-red-500' : success.email ? 'border-green-500' : 'border-gray-300'
            }`}
            placeholder="example@domain.com"
          />
          {errors.email && (
            <div className="flex items-center mt-1 text-red-600 text-sm">
              <X className="w-4 h-4 mr-1" />
              {errors.email}
            </div>
          )}
          {success.email && (
            <div className="flex items-center mt-1 text-green-600 text-sm">
              <CheckCircle className="w-4 h-4 mr-1" />
              {success.email}
            </div>
          )}
        </div>

        {/* Username Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Tên người dùng <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={formData.username}
            onChange={(e) => handleInputChange('username', e.target.value.toLowerCase())}
            onBlur={() => handleBlur('username')}
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.username ? 'border-red-500' : success.username ? 'border-green-500' : 'border-gray-300'
            }`}
            placeholder="username123"
          />
          <div className="flex items-center mt-1 text-blue-600 text-sm">
            <Info className="w-4 h-4 mr-1" />
            Chỉ được dùng chữ, số và dấu gạch dưới
          </div>
          {usernameChecking && (
            <div className="flex items-center mt-1 text-blue-600 text-sm">
              <div className="animate-spin w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full mr-2"></div>
              Đang kiểm tra tính khả dụng...
            </div>
          )}
          {errors.username && !usernameChecking && (
            <div className="flex items-center mt-1 text-red-600 text-sm">
              <X className="w-4 h-4 mr-1" />
              {errors.username}
            </div>
          )}
          {success.username && !usernameChecking && (
            <div className="flex items-center mt-1 text-green-600 text-sm">
              <CheckCircle className="w-4 h-4 mr-1" />
              {success.username}
            </div>
          )}
        </div>

        {/* Password Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Mật khẩu <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              value={formData.password}
              onChange={(e) => handleInputChange('password', e.target.value)}
              onBlur={() => handleBlur('password')}
              className={`w-full px-3 py-2 pr-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.password ? 'border-red-500' : success.password ? 'border-green-500' : 'border-gray-300'
              }`}
              placeholder="Nhập mật khẩu"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
          
          {/* Password Strength Indicator */}
          {formData.password && (
            <div className="mt-2">
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm text-gray-600">Độ mạnh mật khẩu:</span>
                <span className={`text-sm font-medium ${strengthInfo.textColor}`}>
                  {strengthInfo.text}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full transition-all duration-300 ${strengthInfo.color}`}
                  style={{ width: `${passwordStrength}%` }}
                ></div>
              </div>
            </div>
          )}
          
          <div className="flex items-center mt-1 text-blue-600 text-sm">
            <Info className="w-4 h-4 mr-1" />
            Ít nhất 8 ký tự, có chữ hoa, chữ thường và số
          </div>
          {errors.password && (
            <div className="flex items-center mt-1 text-red-600 text-sm">
              <X className="w-4 h-4 mr-1" />
              {errors.password}
            </div>
          )}
          {success.password && (
            <div className="flex items-center mt-1 text-green-600 text-sm">
              <CheckCircle className="w-4 h-4 mr-1" />
              {success.password}
            </div>
          )}
        </div>

        {/* Confirm Password Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Xác nhận mật khẩu <span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            value={formData.confirmPassword}
            onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
            onBlur={() => handleBlur('confirmPassword')}
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.confirmPassword ? 'border-red-500' : success.confirmPassword ? 'border-green-500' : 'border-gray-300'
            }`}
            placeholder="Nhập lại mật khẩu"
          />
          {errors.confirmPassword && (
            <div className="flex items-center mt-1 text-red-600 text-sm">
              <X className="w-4 h-4 mr-1" />
              {errors.confirmPassword}
            </div>
          )}
          {success.confirmPassword && (
            <div className="flex items-center mt-1 text-green-600 text-sm">
              <CheckCircle className="w-4 h-4 mr-1" />
              {success.confirmPassword}
            </div>
          )}
        </div>

        {/* Phone Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Số điện thoại <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, ''); // Only allow numbers
              handleInputChange('phone', value);
            }}
            onBlur={() => handleBlur('phone')}
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.phone ? 'border-red-500' : success.phone ? 'border-green-500' : 'border-gray-300'
            }`}
            placeholder="0123456789"
            maxLength="11"
          />
          <div className="flex items-center mt-1 text-blue-600 text-sm">
            <Info className="w-4 h-4 mr-1" />
            10-11 chữ số, bắt đầu bằng số 0
          </div>
          {errors.phone && (
            <div className="flex items-center mt-1 text-red-600 text-sm">
              <X className="w-4 h-4 mr-1" />
              {errors.phone}
            </div>
          )}
          {success.phone && (
            <div className="flex items-center mt-1 text-green-600 text-sm">
              <CheckCircle className="w-4 h-4 mr-1" />
              {success.phone}
            </div>
          )}
        </div>

        {/* Submit Button - Always enabled */}
        <button
          type="button"
          onClick={handleSubmit}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
        >
          Đăng ký tài khoản
        </button>
        </div>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <div className="flex items-center mb-4">
              <CheckCircle className="w-8 h-8 text-green-600 mr-3" />
              <h3 className="text-lg font-semibold text-gray-800">Đăng ký thành công!</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Tài khoản của bạn đã được tạo thành công. Chào mừng bạn đến với hệ thống!
            </p>
            <div className="flex space-x-3">
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Tiếp tục
              </button>
              <button
                onClick={() => {
                  setShowModal(false);
                  // Reset form
                  setFormData({
                    email: '', password: '', confirmPassword: '',
                    username: '', phone: '', fullName: ''
                  });
                  setErrors({});
                  setSuccess({});
                  setTouched({});
                  setSubmitAttempted(false);
                  setPasswordStrength(0);
                }}
                className="flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400 transition-colors"
              >
                Tạo tài khoản khác
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Demo Notes */}
      <div className="mt-8 p-4 bg-blue-50 rounded-lg">
        <h3 className="font-semibold text-blue-800 mb-2">🔍 Các tính năng demo:</h3>
        <ul className="text-blue-700 text-sm space-y-1">
          <li>• Validation real-time khi rời khỏi trường (onBlur)</li>
          <li>• Password strength indicator với màu sắc</li>
          <li>• Username checking giả lập API call (thử: admin, user, test, demo)</li>
          <li>• Chỉ cho phép nhập số cho trường điện thoại</li>
          <li>• Submit button luôn active, hiển thị lỗi khi submit</li>
          <li>• Modal confirmation khi thành công</li>
          <li>• Validation summary hiển thị sau khi submit</li>
        </ul>
      </div>
    </div>
  );
};

export default FormValidationExamples;