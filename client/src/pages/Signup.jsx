import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Signup() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        gender: '',
        age: ''
    });

    const [error, setError] = useState('');
    const [missingDetailsError, setMissingDetailsError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Check for missing fields
        const requiredFields = ['name', 'email', 'phone', 'password', 'gender', 'age'];
        const missingFields = requiredFields.filter(field => !formData[field]);
    
        if (missingFields.length > 0) {
            setMissingDetailsError('Please fill in all required fields.');
            return;
        }
    
        // Validate email
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            setError('Please enter a valid email address.');
            return;
        }
    
        // Validate password
        if (formData.password.length < 8) {
            setError('Password must be at least 8 characters long.');
            return;
        }
    
        // Validate age
        if (parseInt(formData.age, 10) < 18) {
            setError('You must be at least 18 years old to sign up.');
            return;
        }

        // Validate phone number (optional, adjust regex as needed)
        if (!/^\d{10}$/.test(formData.phone)) {
            setError('Please enter a valid phone number (10 digits).');
            return;
        }
    
        try {
            const response = await fetch('http://localhost:5000/api/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
    
            if (response.status === 409) {
                const data = await response.json();
                setError(data.msg);
                return;
            }
    
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
    
            const data = await response.json();
            console.log('Signup successful:', data);
            navigate('/login');
        } catch (error) {
            console.error('Error signing up:', error);
            setError('An error occurred while signing up. Please try again.');
        }
    };

    const handleCancel = () => {
        setFormData({
            name: '',
            email: '',
            phone: '',
            password: '',
            gender: '',
            age: ''
        });
        setError('');
        setMissingDetailsError('');
    };

    const closeModal = () => {
        setError('');
        setMissingDetailsError('');
    };

    return (
        <div className="min-h-screen  flex items-center justify-center p-4">
            <AnimatePresence>
                {(error || missingDetailsError) && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
                    >
                        <motion.div
                            initial={{ y: -50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            className="bg-gray-200 rounded-xl p-6 max-w-md w-full shadow-xl"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="shrink-0">
                                    <svg
                                        className="w-8 h-8 text-red-500"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900">Oops!</h3>
                                    <p className="text-gray-600">{error || missingDetailsError}</p>
                                </div>
                            </div>
                            <button
                                onClick={closeModal}
                                className="w-full mt-4 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors duration-200"
                            >
                                Close
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.form
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                onSubmit={handleSubmit}
                className="w-full max-w-lg bg-gray-200 rounded-2xl shadow-xl overflow-hidden"
            >
                <div className="p-8 space-y-6">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                            Create Account
                        </h2>
                        <p className="mt-2 text-gray-600">
                            Join our community today!
                        </p>
                    </div>

                    <div className="space-y-5">
                        {Object.entries(formData).map(([key, value]) => (
                            <div key={key}>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    {key.charAt(0).toUpperCase() + key.slice(1)}{' '}
                                    <span className="text-red-500">*</span>
                                </label>
                                {key === 'gender' ? (
                                    <select
                                        name={key}
                                        value={value}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                    >
                                        <option value="">Select Gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Non Binary">Non Binary</option>
                                    </select>
                                ) : (
                                    <input
                                        type={
                                            key === 'password' ? 'password' : 
                                            key === 'email' ? 'email' : 
                                            key === 'age' ? 'number' : 'text'
                                        }
                                        name={key}
                                        value={value}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                        placeholder={`Enter your ${key}`}
                                        min={key === 'age' ? '18' : undefined}
                                    />
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="flex items-center justify-between">
                        <a
                            href="/login"
                            className="text-blue-600 hover:text-blue-800 transition-colors duration-200 text-sm"
                        >
                            Already have an account? Login here
                        </a>
                    </div>

                    <div className="flex gap-4">
                        <button
                            type="button"
                            onClick={handleCancel}
                            className="flex-1 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-all duration-200"
                        >
                            Clear
                        </button>
                        <button
                            type="submit"
                            className="flex-1 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-200 hover:shadow-lg"
                        >
                            Sign Up
                        </button>
                    </div>
                </div>
            </motion.form>
        </div>
    );
}