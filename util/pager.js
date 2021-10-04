const { DEFAULT_PAGE_SIZE } = require("../constants/config");

exports.paginate = (req, res, next) => {
  let size = DEFAULT_PAGE_SIZE;
  let page = 1;
  if (req.query) {
    if (req.query.page) {
      try {
        const pageNo = Math.abs(req.query.page);
        if (pageNo > 0) {
          page = pageNo;
        }
      } catch (error) {}
    }
    if (req.query.size) {
      try {
        const pageSize = Math.abs(req.query.size);
        if (pageSize > 0) {
          size = pageSize;
        }
      } catch (error) {}
    }
  }
  req.page = { page, size };
  next();
};
