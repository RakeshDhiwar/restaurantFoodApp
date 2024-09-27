import { Client, Databases, ID , Query} from "appwrite";
import conf from "../conf/conf";

export class OrderService {
  client = new Client();
  databases;

  constructor() {
    this.client.setEndpoint(conf.appwriteUrl);
    this.client.setProject(conf.appwriteProjectId);

    this.databases = new Databases(this.client);
  }

  // Add new order

  async AddOrder({
    CustName,
    TotalAmount,
    foodsname,
    price,
    date,
    time,
    paymentStatus,
  }) {
    try {
      const promise = await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionIdOrderId,
        ID.unique(),
        {
          username: CustName,
          Foodsname: foodsname,
          Price: price,
          Date: date,
          time: time,
          TotalPrice: TotalAmount,
          PaymentStatus: paymentStatus,
        }
      );
      alert("Order Confirmed");
      return promise;
    } catch (error) {
      console.log(error);
    }
  }
  async getOrderList() {
    try {
      const promise = await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionIdOrderId,
        [
            Query.orderDesc('$createdAt'),
            Query.limit(100)
        ]
      );
      return promise;
    } catch (error) {
      console.log(error);
    }
  }
}
const orderService = new OrderService();
export default orderService;
