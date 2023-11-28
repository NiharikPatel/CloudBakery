require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const stripe = require("stripe")('sk_test_51OAS4HSEYgtTeDDcm9L0VDCekGkmGe8tXlrto0wJbp75ImW8SDZemgeEBjGCOAZp2hgT6UZyqa3Wx2KOlP3MaVMd00DH2v0RSy')

const PurchaseHistory = require("./models/purchaseHistory");

connection();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

let paymentStatus = 'false';

app.post('/api/save-order-details', async (req, res) => {
    try {
      paymentStatus = req.body.paymentStatus;
      res.status(200).json({ message: 'payment status changed' });
    
    } catch (error) {
      console.error('issue in payment:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });


app.post("/api/create-checkout-session",async(req,res)=>{
     // for saving the data 
    const {item, userId} = req.body;
      const purchaseItems = item.map((product) => ({
        name: product.name,
        quantity: product.quantity,
        amount: product.price , 
        
      }));

    // for payment purpose
    const lineItems = item.map((product) => ({
        price_data:{
            currency:"INR",
            product_data: {
                name:product.name
        },
        unit_amount:product.price * 100},
        quantity: product.quantity
    }));

    const session = await stripe.checkout.sessions.create({
        payment_method_types:["card"],
        line_items:lineItems,
        mode:"payment",
        success_url:"http://localhost:3000/success",
        cancel_url:"http://localhost:3000/cancel"
    });
    res.json({id:session.id})

    if(paymentStatus === 'true'){
        const purchaseHistory = new PurchaseHistory({
          userId: userId,
          orderitems: purchaseItems,
          });
        await purchaseHistory.save();
       paymentStatus = 'false';
      }
}) ;

app.get("/api/purchase-history", async(req, res) =>{
try {
    const userId = req.query.userId;
    const purchaseHistory = await PurchaseHistory.find({userId : userId});
    res.status(200).json(purchaseHistory)
}
catch(error){
    console.error('Error fetching purchase history:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
}
});
    

    
const port = 3001;
app.listen(port, console.log(`Listening on port ${port}...`));