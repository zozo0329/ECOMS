import fetch from "node-fetch";
import admin from "firebase-admin";
import fs from "fs";

// Load service account
const serviceAccount = JSON.parse(
  fs.readFileSync("./serviceAccountKey.json", "utf-8"),
);

// Initialize Firebase Admin
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

// Your API
const API_URL =
  "https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/products.json";

async function seed() {
  try {
    const res = await fetch(API_URL);
    const products = await res.json();

    console.log("Total products:", products.length);

    for (const product of products) {
      await db.collection("products").doc(product.id.toString()).set({
        name: product.name,
        description: product.description,
        price: product.priceCents,
        image: product.image,
        category: product.category,
      });
    }

    console.log("✅ Data migrated successfully!");
  } catch (err) {
    console.error("❌ Error:", err);
  }
}

seed();
