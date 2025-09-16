import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const TransactionDetails = () => {
  const { customOrderId } = useParams(); // 👈 grab from URL
  const [transaction, setTransaction] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTransaction = async () => {
      try {
        const res = await axios.get(
          `https://school-payment-backend-production.up.railway.app/transactions/${customOrderId}`
        );
        setTransaction(res.data);
      } catch (err) {
        setError("Transaction not found");
      } finally {
        setLoading(false);
      }
    };

    fetchTransaction();
  }, [customOrderId]);

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-red-500 text-center">{error}</p>;
  if (!transaction) return <p className="text-center">No data available</p>;

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">
        Transaction Details - {transaction.custom_order_id}
      </h2>
      <div className="bg-white shadow-md rounded p-4">
        <p><strong>Collect ID:</strong> {transaction.collect_id}</p>
        <p><strong>School ID:</strong> {transaction.school_id}</p>
        <p><strong>Student Name:</strong> {transaction.student_info?.name}</p>
        <p><strong>Gateway:</strong> {transaction.gateway}</p>
        <p><strong>Order Amount:</strong> {transaction.order_amount}</p>
        <p><strong>Transaction Amount:</strong> {transaction.transaction_amount}</p>
        <p><strong>Status:</strong> {transaction.status}</p>
        <p><strong>Payment Time:</strong> {new Date(transaction.payment_time).toLocaleString()}</p>
      </div>
    </div>
  );
};

export default TransactionDetails;
