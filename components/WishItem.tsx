"use client";

import Link from "next/link";
import { useWishlistStore } from "@/app/_zustand/wishlistStore";

type WishItemProps = ProductInWishlist;

const WishItem = ({
  id,
  title,
  image,
  slug,
  stockAvailabillity,
}: WishItemProps) => {
  const { removeFromWishlist } = useWishlistStore();

  return (
    <tr>
      <td>
        <button
          type="button"
          className="btn btn-ghost btn-sm"
          onClick={() => removeFromWishlist(id)}
          aria-label={`Remove ${title} from wishlist`}
        >
          ×
        </button>
      </td>
      <td>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={title}
          className="mx-auto h-20 w-20 rounded-xl object-cover"
        />
      </td>
      <td className="font-semibold text-black">
        <Link href={`/product/${slug}`} className="hover:underline">
          {title}
        </Link>
      </td>
      <td>
        <span
          className={
            stockAvailabillity > 0 ? "text-green-600 font-medium" : "text-red-600 font-medium"
          }
        >
          {stockAvailabillity > 0 ? "In stock" : "Out of stock"}
        </span>
      </td>
      <td>
        <Link href={`/product/${slug}`} className="btn btn-sm bg-[var(--color-red)] text-white hover:bg-[var(--color-red-dark)] border-none">
          View product
        </Link>
      </td>
    </tr>
  );
};

export default WishItem;
