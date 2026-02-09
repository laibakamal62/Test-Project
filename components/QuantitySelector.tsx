'use client';

import { useState } from 'react';
import { Minus, Plus } from 'lucide-react';

export default function QuantitySelector() {
    const [quantity, setQuantity] = useState(1);

    const decrease = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    const increase = () => {
        setQuantity(quantity + 1);
    };

    return (
        <div className="flex items-center border rounded-md">
            <button
                onClick={decrease}
                disabled={quantity <= 1}
                className="p-2 hover:bg-muted disabled:opacity-50 disabled:hover:bg-transparent transition-colors"
                aria-label="Decrease quantity"
            >
                <Minus className="h-4 w-4" />
            </button>
            <span className="w-12 text-center font-medium">{quantity}</span>
            <button
                onClick={increase}
                className="p-2 hover:bg-muted transition-colors"
                aria-label="Increase quantity"
            >
                <Plus className="h-4 w-4" />
            </button>
        </div>
    );
}
