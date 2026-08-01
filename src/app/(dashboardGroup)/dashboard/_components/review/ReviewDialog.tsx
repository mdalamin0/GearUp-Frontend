"use client";

import { useState } from "react";
import { Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import { createReview } from "../../_actions/customer/createReview";

type Props = {
  gearId: string;
};

const ReviewDialog = ({ gearId }: Props) => {
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);

const handleSubmit = async () => {
  if (rating === 0) {
    toast.error("Please select a rating.");
    return;
  }

  if (!comment.trim()) {
    toast.error("Please write your review.");
    return;
  }

  const payload = {
    gearItemId: gearId,
    rating,
    comment,
  };

  try {
    setLoading(true);

    await createReview(payload);

    toast.success("Review submitted successfully.");

    setComment("");
    setRating(0);

    setOpen(false);
  } catch (error) {
    toast.error(
      error instanceof Error ? error.message : "Failed to submit review.",
    );
  } finally {
    setLoading(false);
  }
};

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="sm" variant="outline">
          Leave Review
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md rounded-2xl">
        <DialogHeader>
          <DialogTitle>Leave a Review</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Rating */}

          <div className="space-y-3">
            <p className="text-sm font-medium">Your Rating</p>
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setRating(item)}
                  className="transition hover:scale-110"
                >
                  <Star
                    className={`size-7 transition-colors ${
                      item <= rating
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Review */}

          <div className="space-y-3">
            <p className="text-sm font-medium">Your Review</p>

            <Textarea
              rows={5}
              placeholder="Share your experience..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>

          <Button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full h-11 rounded-xl"
          >
            {loading ? "Submitting..." : "Submit Review"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ReviewDialog;
