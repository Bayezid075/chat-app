const uploader = require("../../utils/avatarUploadUtil");
function avatarUpload(req, res, next) {
  const upload = uploader(
    "avaters",
    ["image/jpeg", "image/jpg", "image/png"],
    1000000,
    "only jpeg ,png or jpg file are allowed"
  );
  upload.any()(req, res, (error) => {
    if (error) {
      res.status(500).json({
        errors: {
          avater: {
            msg: error.message,
          },
        },
      });
    } else {
      next();
    }
  });
}
module.exports = avatarUpload;
