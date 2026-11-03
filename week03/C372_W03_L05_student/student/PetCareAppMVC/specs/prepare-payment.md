# Feature: Prepare payment details

## 1. User goal
As a pet owner, I want to review the selected service and amount before payment.

## 2. Scope
Review selected service and amount before payment
Catalogue (ID, name, price):
1, Vaccination, 35
2, Pet Grooming, 50
3, Boarding, 80

## 3. Request
GET /payment/prepare?serviceID={id}

## 4. Service catalogue
id, service name, price
1, Vaccination, 35
2, Pet Grooming, 50
3, Boarding, 80

## 5. Successful response
HTTP 200 with exactly five JSON fields:
serviceId (number), serviceName (string), amount (number),
currency (string, "sgd"), status (string, "READY_FOR_PAYMENT").

## 6. Unsuccessful response
Unknown service: HTTP 404 with {"error":"Service not found"}.

## 7. Acceptance criteria
AC1: /payment/prepare?serviceID=1 → 200, Vaccination, amount 35
AC2: /payment/prepare?serviceID=2 → 200, Pet Grooming, amount 50
AC3: /payment/prepare?serviceID=3 → 200, Boarding, amount 80
AC4: /payment/prepare?serviceID=999 → 404 with the specified error
AC5: Each success has exactly the five agreed fields,
correct types, catalogue values, "sgd" and "READY_FOR_PAYMENT".
Access: No login required for this classroom mock.
Out of scope: charging money, gateway integration, transactions,
new database tables, EJS pages or changes to existing features.

## 8. Open questions
What should happen if serviceID is missing or malformed?
