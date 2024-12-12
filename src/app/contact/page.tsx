export default function Contact() {
    return (
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <p>Get in touch with us for any inquiries or support.</p>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1">Name:</label>
            <input type="text" id="name" name="name" required className="w-full p-2 border rounded" />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1">Email:</label>
            <input type="email" id="email" name="email" required className="w-full p-2 border rounded" />
          </div>
          <div>
            <label htmlFor="message" className="block mb-1">Message:</label>
            <textarea id="message" name="message" required className="w-full p-2 border rounded" rows={4}></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Send</button>
        </form>
      </div>
    )
  }
  
  