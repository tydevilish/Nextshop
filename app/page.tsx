import Head from 'next/head'

const products = [
  {
    id: 1,
    name: 'Basic T-shirt',
    price: '$19.99',
    image: 'https://bdsmthai.com/wp-content/uploads/2019/09/BDSM-THAI-SHOP-_630.jpg.jpg',
  },
  {
    id: 2,
    name: 'Cool Sneakers',
    price: '$49.99',
    image: 'https://f.btwcdn.com/store-38573/product/7186a619-f04a-dbd6-5196-6492ac65ae5b.jpg',
  },
  {
    id: 3,
    name: 'Stylish Backpack',
    price: '$39.99',
    image: 'https://gourmetmarketthailand.com/_next/image?url=https%3A%2F%2Fmedia-stark.gourmetmarketthailand.com%2Fproducts%2Fcover%2F5038483198148-1.webp&w=640&q=75',
  },
]g

export default function Home() {
  return (
    <>
      <Head>
        <title>ShopEase - Home</title>
      </Head>

      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">Nextshop</h1>
          <nav className="space-x-4">
            <a href="#" className="text-gray-600 hover:text-blue-500">Home</a>
            <a href="#" className="text-gray-600 hover:text-blue-500">Shop</a>
            <a href="#" className="text-gray-600 hover:text-blue-500">Contact</a>
          </nav>
        </div>
      </header>

      <main className="bg-gray-50 min-h-screen">
        <section className="bg-blue-100 text-center py-16">
          <h2 className="text-4xl font-bold text-blue-800 mb-4">Welcome to Nextshop</h2>
          <p className="text-lg text-blue-700">Your one-stop shop for everyday essentials</p>
        </section>

        <section className="container mx-auto px-4 py-12">
          <h3 className="text-2xl font-semibold mb-6">Featured Products</h3>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {products.map(product => (
              <div key={product.id} className="bg-white rounded-lg shadow p-4">
                <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded" />
                <h4 className="mt-4 text-lg font-semibold">{product.name}</h4>
                <p className="text-blue-600 font-bold">{product.price}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-white shadow-inner py-6">
        <div className="container mx-auto text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Nextshop. All rights reserved.
        </div>
      </footer>
    </>
  )
}
