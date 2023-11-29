/*
Tabapay NetworkRc details
*/
const NETWORKCODES =
{
  "00": {
    "ISOReason": "Approved or completed successfully",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "01": {
    "ISOReason": "Refer to card Issuer",
    "ReasonforFailure": "Fraud",
    "ActionRequired": "Inform Customer: 'Please call the card issuing bank to resolve'"
  },
  "02": {
    "ISOReason": "Refer to card issuers special conditions",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "03": {
    "ISOReason": "Invalid Merchant",
    "ReasonforFailure": "Network Issue",
    "ActionRequired": "Contact TabaPay Support"
  },
  "04": {
    "ISOReason": "Pick-Up",
    "ReasonforFailure": "Fraud Indicator - Stolen Card",
    "ActionRequired": "Inform Customer: 'Please call the card issuing bank to resolve'"
  },
  "05": {
    "ISOReason": "Do not Honor",
    "ReasonforFailure": "issuer rejecting for various reasons",
    "ActionRequired": "Inform Customer: 'Please call the card issuing bank to resolve'"
  },
  "06": {
    "ISOReason": "Error",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "07": {
    "ISOReason": "Pick-up card, Special Conditions",
    "ReasonforFailure": "Pick up card, special condition (fraud account)",
    "ActionRequired": "Inform Customer: 'Please call the card issuing bank to resolve'"
  },
  "08": {
    "ISOReason": "Honor with identification",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "09": {
    "ISOReason": "Request in progress",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "10": {
    "ISOReason": "Approved for partial amount",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "11": {
    "ISOReason": "Approved (VIP)",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "12": {
    "ISOReason": "Invalid Transaction",
    "ReasonforFailure": "Transaction not approved by issuing bank",
    "ActionRequired": "Inform Customer: 'Please call the card issuing bank to resolve'"
  },
  "13": {
    "ISOReason": "Invalid amount",
    "ReasonforFailure": "Limit Issue",
    "ActionRequired": "Contact TabaPay Support"
  },
  "14": {
    "ISOReason": "Invalid card number (no such number)",
    "ReasonforFailure": "Consumer likely replaced their card",
    "ActionRequired": "Inform Customer: 'Please call the card issuing bank to resolve'"
  },
  "15": {
    "ISOReason": "No such issuer",
    "ReasonforFailure": "Network Issue",
    "ActionRequired": "Contact TabaPay Support"
  },
  "16": {
    "ISOReason": "Approved, update track 3",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "17": {
    "ISOReason": "Customer cancellation, reversal (unsupported)",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "18": {
    "ISOReason": "Customer dispute, chargeback (future)",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "19": {
    "ISOReason": "Re-enter transaction",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "20": {
    "ISOReason": "Invalid response",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "21": {
    "ISOReason": "No action taken, reversal (unsupported)",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "22": {
    "ISOReason": "Suspected malfunction, reversal (unsupported)",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "23": {
    "ISOReason": "Unacceptable transaction fee",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "24": {
    "ISOReason": "File update not supported by receiver",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "25": {
    "ISOReason": "Unable to locate record on file",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "26": {
    "ISOReason": "Duplicate file update record, no action",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "27": {
    "ISOReason": "File update field edit error",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "28": {
    "ISOReason": "File update record locked out",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "29": {
    "ISOReason": "File update not successful, contact acquirer",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "30": {
    "ISOReason": "Format error (may also be a reversal)",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "31": {
    "ISOReason": "Bank not supported by switch",
    "ReasonforFailure": "Network Issue",
    "ActionRequired": "Contact TabaPay Support"
  },
  "32": {
    "ISOReason": "Completed partially, reversal (unsupported)",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "33": {
    "ISOReason": "Expired card, pick-up",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "34": {
    "ISOReason": "Suspected fraud, pick-up",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "35": {
    "ISOReason": "Card acceptor contact acquirer, pick-up",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "36": {
    "ISOReason": "Restricted card, pick-up",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "37": {
    "ISOReason": "Card acceptor call acquirer security, pick-up",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "38": {
    "ISOReason": "Allowable PIN tries exceeded, pick-up",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "39": {
    "ISOReason": "No credit account",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "40": {
    "ISOReason": "Requested function not supported",
    "ReasonforFailure": "Network Issue",
    "ActionRequired": "Contact TabaPay Support"
  },
  "41": {
    "ISOReason": "Lost Card, Pick-up",
    "ReasonforFailure": "Lost card, pick up (fraud account)",
    "ActionRequired": "Inform Customer: 'Please call the card issuing bank to resolve'"
  },
  "42": {
    "ISOReason": "No universal account",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "43": {
    "ISOReason": "Stolen Card, Pick-up",
    "ReasonforFailure": "Stolen card, pick up (fraud account)",
    "ActionRequired": "Inform Customer: 'Please call the card issuing bank to resolve'"
  },
  "44": {
    "ISOReason": "No investment account",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "45": {
    "ISOReason": "Reserved for ISO use",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "46": {
    "ISOReason": "Closed Account. Do not reattempt with the same PAN or token. (Visa)",
    "ReasonforFailure": "Closed account",
    "ActionRequired": "Inform Customer: 'Revalidate account / use different PAN number'"
  },
  "47": {
    "ISOReason": "Reserved for ISO use",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "48": {
    "ISOReason": "Reserved for ISO use",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "49": {
    "ISOReason": "Reserved for ISO use",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "50": {
    "ISOReason": "Reserved for ISO use",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "51": {
    "ISOReason": "Insufficient Funds",
    "ReasonforFailure": "The card has insufficient funds to complete the purchase",
    "ActionRequired": "Inform Customer: 'Please call the card issuing bank to resolve'"
  },
  "52": {
    "ISOReason": "No checking account",
    "ReasonforFailure": "Debit card tied to Only savings account",
    "ActionRequired": "Inform Customer: 'Please call the card issuing bank to resolve'"
  },
  "53": {
    "ISOReason": "No savings account",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "54": {
    "ISOReason": "Expired Card",
    "ReasonforFailure": "Card has expired",
    "ActionRequired": "Inform Customer: 'Please call the card issuing bank to resolve'"
  },
  "55": {
    "ISOReason": "Incorrect PIN",
    "ReasonforFailure": "",
    "ActionRequired": "Ask Customer: Have you used the card at least once successfully in the past few days?"
  },
  "56": {
    "ISOReason": "No card record",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "57": {
    "ISOReason": "Transaction not permitted to CardHolder",
    "ReasonforFailure": "Transaction not approved by issuing bank",
    "ActionRequired": "Inform Customer: 'Please call the card issuing bank to resolve'"
  },
  "58": {
    "ISOReason": "Transaction not permitted to terminal (may also be a chargeback)",
    "ReasonforFailure": "Merchant issue",
    "ActionRequired": "Contact TabaPay Support"
  },
  "59": {
    "ISOReason": "Suspected fraud",
    "ReasonforFailure": "Issuer rejecting",
    "ActionRequired": "Inform Customer: 'Please call the card issuing bank to resolve'"
  },
  "60": {
    "ISOReason": "Card acceptor contact acquirer",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "61": {
    "ISOReason": "Exceeds withdrawal amount limit",
    "ReasonforFailure": "banks set limits on transactions",
    "ActionRequired": "Inform Customer: 'Please call the card issuing bank to resolve'"
  },
  "62": {
    "ISOReason": "Restricted Card",
    "ReasonforFailure": "Card Issue - card may not be activated or may be payroll or Has card",
    "ActionRequired": "Inform Customer: 'Please call the card issuing bank to resolve'"
  },
  "63": {
    "ISOReason": "Security violation (may also be a chargeback)",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "64": {
    "ISOReason": "Original amount incorrect, reversal (unsupported)",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "65": {
    "ISOReason": "Exceeds withdrawal frequency limit",
    "ReasonforFailure": "Issuer sets limits",
    "ActionRequired": "Inform Customer: 'Please call the card issuing bank to resolve'"
  },
  "66": {
    "ISOReason": "Card acceptor call acquirer security",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "67": {
    "ISOReason": "Hard Capture, Pick-Up",
    "ReasonforFailure": "Potential Fraud issue",
    "ActionRequired": "Inform Customer: 'Please call the card issuing bank to resolve'"
  },
  "68": {
    "ISOReason": "Response received too late, reversal (unsupported)",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "69": {
    "ISOReason": "Reserved for ISO",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "70": {
    "ISOReason": "Reserved for ISO",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "71": {
    "ISOReason": "Reserved for ISO",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "72": {
    "ISOReason": "Reserved for ISO",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "73": {
    "ISOReason": "Reserved for ISO",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "74": {
    "ISOReason": "Reserved for ISO",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "75": {
    "ISOReason": "Allowable number of PIN tries exceeded",
    "ReasonforFailure": "This is an ATM Only Card",
    "ActionRequired": "Inform Customer: 'Please call the card issuing bank to resolve'"
  },
  "76": {
    "ISOReason": "Key synchronization error (FIS)",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "77": {
    "ISOReason": "Reserved for private use",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "78": {
    "ISOReason": "Customer not eligible for POS (Star SM )",
    "ReasonforFailure": "This is an ATM Only Card",
    "ActionRequired": "Inform Customer: 'Please call the card issuing bank to resolve'"
  },
  "79": {
    "ISOReason": "Lifecycle declines",
    "ReasonforFailure": "Lifecycle declines (Expired Card, Invalid Card Number, etc.)",
    "ActionRequired": "Inform Customer: 'Please call the card issuing bank to resolve'"
  },
  "80": {
    "ISOReason": "Stale dated transaction (Star SM )",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "81": {
    "ISOReason": "Issuer requested standin",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "82": {
    "ISOReason": "Issuer declines",
    "ReasonforFailure": "Issuer Policy declines (Restricted Card, Transaction Not Permitted, etc.)",
    "ActionRequired": "Inform Customer: 'Please call the card issuing bank to resolve'"
  },
  "83": {
    "ISOReason": "Fraud Card-Absent Environment.",
    "ReasonforFailure": "Fraud/Security declines (Lost/Stolen Card, Security Violation, etc.)",
    "ActionRequired": "Inform Customer: 'Please call the card issuing bank to resolve'"
  },
  "84": {
    "ISOReason": "Time limit for pre-authorization reached (VISANet)",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "85": {
    "ISOReason": "Issuer has no reason to decline the transaction (Account Verification)",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "86": {
    "ISOReason": "Cannot verify PIN (VISANet)",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "87": {
    "ISOReason": "Check already posted",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "88": {
    "ISOReason": "Information not on file",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "89": {
    "ISOReason": "Card verification value (CVV) verification failed (no pickup)",
    "ReasonforFailure": "Invalid CVV",
    "ActionRequired": "Inform Customer: 'Please call the card issuing bank to resolve'"
  },
  "90": {
    "ISOReason": "Cutoff is in progress",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "91": {
    "ISOReason": "Issuer or Switch is inoperative",
    "ReasonforFailure": "Retry",
    "ActionRequired": ""
  },
  "92": {
    "ISOReason": "Financial institution or intermediate network unknown for routing",
    "ReasonforFailure": "Network issue",
    "ActionRequired": "Contact TabaPay Support"
  },
  "93": {
    "ISOReason": "Transaction cannot be completed, violation of law",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "94": {
    "ISOReason": "Duplication transaction",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "95": {
    "ISOReason": "Reconcile error",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "96": {
    "ISOReason": "System Malfunction",
    "ReasonforFailure": "Received during nights when issuer goes offline",
    "ActionRequired": "Contact TabaPay Support"
  },
  "97": {
    "ISOReason": "Reserved for national use",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "98": {
    "ISOReason": "Reserved for national use",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "99": {
    "ISOReason": "Card network fault error",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "100": {
    "ISOReason": "Do not Honor",
    "ReasonforFailure": "Issuer rejecting for various reasons. Could be a card that is not supported for debt repayment",
    "ActionRequired": "Inform Customer: 'Please call the card issuing bank to resolve'"
  },
  "101": {
    "ISOReason": "Expired Card",
    "ReasonforFailure": "Card has expired",
    "ActionRequired": "Inform Customer: 'Please call the card issuing bank to resolve'"
  },
  "107": {
    "ISOReason": "Refer to card issuer",
    "ReasonforFailure": "Fraud Indicator - Stolen Card",
    "ActionRequired": "Inform Customer: 'Please call the card issuing bank to resolve'"
  },
  "108": {
    "ISOReason": "Refer to card issuer's special condition",
    "ReasonforFailure": "Fraud",
    "ActionRequired": "Inform Customer: 'Please call the card issuing bank to resolve'"
  },
  "114": {
    "ISOReason": "No account of type requested",
    "ReasonforFailure": "No checking account associated to card",
    "ActionRequired": "Inform Customer: 'Please call the card issuing bank to resolve'"
  },
  "116": {
    "ISOReason": "Insufficient funds",
    "ReasonforFailure": "The customer does not have enough money in their accounts.",
    "ActionRequired": "Inform Customer: 'Please call the card issuing bank to resolve'"
  },
  "119": {
    "ISOReason": "Transaction not permitted to cardholder",
    "ReasonforFailure": "Transaction not approved by issuing bank",
    "ActionRequired": "Inform Customer: 'Please call the card issuing bank to resolve'"
  },
  "123": {
    "ISOReason": "Exceeds withdawal limit frequency",
    "ReasonforFailure": "Issuers do set limits for debit cards by customers.",
    "ActionRequired": "Inform Customer: 'Please call the card issuing bank to resolve'"
  },
  "209": {
    "ISOReason": "Stolen card",
    "ReasonforFailure": "Fraud Indicator - Stolen Card",
    "ActionRequired": "Inform Customer: 'Please call the card issuing bank to resolve'"
  },
  "908": {
    "ISOReason": "Transaction destination cannot be found for routing",
    "ReasonforFailure": "Network issue",
    "ActionRequired": "Contact TabaPay Support"
  },
  "E1": {
    "ISOReason": "Invalid or unsupported SEC",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "E2": {
    "ISOReason": "AVS data required",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "E3": {
    "ISOReason": "CVV2 data required",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "E4": {
    "ISOReason": "Service not allowed. Transaction not permitted to cardholder.",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "E5": {
    "ISOReason": "Service not allowed. Transaction not permitted to cardholder.",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "E6": {
    "ISOReason": "Issuer country is blocked",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "E7": {
    "ISOReason": "Incorrect MAC was sent",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "E8": {
    "ISOReason": "Standard Entry Class requirements were not met",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "E9": {
    "ISOReason": "System time out",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "EA": {
    "ISOReason": "Account length error",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "EB": {
    "ISOReason": "Check digit error",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "EC": {
    "ISOReason": "CID format error",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "ED": {
    "ISOReason": "Authorization is too old to capture",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "EE": {
    "ISOReason": "Card product code is blocked Card product code is blocked",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "EF": {
    "ISOReason": "Attempt to process a BRIC transaction on a prior PIN based transaction",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "EG": {
    "ISOReason": "CyberSource Time Out Connection to CyberSource timed out",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "EH": {
    "ISOReason": "CARD_ENT_METH supplied is not valid or required additional data not provided as defined",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "EI": {
    "ISOReason": "CARD_ID is not valid",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "EJ": {
    "ISOReason": "Required PIN block not present",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "EK": {
    "ISOReason": "Bin is not valid for pinless routing",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "EL": {
    "ISOReason": "Signature store did not complete",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "EM": {
    "ISOReason": "Debit PIN transactions must be swiped",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "EN": {
    "ISOReason": "DB proxy response was not processed within the time out period",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "EO": {
    "ISOReason": "Transaction was declined by merchant due to mismatch of CVV2 data",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "EP": {
    "ISOReason": "Transaction not allowed as per a validation rule",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "EQ": {
    "ISOReason": "There were no available gateway nodes to route transaction",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "N0": {
    "ISOReason": "Authorization life cycle unacceptable",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "N1": {
    "ISOReason": "Authorization life cycle expired",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "N2": {
    "ISOReason": "Non-receipt of requested item (future)",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "N3": {
    "ISOReason": "Non-receipt of requested item, illegible copy (future)",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "N4": {
    "ISOReason": "Transaction exceeds floor limit (future)",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "N5": {
    "ISOReason": "Declined authorization (future)",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "N6": {
    "ISOReason": "Non-matching account numbers (future)",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "N7": {
    "ISOReason": "Error in addition (future)",
    "ReasonforFailure": "Invalid/Missing CVV",
    "ActionRequired": "Inform Customer: Check CVV and retry"
  },
  "N8": {
    "ISOReason": "Altered amount (future)",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "N9": {
    "ISOReason": "Incorrect account number (future)",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "P0": {
    "ISOReason": "Missing signature (future)",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "P1": {
    "ISOReason": "Slip without card imprint (future)",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "P2": {
    "ISOReason": "Imprinting of multiple slips (future)",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "P3": {
    "ISOReason": "Canceled pre-authorization transaction (future)",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "P4": {
    "ISOReason": "Delinquent settlement (future)",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "P5": {
    "ISOReason": "Currency conversion error (future)",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "P6": {
    "ISOReason": "Credit posted as a debit (sale) (future)",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "P7": {
    "ISOReason": "Claim or defense (future)",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "P8": {
    "ISOReason": "Non-receipt of goods (future)",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "P9": {
    "ISOReason": "Defective merchandise (future)",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "Q1": {
    "ISOReason": "Card authentication failed",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "R0": {
    "ISOReason": "Fraudulent transaction prior to embossed valid date (future)",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "R1": {
    "ISOReason": "Credit not Received (future)",
    "ReasonforFailure": "R1 means the cardholder has called their bank to block the specific merchant.  the merchant should not retry the payment.",
    "ActionRequired": "Inform Customer: 'Please call the card issuing bank to resolve'"
  },
  "R2": {
    "ISOReason": "Allowable PAN entries warning -- approved",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "R3": {
    "ISOReason": "Approved with overdraft protection",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "R4": {
    "ISOReason": "Bad CVV3",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "RR": {
    "ISOReason": "Unknown Backend Processing Error",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "S0": {
    "ISOReason": "Check not acceptable for cash",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "S1": {
    "ISOReason": "Check not acceptable",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "S2": {
    "ISOReason": "Check deposit limit exceeded",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "S3": {
    "ISOReason": "Cash back limit exceeded",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "S4": {
    "ISOReason": "Check amount does not match courtesy amount",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "S5": {
    "ISOReason": "PIN not selected",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "S6": {
    "ISOReason": "PIN already selected",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "S7": {
    "ISOReason": "Unmatched voucher information",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "S8": {
    "ISOReason": "Allowable PAN entries exceeded -- denial",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "S9": {
    "ISOReason": "Expiration date mismatch",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "SA": {
    "ISOReason": "Inactive card",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "SB": {
    "ISOReason": "Expiration date mismatch (card pickup)",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "SC": {
    "ISOReason": "Item suspected for stop pay",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "SD": {
    "ISOReason": "Account closed",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "SE": {
    "ISOReason": "Ineligible account",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "SF": {
    "ISOReason": "Item submitted more than two times",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "SG": {
    "ISOReason": "No account on file - absolute",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "SH": {
    "ISOReason": "Unable to locate",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "SI": {
    "ISOReason": "General denial",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "SJ": {
    "ISOReason": "Item settled via ACH",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "SK": {
    "ISOReason": "Cross-reference card not found",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "SL": {
    "ISOReason": "Category limit exceeded",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "SM": {
    "ISOReason": "Transaction limit exceeded",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "SN": {
    "ISOReason": "Daily limit exceeded",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "SO": {
    "ISOReason": "Monthly limit exceeded",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "SP": {
    "ISOReason": "Invalid secret code",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "SQ": {
    "ISOReason": "PIN key sync error",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "SR": {
    "ISOReason": "Bad CVV2",
    "ReasonforFailure": "",
    "ActionRequired": "Inform Customer: 'Check CVV and retry'"
  },
  "SS": {
    "ISOReason": "Stop payment order",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "ST": {
    "ISOReason": "Revocation of authorization order",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "SV": {
    "ISOReason": "Stop reoccurring payments",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "T3": {
    "ISOReason": "Lost card (no pickup)",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "T4": {
    "ISOReason": "Closed account",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "T5": {
    "ISOReason": "Dormant account",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "T6": {
    "ISOReason": "Special conditions (no pick-up)",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "T7": {
    "ISOReason": "Purchase only approval for purchase with cash back transaction.",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "T9": {
    "ISOReason": "Insufficient funds for fees",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "TA": {
    "ISOReason": "ARQC validation failed for chip card",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "TB": {
    "ISOReason": "Unsafe PIN",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "ZD": {
    "ISOReason": "MasterCard Send (MoneySend) Error due to Expiration Date",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "ZN": {
    "ISOReason": "MasterCard MoneySend Decline due to Card was Declined",
    "ReasonforFailure": "Perhaps withdrawal or deposit limits exceeded",
    "ActionRequired": "Inform Customer: 'Please call the card issuing bank to resolve'"
  },
  "ZR": {
    "ISOReason": "MasterCard MoneySend Decline due to Unsupported Card",
    "ReasonforFailure": "BIN not supported.",
    "ActionRequired": "Contact TabaPay Support"
  },
  "ZU": {
    "ISOReason": "MasterCard MoneySend Error due to an Unknown Reason",
    "ReasonforFailure": "",
    "ActionRequired": "Contact TabaPay Support"
  },
  "ZX": {
    "ISOReason": "MasterCard Send (MoneySend) Decline due to an Unknown Reason",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "ZY": {
    "ISOReason": "MasterCard Send (MoneySend) Request in Unknown Status",
    "ReasonforFailure": "",
    "ActionRequired": ""
  },
  "ZZ": {
    "ISOReason": "MasterCard Send (MoneySend) Request in Unknown Status",
    "ReasonforFailure": "",
    "ActionRequired": ""
  }
};
