import React from 'react';

const NotificationCard = ({ notification }) => {
  return (
    <div className="bg-gray-700 py-2 px-4 rounded-lg shadow-md flex items-start space-x-4">
      {/* User Image */}
      <div className="size-10 rounded-full overflow-hidden">
        <img
          src={notification.image}
          alt="User"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Notification Content */}
      <div className="flex-1">
        {/* Notification Text */}
        <p className="text-white ">
          {notification.text}
        </p>

        {/* Date */}
        <p className="text-gray-400 text-sm">
          {notification.date}
        </p>
      </div>

      {/* Action (e.g., read/unread status) */}
      {notification.isNew && (
        <span className="text-sm text-orange-500 font-semibold">New</span>
      )}
    </div>
  );
};

export default NotificationCard;
