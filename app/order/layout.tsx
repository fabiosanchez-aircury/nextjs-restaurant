import OrderSidebar from "@/components/order/OrderSidebar";
import OrderSummary from "@/components/order/OrderSummary";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="md:flex">
        <OrderSidebar></OrderSidebar>

        <main className="md:flex-1 md:h-screen md:overflow-y-scroll p-2">
          {children}
        </main>

        <OrderSummary></OrderSummary>
      </div>
    </>
  );
}
