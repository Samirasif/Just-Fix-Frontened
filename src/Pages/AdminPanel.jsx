import React, { useState } from 'react';

function AdminPanel() {
  const [activeTab, setActiveTab] = useState('users');

  const renderContent = () => {
    switch (activeTab) {
      case 'users':
        return (
          <div>
            <h2 className="text-xl font-bold mb-2">Manage Users</h2>
            <ul className="list-disc pl-5">
              <li>User A – Active</li>
              <li>User B – Blocked</li>
            </ul>
          </div>
        );
      case 'services':
        return (
          <div>
            <h2 className="text-xl font-bold mb-2">Manage Services</h2>
            <ul className="list-disc pl-5">
              <li>Plumbing – Active</li>
              <li>Cleaning – Hidden</li>
            </ul>
          </div>
        );
      case 'complaints':
        return (
          <div>
            <h2 className="text-xl font-bold mb-2">Customer Complaints</h2>
            <ul className="list-disc pl-5">
              <li>Complaint #1 – Pending</li>
              <li>Complaint #2 – Resolved</li>
            </ul>
          </div>
        );
      case 'transactions':
        return (
          <div>
            <h2 className="text-xl font-bold mb-2">Recent Transactions</h2>
            <ul className="list-disc pl-5">
              <li>#TXN001 – $40 – Completed</li>
              <li>#TXN002 – $70 – Pending</li>
            </ul>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-6">
        <h1 className="text-2xl font-bold mb-6">Admin Panel</h1>
        <ul className="space-y-4">
          <li>
            <button
              onClick={() => setActiveTab('users')}
              className={`w-full text-left px-4 py-2 rounded-lg ${
                activeTab === 'users'
                  ? 'bg-blue-600 text-white'
                  : 'hover:bg-gray-200'
              }`}
            >
              Manage Users
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab('services')}
              className={`w-full text-left px-4 py-2 rounded-lg ${
                activeTab === 'services'
                  ? 'bg-blue-600 text-white'
                  : 'hover:bg-gray-200'
              }`}
            >
              Manage Services
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab('complaints')}
              className={`w-full text-left px-4 py-2 rounded-lg ${
                activeTab === 'complaints'
                  ? 'bg-blue-600 text-white'
                  : 'hover:bg-gray-200'
              }`}
            >
              Complaints
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab('transactions')}
              className={`w-full text-left px-4 py-2 rounded-lg ${
                activeTab === 'transactions'
                  ? 'bg-blue-600 text-white'
                  : 'hover:bg-gray-200'
              }`}
            >
              Transactions
            </button>
          </li>
        </ul>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-10">
        {renderContent()}
      </main>
    </div>
  );
}

export default AdminPanel;
