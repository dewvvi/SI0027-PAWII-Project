// Mini Project - Pertemuan 11-12: Middleware Error Handling Terpusat
// TODO 2: lengkapi middleware di bawah ini.
// Didaftarkan PALING AKHIR pada app.js, setelah seluruh route.

function errorHandler(err, req, res, next) {
  const status = err.status || 500;
  let message = err.message || "Terjadi kesalahan";

  if (err,name === "ValidationError"){
    status= 400;
  }else if(err,name === "CastError"){
    status=400;
    message = `Format $(err.path) tidak valid`;
  }else if (err.code ===5000){
    status=400;
    message= "data dgn nilai unik yg sdh ada";
  }

  if (err.code ===5000){
    console.error(err);
    message= "terjadi kesalaha pada server";
  }

  res.status(status.json({message}));


  // TODO: tentukan status - gunakan err.status jika ada, jika tidak default 500
  // TODO: tentukan message - gunakan err.message jika ada, jika tidak pesan default
  // TODO: jika err.name === 'ValidationError' -> status 400
  // TODO: jika err.name === 'CastError' -> status 400, message "Format {err.path} tidak valid"
  // TODO: jika err.code === 11000 (duplicate key) -> status 400, message data unik sudah ada
  // TODO: kirim res.status(status).json({ message })
}

module.exports = errorHandler;
