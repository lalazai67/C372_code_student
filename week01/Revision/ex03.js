const payments = [
  { petName: "Chester", amount: 50, status: "APPROVED" },
  { petName: "Mochi", amount: 80, status: "PENDING" },
  { petName: "Mira", amount: 40, status: "DECLINED" }
];

console.log("Mochi's payment status: " + payments[1].status);

for (const p of payments) {
  if (p.status === "APPROVED") {
    console.log("Pet-care service for " + p.petName + " confirmed");
  } else if (p.status === "PENDING") {
    console.log("Payment for " + p.petName + " is being processed");
  } else {
    console.log("Payment for " + p.petName + " unsuccessful");
  }
}