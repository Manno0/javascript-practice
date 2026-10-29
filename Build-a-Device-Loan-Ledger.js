/**
 * Title: JavaScript Algorithm Lab: Device Loan Ledger
 * Description: Implements an IT hardware device loan ledger application supporting immutable checkouts and check-ins via JSON serialization, non-Date-based chronological date comparisons, and bubble-sorted overdue device reporting.
 * 
 * User Stories & Requirements:
 * 1. Models the ledger as an object with asset tags as keys, containing type, status, borrower (name/email), and dueDate properties.
 * 2. checkoutDevice(ledger, assetTag, borrower): Non-mutatively checks out a device using cloned data, updates borrower and status, and handles errors if missing or already checked out.
 * 3. checkinDevice(ledger, assetTag): Non-mutatively checks in a device using cloned data, clearing borrower and due date info, and updating status to "CheckedIn".
 * 4. listOverdueDevices(ledger, today): Returns an array of checked-out devices whose due date is strictly before today, sorted chronologically in ascending order.
 * 5. Avoids the JavaScript Date object entirely for all date parsing and comparisons.
 * 6. serializeLedger(ledger) & loadLedger(json): Converts ledger objects to JSON strings and back safely.
 */


const equipmentLedger = {
  "1": { type: "PC", status: "CheckedOut", borrower: { name: "John Smith", email: "john@acme.org" }, dueDate: "11/30/2025" },
  "2": { type: "Laptop", status: "CheckedIn", borrower: { name: "", email: "" }, dueDate: "" },
  "3": { type: "Laptop", status: "CheckedOut", borrower: { name: "Jane Doe", email: "jane@acme.org" }, dueDate: "10/31/2025" },
  "4": { type: "iPad", status: "CheckedIn", borrower: { name: "", email: "" }, dueDate: "" }
};

function serializeLedger(ledger) {
  return JSON.stringify(ledger);
}

function loadLedger(json) {
  return JSON.parse(json);
}
function checkoutDevice(ledger, assetTag, borrower){
  const copied = loadLedger(serializeLedger(ledger))

  if(!ledger[assetTag]){
    return {ledger : ledger, message : `Asset Tag : ${assetTag} - was not found!` }
  }
  if(ledger[assetTag].status === "CheckedOut"){
    return {ledger : ledger, message : `Asset Tag : ${assetTag} - device was already checked out.` }
  }
  copied[assetTag].borrower.name= borrower.name
  copied[assetTag].borrower.email = borrower.email
  copied[assetTag].status = "CheckedOut"

  return {ledger : copied, message : `Asset Tag : ${assetTag}, Borrower : ${copied[assetTag].borrower.name}` }
  
}
function checkinDevice(ledger, assetTag){
  if(!ledger[assetTag]){
    return {ledger : ledger, message : `Asset Tag : ${assetTag} - was not found!` }
  }
  const copied = loadLedger(serializeLedger(ledger))
  copied[assetTag].borrower.name = ""
  copied[assetTag].borrower.email = ""
  copied[assetTag].dueDate = ""
  copied[assetTag].status = "CheckedIn"
  return { ledger: copied, message: `Asset Tag : ${assetTag}` }

}

function isOverdue(dueDate, today){
  let isOverdue = false
  let [dueMonth, dueDay, dueYear] = dueDate.split("/").map(Number);
    
  let  [currentMonth, currentDay, currentYear] = today.split("/").map(Number);
    
  if(dueYear < currentYear){
    isOverdue = true
  }else if(dueYear == currentYear && dueMonth < currentMonth){
    isOverdue = true
  }else if(dueYear == currentYear && dueMonth == currentMonth && dueDay < currentDay){
    isOverdue = true
  }
  return isOverdue

}

function listOverdueDevices(ledger, today) {
  let overdueList = [];

  for (let assetTag of Object.keys(ledger)) {
    let asset = ledger[assetTag];
    
    if (asset.status === "CheckedOut" && isOverdue(asset.dueDate, today)) {
      overdueList.push(asset);
    }
  }

  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < overdueList.length - 1; i++) {
      if (isOverdue(overdueList[i + 1].dueDate, overdueList[i].dueDate)) {
        let temp = overdueList[i];
        overdueList[i] = overdueList[i + 1];
        overdueList[i + 1] = temp;
        
        swapped = true; 
      }
    }
} while (swapped);   

  return overdueList;
}
