import React from 'react';

const Notification = () => {
    // Dummy notifications data
    const notifications = [
        { id: 1, message: 'You have a new message from John Doe' },
        { id: 2, message: 'Your order has been shipped' },
        { id: 3, message: 'Reminder: Your subscription is about to expire' },
        { id: 4, message: 'You have a new follower' },
    ];

    return (
        <div className="h-screen bg-gray-100 ">
            <div className="max-w-3xl flex h-full mx-auto bg-white rounded-lg shadow-lg p-6">
                <div className="space-y-4">
                    <p className='text-center'>coming soon /notification</p>
                    {notifications.length === 0 ? (
                        <p className="text-center text-gray-500">No notifications</p>
                    ) : (
                        ""

                    )}
                </div>
            </div>
        </div>
    );
};

export default Notification;
