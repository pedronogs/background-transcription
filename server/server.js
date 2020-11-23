const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const multer = require('multer');
const fs = require('fs');
const shell = require('shelljs');

// Server initialization
const app = express();
const router = express.Router();

// Uses multer to store audio files
var storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, './');
	},
	filename: function (req, file, cb) {
		const uniqueSuffix = Date.now();
		cb(null, file.fieldname + '-' + uniqueSuffix + '.wav');
	},
});

// Define upload variable for multer
const upload = multer({ storage: storage });

// Route for uploading .wav file and running deepspeech inference
router.post('/services/transcribe', upload.single('wavfile'), function (req, res) {
	const uploadedFile = req.file.path;

	// Convert audio file to expected output using ffmpeg
	shell.exec(`ffmpeg -i ${uploadedFile} -ac 1 -ar 16000 -y formatted_${uploadedFile}`);

	// Runs inference
	const { stdout, stderr } = shell.exec(
		`bash /home/pedronogs/Desktop/run_inference.sh -v /home/pedronogs/Desktop/deepspeech/bin/activate -m /home/pedronogs/Desktop/deepspeech_final_512.pb -a formatted_${uploadedFile}`
	);

	// Delete uploaded files after inference
	[`formatted_${uploadedFile}`, `${uploadedFile}`].forEach((file) => {
		fs.unlink(file, function (err) {
			if (err) {
				console.log('Error when deleting file: ' + err);
			}
		});
	});

	// Return json with inference output
	res.json({ output: stdout, description_or_error: stderr });
});

// Add the router and extensions
app.use('/', router);
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(5000, () => {
	console.log(`App listening at http://localhost:5000`);
});
