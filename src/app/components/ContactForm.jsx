export default function ContactForm() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4 pt-4  text-right">
        We’d love to hear from you
      </h2>
      <form className="space-y-3">
        <input
          type="text"
          placeholder="Name*"
          className="w-full p-3 m-2 border border-black"
        />
        <input
          type="email"
          placeholder="Email*"
          className="w-full p-3 m-2 border border-black"
        />
        <input
          type="text"
          placeholder="Website URL*"
          className="w-full p-3 m-2 border border-black"
        />
        <textarea
          placeholder="Project Details*"
          className="w-full p-3 m-2 border border-black"
          rows={4}
        />
        <button className="w-full p-3 m-2 bg-black text-white font-bold">
          Send Proposal
        </button>
      </form>
    </div>
  );
}
