import { useState } from "react"

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitted: ', { name, email, message });
    setName('');
    setEmail('');
    setMessage('');
  };
  return (
    <section className="p-6 mt-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-slate-800">お問い合わせ</h2>
        <div className="mt-12">
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-slate-600">お名前</label>
              <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} className="mt-1 block w-full p-2 border border-slate-300 rounded-md" placeholder="お名前" required />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-slate-600">メールアドレス</label>
              <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} className="mt-1 block w-full p-2 border border-slate-300 rounded-md" placeholder="メールアドレス" required />
            </div>
            <div className="mb-10">
              <label htmlFor="message" className="block text-sm font-medium text-slate-600">お問い合わせ内容</label>
              <textarea id="message" value={message} onChange={e => setMessage(e.target.value)} className="mt-1 block w-full p-2 border border-slate-300 rounded-md" placeholder="お問い合わせ内容" rows={4} required></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="w-full py-2 bg-primary text-white rounded-md hover:bg-primary-dark">送信</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact