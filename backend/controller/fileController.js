// @desc Get file
// @route GET /api/index
const getFile = (req, res) => {
    res.status(200).json({ message: "Get File" });
};

// @desc Create file
// @route POST /api/index
const createFile = (req, res) => {
    res.status(200).json({ message: "Create File" });
};

// @desc Update file
// @route PUT /api/index/:id
const updateFile = (req, res) => {
    res.status(200).json({ message: `Update File ${req.params.id}` });
};

// @desc delete file
// @route DELETE /api/index/:id
const deleteFile = (req, res) => {
    res.status(200).json({ message: `Delete File ${req.params.id}` });
};

module.exports = {
  getFile,
  createFile,
  updateFile,
  deleteFile,
};
