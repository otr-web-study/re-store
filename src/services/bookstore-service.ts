import { Book } from "types/book";

 class BookStoreService {

  data: Book[] = [
    {
      id: 1,
      title: 'Production-Ready Microservices',
      author: 'Susan J. Fowler',
      price: 32,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg'},
    {
      id: 2,
      title: 'Release It!',
      author: 'Michael T. Nygard',
      price: 45,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/414CRjLjwgL._SX403_BO1,204,203,200_.jpg'},
  ]

  async getBooks(): Promise<Book[]> {
    return new Promise((resolve, reject) => {
      return setTimeout(() => resolve(this.data), 1000);
      // return setTimeout(() => reject(new Error('Something went wrong...')), 1000);
    });
  }
}

const client = new BookStoreService();
export default client;