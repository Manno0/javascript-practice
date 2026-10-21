/**
 * Title: Build a Cargo Manifest Validator

 * Description: A comprehensive script to manage, normalize, and validate shipping manifests according to strict operational criteria.
 * 
 * Functions:
 * - normalizeUnits(manifest): Non-mutatively converts manifest weight from pounds (lb) to kilograms (kg) using 1 lb = 0.45 kg.
 * - validateManifest(manifest): Non-mutatively checks all required properties (containerId, destination, weight, unit, hazmat) for missing or invalid values, returning an error object or empty object.
 * - processManifest(manifest): Evaluates validation results, logs success status and normalized total weight, or logs validation errors accordingly.
 */

// 1. Normalizes units from 'lb' to 'kg' without mutating the original object
function normalizeUnits(manifest) {
  const normalized = { ...manifest };
  if (normalized.unit === "lb") {
    normalized.weight = normalized.weight * 0.45;
    normalized.unit = "kg";
  }
  return normalized;
}

// 2. Validates all manifest properties for missing or invalid values
function validateManifest(manifest) {
  let validated = {};
  
  // Validate containerId: must be a positive integer
  if (!manifest.hasOwnProperty("containerId")) {
    validated.containerId = "Missing";
  } else if (manifest.containerId <= 0 || manifest.containerId % 1 !== 0) {
    validated.containerId = "Invalid";
  }
  
  // Validate destination: must be a non-empty string
  if (!manifest.hasOwnProperty("destination")) {
    validated.destination = "Missing";
  } else if (typeof manifest.destination !== "string" || manifest.destination.trim().length === 0) {
    validated.destination = "Invalid";
  }
  
  // Validate weight: must be a positive number
  if (!manifest.hasOwnProperty("weight")) {
    validated.weight = "Missing";
  } else if (manifest.weight <= 0 || isNaN(manifest.weight)) {
    validated.weight = "Invalid";
  }
  
  // Validate unit: must be either "kg" or "lb"
  if (!manifest.hasOwnProperty("unit")) {
    validated.unit = "Missing";
  } else if (!(["kg", "lb"]).includes(manifest.unit)) {
    validated.unit = "Invalid";
  }
  
  // Validate hazmat: must be a boolean value
  if (!manifest.hasOwnProperty("hazmat")) {
    validated.hazmat = "Missing";
  } else if (typeof manifest.hazmat !== "boolean") {
    validated.hazmat = "Invalid";
  } 

  return validated;
}

// 3. Processes the manifest by checking validation status and logging output accordingly
function processManifest(manifest) {
  const validationResult = validateManifest(manifest);
  
  // If the validation result object is empty, the manifest is valid
  if (Object.keys(validationResult).length === 0) {
    console.log(`Validation success: ${manifest.containerId}`);
    const normalized = normalizeUnits(manifest);
    console.log(`Total weight: ${normalized.weight} kg`);
  } else {
    // Otherwise, log the validation errors
    console.log(`Validation error: ${manifest.containerId}`);
    console.log(validationResult);
  }
}

function normalizeUnits(manifest) {
  const normalized = { ...manifest };
  if (normalized.unit === "lb") {
    normalized.weight = normalized.weight * 0.45;
    normalized.unit = "kg";
  }
  return normalized;
}


function validateManifest(manifest){
  let validated = {}
  if(manifest.hasOwnProperty("containerId") === false){
    validated.containerId = "Missing"
  } else if(manifest.containerId<=0 || manifest.containerId%1 !== 0){
    validated.containerId = "Invalid"
  }
  if(manifest.hasOwnProperty("destination") === false){
    validated.destination = "Missing"
  } else if(typeof manifest.destination !== "string" || manifest.destination.trim().length == 0){
    validated.destination = "Invalid"
  }
  if(manifest.hasOwnProperty("weight") === false){
    validated.weight = "Missing"
  } else if(manifest.weight<=0 || isNaN(manifest.weight)|| manifest.weight == "undefined"){
    validated.weight = "Invalid"
  }
  if(manifest.hasOwnProperty("unit") === false){
    validated.unit = "Missing"
  } else if(!(["kg", "lb"]).includes(manifest.unit)){
    validated.unit = "Invalid"
  }
  if(manifest.hasOwnProperty("hazmat") === false){
    validated.hazmat = "Missing"
  } else if(typeof manifest.hazmat !== "boolean"){
    validated.hazmat = "Invalid"
  } 

  return validated

}

function processManifest(manifest){
  if(Object.keys(validateManifest(manifest)).length === 0){
    console.log(`Validation success: ${manifest.containerId}`)
    let norm = 
    console.log(`Total weight: ${normalizeUnits(manifest)["weight"]} kg`)
  } else{
    console.log(`Validation error: ${manifest.containerId}`)
    console.log(validateManifest(manifest))
  }
}
