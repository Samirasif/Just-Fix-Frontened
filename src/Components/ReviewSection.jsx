import React, { useState } from 'react';

function ReviewSection() {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: 'John Doe',
      rating: 4,
      comment: 'The electrician was very helpful!',
      reply: 'Thank you, glad to assist!'
    },
    {
      id: 2,
      name: 'Ayesha Akter',
      rating: 5,
      comment: 'Excellent cleaning service!',
      reply: null
    }
  ]);

  const [newRating, setNewRating] = useState(0);
  const [newComment, setNewComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newReview = {
      id: Date.now(),
      name: 'Anonymous User',
      rating: newRating,
      comment: newComment,
      reply: null
    };

    setReviews([newReview, ...reviews]);
    setNewRating(0);
    setNewComment('');
  };

  const renderStars = (count) => {
    return '★'.repeat(count) + '☆'.repeat(5 - count);
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-md rounded-xl">
      <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>

      {/* Review Form */}
      <form onSubmit={handleSubmit} className="mb-8">
        <label className="block font-medium mb-1">Your Rating</label>
        <select
          value={newRating}
          onChange={(e) => setNewRating(Number(e.target.value))}
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4"
        >
          <option value={0}>-- Select --</option>
          {[1, 2, 3, 4, 5].map((star) => (
            <option key={star} value={star}>
              {star} Star{star > 1 && 's'}
            </option>
          ))}
        </select>

        <label className="block font-medium mb-1">Your Comment</label>
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          rows="3"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4"
          placeholder="Write your review..."
          required
        ></textarea>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit Review
        </button>
      </form>

      {/* Review List */}
      <ul className="space-y-6">
        {reviews.map((review) => (
          <li key={review.id} className="border-t pt-4">
            <p className="font-semibold">{review.name}</p>
            <p className="text-yellow-500">{renderStars(review.rating)}</p>
            <p className="text-gray-700">{review.comment}</p>
            {review.reply && (
              <p className="text-sm mt-2 text-blue-600">
                <strong>Provider Reply:</strong> {review.reply}
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ReviewSection;
