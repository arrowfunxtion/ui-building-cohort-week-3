import { useParams } from "next/navigation";
import { useRouter } from "next/router";

export default function ViewBooking() {
  const router = useRouter();
  const bookingid = router.query.bookingid;
  return <div>Booking {bookingid}</div>;
}
