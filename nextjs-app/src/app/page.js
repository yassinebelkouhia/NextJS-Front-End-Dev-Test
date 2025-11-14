import Hero from "@/components/Hero/Hero";
import ServiceCard from "@/components/ServiceCard/ServiceCard";
import ContactForm from "@/components/ContactForm/ContactForm";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <ServiceCard
        title={
          <>
            Private <br /> Charter
          </>
        }
        description="We arrange direct air charter with tailored routing, aircraft selection, and full operational oversight. Every flight is managed with speed, reliability, and discretion."
        serviceImage="/service1.jpg"
        isReversed={false}
      />
      <ServiceCard
        title="Cargo"
        description="We handle urgent and sensitive air cargo operations, including
        high-value freight, humanitarian aid, and time-critical
        shipments. Our team manages routing, compliance, and secure
        handling from start to finish."
        serviceImage="/service2.jpg"
        isReversed={true}
      />
      <ServiceCard
        title="Medevac"
        description="From ICU-equipped aircraft to ground coordination, we manage
        medical evacuations and repatriations with speed, discretion,
        and clinical oversight."
        serviceImage="/service3.jpg"
        isReversed={false}
      />
      <ServiceCard
        title={
          <>
            War <br /> Zones
          </>
        }
        description="We organize rapid evacuations from high-risk
        regions and conflict zones, coordinating aircraft, security,
        and diplomatic clearances under pressure."
        serviceImage="/service4.jpg"
        isReversed={true}
      />
      <ContactForm />
      <Footer />
    </main>
  );
}
