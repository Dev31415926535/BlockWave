'use client';
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";

export default function ProductDetails(params) {
  const id = params?.id;

  const [product, setProduct] = useState(null);
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState("details");

  useEffect(() => {
    // Only fetch when id is available
    if (id) {
      fetchProductDetails();
      fetchProductHistory();
    }
  }, [id]);

  const fetchProductDetails = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/getProduct/${id}`);
      setProduct(response.data);
    } catch (err) {
      console.error("Error fetching product details:", err);
      setError("Failed to load product details. Please try again.");
    }
  };

  const fetchProductHistory = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/product/${id}/history`);
      setHistory(response.data);
    } catch (err) {
      console.error("Error fetching product history:", err);
    } finally {
      setLoading(false);
    }
  };

  if (loading && !product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center p-8">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading product information...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded-xl shadow-md max-w-md w-full">
          <div className="text-red-500 text-xl font-semibold mb-4">Error</div>
          <p className="text-gray-700 mb-6">{error}</p>
          <Link href="/" className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-6">
          <Link href="/" className="text-indigo-600 hover:text-indigo-500 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Products
          </Link>
        </div>

        {product && (
          <div className="bg-white shadow overflow-hidden rounded-lg">
            <div className="px-4 py-5 sm:px-6 bg-gray-50 border-b">
              <h1 className="text-2xl font-bold text-gray-900">{product.name}</h1>
              <p className="mt-1 text-sm text-gray-500">Product ID: {id}</p>
            </div>

            <div className="border-b border-gray-200">
              <nav className="flex">
                <button
                  onClick={() => setActiveTab("details")}
                  className={`px-4 py-3 text-sm font-medium ${
                    activeTab === "details"
                      ? "border-b-2 border-indigo-500 text-indigo-600"
                      : "text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  Product Details
                </button>
                <button
                  onClick={() => setActiveTab("history")}
                  className={`ml-8 px-4 py-3 text-sm font-medium ${
                    activeTab === "history"
                      ? "border-b-2 border-indigo-500 text-indigo-600"
                      : "text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  History
                </button>
              </nav>
            </div>

            {activeTab === "details" && (
              <div className="px-4 py-5 sm:p-6">
                <dl className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">Product Name</dt>
                    <dd className="mt-1 text-sm text-gray-900">{product.name}</dd>
                  </div>
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">Manufacturer</dt>
                    <dd className="mt-1 text-sm text-gray-900">{product.manufacturer}</dd>
                  </div>
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">Location</dt>
                    <dd className="mt-1 text-sm text-gray-900">{product.location}</dd>
                  </div>
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">Created At</dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {product.createdAt ? new Date(product.createdAt).toLocaleString() : "N/A"}
                    </dd>
                  </div>
                  {product.additionalDetails && Object.entries(product.additionalDetails).map(([key, value]) => (
                    <div key={key} className="sm:col-span-1">
                      <dt className="text-sm font-medium text-gray-500">{key.charAt(0).toUpperCase() + key.slice(1)}</dt>
                      <dd className="mt-1 text-sm text-gray-900">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}

            {activeTab === "history" && (
              <div className="px-4 py-5 sm:p-6">
                {history.length > 0 ? (
                  <div className="flow-root">
                    <ul className="divide-y divide-gray-200">
                      {history.map((event, index) => (
                        <li key={index} className="py-4">
                          <div className="flex items-start">
                            <div className="flex-shrink-0 bg-indigo-100 rounded-full p-1">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div className="ml-3 flex-1">
                              <p className="text-sm font-medium text-gray-900">{event.action || "Updated"}</p>
                              <p className="mt-1 text-sm text-gray-500">
                                {event.timestamp ? new Date(event.timestamp).toLocaleString() : "N/A"}
                              </p>
                              {event.details && (
                                <div className="mt-2 text-sm text-gray-700">
                                  <ul className="list-disc pl-5 space-y-1">
                                    {Object.entries(event.details).map(([key, value]) => (
                                      <li key={key}>
                                        {key}: {typeof value === 'object' ? JSON.stringify(value) : value}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <div className="text-center py-6">
                    <p className="text-gray-500">No history available for this product.</p>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}