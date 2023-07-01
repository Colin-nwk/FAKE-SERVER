export const errorHandler = (err, req, res, next) => {
  console.error("Error:", err.message);

  let status = err.status || 500;
  let message = err.message || "Internal Server Error";

  if (err.code === "ENOENT") {
    // File not found error
    status = 404;
    message = "File not found";
  } else if (err instanceof SyntaxError) {
    // JSON parsing error
    status = 400;
    message = "Invalid JSON payload";
  }

  return res.status(status).json({ error: message });
};
