module.exports = {
  doctor: [
    {'id': '1', 'name': 'Frank Waiton', 'dob': '1967-07-21', 'specialty': 'Cardiology', 'address': {'street': '11 Speers Road', 'city': 'Oakville', 'province': 'Ontario', 'postal_code': 'L6J 4Z3' }},
    {'id': '2', 'name': 'Phil Mckenzie', 'dob': '1967-01-12', 'specialty': 'Gastroenterology', 'address': {'street': '3125 rue Levy', 'city': 'Montreal', 'province': 'Quebec', 'postal_code': 'H3C 5K4' }},
    {'id': '3', 'name': 'Jen Frye', 'dob': '1969-03-21', 'specialty': 'Urology', 'address': {'street': '3998 Côte Joyeuse', 'city': 'St Germain De Grantham', 'province': 'Quebec', 'postal_code': 'H0H 0H0' }},
    {'id': '4', 'name': 'Craig Helbling', 'dob': '1970-07-21', 'specialty': 'Dermatology', 'address': {'street': '543 Dry Pine Bay Rd', 'city': 'Copper Cliff', 'province': 'Ontario', 'postal_code': 'P0M 1N0' }},
    {'id': '5', 'name': 'Karen Macarthur', 'dob': '1971-02-24', 'specialty': 'Family', 'address': {'street': '4146 Water Street', 'city': 'Kitchener', 'province': 'Ontario', 'postal_code': 'N2H 5A5' }},
    {'id': '6', 'name': 'Alan Gurniak', 'dob': '1970-01-21', 'specialty': 'Oncology', 'address': {'street': '4981 Charing Cross Rd', 'city': 'Chatham', 'province': 'Ontario', 'postal_code': 'N7M 2G9' }},
    {'id': '7', 'name': 'Jose Herrera', 'dob': '1971-06-21', 'specialty': 'Neurology', 'address': {'street': '549 Fallon Drive', 'city': 'Mcgregor', 'province': 'Ontario', 'postal_code': 'N0R 1J0' }},
    {'id': '8', 'name': 'Robert Mcsweeney', 'dob': '1968-08-22', 'specialty': 'Family', 'address': {'street': '2089 Davis Drive', 'city': 'Newmarket', 'province': 'Ontario', 'postal_code': 'L3Y 4W2' }},
    {'id': '9', 'name': 'Rosalina Guerriero', 'dob': '1972-07-21', 'specialty': 'Pediatrics', 'address': {'street': '11 Speers Road', 'city': 'Oakville', 'province': 'Ontario', 'postal_code': 'L6J 4Z3' }},
    {'id': '10', 'name': 'Tim Olsen', 'dob': '1970-11-11', 'specialty': 'Opthalmology', 'address': {'street': '4146 Water Street', 'city': 'Kitchener', 'province': 'Ontario', 'postal_code': 'N2H 5A5' }}
  ],

  patient: [
    {"id": "1", "name": "John Bevins"},
    {"id": "2", "name": "John Smith"},
    {"id": "3", "name": "Jack Highland"}
],

visit: [
  {"id": "1", "patient_id": "1", "doctor_id": "1", "completed": "1"},
  {"id": "2", "patient_id": "1", "doctor_id": "4", "completed": "0"},
  {"id": "3", "patient_id": "1", "doctor_id": "9", "completed": "0"},
  {"id": "4", "patient_id": "2", "doctor_id": "2", "completed": "0"},
  {"id": "5", "patient_id": "2", "doctor_id": "10", "completed": "1"},
  {"id": "6", "patient_id": "2", "doctor_id": "7", "completed": "0"},
  {"id": "7", "patient_id": "3", "doctor_id": "3", "completed": "0"},
  {"id": "8", "patient_id": "3", "doctor_id": "4", "completed": "0"},
  {"id": "9", "patient_id": "3", "doctor_id": "1", "completed": "1"}
]


}
