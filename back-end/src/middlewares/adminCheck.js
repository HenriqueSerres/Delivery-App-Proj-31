const adminCheck = (req, res, next) => {
  const { role } = req.user.data;
  if (role !== 'administrator') {
    return res.status(401).json({ message: 'You are not an administrator' });
  }
  next();
};

module.exports = adminCheck;
