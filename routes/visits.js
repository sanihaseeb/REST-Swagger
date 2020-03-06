/**
 * @typedef Visit
 * @property {string} id.required - Normally an auto increment number stored as string
 * @property {string} patient_id - Patient ID
 * @property {string} doctor_id - Doctor ID
 * @property {string} completed - Is it completed
 */

// Import require dependencies
const express = require('express');

// Import data store
const dataStore = require('../data');

// Instantiate an express router to be injected into the main express app
const router = express.Router();

// Callback for any call to this route (/visits)
router.use((req, res, next) => {
  // For debugging only
  console.log('Visits router middleware called @ ', Date(Date.now()).toString());
  next();
});

/**
 * Get a single visits by ID
 * @route GET /visits/{id}
 * @group Visits
 * @param {string} id.path.required - Visit ID
 * @param {string} patient_id.path - Patient ID
 * @param {string} doctor_id.path - Doctor ID
 * @param {string} completed.path - Is completed
 * @returns {Visit.model} 200 - Visit with requested ID
 * @returns {string} 404 - Requested visits not found
 * @produces application/json
 */
router.get('/:id', (req, res) => {
  const result = dataStore.visit.find(x => x.id === req.params.id);

  if (result) return res.send(result);
  else return res.status(404).send('Requested visit not found');
});

/**
 * Get all visits
 * @route GET /visits
 * @group Visits
 * @returns {Array.<Visit>} 200 - Array of visits
 * @produces application/json
 */
router.get('/', (req, res) => {
  res.send(dataStore.visit);
});


/**
 * Get a single visits by Doctor ID
 * @route GET visits/doctor_id/{doctor_id}
 * @group Visits
 * @param {string} doctor_id.path.required - Doctor ID
 * @returns {Visit.model} 200 - Visit with requested ID
 * @returns {string} 404 - Requested visits not found
 * @produces application/json
 */
router.get('/doctor_id/:doctor_id', (req, res) => {
  const result = dataStore.doctor.find(x => x.id === req.params.doctor_id);
  const finRes = dataStore.visit.find(x => x.doctor_id === result.id);
  if (finRes) return res.send(finRes);
  else return res.status(404).send('Requested visit not found');
});

/**
 * Get a single visits by Patient ID
 * @route GET visits/patient_id/{patient_id}
 * @group Visits
 * @param {string} patient_id.path.required - Patient ID
 * @returns {Visit.model} 200 - Visit with requested ID
 * @returns {string} 404 - Requested visits not found
 * @produces application/json
 */
router.get('/patient_id/:patient_id', (req, res) => {
  const result = dataStore.patient.find(x => x.id === req.params.patient_id);
  const finRes = dataStore.visit.find(x => x.patient_id === result.id);
  if (finRes) return res.send(finRes);
  else return res.status(404).send('Requested visit not found');
});

/**
 * Get all visits
 * @route GET /visits
 * @group Visits
 * @returns {Array.<Visit>} 200 - Array of visits
 * @produces application/json
 */
router.get('/', (req, res) => {
  res.send(dataStore.visit);
});

/**
 * Create a new visit with auto-generated ID
 * @route POST /visits
 * @group Visits
 * @param {Visit.model} object.body.required - Visit object without ID (if ID is provided it will be ignored)
 * @returns {Visit.model} 201 - Newly created visit with auto-generated ID
 * @returns {string} 400 - Invalid visit object provided
 * @produces application/json
 */
router.post('/', (req, res) => {
  if (!req.body || !req.body.name) return res.status(400).send('Invalid visit object');

  const newId = dataStore.visit.length + 1;
  const newVisit = { id: newId, name: req.body.name };
  dataStore.visit.push(newVisit);

  return res.status(201).send(newVisit);
});

module.exports = router;
