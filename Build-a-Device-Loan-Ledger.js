const equipmentLedger = {
  "1": { type: "PC", status: "CheckedOut", borrower: { name: "John Smith", email: "john@acme.org" }, dueDate: "11/30/2025" },
  "2": { type: "Laptop", status: "CheckedIn", borrower: { name: "", email: "" }, dueDate: "" },
  "3": { type: "Laptop", status: "CheckedOut", borrower: { name: "Jane Doe", email: "jane@acme.org" }, dueDate: "10/31/2025" },
  "4": { type: "iPad", status: "CheckedIn", borrower: { name: "", email: "" }, dueDate: "" }
};
// 6. Serialize and Load Ledger functions using JSON
function serializeLedger(ledger) {
  return JSON.stringify(ledger);
}

function loadLedger(json) {
  return JSON.parse(json);
}

// Helper to safely clone the ledger without mutating the original
function cloneLedger(ledger) {
  return loadLedger(serializeLedger(ledger));
}

function checkoutDevice(ledger, assetTag, borrower, dueDate = "") {
  // Directly use serializeLedger and loadLedger to clone the ledger
  const clonedLedger = loadLedger(serializeLedger(ledger));

  if (!clonedLedger[assetTag]) {
    return {
      ledger: ledger,
      message: `Device with asset tag ${assetTag} was not found.`
    };
  }

  if (clonedLedger[assetTag].status === "CheckedOut") {
    return {
      ledger: ledger,
      message: `Device with asset tag ${assetTag} is already checked out.`
    };
  }

  clonedLedger[assetTag].status = "CheckedOut";
  clonedLedger[assetTag].borrower = {
    name: borrower.name || "",
    email: borrower.email || ""
  };
  if (dueDate) {
    clonedLedger[assetTag].dueDate = dueDate;
  }

  return {
    ledger: clonedLedger,
    message: `Device ${assetTag} successfully checked out to ${borrower.name}.`
  };
}

function checkinDevice(ledger, assetTag) {
  // Directly use serializeLedger and loadLedger to clone the ledger
  const clonedLedger = loadLedger(serializeLedger(ledger));

  if (!clonedLedger[assetTag]) {
    return {
      ledger: ledger,
      message: `Device with asset tag ${assetTag} was not found.`
    };
  }

  clonedLedger[assetTag].status = "CheckedIn";
  clonedLedger[assetTag].borrower = { name: "", email: "" };
  clonedLedger[assetTag].dueDate = "";

  return {
    ledger: clonedLedger,
    message: `Device ${assetTag} has been checked in successfully.`
  };
}

// Helper function to parse "MM/DD/YYYY" or "M/D/YYYY" string into a comparable numeric value without using the Date object
function parseDateString(dateStr) {
  const parts = dateStr.split("/");
  const month = parseInt(parts[0], 10);
  const day = parseInt(parts[1], 10);
  const year = parseInt(parts[2], 10);
  
  // Return a single comparable integer representation (YYYYMMDD)
  return year * 10000 + month * 100 + day;
}

// 4 & 5. List Overdue Devices Function (No JavaScript Date object used)
function listOverdueDevices(ledger, today) {
  const overdueDevices = [];
  const todayValue = parseDateString(today);

  for (const assetTag in ledger) {
    const device = ledger[assetTag];
    
    if (device.status === "CheckedOut" && device.dueDate) {
      const dueDateValue = parseDateString(device.dueDate);
      
      // Strict comparison: strictly before today
      if (dueDateValue < todayValue) {
        overdueDevices.push(device);
      }
    }
  }

  // Sort by dueDate in ascending order using custom numeric evaluation
  overdueDevices.sort((a, b) => {
    return parseDateString(a.dueDate) - parseDateString(b.dueDate);
  });

  return overdueDevices;
}
