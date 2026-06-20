import { Link, useLocation } from 'react-router-dom';

const AccountNav = () => {
  const location = useLocation();

  const navItems = [
    { label: 'My Account', path: '/profile' },
    { label: 'My Orders', path: '/profile/orders' },
    { label: 'My Addresses', path: '/profile/addresses' },
    { label: 'My Wallet', path: '/profile/wallet' },
    { label: 'My Wishlist', path: '/profile/wishlist' },
  ];

  return (
    <div className="border-b border-gray-300 mb-8">
      <div className="flex overflow-x-auto no-scrollbar">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`px-6 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-all
                ${isActive 
                  ? 'border-black text-black font-semibold' 
                  : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default AccountNav;