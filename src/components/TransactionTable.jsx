import React, { useEffect, useState } from "react";
import axios from "axios";

const TransactionsTable = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const res = await axios.get("https://school-payment-backend-production.up.railway.app/transactions");
        console.log("API Response:", res.data);

        // ✅ pick transactions array
        if (res.data && Array.isArray(res.data.transactions)) {
          setTransactions(res.data.transactions);
        } else {
          setTransactions([]);
        }
      } catch (err) {
        setError("Failed to fetch transactions");
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-red-500 text-center">{error}</p>;

  return (
     <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Transactions</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 border">Collect ID</th>
              <th className="px-4 py-2 border">School ID</th>
              <th className="px-4 py-2 border">Gateway</th>
              <th className="px-4 py-2 border">Order Amount</th>
              <th className="px-4 py-2 border">Transaction Amount</th>
              <th className="px-4 py-2 border">Status</th>
              <th className="px-4 py-2 border">Custom Order ID</th>
            </tr>
          </thead>
          <tbody>
            {transactions.length > 0 ? (
              transactions.map((txn, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-100 transition-colors"
                >
                  <td className="px-4 py-2 border">{txn.collect_id}</td>
                  <td className="px-4 py-2 border text-blue-600 underline">
                    <a href={`/transactions/school/${txn.school_id}`}>
                    {txn.school_id}
                    </a>
                  </td>
                  <td className="px-4 py-2 border">{txn.gateway}</td>
                  <td className="px-4 py-2 border">{txn.order_amount}</td>
                  <td className="px-4 py-2 border">{txn.transaction_amount}</td>
                  <td
                    className={`px-4 py-2 border font-semibold ${
                      txn.status === "success"
                        ? "text-green-600"
                        : txn.status === "failed"
                        ? "text-red-600"
                        : "text-yellow-600"
                    }`}
                  >
                    {txn.status}
                  </td>
                  <td className="px-4 py-2 border text-blue-600 underline">
                      <a href={`/transactions/${txn.custom_order_id}`}>
                        {txn.custom_order_id}
                      </a>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center py-4">
                  No transactions found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
  </div>   

  );
};

export default TransactionsTable;
