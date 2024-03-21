import { HiChevronRight } from "react-icons/hi";

const newsItems = [
  { id: 1, title: 'Test News', created_at: '2024-03-18' },
  { id: 2, title: 'Hoge', created_at: '2024-03-12' },
  { id: 3, title: 'Fuga', created_at: '2024-03-01' },
  { id: 4, title: 'Hoge Fuga', created_at: '2024-02-26' },
  { id: 5, title: 'Hogi', created_at: '2024-02-10' },
];

const News = () => {
  return (
    <section className="px-6 py-12 mt-16 bg-primary-dark flex justify-center">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center justify-center text-white">お知らせ</h2>
        <div className="bg-white sm:w-4/5 md:w-2/3 lg:w-1/2 px-10 py-5 rounded mt-16 mx-auto">
          {newsItems.map(({ id, title, created_at }) => (
            <div key={id} className="border-b last:border-0 flex justify-between items-center py-4">
              <h4 className="font-semibold">{title}</h4>
              <div className="flex items-center">
                <p className="text-slate-500 mr-2">{created_at}</p>
                <button>
                  <HiChevronRight size={22} color="gray" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default News