import ClientsSection from "@/components/sections/clients-section";
import ServicesSection from "@/components/sections/services-section";

export default function ClientsPage() {
  return (
    <main className="pt-24">
      <ClientsSection />
      <div className="mt-16">
        <ServicesSection />
      </div>
    </main>
  );
}
