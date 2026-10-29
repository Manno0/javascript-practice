const pantry = [
  { sku: "A10", name: "Tomatoes", qty: 4, expires: "2027-01-01", zone: "fridge" },
  { sku: "D43", name: "Pineapples", qty: 2, expires: "2020-01-01", zone: "general" }
];

const rawData = [
  "A10|Tomatoes|5|2027-01-01",
  "B21|Bananas|10|2027-01-01",
  "C32|Eggs|3|2027-01-01|fridge",
  "C32|Eggs|3|2027-01-01",
  "D43|Pineapples|0|2027-01-01",
  "E54|Peppers|-1|2027-01-01|fridge"
];

function parseShipment(rawData) {
  const parsed = [];
  const seenSkus = new Set();

  for (let i = 0; i < rawData.length; i++) {
    const parts = rawData[i].split("|");
    const sku = parts[0];

    if (seenSkus.has(sku)) {
      continue;
    }
    seenSkus.add(sku);

    const name = parts[1];
    const qty = Number(parts[2]);
    const expires = parts[3];
    // Default zone to "general" if not provided
    const zone = parts[4] ? parts[4] : "general";

    parsed.push({ sku, name, qty, expires, zone });
  }

  return parsed;
}

function planRestock(pantry, shipment) {
  const actions = [];
  const pantrySkus = new Set(pantry.map(item => item.sku));

  for (let i = 0; i < shipment.length; i++) {
    const item = shipment[i];
    let type;

    if (item.qty <= 0) {
      type = "discard";
    } else if (pantrySkus.has(item.sku)) {
      type = "restock";
    } else {
      type = "donate";
    }

    actions.push({ type, item });
  }

  return actions;
}

function groupByZone(actions) {
  const grouped = {};

  for (let i = 0; i < actions.length; i++) {
    const action = actions[i];
    const zone = action.item.zone || "general";

    if (!grouped[zone]) {
      grouped[zone] = [];
    }
    grouped[zone].push(action);
  }

  return grouped;
}

function clonePantry(pantry) {
  return pantry.map(item => ({ ...item }));
}

const clonedPantry = clonePantry(pantry);
const shipment = parseShipment(rawData);
const actions = planRestock(clonedPantry, shipment);
const groupedResult = groupByZone(actions);

console.log(groupedResult);
