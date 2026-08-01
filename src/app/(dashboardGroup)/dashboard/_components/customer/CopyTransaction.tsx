"use client";

import { Copy } from "lucide-react";
import { toast } from "sonner";

type Props = {
  transactionId: string;
};

const CopyTransaction = ({ transactionId }: Props) => {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(transactionId);
      toast.success("Transaction ID copied!");
    } catch {
      toast.error("Failed to copy transaction ID.");
    }
  };

  return (
    <div className="flex items-center gap-2">
      <span className="font-mono text-xs">
        {`${transactionId.slice(0, 10)}...${transactionId.slice(-6)}`}
      </span>

      <button
        type="button"
        onClick={handleCopy}
        className="rounded-md p-1 transition hover:bg-muted"
        title="Copy Transaction ID"
      >
        <Copy className="size-4" />
      </button>
    </div>
  );
};

export default CopyTransaction;
