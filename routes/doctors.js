/**
 * @typedef Doctor
 * @property {string} id.required - Normally an auto increment number stored as string
 * @property {string} name.required - Full name
 */

// Import require dependencies
const express = require('express');

// Import data store
const dataStore = require('../data');

// Instantiate an express router to be injected into the main express app
const router = express.Router();

// Callback for any call to this route (/doctors)
router.use((req, res, next) => {
  // For debugging only
  console.log('Doctors router middleware called @ ', Date(Date.now()).toString());
  next();
});

/**
 * Get a single doctor by ID
 * @route GET /doctors/{id}
 * @group Doctors
 * @param {string} id.path.required - Doctor ID
 * @returns {Doctor.model} 200 - Doctor with requested ID
 * @returns {string} 404 - Requested doctors not found
 * @produces application/json
 */
router.get('/:id', (req, res) => {
  const result = dataStore.doctor.find(x => x.id === req.params.id);

  if (result) return res.send(result);
  else return res.status(404).send('Requested doctor not found');
});

/**
 * Get all doctors
 * @route GET /doctors
 * @group Doctors
 * @returns {Array.<Doctor} 200 - Array of doctors
 * @produces application/json
 */
router.get('/', (req, res) => {
  res.send(dataStore.doctor);
});

/**
 * Create a new doctor with auto-generated ID
 * @route POST /doctors
 * @group Doctors
 * @param {Doctor.model} object.body.required - Doctor object without ID (if ID is provided it will be ignored)
 * @returns {Doctor.model} 201 - Newly created doctor with auto-generated ID
 * @returns {string} 400 - Invalid doctor object provided
 * @produces application/json
 */
router.post('/', (req, res) => {
  if (!req.body || !req.body.name) return res.status(400).send('Invalid doctor object');

  const newId = dataStore.doctor.length + 1;
  const newDoctor = { id: newId, name: req.body.name };
  dataStore.patient.push(newDoctor);

  return res.status(201).send(newDoctor);
});

module.exports = router;
