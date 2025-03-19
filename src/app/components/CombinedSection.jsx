import SideImageSection from './SideImageSection';
import ContactForm from './ContactForm';

export default function CombinedSection() {
  return (
    <section className="py-16 bg-white">
      
      <div className="container mx-auto px-5 flex flex-col flex-row items-start gap-8">
        
        {/* görsel kısmı */}
        <div className="md:w-1/2">
          <SideImageSection />
        </div>

        {/* iletişim formu kısmı  */}
        <div className="md:w-1/2">
          <ContactForm />
        </div>

      </div>
    </section>
  );
}
