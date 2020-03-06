/**
 * @typedef Patient
 * @property {string} id.required - Normally an auto increment number stored as string
 * @property {string} name.required - Full name
 */

// Import require dependencies
const express = require('express');

// Import data store
const dataStore = require('../data');

// Instantiate an express router to be injected into the main express app
const router = express.Router();

// Callback for any call to this route (/patients)
router.use((req, res, next) => {
  // For debugging only
  console.log('Patients router middleware called @ ', Date(Date.now()).toString());
  next();
});

/**
 * Get a single patient by ID
 * @route GET /patients/{id}
 * @group Patients
 * @param {string} id.path.required - Patient ID
 * @returns {Patient.model} 200 - Patient with requested ID
 * @returns {string} 404 - Requested patient not found
 * @produces application/json
 */
router.get('/:id', (req, res) => {
  const result = dataStore.patient.find(x => x.id === req.params.id);

  if (result) return res.send(result);
  else return res.status(404).send('Requested patient not found');
});

/**
 * Get all patients
 * @route GET /patients
 * @group Patients
 * @returns {Array.<Patient>} 200 - Array of patients
 * @produces application/json
 */
router.get('/', (req, res) => {
  res.send(dataStore.patient);
});

/**
 * Create a new patient with auto-generated ID
 * @route POST /patients
 * @group Patients
 * @param {Patient.model} object.body.required - Patient object without ID (if ID is provided it will be ignored)
 * @returns {Patient.model} 201 - Newly created patient with auto-generated ID
 * @returns {string} 400 - Invalid patient object provided
 * @produces application/json
 */
router.post('/', (req, res) => {
  if (!req.body || !req.body.name) return res.status(400).send('Invalid patient object');

  const newId = dataStore.patient.length + 1;
  const newPatient = { id: newId, name: req.body.name };
  dataStore.patient.push(newPatient);

  return res.status(201).send(newPatient);
});

module.exports = router;
